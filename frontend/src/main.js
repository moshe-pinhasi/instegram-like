import './services/logger.service'
import './services/error.handler'

import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import './filters'
import './directives'

import './assets/scss/main.scss'

Vue.config.productionTip = false

import {createData} from "../model/data"
createData()

document.body.style['min-height'] = window.innerHeight + "px"

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
