// Desenho do tênis "Pulso" (conceito), vista lateral, bico para a esquerda.
// Proporções estudadas em tênis de corrida reais (Pegasus 42 / Vomero Plus); traço 100% autoral, sem imagem da marca.
// Visual aprovado na página tenis-teste.html.
(function () {
  const D = {
    // entressola: calcanhar alto e arredondado, bico levantado (rocker)
    sola: 'M70 350 C48 354 40 368 52 384 C90 422 170 446 260 448 L820 450 C900 450 950 438 966 412 C980 388 980 340 968 310 C900 316 820 322 740 330 C600 344 420 356 260 358 C180 358 120 354 70 350 Z',
    solado: 'M52 384 C90 422 170 446 260 448 L820 450 C900 450 950 438 966 412 L970 424 C952 452 902 464 820 464 L260 462 C166 460 86 432 50 396 Z',
    faixa: 'M170 420 C360 432 640 434 900 420 C920 418 930 410 922 406 C660 416 360 414 180 408 C166 408 160 418 170 420 Z',
    sulco: 'M90 380 C300 390 620 388 950 350',
    juncao: 'M70 350 C120 354 180 358 260 358 C420 356 600 344 740 330 C820 322 900 316 968 310',
    // cabedal: bico arredondado, peito do pé alto, gola acolchoada, calcanhar com aba
    cabedal: 'M70 350 C40 340 36 310 70 296 C120 274 200 262 280 250 C380 232 520 180 660 122 C676 116 692 114 704 118 C700 98 712 84 728 88 C744 92 748 108 740 124 C776 146 812 156 840 146 C880 130 908 92 926 66 C934 56 948 58 950 70 C962 130 976 230 968 310 C900 316 820 322 740 330 C600 344 420 356 260 358 C180 358 120 354 70 350 Z',
    calcanhar: 'M800 326 C786 250 800 186 840 146 C880 130 908 92 926 66 C934 56 948 58 950 70 C962 130 976 230 968 310 C910 316 850 322 800 326 Z',
    biqueira: 'M70 350 C40 340 36 310 70 296 C100 284 140 276 180 270 C160 296 158 330 170 356 C130 354 100 352 70 350 Z',
    ilhoses: 'M300 248 C400 228 530 176 664 120 L684 150 C556 206 424 262 320 282 Z',
    lingua: 'M296 240 C398 220 528 168 662 112 C690 100 714 90 732 88 L736 104 C716 110 694 120 668 130 C536 186 404 238 304 258 Z',
    // swoosh: curva perto da frente, ponta subindo em direção ao calcanhar
    swoosh: 'M330 292 C292 312 292 348 344 346 C396 344 470 322 772 220 C520 298 432 318 392 316 C356 314 338 306 330 292 Z',
    puxador: 'M940 64 C944 36 962 32 970 44 C976 54 968 66 958 70',
    costura: 'M744 130 C780 154 814 162 844 152 C882 136 906 104 922 82',
    gola: 'M742 126 C778 150 812 158 842 148 C878 134 902 100 918 78',
  };
  // Cadarços: barras curtas cruzando o peito do pé, do meio do pé até o tornozelo
  const laces = [[320, 246], [384, 230], [448, 208], [512, 184], [576, 156], [636, 130]];
  D['cadarco-tr'] = laces.map(([x, y]) => `M${x} ${y} l-24 -18`).join(' ');

  for (const [k, d] of Object.entries(D)) document.querySelectorAll('.d-' + k).forEach(p => p.setAttribute('d', d));
  const g = document.querySelector('.cadarcos');
  laces.forEach(([x, y]) => {
    const p = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    p.setAttribute('d', `M${x} ${y} l-24 -18`);
    g.appendChild(p);
  });
  // pathLength=1 deixa o "desenhar o traço" igual para qualquer contorno
  document.querySelectorAll('.tr, #swoosh-traco').forEach(p => p.setAttribute('pathLength', '1'));
})();
