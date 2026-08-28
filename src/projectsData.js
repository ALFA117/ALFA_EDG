import previewImg_mad from './assets/previews/mad.webp';
import previewImg_avs from './assets/previews/avs.webp';
import previewImg_aval from './assets/previews/aval.webp';
import previewImg_moufut from './assets/previews/moufut.webp';
import previewImg_nexus_latam from './assets/previews/nexus-latam.webp';
import previewImg_monkeyclone from './assets/previews/monkeyclone.webp';
import previewImg_chainguard from './assets/previews/chainguard.webp';
import previewImg_mongli_agent_ia from './assets/previews/mongli-agent-ia.webp';
import previewImg_mongli_pool from './assets/previews/mongli-pool.webp';
import previewImg_mongli_pool_deck from './assets/previews/mongli-pool-deck.webp';
import previewImg_mongli_game from './assets/previews/mongli-game.webp';
import previewImg_kivo from './assets/previews/kivo.webp';
import previewImg_crystal_vanilla from './assets/previews/crystal-vanilla.webp';
import previewImg_flor_de_sil from './assets/previews/flor-de-sil.webp';
import previewImg_refugio from './assets/previews/refugio.webp';
import previewImg_tianguis_ia from './assets/previews/tianguis-ia.webp';
import previewImg_moux402 from './assets/previews/moux402.webp';
import previewImg_el_velador from './assets/previews/el-velador.webp';

export const projects = [
  {
    name: 'MAD',
    alias: 'Mongli Agent Delphi',
    url: 'https://mad-mongli-agent.vercel.app/',
    preview: previewImg_mad,
    bucket: 'IA',
    tag: { en: 'AI · Trading Agent', es: 'IA · Agente de Trading' },
    description: {
      en: "An autonomous trading agent that only bets on a prediction market when a named public data source backs the number, and abstains otherwise. Built for Gensyn's Delphi Agent Arena Competition.",
      es: 'Agente de trading autónomo que solo apuesta en un mercado de predicción cuando un dato público con nombre respalda el número, y se abstiene si no lo hay. Construido para el Delphi Agent Arena Competition de Gensyn.',
    },
  },
  {
    name: 'AVS',
    alias: 'Anonymous Venture Syndicate',
    url: 'https://avs-mou.vercel.app/',
    preview: previewImg_avs,
    bucket: 'Infra',
    tag: { en: 'Web3 · Solana', es: 'Web3 · Solana' },
    description: {
      en: 'Sealed-bid venture syndicates on Solana: investors bid and vote on startup milestones with zero visibility into each other until a simultaneous reveal, using MagicBlock Ephemeral Rollups for gasless, access-controlled privacy. Built for the Solana Blitz V7 Hackathon.',
      es: 'Sindicatos de inversión con pujas selladas en Solana: los inversores pujan y votan hitos de la startup sin visibilidad entre ellos hasta un reveal simultáneo, usando MagicBlock Ephemeral Rollups para privacidad sin gas. Construido para el Solana Blitz V7 Hackathon.',
    },
  },
  {
    name: 'AVAL',
    alias: 'Mou Casper',
    url: 'https://mou-casper.vercel.app/',
    preview: previewImg_aval,
    bucket: 'Infra',
    tag: { en: 'DeFi · AI Agents', es: 'DeFi · Agentes IA' },
    description: {
      en: "An autonomous underwriting desk: AI agents stake their own capital rating the risk of real-world receivables, and get penalized on-chain when they're wrong. Built for the Casper Agentic Buildathon 2026.",
      es: 'Mesa de securitización autónoma: agentes de IA arriesgan su propio capital calificando riesgo de facturas reales (real-world receivables) y son penalizados on-chain si fallan. Casper Agentic Buildathon 2026.',
    },
  },
  {
    name: 'Mou Fut',
    url: 'https://moufut.vercel.app/',
    preview: previewImg_moufut,
    bucket: 'Infra',
    tag: { en: 'P2P · On-device AI', es: 'P2P · IA on-device' },
    description: {
      en: "Serverless P2P football: mesh chat, an on-device AI commentator, and a USDt pool settled peer-to-peer, with no backend of its own. Built for the Tether Developers Cup 2026.",
      es: 'Fútbol P2P sin servidor: chat en malla, comentarista IA on-device y quiniela en USDt liquidada entre pares, sin backend propio. Construido para el Tether Developers Cup 2026.',
    },
  },
  {
    name: 'Nexus LATAM',
    url: 'https://nexus-latam-kappa.vercel.app/',
    preview: previewImg_nexus_latam,
    bucket: 'Infra',
    tag: { en: 'B2B · Arbitrum', es: 'B2B · Arbitrum' },
    description: {
      en: 'Settles, finances, and audits B2B trade across LATAM in under 60 seconds, with a fleet of AI agents pricing risk in real time. Built on Arbitrum + Bitso for ETH México 2026.',
      es: 'Liquida, financia y audita comercio B2B en LATAM en menos de 60 segundos, con una flota de agentes de IA que calculan el riesgo en tiempo real. Construido sobre Arbitrum + Bitso para ETH México 2026.',
    },
  },
  {
    name: 'MonkeyClone',
    url: 'https://monkeyclone.vercel.app/',
    preview: previewImg_monkeyclone,
    bucket: 'Infra',
    tag: { en: 'Web3 · Solana', es: 'Web3 · Solana' },
    description: {
      en: 'Copy-trading on Solana with a fantasy-draft twist: pick three top-performing wallets, deposit once, and the protocol mirrors their trades for you. Ranked weekly by ROI, win rate, and consistency.',
      es: 'Copy-trading en Solana con mecánica de fantasy draft: elige tres wallets con buen desempeño, deposita una vez, y el protocolo copia sus operaciones por ti. Rankeadas cada semana por ROI, win rate y consistencia.',
    },
  },
  {
    name: 'ChainGuard',
    url: 'https://chainguard-pi.vercel.app/',
    preview: previewImg_chainguard,
    bucket: 'Seguridad',
    tag: { en: 'Web3 · Security', es: 'Web3 · Seguridad' },
    description: {
      en: 'Scans Solidity contracts for reentrancy, tx.origin, overflow, and selfdestruct vulnerabilities before they turn into an exploit. Built for HackOWASP 8.0.',
      es: 'Escanea contratos Solidity en busca de vulnerabilidades de reentrancy, tx.origin, overflow y selfdestruct antes de que se conviertan en un exploit. Construido para HackOWASP 8.0.',
    },
  },
  {
    name: 'Mou IA',
    alias: 'Signal Intelligence',
    url: 'https://mongli-agent-ia.vercel.app/',
    preview: previewImg_mongli_agent_ia,
    bucket: 'IA',
    tag: { en: 'AI · Mantle · On-chain', es: 'IA · Mantle · On-chain' },
    description: {
      en: 'On-chain signal intelligence for smart money tracking on Mantle Network — a live feed, wallet explorer, and analytics that flag whale moves and anomalies as they happen.',
      es: 'Inteligencia de señales on-chain para rastrear "smart money" en Mantle Network — feed en vivo, explorador de wallets y analítica que detecta movimientos de ballenas y anomalías en tiempo real.',
    },
  },
  {
    name: 'Mongli Pool',
    url: 'https://mongli-pool.vercel.app/',
    preview: previewImg_mongli_pool,
    bucket: 'Infra',
    tag: { en: 'Web3 · Pool', es: 'Web3 · Pool' },
    description: {
      en: 'A privacy pool on Stellar with regulatory compliance built in: deposit and withdraw without anyone linking the two operations, verified with real ZK proofs on-chain. Built for Stellar Hacks: ZK 2025.',
      es: 'Pool de privacidad en Stellar con cumplimiento regulatorio integrado: deposita y retira sin que nadie pueda vincular ambas operaciones, verificado con pruebas ZK reales on-chain. Construido para Stellar Hacks: ZK 2025.',
    },
  },
  {
    name: 'Mongli Pool',
    alias: { en: 'Presentation Design', es: 'Diseño de presentación' },
    url: 'https://presentacionde-monglipool.vercel.app/',
    preview: previewImg_mongli_pool_deck,
    bucket: 'Otros',
    tag: { en: 'Web Design · Presentation', es: 'Diseño Web · Presentación' },
    description: {
      en: 'A slide-deck framework built from scratch in plain HTML/CSS/JS: keyboard/swipe navigation, animated transitions, and a light/dark toggle. This one carries a pitch as its content, but the framework is the real deliverable.',
      es: 'Un framework de presentación construido desde cero en HTML/CSS/JS puro: navegación por teclado y swipe, transiciones animadas y toggle de tema claro/oscuro. Aquí lleva un pitch como contenido, pero el framework es lo que se entrega.',
    },
  },
  {
    name: 'Mongli Game',
    url: 'https://mongli-game.vercel.app/',
    preview: previewImg_mongli_game,
    bucket: 'Gaming',
    tag: { en: 'Gaming', es: 'Gaming' },
    description: {
      en: 'A noir narrative thriller stored on-chain: reconstruct a fragmented identity while an AI narrator drives every choice, all persisted to 0G Storage. Built for the Zero Cup 2026.',
      es: 'Un thriller narrativo noir guardado on-chain: reconstruye una identidad fragmentada mientras un narrador con IA lleva cada decisión, todo persistido en 0G Storage. Construido para el Zero Cup 2026.',
    },
  },
  {
    name: 'Kivo App',
    url: 'https://kivo-app-five.vercel.app/',
    preview: previewImg_kivo,
    bucket: 'Infra',
    tag: { en: 'Web3 · Stellar', es: 'Web3 · Stellar' },
    description: {
      en: 'Programmatic escrow on Stellar for Mexican commerce: money stays locked on-chain and only releases once both sides confirm delivery. Built for the Stellar Hackathon 2026.',
      es: 'Custodia programática sobre Stellar para el comercio mexicano: el dinero queda retenido on-chain y solo se libera cuando ambas partes confirman la entrega. Construido para el Stellar Hackathon 2026.',
    },
  },
  {
    name: 'Crystal Vanilla',
    url: 'https://crystal-vanilla.vercel.app/',
    preview: previewImg_crystal_vanilla,
    bucket: 'Otros',
    tag: { en: 'Web App', es: 'Web App' },
    description: {
      en: 'A production calculator for a vanilla-extract business: converts available liters into sellable units and projects manufacturing costs on the fly. Built for a freelance client.',
      es: 'Calculadora de producción para un negocio de extracto de vainilla: convierte litros disponibles en unidades de venta y proyecta costos de manufactura al instante. Construido para un cliente freelance.',
    },
  },
  {
    name: 'Refugio',
    alias: 'Wall of Guardians',
    url: 'https://wall-of-guardians.vercel.app/',
    preview: previewImg_refugio,
    bucket: 'Gaming',
    tag: { en: 'Decentraland · Social', es: 'Decentraland · Social' },
    description: {
      en: "A Decentraland (SDK7) campfire that only burns when people show up — no host, no scheduled event. A cooperative mini-game grows the fire together in real time; shown here is the public leaderboard and a playable no-install web demo of the mechanic. Built for the Friendzone Hackathon.",
      es: 'Una fogata en Decentraland (SDK7) que solo arde cuando la gente llega — sin host, sin evento programado. Un mini-juego cooperativo hace crecer el fuego en tiempo real; aquí se muestra el leaderboard público y una demo jugable en el navegador, sin instalar nada. Friendzone Hackathon.',
    },
  },
  {
    name: 'Flor de Sil',
    url: 'https://flor-de-sil.vercel.app/',
    preview: previewImg_flor_de_sil,
    bucket: 'Freelance',
    tag: { en: 'Freelance / Client', es: 'Freelance / Cliente' },
    description: {
      en: 'A flower-arrangement catalog with an admin panel to manage inventory and orders, built for a freelance client — where emotions bloom.',
      es: 'Catálogo de arreglos florales con panel de administración para gestionar inventario y pedidos, construido para un cliente freelance — donde florecen las emociones.',
    },
  },
  {
    // Renombrado de TIANGUIS_IA a MercaditoMex (2026-08-25). La proteccion
    // SSO que bloqueaba mercadito-mex.vercel.app ya se desactivo (no
    // protegia nada real -- tianguis-ia.vercel.app servia el mismo
    // contenido sin login de todos modos), asi que ya se puede enlazar el
    // dominio bueno directo.
    name: 'MercaditoMex',
    alias: 'antes TIANGUIS_IA',
    url: 'https://mercadito-mex.vercel.app/',
    preview: previewImg_tianguis_ia,
    bucket: 'IA',
    tag: { en: 'AI · Marketplace', es: 'IA · Marketplace' },
    description: {
      en: 'A voice-first marketplace: sellers describe an item out loud and the AI drafts the listing while they speak, ready to publish before their coffee gets cold.',
      es: 'Marketplace por voz: el vendedor describe el producto hablando y la IA redacta la publicación mientras habla, lista antes de que se enfríe el café.',
    },
  },
  {
    // Sin preview propio todavia -- no hay screenshot real disponible y
    // no se va a inventar uno. Agregar previewImg_wip cuando exista.
    name: 'WIP',
    alias: 'Wallet Integration Piggy',
    url: 'https://wip-piggy.vercel.app/',
    bucket: 'IA',
    tag: { en: 'AI Agent · WDK · Wallet', es: 'Agente IA · WDK · Wallet' },
    description: {
      en: "An AI agent with its own wallet enforces a group's spending rules before it moves real USD₮ on Sepolia: caps, allowlists, monthly budget, multi-person approval. Every payment and every rejection lands in an auditable log. Built for the Aleph Hackathon, WDK Track.",
      es: 'Un agente de IA con billetera propia hace cumplir el reglamento de gasto del grupo antes de mover USD₮ real en Sepolia: topes, lista blanca, presupuesto mensual, aprobación de varias personas. Cada pago y cada rechazo queda en un registro auditable. Construido para el Aleph Hackathon, WDK Track.',
    },
  },
  {
    // Sin preview propio todavia -- no hay screenshot real disponible y
    // no se va a inventar uno. Agregar previewImg_monglizone cuando exista.
    name: 'MongliZone',
    alias: 'Creative Minds Jam #1',
    url: 'https://monglizone.vercel.app/',
    bucket: 'IA',
    tag: { en: 'AI · Content Mind', es: 'IA · Mind de Contenido' },
    description: {
      en: 'Say an idea out loud and it picks the format (a real multi-image carousel, a 1-3 minute video, or a caption), generates it, sends it for approval, and only publishes once you say yes. Built as a persistent Mind on Minds by Animoca Brands.',
      es: 'Le dices una idea en voz y decide el formato (un carrusel real de varias fotos, un video de 1-3 min, o un caption), lo genera, lo manda a revisión, y solo publica si dices que sí. Construido como Mind persistente sobre Minds by Animoca Brands.',
    },
  },
  {
    name: 'Moux402',
    alias: 'x402 API Monetization',
    url: 'https://mou-x402.vercel.app/',
    preview: previewImg_moux402,
    bucket: 'Infra',
    tag: { en: 'Infra · x402', es: 'Infra · x402' },
    description: {
      en: 'Wraps any API with pay-per-call monetization in one command, settled on Ethereum, Base, Solana, or Stellar — no metering stack, no server-side key, no signup for the buyer.',
      es: 'Envuelve cualquier API con monetización por llamada en un solo comando, liquidada en Ethereum, Base, Solana o Stellar — sin stack de medición, sin clave en el servidor, sin registro para el comprador.',
    },
  },
  {
    // Showcase comercial de 12 demos freelance (Next.js, repo separado
    // showcase-edg). Sin preview propio todavia -- no hay screenshot real
    // disponible desde esta sesion (sin navegador conectado) y no se va a
    // inventar uno, mismo criterio que WIP/MongliZone mas abajo.
    name: 'Barbería Urbana',
    url: 'https://showcase-edg.vercel.app/barberias/barberia-urbana',
    bucket: 'Web2',
    tag: { en: 'Web2 · Barbershop', es: 'Web2 · Barbería' },
    description: {
      en: 'Editorial barbershop landing with a live booking wizard (service → barber → time slot), receipt-style pricing, and a one-tap WhatsApp CTA. One of 12 commercial demos built to sell website packages to local businesses.',
      es: 'Landing editorial de barbería con wizard de reserva en vivo (servicio → barbero → horario), precios estilo ticket de recibo y CTA directo a WhatsApp. Una de 12 demos comerciales para vender paquetes de sitio web a negocios locales.',
    },
  },
  {
    name: 'Barbería Premium',
    url: 'https://showcase-edg.vercel.app/barberias/barberia-premium',
    bucket: 'Web2',
    tag: { en: 'Web2 · Barbershop', es: 'Web2 · Barbería' },
    description: {
      en: 'A quiet, editorial barbershop site built around negative space and a single elegant reservation modal — no bounce, no clutter.',
      es: 'Sitio de barbería editorial y pausado, construido sobre espacio en blanco y un único modal de reserva elegante — sin rebote, sin ruido visual.',
    },
  },
  {
    name: 'Barbería Moderna',
    url: 'https://showcase-edg.vercel.app/barberias/barberia-moderna',
    bucket: 'Web2',
    tag: { en: 'Web2 · Barbershop', es: 'Web2 · Barbería' },
    description: {
      en: 'A Gen-Z-styled barbershop demo with a pill nav, Instagram-style horizontal service stories, and a booking wizard with animated progress dots.',
      es: 'Demo de barbería con estética Gen-Z: nav en píldora, stories horizontales de servicios estilo Instagram y wizard de reserva con puntos de progreso animados.',
    },
  },
  {
    name: 'Auto Confianza CDMX',
    alias: { en: 'Used-car dealership', es: 'Agencia de seminuevos' },
    url: 'https://showcase-edg.vercel.app/autos/agencia-seminuevos',
    bucket: 'Web2',
    tag: { en: 'Web2 · Auto Dealer', es: 'Web2 · Agencia de Autos' },
    description: {
      en: 'Used-car dealership demo with filterable/sortable inventory (price, year, mileage) and a live monthly-payment simulator on every vehicle.',
      es: 'Demo de agencia de seminuevos con inventario filtrable/ordenable (precio, año, kilometraje) y simulador de mensualidad en vivo por vehículo.',
    },
  },
  {
    name: 'Aurea Motors',
    alias: { en: 'Luxury car microsite', es: 'Microsite de auto de lujo' },
    url: 'https://showcase-edg.vercel.app/autos/autos-premium',
    bucket: 'Web2',
    tag: { en: 'Web2 · Auto Dealer', es: 'Web2 · Agencia de Autos' },
    description: {
      en: 'A cinematic single-vehicle microsite for a fictional luxury brand — a color configurator swaps the hero photo live, with animated spec counters.',
      es: 'Microsite cinematográfico de un solo vehículo para una marca de lujo ficticia — configurador de color que cambia la foto del hero en vivo, con contadores de specs animados.',
    },
  },
  {
    name: 'Terreno Norte 4x4',
    alias: { en: 'Pickup/SUV dealership', es: 'Agencia de camionetas/SUVs' },
    url: 'https://showcase-edg.vercel.app/autos/autos-camionetas',
    bucket: 'Web2',
    tag: { en: 'Web2 · Auto Dealer', es: 'Web2 · Agencia de Autos' },
    description: {
      en: 'Pickup/SUV dealership demo with terrain-based filtering, a pickup-vs-SUV comparison table, and animated capacity stats.',
      es: 'Demo de agencia de camionetas/SUVs con filtro por terreno, tabla comparativa pickup vs SUV y stats de capacidad animados.',
    },
  },
  {
    name: 'Casa Aroma',
    alias: { en: 'Beauty e-commerce', es: 'E-commerce de belleza' },
    url: 'https://showcase-edg.vercel.app/belleza/tienda-productos',
    bucket: 'Web2',
    tag: { en: 'Web2 · Beauty E-commerce', es: 'Web2 · E-commerce Belleza' },
    description: {
      en: 'Full beauty e-commerce demo: real search/filter/sort catalog, a cart drawer, and a 3-step simulated checkout.',
      es: 'Demo completa de e-commerce de belleza: catálogo con búsqueda/filtro/orden real, cart drawer y checkout simulado en 3 pasos.',
    },
  },
  {
    name: 'Maison Ámbar',
    alias: { en: 'Luxury cosmetics boutique', es: 'Boutique de cosmética de lujo' },
    url: 'https://showcase-edg.vercel.app/belleza/boutique-cosmeticos',
    bucket: 'Web2',
    tag: { en: 'Web2 · Beauty E-commerce', es: 'Web2 · E-commerce Belleza' },
    description: {
      en: 'Editorial luxury cosmetics site — drag-scroll collection, letter-by-letter hero reveal, and a nav that hides on scroll-down and reappears on scroll-up.',
      es: 'Sitio editorial de cosmética de lujo — colección con drag-scroll, reveal del hero letra por letra, y nav que se oculta al bajar y reaparece al subir.',
    },
  },
  {
    name: 'Raíz & Piel',
    alias: { en: 'Haircare/skincare', es: 'Cabello y skincare' },
    url: 'https://showcase-edg.vercel.app/belleza/cabello-skincare',
    bucket: 'Web2',
    tag: { en: 'Web2 · Beauty E-commerce', es: 'Web2 · E-commerce Belleza' },
    description: {
      en: 'Haircare/skincare demo built around a 3-question quiz that recommends real products from the catalog.',
      es: 'Demo de cabello/skincare construida alrededor de un quiz de 3 preguntas que recomienda productos reales del catálogo.',
    },
  },
  {
    name: 'Consultorio Dental Familiar',
    url: 'https://showcase-edg.vercel.app/dentistas/consultorio-familiar',
    bucket: 'Web2',
    tag: { en: 'Web2 · Dental Clinic', es: 'Web2 · Clínica Dental' },
    description: {
      en: 'Family dental clinic demo with icon-tile services, a real appointment scheduler, and an FAQ accordion.',
      es: 'Demo de consultorio dental familiar con servicios en iconos-tile, agendador de citas real y acordeón de preguntas frecuentes.',
    },
  },
  {
    name: 'Clínica Dental Premium',
    url: 'https://showcase-edg.vercel.app/dentistas/clinica-premium',
    bucket: 'Web2',
    tag: { en: 'Web2 · Dental Clinic', es: 'Web2 · Clínica Dental' },
    description: {
      en: "Premium dental clinic microsite with credentialed specialists, tabbed treatments priced 'from $X', and a patient-experience timeline.",
      es: "Microsite de clínica dental premium con especialistas acreditados, tratamientos en tabs con precio 'desde $X' y timeline de experiencia del paciente.",
    },
  },
  {
    name: 'Clínica de Estética Dental',
    url: 'https://showcase-edg.vercel.app/dentistas/clinica-estetica',
    bucket: 'Web2',
    tag: { en: 'Web2 · Dental Clinic', es: 'Web2 · Clínica Dental' },
    description: {
      en: 'Cosmetic dentistry demo built around a keyboard-accessible drag-to-reveal before/after slider.',
      es: 'Demo de estética dental construida alrededor de un slider antes/después con arrastre y soporte completo de teclado.',
    },
  },
  {
    name: 'El Velador',
    alias: { en: 'The Watchman', es: 'El Vigilante' },
    url: 'https://el-velador-bot.vercel.app/',
    preview: previewImg_el_velador,
    bucket: 'Seguridad',
    tag: { en: 'Web3 · Security Bot', es: 'Web3 · Bot de Seguridad' },
    description: {
      en: 'Scans pump.fun tokens in seconds — deployer history, holder distribution, market signals — and returns a traffic-light risk read. Free with a daily limit, unlimited while holding $VELADOR.',
      es: 'Analiza tokens de pump.fun en segundos: historial del deployer, distribución de holders y señales de mercado, con un semáforo de riesgo. Gratis con límite diario, ilimitado holdeando $VELADOR.',
    },
  },
];

export const socials = [
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/alfa_edg_/',
    icon: 'instagram',
  },
  {
    name: 'X',
    url: 'https://x.com/ALFA_EDG',
    icon: 'x',
  },
  {
    name: 'WhatsApp',
    url: 'https://wa.me/525655102956?text=Hola%20Edgar%2C%20vi%20tu%20portafolio%20y%20quiero%20platicar%20de%20un%20proyecto',
    icon: 'whatsapp',
  },
  {
    name: 'Telegram',
    url: 'https://t.me/ALFA_EDG',
    icon: 'telegram',
  },
  {
    name: 'Email',
    url: 'mailto:edgarlopezbaeza.ing@gmail.com',
    icon: 'mail',
  },
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/edgar.lopez.58747?locale=es_LA',
    icon: 'facebook',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/edgar-lopez-baeza-6b5a22353',
    icon: 'linkedin',
  },
];
