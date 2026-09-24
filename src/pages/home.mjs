import { esc, icon, logo, logoName, html } from '../lib.mjs';
import { CATEGORIES, SERVICES, INDUSTRIES, HOME_INDUSTRIES, PHOTOS, img } from '../data/site.mjs';
import { svcHref } from '../layout.mjs';

const R = ''; // root prefix for the home page

const MARQUEE_A = ['react', 'nextjs', 'typescript', 'nodejs', 'python', 'openai', 'claude', 'langchain', 'flutter', 'swift', 'kotlin', 'figma', 'huggingface', 'graphql'];
const MARQUEE_B = ['aws', 'googlecloud', 'azure', 'docker', 'kubernetes', 'terraform', 'unity', 'unrealengine', 'oculus', 'firebase', 'postgresql', 'mongodb', 'shopify', 'stripe', 'ethereum'];

const TECH = [
  { group: 'Frontend', items: ['react', 'nextjs', 'vuejs', 'angular', 'typescript', 'tailwindcss', 'threejs'] },
  { group: 'Backend', items: ['nodejs', 'python', 'fastapi', 'django', 'nestjs', 'graphql', 'go'] },
  { group: 'AI & ML', items: ['openai', 'claude', 'gemini', 'langchain', 'huggingface', 'pytorch', 'tensorflow'] },
  { group: 'Game & XR', items: ['unity', 'unrealengine', 'blender', 'oculus', 'webgl', 'godot', 'babylonjs'] },
  { group: 'Cloud & DevOps', items: ['aws', 'googlecloud', 'azure', 'docker', 'kubernetes', 'terraform', 'githubactions'] },
  { group: 'Mobile & Data', items: ['flutter', 'reactnative', 'swift', 'kotlin', 'postgresql', 'mongodb', 'redis', 'supabase', 'firebase'] },
];

const PROCESS = [
  { title: 'Discovery & Problem Definition', desc: 'We analyze your business goals, map pain points, and identify exactly where AI, automation, or new technology creates maximum leverage. No scope guessing — just clear success metrics.', deliv: 'Problem Brief · Success Metrics · Scope Outline' },
  { title: 'System Design & Validation', desc: 'Full system blueprint before a single line of code: architecture diagrams, user flows, data models, API contracts, and clickable prototypes to validate before building.', deliv: 'Technical Spec · Architecture · Interactive Prototype' },
  { title: 'Engineering & Development', desc: 'Agile, sprint-based development with weekly demos and continuous delivery. Production-grade code, documented, tested, and built to grow from day one.', deliv: 'Working Builds · Weekly Reports · Staging Environment' },
  { title: 'Deployment & Launch', desc: 'Full infrastructure setup, deployment pipelines, security hardening, and documentation. Launch is planned and rehearsed — not scrambled.', deliv: 'Production Deploy · QA Report · Full Documentation' },
  { title: 'Continuous Improvement', desc: 'Ongoing retainer partnerships — shipping features, optimizing AI models, monitoring performance, and eliminating new bottlenecks as your business evolves.', deliv: 'Monthly Retainer · System Monitoring · Roadmap Reviews' },
];

const INSIGHTS = [
  { type: 'Case Study', date: 'March 2025', photo: '1542751371-adc38448a05e', title: 'Mobile Gaming Studio Launches AR Title to 200K Downloads in 30 Days', desc: 'How we built an AR-powered mobile game from concept to App Store in 14 weeks for a gaming startup.' },
  { type: 'Case Study', date: 'February 2025', photo: '1551288049-bebda4e38f71', title: "US Fintech's AI Financial Modeling Platform Secures $2M+ Funding", desc: 'Generative AI system for automated financial analysis that impressed a Series A investment round.' },
  { type: 'Blog', date: 'April 2025', photo: '1593508512255-86ab42a8e620', title: "The Future of AR/VR in Enterprise: What's Coming in 2025-2026", desc: 'How immersive technology is reshaping training, retail, healthcare and industrial operations globally.' },
  { type: 'Blog', date: 'March 2025', photo: '1485827404703-89b55fcc595e', title: 'How Generative AI is Transforming Business Operations in 2025', desc: 'From automating customer support to intelligent document processing — practical AI that delivers ROI.' },
  { type: 'Case Study', date: 'January 2025', photo: '1556742049-0cfed4f6a45d', title: 'E-Commerce Platform Scales from 10K to 1M Monthly Users with Zero Downtime', desc: 'Architecture re-engineering and cloud migration that enabled a 100x growth trajectory safely.' },
  { type: 'Blog', date: 'February 2025', photo: '1451187580459-43490279c0fa', title: 'Cloud Migration Playbook: From Legacy Systems to Cloud-Native in 90 Days', desc: 'Step-by-step approach to modernizing infrastructure without disrupting operations or losing data.' },
];

const marqueeRow = (keys, cls = '', dur = 45) => {
  const items = keys.map(k => html`<span class="mq-item">${logo(k, R, 26)}${esc(logoName(k))}</span>`).join('');
  return html`<div class="marquee ${cls}" style="--mq-dur:${dur}s"><div class="marquee-track">${items}</div><div class="marquee-track" aria-hidden="true">${items}</div></div>`;
};

export function home() {
  const body = html`
<!-- ================= HERO ================= -->
<section class="hero" id="home">
  <canvas class="hero-canvas" aria-hidden="true"></canvas>
  <div class="orb orb-1"></div><div class="orb orb-2"></div><div class="orb orb-3"></div>
  <div class="grid-bg"></div>
  <div class="container">
    <div class="hero-content">
      <div class="hero-left">
        <div class="hero-badge" data-reveal="down"><span class="dot"></span>AI-First Product Engineering · Est. 2024</div>
        <h1 data-split>Build Intelligent<br><span class="rotator"><span>Systems</span><span>AI Products</span><span>Games &amp; XR</span><span>Cloud Platforms</span></span><br>That Scale Globally</h1>
        <p class="hero-sub" data-reveal="up" style="--d:.5s">RixlSoft designs, builds, and deploys AI-powered software, immersive experiences, and scalable platforms — for startups, enterprises, and everything in between.</p>
        <div class="hero-actions" data-reveal="up" style="--d:.65s">
          <a href="#contact" class="btn btn-blue" data-magnetic>Start Your Project ${icon('arrow-right')}</a>
          <a href="services/index.html" class="btn btn-outline-dark">Explore Services</a>
        </div>
        <div class="hero-metrics" data-stagger=".1" data-reveal-type="up">
          <div class="h-metric"><div class="num" data-count="50">50<em>+</em></div><div class="lbl">Projects Delivered</div></div>
          <div class="h-metric"><div class="num" data-count="15">15<em>+</em></div><div class="lbl">Countries Served</div></div>
          <div class="h-metric"><div class="num" data-count="98">98<em>%</em></div><div class="lbl">Client Satisfaction</div></div>
          <div class="h-metric"><div class="num" data-count="21">21</div><div class="lbl">Specialist Services</div></div>
        </div>
      </div>
      <div class="hero-visual" data-reveal="zoom" style="--d:.3s">
        <div class="ring"></div><div class="ring r2"></div>
        <div class="hero-frame" data-tilt="5">
          <img src="${img(PHOTOS.hero, 1100)}" alt="RixlSoft engineers collaborating on a product build" fetchpriority="high">
        </div>
        <div class="float-card fc-2">
          <div class="fc-label">Client Satisfaction</div>
          <div class="fc-val">98<em>%</em></div>
          <div class="fc-row"><span class="fc-dot"></span>Verified reviews</div>
        </div>
        <div class="float-card fc-1">
          <div class="fc-label">AI Projects Delivered</div>
          <div class="fc-val">24<em>+</em></div>
          <div class="fc-row"><span class="fc-dot"></span>Last 12 months</div>
        </div>
        <div class="float-card fc-3">
          <div class="fc-logos">${['openai', 'unity', 'aws', 'flutter'].map(k => html`<span>${logo(k, R, 20)}</span>`)}</div>
          <div><div class="fc-label">Avg. time to MVP</div><div class="fc-val" style="font-size:18px">8 weeks</div></div>
        </div>
      </div>
    </div>
  </div>
  <div class="scroll-cue" aria-hidden="true"></div>
</section>

<!-- ================= LOGO MARQUEE ================= -->
<section class="marquee-sec" aria-label="Technologies we work with">
  <p class="marquee-label">Powered by world-class technologies</p>
  ${marqueeRow(MARQUEE_A, '', 50)}
  ${marqueeRow(MARQUEE_B, 'reverse', 55)}
</section>

<!-- ================= SERVICES (TABBED) ================= -->
<section class="sec bg-light" id="services">
  <div class="container">
    <div class="sec-head-row">
      <div class="sec-head left" data-reveal="up">
        <div class="sec-badge">Our Services</div>
        <h2 data-split>Transform Your Business with <em>Intelligent Engineering</em></h2>
        <p>End-to-end software services — from AI systems and immersive experiences to cloud infrastructure and scalable SaaS platforms.</p>
      </div>
      <a href="services/index.html" class="btn btn-outline-blue" data-reveal="left">View All Services ${icon('arrow-right')}</a>
    </div>
    <div class="srv-tabs" data-tabs>
      <div class="srv-tablist" role="tablist" aria-label="Service practices" data-stagger=".08" data-reveal-type="left">
        ${CATEGORIES.map((c, i) => html`
        <button class="srv-tab" role="tab" id="tab-${c.key}" aria-controls="panel-${c.key}" aria-selected="${i === 0}" tabindex="${i === 0 ? 0 : -1}">
          <span class="t-ico">${icon(c.icon)}</span>
          <span><h3>${esc(c.name)}</h3><small>${SERVICES.filter(s => s.cat === c.key).length} services</small></span>
        </button>`)}
      </div>
      <div data-reveal="up">
        ${CATEGORIES.map((c, i) => html`
        <div class="srv-panel${i === 0 ? ' active' : ''}" role="tabpanel" id="panel-${c.key}" aria-labelledby="tab-${c.key}"${i === 0 ? '' : ' hidden'}>
          <div class="srv-panel-hero">
            <img src="${img(c.photo, 1000)}" alt="" loading="lazy">
            <div><h3>${esc(c.name)}</h3><p>${esc(c.blurb)}</p></div>
          </div>
          <div class="srv-list">
            ${SERVICES.filter(s => s.cat === c.key).map(s => html`
            <a class="srv-card spot" href="${svcHref(R, s.slug)}">
              <span class="s-ico">${icon(s.icon)}</span>
              <span><h4>${esc(s.name)}</h4><p>${esc(s.short)}</p></span>
              <span class="go">${icon('arrow-up-right')}</span>
            </a>`)}
          </div>
        </div>`)}
      </div>
    </div>
  </div>
</section>

<!-- ================= INDUSTRIES ================= -->
<section class="sec" id="industries">
  <div class="container">
    <div class="sec-head" data-reveal="up">
      <div class="sec-badge">Industries</div>
      <h2 data-split>Discover Our Impact Across <em>Industries</em></h2>
      <p>We bring deep domain knowledge to every vertical — understanding unique operational challenges and building systems that create real competitive advantages.</p>
    </div>
    <div class="ind-grid" data-stagger=".06" data-reveal-type="up">
      ${HOME_INDUSTRIES.map(k => { const i = INDUSTRIES[k]; return html`
      <div class="ind-card" tabindex="0">
        <img src="${img(i.photo, 500)}" alt="" loading="lazy">
        <span class="i-ico">${icon(i.icon)}</span>
        <h4>${esc(i.name)}</h4><p>${esc(i.desc)}</p>
      </div>`; })}
    </div>
    <div style="text-align:center;margin-top:48px" data-reveal="up">
      <a href="#contact" class="btn btn-blue" data-magnetic>Let's Talk Business ${icon('arrow-right')}</a>
    </div>
  </div>
</section>

<!-- ================= STATS ================= -->
<section class="sec-sm bg-dark stats-sec">
  <div class="container">
    <div class="sec-head" data-reveal="up" style="margin-bottom:52px">
      <div class="sec-badge">Our Impact</div>
      <h2 data-split>Pioneering Trust and <em>Innovation</em></h2>
      <p>We take pride in empowering businesses worldwide with intelligent solutions and an unwavering commitment to excellence.</p>
    </div>
    <div class="stats-grid" data-stagger=".1" data-reveal-type="up">
      <div class="stat-box"><span class="s-ico">${icon('rocket')}</span><div class="stat-num" data-count="50">50<em>+</em></div><div class="l">Successful Projects</div><div class="s">Across 21 service lines</div></div>
      <div class="stat-box"><span class="s-ico">${icon('earth')}</span><div class="stat-num" data-count="15">15<em>+</em></div><div class="l">Countries Supported</div><div class="s">Remote-first, globally</div></div>
      <div class="stat-box"><span class="s-ico">${icon('handshake')}</span><div class="stat-num" data-count="40">40<em>+</em></div><div class="l">Active Clients</div><div class="s">Long-term partnerships</div></div>
      <div class="stat-box"><span class="s-ico">${icon('calendar-check')}</span><div class="stat-num" data-count="2">2<em>+</em></div><div class="l">Years of Excellence</div><div class="s">AI-first from day one</div></div>
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
        <p data-reveal="up">Traditional agencies ship features. We build intelligent systems engineered around your business reality — systems that automate, adapt, and scale with you. We operate at the intersection of AI, game development, immersive tech, and scalable product engineering.</p>
        <div class="pillars" data-stagger=".1" data-reveal-type="up">
          <div class="pillar spot"><span class="p-ico">${icon('zap')}</span><h4>AI-Native from Day One</h4><p>Intelligence isn't an add-on — it's the foundation of every system we build.</p></div>
          <div class="pillar spot"><span class="p-ico">${icon('gamepad-2')}</span><h4>Gaming &amp; Immersive Specialists</h4><p>From core mobile games to enterprise AR/VR — we build next-gen experiences.</p></div>
          <div class="pillar spot"><span class="p-ico">${icon('target')}</span><h4>Integrated Execution</h4><p>Design, AI, engineering and cloud under one workflow. No handoffs. Full accountability.</p></div>
          <div class="pillar spot"><span class="p-ico">${icon('ruler')}</span><h4>Built for Scale, Not Demo Day</h4><p>Architecture decisions made with 3-year growth horizons, not sprint deadlines.</p></div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ================= PROCESS ================= -->
<section class="sec" id="process">
  <div class="container">
    <div class="sec-head" data-reveal="up">
      <div class="sec-badge">How We Deliver</div>
      <h2 data-split>From Concept to <em>Completion</em></h2>
      <p>A structured, discovery-first process that eliminates the unpredictability most software projects suffer from.</p>
    </div>
    <div class="timeline">
      <div class="timeline-fill"></div>
      ${PROCESS.map((p, i) => html`
      <div class="tl-step">
        <div class="tl-dot">0${i + 1}</div>
        <div class="tl-card" data-reveal="${i % 2 ? 'right' : 'left'}">
          <div class="tl-label">Phase ${['One', 'Two', 'Three', 'Four', 'Five'][i]}</div>
          <h3>${esc(p.title)}</h3>
          <p>${esc(p.desc)}</p>
          <div class="tl-deliv">${p.deliv.split(' · ').map(d => html`<span>${esc(d)}</span>`)}</div>
        </div>
      </div>`)}
    </div>
  </div>
</section>

<!-- ================= RECOGNITION ================= -->
<section class="sec-sm bg-light" id="recognition">
  <div class="container">
    <div class="sec-head" data-reveal="up" style="margin-bottom:48px">
      <div class="sec-badge">Recognition</div>
      <h2 data-split>Awards &amp; <em>Certifications</em></h2>
    </div>
    <div class="awards-grid" data-stagger=".08" data-reveal-type="zoom">
      <div class="award-card spot"><div class="award-logo">${logo('aws', R, 44)}</div><h4>AWS Partner</h4><p>Certified Cloud Solutions</p></div>
      <div class="award-card spot"><div class="award-logo">${logo('googlecloud', R, 44)}</div><h4>Google Cloud</h4><p>Build Partner Program</p></div>
      <div class="award-card spot"><div class="award-logo">${icon('star')}</div><h4>Top Rated — Clutch</h4><p>5.0 / 5.0 reviews</p></div>
      <div class="award-card spot"><div class="award-logo">${icon('shield-check', 'blue')}</div><h4>ISO 9001 Aligned</h4><p>Quality Management</p></div>
      <div class="award-card spot"><div class="award-logo">${logo('meta', R, 44)}</div><h4>Meta Spark Partner</h4><p>AR Development</p></div>
    </div>
  </div>
</section>

<!-- ================= TECH STACK ================= -->
<section class="sec" id="technology">
  <div class="container">
    <div class="sec-head" data-reveal="up">
      <div class="sec-badge">Technology</div>
      <h2 data-split>Best-in-Class <em>Technology Stack</em></h2>
      <p>We work with the technologies that production-grade, modern engineering demands — chosen for performance, not trends.</p>
    </div>
    <div data-tabs>
      <div class="pill-tabs" role="tablist" aria-label="Technology categories" data-reveal="up">
        ${TECH.map((t, i) => html`<button class="pill-tab" role="tab" id="tt-${i}" aria-controls="tp-${i}" aria-selected="${i === 0}" tabindex="${i === 0 ? 0 : -1}">${esc(t.group)}</button>`)}
      </div>
      ${TECH.map((t, i) => html`
      <div class="logo-grid${i === 0 ? ' active' : ''}" role="tabpanel" id="tp-${i}" aria-labelledby="tt-${i}"${i === 0 ? '' : ' hidden'}>
        ${t.items.map((k, j) => html`<div class="logo-tile" style="--i:${j}">${logo(k, R, 44)}<span>${esc(logoName(k))}</span></div>`)}
      </div>`)}
    </div>
  </div>
</section>

<!-- ================= INSIGHTS ================= -->
<section class="sec bg-alt" id="insights">
  <div class="container">
    <div class="sec-head" data-reveal="up">
      <div class="sec-badge">Featured Insights</div>
      <h2 data-split>Stories of Our Transformations Across <em>Services &amp; Industries</em></h2>
    </div>
    <div class="insights-grid" data-stagger=".08" data-reveal-type="up">
      ${INSIGHTS.map(p => html`
      <article class="insight-card">
        <div class="insight-img"><img src="${img(p.photo, 700)}" alt="" loading="lazy"><span class="insight-type">${p.type}</span></div>
        <div class="insight-body">
          <div class="insight-meta">${icon('calendar')} ${p.date} · ${p.type}</div>
          <h3>${esc(p.title)}</h3>
          <p>${esc(p.desc)}</p>
          <a href="#" class="btn btn-ghost">Explore More ${icon('arrow-right')}</a>
        </div>
      </article>`)}
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
