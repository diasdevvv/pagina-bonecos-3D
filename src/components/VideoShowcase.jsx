import React from 'react';

export default function VideoShowcase() {
  return (
    <section className="py-16 md:py-24 relative bg-black border-b border-white/10 overflow-hidden">
      {/* Fundo de Blocos LEGO P&B com 25% de visibilidade */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none overflow-hidden">
        <img 
          src="/assets/images/lego_studs_bg.webp" 
          alt="LEGO Bricks Background" 
          className="w-full h-full object-cover grayscale brightness-50 contrast-110 opacity-25" loading="lazy" decoding="async" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
      </div>

      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <div className="glass-card p-6 md:p-8 rounded-none border-2 border-[#006cb7]/50 relative overflow-hidden text-center shadow-2xl">
          <h2 className="font-display font-bold text-xl md:text-2xl text-white leading-relaxed relative z-10 mb-6">
            Os arquivos são de <span className="text-[#e52521] font-black uppercase">fácil visualização</span> e já vão organizados dentro do acesso para você clicar e imprimir!
          </h2>

          <div className="relative z-10 rounded-none overflow-hidden border-2 border-[#006cb7] shadow-2xl bg-black">
            <video 
              src="/assets/images/arquivo3d.mp4" 
              autoPlay 
              loop 
              muted 
              playsInline 
              className="w-full h-auto object-cover opacity-90"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
