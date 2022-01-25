import axios from 'axios'

const state = {
  users: []
}
const getters = {
  allUsers: state => state.users
}
const actions = {
  async getUsers ({commit}, users) {
    const response = await axios.post('http://localhost:8081/user/authenticate', users)
    commit('newUser', response.data)
  }
}
const mutations = {
  setUsers: (state, users) => (state.users = users),
  newUser: (state, users) => (state.users.unshift(users))
}

export default {
  state,
  getters,
  actions,
  mutations
}
