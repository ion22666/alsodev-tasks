import { createStore, useStore } from 'vuex';
import { Product } from './api/mockDb';

type CartItem = {
    quantity: number;
    product: Product;
};

const state = {
    isAuthModalOpen: false,
    isCartModalOpen: false,
    cart: {
        items: [] as CartItem[],
    },
};

type State = typeof state;

// Create a new store instance.
const store = createStore({
    state() {
        return state;
    },
    mutations: {
        openAuth(state: State) {
            state.isAuthModalOpen = true;
        },
        closeAuth(state: State) {
            state.isAuthModalOpen = false;
        },
        openCart(state: State) {
            state.isCartModalOpen = true;
        },
        closeCart(state: State) {
            state.isCartModalOpen = false;
        },
        addProductToCart(state: State, data: { product: Product; count?: number }) {
            const { product, count } = data;

            const item = state.cart.items.find(i => i.product.id === product.id) || { quantity: 0, product };
            if (item.quantity + (count || 1) < 1) return;

            item.quantity += count || 1;
            state.cart.items = [...state.cart.items.filter(i => i.product.id !== product.id), item].sort((a, b) => a.product.name.localeCompare(b.product.name));
        },
        removeItemToCart(state: State, product: Product) {
            state.cart.items = state.cart.items.filter(i => i.product.id !== product.id).sort((a, b) => a.product.name.localeCompare(b.product.name));
        },
    },
    getters: {
        cartTotalPrice(state) {
            return state.cart.items.reduce((p, c) => p + c.product.price * c.quantity, 0);
        },
    },
});

export default store;

export const getStore = () => useStore<State>();
