import axios from '@axios'
let secondaryGroup
let EntityGroup
let EntityDetailsGroup
let DeviceDetailsGroup
let LocalStorageEntity
let UrlApi="https://apirest-sqm-gyarados.azurewebsites.net"
//let UrlApi="http://localhost:3000"
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
      //console.log(productId)
      return new Promise((resolve, reject) => {
        axios
          .get(`/apps/ecommerce/products/${productId}`)
          .then(response => resolve(response))
         //.then(response => console.log(response))
          .catch(error => reject(error))
      })
    },
    fetchWishlistProducts() {
    console.log("hola111111111")
      return new Promise((resolve, reject) => {
        axios
          .get(UrlApi+'/api/organization/MainPage')
          //.get('http://localhost:3000/api/organization/MainPage')
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

    fetchUser(ctx, {Credentials}) {
      return new Promise((resolve, reject) => {
        axios
       .get(UrlApi+'/api/users/login', { params: Credentials})
         //.get('http://localhost:3000/api/users/login', { params: Credentials})
        .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },

    // ------------------------------------------------
    // Bond primary group
    // ------------------------------------------------
    fetchOrganization() {
    // console.log("hola111111111")
    console.log("hola222222222222")
      return new Promise((resolve, reject) => {
        axios
         .get(UrlApi+'/api/organization/MainPage')
           //.get('http://localhost:3000/api/organization/MainPage')
          .then(response => resolve(response))
          //.then(response => console.log(response))
          .catch(error => reject(error))
      })
    },
    fetchAddOrganization(ctx, {MainGroupAdded }) {
       
        return new Promise((resolve, reject) => {
          axios
          // .post('http://localhost:3000/api/organization/addMainGroup', { MainGroupAdded })
         .post(UrlApi+'/api/organization/addMainGroup', { MainGroupAdded })
            .then(response => resolve(response))
            //.then(response => console.log(response))
            .catch(error => reject(error))
        })
      },
      fetchUpdateOrganization(ctx, {MainGroupUpdate }) {
       
        return new Promise((resolve, reject) => {
          axios
          // .post('http://localhost:3000/api/organization/updateMainGroup', { MainGroupUpdate })
         .post(UrlApi+'/api/organization/updateMainGroup', { MainGroupUpdate })
            .then(response => resolve(response))
            //.then(response => console.log(response))
            .catch(error => reject(error))
        })
      },
      fetchDeleteOrganization(ctx, { MainGroupDelete }) {
       
        return new Promise((resolve, reject) => {
          axios
           // .delete('http://localhost:3000/api/organization/deleteMainGroup', { params: MainGroupDelete})
            .delete(UrlApi+'/api/organization/deleteMainGroup', { params: MainGroupDelete})
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
                  //console.log(count-1)
                  productId[count-1].last=count

                }); 
                resolve(productId)
              
              })
            },
            fetchAddEntity(ctx, {AddEntity }) {
       
              return new Promise((resolve, reject) => {
                axios
                 //.post('http://localhost:3000/api/organization/addEntity', { AddEntity }) 
               .post(UrlApi+'/api/organization/addEntity', { AddEntity })
                  .then(response => resolve(response))
                  //.then(response => console.log(response))
                  .catch(error => reject(error))
              })
            },
      fetchDeleteEntity(ctx, { EntityDelete }) {
       
        return new Promise((resolve, reject) => {
          axios
           // .delete('http://localhost:3000/api/organization/DeleteEntity', { params: EntityDelete})
            .delete(UrlApi+'/api/organization/DeleteEntity', { params: EntityDelete})
            .then(response => resolve(response))
            //.then(response => console.log(response))
            .catch(error => reject(error))
        })
        },
        fetchEditEntity(ctx, {EntityEdit }) {
       
          return new Promise((resolve, reject) => {
            axios
              //.post('http://localhost:3000/api/organization/updateEntity', { EntityEdit })
              .post(UrlApi+'/api/organization/updateEntity', { EntityEdit })
              .then(response => resolve(response))
              //.then(response => console.log(response))
              .catch(error => reject(error))
          })
        },

        EntityPageValues(ctx, { MainGroupID }) {
         
          return new Promise((resolve, reject) => {
            axios
              //.post('http://localhost:3000/api/uplinks/EntityPageValues', { MainGroupID })
              .post(UrlApi+'/api/uplinks/EntityPageValues', { MainGroupID })
              .then(response => resolve(response))
              //.then(response => console.log(response))
              .catch(error => reject(error))
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
                      //console.log(count-1)
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
          //.get('http://localhost:3000/api/uplinks/DailyValues', { params: Entity})
          .get(UrlApi+'/api/uplinks/DailyValues', { params: Entity})
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
            // .get('http://localhost:3000/api/uplinks/exportValues', { params: entityId})
           .get(UrlApi+'/api/uplinks/exportValues', { params: entityId})
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
      //.get('http://localhost:3000/api/uplinks/DailyDeviceValues', { params: Device})
      .get(UrlApi+'/api/uplinks/DailyDeviceValues', { params: Device})
      .then(response => resolve(response))
      //.then(response => console.log(response))
      .catch(error => reject(error))
  })
  },
  fetchDeviceDetailsValuesExport(ctx, { deviceId }) {
   
  
    return new Promise((resolve, reject) => {
      axios
        //.post('http://localhost:3000/api/uplinks/exportDeviceValues', { params: deviceId})
        .post(UrlApi+'/api/uplinks/exportDeviceValues', { params: deviceId})
        .then(response => resolve(response))
        //.then(response => console.log(response))
        .catch(error => reject(error))
    })
    },
    fetchDeviceDownlink(ctx, { deviceId }) {
   //console.log(deviceId)
  
      // const Entity={
      //   Entity:entityId
      // }
      return new Promise((resolve, reject) => {
        axios
          //.post('http://localhost:3000/api/downlinks/SendDownlink', { params: deviceId})
          .post(UrlApi+'/api/downlinks/SendDownlink', { params: deviceId})
          .then(response => resolve(response))
          //.then(response => console.log(response))
          .catch(error => reject(error))
      })
      },
      fetchAddDevice(ctx, {AddDevice }) {
       
        return new Promise((resolve, reject) => {
          axios
            // .post('http://localhost:3000/api/organization/addDevice', { AddDevice })
           .post(UrlApi+'/api/organization/addDevice', { AddDevice })
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