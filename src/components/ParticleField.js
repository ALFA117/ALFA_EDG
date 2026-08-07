import React, { useEffect, useRef } from 'react';

function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

const PARTICLE_RGB = '255, 42, 77';
const LINK_DISTANCE = 140;
const DENSITY = 1 / 9000;
const MIN_PARTICLES = 24;
const MAX_PARTICLES = 90;
const PARALLAX_STRENGTH = 16;
const PARALLAX_EASE = 0.06;

function ParticleField() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const reduced = prefersReducedMotion();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    let width = 0;
    let height = 0;
    let particles = [];
    let animationId = null;
    let resizeTimeout = null;

    let targetX = 0;
    let targetY = 0;
    let offsetX = 0;
    let offsetY = 0;

    function createParticle() {
      const depth = 0.4 + Math.random() * 0.6;
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.25 * depth,
        vy: (Math.random() - 0.5) * 0.25 * depth,
        depth,
      };
    }

    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.min(MAX_PARTICLES, Math.max(MIN_PARTICLES, Math.floor(width * height * DENSITY)));
      particles = Array.from({ length: count }, createParticle);
    }

    function draw() {
      ctx.clearRect(0, 0, width, height);

      const positions = particles.map((p) => ({
        x: p.x + offsetX * p.depth,
        y: p.y + offsetY * p.depth,
        depth: p.depth,
      }));

      for (let i = 0; i < positions.length; i += 1) {
        for (let j = i + 1; j < positions.length; j += 1) {
          const a = positions[i];
          const b = positions[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < LINK_DISTANCE) {
            const alpha = (1 - dist / LINK_DISTANCE) * 0.15 * ((a.depth + b.depth) / 2);
            ctx.strokeStyle = `rgba(${PARTICLE_RGB}, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      positions.forEach((p) => {
        const r = 1 + p.depth * 1.4;
        ctx.beginPath();
        ctx.fillStyle = `rgba(${PARTICLE_RGB}, ${0.25 + p.depth * 0.35})`;
        ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
        ctx.fill();
      });
    }

    function step() {
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;
      });
      offsetX += (targetX - offsetX) * PARALLAX_EASE;
      offsetY += (targetY - offsetY) * PARALLAX_EASE;
      draw();
      animationId = requestAnimationFrame(step);
    }

    function handleResize() {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        resize();
        draw();
      }, 200);
    }

    function handlePointerMove(event) {
      targetX = ((event.clientX / width) * 2 - 1) * PARALLAX_STRENGTH;
      targetY = ((event.clientY / height) * 2 - 1) * PARALLAX_STRENGTH;
    }

    resize();
    if (reduced) {
      draw();
    } else {
      step();
      window.addEventListener('pointermove', handlePointerMove);
    }
    window.addEventListener('resize', handleResize);

    return () => {
      if (animationId) cancelAnimationFrame(animationId);
      clearTimeout(resizeTimeout);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('pointermove', handlePointerMove);
    };
  }, []);

  return <canvas ref={canvasRef} className="particle-field" aria-hidden="true" />;
}

export default ParticleField;
