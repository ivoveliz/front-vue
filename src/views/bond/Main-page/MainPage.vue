<template>
    <section class="app-ecommerce-details">

      <b-row class="breadcrumbs-top">
   <!-- agregar grupos -->
   <b-col
   v-if="StateAccess"
   class="content-header-right text-md-right d-md-block d-none mb-1"
      md="12"
      cols="20"
     >
     <b-button
      
      variant="success"
      @click="$router.push({ name: 'bond-Main-Group-Add'})"
    >
      <feather-icon
        icon="PlusIcon"
        class="mr-50"
       
      />
      <span class="align-middle">Agregar grupo</span>
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
    <!-- <b-card-header> -->
      <h6 class="item-name">
      <b-link
          class="mb-25"
          :to="{ name: 'bond-Entity-page', params: { slug: product.SecondaryGroups,MainGroupOrigin:product.NamePrimaryGroup,IdGroupOrigin:product.IdGroup } }"
          >
            {{ product.NamePrimaryGroup1 }}
          </b-link>
         
        </h6>
      <!-- <feather-icon
      :id="`EyeIcon1`"
        icon="EyeIcon"
        size="20"
        class="cursor-pointer"
        @click="$router.push({ name: 'bond-Entity-page', params: { slug: product.SecondaryGroups,MainGroupOrigin:product.NamePrimaryGroup,IdGroupOrigin:product.IdGroup} })"
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
        @click="$router.push({ name: 'bond-Main-Group-Edit', params: { slug: product} })"
     
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
        @click="confirmText(product.NamePrimaryGroup)"
        
      />
      <b-tooltip
            title="Eliminar"
            class="cursor-pointer"
            :target="`TrashIcon1`"
          /> -->
    <!-- </b-card-header> -->

       
        <b-card-body>
          <b-link :to="{ name: 'bond-Entity-page', params: { slug: product.SecondaryGroups,MainGroupOrigin:product.NamePrimaryGroup,IdGroupOrigin:product.IdGroup} }">
          
          <b-img
            :alt="`${product.NamePrimaryGroup}-${product.id}`"
            fluid
            class="card-img-top"
            :src="product.AvatarPrimaryGroup"
            
          />
          
        </b-link>
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
          <!-- <b-link
          class="mb-25"
            :to="{ name: 'bond-Secondary-page', params: { slug: product.SecondaryGroups } }"
          >
            {{ product.NamePrimaryGroup }}
          </b-link> -->
          <!-- <b-card-text class="item-company">
            By <b-link class="ml-25">
              {{ product.brand }}
            </b-link>
          </b-card-text> -->
        </h6>
        <!-- <b-card-text class="item-description" >
          Id Grupo : {{ product.IdGroup }}
        </b-card-text>

        <b-card-text class="item-description">
          Cantidad de SubAreas: {{ product.AmountGroup }}
        </b-card-text> -->
        <h4 class="item-name">
      <b-link
          class="mb-25"
          :to="{ name: 'bond-Entity-page', params: { slug: product.SecondaryGroups,MainGroupOrigin:product.NamePrimaryGroup,IdGroupOrigin:product.IdGroup } }"
          >
            {{ product.NamePrimaryGroup }}
          </b-link>
         
        </h4> 
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
import {
  BCard, BCardBody, BImg, BCardText, BLink, BButton,BCardHeader,BTooltip,BCol,
  BRow,
} from 'bootstrap-vue'
import store from '@/store'
import { ref } from '@vue/composition-api'
import { useEcommerce, useEcommerceUi } from '../usebondModule'
import Ripple from 'vue-ripple-directive'

export default {
  components: {
    BCard, BCardBody, BImg, BCardText, BLink, BButton, BCardHeader,BTooltip,
    BRow,BCol,
  },
  directives: {
    Ripple,
  },
  methods: {
    // confirm texrt
    confirmText(NamePrimaryGroup) {
      //console.log(NamePrimaryGroup)
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
          let MainGroupDelete={
            NamePrimaryGroup:NamePrimaryGroup,
            confirmation:true
          }
          const fetchAddOrganization = () => {
      
      store.dispatch('app-bond/fetchDeleteOrganization' , { MainGroupDelete})
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
          this.$router.go()
        }
       })
      }
      fetchAddOrganization()
      
        }
       // 
      })
    },
  },
  setup() {
    const { handleWishlistCartActionClick } = useEcommerceUi()

    const products = ref([])
    const LevelAccess = ref([])
    const StateAccess = ref([])
    const isLoading = ref([])
    isLoading.value=true 

    const { removeProductFromWishlist } = useEcommerce()
    const removeProductFromWishlistClick = product => {
      removeProductFromWishlist(product.id)
        .then(() => {
          const productIndex = products.value.findIndex(p => p.id === product.id)
          products.value.splice(productIndex, 1)
        })
    }
 
    const fetchWishlistProducts = () => {
      store.dispatch('app-bond/fetchOrganization')
        .then(response => {
          products.value = response.data.data
          console.log(response.data.data)
          isLoading.value=false 
        })

           
    }
  
    fetchWishlistProducts()
   
    LevelAccess.value= JSON.parse(localStorage.getItem('userData'))
    
    if(LevelAccess.value.LevelAccess=="edit"){
      StateAccess.value=true

    }else{
      StateAccess.value=false


    }
    return {
      products,
      StateAccess,
      isLoading,
      // UI
      handleWishlistCartActionClick,
      removeProductFromWishlistClick,
    }
  },
}
</script>

<style lang="scss">
@import "~@core/scss/base/pages/app-ecommerce.scss";
</style>
