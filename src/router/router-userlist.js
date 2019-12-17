export default [{
        path: '/',
        component: () => import('../views/Home.vue')
    },
    {
        path: '/home',
        name: 'home',
        component: () => import('../views/Home.vue')
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('../views/login/index.vue')
    },
    {
        path: '/userlist',
        name: 'userlist',
        component: () => import('../views/userlist')
    },
    {
        path: '/imgUpdate',
        name: 'imgUpdate',
        component: () => import('../views/img-update.vue')
    },
    {
        path: '/imgup',
        name: 'imgup',
        component: () => import('../views/imgup.vue')
    }
]