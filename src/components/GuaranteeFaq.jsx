import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function GuaranteeFaq() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: 'Como vou receber o acesso aos arquivos?',
      a: 'O acesso é 100% imediato e enviado para o seu e-mail logo após a confirmação do pagamento. Você receberá um login e senha para acessar nossa plataforma organizada com todos os arquivos prontos para download.'
    },
    {
      q: 'Quais impressoras são compatíveis com os modelos?',
      a: 'Todos os modelos são compatíveis com qualquer impressora 3D do mercado, sejam elas FDM (filament: Creality, Bambu Lab, Ender, Artillery, Neptune, Prusa) ou de Resina (Elegoo, Anycubic, Phrozen).'
    },
    {
      q: 'Como funciona a Garantia Blindada de 7 Dias?',
      a: 'Você pode testar e baixar os modelos por 7 dias inteiros. Se por qualquer motivo você achar que o material não é para você, basta nos enviar uma mensagem e devolveremos 100% do seu dinheiro investido sem burocracia.'
    },
    {
      q: 'O acesso é mensal ou pagamento único?',
      a: 'É pagamento único! Você paga apenas uma vez e tem acesso vitalício a todo o ecossistema, arquivos e atualizações sem nenhuma cobrança recorrente ou mensalidade.'
    },
    {
      q: 'Os modelos já vêm testados para encaixes perfeitos?',
      a: 'Sim! Todas as minifiguras e peças articuladas passam por testes prévios de montagem para garantir que os encaixes fiquem firmes e precisos após a impressão.'
    }
  ];

  const toggleFaq = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-16 md:py-24 bg-black border-b border-white/10 relative overflow-hidden">
      {/* Fundo de Blocos LEGO P&B com 25% de visibilidade */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none overflow-hidden">
        <img 
          src="/assets/images/lego_studs_bg.webp" 
          alt="LEGO Bricks Background" 
          className="w-full h-full object-cover grayscale brightness-50 contrast-110 opacity-25" loading="lazy" decoding="async" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
      </div>

      <div className="container mx-auto px-4 max-w-4xl pt-4 relative z-10">
        {/* Card de Garantia */}
        <div className="glass-card border-2 border-[#006cb7]/40 rounded-none p-8 md:p-12 shadow-2xl flex flex-col gap-10 mb-16">
          <div className="flex flex-col md:flex-row items-center gap-8 lg:gap-12">
            <div className="w-40 h-40 md:w-48 md:h-48 flex-shrink-0 relative">
              <img 
                src="/assets/images/garantia.webp" 
                alt="Selo de Garantia 7 Dias" 
                className="w-full h-full object-contain drop-shadow-[0_10px_25px_rgba(0,108,183,0.4)]" loading="lazy" decoding="async" />
            </div>

            <div className="text-center md:text-left">
              <h2 className="font-display font-black text-2xl md:text-3xl uppercase tracking-widest mb-4 text-white">
                Sua compra é <span className="text-[#006cb7]">100% protegida</span>
              </h2>
              <p className="text-sm md:text-base text-white/80 font-medium leading-relaxed">
                Você tem 7 dias de garantia incondicional. Se por qualquer motivo não gostar da biblioteca ou achar que os modelos não agregam ao seu negócio de impressão 3D, devolvemos 100% do seu dinheiro. Sem letras miúdas.
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Accordion no estilo Crocheverse (Dark Mode) */}
        <div className="w-full max-w-3xl mx-auto">
          <h2 className="font-display font-black text-3xl md:text-5xl text-center uppercase tracking-tight text-white mb-8">
            PERGUNTAS <span className="text-[#e52521]">FREQUENTES</span>
          </h2>

          <div className="space-y-3.5 w-full">
            {faqs.map((faq, idx) => (
              <details 
                key={idx} 
                className="group bg-white/5 border border-white/15 rounded-2xl shadow-xl overflow-hidden [&_summary::-webkit-details-marker]:hidden transition-all duration-300 hover:border-white/30"
              >
                <summary className="flex justify-center items-center font-display font-bold text-xs sm:text-sm md:text-base py-5 px-6 sm:px-12 cursor-pointer list-none text-white hover:bg-white/10 transition-colors uppercase tracking-normal md:tracking-wide text-center relative">
                  <span>{faq.q}</span>
                  <span className="absolute right-4 md:right-6 transition-transform duration-300 group-open:rotate-180 opacity-70 text-white">
                    <svg fill="none" height="18" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" width="18">
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </summary>
                <div className="text-white/80 font-light p-6 pt-0 text-sm md:text-base border-t border-white/10 mt-2 text-center mx-auto max-w-2xl leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
