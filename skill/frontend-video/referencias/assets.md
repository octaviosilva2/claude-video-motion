# Assets e proveniência

Inventário, autorização, licença e geração de tudo que não é código: imagem, ícone,
fonte, música, efeito sonoro, narração, vídeo ou componente de terceiro. Em vídeo, o asset
**é** a entrega.

## Neste arquivo

- [1. Inventariar antes de gerar ou buscar](#1-inventariar-antes-de-gerar-ou-buscar)
- [2. Origem e licença, sempre registradas](#2-origem-e-licença-sempre-registradas)
- [3. Música, efeitos e narração](#3-música-efeitos-e-narração)
- [4. Geração de mídia é decisão do usuário](#4-geração-de-mídia-é-decisão-do-usuário)
- [5. Otimização antes de commit](#5-otimização-antes-de-commit)
- [6. Catálogo](#6-catálogo)
- [7. Componente externo segue a mesma régua](#7-componente-externo-segue-a-mesma-régua)

---

## 1. Inventariar antes de gerar ou buscar

Antes de pedir geração nova ou buscar um asset externo, descubra o que já existe no
projeto: logo, fotos, ícones, fontes, vídeos, áudios. O repositório é inspecionado antes de
qualquer pergunta ou geração.

Gerar um asset que já existe no projeto, com outro nome ou outro formato, não é economia —
é duplicação que a próxima sessão não sabe qual das duas versões é a válida.

## 2. Origem e licença, sempre registradas

Para cada asset que entra no projeto: origem (autor, fonte, URL), licença ou direito de
uso, e a decisão de adaptar ou usar como está. Dado sem fonte entra marcado
`[NÃO CONFIRMADO]` — nunca apagado, nunca suavizado como se estivesse confirmado.

Registre num arquivo do projeto que a próxima sessão vai ler antes de assumir que pode usar
o asset (um `LEIA-ME.md` com a seção "Origem do som" e "Origem das imagens", como em
`exemplo-p01/`).

## 3. Música, efeitos e narração

- **Música e efeitos sonoros:** baixar só com o OK do usuário, **arquivo por arquivo**. A
  licença precisa permitir o uso pretendido — se a peça é propaganda de cliente, uso
  comercial. Registrar nome da faixa, autor, site e licença.
  - Bibliotecas de uso livre costumam permitir uso comercial sem crédito, mas **leia a
    licença do site no dia do download**. Algumas proíbem redistribuir o arquivo solto
    (por isso áudio não vai para repositório público) e o autor pode ter a faixa em
    sistemas de reivindicação de direitos (como o Content ID do YouTube); guarde o
    certificado/prova de licença.
  - Para baixar pelo navegador do usuário, o Claude precisa de permissão para o Chrome
    (ver `fluxo/passo-a-passo.md`).
- **Narração:** a skill não gera voz. O Claude escreve o texto em blocos curtos, com a
  tabela de pronúncia de nomes difíceis; o usuário gera no serviço de voz dele e envia os
  arquivos. A legenda mantém a grafia correta mesmo quando o texto enviado à voz foi
  escrito pelo som.
- **Timing de áudio:** meça o pico de cada efeito (o `hyperframes audio` mede) para o pico
  cair exatamente no momento pedido na linha do tempo.

## 4. Geração de mídia é decisão do usuário

Gerar imagem, vídeo ou áudio com custo real nunca é decisão automática de uma sessão.
Quando falta um asset e a alternativa é gerar, a sessão nomeia o que falta e o que geraria
— e para ali.

## 5. Otimização antes de commit

Nenhum asset acima de algumas centenas de KB entra no repositório sem otimização: foto
versionada com vários MB entra no histórico do git para sempre, e otimizar depois do commit
não desfaz o peso já acumulado. Vídeo e áudio brutos ficam fora do repositório (use
`.gitignore`) e entram só como link ou receita de como gerar.

## 6. Catálogo

Quando o projeto acumula assets suficientes para precisar de um índice, o catálogo mora
num lugar só — pasta `assets/` do projeto com um README. Não duplicar a lista em dois
arquivos: um aponta, o outro contém.

## 7. Componente externo segue a mesma régua

Um componente, template ou trecho copiado de terceiro passa pela mesma verificação de
origem, licença e decisão de adaptar. A pergunta é simples: pode ser usado, sob que
licença, e isso está escrito em algum lugar que a próxima sessão vai ler antes de assumir
que pode.
