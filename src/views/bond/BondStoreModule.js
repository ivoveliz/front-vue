import axios from '@axios'
let secondaryGroup
let EntityGroup
export default {
  namespaced: true,
  state: {
    cartItemsCount: (() => {
      const userData = JSON.parse(localStorage.getItem('userData'))
      return userData && userData.extras ? userData.extras.eCommerceCartItemsCount : 0
    })(),
  },
  getters: {},
  mutations: {
    UPDATE_CART_ITEMS_COUNT(state, count) {
      state.cartItemsCount = count
    },
  },
  actions: {
    fetchProducts(ctx, payload) {
      return new Promise((resolve, reject) => {
        axios
          .get('/apps/ecommerce/products', { params: payload })
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },
    fetchProduct(ctx, { productId }) {
      console.log(productId)
      return new Promise((resolve, reject) => {
        axios
          .get(`/apps/ecommerce/products/${productId}`)
          .then(response => resolve(response))
         //.then(response => console.log(response))
          .catch(error => reject(error))
      })
    },
    fetchWishlistProducts() {
    //console.log("hola111111111")
      return new Promise((resolve, reject) => {
        axios
          .get('http://localhost:3000/api/organization/MainPage')
          .then(response => resolve(response))
          //.then(response => console.log(response))
          .catch(error => reject(error))
      })
    },
    fetchCartProducts() {
      return new Promise((resolve, reject) => {
        axios
          .get('/apps/ecommerce/cart')
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },

    // ------------------------------------------------
    // Bond Actions
    // ------------------------------------------------
    fetchOrganization() {
    console.log("hola111111111")
      return new Promise((resolve, reject) => {
        axios
          .get('http://localhost:3000/api/organization/MainPage')
          .then(response => resolve(response))
          //.then(response => console.log(response))
          .catch(error => reject(error))
      })
    },
    fetchSecondaryGroup(ctx, { productId }) {
      secondaryGroup=productId
        return new Promise((resolve, reject) => {
         
          resolve(secondaryGroup)
          //console.log(secondaryGroup)
        })
      },
      fetchSecondarySaved() {
     
          return new Promise((resolve, reject) => {
           
            resolve(secondaryGroup)
           
          })
        },
        fetchEntityGroup(ctx, { productId }) {
          EntityGroup=productId
            return new Promise((resolve, reject) => {
             
              resolve(secondaryGroup)
              
            })
          },
          fetchEntitySaved() {
 
              return new Promise((resolve, reject) => {
               
                resolve(EntityGroup)
              
              })
            },


    // ------------------------------------------------
    // Product Actions
    // ------------------------------------------------
    addProductInWishlist(ctx, { productId }) {
      return new Promise((resolve, reject) => {
        axios
          .post('/apps/ecommerce/wishlist', { productId })
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },
    removeProductFromWishlist(ctx, { productId }) {
      return new Promise((resolve, reject) => {
        axios
          .delete(`/apps/ecommerce/wishlist/${productId}`)
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },

    addProductInCart(ctx, { productId }) {
      return new Promise((resolve, reject) => {
        axios
          .post('/apps/ecommerce/cart', { productId })
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },
    removeProductFromCart(ctx, { productId }) {
      return new Promise((resolve, reject) => {
        axios
          .delete(`/apps/ecommerce/cart/${productId}`)
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },
  },
}
