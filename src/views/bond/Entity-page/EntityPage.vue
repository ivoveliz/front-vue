<template>
     
  <section class="app-ecommerce-details"   >

    <b-row class="breadcrumbs-top">
   
   <b-col
   class="content-header-right text-md-right d-md-block d-none mb-1"
      md="12"
      cols="20"
     >
     <b-button
      
      variant="outline-primary"
      @click="$router.push({ name: 'bond-Entity-Add', params: { MainGroupOrigin: MainGroupOrigin,IdGroupOrigin:IdGroupOrigin} })"
    >
      <feather-icon
        icon="PlusIcon"
        class="mr-50"
       
      />
      <span class="align-middle">Agregar Entidad</span>
    </b-button>
      
 
   </b-col>

 </b-row>
 <b-row class="grid-view wishlist-items">
    <b-card
      v-for="product in products"
      :key="product.id"
      class="ecommerce-card"
      no-body
    >
    <b-card-header>
      <h6 class="item-name">
      <b-link
          class="mb-25"
          :to="{ name: 'bond-Entity-page', params: { slug: product.SecondaryGroups,MainGroupOrigin:product.NamePrimaryGroup,IdGroupOrigin:product.IdGroup } }"
          >
            {{ product.NamePrimaryGroup }}
          </b-link>
         
        </h6>
      <feather-icon
      :id="`EyeIcon1`"
        icon="EyeIcon"
        size="20"
        class="cursor-pointer"
        @click="$router.push({ name: 'bond-Entity-details-page',params: { slug: product} })"
      />
      <b-tooltip
            title="Ver"
            class="cursor-pointer"
            :target="`EyeIcon1`"
          />
      <feather-icon
      :id="`EditIcon1`"
        icon="EditIcon"
        size="20"
        class="cursor-pointer"
        @click="$router.push({ name: 'bond-Entity-Edit', params: { slug: product,IdGroupOrigin:IdGroupOrigin,MainGroupOrigin:MainGroupOrigin} })"
     
      />
      <b-tooltip
            title="Editar"
            class="cursor-pointer"
            :target="`EditIcon1`"
          />
      <feather-icon
      :id="`TrashIcon1`"
        icon="TrashIcon"
        size="20"
        class="cursor-pointer"
        @click="confirmText(product.IdEntity)"
        
      />
      <b-tooltip
            title="Eliminar"
            class="cursor-pointer"
            :target="`TrashIcon1`"
          />
    </b-card-header>
      <div class="item-img text-center">
        <b-link :to="{ name: 'bond-Entity-details-page', params: { slug: product} }">
          <b-img
            :alt="`${product.EntityName}-${product.IdEntity}`"
            fluid
            class="card-img-top"
            :src="product.avatarEntity"
            
          />
        </b-link>
      </div>

      <!-- Product Details -->
      <b-card-body>
        <div class="item-wrapper">
          <div class="item-rating">
            <ul class="unstyled-list list-inline">
              <li
                v-for="star in 5"
                :key="star"
                class="ratings-list-item"
                :class="{'ml-25': star-1}"
              >
                <!-- <feather-icon
                  icon="StarIcon"
                  size="16"
                  :class="[{'fill-current': star <= product.rating}, star <= product.rating ? 'text-warning' : 'text-muted']"
                /> -->
              </li>
            </ul>
          </div>
          <div>
            <!-- <h6 class="item-price">
              ${{ product.price }}
            </h6> -->
          </div>
        </div>
        <h6 class="item-name">
         Origen Entidad:  {{ product.OriginEntity}}
          <!-- <b-link
            class="text-body"
            :to="{ name: 'bond-Secondary-page', params: { slug: product.id } }"
          >
            {{ product.EntityName}}
         
          </b-link> -->
          <!-- <b-card-text class="item-company">
            Temperature<b-link class="ml-25">
              {{ product.temperature }}
            </b-link>
          </b-card-text> -->
        </h6>
        <h6 class="item-name">
         Destino Entidad:  {{ product.DestinyEntity}}
        </h6>
        <hr class="invoice-spacing"> 
         <b-card-text class="item-description">
          <!-- Ultimo Caudal m3/h: {{ product.last}} -->
          Ultimo Caudal m³/h: 125
        </b-card-text>
        <b-card-text class="item-description">
          <!-- Ultimo Valor Totalizador m3/h: {{ product.last}} -->
          Ultimo Valor Totalizador m³/h: 550
        </b-card-text>
        <b-card-text class="item-description">
          Fecha Ultimo dato : {{ "20/11/2022-13:37:46" }}
        </b-card-text>
        

            <ecommerce-profit-chart :data="data.statisticsProfit" />
        
      
      </b-card-body>

      <!-- Action Buttons -->
      <!-- <div class="item-options text-center">
        <b-button
          variant="light"
          class="btn-wishlist remove-wishlist"
          @click="removeProductFromWishlistClick(product)"
        >
          <feather-icon icon="XIcon" />
          <span>Remove</span>
        </b-button>
        <b-button
          variant="primary"
          class="btn-cart move-cart"
          @click="handleWishlistCartActionClick(product, removeProductFromWishlistClick)"
        >
          <feather-icon
            icon="ShoppingCartIcon"
            class="mr-50"
          />
          <span>{{ product.isInCart ? 'View In Cart' : 'Move to Cart' }}</span>
        </b-button>
      </div> -->
    </b-card>
  </b-row>
  </section>
</template>

<script>
import { useRouter } from '@core/utils/utils'
import {
  BCard, BCardBody, BImg, BCardText, BLink, BButton,BRow, BCol,
   BCardHeader,BTooltip,
} from 'bootstrap-vue'
import store from '@/store'
import { ref } from '@vue/composition-api'
import { useEcommerce, useEcommerceUi } from '../usebondModule'
import EcommerceProfitChart from './EcommerceProfitChart.vue'
import { getUserData } from '@/auth/utils'
const isLoading = ref([])
export default {
  components: {
    BCard, BCardBody, BImg, BCardText, BLink,
     BButton,EcommerceProfitChart,BRow,BCol,
      BCardHeader,BTooltip,

  },
  data() {
    return {
      data: {},
      isLoading,
    }
  },
  created() {
 
    // data
    this.$http.get('/ecommerce/data')
      .then(response => {
        this.data = response.data
        //console.log(response.data.statisticsProfit)
        // ? Your API will return name of logged in user or you might just directly get name of logged in user
        // ? This is just for demo purpose
        const userData = getUserData()
        this.data.congratulations.name = userData.fullName.split(' ')[0] || userData.username
      })
  },
    methods: {
    // confirm texrt
    confirmText(IdEntity) {
      console.log(IdEntity)
      this.$swal({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        customClass: {
          confirmButton: 'btn btn-primary',
          cancelButton: 'btn btn-outline-danger ml-1',
        },
        buttonsStyling: false,
      }).then(result => {
        if (result.value) {
          let EntityDelete={
            IdEntity:IdEntity,
            MainGroupOrigin:this.MainGroupOrigin,
             IdGroupOrigin:this.IdGroupOrigin,
            confirmation:true
          }
          const fetchDeleteEntity = () => {
      
      store.dispatch('app-bond/fetchDeleteEntity' , { EntityDelete})
       .then(response => {
       
        console.log(response.data.StateGroup )
        if(response.data.StateGroup=="removed"){

          this.$swal({
            icon: 'success',
            title: 'Deleted!',
            text: 'Your file has been deleted.',
            showConfirmButton: false,
            // customClass: {
            //   confirmButton: 'btn btn-success',
            // },
          })
          this.$router.push({ name: 'bond-Main-page'})
        }
       })
      }
      fetchDeleteEntity()
      
        }
       // 
      })
    },
  },
  setup() {
   
    const products = ref([])
    const MainGroupOrigin = ref([])
    const IdGroupOrigin = ref([]) 
    let LocalStorageEntity
//     const productsID =  [
//     {
//         "OriginEntity": "L-500",
//         "DestinyEntity": "POR ANDINO",
//         "IdEntity": "L-500-POR-ANDINO",
//         "Function": "CONSUMO",
//         "Ubication": "POR Andino",
//         "NSerie": "860256565",
//         "TAG": "",
//         "Observation": "Alimentacion OR campamento Andino",
//         "SubArea": "Recursos Salar",
//         "Area": "CIRS",
//         "Devices": [
//             {
//                 "NameDevice": "endev-01",
//                 "IdDevice": "EN-1",
//                 "State": "activate"
//             },
//             {
//                 "NameDevice": "endev-02",
//                 "IdDevice": "EN-2",
//                 "State": "desactivate"
//             }
//         ],
//         "last": 1
//     },
//     {
//         "OriginEntity": "TK-1000",
//         "DestinyEntity": "RETRO LAVADO FILTRO MULTIMEDIA",
//         "IdEntity": "TK-1000-RETRO-LAVADO-FILTRO-MULTIMEDIA",
//         "Function": "CONSUMO",
//         "Ubication": "PTAS Andino",
//         "NSerie": "D105AD16000",
//         "TAG": "",
//         "Observation": "",
//         "SubArea": "Recursos Salar",
//         "Area": "CIRS",
//         "Devices": [
//             {
//                 "NameDevice": "endev-02",
//                 "IdDevice": "EN-2",
//                 "State": "activate"
//             }
//         ],
//         "last": 2
//     },
//     {
//         "OriginEntity": "TK RETORNO PTAS ANDINO",
//         "DestinyEntity": "TK-1000",
//         "IdEntity": "TK-1000-TK-RETORNO-PTAS-ANDINO",
//         "Function": "Aporte",
//         "Ubication": "PTAS Andino",
//         "NSerie": "172825",
//         "TAG": "",
//         "Observation": "",
//         "SubArea": "Recursos Salar",
//         "Area": "CIRS",
//         "Devices": [
//             {
//                 "NameDevice": "endev-03",
//                 "IdDevice": "EN-3",
//                 "State": "activate"
//             }
//         ],
//         "last": 3
//     }
// ]
const { route } = useRouter()
     console.log( route.value)
     
      let productId = route.value.params.slug
     console.log(productId)
      if(productId){
        MainGroupOrigin.value=route.value.params.MainGroupOrigin
        IdGroupOrigin.value=route.value.params.IdGroupOrigin
        products.value = productId 
        localStorage.setItem('EntityGroup', JSON.stringify(productId))


      }else{
        LocalStorageEntity=localStorage.getItem('EntityGroup')
            LocalStorageEntity=JSON.parse(LocalStorageEntity)
          console.log( LocalStorageEntity)

        products.value= LocalStorageEntity
        //products=JSON.parse(products)
      }
// const fetchWishlistProducts = () => {
//       store.dispatch('app-bond/fetchEntityGroup')
//         .then(response => {
//           console.log(response )
//           products.value = response
//         })

           
//     }

//     fetchWishlistProducts()
    // const { removeProductFromWishlist } = useEcommerce()
    // const removeProductFromWishlistClick = product => {
    //   removeProductFromWishlist(product.id)
    //     .then(() => {
    //       const productIndex = products.value.findIndex(p => p.id === product.id)
    //       products.value.splice(productIndex, 1)
    //     })
    // }
    // const { route } = useRouter()
    //   //const productSlug = route.value.params.slug
    //   let productId = route.value.params.slug
    //   //productId[0].last=10
      
      

    //   const fetchWishlistProducts = () => {
    //  if(productId){

    //   store.dispatch('app-bond/fetchEntityValues', { productId})
    //     .then(response => {
          
    //       productId=response 
    //       console.log(productId )
    //     })
    //   isLoading.value=false
    //   products.value = productId 
    //   isLoading.value=true
    //   store.dispatch('app-bond/fetchEntityGroup', { productId})
    //     .then(response => {
    //    // console.log(response)
    //     })
    //  }else{
    //   // store.dispatch('app-bond/fetchEntityValues', { productId})
    //   //   .then(response => {
    //   //     productId[0].last=response 
    //   //   })
    //   store.dispatch('app-bond/fetchEntitySaved', { productId})
    //     .then(response => {
    //       products.value = response
    //     })
    //  }
    //  //console.log(products.value) 
    // }

    // fetchWishlistProducts()

    return {
      products,
      MainGroupOrigin,
      IdGroupOrigin
      // UI
      // handleWishlistCartActionClick,
      // removeProductFromWishlistClick,
    }
  },
}
</script>

<style lang="scss">
//@import "~@core/scss/base/pages/app-ecommerce.scss";
@import '@core/scss/vue/pages/dashboard-ecommerce.scss';
@import '@core/scss/vue/libs/chart-apex.scss';
@import "~@core/scss/base/pages/app-ecommerce.scss";
</style>
