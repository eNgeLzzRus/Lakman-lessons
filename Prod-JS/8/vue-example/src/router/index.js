import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'catalog',
    component: function() {
      return import('../views/CatalogView.vue')
    }
  },
  {
    path: '/cart',
    name: 'cart',
    component: function () {
      return import('../views/CartView.vue')
    }
  },
  {
    path: '/error',
    name: 'error',
    component: function () {
      return import('../views/ErrorView.vue')
    }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
