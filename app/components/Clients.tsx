// Archivo: src/app/components/Clients.tsx
"use client";

import React from "react";
import Image from "next/image";

const clients = [
  { name: "Corpacero", logo: "/clientes/corpacero.png" },
  { name: "Procaps", logo: "/clientes/procaps.jpg" },
  { name: "Thermo-Coil", logo: "/clientes/thermocoil.png" },
  { name: "Thermotar", logo: "/clientes/thermotar.png" },
  { name: "Baterías Willard", logo: "/clientes/willard.png" },
];

export function Clients() {
  return (
    <section className="py-20 bg-slate-950 border-t border-slate-900" id="clientes">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h3 className="text-xs font-bold uppercase tracking-widest text-emerald-400 mb-4">
          Aliados Estratégicos y Clientes
        </h3>
        <p className="text-2xl font-bold text-white mb-12">
          Empresas líderes confían en la ingeniería de PROSERIN S.A.S.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 items-center justify-center">
          {clients.map((client, index) => (
            <div 
              key={index} 
              className="h-28 bg-slate-900/60 border border-slate-800/80 rounded-2xl p-6 flex items-center justify-center relative grayscale hover:grayscale-0 transition-all duration-300 group shadow-lg"
            >
              <div className="relative h-14 w-full">
                <Image
                  src={client.logo}
                  alt={client.name}
                  fill
                  className="object-contain opacity-70 group-hover:opacity-100 transition-opacity"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}