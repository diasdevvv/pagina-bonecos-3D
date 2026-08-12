import React from 'react';
import { motion } from 'framer-motion';

export default function VisualShowcase() {
  const famousAnimes = [
    'NARUTO SHIPPUDEN',
    'JUJUTSU KAISEN',
    'DRAGON BALL Z',
    'ONE PIECE',
    'DEMON SLAYER',
    'POKÉMON 3D',
    'E MUITO MAIS',
  ];

  return (
    <section className="relative z-20 w-full overflow-hidden bg-black pt-0 pb-16 md:pb-24 border-y border-white/10 flex flex-col justify-between">
      {/* UMA ÚNICA IMAGEM DE FUNDO P&B CONTÍNUA PARA AS DUAS SEÇÕES JUNTAS */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
        <img
          src="/assets/images/lego_bg_pattern.webp"
          alt="Minifiguras e Universo LEGO 3D"
          className="w-full h-full object-cover grayscale brightness-35 contrast-125 opacity-55 -scale-x-1" loading="lazy" decoding="async" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/90" />
      </div>

      {/* ==================== PARTE 1: UNIVERSO LEGO 3D (SPIDER-MAN DISPARA APENAS QUANDO A SEÇÃO É ALCANÇADA NA TELA) ==================== */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.35 }}
        className="relative w-full min-h-[440px] md:min-h-[500px] flex items-start justify-center pt-6 md:pt-8"
      >
        {/* Container Externo de Entrada do Homem-Aranha (Animação só dispara ao rolar até a seção) */}
        <motion.div
          variants={{
            hidden: { opacity: 0, x: -140, rotate: 30 },
            visible: { opacity: 1, x: 0, rotate: 0, transition: { duration: 2.4, ease: [0.16, 1, 0.3, 1] } }
          }}
          style={{ transformOrigin: 'top left' }}
          className="absolute top-0 left-0 sm:left-4 md:left-8 lg:left-12 z-30 w-48 sm:w-64 md:w-88 lg:w-[420px] max-w-[46vw] pointer-events-none drop-shadow-[0_25px_50px_rgba(0,0,0,0.95)]"
        >
          {/* Container Interno de Pêndulo Idle */}
          <motion.div
            animate={{
              rotate: [-1.5, 1.5, -1.5],
              y: [0, 4, 0],
            }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              repeatType: 'mirror',
              ease: 'easeInOut',
            }}
            style={{ transformOrigin: 'top left' }}
          >
            <img
              src="/assets/images/spiderman_swing.webp"
              alt="LEGO Spider-Man 3D"
              className="w-full h-auto object-contain" loading="lazy" decoding="async" />
          </motion.div>
        </motion.div>

        {/* Logos da MARVEL Studios (à esquerda) e DC (à direita) lado a lado na margem esquerda */}
        <motion.div
          variants={{
            hidden: { opacity: 0, x: -30 },
            visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.3 } }
          }}
          className="absolute bottom-2 sm:bottom-4 md:bottom-6 left-4 sm:left-8 md:left-12 z-40 flex items-center gap-4 sm:gap-6 md:gap-8 pointer-events-none"
        >
          {/* Nova Logo MARVEL Studios empilhada */}
          <img
            src="/assets/images/marvel_studios_official.webp"
            alt="Marvel Studios Logo"
            width={300}
            height={120}
            className="h-16 sm:h-24 md:h-32 lg:h-36 w-auto object-contain drop-shadow-md" loading="lazy" decoding="async" />

          {/* Logo DC */}
          <img
            src="/assets/images/dc_logo.webp"
            alt="DC Comics Logo"
            width={150}
            height={60}
            className="h-10 sm:h-14 md:h-18 lg:h-20 w-auto object-contain drop-shadow-md" loading="lazy" decoding="async" />
        </motion.div>

        {/* Conteúdo Textual em Destaque à Direita (Sem vãos, alinhado e responsivo) */}
        <div className="container mx-auto px-4 relative z-10 max-w-5xl flex flex-col items-end text-right pl-28 sm:pl-48 md:pl-72 pb-8 sm:pb-12 md:pb-16 pt-2">
          <span className="bg-[#e52521] text-white font-black font-display text-xs md:text-sm px-4 py-1.5 rounded-none uppercase tracking-widest mb-3 shadow-2xl">
            OS MAIS FAMOSOS
          </span>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-display font-black text-white uppercase tracking-tight leading-tight mb-4 drop-shadow-2xl">
            MAIS DE <span className="text-[#006cb7]">450 MODELOS</span> DE PERSONAGENS & MINIFIGURAS
          </h2>
          <p className="text-white/90 text-sm md:text-lg font-medium max-w-xl leading-relaxed mb-4 drop-shadow-md">
            Todos os personagens icônicos que seus clientes procuram, com encaixes perfeitos e prontos para impressão!
          </p>
        </div>
      </motion.div>

      {/* ==================== PARTE 2: ANIMES & HERÓIS (NARUTO CAINDO LENTAMENTE & YUJI) ==================== */}
      <div className="relative w-full min-h-[520px] md:min-h-[620px] flex items-start justify-center pt-4 md:pt-6">
        {/* Imagem do Naruto */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="absolute -top-24 sm:-top-36 md:-top-48 lg:-top-52 right-0 md:right-4 z-40 w-56 sm:w-80 md:w-[440px] max-w-[50vw] pointer-events-none drop-shadow-[0_25px_50px_rgba(0,108,183,0.9)]"
        >
          <motion.div
            animate={{
              y: [0, 35, 35, 0],
              rotate: [0, 2.5, 2.5, 0],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              repeatType: 'mirror',
              ease: 'easeInOut',
              times: [0, 0.42, 0.58, 1],
            }}
          >
            <img
              src="/assets/images/naruto_rasengan_flipped.webp"
              alt="LEGO Naruto Rasengan 3D"
              width={500}
              height={533}
              className="w-full h-auto object-contain" loading="lazy" decoding="async" />
          </motion.div>
        </motion.div>

        {/* Imagem do Yuji / Itadori */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="absolute -bottom-4 sm:-bottom-6 md:-bottom-8 left-4 sm:left-12 md:left-24 z-30 w-52 sm:w-72 md:w-96 -rotate-[15deg] pointer-events-none drop-shadow-[0_15px_30px_rgba(0,0,0,0.8)]"
        >
          <motion.div
            animate={{
              x: [0, 16, 16, 0],
              rotate: [0, 1.5, 1.5, 0],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              repeatType: 'mirror',
              ease: 'easeInOut',
              times: [0, 0.42, 0.58, 1],
            }}
          >
            <img
              src="/assets/images/itadori_flipped.webp"
              alt="LEGO Yuji Itadori Jujutsu Kaisen 3D"
              className="w-full h-72 sm:h-80 md:h-96 object-contain brightness-60 contrast-105" loading="lazy" decoding="async" />
          </motion.div>
        </motion.div>

        {/* Lista de Animes */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="absolute bottom-1 sm:bottom-2 md:bottom-3 right-4 sm:right-8 md:right-16 z-30 flex flex-col gap-2 sm:gap-2.5 max-w-[220px] sm:max-w-xs md:max-w-sm"
        >
          {famousAnimes.map((anime, idx) => (
            <div
              key={idx}
              className="bg-[#ffffff] rounded-none px-4 py-2 shadow-md cursor-default flex justify-center items-center text-center"
            >
              <span className="bg-[#e52521] bg-gradient-to-r from-black via-[#1c0404] to-[#800c0c] bg-clip-text text-transparent font-beast text-base sm:text-lg md:text-xl uppercase tracking-tighter leading-none font-extrabold">
                {anime}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Conteúdo Textual */}
        <div className="container mx-auto px-4 relative z-10 max-w-5xl flex flex-col items-start text-left pr-28 sm:pr-48 md:pr-80 pt-2 md:pt-4">
          <span className="bg-[#006cb7] text-[#ffffff] font-black font-display text-xs md:text-sm px-4 py-1.5 rounded-none uppercase tracking-widest mb-3 shadow-2xl">
            ALTA LUCRATIVIDADE
          </span>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-display font-black text-white uppercase tracking-tight leading-tight mb-4 drop-shadow-2xl">
            IMPRIMA <span className="text-[#e52521]">ANIMES & HERÓIS</span> EM ESCALA
          </h2>
          <p className="text-white/90 text-sm md:text-lg font-medium max-w-xl leading-relaxed mb-2 drop-shadow-md">
            Arquivos 100% limpos, pré-configurados e fáceis de fatiar para qualquer impressora 3D FDM ou Resina!
          </p>
        </div>
      </div>
    </section>
  );
}
