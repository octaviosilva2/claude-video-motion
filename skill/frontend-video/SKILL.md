---
name: frontend-video
description: "Produz vídeo determinístico com HyperFrames — composição HTML/CSS capturada em Chrome/FFmpeg, com formato, fps, duração e resolução declarados e render autorizado. Use quando a entrega É um arquivo de mídia renderizado (MP4, WebM, MOV, PNG), quando o usuário pedir peça de vídeo, motion, animação exportada ou composição reproduzível. Não usar para vídeo já existente usado dentro de um site (isso é asset web) nem para UI animada interativa (isso é front-end web comum)."
allowed-tools: Read, Glob, Grep, Edit, Write, Bash, AskUserQuestion, WebSearch, WebFetch
---

## O gate — antes de qualquer composição

**Gatilho literal: a entrega É um arquivo de mídia renderizado.** MP4, WebM, MOV, PNG.
Formato da entrega, nunca aparência.

Não ativa esta skill:

- **Vídeo usado dentro de um site** — hero, background, depoimento. É um asset web comum.
- **Peça de UI animada que "parece vídeo" mas é interativa** — continua sendo front-end web.

A distinção é de formato da entrega. Se o resultado abre no navegador e responde a clique,
não é esta skill.

## Formato, resolução, fps e duração não têm default

Nenhum dos quatro. Escolher "1080p 30fps porque é comum" é exatamente o que o gate existe
para impedir. **Os quatro sobem ao usuário antes de a composição começar** (use
`AskUserQuestion`), com a recomendação para o destino da peça (por exemplo, vertical
1080×1920 para Reels/TikTok/Shorts).

## Custo operacional — confirme antes de comprometer

HyperFrames **não é um import**: é um processo de produção. Depende de **Node, Chrome e
FFmpeg** instalados, e a captura é pesada.

Confirme que a infraestrutura existe **antes** de prometer a rota. Descobrir na hora do
render que falta FFmpeg é descobrir depois de a composição inteira estar escrita.

**Instalar qualquer dependência (Node, FFmpeg, Chrome, o pacote `hyperframes`) é decisão do
usuário.** Nomeie o que falta e o comando, e espere o OK.

## Render nunca é automático

**Nenhuma execução de render acontece sem autorização explícita do usuário.** Render consome
tempo de máquina e, quando há geração de mídia envolvida, dinheiro real.

Quando faltar um asset e a alternativa for gerar: nomeie o que falta e o que geraria — e
pare ali.

## Como usar

```
frontend-video/
├── SKILL.md                ← este arquivo. O ÚNICO sempre lido
└── referencias/
    ├── hyperframes.md      o gate, formato/fps/duração, tempo determinístico,
    │                       adapters, captions, autorização de render
    ├── direcao-visual.md   tokens com razão escrita, anti-genérico, referência decomposta
    ├── assets.md           origem, licença, otimização — aqui o asset É a entrega
    └── validacao.md        os gates aplicáveis à mídia
```

| Sua tarefa | Abra |
|---|---|
| decidir formato, resolução, fps, duração | `hyperframes.md` §3 |
| conteúdo, fontes, captions, direitos | `hyperframes.md` §4 |
| tempo determinístico, saída reproduzível, adapters de cena | `hyperframes.md` §5 |
| acessibilidade e performance da peça | `hyperframes.md` §6 |
| autorizar o render | `hyperframes.md` §7 |
| direção estética da composição | `direcao-visual.md` |
| licença de imagem, fonte, música, efeito, narração | `assets.md` |
| fechar a entrega | `validacao.md` |

**Sempre ignorar:** SEO, DOM indexável, jornada de navegação e estados de aplicação — mídia
determinística não tem nenhum dos quatro. Runtime web como entrega final também não se
aplica: aqui o navegador é ferramenta de captura, não o destino.

## Música, efeitos e narração

- **Música e efeitos sonoros:** só baixe com o OK do usuário, **arquivo por arquivo**. A
  licença precisa permitir o uso pretendido (comercial, se for o caso). Registre origem,
  autor e licença de cada faixa. Detalhes em `assets.md`.
- **Narração:** a skill não gera voz. Escreva o texto da narração, em blocos curtos, e peça
  ao usuário que gere no serviço de voz dele (por exemplo ElevenLabs) e envie o arquivo.
  Gerar voz custa dinheiro: nomeie o bloco e pare ali.

## Reprodutibilidade — o que "determinístico" realmente exige

O engine torna a composição buscável por tempo. **Isso sozinho não garante saída idêntica.**

Prometer arquivo byte a byte reproduzível exige fixar todos estes: HyperFrames, Chrome,
FFmpeg, fontes, assets, codec e flags, resolução, fps, duração e ambiente. Mesmo commit
sem esse lock **não** autoriza a promessa.

Fonte auditada: repositório `heygen-com/hyperframes`, commit
`af1cb1c10da33bade100db8233435c7591b7c0bc`, pacotes principais 0.8.17 nesse commit,
licença Apache-2.0 na raiz e no CLI. Verificado em 2026-08-28. O `exemplo-p01/` deste
repositório foi renderizado com a 0.8.166, com a versão fixada no `package.json`. **Trave a
versão no seu projeto** e reaudite se a composição depender de capacidade não coberta pelas
fichas.

## O que vale sempre

1. **Conteúdo real, nunca inventado** — sem placeholder que pareça final.
2. **Captions e contraste** fazem parte da entrega, não são extra.
3. **Validação no output real**, nunca no preview. O que o preview mostra e o que o
   arquivo final contém divergem — codec, cor e timing entre eles.
4. **Código de cena autoral continua responsável pelo próprio disposal.** Cena Three/WebGL
   dentro da composição precisa de teardown como em qualquer outro lugar.
