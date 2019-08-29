import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import '@/assets/css/reset.scss'

Vue.config.productionTip = false

// 请求直接调用 this.$request
Vue.prototype.$request = axios

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
