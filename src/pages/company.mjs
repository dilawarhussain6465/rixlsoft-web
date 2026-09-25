import { esc, icon, logo, html } from '../lib.mjs';
import { PHOTOS, PLATFORMS, RECOGNITION, FORM_INBOX, img } from '../data/site.mjs';
import { SITE_URL } from '../layout.mjs';
import { TESTIMONIALS, CLIENTS } from '../data/testimonials.mjs';
import { PROCESS } from './home.mjs';

/** Devsinc-style "Why RixlSoft" card: platforms we build on + recognition. */
export function whySection(root, id = 'why') {
  return html`
<section class="sec-sm" id="${id}">
  <div class="container">
    <div class="why-card">
      <div class="why-top">
        <div data-reveal="up">
          <div class="why-eyebrow">Why RixlSoft</div>
          <h2>Built on the platforms you already run. <em>Backed by engineers who ship.</em></h2>
          <p>Senior engineers across the ecosystems enterprises depend on — so your CRM, cloud and commerce work together instead of in silos.</p>
        </div>
        <a href="${root || './'}#contact" class="btn btn-white" data-reveal="left">${icon('arrow-up-right')} Let's Work Together</a>
      </div>
      <div class="plat-grid" data-stagger=".08" data-reveal-type="up">
        ${PLATFORMS.map(p => html`
        <div class="plat-card spot">
          <div class="plat-head"><span class="plat-logo">${logo(p.logo, root, 30)}<b>${esc(p.name)}</b></span><span class="plat-tag">${esc(p.tag)}</span></div>
          <p>${esc(p.text)}</p>
        </div>`)}
      </div>
      <div class="recog">
        <div class="why-eyebrow">Recognized by</div>
        <div class="recog-list" data-stagger=".06" data-reveal-type="up">
          ${RECOGNITION.map(r => html`<span class="recog-pill"><span class="rp-ico">${r.logo ? logo(r.logo, root, 20) : icon(r.icon)}</span>${esc(r.t)}</span>`)}
        </div>
      </div>
    </div>
  </div>
</section>`;
}

const hero = (crumb, badge, title, lead, actions, photo) => html`
<section class="page-hero">
  <canvas class="hero-canvas" aria-hidden="true"></canvas>
  <div class="orb orb-1"></div><div class="orb orb-2"></div>
  <div class="grid-bg"></div>
  <div class="container">
    <div class="page-hero-grid">
      <div>
        <nav class="crumbs" aria-label="Breadcrumb" data-reveal="down"><a href="./">Home</a>${icon('chevron-right')}<span aria-current="page">${crumb}</span></nav>
        <div class="hero-badge" data-reveal="down" style="--d:.1s"><span class="dot"></span>${badge}</div>
        <h1 data-split>${title}</h1>
        <p class="lead" data-reveal="up" style="--d:.45s">${lead}</p>
        <div class="hero-actions" data-reveal="up" style="--d:.6s">${actions}</div>
      </div>
      <div class="hero-visual" data-reveal="zoom" style="--d:.25s">
        <div class="ring"></div>
        <div class="hero-frame" data-tilt="5"><img src="${img(photo, 1000)}" alt="" fetchpriority="high"></div>
      </div>
    </div>
  </div>
</section>`;

/* ---------------- About ---------------- */
export function aboutPage() {
  const values = [
    ['target', 'Outcomes over output', 'We measure success by the business result, not the number of features shipped.'],
    ['brain-circuit', 'AI-first thinking', 'We look for where intelligence removes real work — then engineer it responsibly.'],
    ['shield-check', 'Engineering integrity', 'Tested, documented, secure code that your team can own and extend.'],
    ['eye', 'Radical transparency', 'Weekly demos, honest estimates and clear risks — no surprises.'],
    ['handshake', 'Partnership', 'We work as an extension of your team and stay accountable after launch.'],
    ['graduation-cap', 'Always learning', 'Our engineers invest time every sprint in new tools, models and platforms.'],
  ];
  const models = [
    ['target', 'Project Delivery', 'Fixed-scope products and platforms with milestone-based delivery and clear success metrics.'],
    ['users-round', 'Dedicated Teams', 'A cross-functional squad that works exclusively on your roadmap, managed by us.'],
    ['user-plus', 'Staff Augmentation', 'Senior engineers who join your team in days and follow your processes and tools.'],
  ];
  const body = html`
${hero('About Us', 'About RixlSoft', 'We Engineer Intelligent Systems That <em>Move Businesses Forward</em>',
  'RixlSoft is an AI-first product engineering company. We design, build and run software, games, immersive experiences, cloud platforms and CRM systems for startups and enterprises worldwide.',
  html`<a href="#contact" class="btn btn-blue" data-magnetic>Work With Us ${icon('arrow-right')}</a><a href="careers.html" class="btn btn-outline-dark">Join Our Team</a>`, PHOTOS.about)}

<section class="sec-sm bg-dark stats-sec">
  <div class="container">
    <div class="stats-grid" data-stagger=".1" data-reveal-type="up">
      <div class="stat-box"><span class="s-ico">${icon('rocket')}</span><div class="stat-num" data-count="50">50<em>+</em></div><div class="l">Projects Delivered</div></div>
      <div class="stat-box"><span class="s-ico">${icon('earth')}</span><div class="stat-num" data-count="15">15<em>+</em></div><div class="l">Countries Served</div></div>
      <div class="stat-box"><span class="s-ico">${icon('handshake')}</span><div class="stat-num" data-count="40">40<em>+</em></div><div class="l">Active Clients</div></div>
      <div class="stat-box"><span class="s-ico">${icon('smile')}</span><div class="stat-num" data-count="98">98<em>%</em></div><div class="l">Client Satisfaction</div></div>
    </div>
    ${trustedStrip()}
  </div>
</section>

<section class="sec">
  <div class="container">
    <div class="split">
      <div class="media-stack" data-reveal="clip">
        <div class="media-dots"></div>
        <div class="media-main"><img src="${img(PHOTOS.services, 1000)}" alt="RixlSoft engineers at work" loading="lazy" data-parallax=".08"></div>
        <div class="media-badge"><span class="b-ico">${icon('sparkles')}</span><div><strong>Est. 2024</strong><span>AI-native from day one</span></div></div>
      </div>
      <div>
        <div class="sec-badge" data-reveal="up">Our Story</div>
        <h2 class="h2" data-split>Not a Software House. <em>A Systems Partner.</em></h2>
        <div class="prose" data-reveal="up">
          <p>RixlSoft was founded in 2024 with a simple belief: every business system should be intelligent by default. Instead of shipping features in isolation, we engineer complete systems — product, data, AI and cloud — around how our clients actually operate.</p>
          <p>From our engineering hub in Lahore we work remotely with teams across the United States, United Kingdom, the GCC and Europe, combining senior talent with the time-zone overlap and communication discipline that distributed delivery demands.</p>
        </div>
        <div class="mv-grid" data-stagger=".1" data-reveal-type="up">
          <div class="mv-card"><span class="p-ico">${icon('compass')}</span><h4>Our Mission</h4><p>Help organizations turn technology into measurable outcomes — faster, safer and with less waste.</p></div>
          <div class="mv-card"><span class="p-ico">${icon('telescope')}</span><h4>Our Vision</h4><p>Be the most trusted AI-first engineering partner for ambitious companies worldwide.</p></div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="sec bg-light">
  <div class="container">
    <div class="sec-head" data-reveal="up"><div class="sec-badge">Our Values</div><h2 data-split>What We <em>Stand For</em></h2><p>The principles that guide every engagement, estimate and line of code.</p></div>
    <div class="offer-grid" data-stagger=".08" data-reveal-type="up">
      ${values.map(([ic, t, d], i) => html`<article class="offer-card spot"><span class="num">0${i + 1}</span><span class="o-ico">${icon(ic)}</span><h3>${t}</h3><p>${d}</p></article>`)}
    </div>
  </div>
</section>

${whySection('')}

<section class="sec" id="how">
  <div class="container">
    <div class="sec-head" data-reveal="up"><div class="sec-badge">How We Work</div><h2 data-split>Flexible Engagement. <em>Proven Delivery.</em></h2><p>Choose how you want to work with us — every model runs on the same discovery-first process.</p></div>
    <div class="model-grid" data-stagger=".1" data-reveal-type="up" style="margin-bottom:48px">
      ${models.map(([ic, t, d], i) => html`<div class="model-card spot${i === 1 ? ' featured' : ''}"><div class="m-ico">${icon(ic)}</div><h3>${t}</h3><p>${d}</p><a href="#contact" class="btn ${i === 1 ? 'btn-blue' : 'btn-outline-blue'} btn-sm">Discuss this model ${icon('arrow-right')}</a></div>`)}
    </div>
    <div class="flow">
      <div class="flow-line"><i></i></div>
      ${PROCESS.map((p, i) => html`
      <div class="flow-step" style="--i:${i}" data-reveal="up">
        <div class="flow-ico">${icon(p.icon)}<span>0${i + 1}</span></div>
        <h3>${esc(p.title)}</h3><p>${esc(p.desc)}</p>
        <div class="flow-deliv">${icon('package')} ${esc(p.deliv)}</div>
      </div>`)}
    </div>
  </div>
</section>

<section class="sec-sm bg-alt">
  <div class="container">
    <div class="regions" data-reveal="up">
      <div><div class="sec-badge">Global Delivery</div><h2 class="h2">Remote-first. <em>Time-zone friendly.</em></h2><p>Our teams overlap working hours with clients across four regions, with clear rituals for async and live collaboration.</p></div>
      <div class="region-list">${['United States & Canada', 'United Kingdom', 'Middle East & GCC', 'Europe', 'Pakistan'].map(r => html`<span class="recog-pill light">${icon('map-pin')} ${r}</span>`)}</div>
    </div>
  </div>
</section>`;
  return { title: 'About Us | RixlSoft', description: 'About RixlSoft: an AI-first product engineering company building software, games, XR, cloud and CRM systems for startups and enterprises worldwide.', image: img(PHOTOS.about, 1200), body };
}

/* ---------------- Careers ---------------- */
export function careersPage() {
  const perks = [
    ['laptop', 'Remote-first', 'Work from anywhere with flexible hours and async-friendly rituals.'],
    ['brain-circuit', 'Cutting-edge work', 'Ship AI agents, games, XR and cloud platforms for global clients.'],
    ['graduation-cap', 'Learning budget', 'Courses, certifications and conference time every year.'],
    ['trending-up', 'Clear growth paths', 'Transparent levels, regular reviews and mentorship from seniors.'],
    ['heart-pulse', 'Health & wellbeing', 'Health coverage and paid time off that you are encouraged to use.'],
    ['users-round', 'Small, senior teams', 'Real ownership, low bureaucracy and direct client impact.'],
  ];
  const steps = [
    ['send', 'Apply', 'Send your details and CV — we read every application.'],
    ['phone-call', 'Intro call', 'A 30-minute conversation about your experience and goals.'],
    ['code-xml', 'Skills session', 'A practical, paid-time-respecting technical or portfolio review.'],
    ['badge-check', 'Offer', 'Final conversation with leadership and a clear written offer.'],
  ];
  const roles = ['Software Engineering', 'AI / Machine Learning', 'Game Development & XR', 'Cloud & DevOps', 'Salesforce & CRM', 'UI/UX & Design', 'Quality Assurance', 'Project / Product Management', 'Sales & Marketing', 'Other'];
  const body = html`
${hero('Careers', 'Careers at RixlSoft', 'Build What Comes Next <em>With Us</em>',
  'Join a senior, AI-first team shipping intelligent products, games, immersive experiences and cloud platforms for clients around the world.',
  html`<a href="#openings" class="btn btn-blue" data-magnetic>See Open Roles ${icon('arrow-right')}</a><a href="#apply" class="btn btn-outline-dark">Send Your CV</a>`, PHOTOS.about)}

<section class="sec">
  <div class="container">
    <div class="sec-head" data-reveal="up"><div class="sec-badge">Why Join Us</div><h2 data-split>Grow Faster, <em>Build Better</em></h2><p>We keep teams small and senior so every engineer has real ownership and room to grow.</p></div>
    <div class="offer-grid" data-stagger=".08" data-reveal-type="up">
      ${perks.map(([ic, t, d], i) => html`<article class="offer-card spot"><span class="num">0${i + 1}</span><span class="o-ico">${icon(ic)}</span><h3>${t}</h3><p>${d}</p></article>`)}
    </div>
  </div>
</section>

<section class="sec-sm bg-light" id="openings">
  <div class="container">
    <div class="sec-head" data-reveal="up"><div class="sec-badge">Open Positions</div><h2 data-split>Current <em>Openings</em></h2></div>
    <div class="empty-roles" data-reveal="zoom">
      <span class="er-ico">${icon('briefcase')}</span>
      <h3>No open positions right now</h3>
      <p>We are not actively hiring for specific roles at the moment, but we are always happy to meet talented people. Send a general application and we will reach out when a matching role opens.</p>
      <a href="#apply" class="btn btn-blue">Submit a General Application ${icon('arrow-right')}</a>
    </div>
  </div>
</section>

<section class="sec">
  <div class="container">
    <div class="sec-head" data-reveal="up"><div class="sec-badge">Hiring Process</div><h2 data-split>Simple, Respectful, <em>Fast</em></h2></div>
    <div class="flow f4">
      <div class="flow-line"><i></i></div>
      ${steps.map(([ic, t, d], i) => html`<div class="flow-step" data-reveal="up" style="--d:${(i * .1).toFixed(1)}s"><div class="flow-ico">${icon(ic)}<span>0${i + 1}</span></div><h3>${t}</h3><p>${d}</p></div>`)}
    </div>
  </div>
</section>

<section class="cta-sec bg-dark" id="apply" style="position:relative">
  <div class="container">
    <div class="cta-inner">
      <div class="cta-left">
        <div class="sec-badge" data-reveal="up">General Application</div>
        <h2 data-split>Tell Us About <em>Yourself</em></h2>
        <p data-reveal="up">Share your experience, attach your CV and tell us the kind of work you want to do. Your application goes straight to our hiring team.</p>
        <div class="cta-info-list" data-stagger=".08" data-reveal-type="left">
          <div class="cta-info"><span class="ci-icon">${icon('file-text')}</span><span>Attach your CV — PDF or Word, up to 5 MB</span></div>
          <div class="cta-info"><span class="ci-icon">${icon('earth')}</span><span>Remote-first · Hiring globally</span></div>
          <div class="cta-info"><span class="ci-icon">${icon('clock')}</span><span>We reply to every applicant</span></div>
        </div>
      </div>
      <form class="cta-form" method="POST" enctype="multipart/form-data" novalidate data-inbox="${FORM_INBOX}" data-reveal="right">
        <input type="hidden" name="_subject" value="New job application — RixlSoft careers">
        <input type="hidden" name="_template" value="table">
        <input type="hidden" name="_captcha" value="false">
        <input type="hidden" name="_next" value="${SITE_URL}thanks.html?type=careers">
        <input type="text" name="_honey" class="hp" tabindex="-1" autocomplete="off" aria-hidden="true">
        <div class="form-row">
          <div class="form-group"><label for="a-name">Full Name *</label><input id="a-name" name="Name" class="form-control" required autocomplete="name" placeholder="Your full name"></div>
          <div class="form-group"><label for="a-email">Email *</label><input id="a-email" name="email" type="email" class="form-control" required autocomplete="email" placeholder="you@email.com"></div>
        </div>
        <div class="form-row">
          <div class="form-group"><label for="a-role">Area of Interest *</label><select id="a-role" name="Role" class="form-control" required><option value="">Select an area</option>${roles.map(r => html`<option>${r}</option>`)}</select></div>
          <div class="form-group"><label for="a-exp">Years of Experience</label><select id="a-exp" name="Experience" class="form-control"><option value="">Select</option><option>0–1</option><option>2–4</option><option>5–7</option><option>8+</option></select></div>
        </div>
        <div class="form-row">
          <div class="form-group full"><label for="a-link">LinkedIn / Portfolio URL</label><input id="a-link" name="Profile" type="url" class="form-control" placeholder="https://"></div>
        </div>
        <div class="form-row">
          <div class="form-group full"><label for="a-msg">About You *</label><textarea id="a-msg" name="Message" class="form-control" required placeholder="Your background, strongest skills and what you want to work on next..."></textarea></div>
        </div>
        <div class="form-row">
          <div class="form-group full"><label for="a-cv">CV / Resume * <span class="opt">(PDF, DOC or DOCX · max 5 MB)</span></label>
            <label class="file-drop"><input id="a-cv" type="file" name="attachment" accept=".pdf,.doc,.docx" required><span class="fd-ico">${icon('upload')}</span><span class="fd-text">Choose your CV or drag it here</span></label>
          </div>
        </div>
        <button type="submit" class="btn btn-blue form-submit">Send Application ${icon('send')}</button>
        <p class="form-note">We review every application and reply to every candidate.</p>
      </form>
    </div>
  </div>
</section>`;
  return { title: 'Careers | RixlSoft', description: 'Careers at RixlSoft: join a remote-first, AI-first engineering team. No current openings — submit a general application.', image: img(PHOTOS.about, 1200), body };
}

/* ---------------- Thank-you page (after FormSubmit) ---------------- */
export function thanksPage() {
  const body = html`
<section class="page-hero" style="min-height:calc(100vh - 40px);display:flex;align-items:center">
  <canvas class="hero-canvas" aria-hidden="true"></canvas>
  <div class="orb orb-1"></div><div class="orb orb-2"></div>
  <div class="grid-bg"></div>
  <div class="container">
    <div class="thanks-card" data-thanks>
      <span class="er-ico" data-reveal="zoom">${icon('check')}</span>
      <div data-for="contact">
        <h1 data-split>Thank You — <em>Message Received</em></h1>
        <p class="lead" style="margin:0 auto" data-reveal="up">Your enquiry is on its way to our team. A RixlSoft specialist will reply within 24 hours to schedule your free discovery call.</p>
      </div>
      <div data-for="careers" hidden>
        <h1 data-split>Thank You — <em>Application Received</em></h1>
        <p class="lead" style="margin:0 auto" data-reveal="up">Your application and CV have been sent to our hiring team. We review every application and will get back to you as soon as a matching role opens.</p>
      </div>
      <div class="hero-actions" data-reveal="up">
        <a href="./" class="btn btn-blue">Back to Home ${icon('arrow-right')}</a>
        <a href="case-studies/index.html" class="btn btn-outline-dark">Read Case Studies</a>
      </div>
    </div>
  </div>
</section>`;
  return { title: 'Thank You | RixlSoft', description: 'Thank you for contacting RixlSoft.', body };
}

/* ---------------- Client voices + Trusted by ---------------- */
const clientMark = key => { const c = CLIENTS[key]; return html`<span class="client-mark"><span class="cm-mono">${c.mono}</span><span class="cm-name">${esc(c.name)}${c.sub ? html`<small>${esc(c.sub)}</small>` : ''}</span></span>`; };

export function trustedStrip(light = false) {
  return html`
    <div class="trusted${light ? ' light' : ''}">
      <div class="why-eyebrow">Trusted by</div>
      <div class="trusted-row" data-stagger=".06" data-reveal-type="up">${Object.keys(CLIENTS).map(clientMark)}</div>
    </div>`;
}

export function testimonialsSection() {
  return html`
<section class="sec tm-sec" id="testimonials">
  <div class="container" style="position:relative;z-index:1">
    <div class="sec-head-row">
      <div data-reveal="up">
        <div class="why-eyebrow">Client Voices</div>
        <h2 class="tm-title">Trusted with the work <em>that matters most</em></h2>
      </div>
      <div class="tm-nav" data-reveal="left">
        <button class="hs-arrow" data-tm="-1" aria-label="Previous testimonial">${icon('arrow-left')}</button>
        <button class="hs-arrow" data-tm="1" aria-label="Next testimonial">${icon('arrow-right')}</button>
      </div>
    </div>
    <div class="tm-track" data-tm-track data-stagger=".1" data-reveal-type="up">
      ${TESTIMONIALS.map(t => html`
      <figure class="tm-card spot">
        <span class="tm-q" aria-hidden="true">&ldquo;</span>
        <blockquote>${esc(t.quote)}</blockquote>
        <figcaption>
          <div><strong>${esc(t.name)}</strong><span>${esc(t.role)}, ${esc(CLIENTS[t.client].name)}${CLIENTS[t.client].sub ? ' ' + esc(CLIENTS[t.client].sub) : ''}</span></div>
          ${clientMark(t.client)}
        </figcaption>
      </figure>`)}
    </div>
    ${trustedStrip()}
  </div>
</section>`;
}
