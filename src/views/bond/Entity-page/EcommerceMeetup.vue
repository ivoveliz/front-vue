<template>
  <b-card
    v-if="data"
    no-body
    class="card-developer-meetup"
  >
  <!-- <b-form-datepicker id="example-datepicker" ></b-form-datepicker>
            <b-form-input :id="`type-time`" :type="'time'"   ></b-form-input> -->
    <b-card-body>
      <!-- metting header -->
      <div class="meetup-header d-flex align-items-right">
        <div class="meetup-day">
          <h6 class="mb-0">
            <div class="item-img text-left">
      <b-img
      :src="data.ImageEntity"
        alt="Meeting Pic"
        height="170"
      />
    </div>
          </h6>
          
        </div>
        <div class="my-auto">
          <b-card-text class="item-name">
           Origen Entidad :  {{data.OriginEntity}}
          </b-card-text >
          <b-card-text  class="item-name">
            Destino Entidad:  {{ data.DestinyEntity}}
          </b-card-text >
          <!-- <b-card-text  class="item-name">
            Funcion:  {{ data.Function}}
          </b-card-text >
          <b-card-text  class="item-name">
            Ubicacion:  {{ data.Ubication}}
          </b-card-text >
          <b-card-text  class="item-name">
            N° Serie  {{ data.NSerie}}
          </b-card-text >
          <b-card-text  class="item-name">
           TAG:  {{ data.TAG}}
          </b-card-text >
          <b-card-text  class="item-name">
            Observacion:  {{ data.Observation}}
          </b-card-text >
          <b-card-text  class="item-name">
            Sub-Area:  {{ data.SubArea}}
          </b-card-text >
          <b-card-text  class="item-name">
            Area:  {{ data.Area}}
          </b-card-text > -->
      
        </div>
      </div>
      <!--/ metting header -->

      

 

    </b-card-body>
  </b-card>
</template>

<script>
import {
  BCard, BImg, BCardBody, BCardText, BCardTitle, BMedia, BMediaAside, BAvatar, BAvatarGroup, VBTooltip, BMediaBody,
} from 'bootstrap-vue'

export default {
  components: {
    BCard,
    BImg,
    BCardBody,
    BCardText,
    BCardTitle,
    BMedia,
    BMediaAside,
    BAvatar,
    BAvatarGroup,
    BMediaBody,
  },
  directives: {
    'b-tooltip': VBTooltip,
  },
  props: {
    data: {
      type: Object,
      default: () => {},
    },
  },
}
</script>
