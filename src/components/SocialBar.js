import React from 'react';
import { socialIcons } from './Icons';

function SocialBar({ items }) {
  return (
    <div className="social-bar">
      {items.map((item) => {
        const Icon = socialIcons[item.icon];
        return (
          <a
            key={item.name}
            className="social-bar__link"
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={item.name}
          >
            <Icon />
            <span>{item.name}</span>
          </a>
        );
      })}
    </div>
  );
}

export default SocialBar;
