import { createRouter, createWebHistory } from 'vue-router';

import AppHome from './views/AppHome.vue';
import AppChisiamo from './views/AppChisiamo.vue';
// import AppContatti from './views/AppContatti.vue';
import AppContattaci from './views/AppContattaci.vue';
import AppProdotti from './views/Products/AppProdotti.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: AppHome  ,
            meta: {
                title: "Sopres",
            }
        },
        {
            path: '/chi-siamo',
            name: 'chi-siamo',
            component: AppChisiamo,
            meta: {
                title: "Chi siamo",
            }
        },
        // {
        //     path: '/contatti',
        //     name: 'contatti',
        //     component: AppContatti,
        //     meta: {
        //         title: "Contatti",
        //     }
        // },
        {
            path: '/contattaci',
            name: 'contattaci',
            component: AppContattaci,
            meta: {
                title: "Contattaci",
            }
        },
        {
            path: '/prodotti',
            name: 'prodotti',
            component: AppProdotti,
            meta: {
                title: "Prodotti",
            }
        },
        
    ]
});

router.beforeEach((to, from) => {
    document.title = to.meta?.title ?? "Default Title"
})

export { router };