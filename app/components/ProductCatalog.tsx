// Archivo: src/app/components/ProductCatalog.tsx
"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";

interface Product {
  id: number;
  name: string;
  category: string;
  description: string;
  image: string;
  specs: string[];
}

const allProducts: Product[] = [
  {
    id: 1,
    name: "Sistemas de Automatización PLC y SCADA Eco-Industrial",
    category: "Automatización",
    description: "Control centralizado de procesos industriales con arquitectura tolerante a fallos y optimización de consumo energético en tiempo real.",
    image: "/productos/producto1.png",
    specs: ["Eficiencia energética del 98%", "Protocolos Modbus / Profinet", "Certificación IP67", "Monitoreo remoto IoT"]
  },
  {
    id: 2,
    name: "Tableros de Distribución y Control Eléctrico Sostenible",
    category: "Ingeniería Eléctrica",
    description: "Ensamblaje certificado bajo normativas internacionales de seguridad industrial y baja emisión térmica para plantas de alta exigencia.",
    image: "/productos/producto2.png",
    specs: ["Protección contra sobretensiones", "Componentes eco-reciclables", "Garantía de 5 años", "Normativa ISO 9001"]
  },
  {
    id: 3,
    name: "Válvulas de Control Neumático de Alta Precisión",
    category: "Instrumentación",
    description: "Regulación milimétrica de fluidos industriales con cero fugas y aleaciones de alta durabilidad ambiental.",
    image: "/productos/producto3.png",
    specs: ["Cero emisión de gases fugitivos", "Actuación en < 0.2 segundos", "Aleación anticorrosiva", "Certificación ambiental"]
  },
  {
    id: 4,
    name: "Sensores IoT Industriales y Monitoreo Ambiental",
    category: "Automatización",
    description: "Sensores inteligentes para la medición de variables críticas de planta y control de huella de carbono.",
    image: "/productos/producto4.png",
    specs: ["Conectividad LoRaWAN / 5G", "Batería solar integrada", "Precisión milimétrica", "Gestión de datos en la nube"]
  },
  {
    id: 5,
    name: "Sistemas de Bombeo de Alta Eficiencia Energética",
    category: "Ingeniería Eléctrica",
    description: "Equipos de bombeo industrial acoplados a variadores de frecuencia para optimizar el caudal y reducir el consumo eléctrico.",
    image: "/productos/producto5.png",
    specs: ["Reducción del 35% en energía", "Motores IE4 de alta gama", "Control automático de presión", "Bajo nivel de ruido"]
  },
  {
    id: 6,
    name: "Medidores Masivos de Flujo y Calidad de Agua",
    category: "Instrumentación",
    description: "Tecnología de punta para la medición exacta de caudales y parámetros fisicoquímicos en efluentes industriales.",
    image: "/productos/producto6.png",
    specs: ["Tecnología ultrasónica", "Sin piezas móviles de desgaste", "Registro continuo de datos", "Homologación ambiental"]
  }
  // Puedes agregar más productos aquí en el futuro y se mostrarán automáticamente al buscar o filtrar.
];

export function ProductCatalog() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [activePdfModal, setActivePdfModal] = useState<Product | null>(null);

  const categories = ["Todos", "Automatización", "Ingeniería Eléctrica", "Instrumentación"];

  // Filtrado principal según la búsqueda y categoría seleccionada
  const filteredProducts = useMemo(() => {
    return allProducts.filter((product) => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            product.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === "Todos" || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  // Si el usuario NO está buscando ni filtrando activamente, limitamos la vista a máximo 6 productos.
  // Si escribe o filtra algo, mostramos todos los resultados coincidentes sin restricciones.
  const isFilteringActive = searchTerm.trim() !== "" || selectedCategory !== "Todos";
  const displayedProducts = isFilteringActive ? filteredProducts : filteredProducts.slice(0, 6);

  const handleClearFilter = () => {
    setSearchTerm("");
    setSelectedCategory("Todos");
  };

  const handlePrintPdf = (product: Product) => {
    const printWindow = window.open("", "_blank");
    if (!printWindow) return;

    const htmlContent = `
      <!DOCTYPE html>
      <html lang="es">
      <head>
        <meta charset="UTF-8">
        <title>Ficha_Tecnica_${product.name.replace(/\s+/g, "_")}_PROSERIN_SAS</title>
        <style>
          @page { size: A4; margin: 20mm; }
          body { font-family: 'Helvetica', Arial, sans-serif; color: #1e293b; margin: 0; padding: 20px; background: #ffffff; }
          .header { border-bottom: 3px solid #059669; padding-bottom: 15px; display: flex; justify-content: space-between; align-items: center; }
          .logo-text { font-size: 20px; font-weight: bold; color: #0f172a; }
          .logo-sub { font-size: 10px; color: #059669; text-transform: uppercase; letter-spacing: 2px; font-weight: bold; }
          .badge { background: #ecfdf5; color: #047857; padding: 5px 12px; font-size: 11px; font-weight: bold; border-radius: 20px; border: 1px solid #a7f3d0; }
          .title { margin-top: 35px; font-size: 24px; color: #0f172a; font-weight: bold; }
          .category { font-size: 12px; color: #64748b; text-transform: uppercase; margin-top: 5px; font-weight: 600; }
          .description { margin-top: 20px; font-size: 15px; line-height: 1.6; color: #334155; }
          .specs-box { margin-top: 25px; background: #f8fafc; border: 1px solid #e2e8f0; padding: 20px; border-radius: 10px; }
          .specs-title { font-size: 13px; font-weight: bold; text-transform: uppercase; color: #0f172a; margin-bottom: 12px; }
          .spec-item { display: flex; align-items: center; margin-bottom: 8px; font-size: 14px; color: #475569; }
          .spec-dot { height: 6px; width: 6px; background-color: #059669; border-radius: 50%; display: inline-block; margin-right: 10px; }
          .watermark { position: fixed; top: 40%; left: 15%; font-size: 60px; color: rgba(5, 150, 105, 0.03); font-weight: bold; z-index: -1; transform: rotate(-30deg); }
          .footer { position: fixed; bottom: 0; width: 100%; border-top: 1px solid #e2e8f0; padding-top: 15px; font-size: 11px; color: #94a3b8; text-align: center; }
        </style>
      </head>
      <body>
        <div class="watermark">PROSERIN S.A.S.</div>
        <div class="header">
          <div>
            <div class="logo-text">PROSERIN <span style="color: #059669;">S.A.S.</span></div>
            <div class="logo-sub">Productos y Servicios Integrales S.A.S.</div>
          </div>
          <div>
            <span class="badge">FICHA TÉCNICA OFICIAL</span>
          </div>
        </div>

        <div class="title">${product.name}</div>
        <div class="category">Categoría: ${product.category}</div>

        <div class="description">
          <strong>Descripción General del Equipo:</strong><br/>
          ${product.description}
        </div>

        <div class="specs-box">
          <div class="specs-title">Especificaciones Técnicas Garantizadas</div>
          ${product.specs.map(spec => `<div class="spec-item"><span class="spec-dot"></span>${spec}</div>`).join("")}
        </div>

        <div class="footer">
          PROSERIN S.A.S. (Productos y Servicios Integrales S.A.S.) &bull; Certificación ISO 9001 & 14001 &bull; www.proserin.com
        </div>

        <script>
          window.onload = function() {
            window.print();
          }
        </script>
      </body>
      </html>
    `;

    printWindow.document.write(htmlContent);
    printWindow.document.close();
  };

  return (
    <section className="py-24 bg-slate-950 text-white relative overflow-hidden" id="catalog">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Encabezado */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-950 border border-emerald-800/60 text-emerald-400 text-xs font-semibold uppercase tracking-widest mb-4">
            Catálogo Oficial PROSERIN S.A.S.
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Soluciones y Equipos <span className="text-emerald-400">Certificados</span>
          </h2>
          <p className="text-slate-400 mt-4 text-lg">
            Tecnología industrial de alta gama orientada a la máxima eficiencia operativa y sostenibilidad ambiental.
          </p>
        </div>

        {/* Buscador Interactivo y Filtros */}
        <div className="bg-slate-900/90 backdrop-blur-xl border border-slate-800 p-6 rounded-3xl shadow-2xl mb-12">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-96">
              <span className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-slate-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </span>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Buscar equipo, PLC, sensor..."
                className="w-full pl-11 pr-4 py-3 bg-slate-950 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 transition-colors text-sm"
              />
            </div>

            <div className="flex flex-wrap gap-2 w-full md:w-auto justify-center items-center">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2.5 rounded-xl text-xs font-semibold tracking-wide transition-all ${
                    selectedCategory === cat
                      ? "bg-emerald-600 text-white shadow-lg shadow-emerald-900/40 border border-emerald-500/40"
                      : "bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white border border-slate-700/50"
                  }`}
                >
                  {cat}
                </button>
              ))}

              {isFilteringActive && (
                <button
                  onClick={handleClearFilter}
                  className="px-4 py-2.5 rounded-xl text-xs font-semibold bg-red-950/60 text-red-400 border border-red-950 hover:bg-red-900/60 transition-all flex items-center gap-1.5"
                >
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  Limpiar Filtros
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Listado de Productos */}
        {displayedProducts.length === 0 ? (
          <div className="text-center py-20 bg-slate-900/40 rounded-3xl border border-slate-800">
            <h3 className="text-xl font-semibold text-white">No se encontraron productos</h3>
            <p className="text-slate-400 text-sm mt-2">Prueba ajustando los términos de búsqueda o limpiando los filtros.</p>
            <button
              onClick={handleClearFilter}
              className="mt-6 px-6 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold rounded-xl transition-all"
            >
              Restablecer Catálogo
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedProducts.map((product) => (
              <div
                key={product.id}
                className="bg-slate-900/90 rounded-3xl overflow-hidden border border-slate-800 hover:border-emerald-500/60 transition-all duration-300 flex flex-col group shadow-xl"
              >
                <div className="relative h-48 w-full bg-slate-950 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-md px-3 py-1 rounded-xl text-xs font-semibold text-emerald-400 border border-slate-800">
                    {product.category}
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors line-clamp-2">
                      {product.name}
                    </h3>
                    <p className="text-slate-400 text-xs mt-2.5 leading-relaxed line-clamp-3">
                      {product.description}
                    </p>

                    <div className="mt-4 space-y-1.5">
                      {product.specs.slice(0, 3).map((spec, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-slate-300">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                          <span>{spec}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-800/80 grid grid-cols-2 gap-2">
                    <button
                      onClick={() => setActivePdfModal(product)}
                      className="w-full py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold rounded-xl transition-all border border-slate-700 flex items-center justify-center gap-1.5"
                    >
                      Ver Ficha
                    </button>

                    <button
                      onClick={() => handlePrintPdf(product)}
                      className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold rounded-xl transition-all flex items-center justify-center gap-1.5 shadow-lg shadow-emerald-900/30"
                    >
                      Descargar PDF
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>

      {/* Modal de Previsualización */}
      {activePdfModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-md p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative">
            <button
              onClick={() => setActivePdfModal(null)}
              className="absolute top-5 right-5 text-slate-400 hover:text-white bg-slate-800 p-2 rounded-full transition-colors"
            >
              ✕
            </button>

            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400 bg-emerald-950 px-3 py-1 rounded-full border border-emerald-800">
              Ficha Técnica Oficial - PROSERIN S.A.S.
            </span>

            <h3 className="text-2xl font-bold text-white mt-4">
              {activePdfModal.name}
            </h3>

            <p className="text-slate-300 text-sm mt-3 leading-relaxed">
              {activePdfModal.description}
            </p>

            <div className="mt-6 bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-2">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">Especificaciones Técnicas:</h4>
              {activePdfModal.specs.map((spec, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-slate-200">
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                  <span>{spec}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 flex gap-3">
              <button
                onClick={() => handlePrintPdf(activePdfModal)}
                className="flex-1 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm rounded-xl text-center transition-all shadow-lg shadow-emerald-900/40 flex items-center justify-center gap-2"
              >
                Descargar PDF Corporativo
              </button>
              <button
                onClick={() => setActivePdfModal(null)}
                className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold text-sm rounded-xl transition-all"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}