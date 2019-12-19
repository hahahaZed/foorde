export default[
    {
        path: '/shop',
        name: 'shop',
        component: () => import('../views/shop')
    },
    {
        path: '/shop/add',
        name: 'addshop',
        component: () => import('../views/shop/add-shop.vue')
    },
    {
        path: '/shop/edit',
        name: 'editshop',
        component: () => import('../views/shop/edit-shop.vue')
    },
]