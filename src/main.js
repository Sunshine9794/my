import Vue from 'vue'
import App from './App'
import router from './router'
import axios from  'axios'
import fastClick from 'fastclick'
import VueLazyload from 'vue-lazyload'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import './commonality/scss/commonality.scss'
Vue.use(VueLazyload)
Vue.config.productionTip = false
Vue.use(MintUI)
Vue.use(VueLazyload, {
  loading: require('./commonality/image/default.png')
})

Vue.prototype.$http = axios
fastClick.attach(document.body)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
