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
import { aboutPage, careersPage, thanksPage } from './pages/company.mjs';
import CASE_STUDIES from './data/case-studies.mjs';
import BLOG from './data/blog.mjs';
import { SERVICES } from './data/site.mjs';

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
write('index.html', layout({
  root: '', path: '',
  title: 'RixlSoft — AI-First Product Engineering Company',
  description: 'RixlSoft designs, builds and deploys AI-powered software, games, AR/VR experiences and scalable cloud platforms for startups and enterprises worldwide.',
  body: home(),
  jsonld: [{ '@context': 'https://schema.org', '@type': 'Organization', name: 'RixlSoft', url: SITE_URL, foundingDate: '2024',
    description: 'AI-first product engineering company.' }],
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
write('thanks.html', layout({ root: '', path: 'thanks.html', ...thanksPage() }));

// Case studies & blog
const csIdx = caseStudiesIndex();
write('case-studies/index.html', layout({ root: '../', path: 'case-studies/', ...csIdx, body: csIdx.body + contactSection() }));
for (const c of CASE_STUDIES) { const p = caseStudyPage(c); write(`case-studies/${c.slug}.html`, layout({ root: '../', path: `case-studies/${c.slug}.html`, ...p, body: p.body + contactSection() })); }
const bIdx = blogIndex();
write('blog/index.html', layout({ root: '../', path: 'blog/', ...bIdx, body: bIdx.body + contactSection() }));
for (const b of BLOG) { const p = blogPage(b); write(`blog/${b.slug}.html`, layout({ root: '../', path: `blog/${b.slug}.html`, ...p, body: p.body + contactSection() })); }

// Sitemap
const urls = ['', 'about.html', 'careers.html', 'services/', ...SERVICES.map(s => `services/${s.slug}.html`), 'case-studies/', ...CASE_STUDIES.map(c => `case-studies/${c.slug}.html`), 'blog/', ...BLOG.map(b => `blog/${b.slug}.html`)];
write('sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map(u => `  <url><loc>${SITE_URL}${u}</loc></url>`).join('\n')}\n</urlset>\n`);
console.log(`Done — ${urls.length} pages.`);
