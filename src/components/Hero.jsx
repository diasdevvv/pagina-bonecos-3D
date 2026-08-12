import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  const scrollToPricing = () => {
    const pricingEl = document.getElementById('pricing') || document.getElementById('oferta');
    if (pricingEl) {
      pricingEl.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = '#oferta';
    }
  };

  return (
    <section className="relative w-full overflow-hidden bg-black pt-20 sm:pt-24 md:pt-28 lg:pt-32 pb-16 md:pb-24 border-b border-white/10 flex items-center justify-center">
      {/* ==================== FUNDO DA IMAGEM FULL-BLEED ==================== */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <img
          src="/assets/images/lego_bg_pattern.webp"
          alt="Os Maiores Ícones em Versão Lego 3D STL"
          width={1920}
          height={1080}
          className="w-full h-full object-cover object-center brightness-105 contrast-105"
          fetchPriority="high"
          decoding="sync"
        />

        {/* Vinheta de Cima para Baixo para Destaque e Leitura Perfeita da Headline */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/30 to-black/80 z-10 pointer-events-none" />
      </div>

      {/* ==================== PERSONAGENS ESPIANDO NAS LATERAIS DA TELA ==================== */}
      {/* Harry Potter espiando no canto esquerdo */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        className="absolute left-[-35%] top-[40%] sm:top-[45%] -translate-y-1/2 z-20 pointer-events-none overflow-hidden"
      >
        <img
          src="/assets/images/peeking_char_harry.webp"
          alt="Harry Potter Lego espiando"
          width={350}
          height={500}
          className="h-32 sm:h-48 md:h-60 lg:h-72 object-contain transform rotate-12 -translate-x-8 sm:-translate-x-12 md:-translate-x-16 drop-shadow-[0_15px_30px_rgba(0,0,0,0.95)]"
          loading="lazy"
          decoding="async"
        />
      </motion.div>

      {/* Ninja Azul (Jay) espiando no canto direito */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        className="absolute right-[-35%] top-[40%] sm:top-[45%] -translate-y-1/2 z-20 pointer-events-none overflow-hidden"
      >
        <img
          src="/assets/images/peeking_char_ninja.webp"
          alt="Ninja Lego espiando"
          width={350}
          height={500}
          className="h-32 sm:h-48 md:h-60 lg:h-72 object-contain transform -rotate-12 translate-x-8 sm:translate-x-12 md:translate-x-16 drop-shadow-[0_15px_30px_rgba(0,0,0,0.95)]"
          loading="lazy"
          decoding="async"
        />
      </motion.div>

      {/* ==================== CONTEÚDO TEXTUAL & ELEMENTOS EM FLUXO NORMAL ==================== */}
      <div className="container mx-auto px-4 max-w-5xl relative z-20 text-center flex flex-col items-center justify-center">

        {/* 1. Título Principal (Headline) */}
        <span className="subheadline">NOVIDADE</span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="uppercase font-display font-black text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-white tracking-tight leading-[1.1] mb-[-15px] drop-shadow-2xl text-center max-w-4xl pt-2"
        >
          Uma Coleção Única <br />Estilo <span className="text-[#006cb7] ">LEGO </span>

          Para<br />sua Impressora 3D
          <br />
        </motion.h1>
        <br />

        <span style={{ fontWeight: '200', opacity: '0.7' }}>Crie peças incriveis para sua coleção ou Venda suas criações nos maiores Marketplaces do Mercado.</span>

        {/* 2. CONTAINER DA IMPRESSORA + PERSONAGENS + CAIXA DE PREÇO + SUBTÍTULO INTEGRADO */}
        <div className="relative w-full max-w-lg mx-auto flex flex-col items-center justify-center my-2 sm:my-4">

          {/* IMPRESSORA 3D BAMBU LAB 100% CENTRALIZADA POR TRÁS DE TUDO (Z-10) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="w-full max-w-md sm:max-w-lg md:max-w-xl mx-auto flex justify-center items-center relative z-10 opacity-90 brightness-110 pointer-events-none"
          >
            <img
              src="/assets/images/hero_3d_printer_venom.webp"
              alt="Impressora 3D Bambu Lab imprimindo Venom Lego"
              width={600}
              height={600}
              className="w-full h-auto max-h-[280px] sm:max-h-[360px] md:max-h-[440px] object-contain mx-auto drop-shadow-[0_15px_30px_rgba(0,0,0,0.95)]"
              loading="lazy"
              decoding="async"
            />
          </motion.div>

          {/* PERSONAGENS MINIFIGURAS LEGO COLADOS EM CIMA DA DIV DE PREÇO (Z-30) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="flex items-end justify-center gap-0 sm:gap-2.5 md:gap-3.5 -mt-16 sm:-mt-24 md:-mt-28 -mb-3 sm:-mb-5 md:-mb-6 relative z-30 pointer-events-none mx-auto"
          >
            <img
              src="/assets/images/hero_char_batman.webp"
              alt="Lego Batman 3D"
              width={300}
              height={400}
              className="h-16 sm:h-24 md:h-28 lg:h-32 object-contain drop-shadow-md"
              loading="lazy"
              decoding="async"
            />
            <img
              src="/assets/images/hero_char_wonderwoman.webp"
              alt="Lego Mulher Maravilha 3D"
              width={300}
              height={400}
              className="h-16 sm:h-24 md:h-28 lg:h-32 object-contain drop-shadow-md"
              loading="lazy"
              decoding="async"
            />
            <img
              src="/assets/images/hero_char_ironman.webp"
              alt="Lego Homem de Ferro 3D"
              width={300}
              height={400}
              className="h-16 sm:h-24 md:h-28 lg:h-32 object-contain drop-shadow-md"
              loading="lazy"
              decoding="async"
            />
            <img
              src="/assets/images/hero_char_blackwidow.webp"
              alt="Lego Viúva Negra 3D"
              width={300}
              height={400}
              className="h-16 sm:h-24 md:h-28 lg:h-32 object-contain drop-shadow-md"
              loading="lazy"
              decoding="async"
            />
            <img
              src="/assets/images/hero_char_deadpool.webp"
              alt="Lego Deadpool 3D"
              width={300}
              height={400}
              className="h-16 sm:h-24 md:h-28 lg:h-32 object-contain drop-shadow-md"
              loading="lazy"
              decoding="async"
            />
          </motion.div>

          {/* BOX DE PREÇO E DESCONTO (Z-20) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-full flex flex-col items-center justify-center shadow-2xl relative z-20"
          >
            {/* Quadrado Principal de Preço */}
            <div className="bg-black/90 border-2 border-white/20 p-4 sm:p-6 w-full backdrop-blur-md flex flex-col items-center justify-center rounded-none text-center">
              <div className="flex items-center justify-center gap-3 mb-2 pt-2">
                <span className="text-white/50 line-through text-base sm:text-lg font-bold">De R$ 197,00</span>
                <span className="bg-[#e52521] text-white font-black text-xs sm:text-sm uppercase px-3 py-1 rounded-none shadow-md tracking-wider">
                  75% OFF HOJE
                </span>
              </div>

              <div className="flex items-baseline justify-center gap-1.5 my-1">
                <span className="text-white/60 text-base sm:text-lg font-bold">Por apenas</span>
                <span className="text-yellow-400 font-display font-black text-4xl sm:text-5xl md:text-6xl drop-shadow-lg">
                  R$ 17,90
                </span>
              </div>

              <p className="text-[#006cb7] text-xs sm:text-sm font-black uppercase tracking-widest mt-1">
                Pagamento Único • Sem Mensalidades
              </p>
            </div>

            {/* QUADRADO DE SUBTÍTULO ACOPLADO DISCRETAMENTE ABAIXO DA CAIXA DE PREÇO */}
            <div className="w-full bg-black/95 border-x-2 border-b-2 border-white/20 border-t border-white/10 px-4 py-3 text-center backdrop-blur-md rounded-none">
              <p className="text-white/75 text-xs sm:text-sm font-semibold leading-snug tracking-wide">
                Arquivos STL/3MF dos Personagens mais amados formato Bloco 3D, testados e prontos para imprimir!
              </p>
            </div>
          </motion.div>
        </div>

        {/* 3. Botão Principal CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="w-full sm:w-auto mx-auto mt-6 sm:mt-8"
        >
          <button
            onClick={scrollToPricing}
            className="w-full sm:w-auto bg-[#e52521] text-white font-display font-black text-lg sm:text-xl md:text-2xl py-4 px-8 sm:px-12 uppercase tracking-wider rounded-none border-2 border-white/20 hover:bg-[#c81916] transition-all duration-200 transform active:scale-95 shadow-2xl flex items-center justify-center gap-3 cursor-pointer mx-auto"
          >
            <span>QUERO MEU ACESSO</span>
          </button>
        </motion.div>

        {/* 4. Prova Social de Makers (AVALIAÇÃO 4.9 com 5 Avatares e Estrelas Douradas) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col items-center justify-center mt-8 pt-2 mx-auto"
        >
          {/* Avatares Sobrepostos */}
          <div className="flex items-center justify-center">
            <div className="flex -space-x-3">
              <img className="w-11 h-11 md:w-12 md:h-12 rounded-full border-[3px] border-white object-cover shadow-lg" src="/assets/images/avatar_44.webp" alt="Maker 1" loading="lazy" decoding="async" />
              <img className="w-11 h-11 md:w-12 md:h-12 rounded-full border-[3px] border-white object-cover shadow-lg" src="/assets/images/avatar_33.webp" alt="Maker 2" loading="lazy" decoding="async" />
              <img className="w-11 h-11 md:w-12 md:h-12 rounded-full border-[3px] border-white object-cover shadow-lg" src="/assets/images/avatar_47.webp" alt="Maker 3" loading="lazy" decoding="async" />
              <img className="w-11 h-11 md:w-12 md:h-12 rounded-full border-[3px] border-white object-cover shadow-lg" src="/assets/images/avatar_12.webp" alt="Maker 4" loading="lazy" decoding="async" />
              <img className="w-11 h-11 md:w-12 md:h-12 rounded-full border-[3px] border-white object-cover shadow-lg" src="/assets/images/avatar_11.webp" alt="Maker 5" loading="lazy" decoding="async" />
            </div>
          </div>

          {/* Avaliação e Estrelas */}
          <div className="mt-4 flex flex-col items-center">
            <span className="text-white font-bold text-base md:text-lg tracking-widest uppercase drop-shadow-md">
              AVALIAÇÃO 4.9!
            </span>
            <div className="flex items-center gap-1.5 mt-2">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-6 h-6 text-[#FFD700] drop-shadow-md fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
