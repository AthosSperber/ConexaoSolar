import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const inputDir = path.resolve(process.cwd(), 'src', 'assets', 'images');
const sizes = [480, 768, 1200];

function isImage(name) {
  return /\.(jpe?g|png)$/i.test(name);
}

async function processFile(file) {
  const ext = path.extname(file);
  const name = path.basename(file, ext);
  const inputPath = path.join(inputDir, file);

  for (const w of sizes) {
    const outName = `${name}-${w}.webp`;
    const outPath = path.join(inputDir, outName);
    try {
      await sharp(inputPath).resize({ width: w }).webp({ quality: 80 }).toFile(outPath);
      console.log(`Created ${outName}`);
    } catch (err) {
      console.error(`Failed ${outName}:`, err);
    }
  }
}

async function run() {
  if (!fs.existsSync(inputDir)) {
    console.error('Input directory not found:', inputDir);
    process.exit(1);
  }

  const files = fs.readdirSync(inputDir).filter(isImage);
  if (!files.length) {
    console.log('No images found in', inputDir);
    return;
  }

  for (const f of files) {
    // skip already-generated webp
    if (f.endsWith('.webp')) continue;
    await processFile(f);
  }

  console.log('Done.');
}

run();
