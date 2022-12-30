<template>
  
  <section class="grid-view wishlist-items">
    <b-card
      v-for="product in products"
      :key="product.id"
      class="ecommerce-card"
      no-body
    >
      <div class="item-img text-center">
        <b-link :to="{ name: 'bond-Entity-details-page', params: { slug: product.Devices} }">
          <b-img
            :alt="`${product.EntityName}-${product.IdEntity}`"
            fluid
            class="card-img-top"
            :src="require('@/assets/images/pages/eCommerce/5.png')"
            
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
          <b-link
            class="text-body"
            :to="{ name: 'bond-Secondary-page', params: { slug: product.id } }"
          >
            {{ product.EntityName}}
         
          </b-link>
          <b-card-text class="item-company">
            Temperature<b-link class="ml-25">
              {{ product.temperature }}
            </b-link>
          </b-card-text>
        </h6>
        <b-card-text class="item-description">
          {{ product.IdEntity }}
        </b-card-text>
    
         <b-card-text class="item-description">
          Ultimo Valor m3/h: {{ product.last}}
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
  </section>
</template>

<script>
import { useRouter } from '@core/utils/utils'
import {
  BCard, BCardBody, BImg, BCardText, BLink, BButton,BRow, BCol,
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
        console.log(response.data.statisticsProfit)
        // ? Your API will return name of logged in user or you might just directly get name of logged in user
        // ? This is just for demo purpose
        const userData = getUserData()
        this.data.congratulations.name = userData.fullName.split(' ')[0] || userData.username
      })
  },
  setup() {
    const { handleWishlistCartActionClick } = useEcommerceUi()

    const products = ref([])
 

    const { removeProductFromWishlist } = useEcommerce()
    const removeProductFromWishlistClick = product => {
      removeProductFromWishlist(product.id)
        .then(() => {
          const productIndex = products.value.findIndex(p => p.id === product.id)
          products.value.splice(productIndex, 1)
        })
    }
    const { route } = useRouter()
      //const productSlug = route.value.params.slug
      let productId = route.value.params.slug
      //productId[0].last=10
      
      

      const fetchWishlistProducts = () => {
     if(productId){

      store.dispatch('app-bond/fetchEntityValues', { productId})
        .then(response => {
          
          productId=response 
          console.log(productId )
        })

      products.value = productId 
      store.dispatch('app-bond/fetchEntityGroup', { productId})
        .then(response => {
       // console.log(response)
        })
     }else{
      // store.dispatch('app-bond/fetchEntityValues', { productId})
      //   .then(response => {
      //     productId[0].last=response 
      //   })
      store.dispatch('app-bond/fetchEntitySaved', { productId})
        .then(response => {
          products.value = response
        })
     }
     //console.log(products.value) 
    }

    fetchWishlistProducts()

    return {
      products,

      // UI
      handleWishlistCartActionClick,
      removeProductFromWishlistClick,
    }
  },
}
</script>

<style lang="scss">
//@import "~@core/scss/base/pages/app-ecommerce.scss";
@import '@core/scss/vue/pages/dashboard-ecommerce.scss';
@import '@core/scss/vue/libs/chart-apex.scss';
</style>
