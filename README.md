# Vídeos motion com IA no Claude

Uma skill do Claude Code para produzir **vídeo motion em código** (HTML/CSS + GSAP) e
renderizar em MP4 com o [HyperFrames](https://github.com/heygen-com/hyperframes), mais as
referências e o passo a passo para usar.

## O que tem aqui

| Pasta | O que é |
|---|---|
| `skill/frontend-video/` | A skill. `SKILL.md` + 4 fichas em `referencias/` |
| `referencias/bibliotecas.md` | Bibliotecas de vídeos com prompt (links, créditos à Deborah Folloni) |
| `fluxo/passo-a-passo.md` | Do briefing ao MP4: música e efeitos no Pixabay, narração no ElevenLabs, render |
| `exemplo-p01/` | Um motion de 20 s completo, só o código-fonte (sem áudio e sem MP4) |

## Instalar a skill

Copie a pasta `skill/frontend-video` para dentro da pasta de skills do Claude Code:

- **Windows:** `C:\Users\<seu-usuario>\.claude\skills\frontend-video`
- **Mac/Linux:** `~/.claude/skills/frontend-video`

Resultado esperado: o arquivo `.../skills/frontend-video/SKILL.md` existe. Abra uma sessão
nova do Claude Code e peça, por exemplo: *"Faz um motion vertical de 20 segundos de
lançamento do produto X"*. A skill ativa sozinha quando a entrega é um arquivo de vídeo.

## O que você precisa na máquina

- **Node 22 ou mais novo**
- **FFmpeg**
- **Google Chrome**

A skill **não instala nada sozinha**: ela confere, avisa o que falta e espera o seu OK.

## Regras da skill

- Formato, resolução, fps e duração **não têm padrão**: o Claude pergunta.
- **Render só com autorização** sua.
- Música e efeitos: baixados **um por vez**, com o seu OK e a licença registrada.
- Narração: o Claude escreve o texto, **você gera** na ferramenta de voz e envia o arquivo.
- Nada de conteúdo inventado e nada de copiar marca ou vídeo de terceiros.

## Rodar o exemplo

Veja `exemplo-p01/LEIA-ME.md`. Ele precisa de arquivos de áudio que **não estão** neste
repositório (licença); o LEIA-ME explica quais são e onde achar.

## Créditos e licenças

- HyperFrames: Apache-2.0, `heygen-com/hyperframes`.
- Design DNA (`zanwei/design-dna`) e motion-design-skill (`LottieFiles/motion-design-skill`):
  MIT. Citados nas fichas como fonte de método, sem copiar código.
- Bibliotecas de referência: de terceiros, só links (ver `referencias/bibliotecas.md`).
- O código deste repositório não tem licença definida ainda: sem arquivo `LICENSE`, ninguém
  tem direito de reutilizar. Escolha uma (por exemplo MIT) antes de divulgar.
