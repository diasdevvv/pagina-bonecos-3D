import React from 'react';
import { motion } from 'framer-motion';

export default function VideoShowcase() {
  const scrollToPricing = () => {
    const pricingEl = document.getElementById('pricing') || document.getElementById('oferta');
    if (pricingEl) {
      pricingEl.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = '#oferta';
    }
  };

  return (
    <section className="py-10 md:py-14 bg-[#050507] border-b border-white/10 relative overflow-hidden">
      {/* Fundo sutil com padrão LEGO */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none overflow-hidden">
        <img
          src="/assets/images/lego_bg_pattern.webp"
          alt="LEGO Pattern Background"
          className="w-full h-full object-cover grayscale brightness-30 contrast-125 opacity-25"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/60 to-black/90" />
      </div>

      <div className="container mx-auto px-4 max-w-4xl relative z-10 flex flex-col items-center justify-center text-center">
        
        {/* Container do Vídeo Otimizado em Formato GIF Contínuo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 15 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-[320px] sm:max-w-[360px] md:max-w-[390px] relative mx-auto mb-6 sm:mb-8"
        >
          <div className="relative bg-[#0F0F14] border-2 border-white/20 p-2 sm:p-2.5 shadow-[0_0_35px_rgba(0,108,183,0.25)] rounded-none overflow-hidden">
            <div className="relative aspect-[9/16] bg-black overflow-hidden flex items-center justify-center">
              <video
                src="/videos/stl_showcase_video.mp4"
                poster="/assets/images/result_1.webp"
                playsInline
                autoPlay
                muted
                loop
                disablePictureInPicture
                disableRemotePlayback
                className="w-full h-full object-cover pointer-events-none"
              />
            </div>
          </div>
        </motion.div>

        {/* Botão de Ação CTA */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="w-full max-w-md mx-auto"
        >
          <button
            onClick={scrollToPricing}
            className="w-full bg-[#e52521] hover:bg-[#c81916] text-white font-display font-black uppercase text-center text-base sm:text-lg py-4 px-6 rounded-none transition-all shadow-2xl border-2 border-white/20 transform active:scale-98 cursor-pointer flex items-center justify-center gap-2"
          >
            <span>QUERO ACESSAR ESSES MODELOS</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </motion.div>

      </div>
    </section>
  );
}
