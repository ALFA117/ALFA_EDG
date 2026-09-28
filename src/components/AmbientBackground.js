import React, { useEffect, useState } from 'react';
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion';
import ParticleNetwork from './ParticleNetwork';

/* Escena de fondo (receta 5 del dado: objetos del tema flotando en CSS 3D).
   Capa lejana: la constelación de nodos de siempre. Capa cercana: los
   objetos de este portafolio — monedas α con canto real (Web3), bloques de
   cadena (infra) y tarjetas de terminal que voltean (el ~$ de la marca).
   Parallax por profundidad con el puntero (escritorio) y el scroll; al
   pasar el hero la escena se calma. Solo transform y opacity. */

// x/y en % de la ventana; depth 0 (lejos) … 1 (cerca); mobile: se queda en celular.
// Con el hero apilado (< 900px) usan mx/my: a las orillas, lejos del título.
const OBJECTS = [
  { kind: 'coin', x: 82, y: 12, mx: 86, my: 20, size: 96, depth: 0.9, spin: 12, mobile: true },
  { kind: 'block', x: 6, y: 58, mx: -4, my: 80, size: 64, depth: 0.7, spin: 22, tone: 'infra', mobile: true },
  { kind: 'card', x: 70, y: 70, mx: 84, my: 90, size: 128, depth: 0.55, spin: 9, tone: 'ia' },
  { kind: 'coin', x: 90, y: 80, size: 56, depth: 0.4, spin: 10, delay: -4 },
  { kind: 'block', x: 90, y: 44, mx: 90, my: 62, size: 44, depth: 0.35, spin: 18, delay: -6, tone: 'signal', mobile: true },
  { kind: 'card', x: 7, y: 84, mx: -2, my: 94, size: 96, depth: 0.3, spin: 11, delay: -5, tone: 'infra' },
  { kind: 'coin', x: 58, y: 4, size: 40, depth: 0.2, spin: 8, delay: -2 },
];

const COIN_EDGE = 16;

function Coin({ size }) {
  const r = size / 2;
  const t = Math.max(6, Math.round(size * 0.1));
  const seg = (2 * Math.PI * r) / COIN_EDGE + 1;
  return (
    <>
      <span
        className="amb-coin__face"
        style={{ width: size, height: size, fontSize: size * 0.56, transform: `translateZ(${t / 2}px)` }}
      >
        α
      </span>
      <span
        className="amb-coin__face amb-coin__face--back"
        style={{ width: size, height: size, transform: `rotateY(180deg) translateZ(${t / 2}px)` }}
      />
      {Array.from({ length: COIN_EDGE }, (_, i) => (
        <span
          key={i}
          className="amb-coin__edge"
          style={{
            width: seg,
            height: t,
            left: r - seg / 2,
            top: r - t / 2,
            transform: `rotateZ(${(i * 360) / COIN_EDGE}deg) translateY(${r}px) rotateX(90deg)`,
          }}
        />
      ))}
    </>
  );
}

function Block({ size }) {
  const h = size / 2;
  const faces = [
    `rotateY(0deg) translateZ(${h}px)`,
    `rotateY(90deg) translateZ(${h}px)`,
    `rotateY(180deg) translateZ(${h}px)`,
    `rotateY(-90deg) translateZ(${h}px)`,
    `rotateX(90deg) translateZ(${h}px)`,
    `rotateX(-90deg) translateZ(${h}px)`,
  ];
  return faces.map((transform, i) => (
    <span key={i} className="amb-block__face" style={{ width: size, height: size, transform }} />
  ));
}

function Card({ size }) {
  const w = size;
  const h = Math.round(size * 0.62);
  return (
    <>
      <span className="amb-card__face" style={{ width: w, height: h }}>
        <span className="amb-card__dots" />
        <span className="amb-card__line amb-card__line--prompt" />
        <span className="amb-card__line" style={{ width: '70%' }} />
        <span className="amb-card__line" style={{ width: '45%' }} />
      </span>
      <span className="amb-card__face amb-card__face--back" style={{ width: w, height: h, fontSize: h * 0.6 }}>
        α
      </span>
    </>
  );
}

function Floater({ obj, px, py, scrollY, animate, stacked }) {
  const k = obj.depth;
  const pointerX = useTransform(px, (v) => v * 28 * k);
  const pointerY = useTransform(py, (v) => v * 20 * k);
  const scrollShift = useTransform(scrollY, (v) => -Math.min(v, 2400) * 0.12 * k);
  const y = useTransform([pointerY, scrollShift], ([a, b]) => a + b);
  const box = obj.kind === 'card' ? { w: obj.size, h: Math.round(obj.size * 0.62) } : { w: obj.size, h: obj.size };
  return (
    <motion.div
      className="amb-float"
      style={{
        left: `${stacked && obj.mx !== undefined ? obj.mx : obj.x}%`,
        top: `${stacked && obj.my !== undefined ? obj.my : obj.y}%`,
        x: pointerX,
        y,
        scale: 0.7 + k * 0.4,
        opacity: 0.45 + k * 0.55,
      }}
    >
      <div
        className={`amb-bob${animate ? ' amb-animate' : ''}`}
        style={{ animationDuration: `${6 + obj.spin / 2}s`, animationDelay: `${obj.delay || 0}s` }}
      >
        <div
          className={`amb-obj amb-obj--${obj.kind}${obj.tone ? ` amb-tone--${obj.tone}` : ''}${animate ? ' amb-animate' : ''}`}
          style={{
            width: box.w,
            height: box.h,
            animationDuration: `${obj.spin}s`,
            animationDelay: `${obj.delay || 0}s`,
          }}
        >
          {obj.kind === 'coin' && <Coin size={obj.size} />}
          {obj.kind === 'block' && <Block size={obj.size} />}
          {obj.kind === 'card' && <Card size={obj.size} />}
        </div>
      </div>
    </motion.div>
  );
}

function useMedia(query) {
  const [match, setMatch] = useState(() => window.matchMedia(query).matches);
  useEffect(() => {
    const mq = window.matchMedia(query);
    const update = () => setMatch(mq.matches);
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, [query]);
  return match;
}

function AmbientBackground() {
  const reduce = useReducedMotion() ?? false;
  const mobile = useMedia('(max-width: 767px)');
  const stacked = useMedia('(max-width: 899px)');

  // Pausa las animaciones CSS con la pestaña oculta (el canvas ya se pausa solo).
  const [hidden, setHidden] = useState(document.hidden);
  useEffect(() => {
    const onVis = () => setHidden(document.hidden);
    document.addEventListener('visibilitychange', onVis);
    return () => document.removeEventListener('visibilitychange', onVis);
  }, []);

  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const px = useSpring(rx, { stiffness: 40, damping: 18 });
  const py = useSpring(ry, { stiffness: 40, damping: 18 });
  useEffect(() => {
    if (reduce || !window.matchMedia('(pointer: fine)').matches) return undefined;
    const onMove = (e) => {
      rx.set((e.clientX / window.innerWidth - 0.5) * 2);
      ry.set((e.clientY / window.innerHeight - 0.5) * 2);
    };
    window.addEventListener('pointermove', onMove, { passive: true });
    return () => window.removeEventListener('pointermove', onMove);
  }, [reduce, rx, ry]);

  const { scrollY } = useScroll();
  const smoothScroll = useSpring(scrollY, { stiffness: 80, damping: 24 });
  const still = useMotionValue(0);
  const scrollSource = reduce ? still : smoothScroll;
  // Completa en el hero, tranquila en el resto de la página.
  const stageOpacity = useTransform(scrollSource, [0, 700], [1, 0.4]);
  const farX = useTransform(px, (v) => v * -8);
  const farY = useTransform([py, scrollSource], ([a, b]) => a * -6 - Math.min(b, 2400) * 0.03);

  const animate = !reduce && !hidden;
  const list = mobile ? OBJECTS.filter((o) => o.mobile) : OBJECTS;

  return (
    <div className="amb-root" aria-hidden="true">
      <div className="amb-scan" />
      <div className={`amb-glow${animate ? ' amb-animate' : ''}`} />
      <motion.div className="amb-far" style={{ x: farX, y: farY }}>
        <ParticleNetwork className="amb-network" />
      </motion.div>
      <div className="amb-tint">
        <motion.div className="amb-stage" style={{ opacity: stageOpacity }}>
          {list.map((obj, i) => (
            <Floater key={i} obj={obj} px={px} py={py} scrollY={scrollSource} animate={animate} stacked={stacked} />
          ))}
        </motion.div>
      </div>
      <div className="amb-vignette" />
    </div>
  );
}

export default AmbientBackground;
