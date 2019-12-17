export default[
    {
        path: '/area',
        name: 'area',
        component: () => import('../views/foorde-area')
    },
    {
        path: '/areaList',
        name: 'areaList',
        component: () => import('../views/foorde-area/area-list.vue')
    },
]