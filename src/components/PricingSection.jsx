import React from 'react';
import { motion } from 'framer-motion';
import { trackInitiateCheckout } from '../utils/metaPixel';

export default function PricingSection() {
  const handleCheckoutClick = (e, planName, price, targetUrl) => {
    e.preventDefault();
    const finalUrl = trackInitiateCheckout(planName, price, targetUrl);
    window.open(finalUrl, '_blank', 'noopener,noreferrer');
  };
  return (
    <section id="oferta" className="py-16 md:py-24 bg-black border-b border-white/10 relative overflow-hidden">
      {/* Fundo de Blocos LEGO P&B com 25% de visibilidade */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none overflow-hidden">
        <img 
          src="/assets/images/lego_studs_bg.webp" 
          alt="LEGO Bricks Background" 
          className="w-full h-full object-cover grayscale brightness-50 contrast-110 opacity-25" loading="lazy" decoding="async" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
      </div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="text-center mb-12 flex flex-col items-center justify-center">
          <h2 className="text-white font-display font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight mb-4 text-center leading-tight">
            ESCOLHA A COLEÇÃO<br /><span className="text-[#e52521]">PERFEITA PARA VOCÊ</span>
          </h2>
          <p className="text-white/80 font-medium text-lg text-center mx-auto">
            Acesso imediato aos modelos STL 3D.<br />Pagamento único sem mensalidades.
          </p>
        </div>

        <div className="w-full max-w-5xl mx-auto flex flex-col lg:flex-row items-stretch justify-center gap-8 lg:gap-8">
          {/* Plano Básico - R$ 17,90 */}
          <div className="w-full max-w-md bg-[#0F0F14]/90 backdrop-blur-md border-2 border-white/20 rounded-none overflow-hidden relative shadow-xl flex flex-col justify-between">
            <div>
              <div className="py-6 text-center bg-black/50 border-b border-white/10">
                <h3 className="text-white font-display font-black text-2xl uppercase tracking-tighter">
                  PACOTE <span className="text-[#006cb7]">BÁSICO</span>
                </h3>
              </div>

              {/* Imagem de Destaque do Bloco Lego Azul no Plano Start (Reduzida 20%) */}
              <div className="w-full pt-3 px-6 flex justify-center items-center">
                <img 
                  src="/assets/images/plano_start.webp" 
                  alt="Bloco 3D Lego Azul - Plano Básico" 
                  className="w-full max-w-[140px] md:max-w-[160px] h-auto object-contain drop-shadow-[0_10px_20px_rgba(0,108,183,0.35)] hover:scale-105 transition-transform duration-300 pointer-events-none"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <div className="p-6 md:p-8 flex flex-col items-center text-center">
                <div className="flex items-baseline justify-center gap-1 mb-2">
                  <span className="text-white/50 text-base font-bold">R$</span>
                  <span className="text-white font-display font-black text-5xl md:text-6xl">17</span>
                  <span className="text-white/70 text-lg font-bold">,90</span>
                </div>
                <p className="text-white/60 text-xs uppercase tracking-widest font-semibold mb-6">Pagamento Único</p>

                <ul className="w-full text-left flex flex-col gap-3.5 text-sm text-white/80 font-medium border-t border-white/10 pt-5 mb-6">
                  <li className="flex items-center gap-3"><span className="text-[#006cb7] font-bold">✓</span> <strong className="text-white">50 Modelos</strong></li>
                  <li className="flex items-center gap-3"><span className="text-[#006cb7] font-bold">✓</span> Arquivos STL Limpos</li>
                  <li className="flex items-center gap-3"><span className="text-white/40 font-bold">✕</span> <span className="text-white/50">Sem bônus</span></li>
                  <li className="flex items-center gap-3"><span className="text-white/40 font-bold">✕</span> <span className="text-white/50">Sem Licença Comercial</span></li>
                  <li className="flex items-center gap-3"><span className="text-white/40 font-bold">✕</span> <span className="text-white/50">Sem Atualizações</span></li>
                </ul>
              </div>
            </div>

            <div className="p-6 md:p-8 pt-0 flex flex-col items-center">
              <a
                href="https://pay.wiapy.com/lY5XgbuCSOwG"
                onClick={(e) => handleCheckoutClick(e, 'PACOTE BÁSICO', 17.90, 'https://pay.wiapy.com/lY5XgbuCSOwG')}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-[#006cb7] hover:bg-[#0055bf] text-white font-display font-black uppercase text-center text-sm py-4 px-6 rounded-none transition-transform hover:scale-105 shadow-lg cursor-pointer"
              >
                QUERO O PACOTE BÁSICO
              </a>

              {/* Aviso Exato da Imagem de Referência abaixo do Botão */}
              <div className="mt-5 pt-4 w-full border-t border-white/10 flex flex-col items-center justify-center text-center">
                <p className="text-[#ff5252] font-bold text-sm sm:text-base leading-snug max-w-xs mx-auto">
                  Atenção: temos uma oferta ainda mais vantajosa para você! Veja logo abaixo
                </p>

                <motion.div 
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 0.9, repeat: Infinity, ease: "easeInOut" }}
                  className="mt-3 text-[#ff5252] flex justify-center"
                >
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 5l-7 7-7-7m14 6l-7 7-7-7m14 6l-7 7-7-7" />
                  </svg>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Plano Completo - R$ 37,90 (ACESSO PRO 3D) */}
          <div className="w-full max-w-md bg-[#0F0F14]/90 backdrop-blur-md border-2 border-[#e52521] rounded-none overflow-hidden relative shadow-2xl flex flex-col justify-between transform lg:-translate-y-4">
            <div>
              <div className="py-6 text-center relative bg-gradient-to-b from-[#1e1414] to-[#0F0F14]">
                <h3 className="text-white font-display font-black text-2xl md:text-3xl uppercase tracking-tighter relative z-10">
                  ACESSO <span className="text-[#e52521]">PRO 3D</span>
                </h3>
              </div>

              <div className="bg-gradient-to-r from-[#e52521] via-[#006cb7] to-[#e52521] py-3 px-4 shadow-lg">
                <p className="font-black text-white text-center">
                  <span className="block text-[11px] md:text-[13px] uppercase tracking-[0.2em] opacity-90 mb-0.5">O MAIS COMPLETO DO MERCADO</span>
                  <span className="block text-sm md:text-base uppercase tracking-tight">+450 MODELOS LEGO STL/3MF + 4 BÔNUS EXCLUSIVOS</span>
                </p>
              </div>

              {/* Imagem de Destaque das Cabeças Lego no Plano Full */}
              <div className="w-full pt-4 px-6 flex justify-center items-center">
                <img 
                  src="/assets/images/plano_full.webp" 
                  alt="Modelos Exclusivos Lego 3D - Luffy e Harry Potter" 
                  className="w-full max-w-[240px] md:max-w-[260px] h-auto object-contain drop-shadow-[0_12px_24px_rgba(229,37,33,0.4)] hover:scale-105 transition-transform duration-300 pointer-events-none"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <div className="p-6 md:p-8 flex flex-col items-center text-center">
                <p className="text-2xl sm:text-3xl md:text-4xl text-[#e52521] font-black mb-1 italic drop-shadow-md">
                  De R$ <span className="line-through decoration-4">247,00</span>
                </p>
                <p className="text-white/70 text-xs sm:text-sm uppercase tracking-widest font-bold mb-1">Por apenas</p>
                <div className="flex items-baseline justify-center gap-1 my-1">
                  <span className="text-[#e52521] text-lg font-bold">R$</span>
                  <span className="text-white font-display font-black text-6xl md:text-7xl drop-shadow-md">37</span>
                  <span className="text-white/80 text-xl font-bold">,90</span>
                </div>
                <p className="text-[#006cb7] text-xs uppercase tracking-widest font-black mb-6">Acesso Imediato e Vitalício</p>

                <ul className="w-full text-left flex flex-col gap-3 text-sm text-white/90 font-medium border-t border-white/10 pt-6 mb-6">
                  <li className="flex items-center gap-3">
                    <span className="text-[#e52521] font-bold text-lg leading-none">✓</span> 
                    <span className="leading-tight font-bold text-white">+450 Modelos LEGO STL/3MF</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-[#e52521] font-bold text-lg leading-none">✓</span> 
                    <span className="leading-tight text-white font-semibold">Coleção F1 Corrida</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-[#e52521] font-bold text-lg leading-none">✓</span> 
                    <span className="leading-tight text-white font-semibold">Coleção Copa do Mundo 2026 + Taça</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-[#e52521] font-bold text-lg leading-none">✓</span> 
                    <span className="leading-tight text-white font-semibold">Coleção Super Heróis, Anime & Star Wars</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-[#e52521] font-bold text-lg leading-none">✓</span> 
                    <span className="leading-tight text-white font-semibold">Coleção Ninjago</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-[#e52521] font-bold text-lg leading-none">✓</span> 
                    <span className="leading-tight text-white font-semibold">Coleção Invencível</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-[#e52521] font-bold text-lg leading-none">✓</span> 
                    <span className="leading-tight text-white font-semibold">Coleção Pokémon</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-[#e52521] font-bold text-lg leading-none">✓</span> 
                    <span className="leading-tight text-white font-semibold">Coleção Desenhos Clássicos</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-[#e52521] font-bold text-lg leading-none">✓</span> 
                    <span className="leading-tight text-white font-semibold">+ Diversas Coleções Inclusas</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-[#e52521] font-bold text-lg leading-none">✓</span> 
                    <span className="leading-tight text-yellow-400 font-bold">Atualizações Mensais (NOVAS COLEÇÕES)</span>
                  </li>

                  <li className="w-full h-px bg-white/10 my-1" />

                  {/* OS 4 BÔNUS ESPECÍFICOS COM IMAGEM PEQUENA AO LADO DO TÍTULO */}
                  <li className="flex items-center gap-3">
                    <img src="/assets/images/bonus1.webp" alt="Bônus 1" className="w-7 h-7 object-contain rounded-none shrink-0" loading="lazy" decoding="async" />
                    <span className="leading-tight text-white font-bold">Bônus 1: Mini Curso de Impressão</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <img src="/assets/images/bonus5.webp" alt="Bônus 2" className="w-7 h-7 object-contain rounded-none shrink-0" loading="lazy" decoding="async" />
                    <span className="leading-tight text-white font-bold">Bônus 2: Coleção Construção</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <img src="/assets/images/bonus2.webp" alt="Bônus 3" className="w-7 h-7 object-contain rounded-none shrink-0" loading="lazy" decoding="async" />
                    <span className="leading-tight text-white font-bold">Bônus 3: +100 Chaveiros 3D</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <img src="/assets/images/bonus4.webp" alt="Bônus 4" className="w-7 h-7 object-cover rounded-none border border-white/20 shrink-0" loading="lazy" decoding="async" />
                    <span className="leading-tight text-yellow-400 font-black uppercase">Bônus 4: Bônus Secreto Exclusivo</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="p-6 md:p-8 pt-0 flex flex-col items-center">
              <a
                href="https://pay.wiapy.com/vhnff1UKkDp-"
                onClick={(e) => handleCheckoutClick(e, 'ACESSO PRO 3D', 37.90, 'https://pay.wiapy.com/vhnff1UKkDp-')}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-[#e52521] hover:bg-[#c81916] text-white font-display font-black uppercase text-center text-base md:text-lg py-4 px-6 rounded-none transition-transform hover:scale-105 shadow-2xl border-2 border-white/20 cursor-pointer"
              >
                QUERO A PROMOÇÃO
              </a>

              {/* Imagem de Métodos e Informações de Pagamento */}
              <div className="w-full mt-4 flex justify-center items-center">
                <img 
                  src="/assets/images/payment_methods.webp" 
                  alt="Formas de Pagamento - Wiapy, PIX, Visa, Mastercard" 
                  className="w-full max-w-[280px] h-auto object-contain opacity-90 brightness-110"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
