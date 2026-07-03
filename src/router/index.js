import { createRouter, createWebHistory } from "vue-router";
import { components } from "vuetify/dist/vuetify.js";
import { useAuthStore } from "../stores/auth.js";


const routes = [
        {
            path: '/Orders',
            name: 'orders',
            component: () => import("../views/Orders.vue")
        },
        {
            path: '/',
            name: 'LandingPage',
            component: () => import("../views/LandingPage.vue"),
        },
        {
            path: '/dash',
            name: 'Dashboard',
            component: () => import("../views/Dashboard.vue"),
            meta: { requireAuth: true }
        },
        {
            path: '/suzuki',
            name: 'Suzuki',
            component: () => import("../components/Suzuki.vue")
        },
        {
            path: '/bmw',
            name: 'Bmw',
            component: () => import("../components/Bmw.vue")
        },
        {
            path: '/honda',
            name: 'Honda',
            component: () => import("../components/Honda.vue")
        },
        {
            path: '/kawasaki',
            name: 'Kawasaki',
            component: () => import("../components/Kawasaki.vue")
        },
        {
            path: '/ktm',
            name: 'Ktm',
            component: () => import("../components/Ktm.vue")
        },
        {
            path: '/yamaha',
            name: 'Yamaha',
            component: () => import("../components/Yamaha.vue")
        },
        {
            path: '/ducati',
            name: 'Ducati',
            component: () => import("../components/Ducati.vue")
        },
        {
            path: '/harley',
            name: 'Harley',
            component: () => import("../components/Harley-Davidson.vue")
        },
        {
            path: '/scooters',
            name: 'Bmwscoots',
            component: () => import("../components/BmwScooters.vue")
        },
        {
            path: '/register',
            name: 'Signup',
            component: () => import("../views/auth/SignupView.vue")
        },
        {
            path: '/login',
            name: 'login',
            component: () => import("../views/auth/LoginView.vue")
        },
        {
            path: '/header',
            name: 'header',
            component: () => import("../components/layout/Header.vue")
        },
    ]

const router = createRouter ({
    history: createWebHistory(),
    routes
})

router.beforeEach(async (to, from, next) => {
    const auth = useAuthStore();

    if (!auth.isAuthResolved) {
        await auth.attempt();
    }

    if (to.meta.requireAuth && !auth.isAuthenticated) {
        next('/login');
    } else {
        next();
    }
});


export default router