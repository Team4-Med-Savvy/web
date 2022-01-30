import axios from 'axios'

const state = {
  cart: []
}

const getters = {
  cart: state => state.cart,
  cartTotalPrice: state => {
    let sum = 0
    state.cart.productList.forEach(item => {
      sum += item.price * item.quantity
    })
    return sum
  }
}

const actions = {
  async addToCart ({commit}, {productDescription, quantity, email, currentUrl}) {
    axios.post('http://localhost:8186/cart/' + email + '/inc', {
      productId: currentUrl,
      merchantId: productDescription.merchant[0],
      price: productDescription.price
    }).then((res) => console.log('sent'))
  },
  async removeProduct ({commit}, productDescription) {
    commit('removeFromCart', productDescription)
  },
  async increment ({commit}, {merchantId, quantity, productId, email, id, price}) {
    commit('incrementQuantity', {id, quantity, price})
    axios.post('http://localhost:8186/cart/' + email + '/inc', {
      productId: productId,
      merchantId: merchantId,
      price: price
    }).then((res) => console.log('increment done'))
  },
  async decrement ({commit}, {merchantId, quantity, productId, email, id, price}) {
    commit('decrementQuantity', {id, quantity})
    axios.post('http://localhost:8186/cart/' + email + '/' + productId + '/dec').then((res) => console.log('increment done'))
  },
  async getCartItems ({commit}, cartEmail) {
    console.log(cartEmail, 'action start')
    const response = await axios.get(`http://localhost:8186/cart/email/${cartEmail}`)
    commit('setCartItems', response.data)
    console.log('Action end', response.data)
  },
  async checkout ({commit}, {userId, date, totalPrice, p}) {
    console.log(userId, date, totalPrice, p)
    console.log('price', totalPrice)
    console.log('date', date)
    axios.post('http://localhost:8187/order', {
      userId: userId,
      timeStamp: date,
      total: totalPrice,
      products: p
    }).then((res) => console.log('checkout done'))
  }

}
const mutations = {
  removeFromCart: (state, productDescription) => {
    state.cart = state.cart.filter(item => {
      return item.productDescription._links.self.href.split('/')[4] !== productDescription._links.self.href.split('/')[4]
    })
  },
  incrementQuantity: (state, {id, quantity}) => {
    let productInCart = state.cart.productList.find(item => {
      return item.id === id
    })
    if (productInCart) {
      productInCart.quantity += 1
      // productInCart.price += productInCart.price
    }
  },
  decrementQuantity: (state, {id, quantity}) => {
    let productInCart = state.cart.productList.find(item => {
      return item.id === id
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
