import React from 'react';

const base = {
  width: 22,
  height: 22,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.75,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};

export function InstagramIcon(props) {
  return (
    <svg {...base} {...props} aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function XIcon(props) {
  return (
    <svg {...base} {...props} aria-hidden="true">
      <path d="M4 4l16 16M20 4L4 20" />
    </svg>
  );
}

export function WhatsAppIcon(props) {
  return (
    <svg {...base} {...props} aria-hidden="true">
      <path d="M6.5 17.5 4 20l2.6-2.4A8 8 0 1 1 6.5 17.5Z" />
      <path d="M9 9.7c0 3.6 2.7 6.3 6.3 6.3.4 0 .7-.2.9-.6l.5-1.2c.1-.4-.1-.8-.4-1L15 12.5c-.3-.2-.7-.1-1 .1l-.5.5c-1-.6-1.8-1.4-2.4-2.4l.5-.5c.2-.3.3-.7.1-1L11 8c-.2-.3-.6-.5-1-.4l-1.2.5c-.4.2-.6.5-.6.9Z" />
    </svg>
  );
}

export function TelegramIcon(props) {
  return (
    <svg {...base} {...props} aria-hidden="true">
      <path d="m21 4-3 16.5-6-4.8-3 2.8v-4.4L18.5 6.5 6.5 12.8 3 11.5Z" />
    </svg>
  );
}

export function MailIcon(props) {
  return (
    <svg {...base} {...props} aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 6.5 8 6.5 8-6.5" />
    </svg>
  );
}

export function FacebookIcon(props) {
  return (
    <svg {...base} {...props} aria-hidden="true">
      <path d="M15 8h-2c-1.1 0-2 .9-2 2v2H9v3h2v6h3v-6h2.2l.5-3H14v-1.6c0-.5.4-.9.9-.9H16V8Z" />
    </svg>
  );
}

export function ExternalLinkIcon(props) {
  return (
    <svg {...base} width={16} height={16} {...props} aria-hidden="true">
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </svg>
  );
}

export const socialIcons = {
  instagram: InstagramIcon,
  x: XIcon,
  whatsapp: WhatsAppIcon,
  telegram: TelegramIcon,
  mail: MailIcon,
  facebook: FacebookIcon,
};
