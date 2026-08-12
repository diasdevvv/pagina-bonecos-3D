import React from 'react';

export default function BonusSection() {
  const bonuses = [
    {
      badge: 'BÔNUS 1',
      title: 'Mini Curso de Impressão & Montagem 3D',
      subtitle: 'Aprenda o passo a passo completo para fatiar, imprimir e encaixar suas peças 3D com perfeição sem falhas.',
      img: 'bonus1.webp',
      value: 'R$ 97,00',
      color: 'bg-[#e52521]',
      border: 'border-[#e52521]/40'
    },
    {
      badge: 'BÔNUS 2',
      title: 'Pack Construção',
      subtitle: 'Imprima centenas de blocos diferenciados para construir seu próprio universo.',
      img: 'bonus5.webp',
      value: 'R$ 67,00',
      color: 'bg-[#006cb7]',
      border: 'border-[#006cb7]/40'
    },
    {
      badge: 'BÔNUS 3',
      title: '+100 Chaveiros 3D',
      subtitle: 'Modelos 3D exclusivos de chaveiros dos personagens mais populares para faturar rápido!',
      img: 'bonus2.webp',
      value: 'R$ 47,00',
      color: 'bg-[#006cb7]',
      border: 'border-[#006cb7]/40'
    },
    {
      badge: 'BÔNUS 4',
      title: 'BÔNUS SECRETO',
      subtitle: 'Um bônus surpresa exclusivo revelado imediatamente dentro da sua área de membros.',
      img: 'bonus4.webp',
      value: 'R$ 97,00',
      color: 'bg-[#e52521]',
      border: 'border-[#e52521]/40'
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-black border-b border-white/10 relative overflow-hidden">
      {/* Fundo de Blocos LEGO P&B com 20% de visibilidade */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none overflow-hidden">
        <img 
          src="/assets/images/lego_studs_bg.webp" 
          alt="LEGO Bricks Background" 
          className="w-full h-full object-cover grayscale brightness-50 contrast-110 opacity-20" loading="lazy" decoding="async" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80" />
      </div>

      <div className="container mx-auto px-4 max-w-5xl text-center relative z-10">
        <h3 className="text-white/80 text-lg md:text-2xl font-bold uppercase tracking-widest mb-2">
          E não para por aí...
        </h3>
        <h2 className="text-5xl md:text-7xl lg:text-8xl font-display font-black text-white uppercase tracking-tighter mb-4 drop-shadow-lg">
          TEM <span className="text-[#006cb7]">MAIS!</span>
        </h2>
        <p className="text-[#e52521] text-xl md:text-3xl font-light mb-8">
          Você também vai receber...
        </p>

        {/* Banner Indicador de Bônus Exclusivos */}
        <div className="inline-flex items-center justify-center gap-3 px-8 py-3 bg-gradient-to-r from-[#e52521] via-[#006cb7] to-[#e52521] text-white font-black font-display text-xl md:text-3xl uppercase tracking-widest mb-12 shadow-lg border-2 border-white/20">
          <span>4 BÔNUS EXCLUSIVOS</span>
          <span className="text-2xl md:text-3xl leading-none -mt-1">🎁</span>
        </div>

        {/* Cards de Bônus no Estilo Crocheverse (Azul para 1, 2, 3 e Dourado para o último) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 max-w-md lg:max-w-4xl mx-auto">
          {bonuses.map((bonus, idx) => {
            const isLast = idx === bonuses.length - 1;
            
            return (
              <div 
                key={idx} 
                className={`bg-white/5 border rounded-2xl p-6 sm:p-8 flex flex-col items-center justify-center text-center backdrop-blur-md overflow-hidden transition-all duration-300 ${
                  isLast 
                    ? 'border-t-2 border-t-yellow-400/80 border-yellow-500/40 shadow-lg shadow-yellow-500/10' 
                    : 'border-white/15 border-t-2 border-t-[#006cb7]/70 shadow-lg shadow-blue-500/10'
                }`}
              >
                {/* Badge Bônus (Azul para 1-3, Dourado para 4) */}
                <span className={`font-black font-display text-2xl md:text-4xl mb-3 tracking-widest ${
                  isLast ? 'text-yellow-400 drop-shadow' : 'text-[#006cb7] drop-shadow'
                }`}>
                  {bonus.badge}
                </span>

                {/* Título & Subtítulo */}
                <h4 className="text-white text-xl sm:text-2xl font-bold uppercase mb-2 leading-tight tracking-wide">
                  {bonus.title}
                </h4>
                <p className="text-white/70 text-xs sm:text-sm font-medium leading-relaxed mb-6 max-w-xs mx-auto">
                  {bonus.subtitle}
                </p>

                {/* Imagem do Bônus em PNG Flutuante compacta/menor */}
                <img 
                  src={`/assets/images/${bonus.img}`} 
                  alt={bonus.title} 
                  width={300}
                  height={300}
                  className="w-full max-w-[150px] sm:max-w-[170px] md:max-w-[180px] h-[140px] sm:h-[160px] md:h-[170px] object-contain my-1 drop-shadow-md pointer-events-none block" 
                  loading="lazy" 
                  decoding="async" 
                />

                {/* Valor Riscado (Azul/Dourado) e GRÁTIS em Verde Crocheverse */}
                <div className="mt-6 flex flex-col items-center">
                  <p className={`font-bold text-lg italic ${isLast ? 'text-yellow-400' : 'text-[#006cb7]'}`}>
                    Valor: <span className="line-through decoration-2">{bonus.value}</span>
                  </p>
                  <p className="text-[#10b981] font-black font-display text-4xl uppercase tracking-widest mt-1 drop-shadow-md">
                    GRÁTIS
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
