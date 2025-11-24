// Gestión de lista de favoritos usando localStorage

export interface WishlistItem {
    id: number;
    name: string;
    price: number;
    image: string;
    addedAt: string;
}

const WISHLIST_KEY = 'plasticlean_wishlist';

// Obtener todos los favoritos
export function getWishlist(): WishlistItem[] {
    if (typeof window === 'undefined') return [];

    const stored = localStorage.getItem(WISHLIST_KEY);
    return stored ? JSON.parse(stored) : [];
}

// Guardar favoritos
function saveWishlist(items: WishlistItem[]): void {
    localStorage.setItem(WISHLIST_KEY, JSON.stringify(items));

    // Disparar evento personalizado para actualizar UI
    window.dispatchEvent(new CustomEvent('wishlistUpdated', {
        detail: { count: items.length }
    }));
}

// Agregar producto a favoritos
export function addToWishlist(product: Omit<WishlistItem, 'addedAt'>): void {
    const wishlist = getWishlist();

    // Verificar si ya existe
    if (wishlist.some(item => item.id === product.id)) {
        return;
    }

    const newItem: WishlistItem = {
        ...product,
        addedAt: new Date().toISOString()
    };

    wishlist.push(newItem);
    saveWishlist(wishlist);
}

// Eliminar producto de favoritos
export function removeFromWishlist(productId: number): void {
    const wishlist = getWishlist();
    const filtered = wishlist.filter(item => item.id !== productId);
    saveWishlist(filtered);
}

// Verificar si un producto está en favoritos
export function isInWishlist(productId: number): boolean {
    const wishlist = getWishlist();
    return wishlist.some(item => item.id === productId);
}

// Alternar favorito (agregar o quitar)
export function toggleWishlist(product: Omit<WishlistItem, 'addedAt'>): boolean {
    if (isInWishlist(product.id)) {
        removeFromWishlist(product.id);
        return false;
    } else {
        addToWishlist(product);
        return true;
    }
}

// Obtener cantidad de favoritos
export function getWishlistCount(): number {
    return getWishlist().length;
}

// Limpiar todos los favoritos
export function clearWishlist(): void {
    saveWishlist([]);
}
