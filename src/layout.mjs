import fs from 'node:fs';
import crypto from 'node:crypto';
import { esc, icon, brand, html } from './lib.mjs';
import { CATEGORIES, SERVICES, INDUSTRIES, PHOTOS, ARTICLE_PHOTOS, img } from './data/site.mjs';
import CASE_STUDIES from './data/case-studies.mjs';
import BLOG from './data/blog.mjs';

// Cache-busting: the asset URL changes whenever the file's content changes,
// so browsers/GitHub Pages never pair new HTML with a stale stylesheet or script.
const version = file => crypto.createHash('md5').update(fs.readFileSync(new URL(`../${file}`, import.meta.url))).digest('hex').slice(0, 10);
const CSS_V = version('assets/css/main.css');
const JS_V = version('assets/js/main.js');

export const SITE_URL = 'https://dilawarhussain6465.github.io/rixlsoft-web/';
const caret = '<svg class="nav-caret" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>';

const svcHref = (root, slug) => `${root}services/${slug}.html`;
export { svcHref };

function megaServices(root, home) {
  const feature = (slug, tag) => { const s = SERVICES.find(x => x.slug === slug); return html`
          <a class="ms-pick" href="${svcHref(root, slug)}"><span class="d-icon">${icon(s.icon)}</span><span><small>${tag}</small>${esc(s.name)}</span>${icon('arrow-right', 'go')}</a>`; };
  return html`
    <div class="mega-drop">
      <div class="ms">
        <div class="ms-cols">
          ${CATEGORIES.map(c => html`
          <div class="ms-col">
            <div class="ms-col-head">${icon(c.icon)} ${esc(c.name.replace(' Services', ''))}</div>
            ${SERVICES.filter(s => s.cat === c.key).map(s => html`
            <a class="drop-link" href="${svcHref(root, s.slug)}" title="${esc(s.short)}"><span class="d-icon">${icon(s.icon)}</span><span class="d-text">${esc(s.name)}</span></a>`)}
          </div>`)}
        </div>
        <div class="ms-foot">
          <div class="ms-picks">
            ${feature('digital-transformation', 'Featured')}
            ${feature('staff-augmentation', 'Hire talent')}
            ${feature('salesforce-consulting', 'CRM experts')}
          </div>
          <a href="${home}#contact" class="btn btn-blue btn-sm">Get a Free Consultation ${icon('arrow-right')}</a>
        </div>
      </div>
    </div>`;
}

function megaIndustries(home) {
  return html`
    <div class="mega-drop">
      <div class="mg">
        <div class="mg-body">
          <div class="mg-head"><h4>Industries We Serve</h4><a href="${home}#industries">Explore industries ${icon('arrow-right')}</a></div>
          <div class="mg-grid">
            ${Object.entries(INDUSTRIES).map(([, i]) => html`<a class="drop-link" href="${home}#industries"><span class="d-icon">${icon(i.icon)}</span><span class="d-text">${esc(i.name)}<small>${esc(i.desc)}</small></span></a>`)}
          </div>
        </div>
        <a class="ms-feature mg-feature" href="${home}#contact">
          <img src="${img(INDUSTRIES.fintech.photo, 600)}" alt="" loading="lazy">
          <span class="tag">Domain expertise</span>
          <h5>Software built around the rules of your industry.</h5>
          <span class="more">Talk to an expert ${icon('arrow-right')}</span>
        </a>
      </div>
    </div>`;
}

const featureCard = (href, photo, tag, title, more) => html`
        <a class="ms-feature mg-feature" href="${href}">
          <img src="${img(photo, 600)}" alt="" loading="lazy">
          <span class="tag">${tag}</span>
          <h5>${title}</h5>
          <span class="more">${more} ${icon('arrow-right')}</span>
        </a>`;

function megaInsights(root) {
  const cs = CASE_STUDIES[0];
  return html`
    <div class="mega-drop">
      <div class="mg">
        <div class="mg-body mg-2">
          <div>
            <div class="mg-head"><h4>${icon('folder-open')} Case Studies</h4><a href="${root}case-studies/index.html">View all ${icon('arrow-right')}</a></div>
            ${CASE_STUDIES.map(c => html`<a class="drop-link" href="${root}case-studies/${c.slug}.html"><span class="d-icon">${icon(INDUSTRIES[c.industry].icon)}</span><span class="d-text">${esc(c.title)}<small>${esc(INDUSTRIES[c.industry].name)}</small></span></a>`)}
          </div>
          <div>
            <div class="mg-head"><h4>${icon('newspaper')} Blog</h4><a href="${root}blog/index.html">View all ${icon('arrow-right')}</a></div>
            ${BLOG.map(b => html`<a class="drop-link" href="${root}blog/${b.slug}.html"><span class="d-icon">${icon('book-open')}</span><span class="d-text">${esc(b.title)}<small>${esc(b.category)} · ${b.readMins} min read</small></span></a>`)}
          </div>
        </div>
        ${featureCard(`${root}case-studies/${cs.slug}.html`, ARTICLE_PHOTOS[cs.slug], 'Featured case study', esc(cs.title), 'Read the story')}
      </div>
    </div>`;
}

function megaCompany(root, home) {
  const links = [
    [`${root}about.html`, 'building-2', 'About RixlSoft', 'Our story, mission &amp; values'],
    [`${root}about.html#why`, 'gem', 'Why RixlSoft', 'Platforms &amp; recognition'],
    [`${root}about.html#how`, 'workflow', 'How We Work', 'Delivery model &amp; process'],
    [`${root}careers.html`, 'briefcase', 'Careers', 'Join our team'],
    [`${home}#contact`, 'mail', 'Contact Us', 'Start a conversation'],
  ];
  return html`
    <div class="mega-drop mega-sm">
      <div class="mg">
        <div class="mg-body">
          <div class="mg-head"><h4>Company</h4></div>
          <div class="mg-grid c2">${links.map(([h, ic, t, s]) => html`<a class="drop-link" href="${h}"><span class="d-icon">${icon(ic)}</span><span class="d-text">${t}<small>${s}</small></span></a>`)}</div>
        </div>
        ${featureCard(`${root}careers.html`, PHOTOS.about, 'Careers', 'Build intelligent systems with a senior, AI-first team.', 'Explore careers')}
      </div>
    </div>`;
}

function nav(root, home) {
  const mobLinks = list => list.map(([href, ic, t]) => html`<a class="mob-sub-link" href="${href}">${icon(ic)} ${t}</a>`);
  return html`
<div class="scroll-progress" aria-hidden="true"></div>
<nav class="nav-bar" id="navbar" aria-label="Main">
  <div class="container">
    <div class="nav-inner">
      <a href="${home}" class="nav-logo" aria-label="RixlSoft home">Rixl<em>Soft</em><i></i></a>
      <ul class="nav-menu">
        <li class="nav-item has-mega"><button class="nav-link" aria-expanded="false">Services ${caret}</button>${megaServices(root, home)}</li>
        <li class="nav-item has-mega"><button class="nav-link" aria-expanded="false">Industries ${caret}</button>${megaIndustries(home)}</li>
        <li class="nav-item has-mega"><button class="nav-link" aria-expanded="false">Insights ${caret}</button>${megaInsights(root)}</li>
        <li class="nav-item has-mega"><button class="nav-link" aria-expanded="false">Company ${caret}</button>${megaCompany(root, home)}</li>
      </ul>
      <div class="nav-right">
        <a href="${home}#contact" class="btn btn-blue btn-sm nav-cta" data-magnetic>Contact Us ${icon('arrow-right')}</a>
        <button class="nav-ham" id="navHam" aria-label="Open menu" aria-expanded="false" aria-controls="mobOverlay"><span></span><span></span><span></span></button>
      </div>
    </div>
  </div>
</nav>

<div class="mob-overlay" id="mobOverlay">
  <button class="mob-nav-link" aria-expanded="false" aria-controls="msub1">Services ${caret}</button>
  <div class="mob-submenu" id="msub1"><div>
    ${CATEGORIES.map(c => html`<div class="mob-sub-label">${esc(c.name)}</div>${SERVICES.filter(s => s.cat === c.key).map(s => html`<a class="mob-sub-link" href="${svcHref(root, s.slug)}">${icon(s.icon)} ${esc(s.name)}</a>`)}`)}
    <a class="mob-sub-link" href="${root}services/index.html" style="color:var(--cyan)">${icon('layout-grid')} Explore our services</a>
  </div></div>
  <button class="mob-nav-link" aria-expanded="false" aria-controls="msub2">Industries ${caret}</button>
  <div class="mob-submenu" id="msub2"><div>
    ${Object.values(INDUSTRIES).map(i => html`<a class="mob-sub-link" href="${home}#industries">${icon(i.icon)} ${esc(i.name)}</a>`)}
  </div></div>
  <button class="mob-nav-link" aria-expanded="false" aria-controls="msub3">Insights ${caret}</button>
  <div class="mob-submenu" id="msub3"><div>${mobLinks([[`${root}case-studies/index.html`, 'folder-open', 'Case Studies'], [`${root}blog/index.html`, 'newspaper', 'Blog']])}</div></div>
  <button class="mob-nav-link" aria-expanded="false" aria-controls="msub4">Company ${caret}</button>
  <div class="mob-submenu" id="msub4"><div>${mobLinks([[`${root}about.html`, 'building-2', 'About RixlSoft'], [`${root}about.html#why`, 'gem', 'Why RixlSoft'], [`${root}careers.html`, 'briefcase', 'Careers'], [`${home}#contact`, 'mail', 'Contact Us']])}</div></div>
  <a href="${home}#contact" class="btn btn-blue" style="margin-top:24px;width:100%;justify-content:center;">Contact Us ${icon('arrow-right')}</a>
</div>`;
}

function footer(root, home) {
  const svcLinks = list => list.map(s => html`<li><a href="${svcHref(root, s.slug)}">${esc(s.name)}</a></li>`);
  const socials = [['linkedin', 'LinkedIn'], ['x', 'X'], ['github', 'GitHub'], ['youtube', 'YouTube'], ['instagram', 'Instagram']];
  return html`
<footer class="footer">
  <div class="container">
    <div class="footer-grid">
      <div class="footer-brand">
        <a href="${home}" class="logo">Rixl<em>Soft</em></a>
        <p>AI-first product engineering company building intelligent systems, scalable platforms, immersive games, and AR/VR experiences for businesses worldwide.</p>
        <div class="footer-socials">
          ${socials.map(([k, n]) => html`<a href="#" class="f-social" aria-label="RixlSoft on ${n}" title="${n}">${brand(k)}</a>`)}
          <a href="mailto:hello@rixlsoft.com" class="f-social" aria-label="Email RixlSoft" title="Email">${icon('mail')}</a>
        </div>
      </div>
      ${CATEGORIES.map(c => html`<div class="f-col"><h5>${esc({ digital: 'Engineering', ai: 'AI &amp; Emerging', cloud: 'Cloud &amp; DevOps', crm: 'Salesforce &amp; CRM', specialized: 'Specialized' }[c.key])}</h5><ul class="f-links">${svcLinks(SERVICES.filter(s => s.cat === c.key))}</ul></div>`)}
      <div class="f-col"><h5>Company</h5>
        <ul class="f-links">
          <li><a href="${root}about.html">About RixlSoft</a></li>
          <li><a href="${root}services/index.html">Our Services</a></li>
          <li><a href="${root}case-studies/index.html">Case Studies</a></li>
          <li><a href="${root}blog/index.html">Blog</a></li>
          <li><a href="${root}careers.html">Careers</a></li>
          <li><a href="${home}#contact">Contact Us</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <p>© <span id="year">2026</span> RixlSoft. All rights reserved. Resolve with Intelligence™</p>
      <div class="footer-legal"><a href="#">Privacy Policy</a><a href="#">Terms of Service</a><a href="#">Cookie Policy</a></div>
    </div>
    <p class="footer-verify">TASKPULL-376358617E9397B6</p>
  </div>
  <div class="footer-watermark" aria-hidden="true">RixlSoft</div>
</footer>
<button class="to-top" aria-label="Back to top">${icon('arrow-up')}</button>`;
}

/**
 * Full page shell.
 * @param {{root:string, path:string, title:string, description:string, image?:string, body:string, jsonld?:object[]}} p
 */
export function layout(p) {
  const home = p.root || './';
  const url = SITE_URL + p.path;
  const ld = (p.jsonld || []).map(o => `<script type="application/ld+json">${JSON.stringify(o)}</script>`).join('\n');
  return `<!DOCTYPE html>
<html lang="en" class="no-js">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${esc(p.title)}</title>
<meta name="description" content="${esc(p.description)}">
<link rel="canonical" href="${url}">
<meta name="theme-color" content="#05101e">
<meta property="og:type" content="website">
<meta property="og:site_name" content="RixlSoft">
<meta property="og:title" content="${esc(p.title)}">
<meta property="og:description" content="${esc(p.description)}">
<meta property="og:url" content="${url}">
<meta property="og:image" content="${p.image || img(PHOTOS.hero, 1200)}">
<meta name="twitter:card" content="summary_large_image">
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' rx='14' fill='%2305101e'/%3E%3Ctext x='50%25' y='54%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial' font-weight='900' font-size='38' fill='%2300c8f0'%3ER%3C/text%3E%3C/svg%3E">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="preconnect" href="https://images.unsplash.com">
<link href="https://fonts.googleapis.com/css2?family=Syne:wght@800&family=Plus+Jakarta+Sans:wght@500;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="${p.root}assets/css/main.css?v=${CSS_V}">
${ld}
</head>
<body>
<!-- Generated by src/build.mjs — edit the templates in src/, then run: node src/build.mjs -->
${nav(p.root, home)}
<main id="main">
${p.body}
</main>
${footer(p.root, home)}
<script src="${p.root}assets/js/main.js?v=${JS_V}" defer></script>
</body>
</html>
`;
}
