// Gestión de órdenes usando localStorage

export interface ShippingInfo {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    region: string;
    postalCode: string;
}

export interface Order {
    id: string;
    items: Array<{
        id: number;
        name: string;
        price: number;
        image: string;
        quantity: number;
    }>;
    shipping: ShippingInfo;
    paymentMethod: 'credit' | 'debit' | 'transfer';
    subtotal: number;
    shippingCost: number;
    total: number;
    date: string;
    status: 'pending' | 'confirmed' | 'shipped' | 'delivered';
}

const ORDERS_KEY = 'plasticlean_orders';
const TEMP_ORDER_KEY = 'plasticlean_temp_order';

// Generar ID único para orden
export function generateOrderId(): string {
    const timestamp = Date.now();
    const random = Math.floor(Math.random() * 1000);
    return `PC-${timestamp}-${random}`;
}

// Calcular costo de envío basado en región y subtotal
export function calculateShipping(region: string, subtotal: number): number {
    // Envío gratis sobre $30.000
    if (subtotal >= 30000) return 0;

    const shippingCosts: Record<string, number> = {
        'metropolitana': 3000,
        'valparaiso': 4000,
        'biobio': 4500,
        'otras': 5000
    };

    return shippingCosts[region.toLowerCase()] || shippingCosts['otras'];
}

// Guardar información temporal del checkout
export function saveTempOrderData(data: Partial<ShippingInfo>): void {
    localStorage.setItem(TEMP_ORDER_KEY, JSON.stringify(data));
}

// Obtener información temporal del checkout
export function getTempOrderData(): Partial<ShippingInfo> | null {
    const stored = localStorage.getItem(TEMP_ORDER_KEY);
    return stored ? JSON.parse(stored) : null;
}

// Limpiar información temporal
export function clearTempOrderData(): void {
    localStorage.removeItem(TEMP_ORDER_KEY);
}

// Crear nueva orden
export function createOrder(
    items: Order['items'],
    shipping: ShippingInfo,
    paymentMethod: Order['paymentMethod']
): Order {
    const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shippingCost = calculateShipping(shipping.region, subtotal);

    const order: Order = {
        id: generateOrderId(),
        items,
        shipping,
        paymentMethod,
        subtotal,
        shippingCost,
        total: subtotal + shippingCost,
        date: new Date().toISOString(),
        status: 'confirmed'
    };

    // Guardar orden
    const orders = getOrders();
    orders.unshift(order); // Agregar al inicio
    localStorage.setItem(ORDERS_KEY, JSON.stringify(orders));

    return order;
}

// Obtener todas las órdenes
export function getOrders(): Order[] {
    const stored = localStorage.getItem(ORDERS_KEY);
    return stored ? JSON.parse(stored) : [];
}

// Obtener una orden por ID
export function getOrderById(orderId: string): Order | null {
    const orders = getOrders();
    return orders.find(order => order.id === orderId) || null;
}

// Validar email
export function validateEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Validar teléfono chileno
export function validatePhone(phone: string): boolean {
    const phoneRegex = /^(\+?56)?[2-9]\d{8}$/;
    return phoneRegex.test(phone.replace(/\s/g, ''));
}

// Validar código postal chileno
export function validatePostalCode(code: string): boolean {
    const postalRegex = /^\d{7}$/;
    return postalRegex.test(code);
}
