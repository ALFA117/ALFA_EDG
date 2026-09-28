# ALFA-EDG

Personal portfolio — Web3 + AI builder. [alfaedg.vercel.app](https://alfaedg.vercel.app)

A terminal-inspired, dark/light showcase of every project with a live demo: Web3, AI agents, security tooling, commercial Web2 demos and freelance work. Bilingual (ES/EN), fully client-rendered, no backend.

## Stack

- **React 19** (Create React App) — no router, single-page anchors
- **framer-motion 13** for interaction springs, the theme-icon swap, the nav indicator and the photo reel
- **Plain CSS** with design tokens (`src/index.css`) + screen styles (`src/App.css`) + base components (`src/components/ui/`) — no Tailwind, no CSS-in-JS
- **Canvas 2D** for the particle-network background (`components/ParticleNetwork.js`)
- **i18n** via a lightweight context (`i18n/LanguageContext.js` + `i18n/translations.js`)

## Structure

```
src/
  App.js                   # page composition — hero, ethos, field, contact, registry
  projectsData.js          # every project (name, url, tag, env, description, preview) + linkCheck
  photosData.js            # "in the field" photo set
  components/ui/           # Button, Input, Card, Skeleton, EmptyState, ErrorState, Toast, MiddleTruncate
  components/              # ProjectRow, PhotoReel, ParticleNetwork, SocialRail, ErrorBoundary, ...
  i18n/                    # LanguageContext + translations.js (es/en)
  hooks/useScrollSpy.js    # nav active-section tracking
scripts/
  build-static-fallback.mjs  # prebuild: no-JS fallback + real project count in meta tags
  convert-previews.mjs       # PNG screenshots → 640×400 webp
```

## Adding a project

1. Add an entry at the **top** of `projects` in `src/projectsData.js` (newest first).
2. Add `env` only if you know the network for sure (`Stellar testnet`, `Solana devnet`, `Demo · negocio ficticio`…). No `env` is better than a guessed one.
3. Drop a real 1280×800 screenshot as `src/assets/previews/<slug>.png`, run `node scripts/convert-previews.mjs`, import the webp.
4. If you re-check every link, update `linkCheck` (date, ok, total) — it's shown in the hero as-is.

## Run it locally

```bash
npm install
npm start          # dev server at localhost:3000
npm run build      # runs the prebuild script, then builds to /build
```

## Deploy

Vercel, manual: `vercel --prod` from this folder (a git push does **not** deploy). It publishes to both Vercel projects linked to this folder; the canonical URL is `https://alfaedg.vercel.app/`.

---

## FIX_NOTES

Audit and repair pass — 2026-09-27. Checked against production at 380px, 320px and 1440px, light and dark.

| Found | Why it mattered | Fix |
|---|---|---|
| On phones the sticky nav wrapped into **three rows** (~170px pinned on screen) | Ate a fifth of the viewport on every scroll | Section links became a bottom tab bar (icon + label, safe-area inset); the top bar is one row |
| Text at **9.6px** (stat labels), 11px stamps and counts; card copy at 14px | Unreadable on a phone; body under 16px | Type scale tokens: body 16px, nothing below 12px (audited in the DOM) |
| Category filters 40px tall, brand link 28px | Below the 44px touch target | Every link/button measured ≥ 44px |
| Sections started at **opacity 0** until an IntersectionObserver fired; stats started at "0" and counted up | Content hidden until scroll; screenshots/crawlers saw zeros | Removed scroll reveals and count-up; only a 300ms CSS entrance on the hero |
| "Producción, no demos — every project is deployed **and in use**" and a **100% in production** stat | Not true: many projects run on testnet/devnet, the Web2 entries are fictional-business demos | Copy now says "live demos, not mockups"; each card shows its real network; the stat is "37/37 links responding" with the check date |
| Meta description / OG image said **16 projects**; OG, sitemap and robots pointed at the other domain; no canonical | Stale and inconsistent sharing previews | Canonical + OG/Twitter on `alfaedg.vercel.app`; a prebuild script writes the real count; new OG image |
| Blank page without JavaScript | Nothing to read or crawl | Prebuild writes a `<noscript>` version with contact and all 37 projects |
| 14 cards had **no preview** (WIP, MongliZone, 12 Web2 demos) | Uneven grid | Real screenshots of each live site |
| Particle background: 110 nodes on phones, O(n²) per frame, never paused | Battery drain and visual noise over text | 36 nodes on phones, pauses on hidden tab, static with reduced motion, re-reads the theme color |
| Scroll-spy kept the last section highlighted back at the top | Nav lied about where you were | Clears when no section is under the line |
| Hero title's blinking cursor wrapped alone onto an empty line; "full-stack" split at the hyphen | Awkward gap in the hero | Cursor bound to the last word; non-breaking hyphen |
| Hero glow cut off in a hard vertical line on desktop | Visible seam | Gradient ends inside its own box |
| Photo reel shifted 34px right on desktop (rail padding) | Overflowed the viewport | Compensated offset |
| ErrorBoundary: hardcoded colors, no retry | Dead end if the app crashes | ErrorState with cause, fix, retry and direct contact |
| Text arrows (← → ↑) as icons | Font-dependent glyphs | SVG icons with the same stroke as the rest |
| `dl` stats with `dd` before `dt`; h1 → h3 jump in the ethos block | Invalid markup / skipped heading level | Valid `dt`/`dd`; ethos gets its h2 |

### Second pass — 2026-09-27 (responsive, socials, light mode)

| Found | Why it mattered | Fix |
|---|---|---|
| WhatsApp and Facebook icons were hand-drawn strokes that rendered as tiny squiggles next to the others | The social row looked broken | All social glyphs redrawn as filled 24px marks with the same optical weight |
| No GitHub link | A developer portfolio without the code profile | GitHub (`@ALFA117`) added to the contact grid, the desktop rail and as a hero button |
| Contact tiles: icon + name only, 7 items in an uneven grid | Last tile alone on its row; nothing told you the handle | 8 items → even 2×4 grid on phones, 4×2 on desktop; each tile shows the real handle in mono; WhatsApp stays the highlighted one |
| Desktop social rail pinned to the bottom-left with a loose line | Floated away from the content, icons different sizes | Rail is a pill centered vertically, 44px round targets, hidden on short screens (< 560px tall) |
| Light theme: `#f6f8f7` page, pure white cards, near-black text | Glare — "el modo claro lastima la vista" | "Terminal paper" palette: sage-grey `#e3e7e0` page, `#ecefe8` cards, graphite-green text; no surface above ~90% lightness; every accent re-checked ≥ 4.4:1 (body text 6.2–13:1) |
| Phone hero: photo stuck to the left with empty space on the right, chips hidden | Looked unfinished at 380px | Photo centered, the three chips shown inside the side margins, buttons stack full-width under 480px |
| Top nav border started 68px in on desktop (rail padding) | Visible offset line | Nav bleeds edge to edge |

### Third pass — 2026-09-28 (hero title, light mode again)

| Found | Why it mattered | Fix |
|---|---|---|
| The sage-paper light theme (`#e3e7e0`) still hurt at high phone brightness | Second report of glare | "Light dimmed" palette chosen by Edgar: page `#cdd3cb` (relative luminance 0.64, was 0.79), cards `#d8ddd5`, graphite text; every text pair re-checked (≥ 4.8:1, body ≈ 10:1) |
| On phones the photo came before the headline, pushing it below the fold | The promise was the last thing you saw | Hero is a CSS grid: title → photo → copy → stats on phones; title + copy left and photo right on desktop (replaces the float) |
| Static hero title | Edgar asked for motion on the whole headline | `ScrambleTitle`: letters decode from random glyphs in 1.4 s (mono font, so no layout shift), "full-stack" and the last word turn signal green with an underline that draws in, then a short glitch on one of them every 7 s. Real text in an `sr-only` span; final text at once under reduced motion |


- **Identity kept, not replaced.** The site already had a system — terminal "signal green" on a near-black void, JetBrains Mono, category colors as ANSI codes, the α mark. This pass turns it into tokens and completes it rather than restyling.
- **Three typefaces, three jobs.** JetBrains Mono ExtraBold for display (the brand's terminal voice), **IBM Plex Sans** for body copy (long project descriptions were hard to read set in mono), JetBrains Mono for data: networks, domains, counts, index numbers.
- **The one detail only this site has:** every card carries a `$ net Stellar testnet` / `Solana devnet` / `Demo · negocio ficticio` chip — the real network is the content, and it keeps the claims honest. Domains are shown in mono, truncated in the middle.
- **Tokens:** color (dark + light designed together; every text/background pair computed ≥ 4.5:1 — the tightest is 4.86:1), radius (4–16px + pill), shadow scale (3 steps + glow), spacing in 4px steps, type scale 12/14/16/18/20/24/32 + a clamped display size, motion durations and z-index layers. Components use tokens only.
- **Category accents** get a darker variant in light mode so the tag labels still pass contrast on white.
- **Cards not cloned:** accent border per category, network chip, domain line; ethos cards are numbered `01/03` and the first one carries the signal border.
- **Motion:** springs for anything touched (buttons, tabs, nav indicator via `layoutId`, theme icon swap); a single 300ms entrance on load; the hero photo crossfade is the one ambient motion. Everything collapses to a static scene under `prefers-reduced-motion`. Only `transform`/`opacity` are animated (the scroll bar uses `scaleX`).
- **Mobile nav:** bottom tab bar ≤ 640px because the top row cannot fit brand + 3 labeled links + 2 toggles at 320px with 44px targets; it's reachable with the thumb and respects the home-indicator inset.
- **3D background (second pass, die roll: recipe 5 — themed objects in CSS 3D).** Near layer: α coins with a real 16-segment edge (Web3), chain blocks as cubes (infra, in the Infra category blue), terminal cards that flip to show the α on the back (the brand's `~$`). Far layer: the existing node constellation. Pointer parallax on desktop and scroll parallax everywhere, scaled by depth; the object layer fades to 40% past the hero ("calm" variant) since this is a one-page site. Phones get 3 objects instead of 7. Pauses with the tab hidden, static under reduced motion, dimmed to 60% in light mode. Opacity lives on flat wrappers only — on a `preserve-3d` element it would flatten the 3D.
- **Light mode is not white.** The palette is designed as paper under a terminal, not a negative of the dark theme.

## Checklist de 2 minutos en el celular

1. Abre https://alfaedg.vercel.app en el celular. La barra de arriba es **una sola fila** (logo, sol/luna, idioma) y abajo hay tres pestañas: Proyectos, Contacto, Fotos.
2. Toca **Proyectos** abajo: baja al registro y la pestaña se marca en verde. Toca otra y la línea verde se mueve.
3. Desliza de lado a lado en cualquier parte: la página **no** debe moverse horizontalmente.
4. En el registro, la primera tarjeta es **FYV Box** y la segunda **SEPuente**; cada una dice `$ net Stellar testnet`.
5. Toca el filtro **Web2**: aparecen 12 demos, cada una con `Demo · negocio ficticio`.
6. Toca el sol/luna: cambia de tema y todo sigue legible. Toca **EN**: cambia el idioma.
7. Baja al fondo: el botón de volver arriba queda **encima** de la barra inferior, no tapado por ella.
8. Toca **WhatsApp** en Contacto: abre el chat.
9. En Contacto hay **8 tarjetas parejas** (2 por fila): GitHub, LinkedIn, WhatsApp (resaltada), Email, X, Telegram, Instagram, Facebook; cada una con su usuario abajo.
10. En el hero toca **Mi GitHub**: abre github.com/ALFA117.
11. Cambia a modo claro: el fondo es gris medio atenuado, no blanco; no debe deslumbrar con el brillo al máximo.
12. Arriba, detrás del texto, flotan monedas α, bloques y tarjetas; al bajar se vuelven más tenues.
13. Recarga la página: el título aparece como caracteres raros y en ~1.5 s se "descifra"; "full-stack" y "prometen" quedan en verde subrayado. En celular el título sale **antes** de la foto.
