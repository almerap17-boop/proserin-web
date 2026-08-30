// components/TrustStrip.tsx
export function TrustStrip() {
  return (
    <div className="bg-[#070c0b] border-y border-emerald-900/30 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        <div className="space-y-1">
          <div className="text-2xl font-extrabold text-emerald-400">ISO 9001</div>
          <div className="text-xs text-slate-400 uppercase tracking-wider font-medium">Calidad Certificada</div>
        </div>
        <div className="space-y-1">
          <div className="text-2xl font-extrabold text-emerald-400">100%</div>
          <div className="text-xs text-slate-400 uppercase tracking-wider font-medium">Tecnología Limpia</div>
        </div>
        <div className="space-y-1">
          <div className="text-2xl font-extrabold text-emerald-400">+500</div>
          <div className="text-xs text-slate-400 uppercase tracking-wider font-medium">Proyectos Ejecutados</div>
        </div>
        <div className="space-y-1">
          <div className="text-2xl font-extrabold text-emerald-400">24/7</div>
          <div className="text-xs text-slate-400 uppercase tracking-wider font-medium">Respuesta Operativa</div>
        </div>
      </div>
    </div>
  );
}