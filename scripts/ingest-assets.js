import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const inputDir = process.argv[2];
if (!inputDir) {
  console.error('Usage: node scripts/ingest-assets.js <inputDir>');
  process.exit(1);
}

const out = {
  brand: path.resolve(process.cwd(), 'public', 'assets', 'brand'),
  icons: path.resolve(process.cwd(), 'public', 'assets', 'icons'),
  sections: path.resolve(process.cwd(), 'public', 'assets', 'sections'),
  social: path.resolve(process.cwd(), 'public', 'assets', 'social')
};

for (const d of Object.values(out)) fs.mkdirSync(d, { recursive: true });

function findFirst(pattern) {
  const files = fs.readdirSync(inputDir);
  return files.find((f) => pattern.test(f));
}

async function writeLogo({ srcName, outName, width = 300, height = 120 }) {
  if (!srcName) return { ok: false, outName, reason: 'source-not-found' };
  const srcPath = path.join(inputDir, srcName);
  const destPath = path.join(out.brand, outName);

  await sharp(srcPath)
    .resize(width, height, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png({ quality: 95 })
    .toFile(destPath);

  return { ok: true, outName, srcName };
}

async function writeSection({ srcName, outName, width = 1000, height = 600 }) {
  if (!srcName) return { ok: false, outName, reason: 'source-not-found' };
  const srcPath = path.join(inputDir, srcName);
  const destPath = path.join(out.sections, outName);

  await sharp(srcPath)
    // IMPORTANT: do not crop banners; letterbox instead
    .resize(width, height, {
      fit: 'contain',
      position: 'centre',
      background: { r: 255, g: 255, b: 255, alpha: 1 },
      withoutEnlargement: true
    })
    .jpeg({ quality: 84, mozjpeg: true, progressive: true, chromaSubsampling: '4:4:4' })
    .toFile(destPath);

  return { ok: true, outName, srcName };
}

async function writeSectionPlaceholder({ outName, title, width = 1000, height = 600, from, to, text }) {
  const destPath = path.join(out.sections, outName);

  const safeTitle = (title || outName).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  const svg = `<?xml version="1.0" encoding="UTF-8"?>
  <svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
    <defs>
      <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="${from}"/>
        <stop offset="1" stop-color="${to}"/>
      </linearGradient>
    </defs>
    <rect width="${width}" height="${height}" rx="32" ry="32" fill="url(#g)"/>
    <text x="50%" y="52%" text-anchor="middle" dominant-baseline="middle" font-family="Arial" font-size="28" fill="${text}">${safeTitle}</text>
  </svg>`;

  await sharp(Buffer.from(svg))
    .jpeg({ quality: 84, mozjpeg: true, progressive: true, chromaSubsampling: '4:4:4' })
    .toFile(destPath);

  return { ok: true, outName, srcName: '(placeholder)' };
}

async function writeTelecomFromPdf({ srcName, outName, width = 1000, height = 600 }) {
  if (!srcName) return { ok: false, outName, reason: 'source-not-found' };
  const srcPath = path.join(inputDir, srcName);
  const destPath = path.join(out.sections, outName);

  try {
    // Try render first page of PDF via sharp (may fail depending on libvips build)
    await sharp(srcPath, { density: 220, page: 0 })
      .resize(width, height, {
        fit: 'contain',
        position: 'centre',
        background: { r: 255, g: 255, b: 255, alpha: 1 },
        withoutEnlargement: true
      })
      .jpeg({ quality: 84, mozjpeg: true, progressive: true, chromaSubsampling: '4:4:4' })
      .toFile(destPath);

    return { ok: true, outName, srcName, method: 'sharp-pdf' };
  } catch (e) {
    return { ok: false, outName, srcName, reason: 'pdf-render-failed', detail: String(e?.message || e) };
  }
}

async function averageRgb(filePath) {
  // Downsample to 1x1 pixel and read raw RGB(A)
  const { data, info } = await sharp(filePath)
    .resize(1, 1, { fit: 'fill' })
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const channels = info.channels;
  const r = data[0];
  const g = data[1];
  const b = data[2];
  const a = channels >= 4 ? data[3] : 255;
  return { r, g, b, a };
}

function dist(a, b) {
  const dr = a.r - b.r;
  const dg = a.g - b.g;
  const db = a.b - b.b;
  return Math.sqrt(dr * dr + dg * dg + db * db);
}

async function pickBestByPalette({ candidates, palette }) {
  const scored = [];
  for (const c of candidates) {
    try {
      const rgb = await averageRgb(c.path);
      const score = dist(rgb, palette);
      scored.push({ ...c, rgb, score });
    } catch {
      // ignore unreadable
    }
  }
  scored.sort((a, b) => a.score - b.score);
  return scored[0] || null;
}

async function writeOgImage({ outName }) {
  const destPath = path.join(out.social, outName);

  const svg = `<?xml version="1.0" encoding="UTF-8"?>
  <svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
    <defs>
      <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="#16a34a"/>
        <stop offset="1" stop-color="#0ea5e9"/>
      </linearGradient>
      <filter id="blur" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="60" />
      </filter>
    </defs>

    <rect width="1200" height="630" rx="0" fill="#0b1220"/>
    <rect width="1200" height="630" fill="url(#g)" opacity="0.25"/>

    <circle cx="250" cy="180" r="220" fill="#ffffff" opacity="0.16" filter="url(#blur)"/>
    <circle cx="980" cy="480" r="260" fill="#34d399" opacity="0.18" filter="url(#blur)"/>

    <text x="90" y="250" font-family="Arial, sans-serif" font-size="62" font-weight="800" fill="#ffffff">Conecta Solar</text>
    <text x="90" y="320" font-family="Arial, sans-serif" font-size="30" font-weight="600" fill="#d1fae5">Soluções em energia renovável</text>

    <rect x="90" y="380" width="420" height="74" rx="18" fill="#16a34a"/>
    <text x="130" y="428" font-family="Arial, sans-serif" font-size="28" font-weight="700" fill="#ffffff">Simule sua economia</text>

    <text x="90" y="560" font-family="Arial, sans-serif" font-size="18" fill="#e5e7eb" opacity="0.9">WhatsApp: +55 19 99669-3018</text>
  </svg>`;

  await sharp(Buffer.from(svg))
    .png({ quality: 95 })
    .toFile(destPath);

  return { ok: true, outName, srcName: '(generated)' };
}

async function run() {
  const inputs = fs.readdirSync(inputDir);

  const src = {
    igreenGreen: findFirst(/^Cópia de iGreen - Verde\.png$/i),
    igreenWhite: findFirst(/^Cópia de Logo branca \.png$/i),
    igreenSymbolWhite: findFirst(/^Cópia de Si.*mbolo branco \.png$/i),

    bannerGreen: findFirst(/^Cópia de Conexão Green - 80x120cm\.png$/i),
    bannerLivre: findFirst(/^Cópia de Conexão Livre - 80x120cm\.png$/i),
    bannerPlacas: findFirst(/^Cópia de Conexão Placas - 80x120cm\.png$/i),
    bannerTelecomPdf: findFirst(/Conexão\s+Telecom\.pdf$/i)
  };

  const results = [];

  function findByBasename(base) {
    const files = fs.readdirSync(inputDir);
    const lower = base.toLowerCase();
    return (
      files.find((f) => path.parse(f).name.toLowerCase() === lower) ||
      files.find((f) => f.toLowerCase().startsWith(lower + '.'))
    );
  }

  // Manual overrides (drop any image named exactly livre/placas/solar/telecom into input folder)
  const manualLivre = findByBasename('livre');
  const manualPlacas = findByBasename('placas');
  const manualSolar = findByBasename('solar');
  const manualTelecom = findByBasename('telecom');

  // Logos
  results.push(await writeLogo({ srcName: src.igreenGreen, outName: 'logo-igreen-300x120.png' }));
  results.push(await writeLogo({ srcName: src.igreenWhite, outName: 'logo-igreen-white-300x120.png' }));
  if (src.igreenSymbolWhite) {
    const destPath = path.join(out.brand, 'simbolo-igreen-white.png');
    await sharp(path.join(inputDir, src.igreenSymbolWhite))
      .resize(512, 512, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .png({ quality: 95 })
      .toFile(destPath);
    results.push({ ok: true, outName: 'simbolo-igreen-white.png', srcName: src.igreenSymbolWhite });
  } else {
    results.push({ ok: false, outName: 'simbolo-igreen-white.png', reason: 'source-not-found' });
  }

  // Section images
  results.push(await writeSection({ srcName: src.bannerGreen, outName: 'green.jpg' }));
  results.push(await writeSection({ srcName: manualLivre || src.bannerLivre, outName: 'livre.jpg' }));
  results.push(await writeSection({ srcName: manualPlacas || src.bannerPlacas, outName: 'placas.jpg' }));
  if (manualTelecom) {
    results.push(await writeSection({ srcName: manualTelecom, outName: 'telecom.jpg' }));
  } else {
    const telecomRes = await writeTelecomFromPdf({ srcName: src.bannerTelecomPdf, outName: 'telecom.jpg' });
    results.push(telecomRes);
  }

  if (manualSolar) {
    results.push(await writeSection({ srcName: manualSolar, outName: 'solar.jpg' }));
  }

  // If we don't have Solar/Telecom banners usable yet, pick from generic photos (01..06) by average color.
  const sectionAlready = new Set(results.filter((r) => r.ok).map((r) => r.outName));
  const photoCandidates = inputs
    .filter((f) => /^Cópia de 0\d\.jpg$/i.test(f))
    .map((f) => ({ name: f, path: path.join(inputDir, f) }));

  // Observação: este projeto não depende mais de imagens dedicadas para "solar" e "telecom" em `public/assets/sections/`.
  // A seção Solar reutiliza `livre.jpg` e a Telecom usa apenas um placeholder (SVG embutido).

  // If any section is still missing, generate a consistent high-quality placeholder (avoids broken UI and low-quality random picks).
  const finalOk = new Set(results.filter((r) => r.ok).map((r) => r.outName));
  const placeholders = {
    green: { title: 'Imagem Conexão Green', from: '#DCFCE7', to: '#ECFDF5', text: '#16A34A' },
    livre: { title: 'Imagem Conexão Livre', from: '#F3E8FF', to: '#FAF5FF', text: '#7C3AED' },
    placas: { title: 'Imagem Conexão Placas', from: '#DBEAFE', to: '#EFF6FF', text: '#2563EB' }
  };

  for (const [key, cfg] of Object.entries(placeholders)) {
    const outName = `${key}.jpg`;
    if (!finalOk.has(outName)) {
      results.push(await writeSectionPlaceholder({ outName, ...cfg }));
      finalOk.add(outName);
    }
  }

  // Social
  results.push(await writeOgImage({ outName: 'og-solar.png' }));

  // Report
  console.log('Ingest results:');
  for (const r of results) {
    if (r.ok) console.log(`  OK   ${r.outName}  <=  ${r.srcName}`);
    else console.log(`  MISS ${r.outName}  (${r.reason})${r.srcName ? `  src=${r.srcName}` : ''}`);
  }

  // What we didn't map yet (for your review)
  const used = new Set(Object.values(src).filter(Boolean));
  const leftovers = inputs.filter((f) => !used.has(f));
  if (leftovers.length) {
    console.log('\nUnmapped files (kept in input folder):');
    for (const f of leftovers) console.log('  -', f);
  }
}

run().catch((e) => {
  console.error('Ingest failed:', e);
  process.exit(1);
});
