import {createRouter, createWebHashHistory} from 'vue-router';

export const manageRoutes = [{
    name: 'Index',
    path: '/index',
    component: () => import('@/views/Index.vue'),
    meta: {title: '首页'}
}];
export const defaultRoutes = [{
    path: '/',
    name: 'Index',
    component: () => import('@/views/Layout.vue'),
    redirect: '/index',
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