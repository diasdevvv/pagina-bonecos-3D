import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function HeaderBar() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Quando a pessoa rola a página para baixo (mais de 80px), o header some suavemente subindo
      if (window.scrollY > 80) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.header
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="fixed top-0 inset-x-0 w-full z-50 bg-[#e52521] text-white py-2.5 px-4 border-b-2 border-white/20 shadow-2xl flex items-center justify-center text-center rounded-none"
        >
          <div className="flex items-center justify-center text-xs sm:text-sm md:text-base font-black uppercase tracking-widest">
            <span>APENAS HOJE 85% OFF</span>
          </div>
        </motion.header>
      )}
    </AnimatePresence>
  );
}
