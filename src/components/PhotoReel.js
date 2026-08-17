import React, { useEffect, useMemo, useRef } from 'react';
import { motion, animate, useMotionValue, useReducedMotion } from 'framer-motion';
import { useLanguage } from '../i18n/LanguageContext';

const AUTO_SPEED_PX_S = 26;
const STEP_PX = 340;
const RESUME_DELAY_MS = 2200;

function shuffle(array) {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function PhotoReel({ photos }) {
  const { t } = useLanguage();
  const reduceMotion = useReducedMotion();
  // Re-shuffled once per page load (not per render) — otherwise every
  // photo from the same event lands next to each other in source order,
  // reading as "all from one place" instead of a real mixed reel.
  const shuffled = useMemo(() => shuffle(photos), [photos]);
  // Duplicated once so the loop point (wrapping x by half the track's
  // width) lands on pixel-identical content — invisible to the eye.
  const strip = [...shuffled, ...shuffled];

  const trackRef = useRef(null);
  const x = useMotionValue(0);
  const halfWidthRef = useRef(0);
  const controlsRef = useRef(null);
  const resumeTimerRef = useRef(null);

  const wrap = () => {
    const half = halfWidthRef.current;
    if (!half) return;
    const v = x.get();
    if (v <= -half) x.set(v + half);
    else if (v > 0) x.set(v - half);
  };

  const startAuto = () => {
    controlsRef.current?.stop();
    const half = halfWidthRef.current;
    if (!half) return;
    const current = x.get();
    const distance = -half - current;
    const duration = Math.abs(distance) / AUTO_SPEED_PX_S;
    controlsRef.current = animate(x, -half, {
      duration,
      ease: 'linear',
      onUpdate: wrap,
      onComplete: startAuto,
    });
  };

  useEffect(() => {
    const measure = () => {
      if (trackRef.current) halfWidthRef.current = trackRef.current.scrollWidth / 2;
    };
    measure();
    window.addEventListener('resize', measure);
    if (!reduceMotion) startAuto();
    return () => {
      window.removeEventListener('resize', measure);
      controlsRef.current?.stop();
      if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reduceMotion]);

  const pauseForInteraction = () => {
    controlsRef.current?.stop();
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    if (!reduceMotion) {
      resumeTimerRef.current = setTimeout(startAuto, RESUME_DELAY_MS);
    }
  };

  const step = (dir) => {
    pauseForInteraction();
    controlsRef.current = animate(x, x.get() + dir * STEP_PX, {
      duration: 0.45,
      ease: 'easeOut',
      onUpdate: wrap,
    });
  };

  return (
    <div className="photo-reel" role="region" aria-label={t.photoReel.region}>
      <div className="photo-reel__sprockets" aria-hidden="true" />
      <div className="photo-reel__frame">
        <motion.div
          ref={trackRef}
          className="photo-reel__track"
          style={{ x }}
          drag="x"
          dragElastic={0.05}
          dragMomentum={false}
          onDragStart={pauseForInteraction}
          onDrag={wrap}
          onDragEnd={pauseForInteraction}
        >
          {strip.map((photo, i) => (
            <img
              key={i}
              className="photo-reel__image"
              src={photo.src}
              alt={i < photos.length ? `${t.photoReel.altPrefix} ${i + 1}` : ''}
              aria-hidden={i >= photos.length}
              draggable={false}
              width={photo.width}
              height={photo.height}
              loading="lazy"
              style={{ aspectRatio: photo.ratio }}
            />
          ))}
        </motion.div>
      </div>
      <div className="photo-reel__sprockets" aria-hidden="true" />

      <div className="photo-reel__controls">
        <motion.button
          type="button"
          className="photo-reel__nav"
          onClick={() => step(-1)}
          aria-label={t.photoReel.prev}
          whileTap={{ scale: 0.9 }}
        >
          ←
        </motion.button>
        <motion.button
          type="button"
          className="photo-reel__nav"
          onClick={() => step(1)}
          aria-label={t.photoReel.next}
          whileTap={{ scale: 0.9 }}
        >
          →
        </motion.button>
      </div>
    </div>
  );
}

export default PhotoReel;
