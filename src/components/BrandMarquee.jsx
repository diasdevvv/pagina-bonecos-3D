import React from 'react';

export default function BrandMarquee() {
  const brands = [
    'brand_1.webp',
    'brand_2.webp',
    'brand_3.webp',
    'brand_4.webp',
    'brand_5.webp',
    'brand_6.webp',
    'brand_7.webp',
    'brand_8.webp',
  ];

  return (
    <section className="py-8 md:py-10 relative bg-[#050202] bg-gradient-to-r from-black via-[#3a0909] to-black border-y border-2-[#e52521]/30 overflow-hidden shadow-2xl">
      {/* Background Subtle Ambient Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#e52521]/10 to-transparent pointer-events-none" />

      {/* Scroll Infinito com Logos Brancas e Maiores */}
      <div className="marquee-container relative z-10">
        <div className="marquee-track-left items-center py-3">
          {[...brands, ...brands].map((brand, idx) => (
            <div key={idx} className="shrink-0 px-8 md:px-12 opacity-90 hover:opacity-100 transition-opacity">
              <img 
                src={`/assets/images/${brand}`} 
                alt={`Marca ${idx + 1}`} 
                width={160}
                height={80}
                className="h-12 sm:h-16 md:h-20 w-auto object-contain brightness-0 invert transition-all duration-300 filter drop-shadow-md" loading="lazy" decoding="async" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
