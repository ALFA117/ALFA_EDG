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
      eyebrow: 'Full-Stack · Web3 + AI · Mobile Apps · Websites with Storage',
      title: 'The full-stack developer who ships what others only pitch.',
      subtitle: (n) =>
        `Sling Chain moves money between people with no banks and no middlemen — built, deployed, and running, not a demo. I bring that same bar to everything: AI apps, games, security tools, and business websites. ${n} projects in production, backend to frontend, all built by me. Need the developer who actually delivers? Let's talk.`,
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
    field: {
      heading: 'In the Field',
      subtitle: 'Behind the scenes at hackathons and work sessions.',
      stamp: (n) => `${n} photos`,
    },
    contact: {
      heading: 'Contact',
      body: 'Follow me or message me directly on WhatsApp to talk about your project.',
    },
    projectRow: { live: 'Live', flagship: 'Flagship project' },
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
      eyebrow: 'Full-Stack · Web3 + IA · Apps móviles · Páginas web con almacenamiento',
      title: 'El desarrollador full-stack que construye lo que otros solo prometen.',
      subtitle: (n) =>
        `Sling Chain mueve dinero entre personas sin bancos ni intermediarios — construido, deployado y funcionando, no una demo. Ese mismo nivel lo aplico a todo: apps de inteligencia artificial, juegos, herramientas de seguridad y páginas web para negocios. ${n} proyectos en producción, de backend a frontend, todos hechos por mí. ¿Buscas al desarrollador que sí entrega? Hablemos.`,
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
    field: {
      heading: 'En campo',
      subtitle: 'Detrás de cámaras en hackathons y sesiones de trabajo.',
      stamp: (n) => `${n} fotos`,
    },
    contact: {
      heading: 'Contacto',
      body: 'Sígueme o escríbeme directo por WhatsApp para hablar de tu proyecto.',
    },
    projectRow: { live: 'En vivo', flagship: 'Proyecto insignia' },
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
