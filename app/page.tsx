/**
 * NeuraStock Landing Page - Main Page
 * Assembles all sections following the atomic design pattern
 */

'use client';

import React from 'react';
import HeroSection from '@/components/sections/HeroSection';
import SocialProofSection from '@/components/sections/SocialProofSection';
import UseCasesSection from '@/components/sections/UseCasesSection';
import FeaturesSection from '@/components/sections/FeaturesSection';
import FooterSection from '@/components/sections/FooterSection';

export default function Home() {
  // Social Proof Data
  const clientLogos = [
    { name: 'BYGGER', displayName: 'BYGGER' },
    { name: 'LIMAYEN', displayName: 'LIMAYEN' },
    { name: 'MARMA', displayName: 'MARMA' },
  ];

  return (
    <main className="min-h-screen bg-slate-950">
      <HeroSection
        headline="El control total de tu stock y facturación, en piloto automático."
        subheadline="NeuraStock se conecta directamente a ARCA/AFIP. Generá comprobantes, actualizá tu inventario en tiempo real y gestioná cuentas corrientes sin fricción. Todo en una plataforma diseñada para escalar."
      />


      <FeaturesSection />

      <UseCasesSection />

      <SocialProofSection
        title="Líderes del mercado que optimizan su operativa con nuestra plataforma"
        logos={clientLogos}
      />

      <FooterSection />
    </main>
  );
}
