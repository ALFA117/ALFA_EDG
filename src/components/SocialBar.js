import React from 'react';
import { motion } from 'framer-motion';
import { socialIcons } from './Icons';

function SocialBar({ items }) {
  return (
    <div className="social-bar">
      {items.map((item) => {
        const Icon = socialIcons[item.icon];
        return (
          <motion.a
            key={item.name}
            className={'social-bar__link' + (item.icon === 'whatsapp' ? ' social-bar__link--primary' : '')}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 400, damping: 22 }}
          >
            <Icon />
            <span>{item.name}</span>
          </motion.a>
        );
      })}
    </div>
  );
}

export default SocialBar;
