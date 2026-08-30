// components/Contact.tsx
import React from "react";
import { Mail, Phone, MapPin, Clock, MessageSquare, ArrowUpRight } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-32 bg-[#060c09] relative overflow-hidden border-t border-emerald-950">
      
      {/* Efectos de iluminación de fondo corporativo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-emerald-900/15 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0a1f1515_1px,transparent_1px),linear-gradient(to_bottom,#0a1f1515_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Encabezado de la sección */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-800/60 text-emerald-400 text-xs font-semibold uppercase tracking-widest shadow-inner">
            <MessageSquare className="w-3.5 h-3.5" />
            Canal de Comunicación Directa
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            ¿Necesitas Asesoría con Nuestros <span className="text-emerald-400">Ingenieros?</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Estamos disponibles para atender requerimientos técnicos, dudas sobre suministros y proyectos de ingeniería integral.
          </p>
        </div>

        {/* Tarjetas de contacto mejoradas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Teléfono */}
          <div className="bg-slate-950/90 border border-emerald-900/40 rounded-3xl p-8 shadow-2xl hover:border-emerald-500/50 hover:bg-slate-900/90 transition-all duration-300 group flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-emerald-950/80 border border-emerald-800/80 text-emerald-400 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-emerald-900 transition-all shadow-lg">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="text-white font-bold text-xl mb-1.5">Línea Telefónica</h3>
              <p className="text-slate-400 text-xs mb-6">Atención comercial y soporte técnico inmediato.</p>
            </div>
            <a href="tel:+573001234567" className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 font-semibold text-sm transition-colors group-hover:translate-x-1 duration-200">
              <span>+57 (300) 123-4567</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Correo */}
          <div className="bg-slate-950/90 border border-emerald-900/40 rounded-3xl p-8 shadow-2xl hover:border-emerald-500/50 hover:bg-slate-900/90 transition-all duration-300 group flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-emerald-950/80 border border-emerald-800/80 text-emerald-400 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-emerald-900 transition-all shadow-lg">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="text-white font-bold text-xl mb-1.5">Correo Electrónico</h3>
              <p className="text-slate-400 text-xs mb-6">Envío de planos, RFQs y cotizaciones formales.</p>
            </div>
            <a href="mailto:contacto@proserin.com" className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 font-semibold text-sm transition-colors group-hover:translate-x-1 duration-200">
              <span>contacto@proserin.com</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Ubicación Oficial */}
          <div className="bg-slate-950/90 border border-emerald-900/40 rounded-3xl p-8 shadow-2xl hover:border-emerald-500/50 hover:bg-slate-900/90 transition-all duration-300 group flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-emerald-950/80 border border-emerald-800/80 text-emerald-400 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-emerald-900 transition-all shadow-lg">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="text-white font-bold text-xl mb-1.5">Oficina Principal</h3>
              <p className="text-slate-400 text-xs mb-3">Sede corporativa y operaciones.</p>
            </div>
            <span className="text-slate-200 font-medium text-xs leading-relaxed block">
              Cra. 38 #113-39<br />
              Suroccidente, Barranquilla, Atlántico
            </span>
          </div>

          {/* Horarios */}
          <div className="bg-slate-950/90 border border-emerald-900/40 rounded-3xl p-8 shadow-2xl hover:border-emerald-500/50 hover:bg-slate-900/90 transition-all duration-300 group flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-emerald-950/80 border border-emerald-800/80 text-emerald-400 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-emerald-900 transition-all shadow-lg">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-white font-bold text-xl mb-1.5">Horarios</h3>
              <p className="text-slate-400 text-xs mb-6">Disponibilidad en días hábiles.</p>
            </div>
            <span className="text-slate-200 font-semibold text-sm block">
              Lunes a Viernes: 8AM - 6PM
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}