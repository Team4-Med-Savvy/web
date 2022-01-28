import axios from 'axios'

const state = {
  cart: []
}

const getters = {
  cart: state => state.cart,
  cartTotalPrice: state => {
    let sum = 0
    state.cart.forEach(item => {
      sum += item.productDescription.price * item.quantity
    })
    return sum
  }
}

const actions = {
  async addToCart ({commit}, {productDescription, quantity, email, currentUrl}) {
    commit('setToCart', {productDescription, quantity})
    axios.post('http://localhost:8186/cart/' + email + '/inc', {
      // productId: this.$route.params.productId,
      // path: window.location.pathname,
      productId: currentUrl,
      merchantId: productDescription.merchant[0],
      price: productDescription.price
    }).then((res) => console.log('sent'))
  },
  async removeProduct ({commit}, productDescription) {
    commit('removeFromCart', productDescription)
  },
  async increment ({commit}, {productDescription, quantity, email, currentUrl}) {
    commit('incrementQuantity', {productDescription, quantity})
    axios.post('http://localhost:8186/cart/' + email + '/inc', {
      productId: currentUrl,
      merchantId: productDescription.merchant[0],
      price: productDescription.price
    }).then((res) => console.log('sent'))
  },
  async decrement ({commit}, {productDescription, quantity}) {
    commit('decrementQuantity', {productDescription, quantity})
  },
  async getCartItems ({commit}) {
    const response = await axios.get(`http://localhost:8186/cart/email/:email`)
    commit('setProducts', response.data)
  }

}
const mutations = {
  setToCart: (state, {productDescription, quantity}) => {
    let productInCart = state.cart.find(item => {
      return item.productDescription._links.self.href.split('/')[4] === productDescription._links.self.href.split('/')[4]
    })

    if (productInCart) {
      productInCart.quantity += quantity
      return
    }
    state.cart.push({productDescription, quantity})
  },
  removeFromCart: (state, productDescription) => {
    state.cart = state.cart.filter(item => {
      return item.productDescription._links.self.href.split('/')[4] !== productDescription._links.self.href.split('/')[4]
    })
  },
  incrementQuantity: (state, {productDescription, quantity}) => {
    let productInCart = state.cart.find(item => {
      return item.productDescription._links.self.href.split('/')[4] === productDescription._links.self.href.split('/')[4]
    })
    if (productInCart) {
      productInCart.quantity += 1
    }
  },
  decrementQuantity: (state, {productDescription, quantity}) => {
    let productInCart = state.cart.find(item => {
      return item.productDescription._links.self.href.split('/')[4] === productDescription._links.self.href.split('/')[4]
    })
    if (productInCart) {
      productInCart.quantity -= 1
    }
  },
  setCartItems: (state, cart) => (state.cart = cart)
}

export default {
  state,
  getters,
  actions,
  mutations
}
