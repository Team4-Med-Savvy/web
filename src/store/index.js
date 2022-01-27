import Vue from 'vue'
import Vuex from 'vuex'
import products from './modules/products'
<<<<<<< HEAD
import user from './modules/user'
=======
import cart from './modules/cart'
>>>>>>> 22c0d80dea217222a704c00c5c998ef3c9f607e6

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    products,
<<<<<<< HEAD
    user
=======
    cart
>>>>>>> 22c0d80dea217222a704c00c5c998ef3c9f607e6
  }
})
