import { createRouter, createWebHistory } from 'vue-router';

import HomeView from '../views/Home.vue';
import RestaurantView from '../views/Restaurant.vue';

export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: HomeView,
        },
        {
            path: '/about',
            component: RestaurantView,
        },
    ],
});
