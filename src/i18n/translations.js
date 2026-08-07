export const categoryLabels = {
  en: {
    all: 'All',
    Infra: 'Infra',
    IA: 'AI',
    Seguridad: 'Security',
    Gaming: 'Gaming',
    Freelance: 'Freelance',
    Otros: 'Other',
  },
  es: {
    all: 'Todo',
    Infra: 'Infra',
    IA: 'IA',
    Seguridad: 'Seguridad',
    Gaming: 'Gaming',
    Freelance: 'Freelance',
    Otros: 'Otros',
  },
};

export const strings = {
  en: {
    meta: {
      title: 'ALFA-EDG — Web3 + AI Builder',
      description:
        'ALFA-EDG — Web3 + AI infrastructure: Sling Chain (cross-chain atomic swaps via HTLC, no KYC, no custodians) and 14 more live projects.',
    },
    nav: { projects: 'Projects', photos: 'Photos', contact: 'Contact' },
    hero: {
      eyebrow: 'Full-Stack · Web3 + AI · Mobile · Frontend · Backend · Databases',
      title: 'I build apps that move your money without middlemen.',
      subtitle: (n) =>
        `With Sling Chain you swap one crypto for another directly with someone else — no banks, no one else holding your funds. I also build AI-powered apps, games, security tools, and websites for businesses — ${n} projects already live. Need a site for your business? I build those too.`,
      cta: 'See my projects',
    },
    ethos: {
      kicker: 'How I build',
      items: [
        {
          title: 'No custodians',
          body: 'Contracts and HTLCs are the only authority. If a swap fails, the timeout returns the funds — not a support ticket.',
        },
        {
          title: 'Production, not demos',
          body: 'Every project in the registry is deployed and in use — not a mockup or a pitch deck.',
        },
        {
          title: 'Real full-stack',
          body: "From on-chain logic to the frontend people actually use: I build the whole stack, not just the contract.",
        },
      ],
    },
    registry: { heading: 'Project Registry', stamp: (n) => `${n} live` },
    field: { heading: 'In the Field', stamp: (n) => `${n} photos` },
    contact: {
      heading: 'Contact',
      body: 'Follow me or message me directly on WhatsApp to talk about your project.',
    },
    projectRow: { live: 'Live' },
    photoReel: {
      prev: 'Previous photo',
      next: 'Next photo',
      pause: 'Pause carousel',
      play: 'Play carousel',
      region: 'Photo log',
      altPrefix: 'ALFA-EDG — field photo',
    },
    langToggle: { label: 'ES', aria: 'Switch to Spanish' },
  },
  es: {
    meta: {
      title: 'ALFA-EDG — Builder Web3 + IA',
      description:
        'ALFA-EDG — Infraestructura Web3 e IA: Sling Chain (swaps cross-chain vía HTLC, sin KYC ni custodios) y 14 proyectos más en producción.',
    },
    nav: { projects: 'Proyectos', photos: 'Fotos', contact: 'Contacto' },
    hero: {
      eyebrow: 'Full-Stack · Web3 + IA · Mobile · Frontend · Backend · Bases de datos',
      title: 'Construyo apps para mover tu dinero sin intermediarios.',
      subtitle: (n) =>
        `Con Sling Chain cambias una cripto por otra directo con otra persona, sin bancos ni nadie más controlando tu dinero. También hago apps con inteligencia artificial, juegos, herramientas de seguridad y páginas web para negocios — ya son ${n} proyectos funcionando de verdad. ¿Necesitas una página para tu negocio? También te la construyo.`,
      cta: 'Ver mis proyectos',
    },
    ethos: {
      kicker: 'Cómo construyo',
      items: [
        {
          title: 'Sin custodios',
          body: 'Los contratos y los HTLC son la única autoridad. Si un swap falla, el timeout regresa los fondos — no un ticket de soporte.',
        },
        {
          title: 'Producción, no demos',
          body: 'Cada proyecto del registro está deployado y en uso — no es un mockup ni un pitch deck.',
        },
        {
          title: 'Full-stack real',
          body: 'De la lógica on-chain al frontend que la gente usa: construyo el stack completo, no solo el contrato.',
        },
      ],
    },
    registry: { heading: 'Registro de proyectos', stamp: (n) => `${n} activos` },
    field: { heading: 'En campo', stamp: (n) => `${n} fotos` },
    contact: {
      heading: 'Contacto',
      body: 'Sígueme o escríbeme directo por WhatsApp para hablar de tu proyecto.',
    },
    projectRow: { live: 'En vivo' },
    photoReel: {
      prev: 'Foto anterior',
      next: 'Siguiente foto',
      pause: 'Pausar carrusel',
      play: 'Reproducir carrusel',
      region: 'Registro fotográfico',
      altPrefix: 'ALFA-EDG — registro fotográfico',
    },
    langToggle: { label: 'EN', aria: 'Cambiar a inglés' },
  },
};
