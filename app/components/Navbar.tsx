// Archivo: src/app/components/Navbar.tsx
"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { 
  Building2, 
  Layers, 
  Cpu, 
  Briefcase, 
  Users, 
  PhoneCall, 
  FileText, 
  Menu, 
  X, 
  ChevronRight,
  ExternalLink 
} from "lucide-react";

interface NavbarProps {
  onOpenQuoteModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuoteModal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Nosotros", href: "#about", icon: Building2 },
    { name: "Servicios", href: "#services", icon: Layers },
    { name: "Soluciones", href: "#solutions", icon: Cpu },
    { name: "Portafolio", href: "#catalog", icon: Briefcase },
    { name: "Empleados", href: "https://mail.zoho.com", icon: Users, external: true },
    { name: "Contacto", href: "#contact", icon: PhoneCall },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? "bg-[#0A1F15]/95 backdrop-blur-md shadow-2xl py-3 border-b border-emerald-900/40" 
        : "bg-[#0D2218]/90 backdrop-blur-sm py-4 border-b border-emerald-900/20"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo desde public/logoproserin.jpg y Razón Social */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative w-11 h-11 rounded-xl overflow-hidden border border-emerald-500/30 shadow-md group-hover:scale-105 transition-transform bg-white flex items-center justify-center">
              <Image 
                src="/logoproserin.jpg" 
                alt="PROSERIN S.A.S. Logo" 
                fill 
                className="object-cover"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="text-white font-extrabold text-lg tracking-wider flex items-center gap-1.5">
                PROSERIN <span className="text-emerald-400 font-semibold text-xs px-1.5 py-0.5 rounded bg-emerald-950/80 border border-emerald-800">S.A.S.</span>
              </span>
              <span className="text-[10px] text-slate-300 tracking-tight font-medium uppercase">
                Productos y Servicios Integrales
              </span>
            </div>
          </a>

          {/* Menú de Navegación Central Dinámico */}
          <div className="hidden lg:flex items-center gap-1 bg-slate-900/70 p-1.5 rounded-full border border-emerald-900/40 backdrop-blur-md shadow-inner">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-slate-200 hover:text-white hover:bg-[#2D6A4F] transition-all duration-200 group relative overflow-hidden"
                >
                  <Icon className="w-4 h-4 text-emerald-400 group-hover:text-white transition-colors" />
                  <span>{link.name}</span>
                  {link.external && <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-white" />}
                </a>
              );
            })}
          </div>

          {/* Botón de Cotización Destacado (CTA que abre el Modal) */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={onOpenQuoteModal}
              className="relative inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#2D6A4F] hover:bg-[#24533e] text-white font-semibold text-sm shadow-lg hover:shadow-emerald-900/50 transition-all duration-300 group overflow-hidden border border-emerald-500/35 cursor-pointer"
            >
              <div className="absolute inset-0 w-1/2 h-full bg-white/10 skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000"></div>
              <FileText className="w-4 h-4 text-emerald-300" />
              <span>Cotización</span>
            </button>
          </div>

          {/* Botón menú hamburguesa móvil */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-slate-900/80 text-white border border-emerald-900/50 hover:bg-[#2D6A4F] transition-colors"
              aria-label="Abrir menú"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Menú Desplegable Móvil */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-[#0A1F15]/98 border-b border-emerald-900/40 backdrop-blur-xl px-4 py-6 shadow-2xl space-y-3 animate-fadeIn">
          <div className="px-3 py-2 bg-emerald-950/60 rounded-xl border border-emerald-900/50 mb-4">
            <p className="text-xs text-emerald-400 font-semibold uppercase tracking-wider">Razón Social</p>
            <p className="text-sm font-bold text-white">Productos y Servicios Integrales S.A.S.</p>
          </div>

          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.name}
                href={link.href}
                {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between p-3 rounded-xl bg-slate-900/50 text-slate-200 hover:text-white hover:bg-[#2D6A4F] transition-all"
              >
                <div className="flex items-center gap-3">
                  <Icon className="w-5 h-5 text-emerald-400" />
                  <span className="font-medium">{link.name}</span>
                </div>
                {link.external ? <ExternalLink className="w-4 h-4 text-slate-400" /> : <ChevronRight className="w-4 h-4 text-slate-400" />}
              </a>
            );
          })}

          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuoteModal();
              }}
              className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-[#2D6A4F] text-white font-semibold shadow-lg cursor-pointer"
            >
              <FileText className="w-5 h-5" />
              <span>Cotización</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};