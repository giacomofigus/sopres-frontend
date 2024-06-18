import { createRouter, createWebHistory } from 'vue-router';

import AppHome from './views/AppHome.vue';
import AppChisiamo from './views/AppChisiamo.vue';
import AppContatti from './views/AppContatti.vue';
import AppDovesiamo from './views/AppDovesiamo.vue';
import AppProdotti from './views/Products/AppProdotti.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: AppHome
        },
        {
            path: '/chi-siamo',
            name: 'chi-siamo',
            component: AppChisiamo
        },
        {
            path: '/contatti',
            name: 'contatti',
            component: AppContatti
        },
        {
            path: '/dove-siamo',
            name: 'dove-siamo',
            component: AppDovesiamo
        },
        {
            path: '/prodotti',
            name: 'prodotti',
            component: AppProdotti
        },
        
    ]
});

export { router };