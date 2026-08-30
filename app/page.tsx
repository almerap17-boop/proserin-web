// Archivo: src/app/page.tsx
"use client";

import React, { useState } from "react";
import { TopBar } from "./components/TopBar";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { TrustStrip } from "./components/TrustStrip";
import { About } from "./components/About"; 
import { Services } from "./components/Services";
import { IndustrySolutions } from "./components/IndustrySolutions";
import { ProductCatalog } from "./components/ProductCatalog";
import { VideoSection } from "./components/VideoSection";
import { Sustainability } from "./components/Sustainability";
import { Clients } from "./components/Clients";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { FloatingWidgets } from "./components/FloatingWidgets";
import { QuoteModal } from "./components/QuoteModal";

export default function Page() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F8F9FA] text-slate-800 font-sans selection:bg-[#2D6A4F] selection:text-white antialiased relative flex flex-col justify-between">
      <TopBar />
      <Navbar onOpenQuoteModal={() => setIsQuoteModalOpen(true)} />
      <main id="main-content" className="relative z-10 flex-grow">
        <Hero />
        <TrustStrip />
        <About />
        <Services />
        <section id="solutions" aria-label="Soluciones Industriales"><IndustrySolutions /></section>
        <section id="catalog" aria-label="Catálogo de Productos"><ProductCatalog /></section>
        <VideoSection />
        <section id="sustainability" aria-label="Sostenibilidad"><Sustainability /></section>
        <Clients />
        <section id="contact" aria-label="Contacto Comercial"><Contact /></section>
      </main>
      <Footer />
      <FloatingWidgets />
      <QuoteModal 
        isOpen={isQuoteModalOpen} 
        onClose={() => setIsQuoteModalOpen(false)} 
      />
    </div>
  );
}