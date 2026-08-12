import React from 'react';

export default function ComparisonTable() {
  const features = [
    { name: 'Modelos Prontos para Impressão 3D', us: true, others: false },
    { name: 'Encaixes e Articulações Perfeitas', us: true, others: false },
    { name: 'Fatiamento Pré-Configurado (FDM & Resina)', us: true, others: false },
    { name: 'Personagens de Sucesso Mundial', us: true, others: 'Superficiais' },
    { name: 'Organização Intuitiva por Categorias', us: true, others: false },
    { name: 'Acesso Vitalício sem Mensalidades', us: true, others: false },
    { name: 'Suporte VIP e Atualizações de Modelos', us: true, others: false },
  ];

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

      <div className="container mx-auto px-2 md:px-4 max-w-5xl relative z-10">
        <h2 className="font-display font-black text-3xl md:text-5xl text-center tracking-tight mb-10 text-white uppercase">
          O Fim da <span className="text-[#e52521]">Mediocridade</span>
        </h2>

        <div className="max-w-6xl mx-auto rounded-none overflow-hidden bg-black/75 backdrop-blur-md border-2 border-[#006cb7]/40 shadow-2xl">
          <div className="overflow-x-auto w-full">
            <table className="w-full border-collapse table-fixed border-2 border-white/20">
              <thead>
                <tr className="bg-[#0f0f14] border-b-2 border-white/10 text-left">
                  <th className="p-4 md:p-5 text-white font-display font-bold text-sm md:text-lg uppercase w-1/2">
                    Recursos & Benefícios
                  </th>
                  <th className="p-4 md:p-5 text-[#006cb7] font-display font-black text-sm md:text-lg uppercase text-center w-1/4 bg-[#006cb7]/10 border-x border-white/10">
                    BLOCK 3D™
                  </th>
                  <th className="p-4 md:p-5 text-white/50 font-display font-bold text-xs md:text-sm uppercase text-center w-1/4">
                    Outros Pacotes Comuns
                  </th>
                </tr>
              </thead>
              <tbody>
                {features.map((item, idx) => (
                  <tr 
                    key={idx} 
                    className={`border-b border-white/10 ${idx % 2 === 0 ? 'bg-white/[0.02]' : 'bg-transparent'} hover:bg-white/[0.05] transition-colors`}
                  >
                    <td className="p-4 md:p-5 text-white/90 font-medium text-xs md:text-base">
                      {item.name}
                    </td>
                    <td className="p-4 md:p-5 text-center bg-[#006cb7]/5 border-x border-white/10">
                      <span className="inline-flex items-center justify-center w-7 h-7 rounded-none bg-[#006cb7]/20 text-[#006cb7] font-black text-base border-2 border-[#006cb7]/40">
                        ✓
                      </span>
                    </td>
                    <td className="p-4 md:p-5 text-center text-white/40 font-medium text-xs md:text-base">
                      {typeof item.others === 'string' ? (
                        <span className="text-amber-500/80 font-bold">{item.others}</span>
                      ) : (
                        <span className="text-red-500/60 font-bold">✕</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
