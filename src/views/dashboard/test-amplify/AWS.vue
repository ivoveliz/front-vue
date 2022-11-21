<template>
  <section id="dashboard-test">
    <div>
      <div v-if="authState !== 'signedin'">
        You are signed out.
      </div>
      <amplify-authenticator>
        <div v-if="authState === 'signedin' && user">
          <div>Hello, {{ user.username }}</div>
          <!--<button
            class="btn btn-primary mt-1"
            @click="suscribePubSub()"
          >
            Suscribe
          </button>-->
          <amplify-sign-out class="float-right" />
        </div>
        <b-card
          text-variant="center"
          class="card mt-4"
        >
          <b-card-text>
            <div><h3>Payload Decoded</h3><pre>
              {{ data.value !== undefined ? data.value.output.payloadDecoded : 'no-data' }}
            </pre>
            </div>
            <div><h3>Payload undecoded</h3><pre>
              {{ data.value !== undefined ? data.value.output.PayloadData : 'no-data' }}
            </pre>
            </div>
            <div><h3>WirelessDeviceId</h3><pre>
              {{ data.value !== undefined ? data.value.output.WirelessDeviceId : 'no-data' }}
            </pre>
            </div>
            <div><h3>WirelessMetadata</h3><pre>
              {{ data.value !== undefined ? data.value.output.WirelessMetadata : 'no-data' }}
            </pre>
            </div>
          </b-card-text>
        </b-card>
      </amplify-authenticator>
    </div>
  </section>
</template>

<script>
import Vue from 'vue'
import { Amplify, PubSub, Auth } from 'aws-amplify'
// eslint-disable-next-line import/no-cycle
import { kFormatter } from '@core/utils/filter'
// eslint-disable-next-line import/no-extraneous-dependencies
import { AWSIoTProvider } from '@aws-amplify/pubsub'
import { onAuthUIStateChange } from '@aws-amplify/ui-components'
import {
  applyPolyfills,
  defineCustomElements,
} from '@aws-amplify/ui-components/loader'
// import awsExports from '../../../aws-exports'

export default {
  data() {
    return {
      data: {},
      user: undefined,
      authState: undefined,
      unsubscribeAuth: undefined,
    }
  },
  beforeDestroy() {
    this.unsubscribeAuth()
  },
  created() {
    this.unsubscribeAuth = onAuthUIStateChange((authState, authData) => {
      this.authState = authState
      this.user = authData
    })

    console.log('Configure')
    // Amplify.configure(awsExports)

    applyPolyfills().then(() => {
      defineCustomElements(window)
    })

    Vue.config.ignoredElements = [/amplify-\w*/]
    // Apply plugin with configuration
    Auth.currentCredentials()
      .then(info => {
        const cognitoIdentityId = info.identityId
        console.log(`cognitoIdentityId: ${cognitoIdentityId}`)
        console.log('SubMqtt')
        Amplify.addPluggable(new AWSIoTProvider({
          aws_pubsub_region: 'us-west-2',
          aws_pubsub_endpoint: 'wss://a2cg1ph54az12-ats.iot.us-west-2.amazonaws.com/mqtt',
        }))
        this.suscribePubSub()
      })
      .catch(err => {
        console.log('auth current', err)
      })
  },
  mounted() {
    // this.suscribePubSub()
  },
  methods: {
    kFormatter,
    subscribeToTopic() {
      PubSub.subscribe('uplink_decoded').subscribe({
        next: data => this.ProcessMessage(data),
        error: error => console.error(error),
        close: () => console.log('Done'),
      })
    },
    ProcessMessage(payload) {
      console.log('Message received', payload)
      this.data = payload
    },
    suscribePubSub() {
      console.log('suscribePubSub')
      PubSub.subscribe('uplink_decoded').subscribe({
        next: data => this.ProcessMessage(data),
        error: error => console.error(error),
        complete: () => console.log('Done'),
      })
    },
  },
}
</script>
