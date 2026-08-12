import React from 'react';
import { motion } from 'framer-motion';

export default function ModelCarousel() {
  // 37 imagens otimizadas da pasta carrossel imagens
  const row1 = Array.from({ length: 18 }, (_, i) => `carousel_${i + 1}.webp`);
  const row2 = Array.from({ length: 19 }, (_, i) => `carousel_${i + 19}.webp`);

  return (
    <section className="py-16 md:py-24 relative z-10 bg-black border-b border-white/10 overflow-hidden">
      {/* Fundo de Blocos LEGO P&B com 25% de visibilidade */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none overflow-hidden">
        <img
          src="/assets/images/lego_studs_bg.webp"
          alt="LEGO Bricks Background"
          className="w-full h-full object-cover grayscale brightness-50 contrast-110 opacity-25" loading="lazy" decoding="async" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80" />
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="text-center mb-10 flex flex-col items-center justify-center">

          {/* Badge de Topo */}
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block bg-[#e52521] text-white font-black text-xs sm:text-sm px-5 py-1.5 uppercase tracking-widest rounded-none border-2 border-white/20 mb-4 shadow-xl"
          >
            O QUE VOCÊ VAI LEVAR?
          </motion.span>

          {/* Título Principal */}
          <h2 className="font-display font-black text-3xl sm:text-5xl md:text-6xl tracking-tight text-white mb-4 uppercase drop-shadow-2xl">
            TUDO ISSO & <br /><span className="text-[#e52521]">MUITO MAIS</span>
          </h2>

          {/* Subtítulo */}
          <p className="text-white/85 text-base sm:text-lg md:text-xl font-medium max-w-3xl mx-auto leading-relaxed drop-shadow-md">
            Estes são os arquivos STL mais procurados e impressos, prontos para fatiar, imprimir e lucrar no mercado de <span className="text-[#006cb7] font-bold">IMPRESSÃO 3D</span>!
          </p>
        </div>
      </div>

      {/* Frame de Bordas do Carrossel Infinito */}
      <div className="border-y-2 border-white/10 relative z-10 shadow-2xl">
        {/* Carrossel 1 (Esquerda) - 100% encostado sem gaps */}
        <div className="marquee-container relative z-10">
          <div className="marquee-track-left !gap-0 !py-0">
            {[...row1, ...row1].map((imgName, idx) => (
              <div
                key={idx}
                className="rounded-none overflow-hidden shrink-0 w-48 md:w-64 border-0 p-0 m-0 leading-none"
              >
                <img
                  src={`/assets/images/carousel/${imgName}`}
                  alt={`Modelo 3D STL ${idx + 1}`}
                  className="w-full aspect-[3/5] object-cover opacity-95 hover:opacity-100 transition-opacity block" loading="lazy" decoding="async" />
              </div>
            ))}
          </div>
        </div>

        {/* Carrossel 2 (Direita) - 100% encostado sem gaps */}
        <div className="marquee-container relative z-10">
          <div className="marquee-track-right !gap-0 !py-0">
            {[...row2, ...row2].map((imgName, idx) => (
              <div
                key={idx}
                className="rounded-none overflow-hidden shrink-0 w-48 md:w-64 border-0 p-0 m-0 leading-none"
              >
                <img
                  src={`/assets/images/carousel/${imgName}`}
                  alt={`Modelo 3D STL ${idx + 19}`}
                  className="w-full aspect-[3/5] object-cover opacity-95 hover:opacity-100 transition-opacity block" loading="lazy" decoding="async" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
