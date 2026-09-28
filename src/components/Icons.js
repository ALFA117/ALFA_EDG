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

// Glifos de redes: rellenos, mismo cuadro de 24 y el mismo peso óptico,
// para que la fila y el riel se lean parejos (los trazos a mano de antes
// dejaban WhatsApp y Facebook diminutos junto a los demás).
const brand = { width: 20, height: 20, viewBox: '0 0 24 24', fill: 'currentColor' };

export function GitHubIcon(props) {
  return (
    <svg {...brand} {...props} aria-hidden="true">
      <path d="M12 .5C5.65.5.5 5.65.5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.37-3.87-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.76 2.69 1.25 3.35.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.19-3.08-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.8 1.19 1.82 1.19 3.08 0 4.41-2.69 5.38-5.26 5.67.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  );
}

export function InstagramIcon(props) {
  return (
    <svg {...brand} {...props} aria-hidden="true">
      <path d="M12 2.2c3.2 0 3.58.01 4.85.07 3.25.15 4.77 1.69 4.92 4.92.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.15 3.23-1.66 4.77-4.92 4.92-1.27.06-1.64.07-4.85.07s-3.58-.01-4.85-.07c-3.26-.15-4.77-1.7-4.92-4.92C2.21 15.58 2.2 15.2 2.2 12s.01-3.58.07-4.85C2.42 3.92 3.94 2.37 7.15 2.22 8.42 2.21 8.8 2.2 12 2.2Zm0 4.64a5.16 5.16 0 1 0 0 10.32 5.16 5.16 0 0 0 0-10.32Zm0 8.51a3.35 3.35 0 1 1 0-6.7 3.35 3.35 0 0 1 0 6.7Zm5.36-9.92a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4Z" />
    </svg>
  );
}

export function XIcon(props) {
  return (
    <svg {...brand} {...props} aria-hidden="true">
      <path d="M17.75 2.5h3.07l-6.72 7.68L22 21.5h-6.19l-4.85-6.34-5.55 6.34H2.34l7.19-8.21L2 2.5h6.35l4.38 5.8 5.02-5.8Zm-1.08 17.16h1.7L7.4 4.24H5.58l11.09 15.42Z" />
    </svg>
  );
}

export function WhatsAppIcon(props) {
  return (
    <svg {...brand} {...props} aria-hidden="true">
      <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.28-.1-.48-.15-.68.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.4-1.47a9 9 0 0 1-1.66-2.06c-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57a1.1 1.1 0 0 0-.8.37c-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.3 1.27.49 1.7.63.72.23 1.37.2 1.88.12.58-.09 1.76-.72 2-1.41.25-.7.25-1.29.18-1.41-.08-.13-.27-.2-.57-.35ZM12.05 21.5h-.01a9.4 9.4 0 0 1-4.8-1.31l-.34-.2-3.57.93.95-3.48-.22-.36a9.42 9.42 0 0 1-1.44-5.02c0-5.2 4.23-9.44 9.44-9.44a9.4 9.4 0 0 1 9.43 9.45c0 5.2-4.24 9.43-9.44 9.43Zm8.03-17.47A11.28 11.28 0 0 0 12.05.7C5.8.7.7 5.8.7 12.06c0 2 .52 3.95 1.52 5.67L.6 23.6l6.02-1.58a11.3 11.3 0 0 0 5.42 1.38h.01c6.26 0 11.35-5.09 11.35-11.35 0-3.03-1.18-5.88-3.32-8.02Z" />
    </svg>
  );
}

export function TelegramIcon(props) {
  return (
    <svg {...brand} {...props} aria-hidden="true">
      <path d="M21.9 4.1 18.7 19.2c-.24 1.06-.87 1.33-1.77.83l-4.87-3.6-2.35 2.27c-.26.26-.48.48-.98.48l.35-4.96 9.02-8.15c.4-.35-.08-.55-.6-.2L6.36 12.9l-4.8-1.5c-1.04-.33-1.06-1.05.22-1.55L20.54 2.6c.87-.32 1.63.2 1.36 1.5Z" />
    </svg>
  );
}

export function MailIcon(props) {
  return (
    <svg {...brand} {...props} aria-hidden="true">
      <path d="M3.5 4h17A2.5 2.5 0 0 1 23 6.5v11a2.5 2.5 0 0 1-2.5 2.5h-17A2.5 2.5 0 0 1 1 17.5v-11A2.5 2.5 0 0 1 3.5 4Zm.3 2 8.2 6.3L20.2 6H3.8Zm17.2 1.2-8.39 6.44a1 1 0 0 1-1.22 0L3 7.2v10.3c0 .28.22.5.5.5h17a.5.5 0 0 0 .5-.5V7.2Z" />
    </svg>
  );
}

export function FacebookIcon(props) {
  return (
    <svg {...brand} {...props} aria-hidden="true">
      <path d="M23.5 12.07C23.5 5.68 18.35.5 12 .5S.5 5.68.5 12.07c0 5.78 4.2 10.56 9.7 11.43v-8.09H7.28v-3.34h2.92V9.52c0-2.9 1.72-4.5 4.35-4.5 1.26 0 2.58.22 2.58.22v2.85h-1.45c-1.43 0-1.88.9-1.88 1.81v2.17h3.2l-.51 3.34h-2.69v8.09c5.5-.87 9.7-5.65 9.7-11.43Z" />
    </svg>
  );
}

export function LinkedInIcon(props) {
  return (
    <svg {...brand} {...props} aria-hidden="true">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13Zm1.78 13.02H3.56V9h3.56v11.45ZM22.22 0H1.77C.8 0 0 .77 0 1.73v20.54C0 23.23.8 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
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

export function ArrowRightIcon(props) {
  return (
    <svg {...base} {...props} aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function ArrowLeftIcon(props) {
  return (
    <svg {...base} {...props} aria-hidden="true">
      <path d="M19 12H5M11 6l-6 6 6 6" />
    </svg>
  );
}

export function ArrowUpIcon(props) {
  return (
    <svg {...base} {...props} aria-hidden="true">
      <path d="M12 19V5M6 11l6-6 6 6" />
    </svg>
  );
}

export function GridIcon(props) {
  return (
    <svg {...base} {...props} aria-hidden="true">
      <rect x="4" y="4" width="7" height="7" rx="1.5" />
      <rect x="13" y="4" width="7" height="7" rx="1.5" />
      <rect x="4" y="13" width="7" height="7" rx="1.5" />
      <rect x="13" y="13" width="7" height="7" rx="1.5" />
    </svg>
  );
}

export function MessageIcon(props) {
  return (
    <svg {...base} {...props} aria-hidden="true">
      <path d="M20 12a8 8 0 0 1-11.6 7.1L4 20l.9-4.4A8 8 0 1 1 20 12Z" />
    </svg>
  );
}

export function CameraIcon(props) {
  return (
    <svg {...base} {...props} aria-hidden="true">
      <path d="M4 8.5A1.5 1.5 0 0 1 5.5 7h2l1.5-2h6l1.5 2h2A1.5 1.5 0 0 1 20 8.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 17.5Z" />
      <circle cx="12" cy="13" r="3.5" />
    </svg>
  );
}

export const socialIcons = {
  github: GitHubIcon,
  instagram: InstagramIcon,
  x: XIcon,
  whatsapp: WhatsAppIcon,
  telegram: TelegramIcon,
  mail: MailIcon,
  facebook: FacebookIcon,
  linkedin: LinkedInIcon,
};
