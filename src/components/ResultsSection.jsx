import React from 'react';
import { motion } from 'framer-motion';

export default function ResultsSection() {
  const results = [
    {
      id: 1,
      src: '/assets/images/result_1.webp',
      alt: 'Resultado Impressão 3D Lego Wolverine, Flash, Hulk e Deadpool',
      align: 'left',
      zIndex: 'z-10',
    },
    {
      id: 2,
      src: '/assets/images/result_2.webp',
      alt: 'Resultado Impressão 3D Lego Ninja na Impressora Bambu Lab',
      align: 'right',
      zIndex: 'z-20',
    },
    {
      id: 3,
      src: '/assets/images/result_3.webp',
      alt: 'Resultado Impressão 3D Lego Flash, Anakin, Luffy e Superman',
      align: 'left',
      zIndex: 'z-30',
    },
    {
      id: 4,
      src: '/assets/images/result_4.webp',
      alt: 'Resultado Impressão 3D Lego Coringa, Deadpool, Homem Aranha e Venom',
      align: 'right',
      zIndex: 'z-40',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-[#050507] border-b border-white/10 relative overflow-hidden">
      {/* Fundo sutil com vinheta */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none overflow-hidden">
        <img
          src="/assets/images/lego_bg_pattern.webp"
          alt="LEGO Pattern Background"
          className="w-full h-full object-cover grayscale brightness-35 contrast-125 opacity-30"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/60 to-black/90" />
      </div>

      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        {/* Imagem do Deadpool com Olhos de Coração atrás das imagens no topo */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="absolute -top-[-20px] sm:-top-10 right-[-7%] sm:right-8 md:right-12 lg:right-16 z-0 w-48 sm:w-64 md:w-80 lg:w-[380px] max-w-[88vw] pointer-events-none drop-shadow-[0_20px_40px_rgba(0,0,0,0.95)]"
        >
          <img
            src="/assets/images/deadpool_love.webp"
            alt="LEGO Deadpool 3D Love"
            className="w-full h-auto object-contain block opacity-95"
            loading="lazy"
            decoding="async"
          />
        </motion.div>

        {/* Cabeçalho da Seção */}
        <div className="text-left ml-4 mb-5 sm:mb-14 flex flex-col items-start justify-start relative z-10">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block bg-[#9F2224] text-white font-black text-xs sm:text-sm px-5 py-1.5 uppercase tracking-widest rounded-none border-2 border-white/20 mb-4 shadow-xl"
          >
            QUEM JÁ IMPRIMIU?
          </motion.span>
          <h2 className="font-display font-black text-3xl sm:text-5xl md:text-6xl tracking-tight text-white mb-2 uppercase drop-shadow-2xl text-left leading-tight">
            VEJA ALGUNS <span className="text-[#9F2224]">RESULTADOS</span>
          </h2>
        </div>

        {/* Lista de Imagens Empilhadas em Zig-Zag com Sobreposição */}
        <div className="flex flex-col items-center w-full max-w-4xl mx-auto relative px-2 sm:px-4">
          {results.map((item, index) => {
            const isLeft = item.align === 'left';
            const isFirst = index === 0;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 40, x: isLeft ? -30 : 30 }}
                whileInView={{ opacity: 1, y: 0, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, ease: 'easeOut', delay: index * 0.1 }}
                className={`relative w-full max-w-md sm:max-w-xl md:max-w-2xl ${item.zIndex} ${isLeft
                  ? 'self-center -translate-x-3 sm:-translate-x-8 md:-translate-x-14 left-4'
                  : 'self-center translate-x-3 sm:translate-x-8 md:translate-x-14'
                  } ${isFirst ? 'mt-0' : '-mt-3 sm:-mt-16 md:-mt-24'}`}
              >
                <div className="bg-[#0F0F14]/90 p-1 sm:p-3 rounded-[15px] border-1 border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.9)] backdrop-blur-md transition-transform duration-300 hover:scale-[1.01]">
                  <img
                    src={item.src}
                    alt={item.alt}
                    width={1000}
                    height={600}
                    className="w-full h-auto object-cover rounded-xl border border-white/10 shadow-inner"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Subtexto Centralizado Abaixo das Imagens */}
        <p className="text-white/80 font-medium text-base sm:text-lg max-w-2xl text-center mx-auto mt-8 sm:mt-12 leading-relaxed drop-shadow-md relative z-20">
          Quem adquiriu sabe o sentimento de finalizar uma impressão de qualidade!
        </p>
      </div>
    </section>
  );
}
