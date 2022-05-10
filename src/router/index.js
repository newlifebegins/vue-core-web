/*
 * @Author: wangwei
 * @Date: 2022-03-22 17:57:24
 * @LastEditTime: 2022-05-10 16:43:30
 * @FilePath: index.js
 */
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

export const routes = [
    {
        path: '/print',
        name: 'print',
        component: () => import(/* webpackChunkName: "print" */ '@/views/print.vue'),
        meta: {
            title: 'print',
        },
    },
    {
        path: '/tree',
        name: 'tree',
        component: () => import(/* webpackChunkName: "tree" */ '@/views/tree.vue'),
        meta: {
            title: 'tree',
        },
        children: [
            {
                path: '/aa',
                name: 'aa',
                component: () => import(/* webpackChunkName: "print" */ '@/views/print.vue'),
                meta: {
                    title: 'aa',
                },
                children: [
                    {
                        path: '/bb',
                        name: 'bb',
                        component: () => import(/* webpackChunkName: "print" */ '@/views/print.vue'),
                        meta: {
                            title: 'bb',
                        },
                    },
                ],
            },
        ],
    },
];

const router = createRouter({
    history: createWebHashHistory(''),
    routes,
});

export function setupRouter(app) {
    app.use(router);
}
export default router;
