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
        'ALFA-EDG — Web3 + AI infrastructure: 16 live projects, from cross-chain HTLC swaps to autonomous trading agents.',
    },
    nav: { projects: 'Projects', photos: 'Photos', contact: 'Contact' },
    hero: {
      eyebrow: 'Full-Stack · Web3 + AI · Mobile Apps · Websites with Storage',
      title: 'The full-stack developer who ships what others only pitch.',
      intro:
        'I build things that move real value with no shortcuts: contracts as the only authority, code that decides, never a support ticket.',
      highlights: (n) => [
        'Real Web3 — sealed-bid rounds with zero collusion, funds that move on-chain.',
        'AI with skin in the game — agents that stake capital and get penalized on-chain when wrong.',
        `${n} projects in production, backend to frontend, all built by me.`,
      ],
      closing: 'Need the developer who actually delivers? Let’s talk.',
      cta: 'See my projects',
      chips: { web3: 'Web3', ai: 'AI', security: 'Security' },
      stats: {
        projects: 'Projects shipped',
        categories: 'Disciplines',
        prod: 'In production',
      },
    },
    ethos: {
      kicker: 'How I build',
      items: [
        {
          title: 'No custodians',
          body: 'Contracts are the only authority. Funds move by code — a timeout, an on-chain penalty, a simultaneous reveal — never a support ticket.',
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
    registry: {
      heading: 'Project Registry',
      stamp: (n) => `${n} live`,
      stampSuffix: 'live',
      columns: { index: '#', name: 'Project', tag: 'Stack', status: 'Status' },
    },
    field: {
      heading: 'In the Field',
      subtitle: 'Behind the scenes at hackathons and work sessions.',
      stamp: (n) => `${n} photos`,
      stampSuffix: 'photos',
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
    themeToggle: { toDark: 'Switch to dark theme', toLight: 'Switch to light theme' },
    backToTop: 'Back to top',
  },
  es: {
    meta: {
      title: 'ALFA-EDG — Builder Web3 + IA',
      description:
        'ALFA-EDG — Infraestructura Web3 e IA: 16 proyectos en producción, de swaps cross-chain vía HTLC a agentes de trading autónomos.',
    },
    nav: { projects: 'Proyectos', photos: 'Fotos', contact: 'Contacto' },
    hero: {
      eyebrow: 'Full-Stack · Web3 + IA · Apps móviles · Páginas web con almacenamiento',
      title: 'El desarrollador full-stack que construye lo que otros solo prometen.',
      intro:
        'Construyo cosas que mueven valor real sin atajos: contratos como única autoridad, código que decide, nunca un ticket de soporte.',
      highlights: (n) => [
        'Web3 real — pujas selladas sin colusión, fondos que se mueven on-chain.',
        'IA con capital propio — agentes que arriesgan y son penalizados on-chain si fallan.',
        `${n} proyectos en producción, de backend a frontend, todos hechos por mí.`,
      ],
      closing: '¿Buscas al desarrollador que sí entrega? Hablemos.',
      cta: 'Ver mis proyectos',
      chips: { web3: 'Web3', ai: 'IA', security: 'Seguridad' },
      stats: {
        projects: 'Proyectos entregados',
        categories: 'Disciplinas',
        prod: 'En producción',
      },
    },
    ethos: {
      kicker: 'Cómo construyo',
      items: [
        {
          title: 'Sin custodios',
          body: 'Los contratos son la única autoridad. Los fondos se mueven por código — un timeout, una penalización on-chain, un reveal simultáneo — nunca un ticket de soporte.',
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
    registry: {
      heading: 'Registro de proyectos',
      stamp: (n) => `${n} activos`,
      stampSuffix: 'activos',
      columns: { index: '#', name: 'Proyecto', tag: 'Stack', status: 'Estado' },
    },
    field: {
      heading: 'En campo',
      subtitle: 'Detrás de cámaras en hackathons y sesiones de trabajo.',
      stamp: (n) => `${n} fotos`,
      stampSuffix: 'fotos',
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
    themeToggle: { toDark: 'Cambiar a tema oscuro', toLight: 'Cambiar a tema claro' },
    backToTop: 'Volver arriba',
  },
};
