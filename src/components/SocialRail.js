import React from 'react';
import { motion } from 'framer-motion';
import { socialIcons } from './Icons';

/** Fixed vertical strip of icon-only social links along the left edge — desktop only (see CSS). */
function SocialRail({ items }) {
  return (
    <div className="social-rail" aria-label="Social">
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
            whileHover={{ x: 3 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 400, damping: 22 }}
          >
            <Icon />
          </motion.a>
        );
      })}
      <span className="social-rail__line" aria-hidden="true" />
    </div>
  );
}

export default SocialRail;
