// Configuração das duas versões do motion P01 (uma por música).
// "drop" = segundo do vídeo em que a batida forte entra; "faixaDrop" = mesmo ponto dentro do arquivo da música.
export const TOTAL = 20; // duração do vídeo, em segundos
export const DROP = 7;   // o tênis aparece pronto aqui

export const VERSOES = {
  musica1: {
    arquivo: 'audio/musica-1-phonk-aggressive-drift-night.mp3',
    bpm: 140,          // medido: grade de bumbo a partir de 13,655 s
    faixaDrop: 13.655,
    volume: 0.75,
  },
  musica2: {
    arquivo: 'audio/musica-2-dark-trap-beat.mp3',
    bpm: 144,          // medido: bumbos em 66,685 / 67,308 / 68,760… (colcheias de 144)
    faixaDrop: 66.685,
    volume: 0.8,
  },
};

// Momentos da linha do tempo, em batidas depois do drop (b = duração de 1 batida)
export function marcos(bpm) {
  const b = 60 / bpm;
  const em = n => +(DROP + n * b).toFixed(3);
  return {
    b,
    close1: em(6),   // close na espuma
    close2: em(10),  // close no peso
    close3: em(13),  // close no calcanhar
    palavras: em(16),// MAIS. LEVE. MAIS. RÁPIDO.
    silencio: em(20),// tudo para
    final: em(22),   // tênis no fundo claro + nome
  };
}
