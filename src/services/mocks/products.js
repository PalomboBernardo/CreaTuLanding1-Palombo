// src/services/mocks/products.js

// Helper para armar URLs de imágenes locales con Vite
const img = (relativePath) => new URL(relativePath, import.meta.url).href;

// Delay para simular llamada async (requisito)
const delay = (ms) => new Promise((res) => setTimeout(res, ms));

/**
 * Reglas:
 * - Fertilizantes: TN (step 1), IVA 10.5%
 * - Bioestimulantes: múltiplos de 10 (step 10), IVA 10.5%
 * - Herbicidas/Insecticidas/Fungicidas: múltiplos de 10 (step 10), IVA 21%
 *
 * price: PRECIO NETO (sin IVA)
 */

export const DATA = [
    // =========================
    // FERTILIZANTES (IVA 10.5%)
    // =========================
    {
        id: "top-phos-280",
        title: "TOP-PHOS 280 HP",
        price: 230,
        stock: 120,
        category: "fertilizantes",
        unit: "tn",
        step: 1,
        ivaRate: 0.105,
        description:
            "Fertilizante fosfatado granulado con mesonutrientes de alta disponibilidad y activador de la actividad microbiana del suelo. P acomplejado con CSP para mantenerlo en solución y evitar fijación.",
        bullets: [
            "Fósforo de alta disponibilidad (CSP)",
            "Aporta N, P, Ca y S",
            "Activa crecimiento radicular y microbiología del suelo",
        ],
        image: img("../../assets/products/fertilizantes/top-phos-280.jpg"),
    },
    {
        id: "top-phos-724",
        title: "TOP-PHOS 724",
        price: 250,
        stock: 90,
        category: "fertilizantes",
        unit: "tn",
        step: 1,
        ivaRate: 0.105,
        description:
            "Fertilizante fosfatado para arranque y desarrollo radicular. Ideal como arrancador en siembra para mejorar implantación y vigor inicial.",
        bullets: [
            "Arrancador de alta eficiencia",
            "Mejora raíces y establecimiento",
            "Alta respuesta en primeros estadios",
        ],
        image: img("../../assets/products/fertilizantes/top-phos-724.jpg"),
    },
    {
        id: "green-start",
        title: "GREENSTART",
        price: 190,
        stock: 70,
        category: "fertilizantes",
        unit: "tn",
        step: 1,
        ivaRate: 0.105,
        description:
            "Fertilizante microgranulado que estimula el desarrollo radicular y mejora el establecimiento del cultivo.",
        bullets: ["Mejora expansión radicular", "Excelente arrancador", "Mayor eficiencia en uso de nutrientes"],
        image: img("../../assets/products/fertilizantes/green-start.jpg"),
    },

    // ==========================
    // BIOESTIMULANTES (IVA 10.5%)
    // ==========================
    {
        id: "fertiactyl-gz",
        title: "FERTIACTYL GZ",
        price: 18,
        stock: 2000,
        category: "bioestimulantes",
        unit: "L",
        step: 10,
        ivaRate: 0.105,
        description:
            "Bioestimulante líquido que ayuda a superar estrés hídrico/térmico gracias al complejo GZA (glicina betaína, zeatina, ácidos húmicos y fúlvicos).",
        bullets: ["Tolerancia al estrés", "Estimula raíces", "Activa microbiología del suelo"],
        image: img("../../assets/products/bioestimulantes/fertiactyl-gz.jpg"),
    },
    {
        id: "eurofit-max",
        title: "EUROFIT MAX",
        price: 16,
        stock: 1500,
        category: "bioestimulantes",
        unit: "L",
        step: 10,
        ivaRate: 0.105,
        description:
            "Bioestimulante activador de defensas naturales de la planta. Ayuda a sostener vigor y resiliencia ante condiciones adversas.",
        bullets: ["Activa defensas", "Mejora recuperación", "Vigor y resiliencia"],
        image: img("../../assets/products/bioestimulantes/eurofit-max.jpg"),
    },
    {
        id: "seactiv-gold-bmo",
        title: "SEACTIV GOLD BMo",
        price: 22,
        stock: 1200,
        category: "bioestimulantes",
        unit: "L",
        step: 10,
        ivaRate: 0.105,
        description:
            "Bioestimulante foliar que mejora rendimiento bajo estrés: potencia fotosíntesis, tolerancia al estrés abiótico y el transporte interno de nutrientes.",
        bullets: ["Antioxidante y movilizador de nutrientes", "Efecto osmótico (glicina betaína)", "Mejor transporte interno"],
        image: img("../../assets/products/bioestimulantes/seactiv-gold.jpg"),
    },
    {
        id: "seactiv-vital",
        title: "SEACTIV VITAL",
        price: 20,
        stock: 1100,
        category: "bioestimulantes",
        unit: "L",
        step: 10,
        ivaRate: 0.105,
        description:
            "Bioestimulante foliar que mejora rendimiento bajo estrés al aumentar fotosíntesis, resistencia al estrés abiótico y nutrición por mejor transporte de nutrientes.",
        bullets: ["Antioxidante y movilizador de nutrientes", "Efecto osmótico", "Mejor transporte interno"],
        image: img("../../assets/products/bioestimulantes/seactiv-vital.jpg"),
    },

    // ======================
    // HERBICIDAS (IVA 21%)
    // ======================
    {
        id: "dual-gold",
        title: "DUAL GOLD",
        price: 12,
        stock: 3000,
        category: "herbicidas",
        unit: "L",
        step: 10,
        ivaRate: 0.21,
        description:
            "Herbicida preemergente para control de malezas. Ideal para programas de control temprano (ejemplo de ficha).",
        bullets: ["Control temprano", "Preemergente", "Programa base de barbecho/siembra"],
        image: img("../../assets/products/herbicidas/dual-gold.jpg"),
    },
    {
        id: "flex",
        title: "FLEX",
        price: 14,
        stock: 2400,
        category: "herbicidas",
        unit: "L",
        step: 10,
        ivaRate: 0.21,
        description:
            "Herbicida para control postemergente (ejemplo) en malezas de hoja ancha. Usar según marbete.",
        bullets: ["Postemergente", "Hoja ancha", "Complemento de programa"],
        image: img("../../assets/products/herbicidas/flex.jpg"),
    },
    {
        id: "enelan",
        title: "ENELAN",
        price: 11,
        stock: 2200,
        category: "herbicidas",
        unit: "L",
        step: 10,
        ivaRate: 0.21,
        description:
            "Herbicida (ejemplo) para manejo de malezas en barbecho. Ajustar dosis a condición y objetivo.",
        bullets: ["Barbecho", "Manejo de malezas", "Rotación de modos de acción"],
        image: img("../../assets/products/herbicidas/enelan.jpg"),
    },

    // =========================
    // INSECTICIDAS (IVA 21%)
    // =========================
    {
        id: "ampligo",
        title: "AMPLIGO",
        price: 25,
        stock: 1600,
        category: "insecticidas",
        unit: "L",
        step: 10,
        ivaRate: 0.21,
        description:
            "Insecticida (ejemplo) para control de lepidópteros. Aplicar según umbrales y recomendación técnica.",
        bullets: ["Control de lepidópteros", "Manejo por umbrales", "Estrategia anti-resistencia"],
        image: img("../../assets/products/insecticidas/ampligo.jpg"),
    },
    {
        id: "engeo",
        title: "ENGEO",
        price: 21,
        stock: 1400,
        category: "insecticidas",
        unit: "L",
        step: 10,
        ivaRate: 0.21,
        description:
            "Insecticida (ejemplo) para control de plagas chupadoras. Respetar dosis y momentos de aplicación.",
        bullets: ["Plagas chupadoras", "Protección del cultivo", "Rotación de activos"],
        image: img("../../assets/products/insecticidas/engeo.jpg"),
    },
    {
        id: "karate-zeon",
        title: "KARATE ZEON",
        price: 19,
        stock: 1700,
        category: "insecticidas",
        unit: "L",
        step: 10,
        ivaRate: 0.21,
        description:
            "Insecticida (ejemplo) de acción de contacto e ingestión. Usar con criterio técnico y buenas prácticas.",
        bullets: ["Acción rápida", "Contacto e ingestión", "Buenas prácticas"],
        image: img("../../assets/products/insecticidas/karate-zeon.jpg"),
    },

    // ======================
    // FUNGICIDAS (IVA 21%)
    // ======================
    {
        id: "amistar-xtra",
        title: "AMISTAR XTRA",
        price: 28,
        stock: 1200,
        category: "fungicidas",
        unit: "L",
        step: 10,
        ivaRate: 0.21,
        description:
            "Fungicida (ejemplo) para control preventivo/curativo temprano. Ideal para programas sanitarios.",
        bullets: ["Preventivo", "Programa sanitario", "Protección de hoja"],
        image: img("../../assets/products/fungicidas/amistar-xtra.jpg"),
    },
    {
        id: "elatus",
        title: "ELATUS",
        price: 32,
        stock: 900,
        category: "fungicidas",
        unit: "L",
        step: 10,
        ivaRate: 0.21,
        description:
            "Fungicida (ejemplo) para enfermedades foliares. Ajustar a presión de enfermedad.",
        bullets: ["Alta performance", "Enfermedades foliares", "Manejo integrado"],
        image: img("../../assets/products/fungicidas/elatus.jpg"),
    },
    {
        id: "miravis-duo",
        title: "MIRAVIS DUO",
        price: 30,
        stock: 1000,
        category: "fungicidas",
        unit: "L",
        step: 10,
        ivaRate: 0.21,
        description:
            "Fungicida (ejemplo) para programas de control y protección. Usar según recomendaciones.",
        bullets: ["Protección prolongada", "Programa sanitario", "Buenas prácticas"],
        image: img("../../assets/products/fungicidas/miravis-duo.jpg"),
    },
];

// ✅ API mock requerida por la entrega (Promises + delay)
export const products = {
    getProducts: async () => {
        await delay(600);
        return DATA;
    },

    getProductsByCategory: async (categoryId) => {
        await delay(600);
        return DATA.filter((p) => p.category === categoryId);
    },

    getProductById: async (id) => {
        await delay(600);
        return DATA.find((p) => p.id === id) || null;
    },
};
