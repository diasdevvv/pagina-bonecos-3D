import React from 'react';
import { motion } from 'framer-motion';

export default function ModelCarousel() {
  // 37 imagens otimizadas da pasta carrossel imagens
  const row1 = Array.from({ length: 18 }, (_, i) => `carousel_${i + 1}.webp`);
  const row2 = Array.from({ length: 19 }, (_, i) => `carousel_${i + 19}.webp`);

  return (
    <section className="pt-4 sm:pt-6 md:pt-8 pb-0 relative z-30 bg-black border-b border-white/10 overflow-visible">
      {/* Fundo de Blocos LEGO P&B com 25% de visibilidade */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none overflow-hidden">
        <img
          src="/assets/images/lego_studs_bg.webp"
          alt="LEGO Bricks Background"
          className="w-full h-full object-cover grayscale brightness-50 contrast-110 opacity-25"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80" />
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="text-right mb-4 sm:mb-6 flex flex-col items-end justify-end pr-2 sm:pr-4 md:pr-8">
          {/* Texto Superior */}
          <span className="text-[#249831] font-display font-black text-sm sm:text-base md:text-lg uppercase tracking-widest mb-1.5 drop-shadow-md">
            O que você vai levar?
          </span>

          {/* Título Principal */}
          <h2 className="font-display font-black text-3xl sm:text-5xl md:text-6xl tracking-tight text-white uppercase drop-shadow-2xl text-right leading-tight">
            UMA SURRA DE <br /><span className="text-[#249831]">QUALIDADE</span>
          </h2>
        </div>
      </div>

      {/* Frame de Bordas do Carrossel Infinito */}
      <div className="border-y-1 border-white/10 relative z-20 shadow-2xl overflow-visible">
        {/* Imagem do Batman & Coringa 3D na exata posição original, agora por cima da seção de cima */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="absolute bottom-full translate-y-3 -left-6 sm:-left-10 md:-left-14 lg:-left-16 z-30 w-36 sm:w-52 md:w-64 lg:w-[340px] max-w-[44vw] pointer-events-none drop-shadow-[0_25px_50px_rgba(0,0,0,0.95)]"
        >
          <img
            src="/assets/images/batman_joker.webp"
            alt="LEGO Batman & Joker 3D"
            className="w-full h-auto object-contain block"
            loading="lazy"
            decoding="async"
          />
        </motion.div>

        {/* Carrossel 1 (Esquerda) - 100% encostado sem gaps */}
        <div className="marquee-container relative z-10 overflow-hidden">
          <div className="marquee-track-left !gap-0 !py-0">
            {[...row1, ...row1].map((imgName, idx) => (
              <div
                key={idx}
                className="rounded-none overflow-hidden shrink-0 w-40 md:w-64 border-0 p-0 m-0 leading-none"
              >
                <img
                  src={`/assets/images/carousel/${imgName}`}
                  alt={`Modelo 3D STL ${idx + 1}`}
                  className="w-full aspect-[3/5] object-cover opacity-95 hover:opacity-100 transition-opacity block"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Carrossel 2 (Direita) - 100% encostado sem gaps */}
        <div className="marquee-container relative z-10 overflow-hidden">
          <div className="marquee-track-right !gap-0 !py-0">
            {[...row2, ...row2].map((imgName, idx) => (
              <div
                key={idx}
                className="rounded-none overflow-hidden shrink-0 w-40 md:w-64 border-0 p-0 m-0 leading-none"
              >
                <img
                  src={`/assets/images/carousel/${imgName}`}
                  alt={`Modelo 3D STL ${idx + 19}`}
                  className="w-full aspect-[3/5] object-cover opacity-95 hover:opacity-100 transition-opacity block"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
