(() => {
  'use strict';
  const frame = document.querySelector('#frame');
  const visual = document.querySelector('#visual');
  const art = document.querySelector('#art');
  const water = document.querySelector('#water');
  const glass = document.querySelector('#glass');
  const wctx = water.getContext('2d', { alpha: true });
  const gctx = glass.getContext('2d', { alpha: true });
  const buffer = document.createElement('canvas');
  const bctx = buffer.getContext('2d', { alpha: false });
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  let paused = reduce, width = 0, height = 0, scale = 1, offsetX = 0, offsetY = 0;
  let elapsed = 0, last = 0;
  let seed = 191928;
  const rand = () => { seed = (Math.imul(seed, 1664525) + 1013904223) | 0; return (seed >>> 0) / 4294967296; };
  const channels = [35, 133, 349, 646, 756, 1004, 1138, 1316, 1490, 1580];
  const drops = Array.from({ length: 32 }, (_, i) => ({
    sourceX: channels[i % channels.length] + (rand() - .5) * (i < 12 ? 7 : 38),
    y: rand(), velocity: 27 + rand() * 65, radius: 2.4 + rand() * 3.7,
    trail: 24 + rand() * 82, phase: rand() * Math.PI * 2
  }));
  const fineRain = Array.from({ length: 64 }, () => ({ x: rand(), y: rand(), speed: 28 + rand() * 56, size: 3 + rand() * 7, alpha: .035 + rand() * .09 }));
  const toX = x => offsetX + x * scale;
  const toY = y => offsetY + y * scale;

  function resize() {
    if (!art.naturalWidth) return;
    const box = frame.getBoundingClientRect();
    const resolution = Math.min(1.2, 960 / box.width);
    width = Math.round(box.width * resolution);
    height = Math.round(box.height * resolution);
    for (const canvas of [water, glass]) { canvas.width = width; canvas.height = height; }
    buffer.width = width; buffer.height = height;
    scale = Math.max(width / art.naturalWidth, height / art.naturalHeight);
    offsetX = (width - art.naturalWidth * scale) * (box.width < 700 ? .78 : .5);
    offsetY = (height - art.naturalHeight * scale) * .46;
    bctx.drawImage(art, offsetX, offsetY, art.naturalWidth * scale, art.naturalHeight * scale);
    draw();
  }

  function waterShape(ctx) {
    ctx.beginPath();
    ctx.moveTo(toX(600), toY(475));
    ctx.bezierCurveTo(toX(850), toY(442), toX(1040), toY(453), toX(1210), toY(420));
    ctx.lineTo(toX(1672), toY(428));
    ctx.lineTo(toX(1672), toY(860));
    ctx.lineTo(toX(1410), toY(735));
    ctx.lineTo(toX(1210), toY(870));
    ctx.lineTo(toX(810), toY(780));
    ctx.closePath();
    ctx.clip();
  }

  function drawWater() {
    wctx.clearRect(0, 0, width, height);
    wctx.save();
    waterShape(wctx);
    const top = Math.max(0, Math.floor(toY(415)));
    const bottom = Math.min(height, Math.ceil(toY(870)));
    const start = Math.max(0, Math.floor(toX(550)));
    const tileW = 22, tileH = 9;
    wctx.globalAlpha = .76;
    for (let y = top; y < bottom; y += tileH) {
      for (let x = start; x < width; x += tileW) {
        const sw = Math.min(tileW, width - x), sh = Math.min(tileH, height - y);
        const dx = Math.sin(y * .041 + elapsed * 1.14) * 1.35 + Math.sin(x * .026 - elapsed * .58) * 1.65;
        const dy = Math.cos(x * .024 + y * .011 + elapsed * .88) * 1.65 + Math.sin(x * .038 - elapsed * 1.06) * 1.05;
        wctx.drawImage(buffer, x, y, sw, sh, x + dx, y + dy, sw + 1.6, sh + 1.6);
      }
    }
    wctx.globalAlpha = 1;
    for (let i = 0; i < 7; i++) {
      const x = toX(990 + (i * 89) % 540);
      const y = toY(515 + (i * 39) % 225);
      const phase = (elapsed * .36 + i * .17) % 1;
      wctx.beginPath();
      wctx.ellipse(x, y, 5 + phase * 32, 1.8 + phase * 5.5, 0, .2, Math.PI * 1.78);
      wctx.strokeStyle = `rgba(244,218,179,${(1 - phase) * .14})`;
      wctx.lineWidth = .65;
      wctx.stroke();
    }
    wctx.restore();
  }

  function drawDrop(drop, delta) {
    if (delta) {
      const pulse = .62 + .38 * Math.sin(elapsed * 1.7 + drop.phase) ** 2;
      drop.y += delta * drop.velocity * pulse / height;
      if (drop.y > 1.1) { drop.y = -.12 - rand() * .4; drop.velocity = 27 + rand() * 65; }
    }
    const x = toX(drop.sourceX) + Math.sin(elapsed * .52 + drop.phase) * .6;
    const y = drop.y * height;
    if (x < -8 || x > width + 8 || y < -15 || y > height + 15) return;
    const r = drop.radius * Math.min(1.1, scale + .28);
    const trail = drop.trail * Math.min(1, scale + .25);
    const grad = gctx.createLinearGradient(x, y - trail, x, y);
    grad.addColorStop(0, 'rgba(221,236,235,0)');
    grad.addColorStop(.7, 'rgba(205,226,226,.13)');
    grad.addColorStop(1, 'rgba(230,243,239,.42)');
    gctx.strokeStyle = grad;
    gctx.lineWidth = Math.max(.6, r * .33);
    gctx.beginPath();
    gctx.moveTo(x, y - trail);
    gctx.bezierCurveTo(x - 1.2, y - trail * .47, x + 1.3, y - 7, x, y);
    gctx.stroke();

    gctx.save();
    gctx.beginPath();
    gctx.ellipse(x, y, r, r * 1.45, 0, 0, Math.PI * 2);
    gctx.clip();
    const sx = Math.max(0, Math.min(width - 2 * r - 3, x - r + 2.1));
    const sy = Math.max(0, Math.min(height - 3 * r - 3, y - r * 1.45 - 1.5));
    gctx.drawImage(buffer, sx, sy, r * 2 + 3, r * 3 + 3, x - r, y - r * 1.45, r * 2, r * 2.9);
    gctx.fillStyle = 'rgba(13,29,35,.2)';
    gctx.fillRect(x - r, y - r * 1.45, r * 2, r * 2.9);
    gctx.restore();
    gctx.strokeStyle = 'rgba(233,246,243,.59)';
    gctx.lineWidth = .8;
    gctx.beginPath();
    gctx.ellipse(x, y, r, r * 1.45, 0, Math.PI * .85, Math.PI * 1.78);
    gctx.stroke();
    gctx.fillStyle = 'rgba(255,255,248,.57)';
    gctx.fillRect(x - r * .4, y - r * .62, .7, Math.max(.8, r * .48));
  }

  function drawGlass(delta) {
    gctx.clearRect(0, 0, width, height);
    for (const line of fineRain) {
      if (delta) line.y = (line.y + delta * line.speed / height) % 1.04;
      const x = line.x * width, y = line.y * height;
      gctx.strokeStyle = `rgba(228,237,234,${line.alpha})`;
      gctx.lineWidth = .55;
      gctx.beginPath();
      gctx.moveTo(x, y);
      gctx.lineTo(x - .9, y + line.size);
      gctx.stroke();
    }
    for (const drop of drops) drawDrop(drop, delta);
  }

  function draw(delta = 0) { if (width && height) { drawWater(); drawGlass(delta); } }
  function tick(now) {
    if (!paused && document.visibilityState === 'visible' && now - last >= 32) {
      const delta = Math.min(.05, (now - last || 32) / 1000);
      elapsed += delta;
      last = now;
      draw(delta);
    }
    requestAnimationFrame(tick);
  }

  art.addEventListener('load', resize, { once: true });
  if (art.complete && art.naturalWidth) resize();
  addEventListener('resize', resize, { passive: true });
  if (!reduce) requestAnimationFrame(tick);
  if (!reduce && window.gsap) {
    gsap.set(visual, { scale: 1.055 });
    gsap.set('.copy,.topbar,.bottom', { y: 20, autoAlpha: 0 });
    gsap.timeline({ defaults: { ease: 'power3.out' } })
      .to(visual, { scale: 1, duration: 2.3 }, 0)
      .to('.copy', { y: 0, autoAlpha: 1, duration: 1.1 }, .24)
      .to('.topbar,.bottom', { y: 0, autoAlpha: 1, duration: .75, stagger: .12 }, .6);
    const breathe = gsap.to(visual, { scale: 1.014, duration: 18, repeat: -1, yoyo: true, ease: 'sine.inOut', delay: 2.3 });
    document.querySelector('#pause').addEventListener('click', event => {
      paused = !paused;
      breathe.paused(paused);
      event.currentTarget.textContent = paused ? 'Resume motion' : 'Pause motion';
      event.currentTarget.setAttribute('aria-pressed', String(paused));
      if (!paused) last = performance.now();
    });
  } else {
    const button = document.querySelector('#pause');
    button.textContent = 'Reduced motion'; button.disabled = true;
  }
})();
