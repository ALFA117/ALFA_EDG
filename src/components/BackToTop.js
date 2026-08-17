import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { useLanguage } from '../i18n/LanguageContext';

function BackToTop() {
  const { t } = useLanguage();
  const [visible, setVisible] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    function update() {
      setVisible(window.scrollY > window.innerHeight);
    }
    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href="#top"
          className="back-to-top"
          aria-label={t.backToTop}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 12 }}
          transition={{ duration: reduceMotion ? 0 : 0.25 }}
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.92 }}
        >
          ↑
        </motion.a>
      )}
    </AnimatePresence>
  );
}

export default BackToTop;
