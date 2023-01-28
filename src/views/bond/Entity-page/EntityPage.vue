<template>
     
  <section class="app-ecommerce-details"   >

    <b-row class="breadcrumbs-top">
   <b-col
   v-if="StateAccess"
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
 
 
        <div class="col"  v-if="isLoading">
          <h1 class="text-center" >CARGANDO DATOS...</h1>
        </div>
 
 <b-row class="grid-view wishlist-items"
 v-if="!isLoading"
      >
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
        @click="$router.push({ name: 'bond-Entity-details-page',params: { slug: product,MainGroupOrigin:product.NamePrimaryGroup,IdGroupOrigin:product.IdGroup} })"
      />
      <b-tooltip
            title="Ver"
            class="cursor-pointer"
            :target="`EyeIcon1`"
          />
      <feather-icon
      v-if="StateAccess"
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
      v-if="StateAccess"
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
        <b-link :to="{ name: 'bond-Entity-details-page', params: { slug: product,IdGroupOrigin:IdGroupOrigin,MainGroupOrigin:MainGroupOrigin} }">
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
          Ultimo Caudal m³/h: {{ product.ValueDecodeInstant}}
        </b-card-text>
        <b-card-text class="item-description">
          <!-- Ultimo Valor Totalizador m3/h: {{ product.last}} -->
          Ultimo Valor Totalizador m³/h: {{ product.ValueDecodeTote}}
        </b-card-text>
        <b-card-text class="item-description">
          Fecha Ultimo dato : {{ product.created_last}}
        </b-card-text>
        <b-card-body
  
     >

            <ecommerce-profit-chart :data="product.series" />
          </b-card-body>
      
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

export default {
  components: {
    BCard, BCardBody, BImg, BCardText, BLink,
     BButton,EcommerceProfitChart,BRow,BCol,
      BCardHeader,BTooltip,

  },
  data() {
    return {
      data: {},
 
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
      //console.log(IdEntity)
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
       
        //console.log(response.data.StateGroup )
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
    getAPIData () {
      this.isLoading=true
let MainGroupID=this.MainGroupID
      const EntityPageValues = () => {
      store.dispatch('app-bond/EntityPageValues', { MainGroupID})
        .then(response => {
          this.products = response.data
          
          this.isLoading=false 
        localStorage.setItem('EntityGroup', JSON.stringify(response.data))
          
        })
  
    }
    EntityPageValues()
 

// console.log(this.datachart)
//  this.timer = setInterval(() => {
//    this.getAPIData()
//  }, 300000)//600001-min//300000-5 min 
// }).catch(err => {
//   console.log('Error', err)
// })
}
  },
  async created() {


    this.getAPIData()


  },
  setup() {
   
    const products = ref([])
    const MainGroupOrigin = ref([])
    const IdGroupOrigin = ref([]) 
    const LevelAccess = ref([])
    const StateAccess = ref([])
    const isLoading = ref([])
    let LocalStorageEntity

    isLoading.value=true 
const { route } = useRouter()
     //console.log( route.value)
     
      let productId = route.value.params.slug
      
     //console.log(productId)
      if(productId){
        MainGroupOrigin.value=route.value.params.MainGroupOrigin
        IdGroupOrigin.value=route.value.params.IdGroupOrigin
      
        localStorage.setItem('productId', JSON.stringify(productId))

      }else{
        LocalStorageEntity=localStorage.getItem('EntityGroup')
            LocalStorageEntity=JSON.parse(LocalStorageEntity)
         

            productId= LocalStorageEntity
        //products=JSON.parse(products)
      }
      let  MainGroupID=productId

     const EntityPageValues = () => {
      store.dispatch('app-bond/EntityPageValues', { MainGroupID})
        .then(response => {
          products.value = response.data
          //console.log(products.value)
          isLoading.value=false 
        localStorage.setItem('EntityGroup', JSON.stringify(response.data))
          
        })
  
    }
    EntityPageValues()

      LevelAccess.value= JSON.parse(localStorage.getItem('userData'))
    //console.log()
    if(LevelAccess.value.LevelAccess=="edit"){
      StateAccess.value=true

    }else{
      StateAccess.value=false


    }
    return {
      products,
      MainGroupOrigin,
      IdGroupOrigin,
      StateAccess,
      isLoading,
      MainGroupID
      
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
