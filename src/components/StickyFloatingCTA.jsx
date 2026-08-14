import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function StickyFloatingCTA({ isUpsellOpen = false }) {
  const [showCTA, setShowCTA] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const pricingEl = document.getElementById('pricing') || document.getElementById('oferta');
      let isAtOrPastPricing = false;

      if (pricingEl) {
        const rect = pricingEl.getBoundingClientRect();
        // Oculta quando o topo da seção de preços entra na tela (75% da altura da viewport)
        if (rect.top <= window.innerHeight * 0.75) {
          isAtOrPastPricing = true;
        }
      }

      // Exibe apenas se rolou após o Hero (>450px) e ainda não chegou na seção de preços
      if (window.scrollY > 450 && !isAtOrPastPricing) {
        setShowCTA(true);
      } else {
        setShowCTA(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToPricing = () => {
    const pricingEl = document.getElementById('pricing') || document.getElementById('oferta');
    if (pricingEl) {
      pricingEl.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = '#oferta';
    }
  };

  const isVisible = showCTA && !isUpsellOpen;

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed bottom-6 sm:bottom-8 inset-x-0 z-40 md:hidden flex justify-center items-center pointer-events-none px-4">
          <motion.button
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 80, opacity: 0 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            onClick={scrollToPricing}
            className="pointer-events-auto bg-white text-[#e52521] font-display font-black text-lg sm:text-xl py-3 sm:py-3.5 px-6 sm:px-8 uppercase tracking-wider rounded-none border-2 border-[#e52521] shadow-[0_10px_35px_rgba(0,0,0,0.9)] hover:brightness-105 active:scale-95 transition-all flex items-center justify-center gap-3 cursor-pointer"
          >
            <span>QUERO MEU ACESSO</span>
            <span className="text-xl sm:text-2xl">➔</span>
          </motion.button>
        </div>
      )}
    </AnimatePresence>
  );
}
