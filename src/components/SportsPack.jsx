import React from 'react';
import { motion } from 'framer-motion';

export default function SportsPack() {
  return (
    <div className="relative w-full flex flex-col">
      {/* ==================== LINHA DE PACKS: NATAL & HALLOWEEN ==================== */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
        className="w-full relative z-30 flex flex-col border-b border-white/10"
      >
        <div className="w-full flex flex-col md:flex-row">
          {/* CARD 1 (1/2): PACK NATAL */}
          <div className="relative w-full md:w-1/2 overflow-hidden border-b md:border-b-0 md:border-r border-white/10 group">
            <div className="aspect-video w-full relative">
              <img
                src="/assets/images/pack_natal_16x9.webp"
                alt="Pack Natal Lego 3D"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
                decoding="async"
              />

              <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black/90 via-black/50 to-transparent z-10 pointer-events-none" />

              {/* TAG */}
              <span className="absolute top-4 left-4 bg-[#e52521] text-white font-black text-xs px-3.5 py-1.5 uppercase tracking-wider shadow-md rounded-none z-20">
                NOVO NO PACK
              </span>

              <div className="absolute bottom-0 inset-x-0 z-20 text-center pb-4 px-4">
                <h3 className="text-white font-display font-black text-xl sm:text-2xl uppercase tracking-tight mb-1 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] leading-tight">
                  PACK EDIÇÃO ESPECIAL DE NATAL
                </h3>
                <p className="text-white/85 font-medium text-xs sm:text-sm leading-relaxed drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
                  Papai Noel, personagens com roupas natalinas, itens decorativos e muito mais.
                </p>
              </div>
            </div>
          </div>

          {/* CARD 2 (1/2): PACK HALLOWEEN */}
          <div className="relative w-full md:w-1/2 overflow-hidden group">
            <div className="aspect-video w-full relative">
              <img
                src="/assets/images/pack_halloween_16x9.webp"
                alt="Pack Halloween Terror Lego 3D"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
                decoding="async"
              />

              <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black/90 via-black/50 to-transparent z-10 pointer-events-none" />

              {/* TAG */}
              <span className="absolute top-4 right-4 bg-[#ff6600] text-white font-black text-xs px-3.5 py-1.5 uppercase tracking-wider shadow-md rounded-none z-20">
                NOVO NO PACK
              </span>

              <div className="absolute bottom-0 inset-x-0 z-20 text-center pb-4 px-4">
                <h3 className="text-white font-display font-black text-xl sm:text-2xl uppercase tracking-tight mb-1 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] leading-tight">
                  PACK HALLOWEEN & VILÕES DE TERROR
                </h3>
                <p className="text-white/85 font-medium text-xs sm:text-sm leading-relaxed drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
                  Pennywise, Freddy Krueger, Jason, Michael Myers, Chucky, Pânico, Abóboras e muito terror.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
