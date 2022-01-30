// import axios from 'axios'

// const state = {
//   users: []
// }
// const getters = {
//   allUsers: state => state.users
// }
// const actions = {
//   async getUsers ({commit}, users) {
//     const response = await axios.post('http://10.177.1.70:8081/user/authenticate', users)
//     commit('newUser', response.data)
//   }
// }
// const mutations = {
//   setUsers: (state, users) => (state.users = users),
//   newUser: (state, users) => (state.users.unshift(users))
// }

// export default {
//   state,
//   getters,
//   actions,
//   mutations
// }
// import axios from 'axios'
// import Vue from 'vue'
// import { set } from 'vue/types/umd'
// import Vuex from 'vuex'
// Vue.use(Vuex, axios)
// const state = {
//   user: {
//   }
// }
// const getters = {
// }
// const actions = {
//   getUser ({commit}) {
//     axios.get('apilogin')
//       .then(response => {
//         commit('setUser', response.data)
//       })
//   },
//   // eslint-disable-next-line no-empty-pattern
//   loginUser ({}, myprofile) {
//     axios
//       .post('', {
//         email: user.email,
//         password: user.password
//       })
//       .then(response => {
//         if (response.data.token) {
//           localStorage.setItem(
//             'blog-token',
//             response.data.access_token
//           )
//           window.location.replace('/')
//         }
//       })
//   }
// }
// const mutations = {
//   setUser (state, data) {
//     set.user = data
//   }
// },
// created () {
//   this.$store.dispatch('user/getUser')
// },
// currentUser: {
//   return this.$store.state.currentUser.user;
// }
// export default {
//   state,
//   getters,
//   actions,
//   mutations
// }
