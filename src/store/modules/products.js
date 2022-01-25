import axios from 'axios'

const state = {
  products: []
}
const getters = {
  allProducts: state => state.products
}
const actions = {
  async getProducts ({commit}) {
    const response = await axios.get('https://mocki.io/v1/ee1dc741-2903-4caa-87eb-cd07f1e6680d')
    commit('setProducts', response.data)
  }
}
const mutations = {
  setProducts: (state, products) => (state.products = products)
}

export default {
  state,
  getters,
  actions,
  mutations
}
