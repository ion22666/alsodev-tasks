import { createRouter, createWebHistory } from 'vue-router';

import HomeView from '../views/HomeView.vue';
import RestaurantView from '../views/RestaurantView.vue';

export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: HomeView,
        },
        {
            path: '/restaurant/:name',
            component: RestaurantView,
        },
    ],
});
