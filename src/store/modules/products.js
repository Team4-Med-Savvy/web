import axios from 'axios'

const state = {
  products: []
}
const getters = {
  allProducts: state => state.products
}
const actions = {
  async getProducts ({commit}) {
    const response = await axios.get('https://mocki.io/v1/afba2deb-e78d-452a-8edd-ccc06fd2e1b0')
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
