import React from 'react';
import { motion } from 'framer-motion';

export default function SportsPack() {
  return (
    <div className="relative w-full flex flex-col">
      {/* ==================== SEÇÃO VISUAL PRINCIPAL ==================== */}
      <section className="relative z-20 w-full overflow-hidden bg-black py-0 border-b border-white/10 flex flex-col items-center justify-between min-h-[580px] md:min-h-[720px]">
        
        {/* TÍTULO NO TOPO DA SEÇÃO: NOVIDADE */}
        <div className="absolute top-6 sm:top-8 md:top-10 inset-x-0 z-40 text-center flex items-center justify-center pointer-events-none px-4">
          <motion.span 
            animate={{ scale: [1, 1.06, 1] }}
            transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
            className="bg-[#e52521] text-white font-display font-black text-2xl sm:text-4xl md:text-5xl py-2.5 px-8 sm:px-12 uppercase tracking-widest rounded-none border-2 border-white/20 shadow-[0_0_35px_rgba(229,37,33,0.7)]"
          >
            NOVIDADE
          </motion.span>
        </div>

        {/* ==================== FUNDO MEIO A MEIO FULL HEIGHT ==================== */}
        <div className="absolute inset-0 w-full h-full z-0 pointer-events-none overflow-hidden flex">
          {/* Metade Esquerda (0% a 50%): Imagem F1 Quadriculada Invertida Horizontalmente (Full Height) */}
          <div className="w-1/2 h-full relative overflow-hidden border-r border-white/10">
            <img 
              src="/assets/images/sports_bg_racing.webp" 
              alt="F1 Racing Checkered Background" 
              className="w-full h-full object-cover -scale-x-1"
            />
          </div>

          {/* Metade Direita (50% a 100%): Imagem do Estádio de Futebol Original (Full Height) */}
          <div className="w-1/2 h-full relative overflow-hidden">
            <img 
              src="/assets/images/sports_bg_stadium.webp" 
              alt="Soccer Stadium Background" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* ==================== CONTAINER PRINCIPAL DOS PERSONAGENS ==================== */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="relative w-full flex-1 flex items-end justify-between z-30 min-h-[520px] md:min-h-[660px]"
        >
          {/* ==================== EXTREMIDADE ESQUERDA: PILOTO F1 + CARRO FERRARI ==================== */}
          <div className="relative flex items-end justify-start w-1/2 h-full">
            {/* 1º: Carro de F1 Ferrari */}
            <motion.div 
              variants={{
                hidden: { opacity: 0, x: -140 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1], delay: 0.0 } }
              }}
              className="absolute -left-16 sm:-left-28 md:-left-40 lg:-left-52 bottom-[25px] sm:bottom-[35px] md:bottom-[45px] z-10 w-[570px] sm:w-[900px] md:w-[1200px] lg:w-[1560px] max-w-[85vw] drop-shadow-[0_15px_30px_rgba(0,0,0,0.85)]"
            >
              <img
                src="/assets/images/sports_f1_car.webp"
                alt="Carro de F1 LEGO 3D Ferrari"
                className="w-full h-auto object-contain"
              />
            </motion.div>

            {/* 2º: Piloto de F1 Minifigura */}
            <motion.div 
              variants={{
                hidden: { opacity: 0, x: -140 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1], delay: 0.25 } }
              }}
              className="absolute -left-16 sm:-left-24 md:-left-36 lg:-left-44 bottom-8 sm:bottom-12 md:bottom-16 z-20 w-60 sm:w-96 md:w-[480px] lg:w-[560px] pointer-events-none drop-shadow-[0_20px_40px_rgba(0,0,0,0.95)]"
            >
              <img
                src="/assets/images/sports_f1_driver.webp"
                alt="Piloto F1 Minifigura LEGO 3D"
                className="w-full h-auto object-contain"
              />
            </motion.div>
          </div>

          {/* ==================== EXTREMIDADE DIREITA: JOGADOR DE FUTEBOL + TAÇA FIFA ==================== */}
          <div className="relative flex items-end justify-end w-1/2 h-full">
            {/* 3º: Taça da Copa do Mundo FIFA */}
            <motion.div 
              variants={{
                hidden: { opacity: 0, x: 140 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1], delay: 0.45 } }
              }}
              className="absolute -right-3 sm:-right-14 md:-right-20 lg:-right-24 bottom-[35px] sm:bottom-[45px] md:bottom-[55px] z-10 w-56 sm:w-88 md:w-[460px] lg:w-[560px] max-w-[48vw] drop-shadow-[0_15px_30px_rgba(0,0,0,0.85)]"
            >
              <img
                src="/assets/images/sports_trophy.webp"
                alt="Taça da Copa do Mundo FIFA LEGO 3D"
                className="w-full h-auto object-contain"
              />
            </motion.div>

            {/* 4º: Jogador de Futebol Minifigura */}
            <motion.div 
              variants={{
                hidden: { opacity: 0, x: 140 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1], delay: 0.65 } }
              }}
              className="absolute -right-16 sm:-right-24 md:-right-36 lg:-right-44 bottom-8 sm:bottom-12 md:bottom-16 z-20 w-60 sm:w-96 md:w-[480px] lg:w-[560px] pointer-events-none drop-shadow-[0_20px_40px_rgba(0,0,0,0.95)]"
            >
              <img
                src="/assets/images/sports_soccer_player.webp"
                alt="Jogador de Futebol Minifigura LEGO 3D"
                className="w-full h-auto object-contain"
              />
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* ==================== BARRA ACOPLADA FULL WIDTH ==================== */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
        className="w-full relative z-30 flex flex-col md:flex-row border-b border-white/10"
      >
        {/* METADE ESQUERDA (50%): NOVO NO PACK */}
        <div className="relative w-full md:w-1/2 min-h-[200px] md:min-h-[240px] p-6 sm:p-10 flex flex-col items-center justify-center overflow-hidden border-b md:border-b-0 md:border-r border-white/10">
          <img 
            src="/assets/images/sports_bg_racing.webp" 
            alt="F1 Background" 
            className="absolute inset-0 w-full h-full object-cover -scale-x-1 z-0 brightness-100 opacity-100" loading="lazy" decoding="async" />
          
          <div className="absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-black/85 via-black/35 to-transparent z-10" />

          {/* TAG NOVO NO PACK */}
          <span className="absolute top-0 left-0 bg-[#e52521] text-white font-black text-xs sm:text-sm md:text-base px-5 py-2 uppercase tracking-wider shadow-md rounded-none z-20">
            NOVO NO PACK
          </span>

          <div className="relative z-20 max-w-xl mx-auto w-full text-center pt-5">
            <h3 className="text-white font-display font-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl uppercase tracking-tight mb-3 drop-shadow-[0_4px_12px_rgba(0,0,0,0.95)] leading-none">
              PACK CARROS ESPORTIVOS & PILOTOS
            </h3>
            <p className="text-white font-semibold text-sm sm:text-base md:text-lg leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]">
              Super carros de F1 de alta performance e minifiguras articuladas dos maiores pilotos do automobilismo mundial!
            </p>
          </div>
        </div>

        {/* METADE DIREITA (50%): NOVO NO PACK */}
        <div className="relative w-full md:w-1/2 min-h-[200px] md:min-h-[240px] p-6 sm:p-10 flex flex-col items-center justify-center overflow-hidden">
          <img 
            src="/assets/images/sports_bg_worldcup_players.webp" 
            alt="World Cup Lego Players Background" 
            className="absolute inset-0 w-full h-full object-cover z-0 brightness-100 opacity-100" loading="lazy" decoding="async" />
          
          <div className="absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-black/85 via-black/35 to-transparent z-10" />

          {/* TAG NOVO NO PACK */}
          <span className="absolute top-0 right-0 bg-[#006cb7] text-white font-black text-xs sm:text-sm md:text-base px-5 py-2 uppercase tracking-wider shadow-md rounded-none z-20">
            NOVO NO PACK
          </span>

          <div className="relative z-20 max-w-xl mx-auto w-full text-center pt-5">
            <h3 className="text-white font-display font-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl uppercase tracking-tight mb-3 drop-shadow-[0_4px_12px_rgba(0,0,0,0.95)] leading-none">
              PACK COPA DO MUNDO 2026
            </h3>
            <p className="text-white font-semibold text-sm sm:text-base md:text-lg leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]">
              Todos os personagens e astros do futebol mundial em minifiguras Lego + a icônica Taça World Cup 3D em peças!
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
