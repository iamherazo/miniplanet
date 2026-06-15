/**
 * Static prerender script — runs after `vite build`.
 * Generates dist/<route>/index.html for each route with SEO tags
 * already embedded in raw HTML (no JS needed for bots to read them).
 */
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const distDir = join(__dirname, '../dist');

// ── SEO config (mirrors src/lib/seo-config.ts) ──────────────────────────────
const SITE_URL = 'https://miniplanet.es';
const OG_IMAGE = `${SITE_URL}/images/hero-miniplanet-altea.png`;

const ROUTES = [
  {
    route: '/',
    outDir: null,
    title: 'Cumpleaños infantiles en Altea | MiniPlanet',
    description:
      'Sala privada de eventos infantiles en Altea. Fiestas de cumpleaños, escape rooms y animación para niños de 2 a 12 años. ¡Reserva ya tu fecha!',
    canonical: `${SITE_URL}/`,
    jsonLd: true,
  },
  {
    route: '/miniplanet',
    outDir: 'miniplanet',
    title: 'Nuestro espacio | Sala de fiestas infantiles Altea | MiniPlanet',
    description:
      'Conoce MiniPlanet: 50 m² de sala diáfana + 30 m² de parque infantil en el corazón de Altea. Accesible desde Benidorm, Calpe, Alfaz y La Nucía.',
    canonical: `${SITE_URL}/miniplanet`,
    jsonLd: true,
  },
  {
    route: '/tarifas',
    outDir: 'tarifas',
    title: 'Tarifas y precios | Fiestas infantiles Altea | MiniPlanet',
    description:
      'Precios para cumpleaños, escape rooms, animación y entretenimiento extra en MiniPlanet Altea. Sala privada desde 150 €. Consulta opciones y reserva.',
    canonical: `${SITE_URL}/tarifas`,
    jsonLd: false,
  },
  {
    route: '/calculadora',
    outDir: 'calculadora',
    title: 'Calcula tu presupuesto | Eventos infantiles Altea | MiniPlanet',
    description:
      'Calcula el presupuesto estimado para tu fiesta en MiniPlanet Altea. Combina alquiler de sala, animación, decoración y extras en segundos.',
    canonical: `${SITE_URL}/calculadora`,
    jsonLd: false,
  },
  {
    route: '/contacto',
    outDir: 'contacto',
    title: 'Contacto y reservas | Sala infantil Altea | MiniPlanet',
    description:
      'Contacta con MiniPlanet para reservar tu fiesta en Altea. Llámanos al 664 450 349 o escríbenos. ¡Tu planeta favorito te espera!',
    canonical: `${SITE_URL}/contacto`,
    jsonLd: false,
  },
];

const LOCAL_BUSINESS_JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'MiniPlanet',
  description:
    'Sala privada de eventos infantiles en Altea. Cumpleaños, escape rooms y animación para niños.',
  url: SITE_URL,
  telephone: '+34664450349',
  email: 'info@miniplanet.es',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Av. Comunitat Valenciana, 8, Esc. 2 – Local 3',
    addressLocality: 'Altea',
    addressRegion: 'Alicante',
    postalCode: '03590',
    addressCountry: 'ES',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 38.5988,
    longitude: -0.0502,
  },
  openingHours: 'Mo-Su 10:00-21:00',
  sameAs: ['https://www.instagram.com/miniplanetaltea/'],
  image: `${SITE_URL}/images/cumpleanos-infantil-altea.png`,
};

// ── Build SEO head tags for a route ─────────────────────────────────────────
function buildSeoTags(r) {
  const tags = [
    `  <meta name="description" content="${r.description}" />`,
    `  <link rel="canonical" href="${r.canonical}" />`,
    // Open Graph
    `  <meta property="og:type" content="website" />`,
    `  <meta property="og:url" content="${r.canonical}" />`,
    `  <meta property="og:title" content="${r.title}" />`,
    `  <meta property="og:description" content="${r.description}" />`,
    `  <meta property="og:image" content="${OG_IMAGE}" />`,
    `  <meta property="og:locale" content="es_ES" />`,
    // Twitter Cards
    `  <meta name="twitter:card" content="summary_large_image" />`,
    `  <meta name="twitter:title" content="${r.title}" />`,
    `  <meta name="twitter:description" content="${r.description}" />`,
    `  <meta name="twitter:image" content="${OG_IMAGE}" />`,
  ];

  if (r.jsonLd) {
    tags.push(
      `  <script type="application/ld+json">${JSON.stringify(LOCAL_BUSINESS_JSON_LD)}</script>`
    );
  }

  return tags.join('\n');
}

// ── Process each route ───────────────────────────────────────────────────────
const template = readFileSync(join(distDir, 'index.html'), 'utf-8');

for (const r of ROUTES) {
  let html = template;

  // Replace title
  html = html.replace(/<title>[^<]*<\/title>/, `<title>${r.title}</title>`);

  // Inject SEO tags before </head>
  const seoTags = buildSeoTags(r);
  html = html.replace('</head>', `${seoTags}\n</head>`);

  // Write output
  if (r.outDir) {
    const dir = join(distDir, r.outDir);
    mkdirSync(dir, { recursive: true });
    writeFileSync(join(dir, 'index.html'), html, 'utf-8');
    console.log(`✓  dist/${r.outDir}/index.html  —  ${r.title}`);
  } else {
    writeFileSync(join(distDir, 'index.html'), html, 'utf-8');
    console.log(`✓  dist/index.html  —  ${r.title}`);
  }
}

console.log('\n✅ Prerender complete — 5 routes with static SEO tags.\n');
