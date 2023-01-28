
<template >
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
        striped
        hover
        responsive
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
</template>

<script>
import {
  BTable, BAvatar, BBadge, BRow, BCol, BFormGroup, BFormSelect, BPagination, BInputGroup, BFormInput, BInputGroupAppend, BButton,
} from 'bootstrap-vue'
import axios from 'axios';
import moment from "moment";


export default {
  components: {
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
    const { data } = await axios.get('https://bet5piq0ak.execute-api.us-west-2.amazonaws.com/tasks',{
})
    let id=0 
  data.body.tasks.forEach(d => {
    const date =moment(d.CreatedAt).format('MM/DD/YYYY-HH:mm');
      const maxvalue = d.MaxVolumen;
      const minvalue = d.MinVolumen;
      const promvalue = d.PromVolumen;
     id++
     this.items.push({ date, maxvalue,minvalue,promvalue,id });
   });
   this.totalRows =  this.items.length
 

  },
  methods: {
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
      //console.log(filteredItems)
    },
  },
}
</script>