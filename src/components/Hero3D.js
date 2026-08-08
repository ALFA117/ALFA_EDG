import React, { Suspense, useEffect, useMemo, useRef, useState } from 'react';
import { Canvas, extend, useFrame, useThree } from '@react-three/fiber';
import { useAspect, useTexture } from '@react-three/drei';
import * as THREE from 'three/webgpu';
import { bloom } from 'three/examples/jsm/tsl/display/BloomNode.js';
import {
  abs,
  add,
  blendScreen,
  float,
  mix,
  mod,
  mx_cell_noise_float,
  oneMinus,
  pass,
  smoothstep,
  texture,
  uniform,
  uv,
  vec2,
  vec3,
} from 'three/tsl';

const TEXTUREMAP_SRC = 'https://i.postimg.cc/XYwvXN8D/img-4.png';
const DEPTHMAP_SRC = 'https://i.postimg.cc/2SHKQh2q/raw-4.webp';

extend(THREE);

const WIDTH = 300;
const HEIGHT = 300;

// Cuánto pesa el scroll vs. la deriva "idle" en la animación (0 = solo idle, 1 = solo scroll).
const SCROLL_INFLUENCE = 0.7;

function useNormalizedScroll() {
  const scrollRef = useRef(0);

  useEffect(() => {
    function update() {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      scrollRef.current = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
    }
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  return scrollRef;
}

function driveValue(clock, scrollRef) {
  const idle = Math.sin(clock.getElapsedTime() * 0.3) * 0.5 + 0.5;
  return THREE.MathUtils.lerp(idle, scrollRef.current, SCROLL_INFLUENCE);
}

function PostProcessing({ scrollRef, strength = 0.6, threshold = 1.1, fullScreenEffect = true }) {
  const { gl, scene, camera } = useThree();
  const progressRef = useRef({ value: 0 });

  const render = useMemo(() => {
    const postProcessing = new THREE.PostProcessing(gl);
    const scenePass = pass(scene, camera);
    const scenePassColor = scenePass.getTextureNode('output');
    const bloomPass = bloom(scenePassColor, strength, 0.5, threshold);

    const uScanProgress = uniform(0);
    progressRef.current = uScanProgress;

    const scanPos = float(uScanProgress.value);
    const uvY = uv().y;
    const scanWidth = float(0.05);
    const scanLine = smoothstep(0, scanWidth, abs(uvY.sub(scanPos)));
    const redOverlay = vec3(1, 0, 0).mul(oneMinus(scanLine)).mul(0.25);

    const withScanEffect = mix(
      scenePassColor,
      add(scenePassColor, redOverlay),
      fullScreenEffect ? smoothstep(0.9, 1.0, oneMinus(scanLine)) : 1.0
    );

    const final = withScanEffect.add(bloomPass);
    postProcessing.outputNode = final;
    return postProcessing;
  }, [camera, gl, scene, strength, threshold, fullScreenEffect]);

  useFrame(({ clock }) => {
    progressRef.current.value = driveValue(clock, scrollRef);
    render.renderAsync();
  }, 1);

  return null;
}

function Scene({ scrollRef }) {
  const [rawMap, depthMap] = useTexture([TEXTUREMAP_SRC, DEPTHMAP_SRC]);
  const meshRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (rawMap && depthMap) setVisible(true);
  }, [rawMap, depthMap]);

  const { material, uniforms } = useMemo(() => {
    const uPointer = uniform(new THREE.Vector2(0));
    const uProgress = uniform(0);
    const strength = 0.012;

    const tDepthMap = texture(depthMap);
    const tMap = texture(rawMap, uv().add(tDepthMap.r.mul(uPointer).mul(strength)));

    const aspect = float(WIDTH).div(HEIGHT);
    const tUv = vec2(uv().x.mul(aspect), uv().y);

    const tiling = vec2(120.0);
    const tiledUv = mod(tUv.mul(tiling), 2.0).sub(1.0);

    const brightness = mx_cell_noise_float(tUv.mul(tiling).div(2));

    const dist = float(tiledUv.length());
    const dot = float(smoothstep(0.5, 0.49, dist)).mul(brightness);

    const flow = oneMinus(smoothstep(0, 0.02, abs(tDepthMap.sub(uProgress))));
    const mask = dot.mul(flow).mul(vec3(5, 0, 0));
    const final = blendScreen(tMap, mask);

    const material = new THREE.MeshBasicNodeMaterial({
      colorNode: final,
      transparent: true,
      opacity: 0,
    });

    return { material, uniforms: { uPointer, uProgress } };
  }, [rawMap, depthMap]);

  const [w, h] = useAspect(WIDTH, HEIGHT);

  useFrame(({ clock }) => {
    uniforms.uProgress.value = driveValue(clock, scrollRef);
    if (meshRef.current && meshRef.current.material) {
      const mat = meshRef.current.material;
      mat.opacity = THREE.MathUtils.lerp(mat.opacity, visible ? 0.85 : 0, 0.07);
    }
  });

  useFrame(({ pointer }) => {
    uniforms.uPointer.value = pointer;
  });

  // >1 para cubrir toda la pantalla (antes vivía solo dentro del hero).
  const scaleFactor = 1.15;
  return (
    <mesh ref={meshRef} scale={[w * scaleFactor, h * scaleFactor, 1]} material={material}>
      <planeGeometry />
    </mesh>
  );
}

function isWebGPUSupported() {
  return typeof navigator !== 'undefined' && !!navigator.gpu;
}

function prefersReducedMotion() {
  return (
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );
}

function Hero3D() {
  const [supported, setSupported] = useState(false);
  const scrollRef = useNormalizedScroll();

  useEffect(() => {
    setSupported(isWebGPUSupported() && !prefersReducedMotion());
  }, []);

  if (!supported) return null;

  return (
    <>
      <div className="hero3d-bg" aria-hidden="true">
        <Canvas
          flat
          eventSource={document.body}
          eventPrefix="client"
          gl={async (props) => {
            const renderer = new THREE.WebGPURenderer(props);
            await renderer.init();
            return renderer;
          }}
        >
          <Suspense fallback={null}>
            <PostProcessing fullScreenEffect scrollRef={scrollRef} />
            <Scene scrollRef={scrollRef} />
          </Suspense>
        </Canvas>
      </div>
      <div className="hero3d-scrim" aria-hidden="true" />
    </>
  );
}

export default Hero3D;
