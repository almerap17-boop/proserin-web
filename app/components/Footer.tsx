// components/Footer.tsx
"use client";

import React from "react";
import Image from "next/image";
import { Mail, ShieldCheck } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-[#040806] text-slate-300 border-t border-emerald-950 pt-20 pb-12 relative overflow-hidden">
      
      {/* Resplandor ambiental inferior sutil */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-40 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-16 border-b border-emerald-900/30 text-center md:text-left">
          
          {/* Columna de Marca y Descripción */}
          <div className="md:col-span-6 space-y-4 flex flex-col items-center md:items-start">
            <div className="flex items-center justify-center md:justify-start gap-3">
              <div className="relative w-10 h-10 rounded-xl overflow-hidden border border-emerald-500/30 bg-white flex items-center justify-center shadow-md">
                <Image 
                  src="/logoproserin.jpg" 
                  alt="PROSERIN S.A.S. Logo" 
                  fill 
                  className="object-cover"
                />
              </div>
              <span className="text-white font-extrabold text-lg tracking-wider">
                PROSERIN <span className="text-emerald-400 text-xs px-1.5 py-0.5 rounded bg-emerald-950/80 border border-emerald-800">S.A.S.</span>
              </span>
            </div>
            
            <p className="text-sm text-slate-400 max-w-md leading-relaxed text-center md:text-left">
              Soluciones integrales de ingeniería industrial, automatización y sostenibilidad con estrictos estándares internacionales de calidad y respeto ambiental.
            </p>

            <div className="flex items-center justify-center md:justify-start gap-2 text-xs text-emerald-400 font-medium pt-1 bg-emerald-950/40 border border-emerald-900/50 px-3 py-1.5 rounded-lg">
              <ShieldCheck className="w-4 h-4 flex-shrink-0" />
              <span>Certificación ISO 9001 & 14001 Activa</span>
            </div>
          </div>

          {/* Enlaces Rápidos */}
          <div className="md:col-span-3 space-y-4 flex flex-col items-center md:items-start">
            <h4 className="text-white font-semibold text-xs tracking-widest uppercase text-emerald-400">Enlaces Rápidos</h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#about" className="hover:text-emerald-400 transition-colors">Nosotros</a></li>
              <li><a href="#services" className="hover:text-emerald-400 transition-colors">Servicios</a></li>
              <li><a href="#solutions" className="hover:text-emerald-400 transition-colors">Soluciones</a></li>
              <li><a href="#catalog" className="hover:text-emerald-400 transition-colors">Portafolio</a></li>
            </ul>
          </div>

          {/* Contacto Comercial */}
          <div className="md:col-span-3 space-y-4 flex flex-col items-center md:items-start">
            <h4 className="text-white font-semibold text-xs tracking-widest uppercase text-emerald-400">Contacto Comercial</h4>
            <p className="text-xs text-slate-400 leading-relaxed text-center md:text-left">
              Atención especializada para el sector industrial y corporativo.
            </p>
            <div className="flex items-center justify-center md:justify-start gap-2 text-sm text-emerald-400 font-medium pt-1">
              <Mail className="w-4 h-4 flex-shrink-0" />
              <a href="mailto:info@proserin.com" className="hover:underline">info@proserin.com</a>
            </div>
          </div>

        </div>

        {/* Franja Inferior Limpia */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-slate-500 text-center md:text-left">
          <p>© 2026 PROSERIN S.A.S. Todos los derechos reservados.</p>

          <div className="flex items-center justify-center gap-6">
            <a href="#" className="hover:text-emerald-400 transition-colors">Política de Privacidad</a>
            <span className="text-slate-700">•</span>
            <a href="#" className="hover:text-emerald-400 transition-colors">Términos y Condiciones</a>
          </div>
        </div>

      </div>
    </footer>
  );
};