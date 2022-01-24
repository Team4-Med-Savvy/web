import axios from 'axios'

const state = {
  products: []
}
const getters = {
  allProducts: state => state.products
}
const actions = {
  async getProducts ({commit}) {
    const response = await axios.get('https://mocki.io/v1/d60902f4-662f-460e-b1c7-c33b5a7a46e6')
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
