import { Product } from '@/components/Product/Product'
import { create } from 'zustand'

type Product = {
    id: number | string;
    src: string;
    altImage: string;
    title: string;
    description: string;
    secondTitle: string;
    ingredients: string;
    price: number;
    quantity: number;
}

type ProductStore = {
    products: Product[];
    addProduct: (info: Product) => void;
    removeProduct: (id:string | number) => void;
    incrementQuantity: (id:string | number) => void;
    decrementQuantity: (id:string | number) => void;
    total: () => string;
}

export const useProductStore = create<ProductStore>((set, get) => ({
    products: [],
    addProduct: (info) => set((state) => {
        const existingProduct = state.products.find(product => product.id === info.id);
        if (existingProduct) {
            // Se o produto já está no carrinho, apenas incrementa a quantidade
            return {
                products: state.products.map(product =>
                    product.id === info.id ? { ...product, quantity: product.quantity + 1 } : product
                ),
            };
        } else {
            // Se o produto não está no carrinho, adiciona com quantidade 1
            return {
                products: [...state.products, { ...info, quantity: 1 }],
            };
        }
    }),
    removeProduct: (id) => set((state) => ({
        products: state.products.filter(product => product.id !== id)
    })),
    incrementQuantity: (id) => set((state) => ({
        products: state.products.map(product =>
            product.id === id ? { ...product, quantity: product.quantity + 1 } : product
        ),
    })),
    decrementQuantity: (id) => set((state) => ({
        products: state.products
            .map(product =>
                product.id === id
                    ? { ...product, quantity: product.quantity - 1 }
                    : product
            )
            .filter(product => product.quantity > 0), // Remove o produto se a quantidade for 0
    })),
    total: () => {
        const products = get().products;
        const totalPrice = products.reduce((sum, product) => sum + product.price * product.quantity, 0);
        return totalPrice.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    }
}))