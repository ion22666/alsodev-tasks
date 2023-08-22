import { createStore, useStore } from 'vuex';

const state = {
    isAuthWindowOpen: false,
};

type State = typeof state;

// Create a new store instance.
const store = createStore({
    state() {
        return state;
    },
    mutations: {
        openAuth(state: State) {
            state.isAuthWindowOpen = true;
        },
        closeAuth(state: State) {
            state.isAuthWindowOpen = false;
        },
    },
});

export default store;

export const getStore = () => useStore<State>();
