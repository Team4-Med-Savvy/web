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
  },
  async removeProduct ({commit}, productDescription) {
    commit('removeFromCart', productDescription)
  },
  async increment ({commit}, {productDescription, quantity}) {
    commit('incrementQuantity', {productDescription, quantity})
  },
  async decrement ({commit}, {productDescription, quantity}) {
    commit('decrementQuantity', {productDescription, quantity})
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
  },
  removeFromCart: (state, productDescription) => {
    state.cart = state.cart.filter(item => {
      return item.productDescription.id !== productDescription.id
    })
  },
  incrementQuantity: (state, {productDescription, quantity}) => {
    let productInCart = state.cart.find(item => {
      return item.productDescription.id === productDescription.id
    })
    if (productInCart) {
      productInCart.quantity += 1
    }
  },
  decrementQuantity: (state, {productDescription, quantity}) => {
    let productInCart = state.cart.find(item => {
      return item.productDescription.id === productDescription.id
    })
    if (productInCart) {
      productInCart.quantity -= 1
    }
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
