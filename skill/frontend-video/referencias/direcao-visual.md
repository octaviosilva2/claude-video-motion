# Direção visual e referências

Como a peça fica deliberadamente pensada em vez de parecer genérica. Conteúdo e roteiro
vêm antes; este arquivo não decide o que a peça diz, só como ela se apresenta. Origem e
licença de asset ficam em [assets.md](assets.md).

## Neste arquivo

- [1. Tokens e justificativa](#1-tokens-e-justificativa)
- [2. Prevenção de aparência genérica](#2-prevenção-de-aparência-genérica)
- [3. Referência visual decomposta](#3-referência-visual-decomposta)
- [4. Design DNA — método, não licença para copiar](#4-design-dna--método-não-licença-para-copiar)
- [5. Motion design — intenção, não runtime](#5-motion-design--intenção-não-runtime)

---

## 1. Tokens e justificativa

Cada token — cor, tipografia, espaçamento, movimento — tem uma razão escrita, não só um
valor. Defina os tokens antes da primeira cena (como variáveis CSS na composição raiz),
meça o contraste com um piso declarado e não aplique opacidade em texto que precisa ser
lido. Tokens de movimento (`--duration-fast|base|slow`, um easing nomeado) evitam que cada
cena invente o seu.

## 2. Prevenção de aparência genérica

Regra explícita, não intuição: nenhum padrão "genérico automático" entra sem justificativa
de marca. Cada projeto escreve as suas proibições concretas e as guarda num arquivo que a
próxima sessão lê. Modelo de proibição verificável:

> Nunca: inventar case/cliente/número/depoimento; recriar o logo como texto ou SVG; usar
> robô/cérebro/circuito/holograma/neon; gradiente em corpo de texto ou gráfico.

*"Mantenha a qualidade" não é verificável e não muda comportamento nenhum* — proibições
concretas funcionam melhor que princípios vagos.

## 3. Referência visual decomposta

Toda referência visual autorizada (print, URL, vídeo de biblioteca, manual de marca) se
decompõe em três categorias antes de ser usada:

| Categoria | O que significa |
|---|---|
| **Fixo** | o que é levado tal como está — paleta, tipografia, quando explicitamente autorizado pela fonte |
| **Adaptável** | princípio extraído sem copiar pixel — ritmo, densidade, estrutura de cena, tom visual |
| **Proibido copiar** | marca, logo, layout literal ou identidade de terceiro sem autorização de uso |

Uma referência sem essa decomposição registrada não deve informar a peça — vira "parece
com o original" em vez de "decisão deliberada com origem conhecida".

Em bibliotecas de vídeos com prompt (ver `referencias/bibliotecas.md` na raiz do
repositório), o prompt de um vídeo serve de **estrutura e vocabulário de movimento**; a
peça final é sua, com identidade, texto e assets próprios.

## 4. Design DNA — método, não licença para copiar

Quando há referência visual autorizada (print ou URL com direito de uso), o método
Structure → Analyze → Generate extrai tokens, estilo qualitativo e efeitos numa
especificação JSON versionável — não um design system de componentes, e não geração
automática de UX.

**O que ele resolve:** documentar tokens e estilo de uma referência concreta, com medição
determinística de cor (não estimativa visual) e verificação por DeltaE contra a origem.

**O que ele não resolve — e não deve ser tratado como se resolvesse:**
- não descobre requisitos nem substitui pesquisa com quem vai ver a peça;
- não garante fidelidade automática — inferência a partir de URL ou print sempre
  carrega interpretação;
- não é fonte normativa de identidade de marca sem revisão humana aprovando o resultado;
- não escolhe biblioteca de animação ou 3D.

**Se não há referência autorizada:** o fallback é tokens escritos à mão e revisão humana —
nunca inventar uma referência para ter o que extrair.

Proveniência: repositório `zanwei/design-dna`, licença MIT, commit
`593e39bc9e3652734653bd75544a333d7d43615e`.

## 5. Motion design — intenção, não runtime

Movimento é decidido primeiro como **intenção**: personalidade (sóbrio, expressivo,
funcional), timing e easing conceituais, e hierarquia entre elemento primário e
secundário. A escolha do mecanismo que implementa essa intenção (CSS/WAAPI, GSAP, Lottie,
Three) é de `hyperframes.md` §5.

O guia de referência para essa camada de intenção é agnóstico de implementação: cobre
decisão de propriedade animada, duração/easing e coreografia sem impor runtime.
Proveniência: repositório `LottieFiles/motion-design-skill`, licença MIT, commit
`f9a8a041b85185ee4881b3471d3415e939aac772`.
