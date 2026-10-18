import sharp from 'sharp';
import { statSync, renameSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const imgDir = path.join(__dirname, '../public/assets/images');

const images = [
  { file: 'pack_natal_16x9.webp',            width: 1920, label: 'Pack Natal 16x9' },
  { file: 'pack_halloween_16x9.webp',         width: 1920, label: 'Pack Halloween 16x9' },
  { file: 'pack_natal_halloween_split.webp',  width: 1920, label: 'Natal+Halloween Split' },
];

for (const img of images) {
  const inputPath  = path.join(imgDir, img.file);
  const tmpPath    = inputPath + '.tmp';
  const beforeSize = statSync(inputPath).size;

  await sharp(inputPath)
    .resize({ width: img.width, withoutEnlargement: true })
    .modulate({ saturation: 1.45, brightness: 1.05 })
    .linear(1.15, -(0.15 * 128))
    .webp({ quality: 82, effort: 6 })
    .toFile(tmpPath);

  renameSync(tmpPath, inputPath);
  const afterSize = statSync(inputPath).size;
  const saved = ((1 - afterSize / beforeSize) * 100).toFixed(1);
  console.log(`✅ ${img.label}: ${(beforeSize/1024/1024).toFixed(1)}MB → ${(afterSize/1024).toFixed(0)}KB (${saved}% menor)`);
}

console.log('\n🎉 Otimização concluída!');
