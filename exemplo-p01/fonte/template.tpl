<!doctype html>
<!-- GERADO por build.mjs a partir de fonte/template.tpl. Edite o template, não este arquivo. -->
<html lang="pt-BR" data-resolution="portrait">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=1080, height=1920" />
  <title>P01 · Pulso (conceito)</title>
  <link href="https://fonts.googleapis.com/css2?family=Anton&family=JetBrains+Mono:wght@500;700&display=block" rel="stylesheet">
  <link rel="stylesheet" href="fonte/cena.css" />
  <script src="node_modules/gsap/dist/gsap.min.js"></script>
</head>
<body>
  <div data-hf-id="hf-oxn4" id="root" data-composition-id="main" data-start="0" data-duration="{{TOTAL}}" data-width="1080" data-height="1920">

    <!-- Uma cena só: tudo dentro dela é animado pela timeline -->
    <div data-hf-id="hf-xi9a" id="cena">

      <!-- Fundos -->
      <div data-hf-id="hf-quog" class="camada" id="fundo-preto"></div>
      <div data-hf-id="hf-1935" class="camada cortina" id="papel"><div data-hf-id="hf-vvt7" class="interno papel"><div data-hf-id="hf-6csk" class="grade grade-azul-fina"></div></div></div>
      <div data-hf-id="hf-r65l" class="camada cortina-baixo" id="azul"><div data-hf-id="hf-xlkf" class="interno azul"><div data-hf-id="hf-pfmg" class="grade grade-branca"></div></div></div>
      <div data-hf-id="hf-p6cs" class="camada" id="estudio"></div>
      <div data-hf-id="hf-9mto" class="camada" id="palavra-fundo">PULSO</div>
      <div data-hf-id="hf-a4us" class="camada" id="claro"></div>

      <!-- Linha neon da abertura -->
      <div data-hf-id="hf-vrpv" id="ponto"></div>
      <div data-hf-id="hf-35if" id="linha"></div>

      <!-- Câmera: o tênis inteiro anda, aproxima e cruza a tela dentro dela -->
      <div data-hf-id="hf-ftaq" id="cam">
        <div data-hf-id="hf-b8ju" id="rastro"></div>
        <svg data-hf-id="hf-y6pu" id="tenis" viewBox="0 0 1000 520">
          <defs data-hf-id="hf-mh0t">
            <linearGradient data-hf-id="hf-oxj1" id="g-sola" x1="0" y1="0" x2="0" y2="1">
              <stop data-hf-id="hf-10d0" offset="0" stop-color="#ffffff"/><stop data-hf-id="hf-095v" offset=".6" stop-color="#ececE8"/><stop data-hf-id="hf-cdmu" offset="1" stop-color="#bdbdb7"/>
            </linearGradient>
            <linearGradient data-hf-id="hf-z26y" id="g-cabedal" x1="0" y1="0" x2="0" y2="1">
              <stop data-hf-id="hf-p759" offset="0" stop-color="#5a5a63"/><stop data-hf-id="hf-ennu" offset=".45" stop-color="#34343b"/><stop data-hf-id="hf-6jew" offset="1" stop-color="#1c1c21"/>
            </linearGradient>
            <linearGradient data-hf-id="hf-s6ho" id="g-swoosh" x1="0" y1="1" x2="1" y2="0">
              <stop data-hf-id="hf-khmn" offset="0" stop-color="#c4f224"/><stop data-hf-id="hf-8wd3" offset="1" stop-color="#ecff7a"/>
            </linearGradient>
            <linearGradient data-hf-id="hf-m8zd" id="g-faixa" x1="0" y1="0" x2="1" y2="0">
              <stop data-hf-id="hf-ra4u" offset="0" stop-color="#9fd010"/><stop data-hf-id="hf-ha2h" offset=".5" stop-color="#D4FF3A"/><stop data-hf-id="hf-ygml" offset="1" stop-color="#9fd010"/>
            </linearGradient>
            <linearGradient data-hf-id="hf-rs6x" id="g-luz" x1="0" y1="0" x2="1" y2="0">
              <stop data-hf-id="hf-2gjj" offset="0" stop-color="#fff" stop-opacity="0"/><stop data-hf-id="hf-uxbp" offset=".5" stop-color="#fff" stop-opacity=".45"/><stop data-hf-id="hf-9zy0" offset="1" stop-color="#fff" stop-opacity="0"/>
            </linearGradient>
            <pattern data-hf-id="hf-9y1t" id="malha" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(30)">
              <circle data-hf-id="hf-knwh" cx="2" cy="2" r="1.2" fill="#fff" fill-opacity=".1"/>
            </pattern>
            <clipPath data-hf-id="hf-wpem" id="clip-cabedal"><path data-hf-id="hf-d297" class="d-cabedal"/></clipPath>
            <clipPath data-hf-id="hf-r1ch" id="clip-tenis"><path data-hf-id="hf-4cy3" class="d-cabedal"/><path data-hf-id="hf-2cck" class="d-sola"/></clipPath>
            <radialGradient data-hf-id="hf-edqb" id="g-sombra"><stop data-hf-id="hf-ipv8" offset="0" stop-color="#000" stop-opacity=".65"/><stop data-hf-id="hf-slqe" offset="1" stop-color="#000" stop-opacity="0"/></radialGradient>
          </defs>

          <ellipse data-hf-id="hf-et0s" id="sombra" cx="500" cy="464" rx="480" ry="24" fill="url(#g-sombra)"/>

          <!-- Tênis pronto -->
          <g data-hf-id="hf-xu0n" id="cheio">
            <path data-hf-id="hf-mki1" class="d-solado" fill="#141416"/>
            <path data-hf-id="hf-glac" class="d-sola" id="sola-cheia" fill="url(#g-sola)"/>
            <path data-hf-id="hf-w7do" class="d-faixa" fill="url(#g-faixa)"/>
            <path data-hf-id="hf-u6ck" class="d-sulco" fill="none" stroke="#c8c8c2" stroke-width="2"/>
            <path data-hf-id="hf-00lk" class="d-lingua" fill="#6a6a73"/>
            <path data-hf-id="hf-9ep4" class="d-cabedal" fill="url(#g-cabedal)"/>
            <path data-hf-id="hf-hcbp" class="d-cabedal" fill="none" stroke="#fff" stroke-opacity=".22" stroke-width="2.5"/>
            <path data-hf-id="hf-aiq2" class="d-juncao" fill="none" stroke="#000" stroke-opacity=".35" stroke-width="6"/>
            <g data-hf-id="hf-hjv0" clip-path="url(#clip-cabedal)">
              <rect data-hf-id="hf-7xjf" width="1000" height="520" fill="url(#malha)"/>
              <path data-hf-id="hf-2t38" class="d-calcanhar" fill="#141418"/>
              <path data-hf-id="hf-ihdh" class="d-biqueira" fill="#26262c"/>
              <path data-hf-id="hf-8qnc" class="d-ilhoses" fill="#141418"/>
            </g>
            <path data-hf-id="hf-r4vb" class="d-costura" fill="none" stroke="#55555c" stroke-width="2" stroke-dasharray="6 6"/>
            <path data-hf-id="hf-nyq3" class="d-gola" fill="none" stroke="#2c2c31" stroke-width="10" stroke-linecap="round"/>
            <path data-hf-id="hf-8m7p" class="d-puxador" fill="none" stroke="#D4FF3A" stroke-width="7" stroke-linecap="round"/>
            <path data-hf-id="hf-x6ng" class="d-swoosh" id="swoosh-cheio" fill="url(#g-swoosh)"/>
            <path data-hf-id="hf-2mn3" class="d-swoosh" id="swoosh-traco" fill="none" stroke="#C4F224" stroke-width="5" stroke-linejoin="round"/>
            <g data-hf-id="hf-45sb" class="cadarcos" fill="none" stroke="#efefea" stroke-width="9" stroke-linecap="round"></g>
            <g data-hf-id="hf-j4lp" clip-path="url(#clip-tenis)">
              <rect data-hf-id="hf-c0v5" id="luz" x="-300" y="40" width="200" height="460" fill="url(#g-luz)" transform="skewX(-18)"/>
            </g>
          </g>

          <!-- Esboço e planta: os mesmos contornos, desenhados linha a linha -->
          <g data-hf-id="hf-0643" id="tracos" fill="none" stroke="#1C1C20" stroke-width="4" stroke-linecap="round" stroke-linejoin="round">
            <path data-hf-id="hf-bb1y" class="tr d-sola"/>
            <path data-hf-id="hf-2mh9" class="tr d-solado"/>
            <path data-hf-id="hf-ezau" class="tr d-faixa"/>
            <path data-hf-id="hf-x8hz" class="tr d-lingua"/>
            <path data-hf-id="hf-3of5" class="tr d-cabedal"/>
            <path data-hf-id="hf-n3vo" class="tr d-calcanhar"/>
            <path data-hf-id="hf-6bzx" class="tr d-biqueira"/>
            <path data-hf-id="hf-xyto" class="tr d-ilhoses"/>
            <path data-hf-id="hf-2dwk" class="tr d-swoosh"/>
            <path data-hf-id="hf-2yjn" class="tr d-cadarco-tr"/>
            <path data-hf-id="hf-jq6c" class="tr d-puxador"/>
          </g>

          <!-- Cotas da planta técnica -->
          <g data-hf-id="hf-chtt" id="cotas" stroke="#fff" stroke-width="2" fill="none">
            <path data-hf-id="hf-r3jd" stroke-dasharray="8 8" d="M40 492 H976"/><path data-hf-id="hf-hato" d="M40 480 v24 M976 480 v24"/>
            <path data-hf-id="hf-whlx" stroke-dasharray="8 8" d="M998 310 V450"/><path data-hf-id="hf-s2wl" d="M986 310 h24 M986 450 h24"/>
            <path data-hf-id="hf-xg8y" stroke-dasharray="6 6" d="M772 220 L850 140"/><circle data-hf-id="hf-hudd" cx="772" cy="220" r="9"/>
          </g>
        </svg>
      </div>

      <!-- Textos da planta -->
      <div data-hf-id="hf-odz8" class="etiqueta" id="et1" style="left:380px;top:1250px">COMPRIMENTO · <b data-hf-id="hf-poby">287 MM</b></div>
      <div data-hf-id="hf-rqsd" class="etiqueta" id="et2" style="left:800px;top:1175px">STACK · <b data-hf-id="hf-abzh">40 MM</b></div>
      <div data-hf-id="hf-bmp5" class="etiqueta" id="et3" style="left:790px;top:740px">SWOOSH<br data-hf-id="hf-x5px"><b data-hf-id="hf-jz1r">22°</b></div>
      <div data-hf-id="hf-dl5j" class="canto" id="canto">ESBOÇO · 01</div>
      <div data-hf-id="hf-uvrp" class="canto" id="canto2" style="color:#fff">PLANTA · 02</div>

      <!-- Closes nos detalhes -->
      <div data-hf-id="hf-layz" class="detalhe" id="det1"><span data-hf-id="hf-4pgj" class="olho">01 · ENTRESSOLA</span><span data-hf-id="hf-58ob" class="grande">ESPUMA<br data-hf-id="hf-rsrt">REATIVA</span></div>
      <div data-hf-id="hf-afhc" class="detalhe" id="det2"><span data-hf-id="hf-syyl" class="olho">02 · PESO</span><span data-hf-id="hf-xbpz" class="grande"><span data-hf-id="hf-4j8i" id="contador">0</span> G</span></div>
      <div data-hf-id="hf-b755" class="detalhe" id="det3"><span data-hf-id="hf-t65q" class="olho">03 · CALCANHAR</span><span data-hf-id="hf-ey9d" class="grande">DROP<br data-hf-id="hf-szow">8 MM</span></div>

      <!-- Palavras no ritmo -->
      <div data-hf-id="hf-8csl" class="palavra" id="pal1">MAIS.</div>
      <div data-hf-id="hf-tghs" class="palavra" id="pal2">LEVE.</div>
      <div data-hf-id="hf-ctj3" class="palavra" id="pal3">MAIS.</div>
      <div data-hf-id="hf-j2a9" class="palavra" id="pal4">RÁPIDO.</div>

      <!-- Final -->
      <div data-hf-id="hf-az9s" id="nome">PULSO</div>
      <div data-hf-id="hf-grj9" id="breve">EM BREVE</div>

      <!-- Legendas da narração (as outras falas já aparecem escritas na tela) -->
      <div data-hf-id="hf-h5df" class="legenda" id="leg1">Tudo começa com uma linha.</div>
      <div data-hf-id="hf-aeo1" class="legenda" id="leg2">Pensado para cada passo.</div>

      <!-- Acabamento -->
      <div data-hf-id="hf-exr1" class="camada" id="flash"></div>
      <svg data-hf-id="hf-ngrd" class="camada" id="grao" viewBox="0 0 1080 1920" preserveAspectRatio="none">
        <filter data-hf-id="hf-vvcr" id="ruido"><feTurbulence data-hf-id="hf-mnla" type="fractalNoise" baseFrequency=".9" numOctaves="2" seed="7"/><feColorMatrix data-hf-id="hf-elf8" values="0 0 0 0 .5  0 0 0 0 .5  0 0 0 0 .5  0 0 0 .9 0"/></filter>
        <rect data-hf-id="hf-xtvp" width="1080" height="1920" filter="url(#ruido)"/>
      </svg>
    </div>

{{AUDIO}}
  </div>

  <script>window.P01 = {{CONFIG}};</script>
  <script src="fonte/tenis.js"></script>
  <script src="fonte/cena.js"></script>
</body>
</html>
