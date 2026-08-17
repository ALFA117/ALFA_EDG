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

export function LinkedInIcon(props) {
  return (
    <svg {...base} {...props} aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <line x1="7.5" y1="10" x2="7.5" y2="17" />
      <circle cx="7.5" cy="6.8" r="0.6" fill="currentColor" stroke="none" />
      <path d="M11.5 17v-4.5c0-1.4 1-2.5 2.5-2.5s2.5 1.1 2.5 2.5V17" />
      <line x1="11.5" y1="10" x2="11.5" y2="17" />
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

export function ShieldIcon(props) {
  return (
    <svg {...base} {...props} aria-hidden="true">
      <path d="M12 3.5 5 6.2v5.3c0 4.4 3 7.9 7 8.9 4-1 7-4.5 7-8.9V6.2Z" />
      <path d="m9 12 2 2 4-4.2" />
    </svg>
  );
}

export function RocketIcon(props) {
  return (
    <svg {...base} {...props} aria-hidden="true">
      <path d="M14.5 9.5c2-2.8 2-6 1.5-7-1 -.5-4.2-.5-7 1.5C6.2 6.3 4.8 9.7 4.3 11.6c-.1.5.3.9.8.8 1.9-.5 5.3-1.9 7.6-4.6.6-.7 1.2-1.5 1.8-2.3Z" />
      <circle cx="13" cy="7" r="1.4" fill="currentColor" stroke="none" />
      <path d="M9 15c-1.5 0-3 1.5-3 4.5C9 19.5 10.5 18 10.5 16.5" />
      <path d="M5 12c-1.6.6-2 3-2 5.5 2.5 0 4.9-.4 5.5-2" />
    </svg>
  );
}

export function LayersIcon(props) {
  return (
    <svg {...base} {...props} aria-hidden="true">
      <path d="m12 3 8 4.5-8 4.5-8-4.5Z" />
      <path d="m4 12 8 4.5 8-4.5" />
      <path d="m4 16 8 4.5 8-4.5" />
    </svg>
  );
}

export function ChainIcon(props) {
  return (
    <svg {...base} {...props} aria-hidden="true">
      <rect x="3.5" y="9" width="7" height="7" rx="2" />
      <rect x="13.5" y="9" width="7" height="7" rx="2" />
      <path d="M10.5 12.5h3" />
    </svg>
  );
}

export function CpuIcon(props) {
  return (
    <svg {...base} {...props} aria-hidden="true">
      <rect x="7" y="7" width="10" height="10" rx="2" />
      <rect x="10" y="10" width="4" height="4" />
      <path d="M12 3v3M12 18v3M3 12h3M18 12h3M6 6l1.5 1.5M16.5 16.5 18 18M18 6l-1.5 1.5M7.5 16.5 6 18" />
    </svg>
  );
}

export function SunIcon(props) {
  return (
    <svg {...base} {...props} aria-hidden="true">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 3v2M12 19v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M3 12h2M19 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
    </svg>
  );
}

export function MoonIcon(props) {
  return (
    <svg {...base} {...props} aria-hidden="true">
      <path d="M20 14.5A8.5 8.5 0 1 1 9.5 4a7 7 0 0 0 10.5 10.5Z" />
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
  linkedin: LinkedInIcon,
};
