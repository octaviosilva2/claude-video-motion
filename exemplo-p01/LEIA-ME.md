# Exemplo P01 · motion "Pulso" (conceito)

Anúncio de lançamento de um tênis inventado, com 20 s, 1080×1920 e 60 fps, feito 100% em
código (HTML/CSS + GSAP renderizado pelo HyperFrames). É uma **demonstração**: o produto e a
marca são fictícios.

## O que tem aqui

| Arquivo | O que é |
|---|---|
| `tenis-teste.html` | O tênis, nas 3 fases (esboço, planta, pronto). Abre no navegador |
| `fonte/` | Composição: `template.tpl` (cenas), `cena.css`, `cena.js` (linha do tempo), `tenis.js` (desenho), `versoes.mjs` (BPM e drop de cada música) |
| `build.mjs` | Gera o `index.html` de uma versão a partir da `fonte/` |
| `package.json` | Versões fixadas: `hyperframes` 0.8.166 e `gsap` 3.12.5 |
| `audio/` | **Vazia neste repositório.** Veja abaixo |

Para mudar uma cena, edite os arquivos de `fonte/`, nunca o `index.html`, que é gerado.

## O que falta para renderizar: os áudios

Por licença, os áudios não vão para o GitHub. O `build.mjs` espera estes arquivos:

```
audio/musica-1-phonk-aggressive-drift-night.mp3
audio/musica-2-dark-trap-beat.mp3
audio/sfx/{whoosh-curto,whoosh-grande,bip,lapis,impacto,riser,braam}.mp3
audio/voz/g1-01-linha.wav ... g1-06-breve.wav   (narração, 6 frases)
```

- **Músicas e efeitos:** baixe do Pixabay, um por vez, lendo a licença do site no dia. As
  faixas usadas originalmente foram "Phonk Aggressive Drift Night" (alex-morgan) e "Dark
  Trap Beat" (vaitsez). Os efeitos foram pencil, UI Interface 03, Cinematic Impact Boom 05,
  Simple Whoosh, Whoosh Cinematic, Cinematic Riser 03 e Biodynamic Impact Braam. Você pode
  trocar por outros: ajuste os nomes em `build.mjs` e o BPM/ponto do drop em
  `fonte/versoes.mjs`.
- **Narração:** gere no ElevenLabs (ou outra voz) as 6 falas curtas e salve com os nomes
  acima. O texto aparece na tela, em `fonte/template.tpl`, e o momento de cada fala está em
  `build.mjs`. Pelo nome do arquivo e pelo texto na tela, a ordem é: "Tudo começa com uma
  linha." · "Pensado para cada passo." · "Leve." · "Rápido." · "Pulso." · "Em breve."
  (as quatro últimas foram deduzidas, não há o texto original da voz no repositório;
  confira ouvindo o resultado).

## Como renderizar

Precisa de Node 22+ e FFmpeg. Na pasta `exemplo-p01/`:

```bash
npm install
npm run render:m2   # versão com a música 2
npm run render:m1   # versão com a música 1
```

Cada comando gera o `index.html` da versão e renderiza em `saida/`. Para ver antes, sem
renderizar: `npx hyperframes preview`. **Peça ao Claude para rodar, e autorize o render.**

As fontes Anton e JetBrains Mono vêm do Google Fonts na hora do render.
