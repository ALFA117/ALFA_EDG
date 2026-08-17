import fs from 'fs';

const filePath = new URL('../src/projectsData.js', import.meta.url).pathname.replace(/^\/([A-Za-z]):/, '$1:');
let src = fs.readFileSync(filePath, 'utf8');

const urlToSlug = {
  'https://mad-mongli-agent.vercel.app/': 'mad',
  'https://avs-mou.vercel.app/': 'avs',
  'https://mou-casper.vercel.app/': 'aval',
  'https://moufut.vercel.app/': 'moufut',
  'https://nexus-latam-kappa.vercel.app/': 'nexus-latam',
  'https://monkeyclone.vercel.app/': 'monkeyclone',
  'https://chainguard-pi.vercel.app/': 'chainguard',
  'https://mongliagent.vercel.app/': 'mongli-agent',
  'https://mongli-pool.vercel.app/': 'mongli-pool',
  'https://presentacionde-monglipool.vercel.app/': 'mongli-pool-deck',
  'https://mongli-game.vercel.app/': 'mongli-game',
  'https://kivo-app-five.vercel.app/': 'kivo',
  'https://crystal-vanilla.vercel.app/': 'crystal-vanilla',
  'https://flor-de-sil.vercel.app/': 'flor-de-sil',
};

for (const [url, slug] of Object.entries(urlToSlug)) {
  const needle = `url: '${url}',`;
  const replacement = `url: '${url}',\n    preview: previewImg_${slug.replace(/-/g, '_')},`;
  if (!src.includes(needle)) {
    console.error('MISSING url in projectsData.js:', url);
    continue;
  }
  src = src.replace(needle, replacement);
}

const importsBlock = Object.entries(urlToSlug)
  .map(([, slug]) => `import previewImg_${slug.replace(/-/g, '_')} from './assets/previews/${slug}.webp';`)
  .join('\n');

src = `${importsBlock}\n\n${src}`;

fs.writeFileSync(filePath, src);
console.log('done');
