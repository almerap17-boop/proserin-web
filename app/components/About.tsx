// components/About.tsx
export function About() {
  return (
    <section id="about" className="py-24 bg-slate-900 border-b border-emerald-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-emerald-400 text-xs font-bold uppercase tracking-wider bg-emerald-950 px-3 py-1 rounded-full border border-emerald-800">
              Quiénes Somos
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-snug">
              Excelencia en Ingeniería Industrial y Compromiso Tecnológico
            </h2>
            <p className="text-slate-300 text-base leading-relaxed">
              En <strong className="text-emerald-400">PROSERIN SAS</strong> nos especializamos en ofrecer soluciones integrales de alta ingeniería para el sector industrial, energético y manufacturero. Nuestro enfoque combina la eficiencia operacional con estrictas políticas de sostenibilidad.
            </p>
            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="bg-slate-950 p-5 rounded-xl border border-slate-800">
                <div className="text-3xl font-extrabold text-emerald-400 mb-1">+15</div>
                <div className="text-xs text-slate-400">Años de Trayectoria en Proyectos Industriales</div>
              </div>
              <div className="bg-slate-950 p-5 rounded-xl border border-slate-800">
                <div className="text-3xl font-extrabold text-emerald-400 mb-1">100%</div>
                <div className="text-xs text-slate-400">Normativa de Calidad y Seguridad Total</div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-6 bg-slate-950 p-8 rounded-2xl border border-emerald-800/40 shadow-2xl space-y-6">
            <h3 className="text-xl font-bold text-white border-b border-emerald-900/50 pb-4">Nuestros Pilares Operativos</h3>
            <div className="space-y-4 text-sm text-slate-300">
              <div className="flex items-start gap-3">
                <span className="text-emerald-400 font-bold text-lg">01</span>
                <div>
                  <strong className="text-white block">Innovación y Precisión</strong>
                  <p className="text-slate-400 text-xs">Implementación de maquinaria y componentes tecnológicos con máxima precisión operativa.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-emerald-400 font-bold text-lg">02</span>
                <div>
                  <strong className="text-white block">Sostenibilidad Ambiental</strong>
                  <p className="text-slate-400 text-xs">Procesos limpios diseñados para proteger los recursos naturales y reducir emisiones.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-emerald-400 font-bold text-lg">03</span>
                <div>
                  <strong className="text-white block">Soporte Técnico Especializado</strong>
                  <p className="text-slate-400 text-xs">Acompañamiento continuo con ingenieros expertos en cada fase del proyecto.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}