import axios from '@axios'

export default {
  namespaced: true,
  state: {},
  getters: {},
  mutations: {},
  actions: {
    fetchUsers(ctx, queryParams) {
      //console.log(queryParams)
      return new Promise((resolve, reject) => {
        axios
        .get('http://localhost:1880/usuarios', { params: queryParams })
          //.get('/apps/user/users', { params: queryParams })
          //.then(response => console.log(response))
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },
    fetchUser(ctx, { id }) {
      console.log(id)
      const body={
        id:id
      }
      return new Promise((resolve, reject) => {
        axios
          //.get(`/apps/user/users/${id}`)
          .get('http://localhost:1880/usuario', { params: body})
           //.then(response => console.log(response))
           .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },
    addUser(ctx, userData) {
      //console.log(userData)
      return new Promise((resolve, reject) => {
        axios
          .post('/apps/user/users', { user: userData })
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },
  },
}
