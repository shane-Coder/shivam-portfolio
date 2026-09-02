// One-off generator for public/og-image.png.
// Run with: node scripts/generate-og-image.js
// Not part of the build — the PNG is committed as a static asset.

const path = require('path');
const sharp = require('sharp');

const WIDTH = 1200;
const HEIGHT = 630;

const stack = ['Python', 'Django', 'FastAPI', 'Kafka', 'Docker', 'Kubernetes', 'AWS'];

// Rough per-character width for the badge font (14px Inter-ish, bold-ish) —
// good enough for laying out pill widths without a real text-measurement pass.
const CHAR_W = 8.4;
const PILL_PAD_X = 18;
const PILL_GAP = 12;
const PILL_H = 34;

function buildBadges(items, startX, y) {
  let x = startX;
  const rects = [];
  const texts = [];
  for (const label of items) {
    const w = label.length * CHAR_W + PILL_PAD_X * 2;
    rects.push(
      `<rect x="${x}" y="${y}" width="${w}" height="${PILL_H}" rx="${PILL_H / 2}" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.16)" stroke-width="1"/>`
    );
    texts.push(
      `<text x="${x + w / 2}" y="${y + PILL_H / 2 + 5}" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="15" font-weight="600" fill="#e2e8f0">${label}</text>`
    );
    x += w + PILL_GAP;
  }
  return { rects: rects.join(''), texts: texts.join(''), endX: x - PILL_GAP };
}

const badges = buildBadges(stack, 80, 430);

const svg = `
<svg width="${WIDTH}" height="${HEIGHT}" viewBox="0 0 ${WIDTH} ${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#050505"/>
      <stop offset="55%" stop-color="#0b0f1a"/>
      <stop offset="100%" stop-color="#111827"/>
    </linearGradient>
    <linearGradient id="accent" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#2563eb"/>
      <stop offset="100%" stop-color="#7c3aed"/>
    </linearGradient>
    <radialGradient id="glow" cx="85%" cy="15%" r="60%">
      <stop offset="0%" stop-color="#2563eb" stop-opacity="0.35"/>
      <stop offset="100%" stop-color="#2563eb" stop-opacity="0"/>
    </radialGradient>
    <pattern id="dots" width="24" height="24" patternUnits="userSpaceOnUse">
      <circle cx="1.5" cy="1.5" r="1.5" fill="rgba(255,255,255,0.06)"/>
    </pattern>
  </defs>

  <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#bg)"/>
  <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#dots)"/>
  <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#glow)"/>

  <rect x="80" y="70" width="4" height="64" rx="2" fill="url(#accent)"/>

  <text x="104" y="98" font-family="Arial, Helvetica, sans-serif" font-size="16" font-weight="700" letter-spacing="4" fill="#60a5fa">SOFTWARE ENGINEER · BACKEND · DEVOPS</text>

  <text x="80" y="200" font-family="Arial, Helvetica, sans-serif" font-size="72" font-weight="800" fill="#ffffff">Shivam Omer</text>

  <text x="80" y="260" font-family="Arial, Helvetica, sans-serif" font-size="30" font-weight="600" fill="#cbd5e1">Building reliable systems that scale.</text>

  <text x="80" y="330" font-family="Arial, Helvetica, sans-serif" font-size="20" fill="#94a3b8">
    <tspan x="80" dy="0">Backend engineer crafting event-driven services, microservices,</tspan>
    <tspan x="80" dy="30">and cloud-native automation across Python, Django, Kafka &amp; AWS/Azure.</tspan>
  </text>

  ${badges.rects}
  ${badges.texts}

  <line x1="80" y1="540" x2="${WIDTH - 80}" y2="540" stroke="rgba(255,255,255,0.12)" stroke-width="1"/>

  <text x="80" y="580" font-family="Arial, Helvetica, sans-serif" font-size="18" font-weight="600" fill="#e2e8f0">shivam-portfolio-gold-omega.vercel.app</text>
  <text x="${WIDTH - 80}" y="580" text-anchor="end" font-family="Arial, Helvetica, sans-serif" font-size="18" fill="#64748b">github.com/shane-Coder</text>
</svg>
`;

const outPath = path.join(__dirname, '..', 'public', 'og-image.png');

sharp(Buffer.from(svg))
  .png()
  .toFile(outPath)
  .then(() => console.log('Wrote', outPath))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
