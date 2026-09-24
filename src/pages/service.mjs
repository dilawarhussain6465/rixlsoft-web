import { esc, rich, plain, icon, logo, logoName, html } from '../lib.mjs';
import { CATEGORIES, SERVICES, INDUSTRIES, PHOTOS, img } from '../data/site.mjs';
import { svcHref, SITE_URL } from '../layout.mjs';

const R = '../';
const MODEL_ICONS = ['target', 'users-round', 'hourglass'];

/** A single service detail page. `meta` from site.mjs SERVICES, `s` from src/data/services/*.mjs */
export function servicePage(meta, s) {
  const cat = CATEGORIES.find(c => c.key === meta.cat);
  const allTech = [...new Set(s.tech.flatMap(t => t.items))];
  const marquee = allTech.map(k => html`<span class="mq-item">${logo(k, R, 26)}${esc(logoName(k))}</span>`).join('');

  const body = html`
<!-- ================= PAGE HERO ================= -->
<section class="page-hero">
  <canvas class="hero-canvas" aria-hidden="true"></canvas>
  <div class="orb orb-1"></div><div class="orb orb-2"></div>
  <div class="grid-bg"></div>
  <div class="container">
    <div class="page-hero-grid">
      <div>
        <nav class="crumbs" aria-label="Breadcrumb" data-reveal="down">
          <a href="../">Home</a>${icon('chevron-right')}<a href="index.html">Services</a>${icon('chevron-right')}<a href="index.html#${cat.key}">${esc(cat.name)}</a>${icon('chevron-right')}<span aria-current="page">${esc(meta.name)}</span>
        </nav>
        <div class="hero-badge" data-reveal="down" style="--d:.1s"><span class="dot"></span>${esc(s.hero.eyebrow)}</div>
        <h1 data-split>${rich(s.hero.title)}</h1>
        <p class="lead" data-reveal="up" style="--d:.45s">${esc(s.hero.lead)}</p>
        <div class="hero-actions" data-reveal="up" style="--d:.6s">
          <a href="#contact" class="btn btn-blue" data-magnetic>Get a Free Consultation ${icon('arrow-right')}</a>
          <a href="#offerings" class="btn btn-outline-dark">What We Offer</a>
        </div>
        <div class="page-stats" data-stagger=".1" data-reveal-type="up">
          ${s.stats.map(st => html`<div><div class="stat-num" data-count="${esc(st.value)}">${esc(st.value)}<em>${esc(st.suffix || '')}</em></div><div class="l">${esc(st.label)}</div></div>`)}
        </div>
      </div>
      <div class="hero-visual" data-reveal="zoom" style="--d:.25s">
        <div class="ring"></div>
        <div class="hero-frame" data-tilt="5"><img src="${img(meta.photo, 1000)}" alt="${esc(meta.name)} at RixlSoft" fetchpriority="high"></div>
        <div class="hero-chip"><span class="c-ico">${icon(meta.icon)}</span><div><strong>${esc(meta.name)}</strong><small>${esc(meta.short)}</small></div></div>
        <div class="float-card fc-3">
          <div class="fc-logos">${allTech.slice(0, 4).map(k => html`<span>${logo(k, R, 20)}</span>`)}</div>
          <div><div class="fc-label">Tech we use</div><div class="fc-val" style="font-size:18px">${allTech.length}+ tools</div></div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ================= TECH MARQUEE ================= -->
<section class="marquee-sec" aria-label="Technologies for ${esc(meta.name)}">
  <div class="marquee" style="--mq-dur:${Math.max(30, allTech.length * 3)}s"><div class="marquee-track">${marquee}</div><div class="marquee-track" aria-hidden="true">${marquee}</div></div>
</section>

<!-- ================= INTRO ================= -->
<section class="sec">
  <div class="container">
    <div class="split">
      <div>
        <div class="sec-badge" data-reveal="up">${esc(meta.name)}</div>
        <h2 class="h2" data-split>${rich(s.intro.heading)}</h2>
        <div class="prose" data-reveal="up">${s.intro.body.map(p => html`<p>${esc(p)}</p>`)}</div>
        <ul class="intro-points" data-stagger=".08" data-reveal-type="up">
          ${s.intro.points.map(p => html`<li>${icon('check')}${esc(p)}</li>`)}
        </ul>
      </div>
      <div class="media-stack" data-reveal="clip">
        <div class="media-dots"></div>
        <div class="media-main"><img src="${img(cat.photo === meta.photo ? PHOTOS.services : cat.photo, 1000)}" alt="" loading="lazy" data-parallax=".08"></div>
        <div class="media-badge"><span class="b-ico">${icon(s.benefits[0].icon)}</span><div><strong>${esc(s.stats[0].value)}${esc(s.stats[0].suffix || '')}</strong><span>${esc(s.stats[0].label)}</span></div></div>
      </div>
    </div>
  </div>
</section>

<!-- ================= OFFERINGS ================= -->
<section class="sec bg-light" id="offerings">
  <div class="container">
    <div class="sec-head" data-reveal="up">
      <div class="sec-badge">What We Offer</div>
      <h2 data-split>${esc(meta.name)} <em>Services</em></h2>
      <p>Comprehensive capabilities covering every stage of your ${esc(meta.name)} journey — delivered by senior specialists.</p>
    </div>
    <div class="offer-grid" data-stagger=".08" data-reveal-type="up">
      ${s.offerings.map((o, i) => html`
      <article class="offer-card spot">
        <span class="num">0${i + 1}</span>
        <span class="o-ico">${icon(o.icon)}</span>
        <h3>${esc(o.title)}</h3>
        <p>${esc(o.desc)}</p>
      </article>`)}
    </div>
  </div>
</section>

<!-- ================= BENEFITS ================= -->
<section class="sec bg-dark dark-glow">
  <div class="container" style="position:relative;z-index:1">
    <div class="sec-head" data-reveal="up">
      <div class="sec-badge">Why RixlSoft</div>
      <h2 data-split>Why Choose Us for <em>${esc(meta.name)}</em></h2>
      <p>Senior engineers, transparent delivery and AI-first thinking — the difference between shipping software and building an asset.</p>
    </div>
    <div class="benefit-grid" data-stagger=".1" data-reveal-type="up">
      ${s.benefits.map(b => html`
      <div class="benefit"><span class="b-ico">${icon(b.icon)}</span><h3>${esc(b.title)}</h3><p>${esc(b.desc)}</p></div>`)}
    </div>
  </div>
</section>

<!-- ================= PROCESS ================= -->
<section class="sec">
  <div class="container">
    <div class="sec-head" data-reveal="up">
      <div class="sec-badge">Our Process</div>
      <h2 data-split>How We Deliver <em>${esc(meta.name)}</em></h2>
      <p>A proven, transparent process with clear deliverables at every stage — so you always know what's done, what's next and why.</p>
    </div>
    <div class="steps-h">
      <div class="bar"></div>
      ${s.process.map((p, i) => html`
      <div class="step-h" style="--i:${i}" data-reveal="up">
        <div class="sn">0${i + 1}</div>
        <div>
          <h3>${esc(p.title)}</h3>
          <p>${esc(p.desc)}</p>
          ${p.deliverable ? html`<div class="tl-deliv">${p.deliverable.split(/\s*·\s*/).map(d => html`<span>${esc(d)}</span>`)}</div>` : ''}
        </div>
      </div>`)}
    </div>
  </div>
</section>

<!-- ================= TECH STACK ================= -->
<section class="sec bg-alt">
  <div class="container">
    <div class="sec-head" data-reveal="up">
      <div class="sec-badge">Technology Stack</div>
      <h2 data-split>Tools &amp; Platforms <em>We Master</em></h2>
      <p>Proven, production-grade technology chosen for your requirements — never for hype.</p>
    </div>
    <div data-tabs>
      <div class="pill-tabs" role="tablist" aria-label="Technology groups" data-reveal="up">
        ${s.tech.map((t, i) => html`<button class="pill-tab" role="tab" id="tt-${i}" aria-controls="tp-${i}" aria-selected="${i === 0}" tabindex="${i === 0 ? 0 : -1}">${esc(t.group)}</button>`)}
      </div>
      ${s.tech.map((t, i) => html`
      <div class="logo-grid${i === 0 ? ' active' : ''}" role="tabpanel" id="tp-${i}" aria-labelledby="tt-${i}"${i === 0 ? '' : ' hidden'}>
        ${t.items.map((k, j) => html`<div class="logo-tile" style="--i:${j}">${logo(k, R, 44)}<span>${esc(logoName(k))}</span></div>`)}
      </div>`)}
    </div>
  </div>
</section>

<!-- ================= ENGAGEMENT MODELS ================= -->
<section class="sec">
  <div class="container">
    <div class="sec-head" data-reveal="up">
      <div class="sec-badge">Engagement Models</div>
      <h2 data-split>Flexible Ways to <em>Work Together</em></h2>
      <p>Choose the model that matches your scope, budget and pace — and switch as your needs evolve.</p>
    </div>
    <div class="model-grid" data-stagger=".1" data-reveal-type="up">
      ${s.models.map((m, i) => html`
      <div class="model-card spot${i === 1 ? ' featured' : ''}">
        <div class="m-ico">${icon(MODEL_ICONS[i])}</div>
        <h3>${esc(m.title)}</h3>
        <p>${esc(m.desc)}</p>
        <a href="#contact" class="btn ${i === 1 ? 'btn-blue' : 'btn-outline-blue'} btn-sm">Discuss this model ${icon('arrow-right')}</a>
      </div>`)}
    </div>
  </div>
</section>

<!-- ================= INDUSTRIES ================= -->
<section class="sec-sm bg-light">
  <div class="container">
    <div class="sec-head" data-reveal="up" style="margin-bottom:44px">
      <div class="sec-badge">Industries</div>
      <h2 data-split>Industries We <em>Serve</em></h2>
    </div>
    <div class="ind-chips" data-stagger=".06" data-reveal-type="up">
      ${s.industries.map(k => { const i = INDUSTRIES[k]; return html`
      <div class="ind-card" tabindex="0"><img src="${img(i.photo, 400)}" alt="" loading="lazy"><span class="i-ico">${icon(i.icon)}</span><h4>${esc(i.name)}</h4><p>${esc(i.desc)}</p></div>`; })}
    </div>
  </div>
</section>

<!-- ================= FAQ ================= -->
<section class="sec">
  <div class="container">
    <div class="faq-wrap">
      <div class="sec-head left" data-reveal="up">
        <div class="sec-badge">FAQs</div>
        <h2 data-split>Frequently Asked <em>Questions</em></h2>
        <p>Everything you need to know about our ${esc(meta.name)} services. Can't find an answer? Talk to our team.</p>
        <a href="#contact" class="btn btn-blue" style="margin-top:24px">Ask an Expert ${icon('message-circle')}</a>
      </div>
      <div data-stagger=".08" data-reveal-type="up">
        ${s.faqs.map((f, i) => html`
        <details class="faq"${i === 0 ? ' open' : ''}>
          <summary>${esc(f.q)}<span class="pm">${icon('plus')}</span></summary>
          <div class="ans-wrap"><div class="ans">${esc(f.a)}</div></div>
        </details>`)}
      </div>
    </div>
  </div>
</section>

<!-- ================= RELATED ================= -->
<section class="sec-sm bg-alt">
  <div class="container">
    <div class="sec-head-row">
      <div class="sec-head left" data-reveal="up">
        <div class="sec-badge">Explore More</div>
        <h2 data-split>Related <em>Services</em></h2>
      </div>
      <a href="index.html" class="btn btn-outline-blue" data-reveal="left">All Services ${icon('arrow-right')}</a>
    </div>
    <div class="related-grid" data-stagger=".1" data-reveal-type="up">
      ${s.related.map(slug => { const r = SERVICES.find(x => x.slug === slug); return html`
      <a class="rel-card" href="${slug}.html">
        <img src="${img(r.photo, 700)}" alt="" loading="lazy">
        <span class="r-ico">${icon(r.icon)}</span>
        <h3>${esc(r.name)}</h3><p>${esc(r.short)}</p>
        <span class="more">Learn more ${icon('arrow-right')}</span>
      </a>`; })}
    </div>
    <div class="cta-band" data-reveal="zoom" style="margin-top:80px">
      <div><h2>Ready to start your ${esc(meta.name)} project?</h2><p>Book a free discovery call. We'll map your goals, suggest the right approach and give you a clear estimate — no obligation.</p></div>
      <a href="#contact" class="btn btn-white" data-magnetic>Book a Free Call ${icon('arrow-right')}</a>
    </div>
  </div>
</section>
`;

  const jsonld = [
    { '@context': 'https://schema.org', '@type': 'Service', name: meta.name, serviceType: meta.name, description: s.hero.lead,
      provider: { '@type': 'Organization', name: 'RixlSoft', url: SITE_URL, email: 'hello@rixlsoft.com' }, areaServed: 'Worldwide',
      url: `${SITE_URL}services/${meta.slug}.html` },
    { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: s.faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
    { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE_URL}services/` },
      { '@type': 'ListItem', position: 3, name: meta.name, item: `${SITE_URL}services/${meta.slug}.html` } ] },
  ];

  return {
    title: `${meta.name} Services | RixlSoft`,
    description: plain(s.hero.lead).slice(0, 158),
    image: img(meta.photo, 1200),
    body, jsonld,
  };
}
