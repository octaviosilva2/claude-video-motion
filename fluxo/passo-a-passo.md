# Passo a passo: do briefing ao vídeo renderizado

O fluxo abaixo é o que foi usado para fazer o motion de `exemplo-p01/` (20 s, vertical, 60
fps). Cada etapa termina com o seu OK antes de a próxima começar.

## Antes de começar (uma vez)

1. **Instale a skill** (ver `README.md`).
2. **Confira as ferramentas** na sua máquina: Node 22+, FFmpeg e Chrome. O Claude confere e
   avisa o que falta; **instalar é decisão sua**.
3. **Dê permissão ao Chrome** para o Claude (ver "Música e efeitos" abaixo).
4. **Tenha uma conta no serviço de voz** que você usa (por exemplo ElevenLabs), se a peça
   tiver narração.

## As etapas

| # | Etapa | Quem faz | O que sai |
|---|---|---|---|
| 1 | **Briefing** | você + Claude | o que a peça diz, para quem, onde vai ser publicada |
| 2 | **Gate de formato** | você decide | formato, resolução, fps e duração (o Claude pergunta; não há padrão) |
| 3 | **Referências** | você escolhe | 2 ou 3 vídeos de `referencias/bibliotecas.md`, com o prompt de cada |
| 4 | **Roteiro** | Claude escreve, você aprova | cenas com tempo, texto na tela, onde entram música, efeitos e voz |
| 5 | **Música e efeitos** | Claude baixa, você autoriza | arquivos com origem e licença registradas |
| 6 | **Narração** | Claude escreve o texto, **você gera** | arquivos de voz enviados por você |
| 7 | **Composição** | Claude | HTML/CSS + GSAP no HyperFrames, com `lint` e `check` |
| 8 | **Quadros parados** | Claude mostra | `snapshot` de alguns segundos para você aprovar o visual |
| 9 | **Render** | Claude, **só com o seu OK** | o MP4 final |
| 10 | **Conferência** | você assiste e ouve | aprovação, ou notas numeradas para a próxima versão |

## Música e efeitos (Pixabay)

1. O Claude propõe 2 ou 3 faixas e efeitos, com nome, autor e link.
2. Quando for baixar, ele usa o seu Chrome. **Aprove a permissão para o site**
   (`pixabay.com`) quando o Claude pedir.
3. Ele mostra o arquivo (nome, fonte, tamanho) e **baixa um por vez, com o seu OK**.
4. Ele registra no `LEIA-ME.md` da peça: nome da faixa, autor, site e licença.
5. Os arquivos de áudio ficam na pasta `audio/` do projeto e **não vão para o GitHub** (a
   licença do site não deixa redistribuir o arquivo solto).

## Narração (ElevenLabs)

1. O Claude escreve o texto em **blocos curtos**, um por frase ou por cena, e uma tabela de
   pronúncia para nomes difíceis (a legenda mantém a escrita correta; só o texto enviado à
   voz é escrito pelo som).
2. **Você** cola cada bloco no ElevenLabs, escolhe a voz e gera. Gerar custa crédito, por
   isso o Claude nunca faz isso sozinho.
3. Você baixa os arquivos e os coloca em `audio/voz/`, com os nomes que o Claude pediu.
4. O Claude corta e alinha cada bloco na linha do tempo.

## Render

O Claude nomeia o comando e o custo (tempo de captura) e **espera o seu OK**. Antes disso,
ele roda só as checagens que não gastam nada (`lint`, `check`, `snapshot`), e mesmo essas
com o seu consentimento na primeira vez.

## Se algo der errado

- **Quadro 0 com o estado final da animação:** veja "Armadilhas" em
  `skill/frontend-video/referencias/hyperframes.md` §5 (`immediateRender: false`).
- **Faltou o FFmpeg ou o Chrome:** o render para na hora. Peça ao Claude o comando de
  instalação e decida você.
- **O vídeo não ficou como a referência:** peça ao Claude para repetir a decomposição
  fixo / adaptável / proibido copiar e listar o que mudou.
