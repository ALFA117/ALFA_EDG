import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { socialIcons } from './Icons';

/** Riel vertical de íconos, centrado a la izquierda — solo escritorio (ver CSS). */
function SocialRail({ items }) {
  const reduce = useReducedMotion();
  return (
    <nav className="social-rail" aria-label="Redes sociales">
      <span className="social-rail__label" aria-hidden="true">
        social
      </span>
      {items.map((item) => {
        const Icon = socialIcons[item.icon];
        return (
          <motion.a
            key={item.name}
            className="social-rail__link"
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={item.name}
            title={item.handle ? `${item.name} · ${item.handle}` : item.name}
            whileHover={reduce ? undefined : { scale: 1.08 }}
            whileTap={reduce ? undefined : { scale: 0.92 }}
            transition={{ type: 'spring', stiffness: 400, damping: 22 }}
          >
            <Icon />
          </motion.a>
        );
      })}
    </nav>
  );
}

export default SocialRail;
