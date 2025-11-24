import { getAverageRating, getReviewCount } from "./reviews";

export interface Product {
    id: number;
    name: string;
    price: number;
    image: string;
    category: string;
    description?: string;
    features?: string[];
    originalPrice?: number;
    discount?: number;
    rating?: number;
    reviewCount?: number;
}

const rawProducts = [
    {
        id: 1,
        name: "Contenedor Industrial 50L",
        price: 15990,
        originalPrice: 19990,
        discount: 20,
        image: "https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?w=600",
        category: "industrial",
        description: "Contenedor industrial de alta resistencia, ideal para almacenamiento de materiales y productos. Fabricado en plástico de alta densidad.",
        features: ["Capacidad de 50 litros", "Material resistente", "Fácil de limpiar", "Con tapa hermética"]
    },
    {
        id: 2,
        name: "Set Limpieza Profesional",
        price: 7190, // Offer price
        originalPrice: 8990,
        discount: 20,
        image: "https://images.unsplash.com/photo-1563453392212-326f5e854473?w=600",
        category: "limpieza",
        description: "Set completo de limpieza profesional que incluye todos los elementos necesarios para una limpieza eficiente.",
        features: ["Escoba de cerdas suaves", "Trapeador absorbente", "Recogedor ergonómico", "Paño de microfibra"]
    },
    {
        id: 3,
        name: "Caja Organizadora 30L",
        price: 12990, // Offer price
        originalPrice: 16990,
        discount: 24,
        image: "https://images.unsplash.com/photo-1600857544200-b906d1bb0e8d?w=600",
        category: "organizacion",
        description: "Caja organizadora transparente perfecta para mantener tus espacios ordenados. Apilable y resistente.",
        features: ["Capacidad de 30 litros", "Material transparente", "Apilable", "Con asas laterales"]
    },
    {
        id: 4,
        name: "Kit Desinfección Completo",
        price: 19990, // Offer price
        originalPrice: 24990,
        discount: 20,
        image: "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=600",
        category: "higiene",
        description: "Kit completo de desinfección con productos de alta calidad para mantener tus espacios limpios y seguros.",
        features: ["Desinfectante multiuso", "Alcohol gel", "Toallas desinfectantes", "Guantes de protección"]
    },
    {
        id: 5,
        name: "Balde Industrial 20L",
        price: 7990, // Offer price
        originalPrice: 9990,
        discount: 20,
        image: "https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?w=600",
        category: "industrial",
        description: "Balde industrial robusto de 20 litros, ideal para tareas de limpieza y transporte de líquidos.",
        features: ["Capacidad de 20 litros", "Asa reforzada", "Material resistente", "Base antideslizante"]
    },
    {
        id: 6,
        name: "Escobillón Profesional",
        price: 4790, // Offer price
        originalPrice: 5990,
        discount: 20,
        image: "https://images.unsplash.com/photo-1563453392212-326f5e854473?w=600",
        category: "limpieza",
        description: "Escobillón profesional con cerdas de alta calidad para una limpieza profunda y eficiente.",
        features: ["Cerdas resistentes", "Mango ergonómico", "Cabezal giratorio", "Fácil almacenamiento"]
    },
    {
        id: 7,
        name: "Dispensador Jabón Automático",
        price: 14990, // Offer price
        originalPrice: 18990,
        discount: 21,
        image: "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=600",
        category: "bano",
        description: "Dispensador automático de jabón con sensor infrarrojo, perfecto para baños y cocinas.",
        features: ["Sensor automático", "Capacidad de 500ml", "Batería recargable", "Diseño moderno"]
    },
    {
        id: 8,
        name: "Contenedor Hermético 100L",
        price: 23990, // Offer price
        originalPrice: 29990,
        discount: 20,
        image: "https://images.unsplash.com/photo-1600857544200-b906d1bb0e8d?w=600",
        category: "almacenamiento",
        description: "Contenedor hermético de gran capacidad para almacenamiento seguro de alimentos y productos.",
        features: ["Capacidad de 100 litros", "Cierre hermético", "Material libre de BPA", "Resistente a golpes"]
    },
    {
        id: 9,
        name: "Trapeador Industrial",
        price: 7990,
        image: "https://images.unsplash.com/photo-1563453392212-326f5e854473?w=600",
        category: "limpieza",
        description: "Trapeador industrial de alta absorción, ideal para grandes superficies y uso intensivo.",
        features: ["Alta absorción", "Cabezal reemplazable", "Mango telescópico", "Sistema de escurrido"]
    },
    {
        id: 10,
        name: "Cesta Plástica Grande",
        price: 14990,
        image: "https://images.unsplash.com/photo-1600857544200-b906d1bb0e8d?w=600",
        category: "organizacion",
        description: "Cesta plástica grande con múltiples usos, perfecta para organización y almacenamiento.",
        features: ["Diseño ventilado", "Asas ergonómicas", "Apilable", "Fácil de limpiar"]
    },
    {
        id: 11,
        name: "Kit Sanitización",
        price: 19990,
        image: "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=600",
        category: "higiene",
        description: "Kit profesional de sanitización con productos certificados para uso comercial e industrial.",
        features: ["Sanitizante certificado", "Atomizador profesional", "Paños especializados", "Manual de uso"]
    },
    {
        id: 12,
        name: "Bidón 10L",
        price: 6990,
        image: "https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?w=600",
        category: "industrial",
        description: "Bidón de 10 litros con tapa rosca, ideal para almacenamiento y transporte de líquidos.",
        features: ["Capacidad de 10 litros", "Tapa hermética", "Asa reforzada", "Material resistente a químicos"]
    }
];

export const products: Product[] = rawProducts.map(p => ({
    ...p,
    rating: getAverageRating(p.id),
    reviewCount: getReviewCount(p.id)
}));

export const categories = [
    { id: "todos", name: "Todos los productos" },
    { id: "industrial", name: "Industrial" },
    { id: "limpieza", name: "Limpieza" },
    { id: "organizacion", name: "Organización" },
    { id: "higiene", name: "Higiene" },
    { id: "bano", name: "Baño" },
    { id: "almacenamiento", name: "Almacenamiento" }
];
