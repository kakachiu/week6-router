import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  // 前台
  {
    path: '/',
    component: () => import('../views/Frontend.vue'),
    children: [
      {
        path: '/',
        component: () => import('../views/Home.vue')
      },
      { // 子路由前方不用加上 /
        path: 'products',
        component: () => import('../views/Products.vue')
      },
      {
        path: 'product/:id', // 使用動態路由
        component: () => import('../views/Product.vue')
      },
      {
        path: 'cart',
        component: () => import('../views/Cart.vue')
      }
    ]
  },
  // 登入路由獨立
  {
    path: '/login',
    component: () => import('../views/Login.vue')
  },
  // 後台
  {
    path: '/admin',
    component: () => import('../views/Dashboard/Dashboard.vue'),
    children: [
      {
        path: 'products',
        component: () => import('../views/Dashboard/Products.vue')
      },
      {
        path: 'orders',
        component: () => import('../views/Dashboard/Orders.vue')
      },
      {
        path: 'coupons',
        component: () => import('../views/Dashboard/Coupons.vue')
      }
    ]
  },
  // 錯誤路由重新導向回首頁
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
