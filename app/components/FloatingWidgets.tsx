"use client";

import React, { useState, useEffect } from "react";
import { ArrowUp, MessageCircle } from "lucide-react";

export const FloatingWidgets = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Número oficial de WhatsApp de Proserin S.A.S. (+57 305 3433612)
  const whatsappNumber = "573053433612"; 
  const whatsappMessage = "Hola, me interesa solicitar una cotización y asesoría técnica para un proyecto industrial con Proserin S.A.S.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 items-end">
      
      {/* Botón Flotante de WhatsApp Minimalista (Solo Icono con Animación) */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white shadow-2xl transition-all duration-300 hover:scale-110 border-2 border-white/20 animate-bounce hover:animate-none"
        aria-label="WhatsApp Oficial PROSERIN S.A.S."
      >
        <MessageCircle className="w-7 h-7 fill-current text-white" />
        
        {/* Tooltip opcional al pasar el mouse */}
        <span className="absolute right-full mr-3 px-3 py-1.5 bg-slate-900 text-white text-xs font-medium rounded-xl shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap border border-slate-700">
          WhatsApp Oficial
        </span>
      </a>

      {/* Botón Flotante Volver Arriba */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="group relative flex items-center justify-center w-11 h-11 rounded-full bg-slate-900/90 hover:bg-[#2D6A4F] text-slate-300 hover:text-white shadow-xl backdrop-blur-md border border-emerald-900/50 transition-all duration-300 hover:scale-105"
          aria-label="Volver arriba"
        >
          <ArrowUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
          
          <span className="absolute right-full mr-3 px-3 py-1.5 bg-slate-900 text-white text-xs font-medium rounded-xl shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap border border-slate-700">
            Volver arriba
          </span>
        </button>
      )}

    </div>
  );
};