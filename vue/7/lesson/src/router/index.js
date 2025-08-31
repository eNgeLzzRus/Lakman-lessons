import { createRouter, createWebHistory } from 'vue-router'
import ProductList from '../views/ProductList.vue'
import ProductView from '../views/ProductView.vue'
import CartPage from '../views/CartPage.vue'
import ErrorView from '../views/ErrorView.vue'
import CheckoutView from '../views/ChechoutView.vue'
import ResultTable from '@/views/ResultTable.vue'

const routes = [
  {
    path: '/',
    redirect: {name: 'products'} 
  },
  {
    path: '/products',
    name: 'products',
    component: ProductList
  },
  {
    path: '/products/:id',
    component: ProductView
  },
  {
    path: '/cart',
    name: 'cart',
    component: CartPage
  },
  {
    path: '/:pathMatch(.*)*',
    component: ErrorView
  },
  {
    path: '/checkout',
    component: CheckoutView
  },
  {
    path: '/result',
    component: ResultTable
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
