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

 <b-col 
 cols="6"
            >
        <form-wizard
      color="#28C76F"
      :title="null"
      :subtitle="null"
      layout=""
      finish-button-text="Descargar Informe"
      back-button-text="Previous"
      class="wizard-vertical mb-3"
      @on-complete="formSubmitted"
    >

    
      <tab-content title="DESCARGA DE INFORMACION PERSONALIZADA"
      icon="DownloadCloudIcon icon-file-text" >
        <b-row>
          <b-col :data="products"
            cols="12"
            class="mb-2"
            
          >
          
          <h5 class="mb-0">
             Nombre dispositivo :{{products.NameDevice}}
            </h5>
            <small class="text-muted">
              -
            </small>
            <h5 class="mb-1">
              ID dispositivo:{{products.IdDevice}}
            </h5>
            
            
          </b-col>
          <!-- <b-col md="7">
            <b-form-group
        label="Entidad"
        label-for="readOnlyInput"
      >
        <b-form-input 
         v-model="DeviceID"
          id="readOnlyInput"
          value="You can't update me :P"
          readonly
        />
      </b-form-group>
          </b-col> -->
          <b-col md="7">
          <v-select
                id="SelectedFormat"
                v-model="SelectedFormat"
                :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                :options="Format"
                :selectable="option => ! option.value.includes('select_value')"
                label="text"
              />
              <small class="text-muted">
              -
            </small>
            </b-col>
          <b-col md="7">
            <flat-pickr 
              
              v-model="rangePicker"
              :config="{inline:false, mode: 'range',enableTime: true,dateFormat: 'Y-m-d H:i'}"
              class="form-control"
              placeholder="Ingrese Rango de fecha y hora"
              
            />
            
          </b-col>
        
        </b-row>
      </tab-content>

    </form-wizard>

    

  </b-col>
</b-row>
   <!-- GRAFICO VALOR INSTANTANEIO-->
   <b-col cols="12"
            >
            <b-card  >
              <b-card-header>
      <!-- title and legend -->
      <h4 class="card-title mb-50">
       Datos Instantaneos
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
    <h4 class="card-title mb-50">
      Fecha desde : {{ConsultDateYesterday}} - Fechashasta : {{ConsultDateToday}}
      </h4>
    
  </b-card>

      <!-- <ecommerce-profit-chart :data="datachart" /> -->
    </b-col>
<!-- GRAFICO VALOR TOTALIZADOR-->
    <b-col cols="12"
            >
            <b-card  >
    <b-card-header>
      <!-- title and subtitle -->
      <div>
        <b-card-title class="mb-1">
          totalizador 
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
<h4 class="card-title mb-50">
    DOWNLINKS
      </h4>

<b-row class="match-height">
    <!-- TABLA DOWNLINK-->
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
        v-model="perPageDownlink"
        size="sm"
        :options="pageOptionsDownlink"
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
          v-model="sortByDownlink"
          :options="sortOptionsDownlink"
          class="w-75"
        >
          <template v-slot:first>
            <option value="">
              -- item --
            </option>
          </template>
        </b-form-select>
        <b-form-select
          v-model="sortDescDownlink"
          size="sm"
          :disabled="!sortByDownlink"
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
          v-model="filterDownlink"
          type="search"
          placeholder="Filtrar"
        />
        <b-input-group-append>
          <b-button
            :disabled="!filterDownlink"
            @click="filterDownlink = ''"
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
      :key="chartkeyDownlink" 
      :per-page="perPageDownlink"
      :current-page="currentPageDownlink"
      :items="itemsDownlink"
      :fields="fieldsDownlink"
      :sort-by.sync="sortByDownlink"
      :sort-desc.sync="sortDescDownlink"
      :sort-direction="sortDirectionDownlink"
      :filter="filterDownlink"
      :filter-included-fields="filterOnDownlink"
 
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
      v-model="currentPageDownlink"
      :total-rows="totalRowsDownlink"
      :per-page="perPageDownlink"
      align="center"
      size="sm"
      class="my-0"
    />
  </b-col>
</b-row>
      </b-col>
</b-col>
  <!-- Dowlink-->
  <b-col 
 cols="6"
            >
        <form-wizard
      color="#7367F0"
      :title="null"
      :subtitle="null"
      layout=""
      finish-button-text="Enviar Downlink"
      back-button-text="Previous"
      class="wizard-vertical mb-3"
      @on-complete="DownlinkSubmitted"
    >

    
      <tab-content title="ENVIO DOWNLINK"
      icon="DownloadCloudIcon icon-file-text" >
        <b-row>
          <b-col :data="products"
            cols="12"
            class="mb-2"
          >
          <h5 class="mb-0">
             Nombre dispositivo :{{products.NameDevice}}
            </h5>
            <small class="text-muted">
              -
            </small>
            <h5 class="mb-1">
              ID dispositivo:{{products.IdDevice}}
            </h5>
            
            
          </b-col>
          <b-col md="7">
            <b-form-group
              label=" "
              label-for="i-username"
            >
              <b-form-input v-model="DownlinkMessage"
                id="DownlinkMessage"
                placeholder=" iNGRESE MENSAJE"
              />
            </b-form-group>
          </b-col>
          <b-col md="7">
          <!-- <v-select
                id="SelectedFormat"
                v-model="SelectedFormat"
                :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                :options="Format"
                :selectable="option => ! option.value.includes('select_value')"
                label="text"
              /> -->
              <small class="text-muted">
              -
            </small>
            </b-col>
          <b-col md="7">
            <!-- <flat-pickr 
              
              v-model="rangePicker"
              :config="{inline:false, mode: 'range',enableTime: true,dateFormat: 'Y-m-d H:i'}"
              class="form-control"
              placeholder="Ingrese Rango de fecha y hora"
              
            /> -->
            
          </b-col>
        
        </b-row>
      </tab-content>

    </form-wizard>

    

  </b-col>
</b-row>
  </section>
</template>

<script>
import { useRouter } from '@core/utils/utils'
import {
  BTable,BRow, BCard, BCardBody, BImg, BCardText,
  BLink, BButton,BCol, BFormGroup, BFormSelect, 
  BPagination, BInputGroup, BFormInput, BInputGroupAppend,
BCardHeader,  BCardTitle, BCardSubTitle, BButtonGroup,
  
} from 'bootstrap-vue'
import store from '@/store'
import { FormWizard, TabContent } from 'vue-form-wizard'
import { ref } from '@vue/composition-api'
import vSelect from 'vue-select'
import { useEcommerce, useEcommerceUi } from '../usebondModule'
import ApexLineAreaChart from './apex-chart/ApexLineAreaChart.vue'
import flatPickr from 'vue-flatpickr-component'
import 'vue-form-wizard/dist/vue-form-wizard.min.css'
import EcommerceMeetup from './EcommerceMeetup.vue'
import TableKitchenSink from './TableKitchenSink.vue'
import EcommerceProfitChart from './EcommerceProfitChart.vue'
import apexChatData from './apexChartData'
import VueApexCharts from 'vue-apexcharts'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
import jspdf from 'jspdf'
import 'jspdf-autotable'
import xlsx from "json-as-xlsx"


export default {
  components: {
    BRow,BCol,BCard, BCardBody, BImg, BCardText, BLink, BButton,
    ApexLineAreaChart, flatPickr,BTable,  BFormGroup,
    BFormSelect,BPagination,BInputGroup,BFormInput,
    BInputGroupAppend,FormWizard,TabContent,EcommerceMeetup,
    TableKitchenSink,EcommerceProfitChart, BCardHeader,vSelect,
    BCardTitle,VueApexCharts, BButtonGroup,ToastificationContent,
  },
  data() {
    return {
      apexChatData,
      data: {},
      DeviceID:"endev",
      DownlinkMessage:"",
      rangePicker:"",
      SelectedFormat:"",
      chartkeyDownlink: 0,
      chartkey: 0,
      perPage: 5,
      perPageDownlink: 5,
      pageOptions: [5, 10,20,60,100,200,500],
      pageOptionsDownlink: [5, 10,20,60,100,200,500],
      totalRows: 1,
      totalRowsDownlink: 1,
      currentPage: 1,
      currentPageDownlink: 1,
      sortBy: 'date',
      sortDesc: true,
      sortDirection: 'desc',
      sortByDownlink: 'date',
      sortDescDownlink: true,
      sortDirectionDownlink: 'desc',
      filter: null,
      filterOn: [],
      filterDownlink: null,
      filterOnDownlink: [],
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
        {
         key: 'count', label: 'Id', sortable: true 
        },
        {
          key: 'date', label: 'Fecha dato', sortable: true },
        { key: 'ValueDecodeInstant', label: 'Valor Instaneo m3/h', sortable: true },
        { key: 'ValueDecodeTote', label: 'Valor totalizador m3/h', sortable: true },
         
      
      ],
      fieldsDownlink: [
        {
         key: 'countD', label: 'Id', sortable: true 
        },
        {
          key: 'date', label: 'Fecha dato', sortable: true },
        { key: 'payloadHex', label: 'Valor Payload Hex', sortable: true },
        { key: 'VertionFirmware', label: 'Vertion Firmware', sortable: true },
        { key: 'State', label: 'State', sortable: true },
         
      
      ],
      items: [],
      itemsDownlink:[],
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
        show: true,
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
    sortOptionsDownlink() {
      // Create an options list from our fields
      return this.fields
        .filter(f => f.sortable)
        .map(f => ({ text: f.label, value: f.key }))
    },
   
  },
  methods: {
    async formSubmitted() {
      //console.log( this.rangePicker)
      let xlsx = require("json-as-xlsx")
      let deviceId = {
        Device:this.DeviceID,
      RangeDate:this.rangePicker
    }
      console.log(deviceId)
      const fetchDeviceDetailsValuesDaily = () => {
        let xlsx = require("json-as-xlsx")
store.dispatch('app-bond/fetchDeviceDetailsValuesExport' , { deviceId})
 .then(response => {
  var ConsultDate=response.data.DateConsult
  console.log(response.data )
  console.log(this.SelectedFormat.value)
  let format = this.SelectedFormat.value
  
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
fetchDeviceDetailsValuesDaily()

// var head = [['ID', 'Fecha dato', 'Valor Instantaneo m3/h', 'Valor totalizador m3/h']]
// let doc = new jspdf()
//       doc.text("hello world",10,10)
//       doc.save("output.pdf")

},
async DownlinkSubmitted() {
       
       
      let deviceId = {
        Device:this.DeviceID,
        DownlinkMessage:this.DownlinkMessage
    }
      console.log(deviceId)
const fetchDeviceDownlink = () => {
        
store.dispatch('app-bond/fetchDeviceDownlink' , { deviceId})
 .then(response => {
 console.log(response)
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
fetchDeviceDownlink()

 

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

      let deviceId=this.products.NameDevice
console.log(deviceId)
const fetchDeviceDetailsValuesDaily = () => {

store.dispatch('app-bond/fetchDeviceDetailsValuesDaily' , {deviceId})
 .then(response => {
  this.datachart=response.data.DataChart
  this.items=response.data.TableValues
  this.itemsDownlink=response.data.TableValuesDownlinks
  this.totalRows =response.data.total
  this.totalRowsDownlink =response.data.totalD
  this.datachartTotalizer=response.data.DataChartTotalize
  this.ConsultDateToday =response.data.ConsultDateToday
  this.ConsultDateYesterday = response.data.ConsultDateYesterday
   
 })
}
fetchDeviceDetailsValuesDaily()
    
  

 // console.log(this.datachart)
  this.timer = setInterval(() => {
    this.getAPIData()
  }, 90000)//60000//30000
// }).catch(err => {
//   console.log('Error', err)
// })
}
  },
  async created() {
   
    this.items=[]
    this.maxvalue=[]
      this.minvalue=[]
      this.promvalue=[]
      this.datachart= {}
      this.datachartTotalizer= {}
 

  let deviceId=this.products.NameDevice

  const fetchDeviceDetailsValuesDaily = () => {

store.dispatch('app-bond/fetchDeviceDetailsValuesDaily' , { deviceId})
 .then(response => {
  this.datachart=response.data.DataChart
  this.items=response.data.TableValues
  this.totalRows =response.data.total
  this.datachartTotalizer=response.data.DataChartTotalize
  this.ConsultDateToday =response.data.ConsultDateToday
  this.ConsultDateYesterday = response.data.ConsultDateYesterday
  this.DeviceID=response.data.deviceid
   console.log ( response.data)
 })
}
fetchDeviceDetailsValuesDaily()
    
  
   
   this.getAPIData()

  },
  setup() {
    const products = ref([])
    let LocalStorageEntity

const { route } = useRouter()
      
      let productId = route.value.params.slug
     
      if(productId){
        products.value = productId 
        localStorage.setItem('DeviceDetails', JSON.stringify(productId))


      }else{
        LocalStorageEntity=localStorage.getItem('DeviceDetails')
            LocalStorageEntity=JSON.parse(LocalStorageEntity)
          console.log( LocalStorageEntity)

        products.value= LocalStorageEntity
        //products=JSON.parse(products)
      }

    

    return {
      products,
       
 
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