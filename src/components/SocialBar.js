import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { socialIcons } from './Icons';

const spring = { type: 'spring', stiffness: 400, damping: 22 };

/** Tiles de contacto: ícono en su caja, red y el handle real en mono. */
function SocialBar({ items }) {
  const reduce = useReducedMotion();
  return (
    <ul className="social-bar">
      {items.map((item) => {
        const Icon = socialIcons[item.icon];
        const primary = item.icon === 'whatsapp';
        return (
          <li key={item.name}>
            <motion.a
              className={'social-bar__link' + (primary ? ' social-bar__link--primary' : '')}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              data-net={item.icon}
              whileHover={reduce ? undefined : { y: -2 }}
              whileTap={reduce ? undefined : { scale: 0.97 }}
              transition={spring}
            >
              <span className="social-bar__icon" aria-hidden="true">
                <Icon />
              </span>
              <span className="social-bar__text">
                <span className="social-bar__name">{item.name}</span>
                {item.handle && <span className="social-bar__handle">{item.handle}</span>}
              </span>
            </motion.a>
          </li>
        );
      })}
    </ul>
  );
}

export default SocialBar;
