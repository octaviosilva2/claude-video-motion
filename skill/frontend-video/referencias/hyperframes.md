# HyperFrames: entrega de vídeo determinístico

**Gatilho literal:** a entrega **é** um arquivo de mídia renderizado (MP4/WebM/MOV/PNG).
Vídeo usado **dentro** de um site (hero, background, depoimento) não ativa esta rota — o
vídeo já existente é um asset web comum, e uma peça de UI animada que "parece vídeo" mas é
interativa é front-end web. Distinção de **formato da entrega, não de aparência**.

## Neste arquivo

- [1. O gate antes de qualquer composição](#1-o-gate-antes-de-qualquer-composição)
- [2. O que é HyperFrames e o que não é](#2-o-que-é-hyperframes-e-o-que-não-é)
- [3. Formato, resolução, fps e duração](#3-formato-resolução-fps-e-duração)
- [4. Conteúdo, assets, fontes, captions e direitos](#4-conteúdo-assets-fontes-captions-e-direitos)
- [5. Tempo determinístico, saída reproduzível e adapters](#5-tempo-determinístico-saída-reproduzível-e-adapters)
- [6. Acessibilidade e performance](#6-acessibilidade-e-performance)
- [7. Autorização de render — nenhuma execução automática](#7-autorização-de-render--nenhuma-execução-automática)

---

## 1. O gate antes de qualquer composição

| Pergunta | O que reprova |
|---|---|
| A entrega **é** um arquivo de mídia renderizado, não uma página web nem uma microinteração? | "parece vídeo" sem ser render de fato — isso é front-end web |
| Formato, fps, duração e resolução já foram decididos, ou o usuário ainda não respondeu? | ausência de especificação — HyperFrames não infere entrega a partir de "faz um vídeo" |
| Existe conteúdo real, asset e captions — ou a composição ainda depende de placeholder? | nada de conteúdo inventado para preencher espaço |
| Quem autoriza o render (Chrome + FFmpeg, ou o CLI da HyperFrames) já confirmou o custo? | ver seção 7 — geração de mídia nunca é decisão automática de sessão |

**Casos de teste desta ficha:**

- entrega MP4 determinística → esta rota;
- hero de site com vídeo já existente → asset web, nunca esta rota;
- microinteração web → front-end web, nunca esta rota.

## 2. O que é HyperFrames e o que não é

HyperFrames é um **framework/ferramenta de vídeo**: composição HTML/CSS/mídia +
animação buscável por tempo, capturada por Chrome e codificada deterministicamente em
MP4/WebM/MOV/PNG. Não é uma biblioteca de UI de site e não deve ser acionada para
microinteração web.

Arquitetura relevante: `packages/core` define composição, parser, compiler, lint,
runtime e adapters; `engine` faz captura seekable via Puppeteer/FFmpeg; `producer`
orquestra captura, codificação, áudio e distribuição; `cli` cria, valida, previsualiza,
renderiza e instala/atualiza skills; `player` é web component; `shader-transitions` usa
WebGL via `html2canvas`.

A composição raiz declara `data-composition-id`, dimensões e fps/duração; clipes usam
`class="clip"` + atributos `data-*`. As APIs de busca por tempo expõem `hf-seek`,
`window.__hfThreeTime` (Three) e `window.__hfLottie` (players Lottie); uma timeline
GSAP pausada é registrada em `window.__timelines[id]`.

O fluxo de intenção passa por skills do próprio HyperFrames que **orientam, não são API
executável**: `/hyperframes` roteia por tipo de peça; `hyperframes-core` fecha
`BRIEF.md`/`SCRIPT.md` opcional/storyboard e o contrato de composição;
`hyperframes-animation` escolhe 2–4 regras de movimento, blueprint quando necessário, e o
adapter por runtime; `hyperframes-cli` aplica lint/check/snapshot/preview antes de qualquer
render.

**Fonte:** auditoria do repositório `heygen-com/hyperframes`, commit
`af1cb1c10da33bade100db8233435c7591b7c0bc` (ver `SKILL.md`, "Reprodutibilidade").

## 3. Formato, resolução, fps e duração

Nenhum desses quatro campos tem default — cada um é decisão do projeto, registrada antes
da composição:

- **Saída:** MP4, WebM, MOV ou sequência PNG — decidido pelo destino final da peça
  (rede social, apresentação, e-mail).
- **Codec/container:** quando decidido, registrado junto com a saída — o `producer`
  orquestra codificação via FFmpeg, mas não escolhe codec por conta própria.
- **Resolução e fps:** declarados na composição raiz (`data-composition-id` +
  dimensões + fps/duração) antes do primeiro clipe — mudar depois obriga a
  reconferir todo asset e timing já produzido.
- **Duração:** a composição inteira e cada clipe (`data-duration` explícita em cenas
  Three, por exemplo) têm duração fixa e conhecida — HyperFrames é busca
  determinística por tempo, não playback ao vivo.

## 4. Conteúdo, assets, fontes, captions e direitos

Aplica-se a régua de `assets.md` inteira — inventariar antes de gerar, registrar origem e
licença, otimizar antes de qualquer commit. Dois pontos específicos de vídeo:

- **Captions:** entrega de vídeo não tem alternativa textual embutida como uma página
  web tem — captions, contraste e legibilidade são parte do critério de aceite, não um
  extra (seção 6).
- **Direitos de fonte e asset:** cada fonte, imagem, áudio e clipe usado na composição
  segue a verificação de origem e licença de `assets.md` — dado sem fonte entra marcado
  `[NÃO CONFIRMADO]`, nunca suavizado.

## 5. Tempo determinístico, saída reproduzível e adapters

A timeline é determinística porque cada frame deriva de tempo explícito, não de relógio
vivo. **Isso não garante arquivo idêntico só por usar o mesmo commit.** Se igualdade de
saída for critério, fixe também versões de HyperFrames, Chrome e FFmpeg, fontes e assets
locais, codec/flags, resolução, fps, duração e ambiente de captura; registre tudo no
handoff. Sem esse lock, prometa composição buscável por tempo, não vídeo byte a byte igual.

Os adapters de runtime só entram **por necessidade da cena**, nunca por padrão:

| Adapter | Quando usar | Regra específica do adapter |
|---|---|---|
| CSS/WAAPI | motivo simples, finito, com `fill-mode` | busca via Animation/WAAPI ou fallback de atraso negativo quando a API não expõe seek direto |
| GSAP | coreografia que excede CSS | timeline **sempre pausada e finita** — sem relógio nem evento vivo para o estado de render; o lint do próprio HyperFrames detecta hazards de callback, medição, `transform`/CSS fora de hora e frame zero mal definido |
| Lottie/dotLottie | asset vetorial licenciado | busca por `goToAndStop`/frame; o runtime pode inferir duração; pode falhar por efeito do After Effects não exportável ou registro assíncrono do player |
| Three.js | cena 3D dentro do vídeo | recebe tempo por `hf-seek`, deve renderizar **em função dele**, `AnimationMixer.setTime` (nunca relógio próprio); tamanho e pixel ratio fixados (`data-duration` explícita); o adapter aguarda o `LoadingManager` antes de publicar "pronto" — sem isso, o frame captura antes do asset carregar |

Escolher um adapter sem que a cena exija aquele runtime é usar biblioteca maior que a
função declarada — o menor mecanismo que satisfaz a cena vence.

**Armadilhas observadas na prática** (HyperFrames 0.8.105 com GSAP 3.15.0; reconfira na sua
versão):

- vários `fromTo` no mesmo elemento fazem o quadro 0 nascer no último estado — use
  `immediateRender: false`;
- o `init` do HyperFrames grava `CLAUDE.md` e `AGENTS.md` do fabricante na pasta do vídeo —
  apague se atrapalhar as suas instruções;
- a telemetria vem ligada por padrão — desligue com `hyperframes telemetry disable`.

## 6. Acessibilidade e performance

- **O destino é vídeo, não web** — teclado e foco de página não se aplicam. O critério
  de acessibilidade aqui é: captions, contraste, legibilidade e idioma corretos, e
  alternativa textual da peça (descrição, roteiro) disponível fora do vídeo. O `check`
  do próprio HyperFrames cobre contraste/layout/motion como gate técnico, mas **não
  certifica compreensão nem substitui captions revisadas por humano**.
- **Browser e captura:** a renderização exige Chrome (ou Chrome headless) e FFmpeg.
  Captura distribuída exige Chrome determinístico com GPU por software, recusa
  hardware GPU em ambiente serverless (ex.: Lambda), não suporta HDR distribuído e usa
  GOP fechado para concatenação — restrições da própria ferramenta.
- **GPU, memória e disposal em cenas Three/WebGL:** risco elevado de VRAM, textura,
  contexto perdido e `html2canvas` divergente do navegador real em transições shader.
  Assets devem terminar de carregar antes de qualquer busca por tempo, e o código da
  cena precisa liberar renderer, geometrias, materiais e listeners quando a
  composição ou o preview é desmontado — **o framework não torna `dispose` automático
  para código Three autoral**.
- **Performance:** depende de `transform`/`opacity`, tamanho e pixel ratio fixos,
  assets locais/pré-carregados e teste no output real — não em preview de baixa
  fidelidade.

## 7. Autorização de render — nenhuma execução automática

A sessão **nunca** executa Chrome, Chrome headless, FFmpeg, o CLI de render da HyperFrames
ou qualquer serviço de geração de mídia com custo sem autorização explícita:

- quando a composição estiver pronta para render, a sessão **nomeia** o comando, o
  custo esperado (tempo de captura, dependências, eventual API paga) e **para ali**;
- instalar Chrome, FFmpeg, Puppeteer, Node ou qualquer dependência é decisão do
  usuário, nunca automática;
- nenhum vídeo é considerado "pronto" sem essa autorização explícita ter ocorrido
  primeiro.

Sequência segura antes do render (cada comando só com o OK do usuário):

```bash
npx hyperframes lint .
npx hyperframes check
npx hyperframes snapshot . --at 0,1,2.7,4.8,7 -o rascunho
```

Só depois disso, e com autorização, o render:

```bash
npx hyperframes render --fps 60 --quality high -o saida/video.mp4
```
