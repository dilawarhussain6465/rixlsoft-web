#!/usr/bin/env node
// Static site generator for RixlSoft (no dependencies).
// Usage: node src/build.mjs   → writes index.html, services/index.html, services/<slug>.html
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { layout, SITE_URL } from './layout.mjs';
import { home, contactSection } from './pages/home.mjs';
import { servicePage } from './pages/service.mjs';
import { hubPage } from './pages/hub.mjs';
import { caseStudiesIndex, caseStudyPage, blogIndex, blogPage } from './pages/articles.mjs';
import { aboutPage, careersPage, thanksPage, notFoundPage } from './pages/company.mjs';
import CASE_STUDIES from './data/case-studies.mjs';
import BLOG from './data/blog.mjs';
import { SERVICES, PHOTOS, img, srcset } from './data/site.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const write = (rel, content) => {
  const file = path.join(ROOT, rel);
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, content);
  console.log(`  ✓ ${rel}  (${(content.length / 1024).toFixed(1)} KB)`);
};

// Load service content
const details = {};
for (const f of fs.readdirSync(path.join(ROOT, 'src/data/services')).filter(f => f.endsWith('.mjs'))) {
  const mod = await import(path.join(ROOT, 'src/data/services', f));
  for (const s of mod.default) details[s.slug] = s;
}
const missing = SERVICES.filter(s => !details[s.slug]).map(s => s.slug);
if (missing.length) throw new Error(`No content for: ${missing.join(', ')}`);

console.log('Building RixlSoft…');

// Home
const ORG = {
  '@context': 'https://schema.org', '@type': 'Organization', '@id': `${SITE_URL}#organization`,
  name: 'RixlSoft', alternateName: 'RixlSoft Technologies', url: SITE_URL,
  logo: { '@type': 'ImageObject', url: `${SITE_URL}assets/brand/icon-512.png`, width: 512, height: 512 },
  image: `${SITE_URL}assets/brand/og-default.png`, foundingDate: '2024',
  description: 'AI-first product engineering company building web and mobile apps, generative AI, games and XR, cloud platforms and Salesforce & CRM solutions.',
  address: { '@type': 'PostalAddress', addressLocality: 'Lahore', addressRegion: 'Punjab', addressCountry: 'PK' },
  areaServed: ['United States', 'United Kingdom', 'United Arab Emirates', 'Saudi Arabia', 'Europe', 'Pakistan'],
  knowsAbout: SERVICES.map(s => s.name),
  contactPoint: { '@type': 'ContactPoint', contactType: 'sales', url: `${SITE_URL}#contact`, availableLanguage: ['English', 'Urdu'] },
};
const WEBSITE = { '@context': 'https://schema.org', '@type': 'WebSite', '@id': `${SITE_URL}#website`, name: 'RixlSoft', url: SITE_URL, publisher: { '@id': `${SITE_URL}#organization` }, inLanguage: 'en' };
const SERVICE_LIST = { '@context': 'https://schema.org', '@type': 'ItemList', name: 'RixlSoft services', itemListElement: SERVICES.map((s, i) => ({ '@type': 'ListItem', position: i + 1, name: s.name, url: `${SITE_URL}services/${s.slug}.html` })) };
write('index.html', layout({
  root: '', path: '',
  title: 'RixlSoft — AI Software Development & Product Engineering Company',
  metaTitle: 'RixlSoft | AI Software Development & Engineering Company',
  description: 'RixlSoft builds AI-powered software, web & mobile apps, games, AR/VR, cloud platforms and Salesforce CRM solutions for startups and enterprises worldwide.',
  preload: { src: img(PHOTOS.hero, 1920), srcset: srcset(PHOTOS.hero, [800, 1280, 1920]), sizes: '100vw' },
  body: home(),
  jsonld: [ORG, WEBSITE, SERVICE_LIST],
}));

// Services hub
const hub = hubPage(details);
write('services/index.html', layout({ root: '../', path: 'services/', ...hub, body: hub.body + contactSection() }));

// Service pages
for (const meta of SERVICES) {
  const p = servicePage(meta, details[meta.slug]);
  write(`services/${meta.slug}.html`, layout({ root: '../', path: `services/${meta.slug}.html`, ...p, body: p.body + contactSection() }));
}

// Company pages
write('about.html', layout({ root: '', path: 'about.html', ...aboutPage(), body: aboutPage().body + contactSection() }));
write('careers.html', layout({ root: '', path: 'careers.html', ...careersPage() }));
write('thanks.html', layout({ root: '', path: 'thanks.html', noindex: true, ...thanksPage() }));
// GitHub Pages serves 404.html for unknown URLs; absolute root so assets resolve at any depth
write('404.html', layout({ root: '/rixlsoft-web/', path: '404.html', noindex: true, ...notFoundPage() }));
write('site.webmanifest', JSON.stringify({ name: 'RixlSoft', short_name: 'RixlSoft', start_url: './', display: 'standalone', background_color: '#05101e', theme_color: '#05101e',
  icons: [{ src: 'assets/brand/icon-192.png', sizes: '192x192', type: 'image/png' }, { src: 'assets/brand/icon-512.png', sizes: '512x512', type: 'image/png' }] }, null, 2));

// Case studies & blog
const csIdx = caseStudiesIndex();
write('case-studies/index.html', layout({ root: '../', path: 'case-studies/', ...csIdx, body: csIdx.body + contactSection() }));
for (const c of CASE_STUDIES) { const p = caseStudyPage(c); write(`case-studies/${c.slug}.html`, layout({ root: '../', path: `case-studies/${c.slug}.html`, ...p, body: p.body + contactSection() })); }
const bIdx = blogIndex();
write('blog/index.html', layout({ root: '../', path: 'blog/', ...bIdx, body: bIdx.body + contactSection() }));
for (const b of BLOG) { const p = blogPage(b); write(`blog/${b.slug}.html`, layout({ root: '../', path: `blog/${b.slug}.html`, ...p, body: p.body + contactSection() })); }

// Sitemap
const urls = ['', 'about.html', 'careers.html', 'services/', ...SERVICES.map(s => `services/${s.slug}.html`), 'case-studies/', ...CASE_STUDIES.map(c => `case-studies/${c.slug}.html`), 'blog/', ...BLOG.map(b => `blog/${b.slug}.html`)];
const today = new Date().toISOString().slice(0, 10);
const prio = u => (u === '' ? '1.0' : /^(services\/|case-studies\/|blog\/)$/.test(u) || u.startsWith('services/') ? '0.8' : '0.6');
write('sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map(u => `  <url><loc>${SITE_URL}${u}</loc><lastmod>${today}</lastmod><priority>${prio(u)}</priority></url>`).join('\n')}\n</urlset>\n`);
const expires = new Date(Date.now() + 365 * 864e5).toISOString().slice(0, 10) + 'T00:00:00.000Z';
write('.well-known/security.txt', `Contact: ${SITE_URL}#contact\nExpires: ${expires}\nPreferred-Languages: en\nCanonical: ${SITE_URL}.well-known/security.txt\n`);
write('.nojekyll', '');
console.log(`Done — ${urls.length} pages.`);
