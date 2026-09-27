// Corre antes de cada build (npm "prebuild"). Lee src/projectsData.js y:
//  1. escribe dentro de <noscript> una versión HTML simple del sitio
//     (nombre, contacto y la lista completa de proyectos con su link), para
//     que sin JavaScript no quede una página en blanco;
//  2. actualiza el conteo de proyectos en los metadatos (description, OG),
//     que antes estaba escrito a mano y se quedó en "16".
import fs from 'fs';

const root = new URL('..', import.meta.url);
const dataPath = new URL('src/projectsData.js', root);
const htmlPath = new URL('public/index.html', root);

// projectsData.js importa imágenes .webp (solo las entiende webpack): se
// quitan los imports y los campos preview antes de evaluarlo en Node.
const source = fs
  .readFileSync(dataPath, 'utf8')
  .replace(/^import .*$/gm, '')
  .replace(/^\s*preview: .*$/gm, '');
const mod = await import(`data:text/javascript;base64,${Buffer.from(source).toString('base64')}`);
const { projects, socials } = mod;

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const count = projects.length;

const items = projects
  .map((p) => {
    const net = p.env ? ` · ${esc(p.env.es)}` : '';
    return `<li><a href="${esc(p.url)}">${esc(p.name)}</a> — ${esc(p.tag.es)}${net}. ${esc(p.description.es)}</li>`;
  })
  .join('\n          ');
const contact = socials.map((s) => `<a href="${esc(s.url)}">${esc(s.name)}</a>`).join(' · ');

const fallback = `<noscript>
      <main style="max-width:720px;margin:0 auto;padding:24px 16px;font-family:system-ui,sans-serif;line-height:1.6;color:#e8efe9;background:#07090a">
        <h1 style="font-family:monospace">ALFA-EDG — Builder Web3 + IA</h1>
        <p>Desarrollador full-stack en México. ${count} proyectos con demo en vivo: Web3, agentes de IA, seguridad on-chain y sitios para negocios. Esta es la versión sin JavaScript; actívalo para ver el sitio completo.</p>
        <p>Contacto: ${contact}</p>
        <h2 style="font-family:monospace">Proyectos (${count})</h2>
        <ul>
          ${items}
        </ul>
      </main>
    </noscript>`;

const description = `ALFA-EDG — desarrollador full-stack Web3 + IA en México: ${count} proyectos con demo en vivo, de gateways de pesos en Stellar a agentes de IA y bots de seguridad on-chain.`;

let html = fs.readFileSync(htmlPath, 'utf8');
html = html.replace(/<noscript>[\s\S]*?<\/noscript>/, fallback);
html = html.replace(
  /(<meta\s+name="description"\s+content=")[^"]*(")/,
  `$1${description}$2`
);
html = html.replace(/(<meta\s+property="og:description"\s+content=")[^"]*(")/, `$1${description}$2`);
html = html.replace(/(<meta\s+name="twitter:description"\s+content=")[^"]*(")/, `$1${description}$2`);
fs.writeFileSync(htmlPath, html);
console.log(`static fallback: ${count} proyectos`);
