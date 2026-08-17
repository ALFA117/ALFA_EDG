# ALFA-EDG

Personal portfolio — Web3 + AI builder. [alfa-edg.vercel.app](https://alfa-edg.vercel.app)

A terminal-inspired, dark/light-themed showcase of 16 live projects spanning Web3, AI agents, security tooling, and freelance work. Bilingual (EN/ES), fully client-rendered, no backend.

## Stack

- **React 19** (Create React App) — no router, single-page anchors
- **framer-motion** for entrance animations, drag-to-scrub, and layout transitions
- **Plain CSS** with custom properties for theming (`src/index.css` + `src/App.css`) — no Tailwind, no CSS-in-JS
- **Canvas 2D** for the hero's particle-network background (`components/ParticleNetwork.js`), no WebGL/three.js
- **i18n** via a lightweight context (`i18n/LanguageContext.js` + `i18n/translations.js`), not a library

## Structure

```
src/
  App.js                 # page composition — hero, ethos, field, contact, registry
  projectsData.js         # the 16 project entries (name, url, tag, description, preview)
  photosData.js            # "in the field" photo set
  components/              # PhotoReel, ParticleNetwork, ProjectRow, SocialRail, ErrorBoundary, ...
  i18n/                    # LanguageContext + translations.js (en/es)
  hooks/useScrollSpy.js    # nav active-section tracking (position-based, not IntersectionObserver ratios)
```

## Notable implementation details

- **Hero photo carousel** crossfades between several photos, each with a tuned `object-position` for its composition.
- **"In the field" gallery** is a continuously auto-scrolling filmstrip — shuffled on every page load, drag-to-scrub, pauses on interaction, resumes after idle.
- **Light/dark theme** redefines CSS custom properties under `[data-theme="light"]`; the signal-green accent is darkened one step in light mode to keep text contrast passing, everything else inverts.
- **Scroll-spy** (`useScrollSpy`) tracks which section's top edge is closest to a fixed viewport line — chosen over `IntersectionObserver` ratio comparisons after those produced ties that silently favored whichever section was listed first.

## Run it locally

```bash
npm install
npm start        # dev server at localhost:3000
npm run build     # production build to /build
```

## Deploy

Deployed on Vercel (`vercel --prod`). No environment variables required — everything is static/client-side.
