import { createStore } from 'vuex'

import cart from './modules/cart'
import products from './modules/products'
import menu from './modules/menu'
import info from './modules/info'

export default createStore({
  modules: {
    menu,
    products,
    cart,
    info
  }
})
