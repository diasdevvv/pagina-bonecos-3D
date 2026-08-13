import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const buyers = [
  { name: 'Lucas M.', city: 'São Paulo - SP' },
  { name: 'Matheus S.', city: 'Rio de Janeiro - RJ' },
  { name: 'Gabriel R.', city: 'Belo Horizonte - MG' },
  { name: 'Rodrigo C.', city: 'Curitiba - PR' },
  { name: 'Felipe A.', city: 'Porto Alegre - RS' },
  { name: 'Rafael B.', city: 'Campinas - SP' },
  { name: 'Bruno F.', city: 'Florianópolis - SC' },
  { name: 'Guilherme P.', city: 'Salvador - BA' },
  { name: 'Leandro T.', city: 'Brasília - DF' },
  { name: 'Thiago N.', city: 'Goiânia - GO' },
  { name: 'Carlos E.', city: 'Fortaleza - CE' },
  { name: 'Marcelo V.', city: 'Recife - PE' },
  { name: 'Diego K.', city: 'Manaus - AM' },
  { name: 'Vinícius O.', city: 'Vitória - ES' },
  { name: 'Alexandre G.', city: 'Ribeirão Preto - SP' },
  { name: 'Henrique D.', city: 'Niterói - RJ' },
  { name: 'Eduardo L.', city: 'Santos - SP' },
  { name: 'Leonardo M.', city: 'Joinville - SC' },
  { name: 'Gustavo H.', city: 'Londrina - PR' },
  { name: 'André W.', city: 'Caxias do Sul - RS' },
  { name: 'Fernando S.', city: 'Uberlândia - MG' },
  { name: 'Daniel R.', city: 'Belém - PA' },
  { name: 'Caio F.', city: 'São José dos Campos - SP' },
  { name: 'Murilo C.', city: 'Maringá - PR' },
  { name: 'Renan P.', city: 'Vila Velha - ES' },
  { name: 'Vitor H.', city: 'Campo Grande - MS' },
  { name: 'Samuel J.', city: 'Cuiabá - MT' },
  { name: 'Igor B.', city: 'Sorocaba - SP' },
  { name: 'Arthur V.', city: 'Juiz de Fora - MG' },
  { name: 'Fabiano R.', city: 'Natal - RN' },
];

export default function SocialProofPopup() {
  const [visible, setVisible] = useState(false);
  const [currentBuyer, setCurrentBuyer] = useState(buyers[0]);
  const [onlineCount, setOnlineCount] = useState(52);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    if (isDismissed) return;

    let timeoutId;

    const showNotification = () => {
      // Seleciona um comprador aleatório
      const randomBuyer = buyers[Math.floor(Math.random() * buyers.length)];
      setCurrentBuyer(randomBuyer);

      // Oscila o número de pessoas online entre 45 e 60
      const newOnline = Math.floor(Math.random() * (60 - 45 + 1)) + 45;
      setOnlineCount(newOnline);

      setVisible(true);

      // Oculta o popup após 4.5 segundos
      timeoutId = setTimeout(() => {
        setVisible(false);

        // Sorteia o próximo intervalo aumentado entre 18 e 38 segundos (18000ms a 38000ms)
        const nextInterval = Math.floor(Math.random() * (38000 - 18000 + 1)) + 18000;
        timeoutId = setTimeout(showNotification, nextInterval);
      }, 4500);
    };

    // Primeiro disparo após 6 segundos de carregamento da página
    timeoutId = setTimeout(showNotification, 6000);

    return () => clearTimeout(timeoutId);
  }, [isDismissed]);

  if (isDismissed) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, x: 30, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: 30, scale: 0.95 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="fixed top-12 sm:top-14 right-0 z-50 max-w-[200px] sm:max-w-[220px] w-full bg-[#0c0c12]/95 border-y border-l border-white/15 border-l-4 border-l-[#249831] p-2 shadow-[0_8px_30px_rgba(0,0,0,0.9)] backdrop-blur-md text-white font-sans text-[10px] sm:text-[10.5px] cursor-default rounded-none"
        >
          {/* Botão de Fechar Discreto */}
          <button
            onClick={() => {
              setVisible(false);
              setIsDismissed(true);
            }}
            className="absolute top-1 right-1 text-white/40 hover:text-white text-[9px] font-bold transition-colors p-0.5"
            title="Fechar"
          >
            ✕
          </button>

          <div className="flex items-start gap-2 pr-1.5">
            {/* Ícone de Verificado/Compra */}
            <div className="shrink-0 w-5 h-5 rounded-full bg-[#249831]/20 border border-[#249831]/50 flex items-center justify-center text-[#249831] font-black text-[10px] mt-0.5 shadow-sm">
              ✓
            </div>

            <div className="flex flex-col gap-0.5">
              <p className="font-medium text-white/90 leading-tight">
                <span className="font-bold text-white">{currentBuyer.name}</span> de <span className="text-white/80">{currentBuyer.city}</span>
              </p>
              <p className="text-[#249831] font-black uppercase text-[9px] sm:text-[9.5px] tracking-tight leading-tight">
                adquiriu o ACESSO 3D PRO
              </p>

              {/* Contador de Pessoas Online */}
              <div className="flex items-center gap-1 mt-0.5 pt-1 border-t border-white/10 text-[8.5px] text-white/70 font-semibold">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#249831] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#249831]"></span>
                </span>
                <span><strong className="text-white font-bold">{onlineCount} pessoas</strong> online</span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
