import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { trackInitiateCheckout } from '../utils/metaPixel';

export default function PricingSection({ isUpsellOpen: controlledUpsellOpen, setIsUpsellOpen: controlledSetUpsellOpen }) {
  const [showTimer, setShowTimer] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ hours: '00', minutes: '00', seconds: '00' });
  const [internalUpsellOpen, setInternalUpsellOpen] = useState(false);

  const isUpsellOpen = controlledUpsellOpen !== undefined ? controlledUpsellOpen : internalUpsellOpen;
  const setIsUpsellOpen = controlledSetUpsellOpen || setInternalUpsellOpen;

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsUpsellOpen(false);
      }
    };
    if (isUpsellOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isUpsellOpen]);

  useEffect(() => {
    const updateTimer = () => {
      const now = new Date();
      const currentHour = now.getHours();

      // Exibe o timer apenas após as 19:00 (19h em diante)
      if (currentHour >= 19) {
        setShowTimer(true);

        const endOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59);
        const difference = Math.max(0, Math.floor((endOfDay - now) / 1000));

        const hours = String(Math.floor(difference / 3600)).padStart(2, '0');
        const minutes = String(Math.floor((difference % 3600) / 60)).padStart(2, '0');
        const seconds = String(difference % 60).padStart(2, '0');

        setTimeLeft({ hours, minutes, seconds });
      } else {
        setShowTimer(false);
      }
    };

    updateTimer();
    const timer = setInterval(updateTimer, 1000);
    return () => clearInterval(timer);
  }, []);

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

        <div className="w-full max-w-5xl mx-auto flex flex-col items-center justify-center gap-8 lg:flex-row lg:items-stretch">
          {/* Plano Básico - R$ 17,90 */}
          <div className="w-full max-w-md mx-auto bg-[#0F0F14]/90 backdrop-blur-md border-2 border-white/20 rounded-none overflow-hidden relative shadow-xl flex flex-col justify-between">
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
                  width={300}
                  height={300}
                  className="w-full max-w-[140px] md:max-w-[160px] h-auto object-contain drop-shadow-md pointer-events-none"
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
                  <li className="flex items-center gap-3"><span className="text-[#006cb7] font-bold">✓</span> <strong className="text-white">80 Modelos</strong></li>
                  <li className="flex items-center gap-3"><span className="text-[#006cb7] font-bold">✓</span> Arquivos STL Limpos</li>
                  <li className="flex items-center gap-3"><span className="text-white/40 font-bold">✕</span> <span className="text-white/50">Sem bônus</span></li>
                  <li className="flex items-center gap-3"><span className="text-white/40 font-bold">✕</span> <span className="text-white/50">Sem Atualizações</span></li>
                </ul>
              </div>
            </div>

            <div className="p-6 md:p-8 pt-0 flex flex-col items-center">
              <button
                type="button"
                onClick={() => setIsUpsellOpen(true)}
                className="block w-full bg-[#006cb7] hover:bg-[#0055bf] text-white font-display font-black uppercase text-center text-sm py-4 px-6 rounded-none transition-colors shadow-lg cursor-pointer"
              >
                QUERO O PACOTE BÁSICO
              </button>

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

          {/* Plano Completo - R$ 47,90 (ACESSO 3D PRO) */}
          <div className="w-full max-w-md mx-auto bg-[#0F0F14]/90 backdrop-blur-md border-2 border-[#e52521] rounded-none overflow-hidden relative shadow-2xl flex flex-col justify-between transform lg:-translate-y-4">
            {/* Personagens Espiando nas Laterais do Card ACESSO 3D PRO */}
            {/* Piloto F1 espiando no canto esquerdo */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="absolute left-[-35%] top-[38%] -translate-y-1/2 z-20 pointer-events-none overflow-hidden"
            >
              <img
                src="/assets/images/sports_f1_driver.webp"
                alt="Piloto F1 Lego espiando"
                width={320}
                height={400}
                className="h-28 sm:h-36 md:h-44 object-contain transform rotate-12 -translate-x-6 sm:-translate-x-8 md:-translate-x-10 drop-shadow-[0_12px_24px_rgba(0,0,0,0.95)]"
                loading="lazy"
                decoding="async"
              />
            </motion.div>

            {/* Jogador de Futebol espiando no canto direito */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="absolute right-[-35%] top-[62%] -translate-y-1/2 z-20 pointer-events-none overflow-hidden"
            >
              <img
                src="/assets/images/sports_soccer_player.webp"
                alt="Jogador de Futebol Lego espiando"
                width={320}
                height={400}
                className="h-28 sm:h-36 md:h-44 object-contain transform -rotate-12 translate-x-6 sm:translate-x-8 md:translate-x-10 drop-shadow-[0_12px_24px_rgba(0,0,0,0.95)]"
                loading="lazy"
                decoding="async"
              />
            </motion.div>

            <div>
              <div className="py-6 text-center relative bg-gradient-to-b from-[#1e1414] to-[#0F0F14]">
                <h3 className="text-white font-display font-black text-2xl md:text-3xl uppercase tracking-tighter relative z-10">
                  ACESSO <span className="text-[#e52521]">3D PRO</span>
                </h3>
              </div>

              <div className="bg-gradient-to-r from-[#e52521] via-[#006cb7] to-[#e52521] py-3 px-4 shadow-lg">
                <p className="font-black text-white text-center">
                  <span className="block text-[11px] md:text-[13px] uppercase tracking-[0.2em] opacity-90 mb-0.5">O MAIS COMPLETO DO MERCADO</span>
                  <span className="block text-sm md:text-base uppercase tracking-tight">+500 MODELOS LEGO STL/3MF + TODAS COLEÇÕES + BÔNUS</span>
                </p>
              </div>

              {/* Timer Contagem Regressiva para o Fim do Dia (Exibido apenas após as 19:00) */}
              {showTimer && (
                <div className="bg-black/90 border-y border-[#e52521]/40 py-2 px-3 flex flex-col sm:flex-row items-center justify-center gap-1.5 sm:gap-3 text-center shadow-inner">
                  <span className="text-[#e52521] font-black text-xs uppercase tracking-wider flex items-center gap-1.5">
                    <span className="inline-block w-2 h-2 rounded-full bg-[#e52521] animate-ping" />
                    OFERTA EXPIRA EM:
                  </span>
                  <div className="flex items-center gap-1 font-mono font-black text-white text-sm sm:text-base">
                    <span className="bg-[#e52521] text-white px-2 py-0.5 rounded-none font-mono font-black shadow-md">{timeLeft.hours}h</span>
                    <span className="text-[#e52521] font-black">:</span>
                    <span className="bg-[#e52521] text-white px-2 py-0.5 rounded-none font-mono font-black shadow-md">{timeLeft.minutes}m</span>
                    <span className="text-[#e52521] font-black">:</span>
                    <span className="bg-[#e52521] text-white px-2 py-0.5 rounded-none font-mono font-black shadow-md">{timeLeft.seconds}s</span>
                  </div>
                </div>
              )}

              {/* Imagem de Destaque das Cabeças Lego no Plano Full */}
              <div className="w-full pt-4 px-6 flex justify-center items-center">
                <img
                  src="/assets/images/plano_full.webp"
                  alt="Modelos Exclusivos Lego 3D - Luffy e Harry Potter"
                  width={600}
                  height={600}
                  className="w-full max-w-[240px] md:max-w-[260px] h-auto object-contain drop-shadow-md pointer-events-none"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <div className="p-6 md:p-8 flex flex-col items-center text-center">
                <div className="flex items-center justify-center gap-2 mb-1">
                  <span className="text-white/50 line-through text-base sm:text-lg font-bold">De R$ 247,00</span>
                  <span className="bg-[#e52521] text-white font-black text-[11px] sm:text-xs uppercase px-2.5 py-0.5 shadow-md tracking-wider">
                    85% OFF
                  </span>
                </div>
                <p className="text-white/80 text-xs sm:text-sm uppercase tracking-widest font-bold mb-1">Por apenas</p>
                <div className="flex items-baseline justify-center gap-1.5 my-1">
                  <span className="text-yellow-400 font-bold text-2xl md:text-3xl">R$</span>
                  <span className="text-yellow-400 font-display font-black text-6xl sm:text-7xl md:text-8xl drop-shadow-[0_0_25px_rgba(250,204,21,0.45)] leading-none">47</span>
                  <span className="text-yellow-400 font-bold text-2xl md:text-3xl">,90</span>
                </div>
                <p className="text-[#00e676] text-xs uppercase tracking-widest font-black mt-2 mb-6 flex items-center justify-center gap-1.5">
                  <span className="inline-block w-2 h-2 rounded-full bg-[#00e676] animate-pulse"></span>
                  Acesso Imediato e Vitalício
                </p>

                <ul className="w-full text-left flex flex-col gap-3 text-sm text-white/90 font-medium border-t border-white/10 pt-6 mb-6">
                  <li className="flex items-center gap-3">
                    <span className="text-[#e52521] font-bold text-lg leading-none">✓</span>
                    <span className="leading-tight font-bold text-white">+500 Modelos LEGO STL/3MF</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-[#e52521] font-bold text-lg leading-none">✓</span>
                    <span className="leading-tight text-white font-semibold flex items-center gap-2">
                      Coleção F1 Corrida
                      <span className="bg-[#e52521] text-white text-[10px] font-black uppercase px-1.5 py-0.5 rounded-none tracking-wider shadow-sm">
                        NOVO
                      </span>
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-[#e52521] font-bold text-lg leading-none">✓</span>
                    <span className="leading-tight text-white font-semibold flex items-center gap-2">
                      Coleção Copa 2026 + Taça
                      <span className="bg-[#e52521] text-white text-[10px] font-black uppercase px-1.5 py-0.5 rounded-none tracking-wider shadow-sm">
                        NOVO
                      </span>
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-[#e52521] font-bold text-lg leading-none">✓</span>
                    <span className="leading-tight text-white font-semibold">Coleção Animes</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-[#e52521] font-bold text-lg leading-none">✓</span>
                    <span className="leading-tight text-white font-semibold">Coleção Star Wars</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-[#e52521] font-bold text-lg leading-none">✓</span>
                    <span className="leading-tight text-white font-semibold">Coleção DC/MARVEL</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-[#e52521] font-bold text-lg leading-none">✓</span>
                    <span className="leading-tight text-white font-semibold">Coleção Harry Potter</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-[#e52521] font-bold text-lg leading-none">✓</span>
                    <span className="leading-tight text-white font-semibold">Coleção Stranger Things</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-[#e52521] font-bold text-lg leading-none">✓</span>
                    <span className="leading-tight text-white font-semibold">Coleção Datas Comemorativas</span>
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

                  {/* OS 5 BÔNUS ESPECÍFICOS COM IMAGEM PEQUENA AO LADO DO TÍTULO */}
                  <li className="flex items-center gap-3">
                    <img src="/assets/images/bonus1.webp" alt="Bônus 1" className="w-7 h-7 object-contain rounded-none shrink-0" loading="lazy" decoding="async" />
                    <span className="leading-tight text-white font-bold">Bônus 1: CURSO DE IMPRESSÃO E FILAMENTO LEGO</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <img src="/assets/images/bonus5.webp" alt="Bônus 2" className="w-7 h-7 object-contain rounded-none shrink-0" loading="lazy" decoding="async" />
                    <span className="leading-tight text-white font-bold">Bônus 2: Pack Acessórios Lego</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <img src="/assets/images/bonus_construcao.webp" alt="Bônus 4" className="w-7 h-7 object-contain rounded-none shrink-0" loading="lazy" decoding="async" />
                    <span className="leading-tight text-white font-bold">Bônus 3: Pack Construção</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <img src="/assets/images/bonus2.webp" alt="Bônus 3" className="w-7 h-7 object-contain rounded-none shrink-0" loading="lazy" decoding="async" />
                    <span className="leading-tight text-white font-bold">Bônus 4: +100 Chaveiros Lego</span>
                  </li>

                  <li className="flex items-center gap-3">
                    <img src="/assets/images/bonus4.webp" alt="Bônus 5" className="w-7 h-7 object-cover rounded-none shrink-0" loading="lazy" decoding="async" />
                    <span className="leading-tight text-yellow-400 font-black uppercase">Bônus 5: Bônus Secreto Exclusivo</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="p-6 md:p-8 pt-0 flex flex-col items-center">
              <a
                href="https://pay.wiapy.com/vhnff1UKkDp-"
                onClick={(e) => handleCheckoutClick(e, 'ACESSO 3D PRO', 47.90, 'https://pay.wiapy.com/vhnff1UKkDp-')}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-[#e52521] hover:bg-[#c81916] text-white font-display font-black uppercase text-center text-base md:text-lg py-4 px-6 rounded-none transition-colors shadow-2xl border-2 border-white/20 cursor-pointer"
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

      {/* POP UP UPSELL - OFERTA DO PLANO PRO POR R$ 37,90 AO CLICAR NO BÁSICO */}
      <AnimatePresence>
        {isUpsellOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop com desfoque */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsUpsellOpen(false)}
              className="fixed inset-0 bg-black/85 backdrop-blur-md"
            />

            {/* Caixa do Pop Up */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-lg bg-[#0F0F14] border-2 border-[#e52521] shadow-[0_0_50px_rgba(229,37,33,0.35)] rounded-none z-10 overflow-hidden text-center my-auto p-5 sm:p-7"
            >
              {/* Botão Fechar (X) */}
              <button
                onClick={() => setIsUpsellOpen(false)}
                className="absolute top-3 right-3 text-white/50 hover:text-white transition-colors p-1 cursor-pointer"
                aria-label="Fechar"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Tag / Badge Topo */}
              <div className="inline-flex items-center gap-1.5 bg-[#e52521] text-white font-black text-[10px] sm:text-xs uppercase px-3 py-1 mb-3 shadow-md tracking-widest">
                <span>⚠️ ESPERE! OFERTA EXCLUSIVA</span>
              </div>

              {/* Título Principal */}
              <h3 className="text-white font-display font-black text-xl sm:text-2xl uppercase tracking-tight leading-tight mb-2">
                Leve o <span className="text-[#e52521]">ACESSO 3D PRO</span> por Apenas <span className="text-yellow-400">R$ 37,90</span>
              </h3>

              <p className="text-white/80 text-xs sm:text-sm mb-4 leading-relaxed max-w-md mx-auto">
                Por apenas <strong>mais R$ 20,00</strong>, desbloqueie a coleção completa com todos os +500 modelos, novas coleções todo mês e todos os 5 super bônus!
              </p>

              {/* Mini Lista de Vantagens */}
              <div className="bg-black/70 border border-white/10 p-3.5 sm:p-4 mb-4 text-left text-xs sm:text-sm space-y-2">
                <div className="flex items-center gap-2 text-white font-semibold">
                  <span className="text-[#00e676] font-bold text-sm">✓</span>
                  <span><strong>+500 Modelos LEGO STL/3MF</strong> (vs apenas 50 do básico)</span>
                </div>
                <div className="flex items-center gap-2 text-white font-semibold">
                  <span className="text-[#00e676] font-bold text-sm">✓</span>
                  <span><strong>Coleções F1, Copa 2026, Marvel, Animes</strong> e muito mais</span>
                </div>
                <div className="flex items-center gap-2 text-white font-semibold">
                  <span className="text-[#00e676] font-bold text-sm">✓</span>
                  <span className="text-yellow-400 font-bold">Atualizações Mensais + Todos os 5 Bônus Exclusivos</span>
                </div>
              </div>

              {/* Preço Promocional no Pop Up */}
              <div className="flex items-baseline justify-center gap-2 mb-4">
                <span className="text-white/50 line-through text-sm font-bold">De R$ 47,90</span>
                <span className="text-white/80 text-xs uppercase font-bold">por apenas</span>
                <span className="text-yellow-400 font-display font-black text-2xl sm:text-3xl drop-shadow-md">
                  R$ 37,90
                </span>
                <span className="text-white/60 text-xs font-semibold">(Pagamento Único)</span>
              </div>

              {/* Botão de Upgrade (Promoção) */}
              <button
                type="button"
                onClick={(e) => {
                  handleCheckoutClick(e, 'UPGRADE ACESSO 3D PRO (MODAL)', 37.90, 'https://pay.wiapy.com/k9BgShQLjkp6');
                  setIsUpsellOpen(false);
                }}
                className="w-full bg-[#e52521] hover:bg-[#c81916] text-white font-display font-black uppercase text-sm sm:text-base py-3.5 px-4 rounded-none transition-all shadow-xl border-2 border-white/20 transform active:scale-98 cursor-pointer mb-3 flex items-center justify-center gap-2"
              >
                <span>SIM! QUERO APROVEITAR POR R$ 37,90</span>
              </button>

              {/* Botão Secundário (Seguir com o Pacote Básico) */}
              <button
                type="button"
                onClick={(e) => {
                  handleCheckoutClick(e, 'PACOTE BÁSICO', 17.90, 'https://pay.wiapy.com/lY5XgbuCSOwG');
                  setIsUpsellOpen(false);
                }}
                className="text-white/60 hover:text-white text-xs sm:text-sm font-medium underline underline-offset-4 transition-colors cursor-pointer py-1 block w-full"
              >
                Não, obrigado. Quero apenas o Pacote Básico por R$ 17,90
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
