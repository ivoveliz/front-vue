<template>
  <section class="app-ecommerce-details">
    
      <!-- TEXTO PRINCIPAL-->
    <!-- <div class="col" cols="12">
          <h1 class="text-center"> Entidad : {{ConsultDateYesterday}}</h1>
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

<b-col cols="6">

<b-card
    v-if="data"
    
    class="card-developer-meetup"
  >
  <b-card-body>
    <div>
    <b-form 
    class="auth-login-form mt-2"
    @reset="onReset"
    @submit.prevent>
      <b-row>
      <b-col >
      <b-form-group
        id="input-group-1"
        label-for="input-1" 
      >
      <b-card-title class="mb-1">
         Seleccionar Fecha Desde : 
        </b-card-title>
      <b-form-datepicker id="example-datepicker"  class="mb-2" v-model="rangePickerBefore"></b-form-datepicker>
      <b-card-title class="mb-1">
         Seleccionar Hora Desde : 
        </b-card-title>
        <b-form-input :id="`type-time-after`" :type="'time'" v-model="rangeTimeBefore"  ></b-form-input> 
      </b-form-group>
    </b-col>
    <b-col  >
      <b-form-group id="input-group-2" label-for="input-2">
        <b-card-title class="mb-1">
         Seleccionar Fecha hasta : 
        </b-card-title>
        <b-form-datepicker
      id="datepicker-full-width"
      v-model="rangePickerAfter" 
      menu-class="w-100"
      calendar-width="100%"
      class="mb-2"
    ></b-form-datepicker>
    <b-card-title class="mb-1">
         Seleccionar Hora hasta : 
        </b-card-title>
            <b-form-input :id="`type-time-before`" :type="'time'"  v-model="rangeTimeAfter" ></b-form-input>  
      </b-form-group>
    </b-col>
  </b-row>
    <b-row>
      <b-col>
        <b-card-title class="mb-1">
         Seleccionar formato :
        </b-card-title>
      <b-form-radio-group
          class="pt-2"
          :options="['Excel', 'PDF']"
          v-model="RadioGroup"
        ></b-form-radio-group>
      </b-col>
        <b-col>
       
          <b-button
              variant="primary"
              type="submit"
              block
              
              @click="formSubmitted"
            >
             Generar Documento
            </b-button>
            <b-button 
            type="reset" 
            variant="danger"
            block
            >Reset</b-button>
    </b-col>
    </b-row>
 
    </b-form>
 
  </div>
    <!-- <b-col 
 cols="4"
            >
            <b-form
            inline
            @submit.prevent
          >
          <b-form-group
      label-cols-lg="3"
      label-align-sm="left"
      label-size="lg"
      label-class="font-weight-bold pt-0"
      class="mb-0"
    >
    
   
            <b-form-group
        label="Street:"
        label-for="nested-street"
        label-cols-sm="3"
        label-align-sm="right"
      >
      <b-form-datepicker id="example-datepicker" ></b-form-datepicker>
            <b-form-input :id="`type-time`" :type="'time'"   ></b-form-input>
      </b-form-group>
        </b-form-group>
        
          <b-button
              variant="success"
              type="submit"
              block
              :disabled="invalid"
              class="item-img text-left"
              @click="validationForm"
            >
             Descargar Informacion
            </b-button>
        </b-form> 
        </b-col>  -->
        </b-card-body>      

</b-card>
           
      

  </b-col> 
  
</b-row>
<h4 class="card-title mb-50">
      Fecha de datos desde : {{ConsultDateYesterday}} - hasta : {{ConsultDateToday}}
      </h4>
<div class="row mt-5">
        <div class="col">
          <h1 class="text-center" v-if="isLoading">CARGANDO DATOS...</h1>
        </div>
      </div>  
<hr class="invoice-spacing"> 
   <!-- GRAFICO VALOR INSTANTANEIO-->
   <b-col cols="12"
   v-if="!isLoading"
   >
            <b-card  >
              <b-card-header>
      <!-- title and legend -->
      <h4 class="card-title mb-50">
       Flujo instantaneo m³/h
      </h4>
      <!--/ title and legend -->

      <!-- button group -->
      <!-- <b-button-group>
        <b-button
          v-ripple.400="'rgba(186, 191, 199, 0.15)'"
          variant="outline-primary"
        >
         6 Horas
        </b-button>
        <b-button
          v-ripple.400="'rgba(186, 191, 199, 0.15)'"
          variant="outline-primary"
        >
          12 Horas
        </b-button>
        <b-button
          v-ripple.400="'rgba(186, 191, 199, 0.15)'"
          variant="outline-primary"
        >
         24 Horas
        </b-button>
      </b-button-group> -->
      <!--/ button group -->
    </b-card-header>

    <b-card-body>
      <vue-apex-charts
        type="line"
        height="400"
        :options="chartOptions"
        :series="datachart.series"
      />
    </b-card-body>
    
    
  </b-card>

      <!-- <ecommerce-profit-chart :data="datachart" /> -->
    </b-col>
    <hr class="invoice-spacing"> 
<!-- GRAFICO VALOR TOTALIZADOR-->
    <b-col cols="12"
    v-if="!isLoading"
            >
            <b-card  >
    <b-card-header>
      <!-- title and subtitle -->
      <div>
        <b-card-title class="mb-1">
          Totalizador m³/h
        </b-card-title>
         
      </div>
      <!--/ title and subtitle -->


      <!-- datepicker -->
    </b-card-header>

    <b-card-body>
      <vue-apex-charts
        type="line"
        height="400"
        :options="chartOptions"
        :series="datachartTotalizer.series"
      />
    </b-card-body>

    
  </b-card>

      <!-- <ecommerce-profit-chart :data="datachart" /> -->
    </b-col>
     
    <b-col align-self="stretch">
 <!-- <table-kitchen-sink /> -->
 <hr class="invoice-spacing"> 
  <!-- tabla -->
 <b-col cols="12" 
 v-if="!isLoading"
 >
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
  <hr class="invoice-spacing"> 
  <b-row class="breadcrumbs-top">
    <!-- AGREGAR DISPOSITIVO-->
   <b-col
   v-if="StateAccess"
   class="content-header-right text-md-right d-md-block d-none mb-1"
      md="12"
      cols="20"
     >
     <b-button
      
      variant="outline-primary"
      @click="$router.push({ name: 'bond-Device-Add', params: {IDEntity:products.IdEntity, MainGroupOrigin: MainGroupOrigin,IdGroupOrigin:IdGroupOrigin} })"
    >
      <feather-icon
        icon="PlusIcon"
        class="mr-50"
       
      />
      <span class="align-middle">Agregar Dispositivo</span>
    </b-button>
      
 
   </b-col>
 
 </b-row>
    <b-row class="grid-view wishlist-items" >
    <b-card
    v-if="StateAccess"
      v-for="product in products.Device"
      :key="product.id"
      class="ecommerce-card"
      no-body
    >
      <div class="item-img text-center">
        <b-link :to="{ name: 'bond-Device-details-page', params: { slug: product} }">
          <b-img
            :alt="`${product.EntityName}-${product.IdEntity}`"
            fluid
            class="card-img-top"
            :src="product.avatarDevice"
            
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
  </b-row>
  </section>
</template>

<script>
import { useRouter } from '@core/utils/utils'
import {
  BTable,BRow, BCard, BCardBody, BImg, BCardText,
  BLink, BButton,BCol, BFormGroup, BFormSelect, 
  BPagination, BInputGroup, BFormInput, BInputGroupAppend,
BCardHeader,  BCardTitle, BCardSubTitle, BButtonGroup,BFormDatepicker,BForm,BFormRadioGroup
  
} from 'bootstrap-vue'
import store from '@/store'
//import { FormWizard, TabContent } from 'vue-form-wizard'
//import {  TabContent } from 'vue-form-wizard'
import { ref } from '@vue/composition-api'
import vSelect from 'vue-select'
//import { useEcommerce, useEcommerceUi } from '../usebondModule'
import ApexLineAreaChart from './apex-chart/ApexLineAreaChart.vue'
import flatPickr from 'vue-flatpickr-component'
//import 'vue-form-wizard/dist/vue-form-wizard.min.css'
import EcommerceMeetup from './EcommerceMeetup.vue'
//import TableKitchenSink from './TableKitchenSink.vue'
//import EcommerceProfitChart from './EcommerceProfitChart.vue'
//import apexChatData from './apexChartData'
import VueApexCharts from 'vue-apexcharts'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
import jspdf from 'jspdf'
import 'jspdf-autotable'
import xlsx from "json-as-xlsx"

const isLoading = true;

export default {
  components: {
    BRow,BCol,BCard, BCardBody, BImg, BCardText, BLink, BButton,
    ApexLineAreaChart, BTable,  BFormGroup,
    BFormSelect,BPagination,BInputGroup,BFormInput,
    BInputGroupAppend,EcommerceMeetup,BForm,
    BCardHeader,vSelect,BFormDatepicker,BFormRadioGroup,
    BCardTitle,VueApexCharts, BButtonGroup,ToastificationContent,flatPickr,//TableKitchenSink,EcommerceProfitChart,,FormWizard,TabContent,
  },
  data() {
    return {
      //apexChatData,
      isLoading,
      data: {},
      DeviceID:"endev",
      rangePicker:"",
      RadioGroup:"EXCEL",
      rangePickerBefore:"",
      rangePickerAfter:"",
      rangeTimeAfter:"",
      rangeTimeBefore:"",
      SelectedFormat:"",
      chartkey: 0,
      perPage: 5,
      pageOptions: [5, 10,20,60,100,200,500],
      totalRows: 1,
      currentPage: 1,
      sortBy: 'date',
      sortDesc: true,
      sortDirection: 'desc',
      filter: null,
      filterOn: [],
      SelectedFormat: 'Seleccionar Formato',
      Format: [
        { value: 'PDF', text: 'PDF' },
        { value: 'Excel', text: 'Excel' },
     
      ],
      infoModal: {
        id: 'info-modal',
        title: '',
        content: '',
      },
      fields: [
        // {
        //  key: 'count', label: 'Id', sortable: true 
        // },
        {
          key: 'date', label: 'Fecha dato', sortable: true },
        { key: 'ValueDecodeInstant', label: 'Valor Instaneo m³/h', sortable: true },
        { key: 'ValueDecodeTote', label: 'Valor totalizador m³/h', sortable: true },
         
      
      ],
      items: [],
      datachart: {},
      datachartTotalizer: {},
      ConsultDateToday: "",
      ConsultDateYesterday: "",
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
            // csv: {
            //   filename: undefined,
            //   columnDelimiter: ',',
            //   headerCategory: 'category',
            //   headerValue: 'value',
            //   dateFormatter(timestamp) {
            //     return new Date(timestamp).toDateString()
            //   }
            // },
            // svg: {
            //   filename: undefined,
            // },
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
        enabled: false,
        //enabledOnSeries: [1]
      },
      stroke: {
        // show: true,
        curve: 'straight',
        width: 3
      },
      markers: {
    size: 0,
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
      
        //min: new Date().getTime(),
        tickAmount: 3,
        tooltip: {
          enabled: false,
         },
        labels: {
          format: 'HH:mm:ss dd/MM/yy',
          formatter: undefined,
          datetimeUTC: false,
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
          format: 'HH:mm:ss dd/MM/yy',
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

  computed: {
    sortOptions() {
      // Create an options list from our fields
      return this.fields
        .filter(f => f.sortable)
        .map(f => ({ text: f.label, value: f.key }))
    },
  },
  methods: {
    async formSubmitted() {
      //console.log( this.IdEntityOrigin)
      let xlsx = require("json-as-xlsx")
      let rangeBefore=this.rangePickerBefore + ' '+this.rangeTimeBefore; 
      let rangeAfter=this.rangePickerAfter+ ' '+this.rangeTimeAfter; 
      let entityId = {
      //   Entity:this.IdEntityOrigin,
      // RangeDate:this.rangePicker
      Entity:this.IdEntityOrigin,
      rangeBefore:rangeBefore,
      rangeAfter:rangeAfter,
      
     
    }
      //console.log(entityId)
      const fetchEntityDetailsValuesDaily = () => {
        let xlsx = require("json-as-xlsx")
store.dispatch('app-bond/fetchEntityDetailsValuesExport' , { entityId})
 .then(response => {
  var ConsultDate=response.data.DateConsult
  //console.log(response.data )
  //console.log(this.SelectedFormat.value)
  let format = this.RadioGroup
  
  if( format=="Excel"){

    let data = [
  {
    sheet: `Informe`,
    columns: [
      { label: "Fecha Dato", value: "Date" }, // Top level data
      { label: "Valor Instantaneo m3/h", value:"Instant" }, // Custom format
      { label: "Valor Totalizador m3/h", value: "Totalizer" }, // Run functions
    ],
    content: response.data.DataExportCsv
      // { user: "Andrea", age: 20, more: { phone: "11111111" } },
      // { user: "Luis", age: 21, more: { phone: "12345678" } },
    ,
  },
  // {
  //   sheet: "Children",
  //   columns: [
  //     { label: "User", value: "user" }, // Top level data
  //     { label: "Age", value: "age", format: '# "years"' }, // Column format
  //     { label: "Phone", value: "more.phone", format: "(###) ###-####" }, // Deep props and column format
  //   ],
  //   content: [
  //     { user: "Manuel", age: 16, more: { phone: 9999999900 } },
  //     { user: "Ana", age: 17, more: { phone: 8765432135 } },
  //   ],
  // },
]

let settings = {
  fileName: `Informe ${ConsultDate}`, // Name of the resulting spreadsheet
  extraLength: 3, // A bigger number means that columns will be wider
  writeMode: "writeFile", // The available parameters are 'WriteFile' and 'write'. This setting is optional. Useful in such cases https://docs.sheetjs.com/docs/solutions/output#example-remote-file
  writeOptions: {}, // Style options from https://docs.sheetjs.com/docs/api/write-options
  RTL: false, // Display the columns from right-to-left (the default value is false)
}

xlsx(data, settings) // Will download the excel file
    
  }else{
    var head = [['Fecha dato', 'Valor Instantaneo m3/h', 'Valor Totalizador m3/h']]
  var body = response.data.DataExportPdf
  let doc = new jspdf()
  doc.autoTable({ head: head, body: body })
  doc.save(`Informe ${ConsultDate}.pdf`)
   

  }
 
  this.$toast({
  component: ToastificationContent,
  props: {
    title: 'Documento generado con exito',
    icon: 'EditIcon',
    variant: 'success',
 
  },
})
    
 })
}
fetchEntityDetailsValuesDaily()

// var head = [['ID', 'Fecha dato', 'Valor Instantaneo m3/h', 'Valor totalizador m3/h']]
// let doc = new jspdf()
//       doc.text("hello world",10,10)
//       doc.save("output.pdf")

},
onReset(event) {
  event.preventDefault()
  this.RadioGroup= 'Excel'
  this.rangeTimeBefore= ''
  this.rangeTimeAfter= ''
  this.rangePickerBefore= ''
  this.rangePickerAfter= ''
  

  
},
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
 this.isLoading =  true
this.chartkey += 1;
this.items=[]
this.maxvalue=[]
this.minvalue=[]
this.promvalue=[]
clearInterval(this.timer)

this.items=[]
    this.maxvalue=[]
      this.minvalue=[]
      this.promvalue=[]
      this.datachart= {}
      this.datachartTotalizer= {}

      let entityId=this.products.IdEntity

const fetchEntityDetailsValuesDaily = () => {

store.dispatch('app-bond/fetchEntityDetailsValuesDaily' , { entityId})
 .then(response => {
  this.datachart=response.data.DataChart
  this.items=response.data.TableValues
  this.totalRows =response.data.total
  this.datachartTotalizer=response.data.DataChartTotalize
  this.ConsultDateToday =response.data.ConsultDateToday
  this.ConsultDateYesterday = response.data.ConsultDateYesterday
  this.isLoading =  false
 })
}
fetchEntityDetailsValuesDaily()
    
  

 // console.log(this.datachart)
  this.timer = setInterval(() => {
    this.getAPIData()
  }, 300000)//60000//30000
// }).catch(err => {
//   console.log('Error', err)
// })
}
  },
  async created() {
    this.isLoading =  true
    this.items=[]
    this.maxvalue=[]
      this.minvalue=[]
      this.promvalue=[]
      this.datachart= {}
      this.datachartTotalizer= {}
 

  let entityId=this.products.IdEntity

  const fetchEntityDetailsValuesDaily = () => {

store.dispatch('app-bond/fetchEntityDetailsValuesDaily' , { entityId})
 .then(response => {
  this.datachart=response.data.DataChart
  this.items=response.data.TableValues
  this.totalRows =response.data.total
  this.datachartTotalizer=response.data.DataChartTotalize
  this.ConsultDateToday =response.data.ConsultDateToday
  this.ConsultDateYesterday = response.data.ConsultDateYesterday
  this.DeviceID=response.data.Entity
  this.isLoading =  false
   console.log ( response.data)
 })
}
fetchEntityDetailsValuesDaily()
    
  
 
   this.getAPIData()

  },
  setup() {

    const products = ref([])
    const MainGroupOrigin = ref([])
    const IdGroupOrigin = ref([]) 
    const IdEntityOrigin = ref([]) 
    const LevelAccess = ref([])
    const StateAccess = ref([])
    let LocalStorageEntity

const { route } = useRouter()
      
      let productId = route.value.params.slug
      MainGroupOrigin.value=route.value.params.MainGroupOrigin
      IdGroupOrigin.value=route.value.params.IdGroupOrigin
      
      
      if(productId){
        products.value = productId 
        localStorage.setItem('Entitydetails', JSON.stringify(productId))
        IdEntityOrigin.value=route.value.params.slug.IdEntity

      }else{
        LocalStorageEntity=localStorage.getItem('Entitydetails')
            LocalStorageEntity=JSON.parse(LocalStorageEntity)
         

        products.value= LocalStorageEntity
        //IdEntity.value=route.value.params.slug.IdEntity
        IdEntityOrigin.value=LocalStorageEntity.IdEntity
      }
      
      LevelAccess.value= JSON.parse(localStorage.getItem('userData'))
    
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
      IdEntityOrigin
      // UI
      // handleWishlistCartActionClick,
      // removeProductFromWishlistClick,
    }
  },
}
</script>

<style lang="scss">
@import "~@core/scss/base/pages/app-ecommerce.scss";
//@import '@core/scss/vue/libs/vue-flatpicker.scss';
@import '@core/scss/vue/libs/chart-apex.scss';
//@import '@core/scss/vue/libs/vue-wizard.scss';
 // @import '@core/scss/vue/libs/vue-select.scss';
  @import '@core/scss/vue/pages/dashboard-ecommerce.scss';
</style>
