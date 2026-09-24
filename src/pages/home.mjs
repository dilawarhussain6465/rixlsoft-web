import { esc, rich, icon, logo, logoName, html } from '../lib.mjs';
import { SERVICES, INDUSTRIES, HOME_INDUSTRIES, PHOTOS, TECH_STACK, img } from '../data/site.mjs';
import { svcHref } from '../layout.mjs';

const R = ''; // root prefix for the home page

const MARQUEE = ['react', 'nextjs', 'openai', 'claude', 'unity', 'unrealengine', 'flutter', 'swift', 'aws', 'googlecloud', 'azure', 'kubernetes', 'docker', 'python', 'nodejs', 'figma', 'oculus', 'shopify', 'stripe', 'ethereum'];

// Full-screen hero slides. The first one carries the page <h1>.
const SLIDES = [
  { tag: 'AI-First Product Engineering', title: 'Build Intelligent <em>Systems</em> That Scale Globally', photo: PHOTOS.hero, logos: ['openai', 'unity', 'aws', 'flutter'],
    text: 'RixlSoft designs, builds and deploys AI-powered software, immersive games and scalable platforms — for startups, enterprises and everything in between.' },
  { tag: 'Generative AI & Machine Learning', title: 'AI That Works <em>in Production</em>, Not Just in Demos', photo: '1677442136019-21780ecad995', link: 'generative-ai', logos: ['openai', 'claude', 'gemini', 'langchain'],
    text: 'LLM copilots, RAG knowledge assistants and autonomous agents grounded in your own data — with evaluation, guardrails and cost control built in.' },
  { tag: 'Game Development', title: "Games Players <em>Can't Put Down</em>", photo: '1542751371-adc38448a05e', link: 'game-development', logos: ['unity', 'unrealengine', 'blender', 'godot'],
    text: 'Full-cycle mobile, PC and console game development in Unity and Unreal — from concept art and prototypes to multiplayer and live-ops.' },
  { tag: 'AR / VR / Mixed Reality', title: 'Immersive Worlds for <em>Training, Retail &amp; Play</em>', photo: '1593508512255-86ab42a8e620', link: 'ar-vr-xr', logos: ['oculus', 'unity', 'webgl', 'threejs'],
    text: 'Mixed-reality apps for Meta Quest, Apple Vision Pro and the browser — interactive training, product visualization and virtual showrooms.' },
  { tag: 'Web & Mobile Apps', title: 'Web &amp; Mobile Apps <em>Users Love</em>', photo: '1512941937669-90a1b58e7e9c', link: 'app-development', logos: ['react', 'nextjs', 'flutter', 'swift'],
    text: 'High-performance web platforms and native-quality iOS and Android apps — designed for conversion and engineered to scale.' },
  { tag: 'Cloud & DevOps', title: 'Cloud Platforms Built for <em>99.9% Uptime</em>', photo: '1451187580459-43490279c0fa', link: 'cloud-applications', logos: ['aws', 'googlecloud', 'azure', 'kubernetes'],
    text: 'Cloud-native builds, zero-downtime migrations and automated CI/CD pipelines across AWS, Google Cloud and Azure.' },
];
const SLIDE_LABELS = ['RixlSoft', 'AI & ML', 'Game Dev', 'AR / VR', 'Web & Mobile', 'Cloud'];

// Image showcase (bento grid). `area` maps to grid-template-areas in CSS.
const SHOWCASE = [
  { area: 'g', slug: 'game-development', title: 'Game Development', tag: 'Unity · Unreal · Mobile', photo: '1511512578047-dfb367046420',
    text: 'Hyper-casual to core titles for mobile, PC and console — art, gameplay, multiplayer and live-ops under one roof.' },
  { area: 'a', slug: 'generative-ai', title: 'Generative AI & ML', tag: 'LLMs · RAG · Agents', photo: '1485827404703-89b55fcc595e',
    text: 'Copilots, knowledge assistants and AI agents that automate real work, grounded in your data.' },
  { area: 'x', slug: 'ar-vr-xr', title: 'AR / VR / XR', tag: 'Meta Quest · WebXR', photo: '1535223289827-42f1e9919769',
    text: 'Immersive training, showrooms and experiences.' },
  { area: 'b', slug: 'blockchain-web3', title: 'Blockchain & Web3', tag: 'DeFi · NFTs', photo: '1639762681485-074b7f938ba0',
    text: 'Audited smart contracts and dApps.' },
  { area: 'w', slug: 'web-development', title: 'Web & App Development', tag: 'React · Next.js · Flutter', photo: '1460925895917-afdab827c52f',
    text: 'Fast, secure web platforms and mobile apps built to convert and to scale.' },
  { area: 'c', slug: 'cloud-applications', title: 'Cloud & DevOps', tag: 'AWS · GCP · Azure', photo: '1558494949-ef010cbdcc31',
    text: 'Cloud-native builds and automated delivery.' },
  { area: 'd', slug: 'data-analytics', title: 'Data Analytics', tag: 'BI · Pipelines', photo: '1551288049-bebda4e38f71',
    text: 'Dashboards and pipelines that drive decisions.' },
];

const PROCESS = [
  { icon: 'search', title: 'Discover', desc: 'Goals, pain points and success metrics — we find where technology creates the most leverage.', deliv: 'Problem brief · Scope' },
  { icon: 'drafting-compass', title: 'Design & Validate', desc: 'Architecture, user flows and clickable prototypes, validated before any code is written.', deliv: 'Tech spec · Prototype' },
  { icon: 'code-xml', title: 'Build', desc: 'Agile sprints with weekly demos and production-grade, tested code from day one.', deliv: 'Weekly builds · Staging' },
  { icon: 'rocket', title: 'Launch', desc: 'Pipelines, security hardening and a rehearsed go-live — never a scramble.', deliv: 'Production deploy · QA report' },
  { icon: 'refresh-cw', title: 'Evolve', desc: 'Monitoring, new features and model tuning as your business grows.', deliv: 'Retainer · Roadmap reviews' },
];

const INSIGHTS = [
  { type: 'Case Study', date: 'March 2025', photo: '1542751371-adc38448a05e', result: '200K downloads in 30 days',
    title: 'Mobile Gaming Studio Launches AR Title to 200K Downloads in 30 Days',
    desc: 'An AR-powered mobile game taken from concept to the App Store in 14 weeks — with live-ops tooling that kept players coming back after launch.' },
  { type: 'Case Study', date: 'February 2025', photo: '1551288049-bebda4e38f71', result: '$2M+ raised',
    title: "US Fintech's AI Financial Modeling Platform Secures $2M+ Funding" },
  { type: 'Case Study', date: 'January 2025', photo: '1556742049-0cfed4f6a45d', result: '100x traffic, zero downtime',
    title: 'E-Commerce Platform Scales from 10K to 1M Monthly Users' },
  { type: 'Blog', date: 'April 2025', photo: '1593508512255-86ab42a8e620', result: '6 min read',
    title: "The Future of AR/VR in Enterprise: What's Coming in 2025–2026" },
  { type: 'Blog', date: 'March 2025', photo: '1485827404703-89b55fcc595e', result: '5 min read',
    title: 'How Generative AI Is Transforming Business Operations' },
];

const AWARDS = [
  { logo: 'aws', t: 'AWS Partner', s: 'Certified Cloud Solutions' },
  { logo: 'googlecloud', t: 'Google Cloud', s: 'Build Partner Program' },
  { icon: 'star', t: 'Top Rated — Clutch', s: '5.0 / 5.0 reviews' },
  { icon: 'shield-check', t: 'ISO 9001 Aligned', s: 'Quality Management' },
  { logo: 'meta', t: 'Meta Spark Partner', s: 'AR Development' },
];

const marqueeRow = (keys, cls = '', dur = 45) => {
  const items = keys.map(k => html`<span class="mq-item">${logo(k, R, 26)}${esc(logoName(k))}</span>`).join('');
  return html`<div class="marquee ${cls}" style="--mq-dur:${dur}s"><div class="marquee-track">${items}</div><div class="marquee-track" aria-hidden="true">${items}</div></div>`;
};

export function home() {
  const featured = new Set(SHOWCASE.map(s => s.slug));
  const body = html`
<!-- ================= HERO SLIDER ================= -->
<section class="hs" id="home" data-slider aria-roledescription="carousel" aria-label="RixlSoft highlights">
  ${SLIDES.map((s, i) => html`
  <div class="hs-slide${i === 0 ? ' on' : ''}" role="group" aria-roledescription="slide" aria-label="${i + 1} of ${SLIDES.length}"${i ? ' aria-hidden="true"' : ''}>
    <img class="hs-bg" src="${img(s.photo, 1920)}" alt=""${i === 0 ? ' fetchpriority="high"' : ' loading="lazy"'}>
    <div class="container hs-content">
      <div class="hero-badge anim" style="--k:0"><span class="dot"></span>${esc(s.tag)}</div>
      ${i === 0 ? html`<h1 class="hs-title anim" style="--k:1">${rich(s.title)}</h1>` : html`<h2 class="hs-title anim" style="--k:1">${rich(s.title)}</h2>`}
      <p class="hs-text anim" style="--k:2">${esc(s.text)}</p>
      <div class="hero-actions anim" style="--k:3">
        ${s.link
          ? html`<a href="${svcHref(R, s.link)}" class="btn btn-blue">Explore ${esc(s.tag.split(' &')[0].split(' /')[0])} ${icon('arrow-right')}</a><a href="#contact" class="btn btn-outline-dark">Talk to an Expert</a>`
          : html`<a href="#contact" class="btn btn-blue">Start Your Project ${icon('arrow-right')}</a><a href="services/index.html" class="btn btn-outline-dark">Explore Services</a>`}
      </div>
      <div class="hs-logos anim" style="--k:4"><span>Built with</span>${s.logos.map(k => html`<span class="hs-logo" title="${esc(logoName(k))}">${logo(k, R, 20)}</span>`)}</div>
    </div>
  </div>`)}
  <canvas class="hero-canvas" aria-hidden="true"></canvas>
  <div class="hs-arrows container">
    <button class="hs-arrow" data-dir="-1" aria-label="Previous slide">${icon('arrow-left')}</button>
    <button class="hs-arrow" data-dir="1" aria-label="Next slide">${icon('arrow-right')}</button>
  </div>
  <div class="hs-nav">
    <div class="container hs-tabs" role="tablist" aria-label="Choose slide">
      ${SLIDE_LABELS.map((l, i) => html`<button class="hs-tab${i === 0 ? ' on' : ''}" role="tab" aria-selected="${i === 0}"><span class="bar"><i></i></span><span class="n">0${i + 1}</span><span class="l">${esc(l)}</span></button>`)}
    </div>
  </div>
</section>

<!-- ================= LOGO MARQUEE ================= -->
<section class="marquee-sec" aria-label="Technologies we work with">
  ${marqueeRow(MARQUEE, '', 60)}
</section>

<!-- ================= SHOWCASE ================= -->
<section class="sec" id="services">
  <div class="container">
    <div class="sec-head-row">
      <div class="sec-head left" data-reveal="up">
        <div class="sec-badge">What We Do</div>
        <h2 data-split>Engineering the Technologies <em>That Matter Most</em></h2>
        <p>Twenty-one specialist services across four practices — here are the ones our clients ask for most.</p>
      </div>
      <a href="services/index.html" class="btn btn-outline-blue" data-reveal="left">All 21 Services ${icon('arrow-right')}</a>
    </div>
    <div class="bento" data-stagger=".07" data-reveal-type="zoom">
      ${SHOWCASE.map(t => { const m = SERVICES.find(s => s.slug === t.slug); return html`
      <a class="tile tile-${t.area}" href="${svcHref(R, t.slug)}">
        <img src="${img(t.photo, t.area === 'g' ? 1200 : 800)}" alt="" loading="lazy">
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
    <div class="awards-strip" id="recognition" data-stagger=".08" data-reveal-type="up">
      ${AWARDS.map(a => html`<div class="award-pill"><span class="ap-logo">${a.logo ? logo(a.logo, R, 28) : icon(a.icon)}</span><span><strong>${a.t}</strong><small>${a.s}</small></span></div>`)}
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
        <img src="${img(i.photo, 500)}" alt="" loading="lazy">
        <span class="i-ico">${icon(i.icon)}</span>
        <h4>${esc(i.name)}</h4><p>${esc(i.desc)}</p>
      </div>`; })}
    </div>
  </div>
</section>

<!-- ================= WHY RIXLSOFT ================= -->
<section class="sec bg-alt" id="about">
  <div class="container">
    <div class="split">
      <div class="media-stack" data-reveal="clip">
        <div class="media-dots"></div>
        <div class="media-main"><img src="${img(PHOTOS.about, 1000)}" alt="RixlSoft team planning a product roadmap" loading="lazy" data-parallax=".08"></div>
        <div class="media-badge"><span class="b-ico">${icon('sparkles')}</span><div><strong>AI-Native</strong><span>since day one, 2024</span></div></div>
      </div>
      <div class="why-text">
        <div class="sec-badge" data-reveal="up">Why RixlSoft</div>
        <h2 class="h2" data-split>Not a Software House. <em>A Systems Partner.</em></h2>
        <p data-reveal="up">Traditional agencies ship features. We build intelligent systems engineered around your business — systems that automate, adapt and scale with you, at the intersection of AI, games, immersive tech and product engineering.</p>
        <div class="pillars" data-stagger=".1" data-reveal-type="up">
          <div class="pillar spot"><span class="p-ico">${icon('zap')}</span><h4>AI-Native from Day One</h4><p>Intelligence is the foundation of every system we build.</p></div>
          <div class="pillar spot"><span class="p-ico">${icon('gamepad-2')}</span><h4>Games &amp; Immersive Specialists</h4><p>From mobile games to enterprise AR/VR.</p></div>
          <div class="pillar spot"><span class="p-ico">${icon('target')}</span><h4>One Accountable Team</h4><p>Design, AI, engineering and cloud — no handoffs.</p></div>
          <div class="pillar spot"><span class="p-ico">${icon('ruler')}</span><h4>Built for Scale</h4><p>Architecture planned on 3-year growth horizons.</p></div>
        </div>
      </div>
    </div>
  </div>
</section>

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

<!-- ================= INSIGHTS (compact) ================= -->
<section class="sec" id="insights">
  <div class="container">
    <div class="sec-head-row">
      <div class="sec-head left" data-reveal="up">
        <div class="sec-badge">Featured Insights</div>
        <h2 data-split>Case Studies &amp; <em>Ideas</em></h2>
        <p>Real outcomes from our projects, and what we're learning along the way.</p>
      </div>
      <a href="#contact" class="btn btn-outline-blue" data-reveal="left">Request Full Case Studies ${icon('arrow-right')}</a>
    </div>
    <div class="ins">
      ${(() => { const f = INSIGHTS[0]; return html`
      <article class="ins-feature" data-reveal="clip">
        <img src="${img(f.photo, 1000)}" alt="" loading="lazy">
        <div class="ins-feature-body">
          <div class="ins-meta"><span class="ins-type">${f.type}</span>${f.date}</div>
          <h3>${esc(f.title)}</h3>
          <p>${esc(f.desc)}</p>
          <div class="ins-result">${icon('trending-up')} ${esc(f.result)}</div>
        </div>
      </article>`; })()}
      <div class="ins-list" data-stagger=".08" data-reveal-type="left">
        ${INSIGHTS.slice(1).map(p => html`
        <article class="ins-item">
          <div class="ins-thumb"><img src="${img(p.photo, 300)}" alt="" loading="lazy"></div>
          <div>
            <div class="ins-meta"><span class="ins-type${p.type === 'Blog' ? ' blog' : ''}">${p.type}</span>${p.date}</div>
            <h4>${esc(p.title)}</h4>
            <div class="ins-result">${icon(p.type === 'Blog' ? 'clock' : 'trending-up')} ${esc(p.result)}</div>
          </div>
        </article>`)}
      </div>
    </div>
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
          <div class="cta-info"><span class="ci-icon">${icon('mail')}</span><a href="mailto:hello@rixlsoft.com">hello@rixlsoft.com</a></div>
          <div class="cta-info"><span class="ci-icon">${icon('earth')}</span><span>Remote-first · Global availability</span></div>
          <div class="cta-info"><span class="ci-icon">${icon('clock')}</span><span>Response within 24 hours</span></div>
          <div class="cta-info"><span class="ci-icon">${icon('messages-square')}</span><span>Free initial consultation</span></div>
        </div>
      </div>
      <form class="cta-form" id="contactForm" novalidate data-reveal="right">
        <div class="form-row">
          <div class="form-group"><label for="f-name">Full Name *</label><input id="f-name" name="Name" type="text" class="form-control" placeholder="Your full name" required autocomplete="name"></div>
          <div class="form-group"><label for="f-email">Email *</label><input id="f-email" name="Email" type="email" class="form-control" placeholder="work@company.com" required autocomplete="email"></div>
        </div>
        <div class="form-row">
          <div class="form-group"><label for="f-phone">Phone Number</label><input id="f-phone" name="Phone" type="tel" class="form-control" placeholder="+1 234 567 8900" autocomplete="tel"></div>
          <div class="form-group"><label for="f-company">Company Name *</label><input id="f-company" name="Company" type="text" class="form-control" placeholder="Your company" required autocomplete="organization"></div>
        </div>
        <div class="form-row">
          <div class="form-group"><label for="f-url">Company URL</label><input id="f-url" name="Website" type="url" class="form-control" placeholder="https://yourcompany.com"></div>
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
          <div class="form-group full"><label for="f-details">Project Details *</label><textarea id="f-details" name="Details" class="form-control" placeholder="Tell us about your project goals, timeline, and any specific requirements..." required></textarea></div>
        </div>
        <button type="submit" class="btn btn-blue form-submit">Send Message ${icon('send')}</button>
        <p class="form-note">We'll reply within 24 hours. Your details are never shared.</p>
      </form>
    </div>
  </div>
</section>`;
}
