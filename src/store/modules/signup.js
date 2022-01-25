import axios from 'axios'

const state = {
  users: []
}

const actions = {
  async addUser ({ commit }, user) {
    const response = await axios.post('http://localhost:8080/#/signup', user)
    commit('newUser', response.data)
  }
}
const mutations = {
  setUser: (state, usersß) => (state.users = users),
  newUser: (state, user) => (state.users.unshift(user))
}

export default {
  state,
  actions,
  mutations
}
