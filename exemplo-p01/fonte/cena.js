// Linha do tempo do motion P01 · Pulso (conceito).
// Tudo deriva de window.P01 (gerado pelo build.mjs): drop, duração de 1 batida (b) e os marcos de cada cena.
// A timeline é pausada e finita: o HyperFrames busca cada quadro pelo tempo.
(function () {
  const C = window.P01;
  const b = C.b, D = C.drop;
  const $ = s => document.querySelector(s);

  // Câmera: centraliza o ponto (sx, sy) do desenho do tênis com zoom k.
  // O SVG fica em left:30 top:700 e escala 1,02 (1000 → 1020 px).
  const foco = (sx, sy, k, dx = 0, dy = 0) => ({
    x: 540 - k * (30 + sx * 1.02) + dx,
    y: 960 - k * (700 + sy * 1.02) + dy,
    scale: k,
  });
  const BASE = foco(500, 255, 1);

  // immediateRender:false: um fromTo só aplica o estado "de" quando chega a vez dele
  const tl = gsap.timeline({ paused: true, defaults: { immediateRender: false } });

  // ---------- estado inicial (fora da timeline, para valer já no quadro 0) ----------
  gsap.set('#cam', { ...BASE, opacity: 1 });
  gsap.set('#cheio, #cotas, #sombra, #rastro, .etiqueta, .canto, .detalhe, .palavra, #nome, #breve, .legenda, #swoosh-traco', { opacity: 0 });
  gsap.set('#tracos', { opacity: 1, attr: { stroke: '#1C1C20' } });
  gsap.set('.tr', { strokeDasharray: 1, strokeDashoffset: 1 });
  gsap.set('#tenis', { rotation: 0, transformOrigin: '50% 70%' });

  // ---------- 0–2 s: o ponto neon pulsa e vira linha ----------
  tl.fromTo('#ponto', { opacity: 0, scale: 0.2 }, { opacity: 1, scale: 1, duration: 0.3, ease: 'back.out(3)' }, 0.15);
  // pulsa nas batidas da música antes do drop
  for (let t = D - Math.ceil((D - 0.45) / b) * b; t < 1.05; t += b) {
    tl.to('#ponto', { scale: 1.7, duration: 0.07, ease: 'power2.out' }, t)
      .to('#ponto', { scale: 1, duration: 0.25, ease: 'power2.in' }, t + 0.07);
  }
  tl.fromTo('#leg1', { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.3 }, 0.3)
    .to('#leg1', { opacity: 0, duration: 0.2 }, 2.0)
    // o ponto se estica e vira linha
    .set('#linha', { opacity: 1, scaleX: 0.022, y: 0 }, 1.1)
    .set('#ponto', { opacity: 0 }, 1.12)
    .to('#linha', { scaleX: 1, duration: 0.45, ease: 'expo.inOut' }, 1.1)
    // sobe até o topo e desce varrendo: atrás dela aparece o papel
    .to('#linha', { y: -957, duration: 0.18, ease: 'power2.in' }, 1.6)
    .to('#linha', { y: 963, duration: 0.3, ease: 'power2.inOut' }, 1.78)
    .fromTo('#papel', { height: 0 }, { height: 1920, duration: 0.3, ease: 'power2.inOut' }, 1.78)
    .set('#linha', { opacity: 0 }, 2.08)
    .to('#canto', { opacity: 0.7, duration: 0.2 }, 2.05);

  // ---------- 2–4,6 s: esboço a lápis, traço por traço ----------
  tl.to('.tr', { strokeDashoffset: 0, duration: 0.6, ease: 'power2.inOut', stagger: 0.19 }, 2.05);

  // ---------- 4,6–7 s: vira planta técnica ----------
  tl.fromTo('#azul', { height: 0 }, { height: 1920, duration: 0.28, ease: 'power3.inOut' }, 4.6)
    .to('#tracos', { attr: { stroke: '#ffffff' }, duration: 0.15 }, 4.72)
    .set('#canto', { opacity: 0 }, 4.75)
    .to('#canto2', { opacity: 0.85, duration: 0.2 }, 4.8)
    .to('#cotas', { opacity: 1, duration: 0.3 }, 4.95)
    .fromTo('#et1', { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.25 }, 5.15)
    .fromTo('#et2', { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.25 }, 5.55)
    .fromTo('#et3', { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.25 }, 5.95)
    .fromTo('#leg2', { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.3 }, 4.75)
    .to('#leg2', { opacity: 0, duration: 0.15 }, 6.85)
    .to('#cam', { ...foco(500, 255, 1.05), duration: 2.4, ease: 'none' }, 4.6);

  // ---------- 7 s: DROP — flash e o tênis pronto ----------
  tl.set('#papel, #azul, #tracos, #cotas, .etiqueta, #canto2', { opacity: 0 }, D)
    .set('#estudio, #cheio, #sombra', { opacity: 1 }, D)
    .set('#tenis', { rotation: 2 }, D)
    .fromTo('#flash', { opacity: 1 }, { opacity: 0, duration: 0.45, ease: 'power2.out' }, D)
    .fromTo('#cam', foco(500, 255, 1.18), { ...BASE, duration: 0.8, ease: 'expo.out' }, D)
    .fromTo('#palavra-fundo', { opacity: 0, scale: 1.12 }, { opacity: 1, scale: 1, duration: 0.9, ease: 'expo.out' }, D)
    .fromTo('#luz', { attr: { x: -300 } }, { attr: { x: 1250 }, duration: 1.1, ease: 'power2.inOut' }, D + 0.3)
    .to('#cam', { ...foco(500, 255, 1.07), duration: C.close1 - D - 0.8, ease: 'none' }, D + 0.8);

  // ---------- closes nos detalhes, um por batida forte ----------
  const close = (t, fim, el, sx, sy, k, dx = 0, dy = 0) => {
    tl.set('#palavra-fundo, .detalhe', { opacity: 0 }, t)
      .set('#cam', foco(sx, sy, k * 1.08, dx, dy), t)
      .to('#cam', { ...foco(sx, sy, k, dx, dy), duration: 0.35, ease: 'expo.out' }, t)
      .to('#cam', { ...foco(sx, sy, k * 1.05, dx, dy), duration: fim - t - 0.35, ease: 'none' }, t + 0.35)
      .fromTo(el, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.3, ease: 'expo.out' }, t);
  };
  close(C.close1, C.close2, '#det1', 820, 405, 2.4, 0, 420);  // espuma da entressola, no calcanhar
  close(C.close2, C.close3, '#det2', 470, 250, 2.2);  // malha + swoosh
  close(C.close3, C.palavras, '#det3', 890, 240, 2.2, 120, 380); // calcanhar alto

  // contador do peso: 0 → 198 g
  const peso = { v: 0 };
  const contador = $('#contador');
  tl.to(peso, { v: 198, duration: 2.5 * b, ease: 'power2.out', onUpdate: () => { contador.textContent = Math.round(peso.v); } }, C.close2);

  // ---------- MAIS. LEVE. MAIS. RÁPIDO. — o tênis cruza a tela ----------
  const P = C.palavras;
  tl.set('.detalhe', { opacity: 0 }, P)
    .set('#rastro', { opacity: 0.55, x: 520 }, P)
    .fromTo('#cam', foco(500, 255, 0.78, 1150, 330), { ...foco(500, 255, 0.78, -1150, 330), duration: 4 * b, ease: 'none' }, P);
  ['#pal1', '#pal2', '#pal3', '#pal4'].forEach((id, i) => {
    const t = P + i * b;
    if (i > 0) tl.set(['#pal1', '#pal2', '#pal3', '#pal4'][i - 1], { opacity: 0 }, t);
    tl.fromTo(id, { opacity: 1, scale: 1.3 }, { opacity: 1, scale: 1, duration: 0.25, ease: 'expo.out' }, t);
  });
  // LEVE. em fundo claro com letra preta; RÁPIDO. em neon
  tl.set('#claro', { opacity: 1 }, P + b).set('#pal2', { color: '#0A0A0B' }, P + b)
    .set('#claro', { opacity: 0 }, P + 2 * b)
    .set('#pal4', { color: '#D4FF3A' }, P + 3 * b);

  // ---------- silêncio: tela clara e a linha volta ----------
  const S = C.silencio;
  tl.set('.palavra, #rastro, #cam', { opacity: 0 }, S)
    .set('#estudio', { opacity: 0 }, S)
    .set('#claro', { opacity: 1 }, S)
    .set('#linha', { opacity: 1, y: 0, background: '#0A0A0B', boxShadow: 'none' }, S)
    .fromTo('#linha', { scaleX: 0 }, { scaleX: 1, duration: (C.final - S) * 0.9, ease: 'power3.out' }, S);

  // ---------- final: a linha vira o swoosh, nome e "em breve" ----------
  const F = C.final;
  tl.set('#linha', { opacity: 0 }, F)
    .set('#cam', { ...foco(500, 255, 1, 0, -130), opacity: 1 }, F)
    .set('#tenis', { rotation: 0 }, F)
    .set('#sola-cheia', { attr: { stroke: 'rgba(0,0,0,.10)', 'stroke-width': 2 } }, F)
    .set('#swoosh-cheio', { opacity: 0 }, F)
    .set('#swoosh-traco', { opacity: 1, strokeDasharray: 1, strokeDashoffset: 1 }, F)
    .fromTo('#flash', { opacity: 0.8 }, { opacity: 0, duration: 0.3 }, F)
    .to('#swoosh-traco', { strokeDashoffset: 0, duration: 0.8, ease: 'power2.inOut' }, F + 0.05)
    .to('#swoosh-cheio', { opacity: 1, duration: 0.25 }, F + 0.8)
    .to('#swoosh-traco', { opacity: 0, duration: 0.3 }, F + 1.0)
    .to('#cam', { ...foco(500, 255, 1.05, 0, -130), duration: C.total - F, ease: 'none' }, F)
    .fromTo('#nome', { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.6, ease: 'expo.out' }, F + 0.5)
    .fromTo('#breve', { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 0.4, ease: 'back.out(2)' }, F + 1.9)
    .set({}, {}, C.total); // fecha a timeline na duração exata

  window.__timelines = window.__timelines || {};
  window.__timelines['main'] = tl;
  tl.seek(0);
})();
