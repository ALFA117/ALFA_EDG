import React from 'react';
import { motion, useScroll, useSpring, useReducedMotion } from 'framer-motion';

/** Barra de progreso de lectura bajo la nav — anima solo transform (scaleX). */
function ScrollProgress() {
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const smooth = useSpring(scrollYProgress, { stiffness: 300, damping: 40, restDelta: 0.001 });
  return (
    <div className="scroll-progress" aria-hidden="true">
      <motion.div
        className="scroll-progress__bar"
        style={{ scaleX: reduceMotion ? scrollYProgress : smooth }}
      />
    </div>
  );
}

export default ScrollProgress;
