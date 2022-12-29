<template>
  <div>

    <!-- Alert: No item found -->
    <b-alert
      variant="danger"
      :show="userData === undefined"
    >
      <h4 class="alert-heading">
        Error fetching user data
      </h4>
      <div class="alert-body">
        No user found with this user id. Check
        <b-link
          class="alert-link"
          :to="{ name: 'apps-users-list'}"
        >
          User Lista
        </b-link>
        for other users.
      </div>
    </b-alert>

    <template v-if="userData">
      <!-- First Row -->
      <b-row>
        <b-col
          cols="12"
          xl="9"
          lg="8"
          md="7"
        >
          <UserViewUserInfoCard :user-data="userData" />
        </b-col>
        <b-col
          cols="12"
          md="5"
          xl="3"
          lg="4"
        >
          

    <b-card-body>
      <ul class="list-unstyled my-1">
        <li>
      
      <b-button
      v-ripple.400="'rgba(255, 255, 255, 0.15)'"
      variant="primary"
      block
      :to="{ name: 'dashboard-analytics2', params: { id: userData.entity } }"
    >
      Real Time Data
    </b-button>
        </li>
        <li class="my-25">
          <!-- <span class="align-middle">10 GB storage</span> -->
        </li>
   
      </ul>
      <b-button
      v-ripple.400="'rgba(255, 255, 255, 0.15)'"
      variant="primary"
      block
      :to="{ name: 'dashboard-analytics', params: { id: userData.entity } }"
    >
      Search Data
    </b-button>
    </b-card-body>
   
        </b-col>
      </b-row>

      <b-row>
        <b-col
          cols="12"
          lg="6"
        >
        <!-- <b-button
      v-ripple.400="'rgba(255, 255, 255, 0.15)'"
      variant="primary"
      :to="{ name: 'dashboard-analytics2', params: { id: userData.entity } }"
    >
      Real time data
    </b-button> -->
      
          <!-- <user-view-user-timeline-card /> -->
        </b-col>
        <b-col
          cols="12"
          lg="6"
        >
          <!-- <user-view-user-permissions-card /> -->
       
        </b-col>
      </b-row>
      <UsersList2 />
    
   
    
    </template>

  </div>
</template>

<script>
import store from '@/store'
import router from '@/router'
import { ref, onUnmounted } from '@vue/composition-api'
import {
  BRow, BCol, BAlert, BLink,BCardBody,BCard,
} from 'bootstrap-vue'
import InvoiceList from '@/views/apps/invoice/invoice-list/InvoiceList.vue'
import userStoreModule from '../userStoreModule'
import UsersList2 from '../users-list/UsersList2.vue'
import datalist2 from '../users-list/datalist.vue'
import UserViewUserInfoCard from './UserViewUserInfoCard.vue'
import UserViewUserPlanCard from './UserViewUserPlanCard.vue'
import UserViewUserTimelineCard from './UserViewUserTimelineCard.vue'
import UserViewUserPermissionsCard from './UserViewUserPermissionsCard.vue'
import { BButton } from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'

export default {
  components: {
    BRow,
    BCol,
    BCard,
    BAlert,
    BLink,
    BButton,
    BCardBody,
    // Local Components
    UserViewUserInfoCard,
    UserViewUserPlanCard,
    UserViewUserTimelineCard,
    UserViewUserPermissionsCard,
    UsersList2,
    InvoiceList,
    datalist2,
  },
  directives: {
    Ripple,
  },
  setup() {
    const userData = ref(null)

    const USER_APP_STORE_MODULE_NAME = 'app-user'

    // Register module
    if (!store.hasModule(USER_APP_STORE_MODULE_NAME)) store.registerModule(USER_APP_STORE_MODULE_NAME, userStoreModule)

    // UnRegister on leave
    onUnmounted(() => {
      if (store.hasModule(USER_APP_STORE_MODULE_NAME)) store.unregisterModule(USER_APP_STORE_MODULE_NAME)
    })
    
    store.dispatch('app-user/fetchUser', { id: router.currentRoute.params.id })
      .then(response => { userData.value = response.data })
      .catch(error => {
        if (error.response.status === 404) {
          userData.value = undefined
        }
      })

    return {
      userData,
    }
  },
}
</script>

<style>

</style>
