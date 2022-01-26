import axios from 'axios'

const state = {
  products: [],
  productDescription: []
}

const getters = {
  allProducts: state => state.products,
  productDescription: state => state.productDescription
}

const actions = {
  async getProducts ({commit}) {
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos/')
    commit('setProducts', response.data)
  },
  async getProductDescription ({commit}, id) {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`)
    commit('setProductDescription', response.data)
  }

}
const mutations = {
  setProducts: (state, products) => (state.products = products),
  setProductDescription: (state, productDescription) => (state.productDescription = productDescription)
}

export default {
  state,
  getters,
  actions,
  mutations
}
