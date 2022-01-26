// import axios from 'axios'

const state = {
  cart: []
}

const getters = {
  cart: state => state.cart,
  cartTotalPrice: state => {
    let sum = 0
    state.cart.forEach(item => {
      sum += item.productDescription.id * item.quantity
    })
    return sum
  }
}

const actions = {
  async addToCart ({commit}, {productDescription, quantity}) {
    commit('setToCart', {productDescription, quantity})
  }

}
const mutations = {
  setToCart: (state, {productDescription, quantity}) => {
    let productInCart = state.cart.find(item => {
      return item.productDescription.id === productDescription.id
    })

    if (productInCart) {
      productInCart.quantity += quantity
      return
    }
    state.cart.push({productDescription, quantity})
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
