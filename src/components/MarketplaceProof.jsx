import React from 'react';

export default function MarketplaceProof() {
  const proofs = [
    { img: 'modelo_lego_1_1785968557485.webp', title: 'Minifiguras LEGO 3D em Marketplace', price: 'R$ 89,90' },
    { img: 'modelo_lego_2_1785968605542.webp', title: 'Chaveiros e Colecionáveis LEGO 3D', price: 'R$ 64,90' },
    { img: 'modelo_lego_3_1785968659801.webp', title: 'Kits e Sets Completos Impressos', price: 'R$ 149,90' },
  ];

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

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="bg-[#e52521] text-white font-black text-xs uppercase px-4 py-1.5 rounded-none tracking-widest mb-3 inline-block shadow-2xl">
            ALTA DEMANDA & LUCRATIVIDADE
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-white uppercase tracking-tight mb-4">
            PROVA REAL DE <span className="text-[#006cb7]">VENDAS & MERCADO</span>
          </h2>
          <p className="text-base md:text-lg font-medium text-white/80 leading-relaxed">
            Esqueça as margens apertadas! Enquanto peças comuns de impressão 3D brigam por centavos, os modelos 3D estilo <strong className="text-[#006cb7]">LEGO</strong> são verdadeiros itens de colecionador. Veja a prova real de como eles são vendidos por valores premium nos maiores marketplaces do Brasil:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {proofs.map((item, idx) => (
            <div 
              key={idx} 
              className="glass-card rounded-none overflow-hidden border-2 border-white/20 hover:border-2-[#006cb7] transition-all duration-300 group shadow-xl"
            >
              <div className="relative overflow-hidden bg-black aspect-4/3">
                <img 
                  src={`/assets/images/${item.img}`} 
                  alt={item.title} 
                  width={400}
                  height={300}
                  className="w-full h-full object-cover" loading="lazy" decoding="async" />
              </div>
              <div className="p-5 flex flex-col justify-between">
                <h3 className="text-white font-bold text-base mb-2">{item.title}</h3>
                <div className="flex items-center justify-between mt-2 pt-3 border-t border-white/10">
                  <span className="text-white/60 text-xs uppercase font-medium">Preço Médio de Venda:</span>
                  <span className="text-[#006cb7] font-display font-black text-xl">{item.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a 
            href="#oferta" 
            className="inline-block bg-[#e52521] hover:bg-[#c81916] text-white font-display font-black uppercase text-sm md:text-base py-4 px-10 rounded-none shadow-2xl transition-colors border-2 border-white/20"
          >
            DESBLOQUEAR MEU ACESSO AGORA →
          </a>
        </div>
      </div>
    </section>
  );
}
