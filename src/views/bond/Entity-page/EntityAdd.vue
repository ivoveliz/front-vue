<template>
  <section class="app-ecommerce-details">
    <b-row class="match-height">
      <b-col 
 cols="6"
            >
        <form-wizard
      color="#7367F0"
      :title="null"
      :subtitle="null"
      layout=""
      finish-button-text="Agregar grupo principal"
      back-button-text="Previous"
      class="wizard-vertical mb-3"
      @on-complete="formSubmitted"
      
    >

    
      <tab-content title='AGREGAR ENTIDAD'
      icon="DownloadCloudIcon icon-file-text" >
        <b-row>
     
   
     <b-col md="7">
       <!----------------- Media ------------------------->
    <b-media class="mb-2">
      <template #aside>
        <b-avatar
          ref="previewEl"
          :src="avatar"
          
           
           
          size="150px"
          rounded
        />
      </template>
      <h4 class="mb-1">
       Agregar Imagen de grupo principal
      </h4>
      <div class="d-flex flex-wrap">
        <b-button
          variant="primary"
          @click="$refs.refInputEl.click()"
        >
          <input
            ref="refInputEl"
            type="file"
            class="d-none"
            @input="inputImageRenderer"
          >
          <span class="d-none d-sm-inline">Cargar imagen</span>
          <feather-icon
            icon="EditIcon"
            class="d-inline d-sm-none"
          />
        </b-button>
        <!-- <b-button
          variant="outline-secondary"
          class="ml-1"
        >
          <span class="d-none d-sm-inline">Remove</span>
          <feather-icon
            icon="TrashIcon"
            class="d-inline d-sm-none"
          />
        </b-button> -->
      </div>
    </b-media>
  </b-col>
    <!-- nombre grupo principal-->
    <b-col md="7">
      <h5 class="mb-0">
             GRUPO PRINCIPAL:{{MainGroupOrigin}}
            </h5>
          </b-col>
          <hr class="invoice-spacing"> 
           <!--  Origen Entidad -->
          <b-col md="7">
            INGRESE ORIGEN ENTIDAD:
            <b-form-group
              label=" "
              label-for="i-username"
            >
              <b-form-input v-model="OriginEntity"
                id="DownlinkMessage"
                placeholder="INGRESE ORIGEN ENTIDAD:"
              />
            </b-form-group>
          </b-col>
            <!-- INGRESE DESTINO ENTIDAD -->
            <b-col md="7">
              INGRESE DESTINO ENTIDAD:
            <b-form-group
              label=" "
              label-for="i-username"
            >
              <b-form-input v-model="DestinyEntity"
                id="codigogrupo"
                placeholder="INGRESE DESTINO ENTIDAD:"
              />
            </b-form-group>
          </b-col>
          <hr class="invoice-spacing"> 
            <!-- INGRESE CODIGO ENTIDAD -->
            <b-col md="7">
              INGRESE CODIGO ENTIDAD :
            <b-form-group
              label=" "
              label-for="i-username"
            >
              <b-form-input v-model="IdEntity"
                id="codigogrupo"
                placeholder="INGRESE CODIGO ENTIDAD :"
              />
            </b-form-group>
          </b-col>
          <hr class="invoice-spacing"> 
          <!-- Agregar Entidades-->
          <!-- <b-col md="8">
           AGREGAR dISPOSITIVOS A ENTIDAD:
         <b-card-body class="invoice-padding form-item-section">
              <div
                ref="form"
                class="repeater-form"
                :style="{height: trHeight}"
              >
                <b-row
                  v-for="(item, index) in invoiceData.items"
                  :key="index"
                  ref="row"
                  class="pb-2"
                >

               
                
                  <b-col cols="16">

                   
                    <div class="d-none d-lg-flex">
                      <b-row class="flex-grow-1 px-1">
                    
                      </b-row>
                      <div class="form-item-action-col" />
                    </div>

                  
                    <div class="d-flex border rounded">
                      <b-row class="flex-grow-1 p-2">

                        <b-col
                          cols="12"
                        >
                     
                        INGRESE ORIGEN ENTIDAD:
                      
                          <b-form-input
                            v-model="item.OriginEntity"
                            
                            placeholder="INGRESE ORIGEN ENTIDAD"
                            class="mb-2"
                          />
                        </b-col>
                        <hr class="invoice-spacing"> 
                 
                        <b-col
                          cols="12"
                        >
                      
                        INGRESE DESTINO ENTIDAD:
                   
                          <b-form-input
                            v-model="item.DestinyEntity"
                            placeholder=" INGRESE DESTINO ENTIDAD"
                            class="mb-2"
                          />
                        </b-col>
                        <hr class="invoice-spacing"> 
                 
                        <b-col
                          cols="12"
                        >
                      
                        INGRESE ID ENTIDAD:
                   
                          <b-form-input
                            v-model="item.IdEntity"
                            placeholder=" INGRESE DESTINO ENTIDAD"
                            class="mb-2"
                          />
                        </b-col>
                        <hr class="invoice-spacing"> 
                  
                    <b-col
                      cols="12"
                    >
                    INGRESE FUNCION ENTIDAD:
                      <b-form-input
                        v-model="item.Function"
                        placeholder=" INGRESE FUNCION ENTIDAD"
                        class="mb-2"
                      />
                    </b-col>

                    <hr class="invoice-spacing"> 
                    
                    <b-col
                      cols="12"
                    >
                    INGRESE UBICACION:
                      <b-form-input
                        v-model="item.Ubication"
                        placeholder=" INGRESE UBICACION"
                        class="mb-2"
                      />
                    </b-col>
                      </b-row>
                      <div class="d-flex flex-column justify-content-between border-left py-50 px-25">
                        <feather-icon
                          size="16"
                          icon="XIcon"
                          class="cursor-pointer"
                          @click="removeItem(index)"
                        />
                       

                  
                      </div>
                    </div>
                  </b-col>
                </b-row>
              </div>
              <b-button
              
                size="sm"
                variant="primary"
                @click="addNewItemInItemForm"
              >
                AGREGAR MAS ENTIDADES
              </b-button>
            </b-card-body>
          </b-col> -->
        </b-row>
      </tab-content>

    </form-wizard>

    

  </b-col>

    </b-row>
 
  </section>

</template>

<script>
import {
  BTable,BRow, BCard, BCardBody, BImg, BCardText,
  BLink, BButton,BCol, BFormGroup, BFormSelect,BMedia, BAvatar, 
  BPagination, BInputGroup, BFormInput, BInputGroupAppend,
BCardHeader,  BCardTitle, BCardSubTitle, BButtonGroup, BFormTextarea,
  
} from 'bootstrap-vue'
import 'vue-form-wizard/dist/vue-form-wizard.min.css'
import { useRouter } from '@core/utils/utils'
import store from '@/store'
import { FormWizard, TabContent } from 'vue-form-wizard'
import { ref } from '@vue/composition-api'
import flatPickr from 'vue-flatpickr-component'
import vSelect from 'vue-select'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
import { heightTransition } from '@core/mixins/ui/transition'
import { useInputImageRenderer } from '@core/comp-functions/forms/form-utils'

export default {
  components: {
    BRow,BCol,BCard, BCardBody, BImg, BCardText, BLink, BButton,
   flatPickr,BTable,  BFormGroup, BFormTextarea,
    BFormSelect,BPagination,BInputGroup,BFormInput,
    BInputGroupAppend,FormWizard,TabContent,BMedia, BAvatar,
    BCardHeader,BCardTitle, BButtonGroup,ToastificationContent,vSelect,
  },
  data() {
    return {
      
      data: {},
      OriginEntity:"",
      DestinyEntity:"",
      IdEntity:"",
      IdGroup:"",
      NamePrimaryGroup:"",
      DeviceID:"endev",
      rangePicker:"",
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
     
      items: [],
      datachart: {},
      datachartTotalizer: {},
      ConsultDateToday: "",
      ConsultDateYesterday: "",
      

    }
  },
  // props: {
  //   userData: {
  //     type: Object,
  //     required: true,
  //   },
  // },
  mixins: [heightTransition],
  mounted() {
    this.initTrHeight()
  },
  created() {
    window.addEventListener('resize', this.initTrHeight)
  },
  destroyed() {
    window.removeEventListener('resize', this.initTrHeight)
  },
  methods: {
    async formSubmitted() {
      //console.log( this.rangePicker)
   
     
      let AddEntity = {
        avatarEntity:this.avatar,
        IdEntity:this.IdEntity,
        DestinyEntity:this.DestinyEntity,
        OriginEntity:this.OriginEntity,
        IdGroupOrigin:this.IdGroupOrigin,
        MainGroupOrigin:this. MainGroupOrigin

    }
      //console.log(AddEntity)
      const fetchAddEntity = () => {
      
store.dispatch('app-bond/fetchAddEntity' , { AddEntity})
 .then(response => {
 
  //console.log(response.data.StateEntity)
  if(response.data.StateEntity=="Exists"){

    this.$toast({
  component: ToastificationContent,
  props: {
    title: 'Grupo ya existe',
    icon: 'EditIcon',
    variant: 'warning',
 
  },
})
  }

 else{
    this.$toast({
  component: ToastificationContent,
  props: {
    title: 'Documento generado con exito',
    icon: 'EditIcon',
    variant: 'success',
 
  },
})
this.$router.push({ name: 'bond-Main-page'})
  }

 })
}
 
    
fetchAddEntity()
 
//this.$router.push({ name: 'bond-Main-page'})
 

},
addNewItemInItemForm() {
      this.$refs.form.style.overflow = 'hidden'
      this.invoiceData.items.push(JSON.parse(JSON.stringify(this.itemFormBlankItem)))

      this.$nextTick(() => {
        this.trAddHeight(this.$refs.row[0].offsetHeight)
        setTimeout(() => {
          this.$refs.form.style.overflow = null
        }, 350)
      })
    },
    removeItem(index) {
      this.invoiceData.items.splice(index, 1)
      this.trTrimHeight(this.$refs.row[0].offsetHeight)
    },
    initTrHeight() {
      this.trSetHeight(null)
      this.$nextTick(() => {
        this.trSetHeight(this.$refs.form.scrollHeight)
      })
    },
  },
  setup(props) {
    // const userData = ref(null)

    const clients = ref([])
 

    const itemFormBlankItem = {
      OriginEntity: "",
      DestinyEntity: "",
      IdEntity: "",
      Function: "",
      Ubication: "", 
    }

    const invoiceData = ref({
      id: 5037,
      client: null,

      // ? Set single Item in form for adding data
      items: [JSON.parse(JSON.stringify(itemFormBlankItem))],

      salesPerson: '',
      note: 'It was a pleasure working with you and your team. We hope you will keep us in mind for future freelance projects. Thank You!',
      paymentMethod: null,
    })

    const itemsOptions = [
      {
        itemTitle: 'App Design',
        cost: 24,
        qty: 1,
        description: 'Designed UI kit & app pages.',
      },
      {
        itemTitle: 'App Customization',
        cost: 26,
        qty: 1,
        description: 'Customization & Bug Fixes.',
      },
      {
        itemTitle: 'ABC Template',
        cost: 28,
        qty: 1,
        description: 'Bootstrap 4 admin template.',
      },
      {
        itemTitle: 'App Development',
        cost: 32,
        qty: 1,
        description: 'Native App Development.',
      },
    ]
    const refInputEl = ref(null)
    const previewEl = ref(null)
    const avatar  =  ref([])
    const products = ref([])
    const MainGroupOrigin = ref([])
    const IdGroupOrigin = ref([]) 
    const { route } = useRouter()
      
    IdGroupOrigin.value = route.value.params.IdGroupOrigin
    MainGroupOrigin.value = route.value.params.MainGroupOrigin
     
       
    const { inputImageRenderer } = useInputImageRenderer(refInputEl, base64 => {
      // eslint-disable-next-line no-param-reassign
      
     avatar.value = base64
     
    })
    const updateItemForm = (index, val) => {
      const { cost, qty, description } = val
      invoiceData.value.items[index].cost = cost
      invoiceData.value.items[index].qty = qty
      invoiceData.value.items[index].description = description
    }

    const paymentMethods = [
      'Bank Account',
      'PayPal',
      'UPI Transfer',
    ]
 
    return {
      invoiceData,
      clients,
      itemsOptions,
      updateItemForm,
      itemFormBlankItem,
      paymentMethods,
      inputImageRenderer,
      refInputEl,
      previewEl,
      avatar,
       products,
       IdGroupOrigin,
       MainGroupOrigin
      
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

