// Archivo: src/app/components/VideoSection.tsx
"use client";

import React from "react";

export function VideoSection() {
  return (
    <section className="py-20 bg-slate-950 text-white relative overflow-hidden" id="video-institucional">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-emerald-400 font-semibold tracking-wider uppercase text-sm">
            Capacidad Operativa y Tecnológica
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mt-2">
            Innovación en Automatización y Procesos Industriales
          </h2>
          <p className="text-slate-400 mt-4 text-lg">
            Conozca cómo implementamos soluciones de ingeniería de alta precisión para transformar la eficiencia de las plantas industriales.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl border border-slate-800 bg-slate-900 aspect-video">
          <video
            className="w-full h-full object-cover"
            controls
            playsInline
            preload="metadata"
          >
            <source src="/videos/video-proserin.mp4" type="video/mp4" />
            Su navegador no soporta la reproducción de video HTML5.
          </video>
        </div>
      </div>
    </section>
  );
}