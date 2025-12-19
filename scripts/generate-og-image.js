import sharp from 'sharp';

const OG_OUT = 'public/og-image.png';
const ICON_OUT = 'public/apple-touch-icon.png';

const OG_WIDTH = 1200;
const OG_HEIGHT = 630;

async function generateOgImage() {
  const background = await sharp({
    create: {
      width: OG_WIDTH,
      height: OG_HEIGHT,
      channels: 4,
      background: '#00A859',
    },
  })
    .png()
    .toBuffer();

  const logoPath = 'public/assets/brand/logo-igreen-white-300x120.png';
  const logo = await sharp(logoPath).resize({ width: 360 }).png().toBuffer();

  const overlaySvg = Buffer.from(`<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${OG_WIDTH}" height="${OG_HEIGHT}">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#0B7A48" stop-opacity="0.28"/>
      <stop offset="1" stop-color="#00A859" stop-opacity="0"/>
    </linearGradient>
  </defs>

  <rect x="0" y="0" width="${OG_WIDTH}" height="${OG_HEIGHT}" fill="url(#g)"/>

  <text x="100" y="360" font-family="Arial, Helvetica, sans-serif" font-size="84" font-weight="800" fill="#FFFFFF">ConectaSolar</text>
  <text x="100" y="420" font-family="Arial, Helvetica, sans-serif" font-size="40" font-weight="600" fill="#E9FFF3">Soluções iGreen • Atendimento no WhatsApp</text>
</svg>`);

  await sharp(background)
    .composite([
      { input: logo, left: 100, top: 150 },
      { input: overlaySvg, left: 0, top: 0 },
    ])
    .png({ quality: 90 })
    .toFile(OG_OUT);
}

async function generateAppleTouchIcon() {
  const symbolPath = 'public/assets/brand/simbolo-igreen-white.png';
  const symbol = await sharp(symbolPath).resize({ width: 120 }).png().toBuffer();

  await sharp({
    create: {
      width: 180,
      height: 180,
      channels: 4,
      background: '#00A859',
    },
  })
    .composite([{ input: symbol, left: 30, top: 30 }])
    .png({ quality: 90 })
    .toFile(ICON_OUT);
}

await generateOgImage();
await generateAppleTouchIcon();

console.log(`Generated ${OG_OUT} and ${ICON_OUT}`);
