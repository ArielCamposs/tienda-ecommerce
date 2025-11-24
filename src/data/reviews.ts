// Mock data de reseñas para productos
export interface Review {
    id: number;
    productId: number;
    userName: string;
    rating: 1 | 2 | 3 | 4 | 5;
    title: string;
    comment: string;
    date: string;
    verified: boolean;
    helpful: number;
}

export const reviews: Review[] = [
    // Contenedor Industrial 50L (id: 1)
    {
        id: 1,
        productId: 1,
        userName: "María González",
        rating: 5,
        title: "Excelente calidad",
        comment: "Muy resistente y espacioso. Lo uso para almacenar herramientas y ha resistido perfectamente el uso industrial.",
        date: "2024-11-15",
        verified: true,
        helpful: 12
    },
    {
        id: 2,
        productId: 1,
        userName: "Carlos Muñoz",
        rating: 4,
        title: "Buena compra",
        comment: "Cumple con lo esperado. La tapa cierra bien y el material es de buena calidad.",
        date: "2024-11-10",
        verified: true,
        helpful: 8
    },
    {
        id: 3,
        productId: 1,
        userName: "Ana Pérez",
        rating: 5,
        title: "Perfecto para mi taller",
        comment: "Lo compré para mi taller y es justo lo que necesitaba. Muy recomendado.",
        date: "2024-11-05",
        verified: false,
        helpful: 5
    },

    // Set Limpieza Profesional (id: 2)
    {
        id: 4,
        productId: 2,
        userName: "Roberto Silva",
        rating: 5,
        title: "Completo y de calidad",
        comment: "Viene con todo lo necesario. La escoba y el trapeador son de muy buena calidad.",
        date: "2024-11-18",
        verified: true,
        helpful: 15
    },
    {
        id: 5,
        productId: 2,
        userName: "Patricia Rojas",
        rating: 4,
        title: "Muy útil",
        comment: "Buen set para limpieza general. El único detalle es que el recogedor podría ser un poco más grande.",
        date: "2024-11-12",
        verified: true,
        helpful: 7
    },

    // Caja Organizadora 30L (id: 3)
    {
        id: 6,
        productId: 3,
        userName: "Luis Fernández",
        rating: 5,
        title: "Perfecta para organizar",
        comment: "Transparente, resistente y apilable. Compré varias y quedé muy satisfecho.",
        date: "2024-11-20",
        verified: true,
        helpful: 20
    },
    {
        id: 7,
        productId: 3,
        userName: "Carmen Torres",
        rating: 5,
        title: "Excelente relación calidad-precio",
        comment: "Las uso para guardar juguetes y ropa. Son muy prácticas y duraderas.",
        date: "2024-11-14",
        verified: true,
        helpful: 11
    },
    {
        id: 8,
        productId: 3,
        userName: "Diego Vargas",
        rating: 4,
        title: "Buena compra",
        comment: "Cumplen su función. Las asas son cómodas y el cierre es seguro.",
        date: "2024-11-08",
        verified: false,
        helpful: 6
    },

    // Kit Desinfección Completo (id: 4)
    {
        id: 9,
        productId: 4,
        userName: "Sofía Ramírez",
        rating: 5,
        title: "Indispensable en estos tiempos",
        comment: "Kit muy completo. El desinfectante es efectivo y rinde bastante.",
        date: "2024-11-19",
        verified: true,
        helpful: 18
    },
    {
        id: 10,
        productId: 4,
        userName: "Jorge Medina",
        rating: 4,
        title: "Buen kit",
        comment: "Productos de calidad. Lo uso en mi oficina y estoy conforme.",
        date: "2024-11-11",
        verified: true,
        helpful: 9
    },

    // Balde Industrial 20L (id: 5)
    {
        id: 11,
        productId: 5,
        userName: "Andrea Castro",
        rating: 5,
        title: "Muy resistente",
        comment: "Lo uso a diario para limpieza y no se ha deformado. Excelente compra.",
        date: "2024-11-17",
        verified: true,
        helpful: 14
    },
    {
        id: 12,
        productId: 5,
        userName: "Miguel Soto",
        rating: 5,
        title: "Perfecto",
        comment: "Buen tamaño, asa resistente y base antideslizante funciona muy bien.",
        date: "2024-11-09",
        verified: true,
        helpful: 10
    },

    // Escobillón Profesional (id: 6)
    {
        id: 13,
        productId: 6,
        userName: "Valentina Ortiz",
        rating: 4,
        title: "Buena calidad",
        comment: "Las cerdas son resistentes y el mango es cómodo. Buen producto.",
        date: "2024-11-16",
        verified: true,
        helpful: 8
    },

    // Dispensador Jabón Automático (id: 7)
    {
        id: 14,
        productId: 7,
        userName: "Francisco Herrera",
        rating: 5,
        title: "Muy práctico",
        comment: "El sensor funciona perfecto. Diseño moderno y fácil de rellenar.",
        date: "2024-11-13",
        verified: true,
        helpful: 16
    },
    {
        id: 15,
        productId: 7,
        userName: "Isabella Morales",
        rating: 4,
        title: "Funciona bien",
        comment: "Cumple su función. La batería dura bastante tiempo.",
        date: "2024-11-07",
        verified: false,
        helpful: 7
    },

    // Contenedor Hermético 100L (id: 8)
    {
        id: 16,
        productId: 8,
        userName: "Rodrigo Núñez",
        rating: 5,
        title: "Excelente para almacenar",
        comment: "Gran capacidad y cierre hermético perfecto. Lo uso para guardar alimentos.",
        date: "2024-11-21",
        verified: true,
        helpful: 19
    },

    // Trapeador Industrial (id: 9)
    {
        id: 17,
        productId: 9,
        userName: "Camila Reyes",
        rating: 5,
        title: "Muy absorbente",
        comment: "El mejor trapeador que he comprado. Absorbe muy bien y es fácil de escurrir.",
        date: "2024-11-15",
        verified: true,
        helpful: 13
    },

    // Cesta Plástica Grande (id: 10)
    {
        id: 18,
        productId: 10,
        userName: "Sebastián Vega",
        rating: 4,
        title: "Práctica y resistente",
        comment: "La uso para transportar productos. Las asas son cómodas y es apilable.",
        date: "2024-11-10",
        verified: true,
        helpful: 9
    },

    // Kit Sanitización (id: 11)
    {
        id: 19,
        productId: 11,
        userName: "Daniela Flores",
        rating: 5,
        title: "Kit profesional",
        comment: "Productos certificados y de excelente calidad. Lo uso en mi negocio.",
        date: "2024-11-18",
        verified: true,
        helpful: 17
    },

    // Bidón 10L (id: 12)
    {
        id: 20,
        productId: 12,
        userName: "Matías Campos",
        rating: 5,
        title: "Muy útil",
        comment: "Perfecto para almacenar líquidos. La tapa cierra herméticamente.",
        date: "2024-11-12",
        verified: true,
        helpful: 11
    }
];

// Función para obtener reseñas de un producto
export function getProductReviews(productId: number): Review[] {
    return reviews.filter(review => review.productId === productId);
}

// Función para calcular el rating promedio
export function getAverageRating(productId: number): number {
    const productReviews = getProductReviews(productId);
    if (productReviews.length === 0) return 0;

    const sum = productReviews.reduce((acc, review) => acc + review.rating, 0);
    return Math.round((sum / productReviews.length) * 10) / 10;
}

// Función para obtener la distribución de ratings
export function getRatingDistribution(productId: number) {
    const productReviews = getProductReviews(productId);
    const distribution = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };

    productReviews.forEach(review => {
        distribution[review.rating]++;
    });

    return distribution;
}

// Función para obtener el total de reseñas
export function getReviewCount(productId: number): number {
    return getProductReviews(productId).length;
}
