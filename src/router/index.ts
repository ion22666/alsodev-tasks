import { createRouter, createWebHistory, Router } from 'vue-router';

import HomeView from '../views/HomeView.vue';
import RestaurantView from '../views/RestaurantView.vue';
import ThanksForOrderView from '../views/ThanksForOrderView.vue';

export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: HomeView,
            name: 'home',
        },
        {
            path: '/restaurant/:name',
            component: RestaurantView,
            name: 'restaurant',
        },
        {
            path: '/thank-for-ordering',
            component: ThanksForOrderView,
            name: 'thank-for-ordering',
        },
    ].map(e => ({ ...e, path: (process.env.NODE_ENV === 'production' ? '/alsodev-tasks' : '') + e.path })),
});
