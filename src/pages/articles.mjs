import { esc, icon, logo, logoName, html } from '../lib.mjs';
import { SERVICES, INDUSTRIES, ARTICLE_PHOTOS, img, srcset } from '../data/site.mjs';
import CASE_STUDIES from '../data/case-studies.mjs';
import BLOG from '../data/blog.mjs';
import { SITE_URL } from '../layout.mjs';

const R = '../';
const svc = slug => SERVICES.find(s => s.slug === slug);
const photo = (slug, w) => img(ARTICLE_PHOTOS[slug], w);
// Short <title>s (Google shows ~60 chars) — full headline still used for H1 and social cards
const SEO_TITLES = {
  'ar-mobile-game-launch': 'AR Mobile Game: 200K Downloads in 30 Days | RixlSoft',
  'fintech-ai-financial-modeling': 'Generative AI Fintech Platform Case Study | RixlSoft',
  'ecommerce-scale-1m-users': 'E-Commerce Scaled to 1M Users, Zero Downtime | RixlSoft',
  'healthcare-document-ai': 'Healthcare Document AI Case Study | RixlSoft',
  'salesforce-logistics-crm': 'Salesforce CRM for Logistics Case Study | RixlSoft',
  'agentic-ai-enterprise-2026': 'Agentic AI in 2026: Enterprise Guide | RixlSoft',
  'legacy-modernization-ai-era': 'Legacy Modernization in the AI Era | RixlSoft',
  'ai-powered-crm-salesforce-hubspot': 'AI CRM: Agentforce vs Breeze vs Copilot | RixlSoft',
  'spatial-computing-enterprise-roi': 'Enterprise AR & VR: Where It Pays Off | RixlSoft',
  'finops-cloud-cost-optimization': 'FinOps Guide: Cut Cloud Costs 20–40% | RixlSoft',
};
const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const isoDate = d => { const [m, y] = d.split(' '); return `${y}-${String(MONTHS.indexOf(m) + 1).padStart(2, '0')}-01`; };
const PUBLISHER = { '@type': 'Organization', name: 'RixlSoft', url: SITE_URL, logo: { '@type': 'ImageObject', url: `${SITE_URL}assets/brand/icon-512.png` } };

const anchor = t => t.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

const pageHero = (crumbs, body, visual = '') => html`
<section class="page-hero${visual ? '' : ' page-hero-slim'}">
  <canvas class="hero-canvas" aria-hidden="true"></canvas>
  <div class="orb orb-1"></div><div class="orb orb-2"></div>
  <div class="grid-bg"></div>
  <div class="container">
    <div class="${visual ? 'page-hero-grid' : 'page-hero-solo'}">
      <div>
        <nav class="crumbs" aria-label="Breadcrumb" data-reveal="down">${crumbs.map(([t, h], i) => h ? html`<a href="${h}">${t}</a>${icon('chevron-right')}` : html`<span aria-current="page">${t}</span>`)}</nav>
        ${body}
      </div>
      ${visual}
    </div>
  </div>
</section>`;

const ctaBand = (title, text) => html`
<section class="sec-sm">
  <div class="container">
    <div class="cta-band" data-reveal="zoom">
      <div><h2>${title}</h2><p>${text}</p></div>
      <a href="#contact" class="btn btn-white" data-magnetic>Talk to an Expert ${icon('arrow-right')}</a>
    </div>
  </div>
</section>`;

const serviceCards = slugs => html`
<div class="related-grid" data-stagger=".1" data-reveal-type="up">
  ${slugs.map(slug => { const r = svc(slug); return html`
  <a class="rel-card" href="${R}services/${slug}.html">
    <img src="${img(r.photo, 700)}" alt="${esc(r.name)} services" loading="lazy">
    <span class="r-ico">${icon(r.icon)}</span>
    <h3>${esc(r.name)}</h3><p>${esc(r.short)}</p>
    <span class="more">Explore service ${icon('arrow-right')}</span>
  </a>`; })}
</div>`;

export const csCard = (c, root = R) => html`
<a class="cs-card" href="${root}case-studies/${c.slug}.html">
  <div class="cs-img"><img src="${photo(c.slug, 700)}" alt="${esc(c.title)}" loading="lazy"><span class="cs-chip">${icon(INDUSTRIES[c.industry].icon)} ${esc(INDUSTRIES[c.industry].name)}</span></div>
  <div class="cs-body">
    <div class="cs-meta">Case Study · ${esc(c.date)}</div>
    <h3>${esc(c.title)}</h3>
    <div class="cs-results">${c.results.slice(0, 2).map(r => html`<div><strong>${esc(r.value)}${esc(r.suffix || '')}</strong><span>${esc(r.label)}</span></div>`)}</div>
    <span class="more">Read case study ${icon('arrow-right')}</span>
  </div>
</a>`;

export const blogCard = (b, root = R) => html`
<a class="blog-card" href="${root}blog/${b.slug}.html">
  <div class="blog-img"><img src="${photo(b.slug, 700)}" alt="${esc(b.title)}" loading="lazy"><span class="cs-chip">${esc(b.category)}</span></div>
  <div class="blog-body">
    <div class="cs-meta">${esc(b.date)} · ${b.readMins} min read</div>
    <h3>${esc(b.title)}</h3>
    <p>${esc(b.excerpt)}</p>
    <span class="more">Read article ${icon('arrow-right')}</span>
  </div>
</a>`;

/* ---------------- Case studies index ---------------- */
export function caseStudiesIndex() {
  const [f, ...rest] = CASE_STUDIES;
  const body = html`
${pageHero([['Home', '../'], ['Case Studies']], html`
  <div class="hero-badge" data-reveal="down" style="--d:.1s"><span class="dot"></span>Case Studies</div>
  <h1 data-split>Real Projects. <em>Measurable Outcomes.</em></h1>
  <p class="lead" data-reveal="up" style="--d:.4s">How we help startups and enterprises ship AI products, games, platforms and CRM transformations — with the numbers to show for it.</p>`)}
<section class="sec bg-light">
  <div class="container">
    <a class="cs-feature" href="${f.slug}.html" data-reveal="up">
      <div class="cs-feature-img"><img src="${photo(f.slug, 1200)}" srcset="${srcset(ARTICLE_PHOTOS[f.slug])}" sizes="(max-width:900px) 94vw, 620px" alt="${esc(f.title)}" loading="lazy"></div>
      <div class="cs-feature-body">
        <div class="cs-meta"><span class="ins-type">Featured</span> ${esc(INDUSTRIES[f.industry].name)} · ${esc(f.date)}</div>
        <h2>${esc(f.title)}</h2>
        <p>${esc(f.summary)}</p>
        <div class="cs-results big">${f.results.slice(0, 3).map(r => html`<div><strong>${esc(r.value)}${esc(r.suffix || '')}</strong><span>${esc(r.label)}</span></div>`)}</div>
        <span class="btn btn-blue">Read case study ${icon('arrow-right')}</span>
      </div>
    </a>
    <div class="cs-grid" data-stagger=".08" data-reveal-type="up">${rest.map(c => csCard(c, R))}</div>
  </div>
</section>
${ctaBand('Want results like these?', 'Tell us about your project and we will share the case studies most relevant to your industry.')}`;
  return { breadcrumbs: [['Home', ''], ['Case Studies', 'case-studies/']], title: 'Case Studies | RixlSoft', description: 'RixlSoft case studies: AI platforms, mobile games, e-commerce scale, healthcare automation and Salesforce CRM transformations with measurable results.', image: photo(f.slug, 1200), body };
}

/* ---------------- Case study detail ---------------- */
export function caseStudyPage(c) {
  const ind = INDUSTRIES[c.industry];
  const others = CASE_STUDIES.filter(x => x.slug !== c.slug).slice(0, 3);
  const body = html`
${pageHero([['Home', '../'], ['Case Studies', 'index.html'], [esc(c.title)]], html`
  <div class="hero-badge" data-reveal="down" style="--d:.1s"><span class="dot"></span>Case Study · ${esc(ind.name)}</div>
  <h1 data-split>${esc(c.title)}</h1>
  <p class="lead" data-reveal="up" style="--d:.4s">${esc(c.summary)}</p>
  <div class="cs-facts" data-stagger=".06" data-reveal-type="up">
    <div><small>Client</small>${esc(c.client)}</div>
    <div><small>Region</small>${esc(c.region)}</div>
    <div><small>Duration</small>${esc(c.duration)}</div>
    <div><small>Team</small>${esc(c.team)}</div>
  </div>`, html`
  <div class="hero-visual" data-reveal="zoom" style="--d:.25s">
    <div class="ring"></div>
    <div class="hero-frame" data-tilt="5"><img src="${photo(c.slug, 1000)}" srcset="${srcset(ARTICLE_PHOTOS[c.slug])}" sizes="(max-width:1180px) 92vw, 560px" alt="${esc(c.title)}" fetchpriority="high"></div>
    <div class="hero-chip"><span class="c-ico">${icon(ind.icon)}</span><div><strong>${esc(ind.name)}</strong><small>${esc(c.date)}</small></div></div>
  </div>`)}

<section class="sec-sm bg-dark stats-sec">
  <div class="container">
    <div class="stats-grid" data-stagger=".1" data-reveal-type="up">
      ${c.results.map(r => html`<div class="stat-box"><div class="stat-num" data-count="${esc(r.value)}">${esc(r.value)}<em>${esc(r.suffix || '')}</em></div><div class="l">${esc(r.label)}</div></div>`)}
    </div>
  </div>
</section>

<section class="sec">
  <div class="container">
    <div class="article-layout">
      <div class="article-main">
        <div class="sec-badge" data-reveal="up">The Challenge</div>
        <h2 class="h2" data-reveal="up">What stood in the way</h2>
        <div class="prose" data-reveal="up">${c.challenge.map(p => html`<p>${esc(p)}</p>`)}</div>

        <div class="sec-badge" data-reveal="up" style="margin-top:36px">Our Solution</div>
        <h2 class="h2" data-reveal="up">How we solved it</h2>
        <div class="prose" data-reveal="up"><p>${esc(c.solution.intro)}</p></div>
        <div class="sol-grid" data-stagger=".08" data-reveal-type="up">
          ${c.solution.points.map((p, i) => html`<div class="sol-card spot"><span class="num">0${i + 1}</span><h3>${esc(p.title)}</h3><p>${esc(p.desc)}</p></div>`)}
        </div>
      </div>
      <aside class="article-side">
        <div class="side-card" data-reveal="left">
          <h4>Project snapshot</h4>
          <dl>
            <dt>Industry</dt><dd>${esc(ind.name)}</dd>
            <dt>Client</dt><dd>${esc(c.client)}</dd>
            <dt>Timeline</dt><dd>${esc(c.duration)}</dd>
            <dt>Team</dt><dd>${esc(c.team)}</dd>
          </dl>
          <h4>Services</h4>
          <div class="side-links">${c.services.map(s => html`<a href="${R}services/${s}.html">${icon(svc(s).icon)} ${esc(svc(s).name)}</a>`)}</div>
          <h4>Technology</h4>
          <div class="tech-chips">${c.tech.map(k => html`<span class="tech-chip">${logo(k, R, 16)}${esc(logoName(k))}</span>`)}</div>
          <a href="#contact" class="btn btn-blue" style="width:100%;justify-content:center;margin-top:20px">Discuss a similar project ${icon('arrow-right')}</a>
        </div>
      </aside>
    </div>
  </div>
</section>

<section class="sec bg-light">
  <div class="container">
    <div class="sec-head" data-reveal="up"><div class="sec-badge">Delivery</div><h2 data-split>How the Project <em>Unfolded</em></h2></div>
    <div class="flow f4">
      <div class="flow-line"><i></i></div>
      ${c.process.map((p, i) => html`
      <div class="flow-step" data-reveal="up" style="--d:${(i * .1).toFixed(1)}s">
        <div class="flow-ico">${icon(['search', 'drafting-compass', 'code-xml', 'rocket'][i] || 'check')}<span>0${i + 1}</span></div>
        <div class="cs-meta">${esc(p.phase)}</div>
        <h3>${esc(p.title)}</h3>
        <p>${esc(p.desc)}</p>
      </div>`)}
    </div>
  </div>
</section>

<section class="sec">
  <div class="container">
    <div class="split">
      <div>
        <div class="sec-badge" data-reveal="up">The Outcome</div>
        <h2 class="h2" data-reveal="up">Results that <em>mattered</em></h2>
        <div class="prose" data-reveal="up">${c.outcome.map(p => html`<p>${esc(p)}</p>`)}</div>
      </div>
      <div class="highlights" data-stagger=".08" data-reveal-type="left">
        ${c.highlights.map(h => html`<div class="hl">${icon('check')}<span>${esc(h)}</span></div>`)}
      </div>
    </div>
  </div>
</section>

<section class="sec-sm bg-alt">
  <div class="container">
    <div class="sec-head-row"><div class="sec-head left" data-reveal="up"><div class="sec-badge">Services Behind This Project</div><h2 data-split>Explore the <em>Capabilities</em></h2></div>
      <a href="${R}services/index.html" class="btn btn-outline-blue" data-reveal="left">All Services ${icon('arrow-right')}</a></div>
    ${serviceCards(c.services.slice(0, 3))}
  </div>
</section>

<section class="sec-sm">
  <div class="container">
    <div class="sec-head-row"><div class="sec-head left" data-reveal="up"><div class="sec-badge">More Case Studies</div><h2 data-split>More <em>Success Stories</em></h2></div>
      <a href="index.html" class="btn btn-outline-blue" data-reveal="left">All Case Studies ${icon('arrow-right')}</a></div>
    <div class="cs-grid" data-stagger=".08" data-reveal-type="up">${others.map(o => csCard(o, R))}</div>
  </div>
</section>
${ctaBand('Have a similar challenge?', 'Book a free discovery call. We will map your goals and show you how we would approach it — no obligation.')}`;
  return {
    title: c.title, metaTitle: SEO_TITLES[c.slug], ogType: 'article', published: isoDate(c.date), description: c.summary.slice(0, 158), image: photo(c.slug, 1200), body,
    breadcrumbs: [['Home', ''], ['Case Studies', 'case-studies/'], [c.title, `case-studies/${c.slug}.html`]],
    jsonld: [{ '@context': 'https://schema.org', '@type': 'Article', headline: c.title, description: c.summary, image: photo(c.slug, 1200), datePublished: isoDate(c.date), dateModified: isoDate(c.date), author: { '@type': 'Organization', name: 'RixlSoft', url: SITE_URL }, publisher: PUBLISHER, mainEntityOfPage: `${SITE_URL}case-studies/${c.slug}.html`, about: c.services.map(x => svc(x).name) }],
  };
}

/* ---------------- Blog index ---------------- */
export function blogIndex() {
  const [f, ...rest] = BLOG;
  const body = html`
${pageHero([['Home', '../'], ['Blog']], html`
  <div class="hero-badge" data-reveal="down" style="--d:.1s"><span class="dot"></span>RixlSoft Blog</div>
  <h1 data-split>Ideas on AI, Cloud, CRM &amp; <em>What Comes Next</em></h1>
  <p class="lead" data-reveal="up" style="--d:.4s">Practical guides from our engineers on agentic AI, modernization, spatial computing, CRM and cloud economics.</p>`)}
<section class="sec bg-light">
  <div class="container">
    <a class="cs-feature" href="${f.slug}.html" data-reveal="up">
      <div class="cs-feature-img"><img src="${photo(f.slug, 1200)}" srcset="${srcset(ARTICLE_PHOTOS[f.slug])}" sizes="(max-width:900px) 94vw, 620px" alt="${esc(f.title)}" loading="lazy"></div>
      <div class="cs-feature-body">
        <div class="cs-meta"><span class="ins-type">Latest</span> ${esc(f.category)} · ${esc(f.date)} · ${f.readMins} min read</div>
        <h2>${esc(f.title)}</h2>
        <p>${esc(f.excerpt)}</p>
        <span class="btn btn-blue">Read article ${icon('arrow-right')}</span>
      </div>
    </a>
    <div class="cs-grid" data-stagger=".08" data-reveal-type="up">${rest.map(b => blogCard(b, R))}</div>
  </div>
</section>
${ctaBand('Turn these ideas into a plan', 'Our architects can review your roadmap and suggest where AI, cloud or CRM will pay back fastest.')}`;
  return { breadcrumbs: [['Home', ''], ['Blog', 'blog/']], title: 'Blog | RixlSoft', description: 'RixlSoft blog: practical guides on agentic AI, legacy modernization, AI-powered CRM, spatial computing and cloud cost optimization.', image: photo(f.slug, 1200), body };
}

/* ---------------- Blog post ---------------- */
export function blogPage(b) {
  const others = BLOG.filter(x => x.slug !== b.slug).slice(0, 3);
  const body = html`
${pageHero([['Home', '../'], ['Blog', 'index.html'], [esc(b.category)]], html`
  <div class="hero-badge" data-reveal="down" style="--d:.1s"><span class="dot"></span>${esc(b.category)}</div>
  <h1 data-split>${esc(b.title)}</h1>
  <p class="lead" data-reveal="up" style="--d:.4s">${esc(b.excerpt)}</p>
  <div class="post-meta" data-reveal="up" style="--d:.5s">${icon('pen-tool')} RixlSoft Engineering <span>·</span> ${icon('calendar')} ${esc(b.date)} <span>·</span> ${icon('clock')} ${b.readMins} min read</div>`)}

<section class="sec post-sec">
  <div class="container">
    <div class="post-cover" data-reveal="clip"><img src="${photo(b.slug, 1400)}" srcset="${srcset(ARTICLE_PHOTOS[b.slug], [640, 1000, 1400, 1800])}" sizes="(max-width:1240px) 94vw, 1176px" alt="${esc(b.title)}" fetchpriority="high"></div>
    <div class="article-layout">
      <article class="article-main post">
        ${b.intro.map(p => html`<p class="post-lead">${esc(p)}</p>`)}
        ${b.sections.map(s => html`
        <h2 id="${anchor(s.heading)}">${esc(s.heading)}</h2>
        ${s.paras.map(p => html`<p>${esc(p)}</p>`)}
        ${s.bullets ? html`<ul>${s.bullets.map(x => html`<li>${esc(x)}</li>`)}</ul>` : ''}`)}
        <div class="takeaways">
          <h3>${icon('lightbulb')} Key takeaways</h3>
          <ul>${b.takeaways.map(t => html`<li>${icon('check')}<span>${esc(t)}</span></li>`)}</ul>
        </div>
      </article>
      <aside class="article-side">
        <div class="side-card">
          <h4>In this article</h4>
          <nav class="toc">${b.sections.map(s => html`<a href="#${anchor(s.heading)}">${esc(s.heading)}</a>`)}</nav>
        </div>
        <div class="side-card dark">
          <h4>Need help with this?</h4>
          <p>Talk to a RixlSoft architect about applying these ideas to your business.</p>
          <a href="#contact" class="btn btn-blue" style="width:100%;justify-content:center">Talk to an Expert ${icon('arrow-right')}</a>
          <div class="side-links">${b.services.map(s => html`<a href="${R}services/${s}.html">${icon(svc(s).icon)} ${esc(svc(s).name)}</a>`)}</div>
        </div>
      </aside>
    </div>
  </div>
</section>

<section class="sec-sm bg-alt">
  <div class="container">
    <div class="sec-head-row"><div class="sec-head left" data-reveal="up"><div class="sec-badge">Related Services</div><h2 data-split>Put It Into <em>Practice</em></h2></div>
      <a href="${R}services/index.html" class="btn btn-outline-blue" data-reveal="left">All Services ${icon('arrow-right')}</a></div>
    ${serviceCards(b.services.slice(0, 3))}
  </div>
</section>

<section class="sec-sm">
  <div class="container">
    <div class="sec-head-row"><div class="sec-head left" data-reveal="up"><div class="sec-badge">Keep Reading</div><h2 data-split>More from the <em>Blog</em></h2></div>
      <a href="index.html" class="btn btn-outline-blue" data-reveal="left">All Articles ${icon('arrow-right')}</a></div>
    <div class="cs-grid" data-stagger=".08" data-reveal-type="up">${others.map(o => blogCard(o, R))}</div>
  </div>
</section>
${ctaBand('Ready to move from reading to building?', 'Book a free consultation and get a practical plan for your next initiative.')}`;
  return {
    title: b.title, metaTitle: SEO_TITLES[b.slug], ogType: 'article', published: isoDate(b.date), description: b.excerpt.slice(0, 158), image: photo(b.slug, 1200), body,
    breadcrumbs: [['Home', ''], ['Blog', 'blog/'], [b.title, `blog/${b.slug}.html`]],
    jsonld: [{ '@context': 'https://schema.org', '@type': 'BlogPosting', headline: b.title, description: b.excerpt, image: photo(b.slug, 1200), datePublished: isoDate(b.date), dateModified: isoDate(b.date), articleSection: b.category, wordCount: [...b.intro, ...b.sections.flatMap(x => [...x.paras, ...(x.bullets || [])])].join(' ').split(/\s+/).length, author: { '@type': 'Organization', name: 'RixlSoft Engineering', url: SITE_URL }, publisher: PUBLISHER, mainEntityOfPage: `${SITE_URL}blog/${b.slug}.html` }],
  };
}
