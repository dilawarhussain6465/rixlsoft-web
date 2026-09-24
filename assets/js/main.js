/* ============================================================
   RIXLSOFT — INTERACTIONS & ANIMATIONS (vanilla, no deps)
============================================================ */
(() => {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];

  /* ---------- Image fallback: hide broken photos, keep gradient bg ---------- */
  document.addEventListener('error', e => {
    if (e.target.tagName === 'IMG') e.target.classList.add('img-fallback');
  }, true);

  /* ---------- Navbar: scrolled state + hide on scroll down ---------- */
  const nav = $('#navbar');
  const progress = $('.scroll-progress');
  const toTop = $('.to-top');
  let lastY = scrollY, ticking = false;
  const onScroll = () => {
    const y = scrollY;
    if (nav) {
      nav.classList.toggle('scrolled', y > 30);
      const menuOpen = document.body.classList.contains('menu-open') || $('.nav-item.active');
      nav.classList.toggle('hide', !menuOpen && y > 400 && y > lastY + 4);
      if (y < lastY - 4) nav.classList.remove('hide');
    }
    if (progress) {
      const h = document.documentElement.scrollHeight - innerHeight;
      progress.style.setProperty('--p', h > 0 ? (y / h).toFixed(4) : 0);
    }
    if (toTop) toTop.classList.toggle('show', y > 900);
    updateParallax();
    lastY = y; ticking = false;
  };
  addEventListener('scroll', () => { if (!ticking) { requestAnimationFrame(onScroll); ticking = true; } }, { passive: true });
  toTop?.addEventListener('click', () => scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' }));

  /* ---------- Desktop dropdowns: open on hover (with intent delay), click for touch ---------- */
  document.documentElement.classList.remove('no-js');
  const items = $$('.nav-item');
  const setOpen = (item, open) => {
    item.classList.toggle('active', open);
    item.querySelector('.nav-link')?.setAttribute('aria-expanded', String(open));
  };
  const closeAll = except => items.forEach(i => { if (i !== except) setOpen(i, false); });
  items.forEach(item => {
    let t;
    item.addEventListener('pointerenter', e => {
      if (e.pointerType === 'touch') return;
      clearTimeout(t); t = setTimeout(() => { closeAll(item); setOpen(item, true); }, 60);
    });
    item.addEventListener('pointerleave', e => {
      if (e.pointerType === 'touch') return;
      clearTimeout(t); t = setTimeout(() => setOpen(item, false), 180);
    });
    item.querySelector('.nav-link')?.addEventListener('click', e => {
      e.stopPropagation();
      const open = !item.classList.contains('active');
      closeAll(item); setOpen(item, open);
    });
    item.querySelectorAll('a').forEach(a => a.addEventListener('click', () => setOpen(item, false)));
  });
  document.addEventListener('click', e => { if (!e.target.closest('.nav-item')) closeAll(); });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') { closeAll(); closeMobile(); }
  });

  /* ---------- Mobile menu ---------- */
  const ham = $('#navHam'), mob = $('#mobOverlay');
  function closeMobile() { mob?.classList.remove('open'); ham?.classList.remove('open'); ham?.setAttribute('aria-expanded', 'false'); document.body.classList.remove('menu-open'); }
  ham?.addEventListener('click', () => {
    const open = !mob.classList.contains('open');
    mob.classList.toggle('open', open); ham.classList.toggle('open', open);
    ham.setAttribute('aria-expanded', String(open));
    document.body.classList.toggle('menu-open', open);
  });
  $$('.mob-nav-link[aria-controls]').forEach(b => b.addEventListener('click', () => {
    const sub = document.getElementById(b.getAttribute('aria-controls'));
    const open = !sub.classList.contains('open');
    sub.classList.toggle('open', open); b.setAttribute('aria-expanded', String(open));
  }));
  $$('#mobOverlay a').forEach(a => a.addEventListener('click', closeMobile));

  /* ---------- Split headings into animated words ---------- */
  $$('[data-split]').forEach(el => {
    let i = 0;
    const walk = node => {
      [...node.childNodes].forEach(n => {
        if (n.nodeType === 3) {
          const frag = document.createDocumentFragment();
          n.textContent.split(/(\s+)/).forEach(part => {
            if (!part) return;
            if (/^\s+$/.test(part)) { frag.appendChild(document.createTextNode(part)); return; }
            const w = document.createElement('span'); w.className = 'split-word';
            const inner = document.createElement('span'); inner.textContent = part; inner.style.setProperty('--i', i++);
            w.appendChild(inner); frag.appendChild(w);
          });
          n.replaceWith(frag);
        } else if (n.nodeType === 1 && !n.classList.contains('rotator') && n.tagName !== 'BR') {
          if (n.tagName === 'EM') {
            // keep gradient on the em: wrap whole em as one animated unit
            const w = document.createElement('span'); w.className = 'split-word';
            n.replaceWith(w); const inner = document.createElement('span'); inner.style.setProperty('--i', i++);
            inner.appendChild(n); w.appendChild(inner);
          } else walk(n);
        } else if (n.nodeType === 1 && n.classList.contains('rotator')) {
          const w = document.createElement('span'); w.className = 'split-word';
          n.replaceWith(w); const inner = document.createElement('span'); inner.style.setProperty('--i', i++);
          inner.appendChild(n); w.appendChild(inner);
        }
      });
    };
    walk(el);
  });

  /* ---------- Reveal on scroll ---------- */
  $$('[data-stagger]').forEach(group => {
    const step = parseFloat(group.dataset.stagger) || 0.08;
    [...group.children].forEach((c, i) => {
      if (!c.hasAttribute('data-reveal')) c.setAttribute('data-reveal', group.dataset.revealType || 'up');
      c.style.setProperty('--d', `${(i * step).toFixed(2)}s`);
    });
  });
  const revealTargets = $$('[data-reveal], [data-split], [data-count], .steps-h, .flow');
  if (reduce || !('IntersectionObserver' in window)) {
    revealTargets.forEach(el => { el.classList.add('in', 'split-in'); if (el.dataset.count) setCount(el, parseFloat(el.dataset.count)); });
  } else {
    // clip-path hides an element from IntersectionObserver, so clip reveals watch their parent.
    const proxy = new Map();
    const io = new IntersectionObserver(entries => {
      entries.forEach(en => {
        if (!en.isIntersecting) return;
        const el = proxy.get(en.target) || en.target;
        el.classList.add('in');
        if (el.hasAttribute('data-split')) el.classList.add('split-in');
        if (el.dataset.count) countUp(el);
        io.unobserve(en.target);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });
    revealTargets.forEach(el => {
      if (el.dataset.reveal === 'clip') { proxy.set(el.parentElement, el); io.observe(el.parentElement); }
      else io.observe(el);
    });
  }

  /* ---------- Counters ---------- */
  function setCount(el, v) {
    const dec = (el.dataset.count.split('.')[1] || '').length;
    el.firstChild.nodeValue = v.toFixed(dec);
  }
  function countUp(el) {
    const target = parseFloat(el.dataset.count);
    const dur = 1800, t0 = performance.now();
    const tick = t => {
      const p = Math.min(1, (t - t0) / dur);
      const eased = 1 - Math.pow(1 - p, 4);
      setCount(el, target * eased);
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }

  /* ---------- Rotating hero words ---------- */
  $$('.rotator').forEach(r => {
    const items = $$('span', r);
    if (items.length < 2 || reduce) { items[0]?.classList.add('on'); return; }
    let i = 0; items[0].classList.add('on');
    setInterval(() => {
      const cur = items[i]; i = (i + 1) % items.length; const nxt = items[i];
      cur.classList.remove('on'); cur.classList.add('off');
      nxt.classList.remove('off'); nxt.classList.add('on');
      setTimeout(() => cur.classList.remove('off'), 800);
    }, 2600);
  });

  /* ---------- Hero slider (autoplay, arrows, swipe, keyboard) ---------- */
  $$('[data-slider]').forEach(root => {
    const slides = $$('.hs-slide', root);
    const DUR = 6500; let i = 0, timer, paused = false;
    const go = n => {
      i = (n + slides.length) % slides.length;
      slides.forEach((s, k) => { s.classList.toggle('on', k === i); s.setAttribute('aria-hidden', String(k !== i)); s.querySelectorAll('a,button').forEach(a => a.tabIndex = k === i ? 0 : -1); });
      schedule();
    };
    const schedule = () => { clearTimeout(timer); if (!reduce && !paused) timer = setTimeout(() => go(i + 1), DUR); };
    $$('.hs-arrow', root).forEach(b => b.addEventListener('click', () => go(i + +b.dataset.dir)));
    root.addEventListener('keydown', e => { if (e.key === 'ArrowRight') go(i + 1); if (e.key === 'ArrowLeft') go(i - 1); });
    let x0 = null;
    root.addEventListener('pointerdown', e => { if (e.pointerType !== 'mouse') x0 = e.clientX; });
    root.addEventListener('pointerup', e => { if (x0 !== null && Math.abs(e.clientX - x0) > 50) go(i + (e.clientX < x0 ? 1 : -1)); x0 = null; });
    // pause while the hero is off-screen or the tab is hidden; restart the current slide when back
    const setPaused = p => { if (p === paused) return; paused = p; root.classList.toggle('paused', p); if (!p) go(i); else clearTimeout(timer); };
    new IntersectionObserver(([e]) => setPaused(!e.isIntersecting), { threshold: .25 }).observe(root);
    document.addEventListener('visibilitychange', () => setPaused(document.hidden));
    go(0);
  });

  /* ---------- Spotlight hover (mouse-follow glow) ---------- */
  $$('.spot, .benefit').forEach(el => {
    el.addEventListener('pointermove', e => {
      const r = el.getBoundingClientRect();
      el.style.setProperty('--mx', `${e.clientX - r.left}px`);
      el.style.setProperty('--my', `${e.clientY - r.top}px`);
    });
  });

  /* ---------- 3D tilt ---------- */
  if (!reduce && matchMedia('(hover:hover)').matches) {
    $$('[data-tilt]').forEach(el => {
      const max = parseFloat(el.dataset.tilt) || 6;
      el.style.transformStyle = 'preserve-3d';
      el.addEventListener('pointermove', e => {
        const r = el.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5;
        el.style.transform = `perspective(900px) rotateY(${x * max}deg) rotateX(${-y * max}deg)`;
      });
      el.addEventListener('pointerleave', () => { el.style.transform = ''; });
    });
    /* Magnetic buttons */
    $$('[data-magnetic]').forEach(el => {
      el.addEventListener('pointermove', e => {
        const r = el.getBoundingClientRect();
        el.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * .18}px, ${(e.clientY - r.top - r.height / 2) * .28}px)`;
      });
      el.addEventListener('pointerleave', () => { el.style.transform = ''; });
    });
  }

  /* ---------- Tabs (services, tech stack) ---------- */
  $$('[data-tabs]').forEach(root => {
    const tabs = $$('[role="tab"]', root);
    const activate = tab => {
      tabs.forEach(t => {
        const on = t === tab;
        t.setAttribute('aria-selected', String(on)); t.tabIndex = on ? 0 : -1;
        const panel = document.getElementById(t.getAttribute('aria-controls'));
        if (panel) { panel.classList.toggle('active', on); panel.hidden = !on; }
      });
    };
    tabs.forEach((t, i) => {
      t.addEventListener('click', () => activate(t));
      t.addEventListener('keydown', e => {
        const d = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 }[e.key];
        if (d) { e.preventDefault(); const n = tabs[(i + d + tabs.length) % tabs.length]; n.focus(); activate(n); }
      });
    });
  });

  /* ---------- Animated FAQ accordion ---------- */
  $$('details.faq').forEach(d => {
    const sum = $('summary', d), wrap = $('.ans-wrap', d);
    sum.addEventListener('click', e => {
      if (reduce) return;
      e.preventDefault();
      if (d.open) {
        wrap.style.height = wrap.scrollHeight + 'px';
        requestAnimationFrame(() => { wrap.style.height = '0px'; });
        wrap.addEventListener('transitionend', () => { d.open = false; wrap.style.height = ''; }, { once: true });
      } else {
        d.open = true; const h = wrap.scrollHeight; wrap.style.height = '0px';
        requestAnimationFrame(() => { wrap.style.height = h + 'px'; });
        wrap.addEventListener('transitionend', () => { wrap.style.height = ''; }, { once: true });
      }
    });
  });

  /* ---------- Parallax ---------- */
  const para = reduce ? [] : $$('[data-parallax]');
  function updateParallax() {
    para.forEach(el => {
      const r = el.parentElement.getBoundingClientRect();
      if (r.bottom < 0 || r.top > innerHeight) return;
      const speed = parseFloat(el.dataset.parallax) || 0.12;
      const off = (r.top + r.height / 2 - innerHeight / 2) * -speed;
      el.style.transform = `translate3d(0, ${off.toFixed(1)}px, 0)`;
    });
  }

  /* ---------- Hero particle network ---------- */
  const cv = $('.hero-canvas');
  if (cv && !reduce) {
    const ctx = cv.getContext('2d');
    let W, H, pts = [], running = true, mouse = { x: -999, y: -999 };
    const DPR = Math.min(devicePixelRatio || 1, 2);
    const resize = () => {
      W = cv.clientWidth; H = cv.clientHeight; cv.width = W * DPR; cv.height = H * DPR; ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
      const n = Math.min(90, Math.floor(W * H / 16000));
      pts = Array.from({ length: n }, () => ({ x: Math.random() * W, y: Math.random() * H, vx: (Math.random() - .5) * .35, vy: (Math.random() - .5) * .35, r: Math.random() * 1.6 + .6 }));
    };
    resize(); addEventListener('resize', resize);
    cv.parentElement.addEventListener('pointermove', e => { const r = cv.getBoundingClientRect(); mouse.x = e.clientX - r.left; mouse.y = e.clientY - r.top; });
    cv.parentElement.addEventListener('pointerleave', () => { mouse.x = mouse.y = -999; });
    new IntersectionObserver(([e]) => { running = e.isIntersecting; if (running) requestAnimationFrame(draw); }).observe(cv);
    function draw() {
      if (!running) return;
      ctx.clearRect(0, 0, W, H);
      for (const p of pts) {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > W) p.vx *= -1;
        if (p.y < 0 || p.y > H) p.vy *= -1;
        const dm = Math.hypot(p.x - mouse.x, p.y - mouse.y);
        if (dm < 140) { p.x += (p.x - mouse.x) / dm * .8; p.y += (p.y - mouse.y) / dm * .8; }
      }
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const a = pts[i], b = pts[j], d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < 130) { ctx.strokeStyle = `rgba(0,200,240,${(1 - d / 130) * .22})`; ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke(); }
        }
      }
      for (const p of pts) { ctx.fillStyle = 'rgba(120,210,255,.8)'; ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2); ctx.fill(); }
      requestAnimationFrame(draw);
    }
    requestAnimationFrame(draw);
  }

  /* ---------- Forms (contact, careers) → FormSubmit emails each submission, with attachments ---------- */
  const MAX_FILE = 5 * 1024 * 1024;
  $$('form[data-inbox]').forEach(form => {
    $$('.file-drop input[type=file]', form).forEach(inp => inp.addEventListener('change', () => {
      const f = inp.files[0], label = inp.parentElement;
      label.classList.toggle('has-file', !!f);
      label.querySelector('.fd-text').textContent = f ? `${f.name} (${(f.size / 1048576).toFixed(1)} MB)` : 'Choose a file or drag it here';
    }));
    form.addEventListener('submit', e => {
      let ok = true, msg = 'Please fill in the highlighted fields.';
      $$('[required]', form).forEach(f => {
        const bad = f.type === 'file' ? !f.files.length : (!f.value.trim() || (f.type === 'email' && !/^\S+@\S+\.\S+$/.test(f.value)));
        (f.closest('.file-drop') || f).classList.toggle('invalid', bad); if (bad) ok = false;
      });
      $$('input[type=file]', form).forEach(f => {
        const file = f.files[0]; if (!file) return;
        const extOk = (f.accept || '').split(',').some(x => file.name.toLowerCase().endsWith(x.trim()));
        if (file.size > MAX_FILE || !extOk) { ok = false; f.closest('.file-drop').classList.add('invalid'); msg = file.size > MAX_FILE ? 'The file is larger than 5 MB.' : 'Please upload a supported file type.'; }
      });
      if (!ok) { e.preventDefault(); toast(msg, false); return; }
      form.action = 'https://formsubmit.co/' + atob(form.dataset.inbox);
      const btn = form.querySelector('[type=submit]');
      btn.disabled = true; btn.innerHTML = 'Sending…';
    });
  });
  const thanks = $('[data-thanks]');
  if (thanks) {
    const type = new URLSearchParams(location.search).get('type');
    thanks.querySelectorAll('[data-for]').forEach(el => { el.hidden = el.dataset.for !== (type === 'careers' ? 'careers' : 'contact'); });
  }
  function toast(msg, good) {
    let t = $('.toast');
    if (!t) { t = document.createElement('div'); t.className = 'toast'; t.setAttribute('role', 'status'); document.body.appendChild(t); }
    t.innerHTML = `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color:${good ? 'var(--mint)' : '#ff5c7a'}">${good ? '<path d="M20 6 9 17l-5-5"/>' : '<circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01"/>'}</svg>`;
    t.appendChild(document.createTextNode(msg));
    t.classList.add('show'); clearTimeout(t._h); t._h = setTimeout(() => t.classList.remove('show'), 4200);
  }

  const yr = $('#year'); if (yr) yr.textContent = new Date().getFullYear();
  onScroll();
})();
