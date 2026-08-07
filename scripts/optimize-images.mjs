/**
 * Re-encodes everything in public/images/ to sensible display sizes.
 *
 * The source photographs are full-resolution originals; nothing on the page
 * renders them wider than ~1600px, so shipping the originals is wasted weight.
 * Run this after adding or replacing any photograph:
 *
 *   npm install --no-save sharp && node scripts/optimize-images.mjs
 */
import { readdir, stat, rename, unlink } from 'node:fs/promises';
import { join } from 'node:path';
import sharp from 'sharp';

const DIR = 'public/images';

/** Max width per file — matches the largest box each image renders into. */
const MAX_WIDTH = {
  'hero-courtyard.jpg': 1200,
  'hero-detail.jpg': 640,
  'about-portal.jpg': 1000,
  'services-portico.jpg': 900,
  'scholarships-detail.jpg': 900,
  'italy-campus-wide.jpg': 1800,
  'italy-final.jpg': 1600,
};

const kb = (n) => `${Math.round(n / 1024)} KB`;

let before = 0;
let after = 0;

for (const file of await readdir(DIR)) {
  if (!/\.jpe?g$/i.test(file)) continue;

  const path = join(DIR, file);
  const tmp = `${path}.tmp`;
  const original = (await stat(path)).size;
  before += original;

  await sharp(path)
    .rotate() // honour EXIF orientation before stripping metadata
    .resize({ width: MAX_WIDTH[file] ?? 1400, withoutEnlargement: true })
    .jpeg({ quality: 78, progressive: true, mozjpeg: true })
    .toFile(tmp);

  await unlink(path);
  await rename(tmp, path);

  const size = (await stat(path)).size;
  after += size;
  console.log(`${file.padEnd(26)} ${kb(original).padStart(8)} → ${kb(size).padStart(8)}`);
}

console.log(`\nTotal ${kb(before)} → ${kb(after)} (${Math.round((1 - after / before) * 100)}% smaller)`);
