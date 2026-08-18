import React, { useEffect, useRef } from 'react';
import { useReducedMotion } from 'framer-motion';

const NODE_COUNT = 110;
const LINK_DIST = 180;
const SPEED = 0.12;
const NODE_RADIUS = 5.6;

function makeNodes(width, height) {
  return Array.from({ length: NODE_COUNT }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    vx: (Math.random() - 0.5) * SPEED,
    vy: (Math.random() - 0.5) * SPEED,
  }));
}

// A constellation of drifting nodes connected by fading lines — the same
// "3D-ish" tech-web motif as the AVS reference, redrawn in our signal
// green instead of introducing new colors.
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
    let raf;

    const signal = getComputedStyle(document.documentElement)
      .getPropertyValue('--color-signal-rgb')
      .trim() || '62, 232, 120';

    // Mobile browsers fire `resize` mid-scroll whenever the address bar
    // collapses/expands (window.innerHeight changes with no user resize).
    // Re-rolling node positions on every one of those made the whole
    // network visibly jump during a fast swipe. Resize now only rescales
    // the canvas and clamps existing nodes into the new bounds — it never
    // throws away and re-randomizes positions after the first paint.
    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      if (nodes.length === 0) {
        nodes = makeNodes(width, height);
      } else {
        for (const n of nodes) {
          n.x = Math.min(n.x, width);
          n.y = Math.min(n.y, height);
        }
      }
    }

    let resizeTimer;
    function onWindowResize() {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(resize, 120);
    }

    function step() {
      ctx.clearRect(0, 0, width, height);
      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > width) n.vx *= -1;
        if (n.y < 0 || n.y > height) n.vy *= -1;
      }
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.hypot(dx, dy);
          if (dist < LINK_DIST) {
            ctx.strokeStyle = `rgba(${signal}, ${0.32 * (1 - dist / LINK_DIST)})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }
      for (const n of nodes) {
        ctx.fillStyle = `rgba(${signal}, 0.85)`;
        ctx.beginPath();
        ctx.arc(n.x, n.y, NODE_RADIUS, 0, Math.PI * 2);
        ctx.fill();
      }
      if (!reduceMotion) raf = requestAnimationFrame(step);
    }

    resize();
    step();
    window.addEventListener('resize', onWindowResize);
    return () => {
      window.removeEventListener('resize', onWindowResize);
      clearTimeout(resizeTimer);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [reduceMotion]);

  return <canvas ref={canvasRef} className={className} aria-hidden="true" />;
}

export default ParticleNetwork;
