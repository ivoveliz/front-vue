<template>
  <section class="app-ecommerce-details">
    
      <!-- TEXTO PRINCIPAL-->
    <div class="col" cols="12">
          <h1 class="text-center"> Entidad : {{products[0].EntityName}}</h1>
          <b-col cols="12">
          <h1 class="text-center"> - </h1>
          </b-col>
        </div>
     
        <b-row class="match-height">
   
 <!-- card -->
 <b-col
        lg="4"
        md="6"
      >
        <ecommerce-meetup :data="data.meetup" />
      </b-col>

 <!-- FORMULARIO -->
 <b-col 
    lg="6"
     md="3"
    cols="6"
            >
        <form-wizard
      color="#7367F0"
      :title="null"
      :subtitle="null"
      layout="vertical"
      finish-button-text="Submit"
      back-button-text="Previous"
      class="wizard-vertical mb-3"
      @on-complete="formSubmitted"
    >

      <!-- account datails tab -->
      <tab-content title="Account Details">
        <b-row>
          <b-col
            cols="12"
            class="mb-2"
          >
            <h5 class="mb-0">
              Account Details
            </h5>
            <small class="text-muted">
              Enter Your Account Details.
            </small>
          </b-col>
          <b-col md="6">
            <b-form-group
              label="Username"
              label-for="v-username"
            >
              <b-form-input
                id="v-username"
                placeholder="johndoe"
              />
            </b-form-group>
          </b-col>
          <b-col md="6">
            <b-form-group
              label="Email"
              label-for="v-email"
            >
              <b-form-input
                id="v-email"
                type="email"
                placeholder="john.doe@email.com"
              />
            </b-form-group>
          </b-col>
          <b-col md="6">
            <b-form-group
              label="Password"
              label-for="v-password"
            >
              <b-form-input
                id="v-password"
                type="password"
                placeholder="Password"
              />
            </b-form-group>
          </b-col>
          <b-col md="6">
            <b-form-group
              label="Confirm Password"
              label-for="v-c-password"
            >
              <b-form-input
                id="v-c-password"
                type="password"
                placeholder="Re-type Password"
              />
            </b-form-group>
          </b-col>
        </b-row>
      </tab-content>

      <!-- personal info tab -->
      <tab-content title="Personal Info">
        <b-row>
          <b-col
            cols="12"
            class="mb-2"
          >
            <h5 class="mb-0">
              Personal Info
            </h5>
            <small class="text-muted">Enter Your Personal Info.</small>
          </b-col>
          <b-col md="6">
            <b-form-group
              label="First Name"
              label-for="v-first-name"
            >

              <b-form-input
                id="v-first-name"
                placeholder="John"
              />
            </b-form-group>
          </b-col>
          <b-col md="6">
            <b-form-group
              label="Last Name"
              label-for="v-last-name"
            >
              <b-form-input
                id="v-last-name"
                placeholder="Doe"
              />
            </b-form-group>
          </b-col>
          <b-col md="6">
            <b-form-group
              label="Country"
              label-for="v-country"
            >
              <v-select
                id="v-country"
                v-model="selectedContry"
                :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                :options="countryName"
                :selectable="option => ! option.value.includes('select_value')"
                label="text"
              />
            </b-form-group>
          </b-col>
          <b-col md="6">
            <b-form-group
              label-for="v-language"
              label="Language"
            >
              <v-select
                id="Language"
                v-model="selectedLanguage"
                :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                :selectable="option => ! option.value.includes('select_value')"
                :options="languageName"
                label="text"
              />
            </b-form-group>
          </b-col>
        </b-row>
      </tab-content>

      <!-- address -->
      <tab-content title="Address">
        <b-row>
          <b-col
            cols="12"
            class="mb-2"
          >
            <h5 class="mb-0">
              Address
            </h5>
            <small class="text-muted">Enter Your Address.</small>
          </b-col>
          <b-col md="6">
            <b-form-group
              label="Address"
              label-for="v-address"
            >
              <b-form-input
                id="v-address"
                placeholder="98 Borough bridge Road, Birmingham"
              />
            </b-form-group>
          </b-col>
          <b-col md="6">
            <b-form-group
              label="Landmark"
              label-for="v-landmark"
            >
              <b-form-input
                id="v-landmark"
                placeholder="Borough bridge"
              />
            </b-form-group>
          </b-col>
          <b-col md="6">
            <b-form-group
              label="Pincode"
              label-for="v-pincode"
            >
              <b-form-input
                id="v-pincode"
                placeholder="658921"
              />
            </b-form-group>
          </b-col>
          <b-col md="6">
            <b-form-group
              label="City"
              label-for="v-city"
            >
              <b-form-input
                id="v-city"
                placeholder="Birmingham"
              />
            </b-form-group>
          </b-col>
        </b-row>
      </tab-content>

      <!-- social link -->
      <tab-content title="Social Links">
        <b-row>
          <b-col
            cols="12"
            class="mb-2"
          >
            <h5 class="mb-0">
              Social Links
            </h5>
            <small class="text-muted">Enter Your Social Links</small>
          </b-col>
          <b-col md="6">
            <b-form-group
              label="Twitter"
              label-for="v-twitter"
            >
              <b-form-input
                id="v-twitter"
                placeholder="https://twitter.com/abc"
              />
            </b-form-group>
          </b-col>
          <b-col md="6">
            <b-form-group
              label="Facebook"
              label-for="v-facebook"
            >
              <b-form-input
                id="v-facebook"
                placeholder="https://facebook.com/abc"
              />
            </b-form-group>
          </b-col>
          <b-col md="6">
            <b-form-group
              label="Google+"
              label-for="v-google-plus"
            >
              <b-form-input
                id="v-google-plus"
                placeholder="https://plus.google.com/abc"
              />
            </b-form-group>
          </b-col>
          <b-col md="6">
            <b-form-group
              label="LinkedIn"
              label-for="v-linked-in"
            >
              <b-form-input
                id="v-linked-in"
                placeholder="https://linkedin.com/abc"
              />
            </b-form-group>
          </b-col>
        </b-row>
      </tab-content>
    </form-wizard>

    

  </b-col>
</b-row>
   <!-- GRAFICO-->
   <b-col cols="12"
            >
      <apex-line-area-chart />
    </b-col>
  <!-- TARJETA-->
    <div class="grid-view wishlist-items" >
    <b-card
      v-for="product in products"
      :key="product.id"
      class="ecommerce-card"
      no-body
    >
      <div class="item-img text-center">
        <b-link :to="{ name: 'bond-e-commerce-product-details', params: { slug: product.IdSecondaryGroup} }">
          <b-img
            :alt="`${product.EntityName}-${product.IdEntity}`"
            fluid
            class="card-img-top"
            :src="require('@/assets/images/pages/eCommerce/6.png')"
            
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
            {{ product.NameDevice}}
         
          </b-link>
          <b-card-text class="item-company">
            Temperature<b-link class="ml-25">
              {{ product.temperature }}
            </b-link>
          </b-card-text>
        </h6>
        <b-card-text class="item-description">
          {{ product.IdDevice }}
        </b-card-text>
        <b-card-text class="item-description">
          Entidad asociada: {{ product.EntityName }}
        </b-card-text>
        <b-card-text class="item-description">
          Estado: {{ product.State }}
        </b-card-text>
    
         <b-card-text class="item-description">
          Ultimo Valor m3/h: {{ product.last}}
        </b-card-text>
        <b-card-text class="item-description">
          Fecha Ultimo dato : {{ "20/11/2022-13:37:46" }}
        </b-card-text>
       
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
  </div>
  </section>
</template>

<script>
import { useRouter } from '@core/utils/utils'
import {
  BTable,BRow, BCard, BCardBody, BImg, BCardText,
  BLink, BButton,BCol, BFormGroup, BFormSelect, 
  BPagination, BInputGroup, BFormInput, BInputGroupAppend,
  
} from 'bootstrap-vue'
import store from '@/store'
import { FormWizard, TabContent } from 'vue-form-wizard'
import { ref } from '@vue/composition-api'
import { useEcommerce, useEcommerceUi } from '../usebondModule'
import ApexLineAreaChart from './apex-chart/ApexLineAreaChart.vue'
import flatPickr from 'vue-flatpickr-component'
import 'vue-form-wizard/dist/vue-form-wizard.min.css'
import EcommerceMeetup from './EcommerceMeetup.vue'

export default {
  components: {
    BRow,BCol,BCard, BCardBody, BImg, BCardText, BLink, BButton,
    ApexLineAreaChart, flatPickr,BTable,  BFormGroup,
    BFormSelect,BPagination,BInputGroup,BFormInput,
    BInputGroupAppend,FormWizard,TabContent,EcommerceMeetup,
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
      // this.EntityName1="productId[0].EntityName"
      // console.log(this.EntityName1)
      //productId[0].last=10
      
      

      const fetchWishlistProducts = () => {
     if(productId){

      store.dispatch('app-bond/fetchEntityDetailsValues', { productId})
        .then(response => {
          
          productId=response 
          
        })

      products.value = productId 
      console.log(products )
      store.dispatch('app-bond/fetchEntityDetailsGroup', { productId})
        .then(response => {
       // console.log(response)
        })
     }else{
      // store.dispatch('app-bond/fetchEntityValues', { productId})
      //   .then(response => {
      //     productId[0].last=response 
      //   })
      store.dispatch('app-bond/fetchEntityDetailsSaved', { productId})
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
@import "~@core/scss/base/pages/app-ecommerce.scss";
@import '@core/scss/vue/libs/vue-flatpicker.scss';
@import '@core/scss/vue/libs/chart-apex.scss';
@import '@core/scss/vue/libs/vue-wizard.scss';
  @import '@core/scss/vue/libs/vue-select.scss';
  @import '@core/scss/vue/pages/dashboard-ecommerce.scss';
</style>
