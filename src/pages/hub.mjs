import { esc, icon, html } from '../lib.mjs';
import { CATEGORIES, SERVICES, PHOTOS, img } from '../data/site.mjs';

/** services/index.html — every service grouped by practice. */
export function hubPage(details) {
  const body = html`
<section class="page-hero">
  <canvas class="hero-canvas" aria-hidden="true"></canvas>
  <div class="orb orb-1"></div><div class="orb orb-2"></div>
  <div class="grid-bg"></div>
  <div class="container">
    <div class="page-hero-grid">
      <div>
        <nav class="crumbs" aria-label="Breadcrumb" data-reveal="down"><a href="../">Home</a>${icon('chevron-right')}<span aria-current="page">Services</span></nav>
        <div class="hero-badge" data-reveal="down" style="--d:.1s"><span class="dot"></span>Our Services</div>
        <h1 data-split>Everything You Need to <em>Build, Scale &amp; Grow</em></h1>
        <p class="lead" data-reveal="up" style="--d:.45s">From AI products and immersive games to cloud infrastructure and dedicated teams — one accountable partner across the full software lifecycle.</p>
        <div class="hero-actions" data-reveal="up" style="--d:.6s">
          ${CATEGORIES.map(c => html`<a href="#${c.key}" class="btn btn-outline-dark btn-sm">${icon(c.icon)} ${esc(c.name)}</a>`)}
        </div>
      </div>
      <div class="hero-visual" data-reveal="zoom" style="--d:.25s">
        <div class="ring"></div>
        <div class="hero-frame" data-tilt="5"><img src="${img(PHOTOS.services, 1000)}" alt="RixlSoft engineers at work" fetchpriority="high"></div>
        <div class="hero-chip"><span class="c-ico">${icon('layout-grid')}</span><div><strong>Full-cycle delivery</strong><small>Strategy · Design · Build · Run</small></div></div>
      </div>
    </div>
  </div>
</section>

<section class="sec bg-light">
  <div class="container">
    ${CATEGORIES.map(c => html`
    <div class="hub-cat" id="${c.key}">
      <div class="hub-cat-head" data-reveal="left">
        <span class="h-ico">${icon(c.icon)}</span>
        <div><h2>${esc(c.name)}</h2><p>${esc(c.blurb)}</p></div>
      </div>
      <div class="hub-grid" data-stagger=".07" data-reveal-type="up">
        ${SERVICES.filter(s => s.cat === c.key).map(s => html`
        <a class="hub-card" href="${s.slug}.html">
          <div class="hc-img"><div class="hc-clip"><img src="${img(s.photo, 700)}" alt="${esc(s.name)} services" loading="lazy"></div><span class="hc-ico">${icon(s.icon)}</span></div>
          <div class="hc-body">
            <h3>${esc(s.name)}</h3>
            <p>${esc(details[s.slug].hero.lead.split(/(?<=\.)\s/)[0])}</p>
            <span class="more">Explore ${esc(s.name)} ${icon('arrow-right')}</span>
          </div>
        </a>`)}
      </div>
    </div>`)}
  </div>
</section>
`;
  return {
    title: 'Software Development Services | RixlSoft',
    description: 'RixlSoft services: web & app development, generative AI, AR/VR, games, cloud & DevOps, Salesforce & CRM, QA, e-commerce and dedicated teams.',
    breadcrumbs: [['Home', ''], ['Services', 'services/']],
    image: img(PHOTOS.services, 1200),
    body,
  };
}
