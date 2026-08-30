// components/TopBar.tsx
export function TopBar() {
  return (
    <div className="bg-[#070c0b] border-b border-emerald-900/30 text-xs text-slate-400 py-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-2">
        <div className="flex items-center gap-4">
          <span>📞 Soporte Técnico Industrial: +57 (1) 000-0000</span>
          <span className="hidden md:inline">|</span>
          <span className="hidden md:inline">✉️ contacto@proserin.com</span>
        </div>
        <div className="text-emerald-400 font-semibold tracking-wide">
          Certificación ISO 9001 & 14001 Activa
        </div>
      </div>
    </div>
  );
}