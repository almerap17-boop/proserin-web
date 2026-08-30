// components/Sustainability.tsx
export function Sustainability() {
  return (
    <section id="sustainability" className="py-24 bg-gradient-to-b from-[#09110f] to-slate-900 border-t border-emerald-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-6">
            <div className="inline-block px-3 py-1 bg-emerald-950 border border-emerald-800 text-emerald-400 text-xs font-semibold rounded-full uppercase">
              Compromiso Ambiental
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Ingeniería Industrial con Sostenibilidad Comprobada
            </h2>
            
            <p className="text-slate-300 text-base leading-relaxed">
              En <strong className="text-emerald-400">PROSERIN SAS</strong> entendemos que el desarrollo industrial debe marchar de la mano con la protección de los ecosistemas. Implementamos tecnologías limpias y metodologías de bajo impacto ambiental en cada proyecto.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-emerald-900/80 border border-emerald-600 flex items-center justify-center text-emerald-300 text-xs font-bold mt-1 flex-shrink-0">✓</div>
                <div>
                  <h4 className="text-white font-semibold text-sm">Reducción de Huella de Carbono</h4>
                  <p className="text-slate-400 text-xs">Optimización de procesos energéticos para minimizar las emisiones de gases de efecto invernadero.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-emerald-900/80 border border-emerald-600 flex items-center justify-center text-emerald-300 text-xs font-bold mt-1 flex-shrink-0">✓</div>
                <div>
                  <h4 className="text-white font-semibold text-sm">Cumplimiento Normativo Internacional</h4>
                  <p className="text-slate-400 text-xs">Estricto apego a normativas ambientales globales y certificaciones de calidad total ISO.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-emerald-900/80 border border-emerald-600 flex items-center justify-center text-emerald-300 text-xs font-bold mt-1 flex-shrink-0">✓</div>
                <div>
                  <h4 className="text-white font-semibold text-sm">Eficiencia de Recursos y Economía Circular</h4>
                  <p className="text-slate-400 text-xs">Aprovechamiento máximo de materias primas y gestión adecuada de residuos industriales.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-950 p-8 rounded-2xl border border-emerald-800/40 shadow-2xl space-y-6">
            <h3 className="text-xl font-bold text-white border-b border-emerald-900/50 pb-4">Indicadores Eco-Industriales</h3>
            <div className="space-y-5">
              <div>
                <div className="flex justify-between text-xs text-slate-300 mb-1 font-semibold">
                  <span>Eficiencia Energética Operativa</span>
                  <span className="text-emerald-400">98.4%</span>
                </div>
                <div className="w-full bg-slate-900 h-2.5 rounded-full overflow-hidden border border-emerald-900/50">
                  <div className="bg-emerald-500 h-full rounded-full" style={{ width: '98.4%' }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs text-slate-300 mb-1 font-semibold">
                  <span>Reducción de Emisiones CO2</span>
                  <span className="text-emerald-400">45.2 Tons/Año</span>
                </div>
                <div className="w-full bg-slate-900 h-2.5 rounded-full overflow-hidden border border-emerald-900/50">
                  <div className="bg-emerald-500 h-full rounded-full" style={{ width: '85%' }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs text-slate-300 mb-1 font-semibold">
                  <span>Cumplimiento Normas ISO Ambientales</span>
                  <span className="text-emerald-400">100% Certificado</span>
                </div>
                <div className="w-full bg-slate-900 h-2.5 rounded-full overflow-hidden border border-emerald-900/50">
                  <div className="bg-emerald-500 h-full rounded-full" style={{ width: '100%' }}></div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}