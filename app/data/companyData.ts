export const company = {
  name: "PROSERIN S.A.S.",
  shortName: "PROSERIN",
  legalName: "Productos y Servicios Integrales S.A.S.",
  sigla: "Proserin S.A.S.",
  city: "Barranquilla, Colombia",
  nit: "802.013.252-5",
  phone: "+57 (605) 3433612",
  email: "info@proserin.com.co",
  commercialEmail: "wcardoso@proserin.com.co",
  address: "Carrera 38 No. 113-39, Corredor industrial vía Juan Mina",
  whatsappNumber: "+573053433612",
};

export const normalizePhone = (phone: string) => phone.replace(/\D/g, "");

export const createWhatsAppUrl = (message: string) => {
  const number = normalizePhone(company.whatsappNumber);
  if (!number) return null;
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
};

export const generalWhatsAppUrl = createWhatsAppUrl(
  "Hola, deseo solicitar asesoría técnica y cotización B2B eco-eficiente para mi empresa en PROSERIN S.A.S."
);

export const phoneHref = company.phone ? `tel:${normalizePhone(company.phone)}` : null;
export const emailHref = company.email ? `mailto:${company.email}` : null;

export type ProductCategory = "quimicos" | "filtracion" | "pinturas";
export type ProductApplication = "mantenimiento" | "procesos" | "filtracion" | "superficies";
export type ProductNeed = "limpieza" | "tratamiento" | "control-particulas" | "proteccion";

export type Product = {
  id: string;
  code: string;
  name: string;
  category: ProductCategory;
  categoryLabel: string;
  tag: string;
  desc: string;
  description: string;
  image: string;
  application: ProductApplication;
  applicationLabel: string;
  need: ProductNeed;
  needLabel: string;
  technicalSheetAvailable?: boolean;
};

export type IconName =
  | "arrow"
  | "check"
  | "chevron"
  | "close"
  | "engineering"
  | "filter"
  | "mail"
  | "menu"
  | "phone"
  | "pin"
  | "recycle"
  | "search"
  | "shield"
  | "spark"
  | "paint"
  | "chemical"
  | "play"
  | "factory"
  | "layers"
  | "target"
  | "download"
  | "external"
  | "plus"
  | "minus";

export type Service = {
  id: number;
  title: string;
  category: string;
  shortDesc: string;
  fullDesc: string;
  icon: IconName;
  badge: string;
};

export type IndustrySolution = {
  id: string;
  industry: string;
  description: string;
  needs: {
    id: string;
    title: string;
    description: string;
    category: ProductCategory | "servicios";
    categoryLabel: string;
    icon: IconName;
  }[];
};

export const products: Product[] = [
  {
    id: "prod-1",
    code: "QIM-01",
    name: "Desengrasante Dieléctrico Industrial Eco-Friendly",
    category: "quimicos",
    categoryLabel: "Químicos industriales",
    tag: "Biodegradable & Limpieza",
    desc: "Solución ecológica para limpieza de motores eléctricos, tableros y equipos industriales con bajo impacto ambiental.",
    description:
      "Producto formulado bajo estándares de química verde para operaciones de limpieza y mantenimiento de componentes industriales. Diseñado para remover grasa, aceite y hollín sin afectar aislamientos eléctricos y con total neutralidad ambiental. Las condiciones específicas de aplicación deben validarse mediante la ficha técnica oficial.",
    image: "/productos/producto1.png",
    application: "mantenimiento",
    applicationLabel: "Mantenimiento industrial",
    need: "limpieza",
    needLabel: "Limpieza eco-eficiente",
    technicalSheetAvailable: true,
  },
  {
    id: "prod-2",
    code: "QIM-02",
    name: "Inhibidor Orgánico de Incrustaciones para Calderas",
    category: "quimicos",
    categoryLabel: "Químicos industriales",
    tag: "Tratamiento hídrico verde",
    desc: "Solución eco-sostenible para control de incrustaciones en sistemas térmicos industriales y reducción de huella hídrica.",
    description:
      "Producto de base orgánica destinado al tratamiento y mantenimiento de sistemas industriales de generación de vapor y agua caliente. Minimiza el uso de químicos agresivos, protegiendo las fuentes hídricas y optimizando el intercambio térmico.",
    image: "/productos/producto2.png",
    application: "procesos",
    applicationLabel: "Procesos industriales",
    need: "tratamiento",
    needLabel: "Tratamiento de procesos",
    technicalSheetAvailable: false,
  },
  {
    id: "prod-3",
    code: "FIL-01",
    name: "Cartucho Plisado Eco-Tech de Alto Caudal",
    category: "filtracion",
    categoryLabel: "Filtración",
    tag: "Filtración sostenible",
    desc: "Elemento filtrante de alta durabilidad y materiales reciclables para procesos industriales de purificación de agua.",
    description:
      "Elemento filtrante de alto rendimiento diseñado con polímeros de menor huella de carbono. Ideal para retención de sólidos suspendidos, control de partículas y protección de equipos de ósmosis inversa con mayor vida útil y menor frecuencia de reemplazo.",
    image: "/productos/producto3.png",
    application: "filtracion",
    applicationLabel: "Procesos de filtración",
    need: "control-particulas",
    needLabel: "Control de partículas",
    technicalSheetAvailable: false,
  },
  {
    id: "prod-4",
    code: "FIL-02",
    name: "Manga Filtrante Biodegradable Needlefelt",
    category: "filtracion",
    categoryLabel: "Filtración",
    tag: "Captación eco-avanzada",
    desc: "Manga filtrante de alta eficiencia para sistemas industriales de captación con menor impacto en disposición final.",
    description:
      "Solución de filtración avanzada para procesos industriales con requerimientos específicos de retención de partículas finas. Fabricada bajo normativas de economía circular, optimizando la permeabilidad y la resistencia mecánica en colectores.",
    image: "/productos/producto4.png",
    application: "filtracion",
    applicationLabel: "Captación y filtración",
    need: "control-particulas",
    needLabel: "Control de partículas",
    technicalSheetAvailable: false,
  },
  {
    id: "prod-5",
    code: "PIN-01",
    name: "Recubrimiento Epóxico Base Agua para Pisos",
    category: "pinturas",
    categoryLabel: "Pinturas y solventes",
    tag: "Bajos VOCs / Pisos",
    desc: "Recubrimiento ecológico de dos componentes sin emisiones tóxicas para pisos industriales y bodegas.",
    description:
      "Sistema de recubrimiento epóxico de altas prestaciones formulado en base acuosa (Ultra-Low VOC), destinado a superficies industriales, bodegas y zonas de producción de tráfico pesado con compromiso ambiental.",
    image: "/productos/producto5.png",
    application: "superficies",
    applicationLabel: "Superficies industriales",
    need: "proteccion",
    needLabel: "Protección de superficies",
    technicalSheetAvailable: false,
  },
  {
    id: "prod-6",
    code: "PIN-02",
    name: "Esmalte Anticorrosivo Eco-Tecnológico",
    category: "pinturas",
    categoryLabel: "Pinturas y solventes",
    tag: "Protección verde",
    desc: "Recubrimiento de alta durabilidad libre de metales pesados para protección y acabado de estructuras metálicas.",
    description:
      "Producto tecnológico destinado a trabajos de protección y acabado de superficies metálicas expuestas a ambientes industriales moderados. Formulado sin metales pesados nocivos, garantizando alta retención de brillo y nivelación.",
    image: "/productos/producto6.png",
    application: "superficies",
    applicationLabel: "Superficies industriales",
    need: "proteccion",
    needLabel: "Protección de superficies",
    technicalSheetAvailable: false,
  },
];

export const industrialServices: Service[] = [
  {
    id: 1,
    title: "Ingeniería y soporte técnico eco-eficiente",
    category: "Optimización operativa",
    shortDesc: "Acompañamiento técnico avanzado para evaluar procesos industriales bajo criterios de sostenibilidad y economía circular.",
    fullDesc: "Servicio orientado al acompañamiento de clientes industriales en la identificación de necesidades relacionadas con productos químicos verdes, sistemas avanzados de tratamiento de agua, filtración y recubrimientos de bajo impacto.",
    icon: "engineering",
    badge: "Soporte verde",
  },
  {
    id: 2,
    title: "Tratamiento hídrico inteligente y ósmosis inversa",
    category: "Tratamiento hídrico",
    shortDesc: "Diseño, automatización y mantenimiento de sistemas para purificación de agua, calderas y reutilización de efluentes.",
    fullDesc: "Soluciones integrales de alta tecnología en el manejo y tratamiento de agua industrial y potable. Incluye suministro de especialidades químicas eco-amigables para calderas, torres de enfriamiento y sistemas avanzados de ósmosis inversa.",
    icon: "filter",
    badge: "Gestión del agua",
  },
  {
    id: 3,
    title: "Especialidades químicas de mantenimiento verde",
    category: "Especialidades químicas",
    shortDesc: "Formulaciones de última generación para limpieza industrial, desengrase y protección con certificación ambiental.",
    fullDesc: "Portafolio robusto de especialidades químicas orientadas a operaciones de mantenimiento mecánico, eléctrico e institucional con altos estándares tecnológicos y biodegradabilidad comprobada.",
    icon: "chemical",
    badge: "Química verde",
  },
  {
    id: 4,
    title: "Recubrimientos industriales de alta durabilidad",
    category: "Protección de superficies",
    shortDesc: "Sistemas de pintura de ultra-bajos VOCs y alta resistencia para estructuras y ambientes corrosivos severos.",
    fullDesc: "Suministro y asesoría en la aplicación de pinturas epóxicas eco-amigables, esmaltes y recubrimientos de avanzada para proteger la infraestructura industrial contra el desgaste minimizando las emisiones atmosféricas.",
    icon: "paint",
    badge: "Protección ecológica",
  },
];

export const industrySolutions: IndustrySolution[] = [
  {
    id: "mantenimiento-industrial",
    industry: "Mantenimiento industrial",
    description: "Alternativas tecnológicas para operaciones de limpieza y protección de equipos con enfoque eco-eficiente.",
    needs: [
      {
        id: "limpieza",
        title: "Limpieza y mantenimiento",
        description: "Productos de limpieza industrial biodegradables y de alto rendimiento.",
        category: "quimicos",
        categoryLabel: "Químicos industriales",
        icon: "chemical",
      },
      {
        id: "proteccion",
        title: "Protección de superficies",
        description: "Recubrimientos avanzados de bajo impacto ambiental.",
        category: "pinturas",
        categoryLabel: "Pinturas y recubrimientos",
        icon: "shield",
      },
    ],
  },
  {
    id: "procesos-industriales",
    industry: "Procesos industriales",
    description: "Soluciones de alta tecnología orientadas al tratamiento de agua y control de partículas en procesos.",
    needs: [
      {
        id: "tratamiento",
        title: "Tratamiento de procesos",
        description: "Inhibidores y químicos formulados para optimizar calderas y torres.",
        category: "quimicos",
        categoryLabel: "Químicos industriales",
        icon: "chemical",
      },
      {
        id: "filtracion",
        title: "Filtración y control de partículas",
        description: "Elementos filtrantes de alta durabilidad y eficiencia energética.",
        category: "filtracion",
        categoryLabel: "Filtración",
        icon: "filter",
      },
    ],
  },
  {
    id: "superficies-industriales",
    industry: "Superficies industriales",
    description: "Alternativas para proyectos de infraestructura que exigen acabados duraderos y ecológicos.",
    needs: [
      {
        id: "pisos",
        title: "Pisos industriales",
        description: "Recubrimientos epóxicos base agua de alta resistencia al tráfico.",
        category: "pinturas",
        categoryLabel: "Pinturas y recubrimientos",
        icon: "paint",
      },
      {
        id: "estructuras",
        title: "Estructuras metálicas",
        description: "Sistemas anticorrosivos libres de metales pesados nocivos.",
        category: "pinturas",
        categoryLabel: "Pinturas y recubrimientos",
        icon: "shield",
      },
    ],
  },
];

export const categoryOptions = [
  { value: "all", label: "Todos" },
  { value: "quimicos", label: "Químicos industriales" },
  { value: "filtracion", label: "Filtración" },
  { value: "pinturas", label: "Pinturas & recubrimientos" },
] as const;

export const mainNavigation = [
  ["Servicios", "#servicios"],
  ["Soluciones", "#soluciones"],
  ["Portafolio", "#portafolio"],
  ["Sostenibilidad", "#sostenibilidad"],
  ["Nosotros", "#nosotros"],
  ["Clientes", "#clientes"],
  ["Contacto", "#contacto"],
] as const;