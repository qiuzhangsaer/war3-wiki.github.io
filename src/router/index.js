import {createRouter, createWebHashHistory} from 'vue-router';

export const manageRoutes = [{
    name: 'Home',
    path: '/home',
    component: () => import('@/views/Home.vue'),
    meta: {title: '首页'}
}];
export const defaultRoutes = [{
    path: '/',
    name: 'Home',
    component: () => import('@/views/Layout.vue'),
    redirect: '/home',
    children: [...manageRoutes, {
        path: '/404',
        name: '404',
        meta: {title: '找不到页面'},
        component: () => import('@/views/404.vue')
    }]
}, {
    path: '/:pathMatch(.*)',
    redirect: '/404'
}];

const router = createRouter({
    history: createWebHashHistory(),
    routes: defaultRoutes
})

export default router