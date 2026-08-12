import React, { useEffect } from 'react';
import HeaderBar from './components/HeaderBar';
import Hero from './components/Hero';
import BrandMarquee from './components/BrandMarquee';
import VisualShowcase from './components/VisualShowcase';
import SportsPack from './components/SportsPack';
import ModelCarousel from './components/ModelCarousel';
import BonusSection from './components/BonusSection';
import PricingSection from './components/PricingSection';
import GuaranteeFaq from './components/GuaranteeFaq';
import Footer from './components/Footer';
import StickyFloatingCTA from './components/StickyFloatingCTA';
import { initMetaTracking } from './utils/metaPixel';

export default function App() {
  useEffect(() => {
    initMetaTracking();
  }, []);

  return (
    <div className="min-h-screen bg-[#050507] text-white selection:bg-[#e52521] selection:text-white pb-20 md:pb-24">
      <HeaderBar />
      <Hero />
      <BrandMarquee />
      <VisualShowcase />
      <SportsPack />
      <ModelCarousel />
      <BonusSection />
      <PricingSection />
      <GuaranteeFaq />
      <Footer />
      <StickyFloatingCTA />
    </div>
  );
}
