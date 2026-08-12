import React from 'react';
import { motion } from 'framer-motion';

export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Você recebe o acesso',
      icon: (
        <svg className="w-8 h-8 text-[#006cb7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
        </svg>
      ),
      badgeColor: 'border-[#006cb7]/50 text-[#006cb7] bg-[#006cb7]/10',
      accentBorder: 'hover:border-[#006cb7] hover:shadow-[0_0_35px_rgba(0,108,183,0.35)]'
    },
    {
      number: '02',
      title: 'Escolhe o modelo',
      icon: (
        <svg className="w-8 h-8 text-[#006cb7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
        </svg>
      ),
      badgeColor: 'border-[#006cb7]/50 text-[#006cb7] bg-[#006cb7]/10',
      accentBorder: 'hover:border-[#006cb7] hover:shadow-[0_0_35px_rgba(0,108,183,0.35)]'
    },
    {
      number: '03',
      title: 'Baixe e mande pra impressora',
      icon: (
        <svg className="w-8 h-8 text-[#006cb7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
        </svg>
      ),
      badgeColor: 'border-[#006cb7]/50 text-[#006cb7] bg-[#006cb7]/10',
      accentBorder: 'hover:border-[#006cb7] hover:shadow-[0_0_35px_rgba(0,108,183,0.35)]'
    }
  ];

  return (
    <section id="como-funciona" className="py-16 md:py-24 bg-black border-b border-white/10 relative overflow-hidden">
      {/* Fundo sutil de studs lego */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none overflow-hidden">
        <img 
          src="/assets/images/lego_studs_bg.webp" 
          alt="LEGO Background" 
          className="w-full h-full object-cover grayscale brightness-50 contrast-110 opacity-15" 
          loading="lazy" 
          decoding="async" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80" />
      </div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="text-center mb-12">
          <span className="text-[#006cb7] font-display font-black text-xs md:text-sm uppercase tracking-[0.2em] mb-2 inline-block">
            SIMPLICIDADE & VELOCIDADE
          </span>
          <h2 className="font-display font-black text-3xl sm:text-5xl md:text-6xl uppercase tracking-tight text-white">
            COMO <span className="text-[#006cb7]">FUNCIONA</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 relative">
          {/* Linha conectora em telas desktop */}
          <div className="hidden md:block absolute top-1/2 left-12 right-12 h-0.5 bg-[#006cb7]/40 -translate-y-12 z-0 pointer-events-none" />

          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.12 }}
              className={`bg-white/5 border border-white/15 rounded-2xl p-6 sm:p-8 flex flex-col items-center text-center backdrop-blur-md relative z-10 transition-all duration-300 shadow-xl group ${step.accentBorder}`}
            >
              {/* Ícone */}
              <div className="w-16 h-16 rounded-2xl bg-black/60 border border-[#006cb7]/30 flex items-center justify-center mb-5 shadow-inner">
                {step.icon}
              </div>

              {/* Badge Etapa */}
              <span className={`text-[11px] font-black font-display tracking-widest uppercase mb-4 px-3.5 py-1 rounded-full border ${step.badgeColor}`}>
                ETAPA {step.number}
              </span>

              {/* Título sem descrição */}
              <h3 className="font-display font-black text-lg sm:text-xl md:text-2xl text-white uppercase tracking-tight group-hover:text-white transition-colors leading-snug">
                {step.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
