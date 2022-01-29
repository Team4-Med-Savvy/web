import axios from 'axios'

const state = {
  products: [],
  productDescription: [],
  categories: [],
  recommendations: [],
  orders: [],
  productHistory: []
}

const getters = {
  allProducts: state => state.products,
  productDescription: state => state.productDescription,
  allCategories: state => state.categories,
  recommendations: state => state.recommendations,
  allOrders: state => state.orders,
  productHistory: state => state.productHistory
}

const actions = {
  async getProducts ({commit}, category) {
    const response = await axios.get(`http://localhost:8184/product/findlist/${category}`)
    commit('setProducts', response.data)
  },
  async getProductDescription ({commit}, id) {
    const response = await axios.get(`http://localhost:8184/products/${id}`)
    commit('setProductDescription', response.data)
  },
  async getRecommendations ({commit}) {
    const response = await axios.get('http://localhost:8184/product/recommend')
    commit('setRecommendations', response.data)
  },
  async getOrderHistory ({commit}, userId) {
    console.log('userid action', userId)
    const response = await axios.get(`http://localhost:8187/order/user/${userId}`)
    commit('setOrderHistory', response.data)
  },
  async getProductHistory ({commit}, orderId) {
    console.log('orderid action', orderId)
    const response = await axios.get(`http://localhost:8187/orderedproducts/${orderId}`)
    commit('setProductHistory', response.data)
  }

}
const mutations = {
  setProducts: (state, products) => (state.products = products),
  setProductDescription: (state, productDescription) => (state.productDescription = productDescription),
  setCategories: (state, categories) => (state.categories = categories),
  setRecommendations: (state, recommendations) => (state.recommendations = recommendations),
  setOrderHistory: (state, orders) => (state.orders = orders),
  setProductHistory: (state, productHistory) => (state.productHistory = productHistory)
}

export default {
  state,
  getters,
  actions,
  mutations
}
