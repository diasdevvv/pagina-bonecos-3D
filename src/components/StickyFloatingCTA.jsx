import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function StickyFloatingCTA() {
  const [showCTA, setShowCTA] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Exibe o CTA flutuante apenas quando o usuário rolou a página além do Hero (>500px)
      if (window.scrollY > 500) {
        setShowCTA(true);
      } else {
        setShowCTA(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToPricing = () => {
    const pricingEl = document.getElementById('pricing') || document.getElementById('oferta');
    if (pricingEl) {
      pricingEl.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = '#pricing';
    }
  };

  return (
    <AnimatePresence>
      {showCTA && (
        <div className="fixed bottom-6 sm:bottom-8 inset-x-0 z-50 md:hidden flex justify-center items-center pointer-events-none px-4">
          <motion.button
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 80, opacity: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
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
