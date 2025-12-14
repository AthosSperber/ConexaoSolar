import fs from 'fs';
import path from 'path';

const argv = process.argv.slice(2);
const input = argv[0] || path.resolve(process.cwd(), 'src', 'assets', 'images', 'APN Outubro 2025.pdf');
const outDir = path.resolve(process.cwd(), 'src', 'assets', 'images', 'extracted');

function ensureDir(d) {
  if (!fs.existsSync(d)) fs.mkdirSync(d, { recursive: true });
}

function findAll(buffer, sub) {
  const res = [];
  let idx = 0;
  while (true) {
    const i = buffer.indexOf(sub, idx);
    if (i === -1) break;
    res.push(i);
    idx = i + sub.length;
  }
  return res;
}

function extractJPEGs(buffer) {
  const startSig = Buffer.from([0xff, 0xd8, 0xff]);
  const endSig = Buffer.from([0xff, 0xd9]);
  const starts = findAll(buffer, startSig);
  const images = [];
  for (const s of starts) {
    const e = buffer.indexOf(endSig, s + 2);
    if (e !== -1) {
      const img = buffer.slice(s, e + 2);
      images.push(img);
    }
  }
  return images;
}

function extractPNGs(buffer) {
  const sig = Buffer.from([0x89,0x50,0x4e,0x47,0x0d,0x0a,0x1a,0x0a]);
  const starts = findAll(buffer, sig);
  const images = [];
  for (const s of starts) {
    // naive PNG extractor: find IEND chunk (49 45 4E 44 AE 42 60 82)
    const iend = Buffer.from([0x49,0x45,0x4e,0x44,0xae,0x42,0x60,0x82]);
    const e = buffer.indexOf(iend, s + sig.length);
    if (e !== -1) {
      const img = buffer.slice(s, e + iend.length);
      images.push(img);
    }
  }
  return images;
}

async function run() {
  if (!fs.existsSync(input)) {
    console.error('PDF not found at', input);
    process.exit(1);
  }

  ensureDir(outDir);
  const buf = fs.readFileSync(input);

  const jpgs = extractJPEGs(buf);
  const pngs = extractPNGs(buf);

  console.log(`Found ${jpgs.length} JPEG(s) and ${pngs.length} PNG(s)`);

  let count = 0;
  for (const j of jpgs) {
    const p = path.join(outDir, `extracted-${++count}.jpg`);
    fs.writeFileSync(p, j);
    console.log('Wrote', p);
  }
  for (const pimg of pngs) {
    const pth = path.join(outDir, `extracted-${++count}.png`);
    fs.writeFileSync(pth, pimg);
    console.log('Wrote', pth);
  }

  if (count === 0) console.log('No embedded images found.');
  else console.log('Extraction finished. Review files in', outDir);
}

run();
