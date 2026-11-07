// Convierte capturas 1280x800 de la auditoría en previews 640x400 .webp.
// Uso: node scripts/preview-from-capture.mjs <captura.png> <slug> [<captura.png> <slug> ...]
import sharp from 'sharp';

const dir = new URL('../src/assets/previews', import.meta.url).pathname.replace(/^\/([A-Za-z]):/, '$1:');
const args = process.argv.slice(2);
for (let i = 0; i < args.length; i += 2) {
  const [input, slug] = [args[i], args[i + 1]];
  await sharp(input).resize(640, 400, { fit: 'cover', position: 'top' }).webp({ quality: 68 }).toFile(`${dir}/${slug}.webp`);
  console.log(slug, 'done');
}
