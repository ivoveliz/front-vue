import axios from '@axios'
let Idreceibe
let id2 
let responsesaved
export default {
  namespaced: true,
  state: {},
  getters: {},
  mutations: {},
  actions: {

    fetchOrganization(ctx, queryParams) {
      console.log(queryParams)
      return new Promise((resolve, reject) => {
        axios
        .get('http://localhost:3000/api/organization/MainPage', { params: queryParams })
          //.get('/apps/user/users', { params: queryParams })
          //.then(response => console.log(response))
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },
    fetchUsers(ctx, queryParams) {
      console.log(queryParams)

      return new Promise((resolve, reject) => {
        axios
        .get('http://localhost:1880/entidades', { params: queryParams })
          //.get('/apps/user/users', { params: queryParams })
          //.then(response => console.log(response))
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },
    fetchUser(ctx, { id }) {
      return new Promise((resolve, reject) => {
        axios
          .get(`/apps/user/users/${id}`)
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },
    fetchDetail(ctx, { id }) {
      console.log(id)
       id2=id
      Idreceibe={
        id:id

      }
      const body={
        id:id
      }
      return new Promise((resolve, reject) => {
        axios
          //.get(`/apps/user/users/${id}`)
          .get('http://localhost:3000/api/organization/MainPageDetails', { params: body})
           //.then(response => console.log(response))
           .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },
    fetchdevice(ctx, queryParams) {
      let query=queryParams
      query.id=id2
      console.log(query)
      return new Promise((resolve, reject) => {
        axios
        .get('http://localhost:3000/api/organization/MainPageValues', { params: query})
          //.get('/apps/user/users', { params: queryParams })
          //.then(response => console.log(response))
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },
    addUser(ctx, userData) {
      console.log(userData)
      return new Promise((resolve, reject) => {
        axios
          .post('/apps/user/users', { user: userData })
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },
  },
}
