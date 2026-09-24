import { esc, icon, brand, logoName, html } from './lib.mjs';
import { CATEGORIES, SERVICES, INDUSTRIES, PHOTOS, TECH_STACK, img } from './data/site.mjs';

export const SITE_URL = 'https://dilawarhussain6465.github.io/rixlsoft-web/';
const caret = '<svg class="nav-caret" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>';

const svcHref = (root, slug) => `${root}services/${slug}.html`;
export { svcHref };

function megaServices(root, home) {
  return html`
    <div class="mega-drop">
      <div class="ms" data-ms>
        <div class="ms-rail">
          <div class="ms-rail-label">Our Services</div>
          ${CATEGORIES.map((c, i) => html`
          <button class="ms-cat${i === 0 ? ' on' : ''}" data-cat="${c.key}"><span class="d-icon">${icon(c.icon)}</span><span>${esc(c.name)}<small>${SERVICES.filter(s => s.cat === c.key).length} services</small></span>${icon('chevron-right', 'chev')}</button>`)}
          <a class="ms-all" href="${root}services/index.html">${icon('layout-grid')} View all 21 services</a>
        </div>
        <div>
          ${CATEGORIES.map((c, i) => html`
          <div class="ms-panel${i === 0 ? ' on' : ''}" data-panel="${c.key}">
            <h4>${esc(c.name)}</h4>
            <p>${esc(c.blurb)}</p>
            <div class="ms-links">
              ${SERVICES.filter(s => s.cat === c.key).map(s => html`
              <a class="drop-link" href="${svcHref(root, s.slug)}"><span class="d-icon">${icon(s.icon)}</span><span class="d-text">${esc(s.name)}<small>${esc(s.short)}</small></span></a>`)}
            </div>
          </div>`)}
        </div>
        <a class="ms-feature" href="${home}#contact">
          <img src="${img(PHOTOS.services, 600)}" alt="" loading="lazy">
          <span class="tag">Free consultation</span>
          <h5>Not sure where to start? Talk to a solution architect.</h5>
          <span class="more">Book a discovery call ${icon('arrow-right')}</span>
        </a>
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

function megaTech(root, home) {
  return html`
    <div class="mega-drop">
      <div class="mg-body">
        <div class="mg-head"><h4>Technologies We Master</h4><a href="${home}#technology">See full stack ${icon('arrow-right')}</a></div>
        <div class="tech-groups">
          ${TECH_STACK.map(t => html`
          <div class="tech-group"><h6>${esc(t.group)}</h6><div class="tech-chips">${t.items.slice(0, 6).map(k => html`<a class="tech-chip" href="${home}#technology"><img src="${root}assets/logos/${k}.svg" alt="" width="16" height="16" loading="lazy">${esc(logoName(k))}</a>`)}</div></div>`)}
        </div>
      </div>
    </div>`;
}

const smallDrop = links => html`
          <div class="small-drop">${links.map(([href, ic, t, s]) => html`
            <a class="drop-link" href="${href}"><span class="d-icon">${icon(ic)}</span><span class="d-text">${t}<small>${s}</small></span></a>`)}
          </div>`;

function nav(root, home) {
  const insights = [
    [`${home}#insights`, 'folder-open', 'Case Studies', 'Real project outcomes'],
    [`${home}#insights`, 'newspaper', 'Blog &amp; Articles', 'Tech insights &amp; guides'],
    [`${home}#process`, 'workflow', 'How We Deliver', 'Our 5-phase process'],
  ];
  const company = [
    [`${home}#about`, 'building-2', 'About RixlSoft', 'Our story &amp; mission'],
    [`${home}#about`, 'gem', 'Why RixlSoft', 'What makes us different'],
    [`${home}#recognition`, 'award', 'Awards &amp; Certifications', 'Partnerships &amp; standards'],
    [`${home}#contact`, 'briefcase', 'Careers', 'Join our team'],
    [`${home}#contact`, 'mail', 'Contact Us', 'Start a conversation'],
  ];
  const mobLinks = (list) => list.map(([href, ic, t]) => html`<a class="mob-sub-link" href="${href}">${icon(ic)} ${t}</a>`);
  return html`
<div class="scroll-progress" aria-hidden="true"></div>
<nav class="nav-bar" id="navbar" aria-label="Main">
  <div class="container">
    <div class="nav-inner">
      <a href="${home}" class="nav-logo" aria-label="RixlSoft home">Rixl<em>Soft</em><i></i></a>
      <ul class="nav-menu">
        <li class="nav-item has-mega"><button class="nav-link" aria-expanded="false">Services ${caret}</button>${megaServices(root, home)}</li>
        <li class="nav-item has-mega"><button class="nav-link" aria-expanded="false">Industries ${caret}</button>${megaIndustries(home)}</li>
        <li class="nav-item has-mega"><button class="nav-link" aria-expanded="false">Technologies ${caret}</button>${megaTech(root, home)}</li>
        <li class="nav-item"><button class="nav-link" aria-expanded="false">Insights ${caret}</button>${smallDrop(insights)}</li>
        <li class="nav-item"><button class="nav-link" aria-expanded="false">Company ${caret}</button>${smallDrop(company)}</li>
      </ul>
      <div class="nav-right">
        <a href="${home}#contact" class="nav-careers">Careers</a>
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
    <a class="mob-sub-link" href="${root}services/index.html" style="color:var(--cyan)">${icon('layout-grid')} View all services</a>
  </div></div>
  <button class="mob-nav-link" aria-expanded="false" aria-controls="msub2">Industries ${caret}</button>
  <div class="mob-submenu" id="msub2"><div>
    ${Object.values(INDUSTRIES).map(i => html`<a class="mob-sub-link" href="${home}#industries">${icon(i.icon)} ${esc(i.name)}</a>`)}
  </div></div>
  <a class="mob-nav-link" href="${home}#technology">Technologies</a>
  <button class="mob-nav-link" aria-expanded="false" aria-controls="msub3">Insights ${caret}</button>
  <div class="mob-submenu" id="msub3"><div>${mobLinks(insights)}</div></div>
  <button class="mob-nav-link" aria-expanded="false" aria-controls="msub4">Company ${caret}</button>
  <div class="mob-submenu" id="msub4"><div>${mobLinks(company)}</div></div>
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
      <div class="f-col"><h5>Engineering &amp; AI</h5><ul class="f-links">${svcLinks(SERVICES.filter(s => s.cat === 'digital' || s.cat === 'ai'))}</ul></div>
      <div class="f-col"><h5>Cloud &amp; More</h5><ul class="f-links">${svcLinks(SERVICES.filter(s => s.cat === 'cloud' || s.cat === 'specialized'))}</ul></div>
      <div class="f-col"><h5>Company</h5>
        <ul class="f-links">
          <li><a href="${home}#about">About RixlSoft</a></li>
          <li><a href="${home}#industries">Industries</a></li>
          <li><a href="${home}#process">Our Process</a></li>
          <li><a href="${home}#technology">Technology</a></li>
          <li><a href="${home}#contact">Careers</a></li>
        </ul>
      </div>
      <div class="f-col"><h5>Resources</h5>
        <ul class="f-links">
          <li><a href="${root}services/index.html">All Services</a></li>
          <li><a href="${home}#insights">Case Studies</a></li>
          <li><a href="${home}#insights">Blog &amp; Articles</a></li>
          <li><a href="${home}#contact">Contact Us</a></li>
          <li><a href="mailto:hello@rixlsoft.com">hello@rixlsoft.com</a></li>
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
<link href="https://fonts.googleapis.com/css2?family=Syne:wght@500;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="${p.root}assets/css/main.css">
${ld}
</head>
<body>
<!-- Generated by src/build.mjs — edit the templates in src/, then run: node src/build.mjs -->
${nav(p.root, home)}
<main id="main">
${p.body}
</main>
${footer(p.root, home)}
<script src="${p.root}assets/js/main.js" defer></script>
</body>
</html>
`;
}
