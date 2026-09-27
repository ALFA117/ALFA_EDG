export const categoryLabels = {
  en: {
    all: 'All',
    Infra: 'Infra',
    IA: 'AI',
    Seguridad: 'Security',
    Gaming: 'Gaming',
    Web2: 'Web2',
    Freelance: 'Freelance',
    Otros: 'Other',
  },
  es: {
    all: 'Todo',
    Infra: 'Infra',
    IA: 'IA',
    Seguridad: 'Seguridad',
    Gaming: 'Gaming',
    Web2: 'Web2',
    Freelance: 'Freelance',
    Otros: 'Otros',
  },
};

export const strings = {
  en: {
    meta: {
      title: 'ALFA-EDG — Web3 + AI Builder',
      description:
        'ALFA-EDG — full-stack Web3 + AI developer in Mexico: projects with live demos, from peso gateways on Stellar to AI agents and on-chain security bots.',
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
        `${n} projects with a live demo, backend to frontend, all built by me.`,
      ],
      closing: 'Need the developer who actually delivers? Let’s talk.',
      cta: 'See my projects',
      chips: { web3: 'Web3', ai: 'AI', security: 'Security' },
      stats: {
        projects: 'Projects shipped',
        categories: 'Disciplines',
        links: 'Links responding',
      },
      linkNote: (ok, total, date) => `Checked all ${total} links on ${date}: ${ok} responded.`,
    },
    ethos: {
      kicker: 'How I build',
      items: [
        {
          title: 'No custodians',
          body: 'Contracts are the only authority. Funds move by code — a timeout, an on-chain penalty, a simultaneous reveal — never a support ticket.',
        },
        {
          title: 'Live demos, not mockups',
          body: 'Every project in the registry opens at a link that works. If it runs on testnet, devnet or is a demo, its card says so.',
        },
        {
          title: 'Real full-stack',
          body: "From on-chain logic to the frontend people actually use: I build the whole stack, not just the contract.",
        },
      ],
    },
    registry: {
      heading: 'Project Registry',
      lead: 'Newest first. The $ net label says which network each one runs on — testnet and devnet never move real money.',
      empty: { title: 'Nothing in this category yet', body: 'Pick another category or see all projects.', action: 'See all' },
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
    projectRow: { live: 'Live', flagship: 'Flagship project', previewError: 'Preview unavailable', opens: 'opens in a new tab' },
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
    skipToContent: 'Skip to main content',
  },
  es: {
    meta: {
      title: 'ALFA-EDG — Builder Web3 + IA',
      description:
        'ALFA-EDG — desarrollador full-stack Web3 + IA en México: proyectos con demo en vivo, de gateways de pesos en Stellar a agentes de IA y bots de seguridad on-chain.',
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
        `${n} proyectos con demo en vivo, de backend a frontend, todos hechos por mí.`,
      ],
      closing: '¿Buscas al desarrollador que sí entrega? Hablemos.',
      cta: 'Ver mis proyectos',
      chips: { web3: 'Web3', ai: 'IA', security: 'Seguridad' },
      stats: {
        projects: 'Proyectos entregados',
        categories: 'Disciplinas',
        links: 'Links respondiendo',
      },
      linkNote: (ok, total, date) => `Revisé los ${total} links el ${date}: respondieron ${ok}.`,
    },
    ethos: {
      kicker: 'Cómo construyo',
      items: [
        {
          title: 'Sin custodios',
          body: 'Los contratos son la única autoridad. Los fondos se mueven por código — un timeout, una penalización on-chain, un reveal simultáneo — nunca un ticket de soporte.',
        },
        {
          title: 'Demos en vivo, no maquetas',
          body: 'Cada proyecto del registro abre en un link que funciona. Si corre en testnet, devnet o es una demo, su tarjeta lo dice.',
        },
        {
          title: 'Full-stack real',
          body: 'De la lógica on-chain al frontend que la gente usa: construyo el stack completo, no solo el contrato.',
        },
      ],
    },
    registry: {
      heading: 'Registro de proyectos',
      lead: 'Del más reciente al más antiguo. La etiqueta $ net dice en qué red corre cada uno: testnet y devnet nunca mueven dinero real.',
      empty: { title: 'Aún no hay proyectos en esta categoría', body: 'Elige otra categoría o mira todos los proyectos.', action: 'Ver todos' },
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
    projectRow: { live: 'En vivo', flagship: 'Proyecto insignia', previewError: 'Vista previa no disponible', opens: 'abre en otra pestaña' },
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
    skipToContent: 'Saltar al contenido principal',
  },
};
