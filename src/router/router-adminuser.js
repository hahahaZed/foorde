export default[
    {
        path: '/admin/add',
        name: 'adminAdd',
        component: () => import('../views/Admin-user/add.vue')
    },
    {
        path: '/admin/list',
        name: 'adminList',
        component: () => import('../views/Admin-user')
    }
]