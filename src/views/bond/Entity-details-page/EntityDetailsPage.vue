<template>
  <section class="app-ecommerce-details">
    
      <!-- TEXTO PRINCIPAL-->
    <!-- <div class="col" cols="12">
          <h1 class="text-center"> Entidad : {{products.DestinyEntity}}</h1>
          <b-col cols="12">
          <h1 class="text-center"> - </h1>
          </b-col>
        </div> -->
     
        <b-row class="match-height">
        
 <!-- card -->
 <b-col 
 cols="6"
 align-self="baseline"
      >
        <ecommerce-meetup :data="products" />
      </b-col>

 <!-- FORMULARIO -->

 <!-- <b-col 
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

    

  </b-col> -->
</b-row>
   <!-- GRAFICO-->
   <b-col cols="12"
            >
            <b-card  >
    <b-card-header>
      <!-- title and subtitle -->
      <div>
        <b-card-title class="mb-1">
          Line Chart 
        </b-card-title>
         
      </div>
      <!--/ title and subtitle -->


      <!-- datepicker -->
    </b-card-header>

    <b-card-body>
      <vue-apex-charts
        type="area"
        height="400"
        :options="chartOptions"
        :series="datachart.series"
      />
    </b-card-body>
  </b-card>

      <!-- <ecommerce-profit-chart :data="datachart" /> -->
    </b-col>
    <b-col align-self="stretch">
 <!-- <table-kitchen-sink /> -->
  <!-- tabla -->
 <b-col cols="12" >
  <b-row>
  <b-col
    md="2"
    sm="4"
    class="my-1"
  >
    <b-form-group
      class="mb-0"
    >
      <label class="d-inline-block text-sm-left mr-50">Por pagina</label>
      <b-form-select
        id="perPageSelect"
        v-model="perPage"
        size="sm"
        :options="pageOptions"
        class="w-50"
      />
    </b-form-group>
  </b-col>
  <b-col
    md="4"
    sm="8"
    class="my-1"
  >
    <b-form-group
      label="Clasificar"
      label-cols-sm="3"
      label-align-sm="right"
      label-size="sm"
      label-for="sortBySelect"
      class="mb-0"
    >
      <b-input-group size="sm">
        <b-form-select
          id="sortBySelect"
          v-model="sortBy"
          :options="sortOptions"
          class="w-75"
        >
          <template v-slot:first>
            <option value="">
              -- item --
            </option>
          </template>
        </b-form-select>
        <b-form-select
          v-model="sortDesc"
          size="sm"
          :disabled="!sortBy"
          class="w-25"
        >
          <option :value="false">
            Asc
          </option>
          <option :value="true">
            Desc
          </option>
        </b-form-select>
      </b-input-group>
    </b-form-group>
  </b-col>
  <b-col
    md="6"
    class="my-1"
  >
    <b-form-group
      label="Filtro"
      label-cols-sm="3"
      label-align-sm="right"
      label-size="sm"
      label-for="filterInput"
      class="mb-0"
    >
      <b-input-group size="sm">
        <b-form-input
          id="filterInput"
          v-model="filter"
          type="search"
          placeholder="Filtrar"
        />
        <b-input-group-append>
          <b-button
            :disabled="!filter"
            @click="filter = ''"
          >
            Clear
          </b-button>
        </b-input-group-append>
      </b-input-group>
    </b-form-group>
  </b-col>

  <b-col cols="12">
    <b-table
    
      ref="table"
      striped
      hover
      responsive
      :key="chartkey" 
      :per-page="perPage"
      :current-page="currentPage"
      :items="items"
      :fields="fields"
      :sort-by.sync="sortBy"
      :sort-desc.sync="sortDesc"
      :sort-direction="sortDirection"
      :filter="filter"
      :filter-included-fields="filterOn"
      @filtered="onFiltered"
    >
      <template #cell(avatar)="data">
        <b-avatar :src="data.value" />
      </template>

      <template #cell(status)="data">
        <b-badge :variant="status[1][data.value]">
          {{ status[0][data.value] }}
        </b-badge>
      </template>
    </b-table>
  </b-col>

  <b-col
    cols="12"
  >
    <b-pagination
      v-model="currentPage"
      :total-rows="totalRows"
      :per-page="perPage"
      align="center"
      size="sm"
      class="my-0"
    />
  </b-col>
</b-row>
      </b-col>
</b-col>
  <!-- TARJETA-->
    <div class="grid-view wishlist-items" >
    <b-card
      v-for="product in products.Devices"
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
        <!-- <b-card-text class="item-description">
          Entidad asociada: {{ product.NameDevice }}
        </b-card-text> -->
        <b-card-text class="item-description">
          Estado: {{ product.State }}
        </b-card-text>
<!--     
         <b-card-text class="item-description">
          Ultimo Valor m3/h: {{ product.NameDevice}}
        </b-card-text>
        <b-card-text class="item-description">
          Fecha Ultimo dato : {{ "20/11/2022-13:37:46" }}
        </b-card-text> -->
       
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
BCardHeader,  BCardTitle, BCardSubTitle,
  
} from 'bootstrap-vue'
import store from '@/store'
import { FormWizard, TabContent } from 'vue-form-wizard'
import { ref } from '@vue/composition-api'
import { useEcommerce, useEcommerceUi } from '../usebondModule'
import ApexLineAreaChart from './apex-chart/ApexLineAreaChart.vue'
import flatPickr from 'vue-flatpickr-component'
import 'vue-form-wizard/dist/vue-form-wizard.min.css'
import EcommerceMeetup from './EcommerceMeetup.vue'
import TableKitchenSink from './TableKitchenSink.vue'
import axios from 'axios';
import moment from "moment";
import EcommerceProfitChart from './EcommerceProfitChart.vue'
import apexChatData from './apexChartData'
import VueApexCharts from 'vue-apexcharts'


export default {
  components: {
    BRow,BCol,BCard, BCardBody, BImg, BCardText, BLink, BButton,
    ApexLineAreaChart, flatPickr,BTable,  BFormGroup,
    BFormSelect,BPagination,BInputGroup,BFormInput,
    BInputGroupAppend,FormWizard,TabContent,EcommerceMeetup,
    TableKitchenSink,EcommerceProfitChart, BCardHeader,
    BCardTitle,VueApexCharts,
  },
  data() {
    return {
      apexChatData,
      data: {},
      chartkey: 0,
      perPage: 5,
      pageOptions: [ 5, 10,32],
      totalRows: 1,
      currentPage: 1,
      sortBy: '',
      sortDesc: false,
      sortDirection: 'asc',
      filter: null,
      filterOn: [],
      infoModal: {
        id: 'info-modal',
        title: '',
        content: '',
      },
      fields: [
        {
          key: 'id', label: 'Id', sortable: true 
        },
        {
          key: 'date', label: 'Fecha dato', sortable: true },
        { key: 'maxvalue', label: 'Ruido Máximo', sortable: true },
        { key: 'minvalue', label: 'Valor Minimo', sortable: true },
        { key: 'promvalue', label: 'Valor Promedio', sortable: true },
      
      ],
      items: [],
      datachart: {},
      chartOptions: {
      chart: {
        toolbar: {
          show: true,
          offsetX: 0,
          offsetY: 0,
          tools: {
            download: true,
            selection: true,
            zoom: true,
            zoomin: false,
            zoomout: false,
            pan: false,
            reset: true | '<img src="/static/icons/reset.png" width="20">',
            customIcons: []
          },
          export: {
            csv: {
              filename: undefined,
              columnDelimiter: ',',
              headerCategory: 'category',
              headerValue: 'value',
              dateFormatter(timestamp) {
                return new Date(timestamp).toDateString()
              }
            },
            svg: {
              filename: undefined,
            },
            png: {
              filename: undefined,
            }
          },
          autoSelected: 'zoom' 
        },
        zoom: {
          autoScaleYaxis: true
        }
      },
      dataLabels: {
        enabled: true,
        //enabledOnSeries: [1]
      },
      stroke: {
        show: false,
        curve: 'straight',
      },
      legend: {
        show: true,
        showForSingleSeries: false,
        position: 'top',
        horizontalAlign: 'left',
        fontSize: '14px',
        fontFamily: 'Montserrat',
      },
      grid: {
        xaxis: {
         
          lines: {
            show: true,
          },
        },
      },
      xaxis: {
        type: 'datetime',
        
        //min: new Date('01 Mar 2012').getTime(),
        tickAmount: 0,
        tooltip: {
          enabled: false,
         },
        labels: {
          format: 'HH:mm dd/MM/yy',
          datetimeUTC: false
        
        }
        
      },
      yaxis: {
        // opposite: isRtl
        
      },
      fill: {
        opacity: 1,
        type: 'solid',
      },
      tooltip: {
        //shared: false,
        enabled: true,
       // format: 'dd MMM yyyy',
        x: {
          show: true,
          format: 'HH:mm:ss',
          formatter: undefined,
      },
      y: {
        formatter: undefined,
        title: {
            formatter: (seriesName) => seriesName,
        },
      }
      },
      colors: ["#a4f8cd", "#a4f8cd", "#a4f8cd"],
    },

    }
  },
  // created() {
  //   // data
  //   this.$http.get('/ecommerce/data')
  //     .then(response => {
  //       this.data = response.data

  //       // ? Your API will return name of logged in user or you might just directly get name of logged in user
  //       // ? This is just for demo purpose
  //       const userData = getUserData()
  //       this.data.congratulations.name = userData.fullName.split(' ')[0] || userData.username
  //     })
  // },
  computed: {
    sortOptions() {
      // Create an options list from our fields
      return this.fields
        .filter(f => f.sortable)
        .map(f => ({ text: f.label, value: f.key }))
    },
  },
  methods: {

    onFiltered(filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      
      this.currentPage = 1
      const series=[]
      const data1=[]
      const datef = filteredItems[0].date
      const maxvaluef= filteredItems[0].Maxvalue
      const minvaluef=filteredItems[0].Minvalue
      const promvaluef=filteredItems[0].PromVolumen
      this.maxvalue.push({ datef, total: maxvaluef});
      this.minvalue.push({ datef, total: minvaluef });
      this.promvalue.push({ datef, total: promvaluef });
      // data1.push([datef, maxvaluef])
      // series.push({name: 'Value m3/h :', data:data1})

      // this.datachart.series=series
     
    },
getAPIData () {

 // console.log("holaaaaaaaa")
this.chartkey += 1;
this.items=[]
this.maxvalue=[]
this.minvalue=[]
this.promvalue=[]
clearInterval(this.timer)
axios.get('https://n0kxap62th.execute-api.us-west-2.amazonaws.com/tasks',{
params: {
    "nombre":"device-ruido1"
}
}).then(res => {
let id=0 
const series=[]
    const data1=[]
res.data.body.tasks.forEach(d => {
const date =moment(d.CreatedAt).format('MM/DD/YYYY-HH:mm');
const maxvalue = d.MaxVolumen;
const minvalue = d.MinVolumen;
const promvalue = d.PromVolumen;

const date1=d.TimeStamp
      
      id++
      data1.push([date1, maxvalue])
this.items.push({ date, maxvalue,minvalue,promvalue,id });
});


this.totalRows =  id
series.push({name: 'Value m3/h :', data:data1})
  
  this.datachart.series=series

 // console.log(this.datachart)
  this.timer = setInterval(() => {
    this.getAPIData()
  }, 55000)
}).catch(err => {
  console.log('Error', err)
})
}
  },
  async created() {
   
    this.items=[]
    this.maxvalue=[]
      this.minvalue=[]
      this.promvalue=[]
      this.datachart= {}
    const { data } = await axios.get('https://n0kxap62th.execute-api.us-west-2.amazonaws.com/tasks',{
      params: {
          "nombre":"device-ruido1"
  }
})
//console.log(data.body)
    let id=0 
    const series=[]
    const data1=[]
    
  data.body.tasks.forEach(d => {
    const maxvalue = d.MaxVolumen;
      const minvalue = d.MinVolumen;
      const promvalue = d.PromVolumen;
    const date =moment(d.CreatedAt).format('MM/DD/YYYY-HH:mm');
    
    const date1=d.TimeStamp
      
     id++
     data1.push([date1, maxvalue])
     this.items.push({ date, maxvalue,minvalue,promvalue,id });
     
   });
   series.push({name: 'Value m3/h :', data:data1})
  
   this.datachart.series=series
   console.log(this.datachart.series)
 

   this.totalRows =  id
  
   
   this.getAPIData()

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
       //console.log(productId )
      //productId[0].last=10
      //console.log(this.datachart)

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
