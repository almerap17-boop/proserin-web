// components/Services.tsx
export function Services() {
  const services = [
    {
      title: "Optimización de Infraestructura",
      description: "Evaluación y modernización integral de plantas industriales para incrementar el rendimiento y la vida útil de los equipos."
    },
    {
      title: "Automatización de Procesos",
      description: "Implementación de sistemas de control inteligente orientados al ahorro energético y la reducción de tiempos muertos."
    },
    {
      title: "Auditoría de Sostenibilidad",
      description: "Diagnóstico completo de huella de carbono y cumplimiento de normativas ambientales vigentes en el sector industrial."
    }
  ];

  return (
    <section id="services" className="py-24 bg-slate-950/60 border-b border-emerald-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-emerald-400 text-xs font-bold uppercase tracking-wider bg-emerald-950 px-3 py-1 rounded-full border border-emerald-800">
            Nuestros Servicios
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">Soluciones de Ingeniería a Medida</h2>
          <p className="text-slate-400 text-base">
            Brindamos servicios técnicos especializados para garantizar el éxito y la eficiencia operativa de su empresa.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div key={idx} className="bg-slate-900/90 border border-slate-800 p-8 rounded-2xl hover:border-emerald-600/50 transition group space-y-4 shadow-xl">
              <div className="w-12 h-12 rounded-xl bg-emerald-950 border border-emerald-800/80 flex items-center justify-center text-emerald-400 font-bold text-lg">
                0{idx + 1}
              </div>
              <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition">{service.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}