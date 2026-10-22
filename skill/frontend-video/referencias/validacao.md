# Validação e refinamento

Os gates observáveis que decidem se uma peça de vídeo está pronta, e como refinar sem
misturar categorias. Este arquivo só confere se aquilo que foi decidido está de pé.

## Neste arquivo

- [1. O que o preview não prova](#1-o-que-o-preview-não-prova)
- [2. Os gates do vídeo](#2-os-gates-do-vídeo)
- [3. Refinamento por passes](#3-refinamento-por-passes)
- [4. Como registrar](#4-como-registrar)

---

## 1. O que o preview não prova

**Preview e quadro parado são evidência visual, não prova do arquivo final.** O que o
preview mostra e o que o MP4 contém divergem — codec, cor, timing, sincronia de áudio.
Todo gate de timing e áudio é validado **no arquivo renderizado**, assistindo e ouvindo,
não olhando a composição.

## 2. Os gates do vídeo

Nenhum gate é opcional. Uma entrega que passa em 6 de 7 gates não é "quase pronta" — é uma
entrega com um defeito ainda não observado.

| Gate | O que confere |
|---|---|
| 1. Formato definido | resolução, fps, duração e formato foram decididos com o usuário e batem com o arquivo final (confira com `ffprobe`) |
| 2. Conteúdo real | sem placeholder, sem número, cliente ou depoimento inventado |
| 3. Captions, contraste e legibilidade | texto legível no tamanho real de exibição (celular, se o destino é celular); idioma e grafia corretos; revisão humana das captions |
| 4. Performance no output real | o render termina, sem quadros pretos, sem travada; testado no arquivo, não no preview de baixa fidelidade |
| 5. Cleanup/disposal | cena Three/WebGL libera renderer, geometrias, materiais e listeners |
| 6. Origem, licença e versão | cada fonte, imagem, música, efeito e voz tem origem e licença registradas; versões de HyperFrames, GSAP e FFmpeg anotadas |
| 7. Refinamento por passes concluído | os passes da seção 3 foram feitos, um por vez |

## 3. Refinamento por passes

Uma categoria por passe, nunca misturar. Cada passe fecha com uma observação (assistir o
render ou os quadros parados) antes de o próximo começar — refinar cor sobre um movimento
ainda não observado é polir antes da hora.

| Passe | O que ajusta |
|---|---|
| Visual | tokens, espaçamento, cor, tipografia |
| Motion | timing, easing, coreografia, mecanismo (adapter da cena) |
| Áudio | níveis, picos dos efeitos no tempo certo, narração sempre inteligível |
| Acessibilidade/performance | captions, contraste, render limpo no output real |

## 4. Como registrar

O resultado de cada gate — passou, com que evidência, ou não passou e por quê — vai para
um arquivo do projeto (`LEIA-ME.md` ou `decisoes.md`) como apontamento. Um gate que não
passou não é reescrito como se tivesse passado: sobe como item aberto.
