import React, { useEffect, useRef } from 'react';
import { useReducedMotion } from 'framer-motion';

const SPEED = 0.12;

// Densidad según pantalla: el costo es O(n²) por cuadro, y en un celular
// 110 nodos se veían como ruido encima del texto además de gastar batería.
function densityFor(width) {
  if (width < 640) return { count: 36, linkDist: 120, radius: 2 };
  if (width < 1100) return { count: 64, linkDist: 150, radius: 2.5 };
  return { count: 90, linkDist: 170, radius: 3 };
}

function makeNodes(n, width, height) {
  return Array.from({ length: n }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    vx: (Math.random() - 0.5) * SPEED,
    vy: (Math.random() - 0.5) * SPEED,
  }));
}

// Constelación de nodos a la deriva en el verde de señal. Capa fija detrás
// de todo (ver .page__network); se pausa con la pestaña oculta y queda
// como un cuadro estático con movimiento reducido.
function ParticleNetwork({ className }) {
  const canvasRef = useRef(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;
    const ctx = canvas.getContext('2d');
    let width = 0;
    let height = 0;
    let nodes = [];
    let density = densityFor(window.innerWidth);
    let raf = 0;
    let running = false;

    const readSignal = () =>
      getComputedStyle(document.documentElement).getPropertyValue('--color-signal-rgb').trim() ||
      '62, 232, 120';
    let signal = readSignal();

    // En móvil `resize` se dispara a media deslizada cuando la barra de
    // direcciones se colapsa; solo se reescala y se acomodan los nodos
    // existentes, nunca se re-generan (se vería un salto).
    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const next = densityFor(width);
      if (nodes.length === 0 || next.count !== density.count) {
        density = next;
        nodes = makeNodes(density.count, width, height);
      } else {
        for (const n of nodes) {
          n.x = Math.min(n.x, width);
          n.y = Math.min(n.y, height);
        }
      }
      if (!running) draw();
    }

    function draw() {
      const { linkDist, radius } = density;
      ctx.clearRect(0, 0, width, height);
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.hypot(dx, dy);
          if (dist < linkDist) {
            ctx.strokeStyle = `rgba(${signal}, ${0.3 * (1 - dist / linkDist)})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }
      ctx.fillStyle = `rgba(${signal}, 0.7)`;
      for (const n of nodes) {
        ctx.beginPath();
        ctx.arc(n.x, n.y, radius, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    function step() {
      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > width) n.vx *= -1;
        if (n.y < 0 || n.y > height) n.vy *= -1;
      }
      draw();
      raf = requestAnimationFrame(step);
    }

    function start() {
      if (running || reduceMotion || document.hidden) return;
      running = true;
      raf = requestAnimationFrame(step);
    }

    function stop() {
      running = false;
      cancelAnimationFrame(raf);
    }

    let resizeTimer;
    const onWindowResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(resize, 120);
    };
    const onVisibility = () => (document.hidden ? stop() : start());
    // El color de señal cambia con el tema: se relee al cambiar data-theme.
    const themeObserver = new MutationObserver(() => {
      signal = readSignal();
      if (!running) draw();
    });
    themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });

    resize();
    start();
    window.addEventListener('resize', onWindowResize);
    document.addEventListener('visibilitychange', onVisibility);
    return () => {
      stop();
      clearTimeout(resizeTimer);
      themeObserver.disconnect();
      window.removeEventListener('resize', onWindowResize);
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, [reduceMotion]);

  return <canvas ref={canvasRef} className={className} aria-hidden="true" />;
}

export default ParticleNetwork;
