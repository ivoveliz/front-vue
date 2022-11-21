<template>
  <section id="dashboard-analytics2">
    <template>
  <div>

    <h1> Updates: {{updatesCounter}}</h1>
	
    <!-- <form-wizard
      color="#7367F0"
      :title="null"
      :subtitle="null"
      finish-button-text="Submit"
      back-button-text="Previous"
      class="steps-transparent mb-3"
      @on-complete="formSubmitted"
    >
     account detail tab -->
      <!-- <tab-content
        title="Datos del dispositivo"
        icon="feather icon-file-text"
      >
        <b-row>
          <b-col
            cols="12"
            class="mb-2"
          >
            <h5 class="mb-0">
             CONSULTAS DE DISPOSITIVOS
            </h5>
            <small class="text-muted">
              Ingrese valores de consulta
            </small>
          </b-col>
          <b-col md="6">
            <b-form-group
              label="Id dispositivo"
              label-for="i-username"
            >
              <b-form-input v-model="name"
                id="i-username"
                placeholder="Id dispositivo"
              />
            </b-form-group>
          </b-col>
       <b-col md="6">
            <b-form-group
              label="Email"
              label-for="i-email"
            >
              <b-form-input v-model="email"
                id="i-email"
                type="email"
                placeholder="john.doe@email.com"
              />
            </b-form-group>
          </b-col> -->
          <!-- <b-col md="6">
            <b-form-group
              label="Password"
              label-for="i-password"
            >
              <b-form-input v-model="password"
                id="i-password"
                type="password"
                placeholder="Password"
              />
            </b-form-group>
          </b-col> -->
          <!-- <b-col md="6">
            <b-form-group
              label="Confirm Password"
              label-for="i-c-password"
            >
              <b-form-input v-model="cpassword"
                id="i-c-password"
                type="password"
                placeholder="Re-type Password"
              />
            </b-form-group>
          </b-col>  
        </b-row>
      </tab-content> -->

      <!-- personal details -->
      <!-- <tab-content
        title="Personal Info"
        icon="feather icon-user"
      >
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
              label-for="i-first-name"
              label="First Name"
            >
              <b-form-input v-model="firstname"
                id="i-first-name"
                placeholder="John"
              />
            </b-form-group>
          </b-col>
          <b-col md="6">
            <b-form-group
              label="Last Name"
              label-for="i-last-name"
            >
              <b-form-input v-model="lastname"
                id="i-last-name" 
                placeholder="Doe"
              />
            </b-form-group>
          </b-col>
          <b-col md="6">
            <b-form-group
              label="Country"
              label-for="i-country"
            >
              <v-select 
                id="i-country"
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
              label="Language"
              label-for="i-language"
            >
              <v-select
                id="i-language"
                v-model="selectedLanguage"
                :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                :options="languageName"
                :selectable="option => ! option.value.includes('select_value')"
                label="text"
              />
            </b-form-group>
          </b-col>
        </b-row>
      </tab-content> -->

      <!-- address -->
      <!-- <tab-content
        title="Address"
        icon="feather icon-map-pin"
      >
        <b-row>
          <b-col
            cols="12"
            class="mb-2"
          >
            <h5 class="mb-0">
              direccion
            </h5>
            <small class="text-muted">Enter Your Address.</small>
          </b-col>
          <b-col md="6">
            <b-form-group
              label="Address"
              label-for="i-address"
            >
              <b-form-input
                id="i-address"
                placeholder="98 Borough bridge Road, Birmingham"
              />
            </b-form-group>
          </b-col>
          <b-col md="6">
            <b-form-group
              label="Landmark"
              label-for="i-landmark"
            >
              <b-form-input
                id="i-landmark"
                placeholder="Borough bridge"
              />
            </b-form-group>
          </b-col>
          <b-col md="6">
            <b-form-group
              label="Pincode"
              label-for="i-pincode"
            >
              <b-form-input
                id="i-pincode"
                placeholder="658921"
              />
            </b-form-group>
          </b-col>
          <b-col md="6">
            <b-form-group
              label-for="i-city"
              label="City"
            >
              <b-form-input
                id="i-city"
                placeholder="Birmingham"
              />
            </b-form-group>
          </b-col>
        </b-row>
      </tab-content> -->

      <!-- social link -->
      <!-- <tab-content
        title="Social Links"
        icon="feather icon-link"
      >
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
              label-for="i-twitter"
            >
              <b-form-input
                id="i-twitter"
                placeholder="https://twitter.com/abc"
              />
            </b-form-group>
          </b-col>
          <b-col md="6">
            <b-form-group
              label="Facebook"
              label-for="i-facebook"
            >
              <b-form-input
                id="i-facebook"
                placeholder="https://facebook.com/abc"
              />
            </b-form-group>
          </b-col>
          <b-col md="6">
            <b-form-group
              label="Google+"
              label-for="i-google-plus"
            >
              <b-form-input
                id="i-google-plus"
                placeholder="https://plus.google.com/abc"
              />
            </b-form-group>
          </b-col>
          <b-col md="6">
            <b-form-group
              label="LinkedIn"
              label-for="i-linked-in"
            >
              <b-form-input
                id="i-linked-in"
                placeholder="https://linkedin.com/abc"
              />
            </b-form-group>
          </b-col>
        </b-row>
      </tab-content>  
    </form-wizard> -->

  </div>
</template>
    <div class="row mt-5" v-if="!isLoading">
        <div class="col">
          <h1 class="text-center">Aes-Oficina222</h1>
          
        </div>
      </div>

      <div class="row mt-5">
        <div class="col">
          <h1 class="text-center" v-if="isLoading">CARGANDO DATOS...</h1>
        </div>
      </div>

      <div class="row mt-5">
        <div class="col">
          <h1 class="text-center" v-if="isreaload">ACTUALIZANDO DATOS...</h1>
        </div>
      </div>
      <div class="row mt-5">
        <div class="col">
          <h1 class="text-center" v-if="notLoading">NO SE HAN PODIDO CARGAR DATOS, RECARGAR PAGINA...</h1>
        </div>
      </div>
    

    <b-row class="match-height">
      
      <b-col lg="4">
    <div class="row mt-5" v-if=" maxvalue.length > 0">
      <div class="col">
        <h2 class="text-center">voltaje Máximo</h2>
        <line-chart 
          
          :chartData=" maxvalue"
          :options="chartOptions"
          :chartColors=" maxvalueChartColors"
          label= "dB/min"
        />
      </div>
    </div>
      </b-col>
      <b-col lg="4">
          <div class="row mt-5" v-if="minvalue.length > 0">
      <div class="col">
        <h2 class="text-center">voltaje Mínimo</h2>
        <line-chart
          :chartData="minvalue"
          :options="chartOptions"
          :chartColors="minvalueChartColors"
          label="dB/min"
        />
      </div>
    </div>
      </b-col>
      <b-col lg="4">
           
    <div class="row mt-5" v-if="promvalue.length > 0" >
      <div class="col">
        <h2 class="text-center">Promedio de voltaje </h2>
        <line-chart
          
          :chartData="promvalue"
          :options="chartOptions"
          :chartColors="promvalueChartColors"
          label="dB/min"
        />
      </div>
    </div>
      </b-col>
    </b-row>

    
      <b-col cols="12" v-if="!isLoading">
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
    
  </section>
</template>

<script>
import {
  BTable, BAvatar, BBadge, BRow, BCol, BFormGroup, BFormSelect, BPagination, BInputGroup, BFormInput, BInputGroupAppend, BButton,
} from 'bootstrap-vue'
import { FormWizard, TabContent } from 'vue-form-wizard'
import vSelect from 'vue-select'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
import 'vue-form-wizard/dist/vue-form-wizard.min.css'
import axios from 'axios';
import moment from "moment";
import { codeIconInfo } from './code'

import LineChart from "./charts-components/LineChart";
const isreaload=false
const isLoading = true;

import { ref } from 'vue';
 
export default {
  components: {
    vSelect,
    // eslint-disable-next-line vue/no-unused-components
    ToastificationContent,
    FormWizard,
    TabContent,
    LineChart,
    BTable,
    BAvatar,
    BBadge,
    BRow,
    BCol,
    BFormGroup,
    BFormSelect,
    BPagination,
    BInputGroup,
    BFormInput,
    BInputGroupAppend,
    BButton,
  },
  data() {
    return {
      selectedContry: 'select_value',
      selectedLanguage: 'nothing_selected',
      codeIconInfo,
      countryName: [
        { value: 'select_value', text: 'Select Value' },
        { value: 'Russia', text: 'Russia' },
        { value: 'Canada', text: 'Canada' },
        { value: 'China', text: 'China' },
        { value: 'United States', text: 'United States' },
        { value: 'Brazil', text: 'Brazil' },
        { value: 'Australia', text: 'Australia' },
        { value: 'India', text: 'India' },
      ],
      languageName: [
        { value: 'nothing_selected', text: 'Nothing Selected' },
        { value: 'English', text: 'English' },
        { value: 'Chinese', text: 'Mandarin Chinese' },
        { value: 'Hindi', text: 'Hindi' },
        { value: 'Spanish', text: 'Spanish' },
        { value: 'Arabic', text: 'Arabic' },
        { value: 'Malay', text: 'Malay' },
        { value: 'Russian', text: 'Russian' },
      ],
      timer: null,
			updatesCounter: 0,
      chartkey: 0,
      name:"",
      email:"",
      password:"",
      cpassword:"",
      firstname:"",
      lastname:"",
      isLoading,
      isreaload,
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
      status: [{
        1: 'Current', 2: 'Professional', 3: 'Rejected', 4: 'Resigned', 5: 'Applied',
      },
      {
        1: 'light-primary', 2: 'light-success', 3: 'light-danger', 4: 'light-warning', 5: 'light-info',
      }],
      maxvalue: [],
      maxvalueChartColors: {
        borderColor: "#077187",
        pointBorderColor: "#0E1428",
        pointBackgroundColor: "#AFD6AC",
        backgroundColor: "#74A57F"
      },
      minvalue: [],
      minvalueChartColors: {
        borderColor: "#784F41",
        pointBorderColor: "#784F41",
        pointBackgroundColor: "#BBE5ED",
        backgroundColor: "#BBE5ED"
      },
      promvalue: [],
      promvalueChartColors: {
        borderColor: "#190B28",
        pointBorderColor: "#190B28",
        pointBackgroundColor: "#E55381",
        backgroundColor: "#E55381"
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false
      }
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
  async created() {
    this.items=[]
      this.maxvalue=[]
      this.minvalue=[]
      this.promvalue=[]
    console.log(this.name)
    this.isLoading =  true
    this.notLoading=false
    
    const { data } = await axios.get('https://n0kxap62th.execute-api.us-west-2.amazonaws.com/tasks',{
      params: {
          "nombre":this.name
  }
})
//console.log(data.body)
    let id=0 
  data.body.tasks.forEach(d => {
    const date =moment(d.CreatedAt).format('MM/DD/YYYY-HH:mm');
      const maxvalue = d.MaxVolumen;
      const minvalue = d.MinVolumen;
      const promvalue = d.PromVolumen;
      
     id++
     this.maxvalue.push({ date, total: maxvalue});
      this.minvalue.push({ date, total: minvalue });
      this.promvalue.push({ date, total: promvalue });
     this.items.push({ date, maxvalue,minvalue,promvalue,id });
   });
   this.totalRows =  this.items.length
   let verificador= this.items.length
   if(verificador>0){
    this.isLoading =  false
   }else{
    this.notLoading=true
   }
   
   this.getAPIData()

  },
  methods: {

    async formSubmitted() {

      this.isLoading =  true
      this.notLoading=false
      this.chartkey += 1;
      this.items=[]
      this.maxvalue=[]
      this.minvalue=[]
      this.promvalue=[]
      console.log(this.name)
      const  data1  = await axios.get('https://n0kxap62th.execute-api.us-west-2.amazonaws.com/tasks',{
      params: {
          "nombre":this.name
  }
})
 
console.log(data1.data)
let id=0 

data1.data.body.tasks.forEach(d => {
    const date =moment(d.CreatedAt).format('MM/DD/YYYY-HH:mm');
      const maxvalue = d.MaxVolumen;
      const minvalue = d.MinVolumen;
      const promvalue = d.PromVolumen;
      
     id++
     this.maxvalue.push({ date, total: maxvalue});
      this.minvalue.push({ date, total: minvalue });
      this.promvalue.push({ date, total: promvalue });
     this.items.push({ date, maxvalue,minvalue,promvalue,id });
   });
   this.totalRows =  this.items.length
   let verificador= this.items.length
   if(verificador>0){
    this.isLoading =  false
   }else{
    this.notLoading=true
   }
      this.$toast({
        component: ToastificationContent,
        props: {
          title: 'Consulta realizada',
          icon: 'EditIcon',
          variant: 'success',
       
        },
      })
    },

    
    info(item, index, button) {
      
      this.infoModal.title = `Row index: ${index}`
      this.infoModal.content = JSON.stringify(item, null, 2)
      this.$root.$emit('bv::show::modal', this.infoModal.id, button)
    },
    resetInfoModal() {
      this.infoModal.title = ''
      this.infoModal.content = ''
    },
     
    onFiltered(filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      
      this.currentPage = 1
     
      const datef = filteredItems[0].date
      const maxvaluef= filteredItems[0].Maxvalue
      const minvaluef=filteredItems[0].Minvalue
      const promvaluef=filteredItems[0].PromVolumen
      this.maxvalue.push({ datef, total: maxvaluef});
      this.minvalue.push({ datef, total: minvaluef });
      this.promvalue.push({ datef, total: promvaluef });

    },
    getAPIData () {

      this.isLoading =  true
      this.notLoading=false
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

res.data.body.tasks.forEach(d => {
    const date =moment(d.CreatedAt).format('MM/DD/YYYY-HH:mm');
      const maxvalue = d.MaxVolumen;
      const minvalue = d.MinVolumen;
      const promvalue = d.PromVolumen;
      
     id++
     this.maxvalue.push({ date, total: maxvalue});
      this.minvalue.push({ date, total: minvalue });
      this.promvalue.push({ date, total: promvalue });
     this.items.push({ date, maxvalue,minvalue,promvalue,id });
   });
   this.totalRows =  this.items.length
   let verificador= this.items.length
   if(verificador>0){
    this.isLoading =  false
   }else{
    this.notLoading=true
   }
				this.updatesCounter++
				this.timer = setInterval(() => {
					this.getAPIData()
				}, 5000)
			}).catch(err => {
				console.log('Error', err)
			})
		}
 
	},
  
}
 
</script>