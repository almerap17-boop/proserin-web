"use client";

import React from "react";
import { ArrowRight, ShieldCheck, Cpu, Building2, CheckCircle2 } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative text-white py-28 lg:py-36 overflow-hidden mt-16 lg:mt-20">
      {/* Imagen de fondo industrial con movimiento dinámico y elegante (zoom sutil) */}
      <div 
        className="absolute inset-0 bg-cover bg-center transform scale-105 animate-subtle-zoom transition-transform duration-1000 -z-20"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1920&q=80')`
        }}
      ></div>

      {/* Capa superpuesta con gradiente corporativo verde y oscuro para conservar la identidad B2B */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-[#0D2218]/90 to-slate-950/80 -z-10"></div>

      {/* Resplandores de luz ambiental */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none animate-pulse"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Columna de Texto Principal con mención explícita de la Razón Social y los textos solicitados */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2D6A4F]/40 border border-emerald-500/30 text-emerald-300 text-xs sm:text-sm font-medium tracking-wide backdrop-blur-md shadow-lg">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>PROSERIN S.A.S. — Productos y Servicios Integrales</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
              Productos y Servicios <span className="text-emerald-400 drop-shadow-sm">Integrales</span>
            </h1>

            <p className="text-slate-200 text-base sm:text-lg font-light leading-relaxed max-w-2xl drop-shadow">
              Centrándonos en la reducción de residuos plásticos y de papel, y la creación de nuevos productos ecológicos para el reciclado de envases y embalajes. Tenemos el compromiso de escoger solo materias primas de calidad y seguir los procesos tecnológicos más vanguardistas, respetuosos y eficientes.
            </p>

            {/* Puntos clave B2B */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-slate-100 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                <span>Cotizaciones corporativas en menos de 24h</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                <span>Inventario técnico certificado</span>
              </div>
            </div>

            {/* Botones de acción dinámicos */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-3 bg-[#2D6A4F] hover:bg-[#24533e] text-white px-8 py-4 rounded-xl font-semibold shadow-xl hover:shadow-emerald-900/50 transition-all duration-300 group transform hover:-translate-y-0.5"
              >
                <span>Solicitar Cotización B2B</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              
              <a
                href="#catalog"
                className="inline-flex items-center justify-center gap-2 bg-slate-900/40 hover:bg-slate-900/60 text-white border border-white/20 px-8 py-4 rounded-xl font-semibold backdrop-blur-md transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <span>Ver Catálogo Técnico</span>
              </a>
            </div>
          </div>

          {/* Columna Lateral - Panel de Control Interactivo */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              <div className="bg-slate-900/85 backdrop-blur-xl border border-slate-700/80 rounded-2xl p-6 shadow-2xl space-y-6">
                <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-[#2D6A4F]/30 rounded-xl text-emerald-400 border border-emerald-500/20">
                      <Cpu className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-base">Estado de Operaciones</h3>
                      <p className="text-xs text-emerald-400">Sistemas Industriales Activos</p>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 bg-emerald-500/20 text-emerald-300 text-xs rounded-full font-medium border border-emerald-500/30">99.8% Eficiencia</span>
                </div>

                <div className="space-y-4">
                  <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800/80 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Building2 className="w-5 h-5 text-slate-400" />
                      <span className="text-sm text-slate-300">Clientes Corporativos Atendidos</span>
                    </div>
                    <span className="font-bold text-white">+500</span>
                  </div>

                  <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800/80 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <ShieldCheck className="w-5 h-5 text-emerald-400" />
                      <span className="text-sm text-slate-300">Garantía Certificada</span>
                    </div>
                    <span className="font-bold text-emerald-400">Directa de Fábrica</span>
                  </div>
                </div>

                <div className="pt-2">
                  <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                    <div className="bg-emerald-500 h-full w-[92%] rounded-full shadow-[0_0_10px_#10b981]"></div>
                  </div>
                  <div className="flex justify-between text-xs text-slate-400 mt-2">
                    <span>Capacidad de Respuesta</span>
                    <span className="text-emerald-400 font-semibold">Inmediata</span>
                  </div>
                </div>
              </div>

              {/* Tarjeta flotante inferior */}
              <div className="absolute -bottom-6 -left-6 bg-slate-900/90 text-white p-4 rounded-xl shadow-2xl hidden sm:flex items-center gap-3 border border-slate-700 backdrop-blur-md">
                <div className="w-3 h-3 bg-emerald-500 rounded-full animate-ping"></div>
                <div className="text-xs">
                  <p className="font-bold text-emerald-300">Asesoría Técnica en Línea</p>
                  <p className="text-slate-300">Ingenieros listos para ayudarte</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};