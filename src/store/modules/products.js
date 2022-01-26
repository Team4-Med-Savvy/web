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
<<<<<<< HEAD
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos/')
=======
    const response = await axios.get('https://mocki.io/v1/afba2deb-e78d-452a-8edd-ccc06fd2e1b0')
>>>>>>> b3e64ed67dabf559f417d33bf6b95d43e70be925
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
