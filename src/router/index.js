import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [{
    path: '/',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/Home.vue')
  },
  {
    path:'/login',
    name:'login',
    component: () => import('../views/login/index.vue')
  },
  {
    path:'/userlist',
    name:'userlist',
    component: () => import('../views/userlist.vue')
  },
  {
    path:'/imgUpdate',
    name:'imgUpdate',
    component: () => import('../views/img-update.vue')
  },
  {
    path:'/img',
    name:'img',
    component: () => import('../views/img.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router