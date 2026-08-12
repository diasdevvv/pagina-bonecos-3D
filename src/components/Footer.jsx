import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#050507] pt-12 pb-16 border-t border-white/10 text-white/60 font-light text-xs text-center">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Brand */}
        <h2 className="text-[#006cb7] font-display font-black text-2xl md:text-3xl uppercase tracking-widest mb-3 inline-block drop-shadow-md">
          BLOCK 3D™
        </h2>
        <p className="mb-10 max-w-xl mx-auto opacity-80 leading-relaxed text-[13px] text-white/70">
          A maior e mais premium biblioteca de arquivos STL para impressão 3D em formato de bloco Lego do mercado.
        </p>

        {/* Security & Support (Trust Badges do Crocheverse - em modo Dark) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10 opacity-90 border-y border-white/10 py-8">
          <div className="flex flex-col items-center justify-center gap-2">
            <svg className="w-6 h-6 text-[#10B981] mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
            </svg>
            <span className="uppercase tracking-widest text-white font-bold text-[11px]">Ambiente 100% Seguro</span>
            <span className="text-[10px] opacity-60 text-white/70">Dados criptografados</span>
          </div>

          <div className="flex flex-col items-center justify-center gap-2">
            <svg className="w-6 h-6 text-[#e52521] mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
            </svg>
            <span className="uppercase tracking-widest text-white font-bold text-[11px]">Suporte Especializado</span>
            <span className="text-[10px] text-white/70">suporte.lego3dstl@gmail.com</span>
          </div>

          <div className="flex flex-col items-center justify-center gap-2">
            <svg className="w-6 h-6 text-[#e52521] mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
            </svg>
            <span className="uppercase tracking-widest text-white font-bold text-[11px]">Empresa Verificada</span>
            <span className="text-[10px] text-white/80 font-mono">CNPJ: 54.271.286/0001-79</span>
          </div>
        </div>

        {/* Links e Disclaimer */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-white/50 mb-6 font-semibold text-xs">
          <a href="#oferta" className="hover:text-white transition-colors">Termos de Uso</a>
          <span>•</span>
          <a href="#oferta" className="hover:text-white transition-colors">Políticas de Privacidade</a>
          <span>•</span>
          <a href="#oferta" className="hover:text-white transition-colors">Suporte ao Cliente</a>
        </div>

        <p className="text-white/40 text-[10px]">
          © {new Date().getFullYear()} LEGO 3D STL. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
