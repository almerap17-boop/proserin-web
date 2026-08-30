// components/IndustrySolutions.tsx
export function IndustrySolutions() {
  const sectors = [
    "Sector Energético y Petrolero",
    "Manufactura y Procesos Continuos",
    "Infraestructura Civil e Industrial",
    "Química y Petroquímica Sostenible"
  ];

  return (
    <section className="py-20 bg-slate-900 border-b border-emerald-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-emerald-400 text-xs font-bold uppercase tracking-wider bg-emerald-950 px-3 py-1 rounded-full border border-emerald-800">
            Sectores de Aplicación
          </span>
          <h2 className="text-3xl font-bold text-white tracking-tight">Soluciones Diseñadas para Cada Industria</h2>
          <p className="text-slate-400 text-base">
            Adaptamos nuestros estándares de ingeniería para responder a los retos particulares de los sectores más exigentes del mercado.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {sectors.map((sector, idx) => (
            <div key={idx} className="bg-slate-950 p-6 rounded-2xl border border-slate-800 hover:border-emerald-500/50 transition text-center space-y-3">
              <div className="w-10 h-10 mx-auto rounded-full bg-emerald-950 border border-emerald-800 flex items-center justify-center text-emerald-400 font-bold text-sm">
                ✓
              </div>
              <h4 className="text-white font-semibold text-base">{sector}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}