import { esc, rich, icon, logo, logoName, html } from '../lib.mjs';
import { SERVICES, INDUSTRIES, HOME_INDUSTRIES, PHOTOS, TECH_STACK, img, srcset } from '../data/site.mjs';
import { svcHref } from '../layout.mjs';
import { whySection, testimonialsSection } from './company.mjs';
import { csCard, blogCard } from './articles.mjs';
import CASE_STUDIES from '../data/case-studies.mjs';
import BLOG from '../data/blog.mjs';
import { ARTICLE_PHOTOS, FORM_INBOX } from '../data/site.mjs';
import { SITE_URL } from '../layout.mjs';

const R = ''; // root prefix for the home page

// Full-screen hero slides. The first one carries the page <h1>.
const SLIDES = [
  { tag: 'Built for the AI era', title: 'AI-native engineering. <em>Products that scale</em>, shipped fast.', photo: PHOTOS.hero,
    text: 'RixlSoft designs, builds and deploys AI-powered software, immersive games and scalable platforms — for startups, enterprises and everything in between.' },
  { tag: 'Generative AI & Machine Learning', title: 'Generative AI that works <em>in production</em>, not just demos.', photo: '1677442136019-21780ecad995', link: 'generative-ai',
    text: 'LLM copilots, RAG knowledge assistants and autonomous agents grounded in your own data — with evaluation, guardrails and cost control built in.' },
  { tag: 'Game Development', title: "Games players <em>can't put down</em>, on every platform.", photo: '1542751371-adc38448a05e', link: 'game-development',
    text: 'Full-cycle mobile, PC and console game development in Unity and Unreal — from concept art and prototypes to multiplayer and live-ops.' },
  { tag: 'AR / VR / Mixed Reality', title: 'Immersive AR &amp; VR for <em>training, retail and play</em>.', photo: '1552871419-81ba9b1aa9c9', link: 'ar-vr-xr',
    text: 'Mixed-reality apps for Meta Quest, Apple Vision Pro and the browser — interactive training, product visualization and virtual showrooms.' },
  { tag: 'Web & Mobile Apps', title: 'Web &amp; mobile apps <em>users love</em>, built to scale.', photo: '1512941937669-90a1b58e7e9c', link: 'app-development',
    text: 'High-performance web platforms and native-quality iOS and Android apps — designed for conversion and engineered to scale.' },
  { tag: 'Salesforce & CRM', title: 'Salesforce &amp; CRM that <em>your sales team actually uses</em>.', photo: '1517048676732-d65bc937f952', link: 'salesforce-consulting',
    text: 'Salesforce, HubSpot and Dynamics 365 implementations, custom development and integrations that give every team one view of the customer.' },
  { tag: 'Cloud & DevOps', title: 'Cloud platforms engineered for <em>99.9% uptime</em>.', photo: '1451187580459-43490279c0fa', link: 'cloud-applications',
    text: 'Cloud-native builds, zero-downtime migrations and automated CI/CD pipelines across AWS, Google Cloud and Azure.' },
];
const POWERED = ['openai', 'claude', 'aws', 'googlecloud', 'unity', 'flutter'];

// Image showcase (bento grid). `area` maps to grid-template-areas in CSS.
const SHOWCASE = [
  { area: 'g', slug: 'game-development', title: 'Game Development', tag: 'Unity · Unreal · Mobile', photo: '1583162520080-73d4a743a776',
    text: 'Hyper-casual to core titles for mobile, PC and console — art, gameplay, multiplayer and live-ops under one roof.' },
  { area: 'a', slug: 'generative-ai', title: 'Generative AI & ML', tag: 'LLMs · RAG · Agents', photo: '1485827404703-89b55fcc595e',
    text: 'Copilots, knowledge assistants and AI agents that automate real work, grounded in your data.' },
  { area: 'x', slug: 'ar-vr-xr', title: 'AR / VR / XR', tag: 'Meta Quest · WebXR', photo: '1552871419-81ba9b1aa9c9',
    text: 'Immersive training, showrooms and experiences.' },
  { area: 'b', slug: 'digital-transformation', title: 'Digital Transformation', tag: 'Modernize · Automate', photo: '1552664730-d307ca884978',
    text: 'Modernize legacy systems and processes, phase by phase.' },
  { area: 'w', slug: 'web-development', title: 'Web & App Development', tag: 'React · Next.js · Flutter', photo: '1619410283995-43d9134e7656',
    text: 'Fast, secure web platforms and mobile apps built to convert and to scale.' },
  { area: 'c', slug: 'cloud-applications', title: 'Cloud & DevOps', tag: 'AWS · GCP · Azure', photo: '1644088379091-d574269d422f',
    text: 'Cloud-native builds and automated delivery.' },
  { area: 'd', slug: 'staff-augmentation', title: 'Staff Augmentation', tag: 'Hire engineers', photo: '1606857521015-7f9fcf423740',
    text: 'Senior engineers who join your team in days.' },
];

export const PROCESS = [
  { icon: 'search', title: 'Discover', desc: 'Goals, pain points and success metrics — we find where technology creates the most leverage.', deliv: 'Problem brief · Scope' },
  { icon: 'drafting-compass', title: 'Design & Validate', desc: 'Architecture, user flows and clickable prototypes, validated before any code is written.', deliv: 'Tech spec · Prototype' },
  { icon: 'code-xml', title: 'Build', desc: 'Agile sprints with weekly demos and production-grade, tested code from day one.', deliv: 'Weekly builds · Staging' },
  { icon: 'rocket', title: 'Launch', desc: 'Pipelines, security hardening and a rehearsed go-live — never a scramble.', deliv: 'Production deploy · QA report' },
  { icon: 'refresh-cw', title: 'Evolve', desc: 'Monitoring, new features and model tuning as your business grows.', deliv: 'Retainer · Roadmap reviews' },
];

export function home() {
  const featured = new Set(SHOWCASE.map(s => s.slug));
  const body = html`
<!-- ================= HERO SLIDER ================= -->
<section class="hs" id="home" data-slider aria-roledescription="carousel" aria-label="RixlSoft highlights">
  ${SLIDES.map((s, i) => html`
  <div class="hs-slide${i === 0 ? ' on' : ''}" role="group" aria-roledescription="slide" aria-label="${i + 1} of ${SLIDES.length}"${i ? ' aria-hidden="true"' : ''}>
    <img class="hs-bg" src="${img(s.photo, 1920)}" srcset="${srcset(s.photo, [800, 1280, 1920])}" sizes="100vw" alt="${esc(s.tag)} by RixlSoft"${i === 0 ? ' fetchpriority="high"' : ' loading="lazy"'}>
    <div class="container hs-content">
      <div class="hs-eyebrow anim" style="--k:0">${esc(s.tag)}</div>
      ${i === 0 ? html`<h1 class="hs-title anim" style="--k:1">${rich(s.title)}</h1>` : html`<h2 class="hs-title anim" style="--k:1">${rich(s.title)}</h2>`}
      <p class="hs-text anim" style="--k:2">${esc(s.text)}</p>
      <div class="hero-actions anim" style="--k:3">
        ${s.link
          ? html`<a href="${svcHref(R, s.link)}" class="btn btn-blue">Explore ${esc(SERVICES.find(x => x.slug === s.link).name)} ${icon('arrow-right')}</a><a href="#contact" class="btn btn-outline-dark">Talk to an Expert</a>`
          : html`<a href="#contact" class="btn btn-blue">Talk to an Expert ${icon('arrow-right')}</a><a href="services/index.html" class="btn btn-outline-dark">Explore Services</a>`}
      </div>
    </div>
  </div>`)}
  <canvas class="hero-canvas" aria-hidden="true"></canvas>
  <div class="hs-bottom">
    <div class="container">
      <div>
        <div class="hs-label">Powered by</div>
        <div class="hs-logos">${POWERED.map(k => html`<span>${logo(k, R, 22)}${esc(logoName(k))}</span>`)}</div>
      </div>
      <div class="hs-ctrl">
        <button class="hs-arrow" data-dir="-1" aria-label="Previous slide">${icon('arrow-left')}</button>
        <button class="hs-arrow" data-dir="1" aria-label="Next slide">${icon('arrow-right')}</button>
      </div>
    </div>
  </div>
</section>

<!-- ================= SHOWCASE ================= -->
<section class="sec peek" id="services">
  <div class="container">
    <div class="sec-head-row">
      <div class="sec-head left">
        <div class="sec-badge">What We Do</div>
        <h2>Engineering the Technologies <em>That Matter Most</em></h2>
        <p>Specialist services across five practices — from AI and games to cloud, Salesforce &amp; CRM, transformation and dedicated teams.</p>
      </div>
      <a href="services/index.html" class="btn btn-outline-blue" data-reveal="left">View All Services ${icon('arrow-right')}</a>
    </div>
    <div class="bento" data-stagger=".07" data-reveal-type="zoom">
      ${SHOWCASE.map(t => { const m = SERVICES.find(s => s.slug === t.slug); return html`
      <a class="tile tile-${t.area}" href="${svcHref(R, t.slug)}">
        <img src="${img(t.photo, t.area === 'g' ? 1200 : 800)}" alt="${esc(t.title)}" loading="lazy">
        <span class="tile-tag">${icon(m.icon)} ${esc(t.tag)}</span>
        <span class="tile-body"><h3>${esc(t.title)}</h3><p>${esc(t.text)}</p></span>
        <span class="tile-go">${icon('arrow-up-right')}</span>
      </a>`; })}
    </div>
    <div class="svc-chips" data-reveal="up">
      <span class="svc-chips-label">Also explore</span>
      ${SERVICES.filter(s => !featured.has(s.slug)).map(s => html`<a class="svc-chip" href="${svcHref(R, s.slug)}">${icon(s.icon)} ${esc(s.name)}</a>`)}
    </div>
  </div>
</section>

<!-- ================= STATS + RECOGNITION ================= -->
<section class="sec-sm bg-dark stats-sec">
  <div class="container">
    <div class="stats-grid" data-stagger=".1" data-reveal-type="up">
      <div class="stat-box"><span class="s-ico">${icon('rocket')}</span><div class="stat-num" data-count="50">50<em>+</em></div><div class="l">Projects Delivered</div></div>
      <div class="stat-box"><span class="s-ico">${icon('earth')}</span><div class="stat-num" data-count="15">15<em>+</em></div><div class="l">Countries Served</div></div>
      <div class="stat-box"><span class="s-ico">${icon('handshake')}</span><div class="stat-num" data-count="40">40<em>+</em></div><div class="l">Active Clients</div></div>
      <div class="stat-box"><span class="s-ico">${icon('smile')}</span><div class="stat-num" data-count="98">98<em>%</em></div><div class="l">Client Satisfaction</div></div>
    </div>
  </div>
</section>

<!-- ================= INDUSTRIES ================= -->
<section class="sec" id="industries">
  <div class="container">
    <div class="sec-head-row">
      <div class="sec-head left" data-reveal="up">
        <div class="sec-badge">Industries</div>
        <h2 data-split>Deep Expertise Across <em>Industries</em></h2>
        <p>Domain knowledge that turns software into a competitive advantage.</p>
      </div>
      <a href="#contact" class="btn btn-outline-blue" data-reveal="left">Discuss Your Industry ${icon('arrow-right')}</a>
    </div>
    <div class="ind-grid" data-stagger=".05" data-reveal-type="up">
      ${HOME_INDUSTRIES.map(k => { const i = INDUSTRIES[k]; return html`
      <div class="ind-card" tabindex="0">
        <img src="${img(i.photo, 500)}" alt="${esc(i.name)} software solutions" loading="lazy">
        <span class="i-ico">${icon(i.icon)}</span>
        <h4>${esc(i.name)}</h4><p>${esc(i.desc)}</p>
      </div>`; })}
    </div>
  </div>
</section>

<!-- ================= WHY RIXLSOFT ================= -->
${whySection('')}

<!-- ================= PROCESS (compact) ================= -->
<section class="sec" id="process">
  <div class="container">
    <div class="sec-head-row">
      <div class="sec-head left" data-reveal="up">
        <div class="sec-badge">How We Deliver</div>
        <h2 data-split>From Concept to <em>Completion</em></h2>
        <p>A discovery-first process that removes the guesswork from software delivery.</p>
      </div>
      <a href="#contact" class="btn btn-outline-blue" data-reveal="left">Start with Discovery ${icon('arrow-right')}</a>
    </div>
    <div class="flow">
      <div class="flow-line"><i></i></div>
      ${PROCESS.map((p, i) => html`
      <div class="flow-step" style="--i:${i}" data-reveal="up">
        <div class="flow-ico">${icon(p.icon)}<span>0${i + 1}</span></div>
        <h3>${esc(p.title)}</h3>
        <p>${esc(p.desc)}</p>
        <div class="flow-deliv">${icon('package')} ${esc(p.deliv)}</div>
      </div>`)}
    </div>
  </div>
</section>

<!-- ================= TECH STACK ================= -->
<section class="sec bg-light" id="technology">
  <div class="container">
    <div class="sec-head" data-reveal="up">
      <div class="sec-badge">Technology</div>
      <h2 data-split>Best-in-Class <em>Technology Stack</em></h2>
      <p>Production-grade tools chosen for performance, not trends.</p>
    </div>
    <div data-tabs>
      <div class="pill-tabs" role="tablist" aria-label="Technology categories" data-reveal="up">
        ${TECH_STACK.map((t, i) => html`<button class="pill-tab" role="tab" id="tt-${i}" aria-controls="tp-${i}" aria-selected="${i === 0}" tabindex="${i === 0 ? 0 : -1}">${esc(t.group)}</button>`)}
      </div>
      ${TECH_STACK.map((t, i) => html`
      <div class="logo-grid${i === 0 ? ' active' : ''}" role="tabpanel" id="tp-${i}" aria-labelledby="tt-${i}"${i === 0 ? '' : ' hidden'}>
        ${t.items.map((k, j) => html`<div class="logo-tile" style="--i:${j}">${logo(k, R, 40)}<span>${esc(logoName(k))}</span></div>`)}
      </div>`)}
    </div>
  </div>
</section>

<!-- ================= CASE STUDIES ================= -->
<section class="sec" id="insights">
  <div class="container">
    <div class="sec-head-row">
      <div class="sec-head left" data-reveal="up">
        <div class="sec-badge">Case Studies</div>
        <h2 data-split>Real Projects. <em>Measurable Outcomes.</em></h2>
        <p>How we help startups and enterprises ship AI products, games, platforms and CRM transformations.</p>
      </div>
      <a href="case-studies/index.html" class="btn btn-outline-blue" data-reveal="left">All Case Studies ${icon('arrow-right')}</a>
    </div>
    <div class="ins">
      ${(() => { const f = CASE_STUDIES[0]; return html`
      <a class="ins-feature" href="case-studies/${f.slug}.html" data-reveal="clip">
        <img src="${img(ARTICLE_PHOTOS[f.slug], 1000)}" alt="${esc(f.title)}" loading="lazy">
        <div class="ins-feature-body">
          <div class="ins-meta"><span class="ins-type">Case Study</span>${esc(f.date)}</div>
          <h3>${esc(f.title)}</h3>
          <p>${esc(f.summary)}</p>
          <div class="ins-result">${icon('trending-up')} ${esc(f.results[0].value + (f.results[0].suffix || ''))} ${esc(f.results[0].label.toLowerCase())}</div>
        </div>
      </a>`; })()}
      <div class="ins-list" data-stagger=".08" data-reveal-type="left">
        ${CASE_STUDIES.slice(1).map(c => html`
        <a class="ins-item" href="case-studies/${c.slug}.html">
          <div class="ins-thumb"><img src="${img(ARTICLE_PHOTOS[c.slug], 300)}" alt="${esc(c.title)}" loading="lazy"></div>
          <div>
            <div class="ins-meta"><span class="ins-type">${esc(INDUSTRIES[c.industry].name)}</span>${esc(c.date)}</div>
            <h4>${esc(c.title)}</h4>
            <div class="ins-result">${icon('trending-up')} ${esc(c.results[0].value + (c.results[0].suffix || ''))} ${esc(c.results[0].label.toLowerCase())}</div>
          </div>
        </a>`)}
      </div>
    </div>
  </div>
</section>

<!-- ================= CLIENT VOICES ================= -->
${testimonialsSection()}

<!-- ================= BLOG ================= -->
<section class="sec bg-light" id="blog">
  <div class="container">
    <div class="sec-head-row">
      <div class="sec-head left" data-reveal="up">
        <div class="sec-badge">From the Blog</div>
        <h2 data-split>Insights on AI, Cloud &amp; <em>What Comes Next</em></h2>
      </div>
      <a href="blog/index.html" class="btn btn-outline-blue" data-reveal="left">All Articles ${icon('arrow-right')}</a>
    </div>
    <div class="cs-grid" data-stagger=".08" data-reveal-type="up">${BLOG.slice(0, 3).map(b => blogCard(b, ''))}</div>
  </div>
</section>

${contactSection()}
`;
  return body;
}

export function contactSection() {
  return html`
<!-- ================= CONTACT ================= -->
<section class="cta-sec bg-dark" id="contact" style="position:relative">
  <div class="container">
    <div class="cta-inner">
      <div class="cta-left">
        <div class="sec-badge" data-reveal="up">Get In Touch</div>
        <h2 data-split>Let's Build Something <em>Extraordinary</em></h2>
        <p data-reveal="up">Tell us about your project — whether it's an AI system, a game, an AR experience, or a complete platform. We'll schedule a free discovery call and show you exactly what's possible.</p>
        <div class="cta-info-list" data-stagger=".08" data-reveal-type="left">
          <div class="cta-info"><span class="ci-icon">${icon('send')}</span><span>Send the form — it comes straight to our team</span></div>
          <div class="cta-info"><span class="ci-icon">${icon('earth')}</span><span>Remote-first · Global availability</span></div>
          <div class="cta-info"><span class="ci-icon">${icon('clock')}</span><span>Response within 24 hours</span></div>
          <div class="cta-info"><span class="ci-icon">${icon('messages-square')}</span><span>Free initial consultation</span></div>
        </div>
      </div>
      <form class="cta-form" id="contactForm" method="POST" enctype="multipart/form-data" novalidate data-inbox="${FORM_INBOX}" data-reveal="right">
        <input type="hidden" name="_subject" value="New project enquiry — RixlSoft website">
        <input type="hidden" name="_template" value="table">
        <input type="hidden" name="_captcha" value="false">
        <input type="hidden" name="_next" value="${SITE_URL}thanks.html?type=contact">
        <input type="text" name="_honey" class="hp" tabindex="-1" autocomplete="off" aria-hidden="true">
        <div class="form-row">
          <div class="form-group"><label for="f-name">Full Name *</label><input maxlength="80" id="f-name" name="Name" type="text" class="form-control" placeholder="Your full name" required autocomplete="name"></div>
          <div class="form-group"><label for="f-email">Email *</label><input maxlength="120" id="f-email" name="email" type="email" class="form-control" placeholder="work@company.com" required autocomplete="email"></div>
        </div>
        <div class="form-row">
          <div class="form-group"><label for="f-phone">Phone Number</label><input maxlength="30" id="f-phone" name="Phone" type="tel" class="form-control" placeholder="+1 234 567 8900" autocomplete="tel"></div>
          <div class="form-group"><label for="f-company">Company Name *</label><input maxlength="120" id="f-company" name="Company" type="text" class="form-control" placeholder="Your company" required autocomplete="organization"></div>
        </div>
        <div class="form-row">
          <div class="form-group"><label for="f-url">Company URL</label><input maxlength="200" id="f-url" name="Website" type="url" class="form-control" placeholder="https://yourcompany.com"></div>
          <div class="form-group"><label for="f-region">Region *</label>
            <select id="f-region" name="Region" class="form-control" required>
              <option value="">Select Region</option>
              <option>Middle East &amp; North Africa</option><option>USA / Canada</option><option>United Kingdom</option>
              <option>Pakistan</option><option>Australia &amp; NZ</option><option>Europe</option><option>Rest of World</option>
            </select>
          </div>
        </div>
        <div class="form-row">
          <div class="form-group full"><label for="f-service">Services You're Looking For *</label>
            <select id="f-service" name="Service" class="form-control" required>
              <option value="">Select a service</option>
              ${SERVICES.map(s => html`<option>${esc(s.name)}</option>`)}
              <option>Other</option>
            </select>
          </div>
        </div>
        <div class="form-row">
          <div class="form-group full"><label for="f-details">Project Details *</label><textarea maxlength="3000" id="f-details" name="Details" class="form-control" placeholder="Tell us about your project goals, timeline, and any specific requirements..." required></textarea></div>
        </div>
        <div class="form-row">
          <div class="form-group full"><label for="f-file">Attach a brief or RFP <span class="opt">(optional · PDF, DOC, PPT · max 5 MB)</span></label>
            <label class="file-drop"><input id="f-file" type="file" name="attachment" accept=".pdf,.doc,.docx,.ppt,.pptx,.txt"><span class="fd-ico">${icon('paperclip')}</span><span class="fd-text">Choose a file or drag it here</span></label>
          </div>
        </div>
        <button type="submit" class="btn btn-blue form-submit">Send Message ${icon('send')}</button>
        <p class="form-note">We'll reply within 24 hours. Your details are never shared.</p>
      </form>
    </div>
  </div>
</section>`;
}
