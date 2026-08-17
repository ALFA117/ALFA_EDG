import sharp from 'sharp';
import fs from 'fs';

const dir = new URL('../src/assets/previews', import.meta.url).pathname.replace(/^\/([A-Za-z]):/, '$1:');
const files = fs.readdirSync(dir).filter((f) => f.endsWith('.png'));

for (const f of files) {
  const slug = f.replace('.png', '');
  const input = `${dir}/${f}`;
  const output = `${dir}/${slug}.webp`;
  await sharp(input).resize(640, 400, { fit: 'cover', position: 'top' }).webp({ quality: 68 }).toFile(output);
  fs.unlinkSync(input);
  console.log(slug, 'done');
}
