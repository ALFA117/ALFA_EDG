import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { ArrowUpIcon } from './Icons';
import { useLanguage } from '../i18n/LanguageContext';

function BackToTop() {
  const { t } = useLanguage();
  const [visible, setVisible] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    let ticking = false;
    function update() {
      ticking = false;
      setVisible(window.scrollY > window.innerHeight);
    }
    function onScroll() {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    }
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href="#top"
          className="back-to-top"
          aria-label={t.backToTop}
          title={t.backToTop}
          initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 8, transition: { duration: 0.15 } }}
          transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
          whileTap={reduceMotion ? undefined : { scale: 0.92 }}
        >
          <ArrowUpIcon />
        </motion.a>
      )}
    </AnimatePresence>
  );
}

export default BackToTop;
