// Gera o index.html de UMA versão (musica1 ou musica2) a partir de fonte/template.tpl.
// Rodar: node build.mjs musica1   (ou musica2). O HyperFrames aceita só um index.html raiz por projeto.
import { readFileSync, writeFileSync } from 'node:fs';
import { TOTAL, DROP, VERSOES, marcos } from './fonte/versoes.mjs';

const template = readFileSync(new URL('./fonte/template.tpl', import.meta.url), 'utf8');
const r3 = n => +n.toFixed(3);

// Um clipe de áudio. "pico" = quanto tempo depois do início do arquivo o som bate (medido com `hyperframes audio`),
// para o pico cair exatamente no momento pedido.
function clip({ id, src, em, pico = 0, dur, mediaStart = 0, vol = 1, fadeIn = 0, fadeOut = 0 }) {
  const start = r3(Math.max(0, em - pico));
  const attrs = [
    `id="${id}"`, `class="clip"`, `src="${src}"`,
    `data-start="${start}"`, `data-duration="${r3(dur)}"`,
    mediaStart ? `data-media-start="${r3(mediaStart)}"` : '',
    `data-volume="${vol}"`,
    fadeIn ? `data-fade-in="${fadeIn}"` : '',
    fadeOut ? `data-fade-out="${fadeOut}"` : '',
  ].filter(Boolean).join(' ');
  return `    <audio ${attrs}></audio>`;
}

// Narração (geração 1 da voz Marcos), já cortada frase por frase
const VOZ = 'audio/voz/g1-';
const SFX = 'audio/sfx/';

const nome = process.argv[2] || 'musica1';
const v = VERSOES[nome];
if (!v) throw new Error(`Versão desconhecida: ${nome}. Use: ${Object.keys(VERSOES).join(', ')}`);
{
  const m = marcos(v.bpm);
  const offset = v.faixaDrop - DROP; // segundo da música que toca no início do vídeo
  const a = [];

  // Música em 3 pedaços: intro baixa, depois do drop alta, silêncio, volta no final
  a.push(clip({ id: 'mus-a', src: v.arquivo, em: 0, dur: DROP, mediaStart: offset, vol: r3(v.volume * 0.6), fadeIn: 0.4 }));
  a.push(clip({ id: 'mus-b', src: v.arquivo, em: DROP, dur: m.silencio - DROP, mediaStart: v.faixaDrop, vol: v.volume }));
  a.push(clip({ id: 'mus-c', src: v.arquivo, em: m.final, dur: TOTAL - m.final, mediaStart: offset + m.final, vol: r3(v.volume * 0.7), fadeOut: 2.2 }));

  // Narração
  a.push(clip({ id: 'voz-1', src: VOZ + '01-linha.wav', em: 0.25, dur: 1.9, vol: 1.6 }));
  a.push(clip({ id: 'voz-2', src: VOZ + '02-passo.wav', em: 4.75, dur: 1.99, vol: 1.6 }));
  a.push(clip({ id: 'voz-3', src: VOZ + '03-leve.wav', em: m.palavras + m.b * 0.6, dur: 0.94, vol: 1.8 }));
  a.push(clip({ id: 'voz-4', src: VOZ + '04-rapido.wav', em: m.palavras + m.b * 2.6, dur: 1.02, vol: 1.8 }));
  a.push(clip({ id: 'voz-5', src: VOZ + '05-pulso.wav', em: m.final + 0.55, dur: 1.18, vol: 1.7 }));
  a.push(clip({ id: 'voz-6', src: VOZ + '06-breve.wav', em: m.final + 1.95, dur: 0.88, vol: 1.7 }));

  // Efeitos (picos medidos)
  a.push(clip({ id: 'sfx-wipe1', src: SFX + 'whoosh-curto.mp3', em: 1.85, pico: 0.16, dur: 0.57, vol: 0.7 }));
  a.push(clip({ id: 'sfx-lapis', src: SFX + 'lapis.mp3', em: 2.0, dur: 2.6, mediaStart: 0.9, vol: 3.5, fadeIn: 0.1, fadeOut: 0.3 }));
  a.push(clip({ id: 'sfx-wipe2', src: SFX + 'whoosh-curto.mp3', em: 4.62, pico: 0.16, dur: 0.57, vol: 0.6 }));
  [5.15, 5.55, 5.95].forEach((t, i) => a.push(clip({ id: `sfx-bip${i + 1}`, src: SFX + 'bip.mp3', em: t, pico: 0.15, dur: 0.5, vol: 0.35, fadeOut: 0.2 })));
  a.push(clip({ id: 'sfx-impacto', src: SFX + 'impacto.mp3', em: DROP, pico: 0.08, dur: 1.85, vol: 1.2 }));
  [m.close1, m.close2, m.close3].forEach((t, i) => a.push(clip({ id: `sfx-close${i + 1}`, src: SFX + 'whoosh-curto.mp3', em: t, pico: 0.16, dur: 0.57, vol: 0.6 })));
  a.push(clip({ id: 'sfx-riser', src: SFX + 'riser.mp3', em: m.silencio - 3.0, dur: 3.0, mediaStart: 0.7, vol: 0.45, fadeIn: 0.5 }));
  a.push(clip({ id: 'sfx-cruza', src: SFX + 'whoosh-grande.mp3', em: m.palavras + m.b * 1.5, pico: 0.89, dur: 1.69, vol: 0.8 }));
  a.push(clip({ id: 'sfx-braam', src: SFX + 'braam.mp3', em: m.final, pico: 0.23, dur: TOTAL - m.final + 0.23, vol: 0.75, fadeOut: 1.5 }));

  const config = { versao: nome, total: TOTAL, drop: DROP, ...m };
  // Scripts entram no próprio HTML (o lint do HyperFrames confere o registro da timeline no arquivo)
  const inline = f => readFileSync(new URL('./fonte/' + f, import.meta.url), 'utf8');
  const html = template
    .replace('<script src="fonte/tenis.js"></script>', () => `<script>
${inline('tenis.js')}</script>`)
    .replace('<script src="fonte/cena.js"></script>', () => `<script>
${inline('cena.js')}</script>`)
    .replaceAll('{{TOTAL}}', String(TOTAL))
    .replace('{{CONFIG}}', JSON.stringify(config))
    .replace('{{AUDIO}}', a.join('\n'));
  writeFileSync(new URL('./index.html', import.meta.url), html);
  console.log(`index.html: ${nome}, ${v.bpm} BPM, drop no ${DROP}s, final em ${m.final}s`);
}
