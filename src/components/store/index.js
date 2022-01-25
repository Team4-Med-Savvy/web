// import Vue from 'vue'
// import Vuex from 'vuex'
// import axios from 'axios'

// Vue.use(Vuex)

// const state = {
//   productsList: [],
//   productDetail: {},
//   cart: []

// }

// const mutations = {
//   setProductList (state, value) {
//     state.productsList = value
//   },
//   setProductDetail (state, value) {
//     state.productDetail = value
//   },
//   setCart (state, value) {
//     state.cart = state.cart.push(value)
//   }
// }

// const actions = {
//   getProductList ({commit}) {
//     axios.get('http://fakestoreapi.com/products')
//       .then(res => {
//         commit('setProductList', res.data)
//       }
//       )
//   },
//   getProductDetail ({commit}, id1) {
//     axios.get(`http://fakestoreapi.com/products/${id1}`)
//       .then(res => {
//         commit('setProductDetail', res.data)
//       }
//       )
//   },
//   addItemToCart ({commit}, item) {
//     commit('setCart', item)
//   }
// }

// const getters = {
//   productsList (state) {
//     return state.productsList
//   },
//   productDetail (state) {
//     return state.productDetail
//   },
//   getCart (state) {
//     return state.cart
//   }
// }

// let store = new Vuex.Store({
//   state,
//   mutations,
//   actions,
//   getters
// })

// export default store
