import previewImg_kipu_anon from './assets/previews/kipu-anon.webp';
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
import previewImg_fyv_box from './assets/previews/fyv-box.webp';
import previewImg_sepuente from './assets/previews/sepuente.webp';
import previewImg_squash from './assets/previews/squash.webp';
import previewImg_ronda_ciega from './assets/previews/ronda-ciega.webp';
import previewImg_palpito from './assets/previews/palpito.webp';

import previewImg_wip from './assets/previews/wip.webp';
import previewImg_monglizone from './assets/previews/monglizone.webp';
import previewImg_barberia_urbana from './assets/previews/barberia-urbana.webp';
import previewImg_barberia_premium from './assets/previews/barberia-premium.webp';
import previewImg_barberia_moderna from './assets/previews/barberia-moderna.webp';
import previewImg_autos_seminuevos from './assets/previews/autos-seminuevos.webp';
import previewImg_autos_premium from './assets/previews/autos-premium.webp';
import previewImg_autos_camionetas from './assets/previews/autos-camionetas.webp';
import previewImg_belleza_tienda from './assets/previews/belleza-tienda.webp';
import previewImg_belleza_boutique from './assets/previews/belleza-boutique.webp';
import previewImg_belleza_cabello from './assets/previews/belleza-cabello.webp';
import previewImg_dental_familiar from './assets/previews/dental-familiar.webp';
import previewImg_dental_premium from './assets/previews/dental-premium.webp';
import previewImg_dental_estetica from './assets/previews/dental-estetica.webp';

// Orden: lo mas reciente primero.
export const projects = [
  {
    name: 'kipu-anon',
    alias: 'Frontier CDMX/26 · Reto 1',
    url: 'https://kipu-anon.vercel.app/',
    status: 'live',
    preview: previewImg_kipu_anon,
    bucket: 'Seguridad',
    tag: { en: 'Data Privacy · API', es: 'Privacidad de datos · API' },
    description: {
      en: 'A service that pseudonymizes the support conversations of a fictional fintech (Kipu Pay). Each customer gets a stable disguise (another name, ID number and email) that holds across chats, documents and tables, so the data can train models without exposing anyone. Rule-based, no generative AI. Built with @ElizabethCruz-CM at the Frontier CDMX/26 hackathon (lab10.ai); you can try it with a message on the page.',
      es: 'Servicio que seudonimiza las conversaciones de soporte de una fintech ficticia (Kipu Pay). Cada cliente recibe un disfraz estable, con otro nombre, otra cédula y otro correo, que se mantiene en chats, documentos y tablas, para que los datos sirvan para entrenar modelos sin exponer a nadie. Funciona con reglas, sin IA generativa. Hecho con @ElizabethCruz-CM en el hackathon Frontier CDMX/26 (lab10.ai); en la página puedes probarlo con un mensaje.',
    },
  },
  {
    name: 'FYV Box',
    url: 'https://fyv-box.vercel.app/',
    status: 'live',
    env: { en: 'Stellar testnet', es: 'Stellar testnet' },
    preview: previewImg_fyv_box,
    bucket: 'Seguridad',
    tag: { en: 'Web3 · Security Education', es: 'Web3 · Educación en Seguridad' },
    description: {
      en: 'A free crypto-scam simulator in Spanish: 22 drills (phishing, fake airdrops, social engineering, dangerous signatures, fake presales, key handling) across 6 modules. Finish a module and you get a credential on Stellar testnet (a transaction plus a Soroban contract record) that any wallet or dApp can verify.',
      es: 'Simulador gratuito de estafas crypto en español: 22 simulacros (phishing, airdrops falsos, ingeniería social, firmas peligrosas, preventas falsas, manejo de llaves) en 6 módulos. Al completar un módulo recibes una credencial en Stellar testnet (transacción + contrato Soroban) que cualquier wallet o dApp puede verificar.',
    },
  },
  {
    name: 'SEPuente',
    url: 'https://sepuente.vercel.app/',
    status: 'demo',
    preview: previewImg_sepuente,
    env: { en: 'Stellar testnet · simulated SPEI', es: 'Stellar testnet · SPEI simulado' },
    bucket: 'Infra',
    tag: { en: 'Web3 · Stellar · SPEI', es: 'Web3 · Stellar · SPEI' },
    description: {
      en: 'An open-source, non-custodial gateway that exposes Mexican peso on/off-ramps as a standard Stellar anchor (SEP-1, 10, 24 and 38): send pesos by SPEI (simulated in the demo) and receive them in any SEP-24 wallet, and back. It passed 75 of 76 official SDF anchor tests. Demo deposits and withdrawals are paused until its database is back. Built for GOYA HACK · CriptoUNAM 2026.',
      es: 'Gateway open source y no custodial que presenta las rampas de pesos mexicanos como un anchor estándar de Stellar (SEP-1, 10, 24 y 38): mandas pesos por SPEI (simulado en la demo) y los recibes en cualquier wallet SEP-24, y de regreso. Pasó 75 de 76 pruebas oficiales de anchor de SDF. Hoy los depósitos y retiros de la demo están en pausa mientras vuelve su base de datos. Construido para GOYA HACK · CriptoUNAM 2026.',
    },
  },
  {
    name: 'El Velador',
    alias: { en: 'The Watchman', es: 'El Vigilante' },
    url: 'https://el-velador-bot.vercel.app/',
    status: 'offline',
    env: { en: 'Solana mainnet · read-only', es: 'Solana mainnet · solo lectura' },
    preview: previewImg_el_velador,
    bucket: 'Seguridad',
    tag: { en: 'Web3 · Security Bot', es: 'Web3 · Bot de Seguridad' },
    description: {
      en: 'A Telegram bot that checks pump.fun tokens (who launched them, how concentrated the supply is, whether the creator already sold) and replies with a risk traffic light and the reason behind it. Paused: pump.fun blocks automated requests to its API and its database is down, so it can\'t produce new reports today.',
      es: 'Bot de Telegram que revisa tokens de pump.fun (quién los lanzó, qué tan concentrada está la oferta y si el creador ya vendió) y responde con un semáforo de riesgo y su razón. En pausa: pump.fun bloquea las consultas automáticas a su API y su base de datos está caída, así que hoy no genera reportes nuevos.',
    },
  },
  {
    name: 'Squash',
    alias: { en: 'git squash, but for money', es: 'git squash, pero para dinero' },
    url: 'https://squash-pay.vercel.app/',
    status: 'demo',
    env: { en: 'Hedera testnet', es: 'Hedera testnet' },
    preview: previewImg_squash,
    bucket: 'Infra',
    tag: { en: 'Web3 · Hedera · x402', es: 'Web3 · Hedera · x402' },
    description: {
      en: 'Split the bill at the table with a QR: everyone confirms their share and one scheduled Hedera testnet transaction settles it all on the last "yes". Its netting engine finds the exact minimum number of transfers (15 cross debts → 3 payments) and charges per calculation over x402. The sample trip works today; splitting a new bill is offline until its database is back.',
      es: 'Divide la cuenta en la mesa con un QR: cada quien confirma su parte y una sola transacción programada en Hedera testnet liquida todo con el último «sí». Su motor de compensación calcula el mínimo exacto de transferencias (15 deudas cruzadas → 3 pagos) y cobra cada cálculo vía x402. Hoy funciona el viaje de ejemplo; dividir una cuenta nueva está fuera de línea mientras vuelve su base de datos.',
    },
  },
  {
    name: 'Ronda Ciega',
    alias: { en: 'Blind Matching', es: 'Matching a ciegas' },
    url: 'https://ronda-ciega.vercel.app/',
    status: 'live',
    preview: previewImg_ronda_ciega,
    env: { en: 'Solana devnet · MagicBlock Private ER', es: 'Solana devnet · MagicBlock Private ER' },
    bucket: 'Infra',
    tag: { en: 'Web3 · Solana · Privacy', es: 'Web3 · Solana · Privacidad' },
    description: {
      en: 'Blind stable matching on Solana: founders and builders rank each other, Gale–Shapley runs inside a MagicBlock Private Ephemeral Rollup with VRF randomness, and only the pairings come out; the preference lists are never published. You can run the algorithm in the browser without a wallet. Built for MagicBlock Solana Blitz v8.',
      es: 'Matching estable a ciegas en Solana: founders y builders se rankean entre sí, el algoritmo Gale–Shapley corre dentro de un Private Ephemeral Rollup de MagicBlock con aleatoriedad VRF y solo salen las parejas; las listas de preferencias nunca se publican. Puedes correr el algoritmo en el navegador sin wallet. Construido para MagicBlock Solana Blitz v8.',
    },
  },
  {
    name: 'Palpito',
    url: 'https://palpito-somnia.vercel.app/',
    status: 'live',
    env: { en: 'Somnia testnet', es: 'Somnia testnet' },
    preview: previewImg_palpito,
    bucket: 'Infra',
    tag: { en: 'Web3 · Somnia · Social', es: 'Web3 · Somnia · Social' },
    description: {
      en: 'A social wall of BTC and ETH calls: every call is a real position on DreamDEX event contracts that an oracle settles when its window closes, with a leaderboard computed from the chain. Making one needs a wallet with testnet tokens. Built for the Somnia × DreamDEX Hackathon.',
      es: 'Muro social de predicciones sobre BTC y ETH: cada palpito es una posición real en los event contracts de DreamDEX que un oráculo liquida al cerrar la ventana, con un ranking calculado desde la cadena. Para hacer uno necesitas una wallet con tokens de testnet. Construido para el Somnia × DreamDEX Hackathon.',
    },
  },
  {
    name: 'MAD',
    alias: 'Mongli Agent Delphi',
    url: 'https://mad-mongli-agent.vercel.app/',
    status: 'demo',
    preview: previewImg_mad,
    env: { en: 'Gensyn testnet · competition over', es: 'Gensyn testnet · competencia terminada' },
    bucket: 'IA',
    tag: { en: 'AI · Trading Agent', es: 'IA · Agente de Trading' },
    description: {
      en: 'An autonomous trading agent that only bet on a prediction market when a named public data source backed the number, and abstained otherwise. It competed in Gensyn\'s Delphi Agent Arena (Aug 14–24, 2026) and closed at 1,766.37 TST, 18th of 164; the page shows that final record.',
      es: 'Agente de trading autónomo que solo apostaba en un mercado de predicción cuando un dato público con nombre respaldaba el número, y se abstenía si no. Compitió en el Delphi Agent Arena de Gensyn (14–24 ago 2026) y cerró en 1,766.37 TST, puesto 18 de 164; la página muestra ese registro final.',
    },
  },
  {
    name: 'AVS',
    alias: 'Anonymous Venture Syndicate',
    url: 'https://avs-mou.vercel.app/',
    status: 'demo',
    env: { en: 'Solana devnet', es: 'Solana devnet' },
    preview: previewImg_avs,
    bucket: 'Infra',
    tag: { en: 'Web3 · Solana', es: 'Web3 · Solana' },
    description: {
      en: 'Sealed-bid venture syndicates on Solana: investors bid and vote on a startup\'s milestones, and the amounts are revealed together. Privacy relies on permissioned MagicBlock Ephemeral Rollup accounts; the published site is a devnet demo with no open rounds to bid on today. Built for the Solana Blitz V7 Hackathon.',
      es: 'Sindicatos de inversión con pujas selladas en Solana: los inversores pujan y votan los hitos de una startup, y los montos se revelan a la vez. La privacidad se apoya en cuentas con permiso de MagicBlock Ephemeral Rollups; el sitio publicado es una demo en devnet y hoy no tiene rondas abiertas para pujar. Construido para el Solana Blitz V7 Hackathon.',
    },
  },
  {
    name: 'AVAL',
    alias: 'Mou Casper',
    url: 'https://mou-casper.vercel.app/',
    status: 'demo',
    env: { en: 'Casper testnet', es: 'Casper testnet' },
    preview: previewImg_aval,
    bucket: 'Infra',
    tag: { en: 'DeFi · AI Agents', es: 'DeFi · Agentes IA' },
    description: {
      en: 'An autonomous underwriting desk on Casper: two AI agents price a demo batch of invoices and back their quote with their own CSPR; when they are wrong they lose stake and reputation on-chain. The site is a read-only view of the real on-chain stake and the July run history. Casper Agentic Buildathon 2026.',
      es: 'Mesa de suscripción de riesgo autónoma en Casper: dos agentes de IA cotizan un lote de facturas de demostración y respaldan su cotización con CSPR propio; si se equivocan, pierden stake y reputación on-chain. El sitio muestra en solo lectura el stake real en la cadena y el historial de corridas de julio. Casper Agentic Buildathon 2026.',
    },
  },
  {
    name: 'Mou Fut',
    url: 'https://moufut.vercel.app/',
    status: 'demo',
    env: { en: 'Sepolia testnet · demo mode', es: 'Sepolia testnet · modo demo' },
    preview: previewImg_moufut,
    bucket: 'Infra',
    tag: { en: 'P2P · On-device AI', es: 'P2P · IA on-device' },
    description: {
      en: 'Serverless P2P football: mesh chat, an on-device AI commentator and a USDt pool with peer-signed bets, with the wallet in demo mode on Sepolia. It is a desktop app built on Pear; the page is its landing with an animated demo. Tether Developers Cup 2026.',
      es: 'Fútbol P2P sin servidor: chat en malla, comentarista con IA on-device y quiniela en USDt con apuestas firmadas entre pares, con la cartera en modo demo sobre Sepolia. Es una app de escritorio hecha en Pear; la página es su landing con una demo animada. Tether Developers Cup 2026.',
    },
  },
  {
    name: 'Nexus LATAM',
    url: 'https://nexus-latam-kappa.vercel.app/',
    status: 'demo',
    preview: previewImg_nexus_latam,
    env: { en: 'Arbitrum Sepolia · simulated demo', es: 'Arbitrum Sepolia · demo simulada' },
    bucket: 'Infra',
    tag: { en: 'B2B · Arbitrum', es: 'B2B · Arbitrum' },
    description: {
      en: 'A concept for settling and financing B2B trade across LATAM with AI agents, Arbitrum Stylus contracts and Bitso payment rails. The site is a simulated demo: the contracts and API are not deployed, so trades, figures and agent activity are sample data. ETH México 2026.',
      es: 'Concepto de liquidación y financiamiento de comercio B2B en LATAM con agentes de IA, contratos en Arbitrum Stylus y rieles de pago de Bitso. El sitio es una demo simulada: los contratos y la API no están desplegados, así que operaciones, cifras y actividad de agentes son datos de ejemplo. ETH México 2026.',
    },
  },
  {
    name: 'MonkeyClone',
    url: 'https://monkeyclone.vercel.app/',
    status: 'demo',
    preview: previewImg_monkeyclone,
    env: { en: 'Solana devnet · demo mode', es: 'Solana devnet · modo demo' },
    bucket: 'Infra',
    tag: { en: 'Web3 · Solana', es: 'Web3 · Solana' },
    description: {
      en: 'Copy-trading on Solana with a fantasy-draft twist: pick three traders, deposit once, and the protocol mirrors their trades proportionally. The site is a demo with sample traders and a vault simulated in your browser, with no wallet and no real money; the Anchor program is already on devnet.',
      es: 'Copy-trading en Solana con mecánica de fantasy draft: eliges tres traders, depositas una vez y el protocolo copia sus operaciones de forma proporcional. La web es una demo con traders de ejemplo y un vault simulado en tu navegador, sin wallet ni dinero real; el programa Anchor ya está en devnet.',
    },
  },
  {
    name: 'ChainGuard',
    url: 'https://chainguard-pi.vercel.app/',
    status: 'live',
    preview: previewImg_chainguard,
    env: { en: 'Static analysis · no wallet', es: 'Análisis estático · sin wallet' },
    bucket: 'Seguridad',
    tag: { en: 'Web3 · Security', es: 'Web3 · Seguridad' },
    description: {
      en: 'A Solidity contract scanner: paste the code and in under a second it flags 6 SWC vulnerability classes (reentrancy, tx.origin, overflow, unchecked calls, unprotected selfdestruct and missing visibility), with a PDF report. It\'s an automated pattern-based check, not a replacement for an audit. Built for HackOWASP 8.0.',
      es: 'Escáner de contratos Solidity: pegas el código y en menos de un segundo marca 6 tipos de vulnerabilidad del registro SWC (reentrancy, tx.origin, overflow, llamadas sin verificar, selfdestruct sin protección y visibilidad faltante), con reporte en PDF. Es una revisión automática por patrones, no sustituye una auditoría. Hecho para HackOWASP 8.0.',
    },
  },
  {
    name: 'Mou IA',
    alias: 'Signal Intelligence',
    url: 'https://mongli-agent-ia.vercel.app/',
    status: 'demo',
    preview: previewImg_mongli_agent_ia,
    env: { en: 'Mantle · demo mode', es: 'Mantle · modo demo' },
    bucket: 'IA',
    tag: { en: 'AI · Mantle · On-chain', es: 'IA · Mantle · On-chain' },
    description: {
      en: 'An on-chain intelligence dashboard for tracking smart money on Mantle: a signal feed, wallet explorer, and analytics for whale moves and anomalies. It currently runs in demo mode with sample signals; the contract and agent that write them on-chain are not deployed yet.',
      es: 'Dashboard de inteligencia on-chain para seguir «smart money» en Mantle: feed de señales, explorador de wallets y analítica de ballenas y anomalías. Hoy corre en modo demo con señales de ejemplo; el contrato y el agente que las escriben on-chain aún no están desplegados.',
    },
  },
  {
    name: 'Mongli Pool',
    url: 'https://mongli-pool.vercel.app/',
    status: 'live',
    env: { en: 'Stellar testnet', es: 'Stellar testnet' },
    preview: previewImg_mongli_pool,
    bucket: 'Infra',
    tag: { en: 'Web3 · Pool', es: 'Web3 · Pool' },
    description: {
      en: 'A privacy pool on Stellar with compliance built in: deposit, then withdraw to another address without anyone linking the two. The ZK proof (Groth16) is generated in your browser and verified by a Soroban contract. You can try it without a wallet using a temporary testnet account. Built for Stellar Hacks: ZK 2025.',
      es: 'Pool de privacidad en Stellar con cumplimiento integrado: depositas y retiras a otra dirección sin que nadie pueda vincular ambas operaciones. La prueba ZK (Groth16) se genera en tu navegador y la verifica un contrato Soroban. Se puede probar sin wallet con una cuenta temporal de testnet. Construido para Stellar Hacks: ZK 2025.',
    },
  },
  {
    name: 'Mongli Pool',
    alias: { en: 'Presentation Design', es: 'Diseño de presentación' },
    url: 'https://presentacionde-monglipool.vercel.app/',
    status: 'live',
    preview: previewImg_mongli_pool_deck,
    bucket: 'Otros',
    tag: { en: 'Web Design · Presentation', es: 'Diseño Web · Presentación' },
    description: {
      en: 'A slide-deck framework built from scratch in plain HTML/CSS/JS, no build step: keyboard and swipe navigation, animated transitions, EN/ES, a light/dark theme and a CSS-only 3D background. This one carries the MongliPool pitch as its content, but the framework is the real deliverable.',
      es: 'Un framework de presentación hecho desde cero en HTML/CSS/JS puro, sin build: navegación con teclado y swipe, transiciones animadas, EN/ES, tema claro/oscuro y un fondo 3D hecho solo con CSS. Aquí lleva el pitch de MongliPool como contenido, pero lo que se entrega es el framework.',
    },
  },
  {
    name: 'Mongli Game',
    url: 'https://mongli-game.vercel.app/',
    status: 'live',
    env: { en: '0G Galileo testnet', es: '0G Galileo testnet' },
    preview: previewImg_mongli_game,
    bucket: 'Gaming',
    tag: { en: 'Gaming', es: 'Gaming' },
    description: {
      en: 'A noir amnesia thriller: an AI narrator writes memory fragments from your choices across 5 acts. With a wallet, every finished act and speedrun record is logged by a real transaction on 0G Galileo testnet; storing the text on 0G Storage is still simulated. Zero Cup 2026.',
      es: 'Thriller noir de amnesia: un narrador con IA escribe fragmentos de memoria según tus decisiones a lo largo de 5 actos. Con wallet, cada acto terminado y cada récord de speedrun queda registrado con una transacción real en 0G Galileo testnet; el guardado del texto en 0G Storage aún es simulado. Zero Cup 2026.',
    },
  },
  {
    name: 'Kivo App',
    url: 'https://kivo-app-five.vercel.app/',
    status: 'demo',
    preview: previewImg_kivo,
    env: { en: 'Stellar testnet · demo view', es: 'Stellar testnet · vista demo' },
    bucket: 'Infra',
    tag: { en: 'Web3 · Stellar', es: 'Web3 · Stellar' },
    description: {
      en: 'Programmatic escrow on Stellar for Mexican commerce: money stays locked in a contract and only releases once both sides confirm delivery (built on Trustless Work). The published site is a demo view: creating and funding escrows needs keys this deployment doesn\'t have. Built for the Stellar Hackathon 2026.',
      es: 'Custodia programática (escrow) sobre Stellar para el comercio mexicano: el dinero queda retenido en un contrato y solo se libera cuando ambas partes confirman la entrega (con Trustless Work). El sitio publicado es una vista demo: crear y financiar custodias requiere llaves que este despliegue no tiene. Construido para el Stellar Hackathon 2026.',
    },
  },
  {
    name: 'Crystal Vanilla',
    url: 'https://crystal-vanilla.vercel.app/',
    status: 'live',
    preview: previewImg_crystal_vanilla,
    bucket: 'Otros',
    tag: { en: 'Web App', es: 'Web App' },
    description: {
      en: 'A production calculator for a vanilla-extract business: turns available liters into stores, boxes, bottles and label rolls (or the other way around, from stores to liters) and exports the result to PDF. Built for a freelance client.',
      es: 'Calculadora de producción para un negocio de extracto de vainilla: convierte los litros disponibles en tiendas, cajas, botellas y rollos de etiquetas (o al revés, de tiendas a litros) y exporta el resultado a PDF. Hecha para un cliente freelance.',
    },
  },
  {
    name: 'Refugio',
    alias: 'Wall of Guardians',
    url: 'https://wall-of-guardians.vercel.app/',
    status: 'demo',
    preview: previewImg_refugio,
    env: { en: 'Decentraland SDK7 · web demo', es: 'Decentraland SDK7 · demo web' },
    bucket: 'Gaming',
    tag: { en: 'Decentraland · Social', es: 'Decentraland · Social' },
    description: {
      en: 'A multiplayer Decentraland (SDK7) campfire that only burns when people show up, with no host or scheduled event and a co-op mini-game to keep it alive. Shown here is the companion site: a leaderboard with sample data (the scene isn\'t published yet) and a playable in-browser demo of the mechanic. Built for the Friendzone Hackathon.',
      es: 'Una fogata multijugador para Decentraland (SDK7) que solo arde cuando llega gente, sin anfitrión ni evento programado, con un minijuego cooperativo para mantenerla viva. Aquí se ve el sitio companion: un leaderboard con datos de muestra (la escena aún no está publicada) y una demo jugable de la mecánica en el navegador. Hecho para el Friendzone Hackathon.',
    },
  },
  {
    name: 'Flor de Sil',
    url: 'https://flor-de-sil.vercel.app/',
    status: 'offline',
    preview: previewImg_flor_de_sil,
    bucket: 'Freelance',
    tag: { en: 'Freelance / Client', es: 'Freelance / Cliente' },
    description: {
      en: 'An online catalog of flower arrangements with an admin panel to manage stock and photos; orders come in through WhatsApp. Built for a freelance client. The catalog is offline today until its database is back.',
      es: 'Catálogo en línea de arreglos florales con panel de administración para manejar el inventario y las fotos; los pedidos llegan por WhatsApp. Hecho para un cliente freelance. Hoy el catálogo está fuera de línea mientras vuelve su base de datos.',
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
    status: 'live',
    preview: previewImg_tianguis_ia,
    bucket: 'IA',
    tag: { en: 'AI · Marketplace', es: 'IA · Marketplace' },
    description: {
      en: 'A voice-first Mexican marketplace: sellers upload photos and say the price, and the AI drafts the listing for them to review and publish; buyers search by voice or text, and the AI turns the request into filters. In closed beta, with a real catalog.',
      es: 'Marketplace mexicano por voz: el vendedor sube fotos y dice el precio, y la IA redacta la ficha para que él la revise y publique; el comprador también busca hablando o escribiendo, y la IA convierte la frase en filtros. En beta cerrada, con catálogo real.',
    },
  },
  {
    name: 'WIP',
    alias: 'Wallet Integration Piggy',
    url: 'https://wip-piggy.vercel.app/',
    status: 'offline',
    preview: previewImg_wip,
    env: { en: 'Sepolia testnet', es: 'Sepolia testnet' },
    bucket: 'IA',
    tag: { en: 'AI Agent · WDK · Wallet', es: 'Agente IA · WDK · Wallet' },
    description: {
      en: 'A shared piggy bank run by an agent with its own wallet: you ask for a payment in plain text and a deterministic rulebook (caps, allowlist, monthly budget, approvals) decides whether to send test USD₮ on Sepolia or tells you which rule you broke. Every payment and every rejection is logged. The dashboard is offline today until its database is back. Built for the Aleph Hackathon, WDK Track.',
      es: 'Alcancía compartida con un agente que tiene billetera propia: pides un pago escribiendo y un reglamento determinista (topes, lista blanca, presupuesto mensual, aprobaciones) decide si se envía USD₮ de prueba en Sepolia o te dice qué regla rompiste. Cada pago y cada rechazo queda registrado. Hoy el panel está fuera de línea mientras vuelve su base de datos. Construido para el Aleph Hackathon, WDK Track.',
    },
  },
  {
    name: 'MongliZone',
    alias: 'Creative Minds Jam #1',
    url: 'https://monglizone.vercel.app/',
    status: 'live',
    preview: previewImg_monglizone,
    env: { en: 'AI · access key required', es: 'IA · acceso con clave' },
    bucket: 'IA',
    tag: { en: 'AI · Content Mind', es: 'IA · Mind de Contenido' },
    description: {
      en: 'An AI content director: give it an idea by text or voice note (web or Telegram), it picks the format (a multi-photo carousel, a 1–3 minute video, or a caption), generates it, sends it for review, and only publishes once you approve. Built as a Mind on Minds by Animoca Brands; the web app is internal and requires an access key.',
      es: 'Director de contenido con IA: le das una idea por texto o nota de voz (web o Telegram), decide el formato (carrusel de varias fotos, video de 1–3 min o caption), lo genera, lo manda a revisión y solo publica si lo apruebas. Construido como Mind sobre Minds by Animoca Brands; la web es de uso interno y pide clave de acceso.',
    },
  },
  {
    name: 'Moux402',
    alias: 'x402 API Monetization',
    url: 'https://mou-x402.vercel.app/',
    status: 'demo',
    preview: previewImg_moux402,
    env: { en: 'Base Sepolia · Solana devnet · Stellar testnet', es: 'Base Sepolia · Solana devnet · Stellar testnet' },
    bucket: 'Infra',
    tag: { en: 'Infra · x402', es: 'Infra · x402' },
    description: {
      en: 'Put any API behind pay-per-call with the x402 protocol in one command (npx x402ify): the buyer, human or AI agent, pays from their own wallet and the payment lands straight in the seller\'s wallet, with no custody and no signup. Demo on testnets.',
      es: 'Pon cualquier API detrás de un cobro por llamada con el protocolo x402 en un solo comando (npx x402ify): el comprador, humano o agente de IA, paga desde su wallet y el pago llega directo a la wallet del vendedor, sin custodia ni registro. Demo en testnets.',
    },
  },
  {
    // Showcase comercial de 12 demos freelance (Next.js, repo separado
    // showcase-edg). Negocios ficticios: se etiquetan como demo en la tarjeta.
    name: 'Barbería Urbana',
    url: 'https://showcase-edg.vercel.app/barberias/barberia-urbana',
    status: 'demo',
    preview: previewImg_barberia_urbana,
    env: { en: 'Demo · fictional business', es: 'Demo · negocio ficticio' },
    bucket: 'Web2',
    tag: { en: 'Web2 · Barbershop', es: 'Web2 · Barbería' },
    description: {
      en: 'Editorial barbershop landing with a guided booking flow (service → barber → time slot) that drafts a ready-to-send WhatsApp message, receipt-style pricing and a one-tap WhatsApp button. Fictional business: availability is simulated. One of 12 commercial demos built to sell websites to local businesses.',
      es: 'Landing editorial de barbería con reserva guiada (servicio → barbero → horario) que deja listo el mensaje de WhatsApp, precios estilo ticket y botón directo a WhatsApp. Negocio ficticio: la agenda es simulada. Una de 12 demos comerciales para vender sitios web a negocios locales.',
    },
  },
  {
    name: 'Barbería Premium',
    url: 'https://showcase-edg.vercel.app/barberias/barberia-premium',
    status: 'demo',
    preview: previewImg_barberia_premium,
    env: { en: 'Demo · fictional business', es: 'Demo · negocio ficticio' },
    bucket: 'Web2',
    tag: { en: 'Web2 · Barbershop', es: 'Web2 · Barbería' },
    description: {
      en: 'A quiet, editorial barbershop site built on negative space and a single reservation modal (service, barber, time) that ends in WhatsApp. Simulated availability.',
      es: 'Sitio de barbería editorial y pausado, con mucho espacio en blanco y un único modal de reserva (servicio, barbero y horario) que termina en WhatsApp. Agenda simulada.',
    },
  },
  {
    name: 'Barbería Moderna',
    url: 'https://showcase-edg.vercel.app/barberias/barberia-moderna',
    status: 'demo',
    preview: previewImg_barberia_moderna,
    env: { en: 'Demo · fictional business', es: 'Demo · negocio ficticio' },
    bucket: 'Web2',
    tag: { en: 'Web2 · Barbershop', es: 'Web2 · Barbería' },
    description: {
      en: 'Gen-Z barbershop demo: pill navigation, Instagram-style horizontal service stories and a 4-step booking flow with animated progress dots.',
      es: 'Demo de barbería con estética Gen Z: nav en píldora, servicios en stories horizontales estilo Instagram y reserva en 4 pasos con puntos de progreso animados.',
    },
  },
  {
    name: 'Auto Confianza CDMX',
    alias: { en: 'Used-car dealership', es: 'Agencia de seminuevos' },
    url: 'https://showcase-edg.vercel.app/autos/agencia-seminuevos',
    status: 'demo',
    preview: previewImg_autos_seminuevos,
    env: { en: 'Demo · fictional business', es: 'Demo · negocio ficticio' },
    bucket: 'Web2',
    tag: { en: 'Web2 · Auto Dealer', es: 'Web2 · Agencia de Autos' },
    description: {
      en: 'Used-car dealership demo: inventory with search, filters (body type and price) and sorting, a 2-car comparator, and a monthly-payment simulator on every vehicle page (estimate).',
      es: 'Demo de agencia de seminuevos: inventario con búsqueda, filtros (carrocería y precio) y orden, comparador de 2 autos y simulador de mensualidad en la ficha de cada vehículo (cálculo estimado).',
    },
  },
  {
    name: 'Aurea Motors',
    alias: { en: 'Luxury car microsite', es: 'Microsite de auto de lujo' },
    url: 'https://showcase-edg.vercel.app/autos/autos-premium',
    status: 'demo',
    preview: previewImg_autos_premium,
    env: { en: 'Demo · fictional brand', es: 'Demo · marca ficticia' },
    bucket: 'Web2',
    tag: { en: 'Web2 · Auto Dealer', es: 'Web2 · Agencia de Autos' },
    description: {
      en: 'Cinematic single-vehicle microsite for a fictional luxury brand: the color configurator swaps the photo instantly and key specs count up as they come into view.',
      es: 'Microsite cinematográfico de un solo auto de una marca de lujo ficticia: el configurador de color cambia la foto al momento y las cifras clave cuentan hasta su valor al aparecer.',
    },
  },
  {
    name: 'Terreno Norte 4x4',
    alias: { en: 'Pickup/SUV dealership', es: 'Agencia de camionetas/SUVs' },
    url: 'https://showcase-edg.vercel.app/autos/autos-camionetas',
    status: 'demo',
    preview: previewImg_autos_camionetas,
    env: { en: 'Demo · fictional business', es: 'Demo · negocio ficticio' },
    bucket: 'Web2',
    tag: { en: 'Web2 · Auto Dealer', es: 'Web2 · Agencia de Autos' },
    description: {
      en: 'Pickup/SUV dealership demo: inventory filtered by terrain, a pickup-vs-SUV comparison table and animated payload/towing bars on each vehicle page.',
      es: 'Demo de agencia de pickups y SUVs: inventario filtrable por terreno, tabla comparativa pickup vs SUV y barras animadas de carga y remolque en cada ficha.',
    },
  },
  {
    name: 'Casa Aroma',
    alias: { en: 'Beauty e-commerce', es: 'E-commerce de belleza' },
    url: 'https://showcase-edg.vercel.app/belleza/tienda-productos',
    status: 'demo',
    preview: previewImg_belleza_tienda,
    env: { en: 'Demo · fictional business', es: 'Demo · negocio ficticio' },
    bucket: 'Web2',
    tag: { en: 'Web2 · Beauty E-commerce', es: 'Web2 · E-commerce Belleza' },
    description: {
      en: 'Full beauty e-commerce demo: catalog with search, categories and sorting, a cart drawer and a simulated 3-step checkout (no payment or shipping).',
      es: 'E-commerce de belleza completo en modo demo: catálogo con búsqueda, categorías y orden, carrito lateral y checkout simulado de 3 pasos (no cobra ni envía nada).',
    },
  },
  {
    name: 'Maison Ámbar',
    alias: { en: 'Luxury cosmetics boutique', es: 'Boutique de cosmética de lujo' },
    url: 'https://showcase-edg.vercel.app/belleza/boutique-cosmeticos',
    status: 'demo',
    preview: previewImg_belleza_boutique,
    env: { en: 'Demo · fictional brand', es: 'Demo · marca ficticia' },
    bucket: 'Web2',
    tag: { en: 'Web2 · Beauty E-commerce', es: 'Web2 · E-commerce Belleza' },
    description: {
      en: 'Editorial luxury cosmetics site: a drag-to-browse collection, a letter-by-letter hero reveal and a nav that hides on scroll-down and returns on scroll-up.',
      es: 'Sitio editorial de cosmética de lujo: colección que se recorre arrastrando, título que aparece letra por letra y nav que se oculta al bajar y vuelve al subir.',
    },
  },
  {
    name: 'Raíz & Piel',
    alias: { en: 'Haircare/skincare', es: 'Cabello y skincare' },
    url: 'https://showcase-edg.vercel.app/belleza/cabello-skincare',
    status: 'demo',
    preview: previewImg_belleza_cabello,
    env: { en: 'Demo · fictional brand', es: 'Demo · marca ficticia' },
    bucket: 'Web2',
    tag: { en: 'Web2 · Beauty E-commerce', es: 'Web2 · E-commerce Belleza' },
    description: {
      en: 'Haircare/skincare demo built around a 3-question quiz that recommends products from the fictional store\'s catalog.',
      es: 'Demo de cabello y skincare construida alrededor de un quiz de 3 preguntas que recomienda productos del catálogo de la tienda ficticia.',
    },
  },
  {
    name: 'Consultorio Dental Familiar',
    url: 'https://showcase-edg.vercel.app/dentistas/consultorio-familiar',
    status: 'demo',
    preview: previewImg_dental_familiar,
    env: { en: 'Demo · fictional business', es: 'Demo · negocio ficticio' },
    bucket: 'Web2',
    tag: { en: 'Web2 · Dental Clinic', es: 'Web2 · Clínica Dental' },
    description: {
      en: 'Family dental clinic demo: icon-tile services, a simulated appointment scheduler (date, time and contact details) and an FAQ accordion.',
      es: 'Demo de consultorio dental familiar: servicios en tarjetas con ícono, agenda de citas simulada (fecha, hora y datos de contacto) y preguntas frecuentes en acordeón.',
    },
  },
  {
    name: 'Clínica Dental Premium',
    url: 'https://showcase-edg.vercel.app/dentistas/clinica-premium',
    status: 'demo',
    preview: previewImg_dental_premium,
    env: { en: 'Demo · fictional business', es: 'Demo · negocio ficticio' },
    bucket: 'Web2',
    tag: { en: 'Web2 · Dental Clinic', es: 'Web2 · Clínica Dental' },
    description: {
      en: 'Premium dental clinic microsite: specialists, tabbed treatments priced "from $X", a patient-experience timeline and a simulated consultation form.',
      es: 'Microsite de clínica dental premium: especialistas, tratamientos en pestañas con precio «desde $X», timeline de la experiencia del paciente y formulario de valoración simulado.',
    },
  },
  {
    name: 'Clínica de Estética Dental',
    url: 'https://showcase-edg.vercel.app/dentistas/clinica-estetica',
    status: 'demo',
    preview: previewImg_dental_estetica,
    env: { en: 'Demo · fictional business', es: 'Demo · negocio ficticio' },
    bucket: 'Web2',
    tag: { en: 'Web2 · Dental Clinic', es: 'Web2 · Clínica Dental' },
    description: {
      en: 'Cosmetic dentistry demo built around a before/after comparison slider you can drag with a mouse or finger, or move with the keyboard.',
      es: 'Demo de estética dental construida alrededor de un comparador antes/después que se arrastra con mouse o con el dedo y también se maneja con teclado.',
    },
  },
];

// Orden: lo que más le sirve a quien contrata un dev va primero (código y
// perfil); el correo es la acción principal y se resalta en SocialBar.
// Regla del dueño: nada de apellidos ni teléfono en lo público.
export const socials = [
  {
    name: 'GitHub',
    url: 'https://github.com/ALFA117',
    icon: 'github',
    handle: '@ALFA117',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/edgar-lopez-baeza-6b5a22353',
    icon: 'linkedin',
    handle: 'Edgar · ALFA',
  },
  {
    name: 'Email',
    url: 'mailto:edgarlopezbaeza.ing@gmail.com',
    icon: 'mail',
    handle: 'edgarlopezbaeza.ing@gmail.com',
  },
  {
    name: 'X',
    url: 'https://x.com/ALFA_EDG',
    icon: 'x',
    handle: '@ALFA_EDG',
  },
  {
    name: 'Telegram',
    url: 'https://t.me/ALFA_EDG',
    icon: 'telegram',
    handle: '@ALFA_EDG',
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/alfa_edg.mou/',
    icon: 'instagram',
    handle: '@alfa_edg.mou',
  },
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/edgar.lopez.58747?locale=es_LA',
    icon: 'facebook',
    handle: 'Edgar · ALFA',
  },
];

// Última revisión manual de que cada link del registro responde (HTTP 200).
// Se muestra tal cual en el hero junto con su fecha; actualízala al volver
// a revisar, no la cambies sin revisar.
export const linkCheck = { date: '2026-11-07', ok: 38, total: 38 };
