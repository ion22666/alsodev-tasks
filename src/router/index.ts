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
        },
        {
            path: '/restaurant/:name',
            component: RestaurantView,
        },
        {
            path: '/thank-for-ordering',
            component: ThanksForOrderView,
        },
    ].map(e => ({ ...e, path: (process.env.NODE_ENV === 'production' ? '/alsodev-tasks' : '') + e.path })),
});
