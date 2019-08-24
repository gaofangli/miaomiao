import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from 'axios'
import MintUI from 'mint-ui'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import store from "./store"
import 'swiper/dist/css/swiper.css';
// import Loading from '@components/Loading'
// Vue.component('Loading',Loading)
Vue.use(ElementUI)
Vue.use(MintUI)
Vue.prototype.$axios = Axios
Vue.prototype.$store = store


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
