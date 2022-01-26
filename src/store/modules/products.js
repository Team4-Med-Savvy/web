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
    const response = await axios.get('https://mocki.io/v1/aff8e9b8-5c70-41df-90bb-19b7a31b3ae9')
    commit('setProducts', response.data)
  },
  async getProductDescription ({commit}, id) {
    const response = await axios.get(`http://localhost:8081/products/${id}`)
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
