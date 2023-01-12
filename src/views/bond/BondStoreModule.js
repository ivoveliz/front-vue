import axios from '@axios'
let secondaryGroup
let EntityGroup
let EntityDetailsGroup
let DeviceDetailsGroup
let LocalStorageEntity
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
    // Bond Users 
    // ------------------------------------------------

    fetchUser(ctx, { Credentials }) {
    
      return new Promise((resolve, reject) => {
        axios
          .get('http://localhost:3000/api/users/login', { params: Credentials})
          .then(response => resolve(response))
          //.then(response => console.log(response))
          .catch(error => reject(error))
      })
      },

    // ------------------------------------------------
    // Bond primary group
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
    
    // ------------------------------------------------
    // Bond secondary group
    // ------------------------------------------------
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

        
    // ------------------------------------------------
    // Bond entity
    // ------------------------------------------------
        fetchEntityGroup(ctx, { productId }) {
          EntityGroup=productId
          localStorage.setItem('EntityGroup', JSON.stringify(productId))
 
            return new Promise((resolve, reject) => {
             
              resolve(secondaryGroup)
              
            })
          },
          fetchEntitySaved() {
            LocalStorageEntity=localStorage.getItem('EntityGroup')
            LocalStorageEntity=JSON.parse(LocalStorageEntity)
              return new Promise((resolve, reject) => {
               
                resolve(LocalStorageEntity)
              
              })
            },
            fetchEntityValues(ctx, { productId }) {

              return new Promise((resolve, reject) => {
                let count=0
                productId.forEach((rateName) => { 
                  count++
                  console.log(count-1)
                  productId[count-1].last=count

                }); 
                resolve(productId)
              
              })
            },
          
  

    // ------------------------------------------------
    // Bond entitydetails
    // ------------------------------------------------
            fetchEntityDetailsGroup(ctx, { productId }) {
              EntityDetailsGroup=productId
                return new Promise((resolve, reject) => {
                 
                  resolve(EntityDetailsGroup)
                  
                })
              },
              fetchEntityDetailsSaved() {
     
                  return new Promise((resolve, reject) => {
                   
                    resolve(EntityDetailsGroup)
                  
                  })
                },
                fetchEntityDetailsValues(ctx, { productId }) {
    
                  return new Promise((resolve, reject) => {
                    let count=0
                    productId.forEach((rateName) => { 
                      count++
                      console.log(count-1)
                      productId[count-1].last=count
    
                    }); 
                    resolve(productId)
                  
                  })
                },


 // ------------------------------------------------
    // Bond entitydetails values
    // ------------------------------------------------
    fetchEntityDetailsValuesDaily(ctx, { entityId }) {
      const Entity={
        Entity:entityId
      }
      return new Promise((resolve, reject) => {
        axios
          .get('http://localhost:3000/api/uplinks/DailyValues', { params: Entity})
          .then(response => resolve(response))
          //.then(response => console.log(response))
          .catch(error => reject(error))
      })
      },
      fetchEntityDetailsValuesExport(ctx, { entityId }) {
       
      
        // const Entity={
        //   Entity:entityId
        // }
        return new Promise((resolve, reject) => {
          axios
            .get('http://localhost:3000/api/uplinks/exportValues', { params: entityId})
            .then(response => resolve(response))
            //.then(response => console.log(response))
            .catch(error => reject(error))
        })
        },
      
 
 
      


// ------------------------------------------------
// Bond Device details
// ------------------------------------------------
        fetchDeviceDetailsGroup(ctx, { productId }) {
          DeviceDetailsGroup=productId
            return new Promise((resolve, reject) => {
             
              resolve(DeviceDetailsGroup)
              
            })
          },
          fetchDeviceDetailsSaved() {
 
              return new Promise((resolve, reject) => {
               
                resolve(DeviceDetailsGroup)
              
              })
            },
          


// ------------------------------------------------
// Bond Device details values
// ------------------------------------------------
fetchDeviceDetailsValuesDaily(ctx, { deviceId }) {
  const Device={
    Device:deviceId
  }
  return new Promise((resolve, reject) => {
    axios
      .get('http://localhost:3000/api/uplinks/DailyDeviceValues', { params: Device})
      .then(response => resolve(response))
      //.then(response => console.log(response))
      .catch(error => reject(error))
  })
  },
  fetchDeviceDetailsValuesExport(ctx, { deviceId }) {
   
  
    return new Promise((resolve, reject) => {
      axios
        .post('http://localhost:3000/api/uplinks/exportDeviceValues', { params: deviceId})
        .then(response => resolve(response))
        //.then(response => console.log(response))
        .catch(error => reject(error))
    })
    },
    fetchDeviceDownlink(ctx, { deviceId }) {
   console.log(deviceId)
  
      // const Entity={
      //   Entity:entityId
      // }
      return new Promise((resolve, reject) => {
        axios
          .post('http://localhost:3000/api/downlinks/SendDownlink', { params: deviceId})
          .then(response => resolve(response))
          //.then(response => console.log(response))
          .catch(error => reject(error))
      })
      },
// ------------------------------------------------
// Product Actions
// ------------------------------------------------




  
  },
}
