import Vue from 'vue'
import App from './App.vue'
import ElementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'
import axios from 'axios'

Vue.config.productionTip = false
Vue.use(ElementUi)
Vue.prototype.$ajax = axios

new Vue({
  el: '#app',
  router,
  render: h => h(App),
}).$mount('#app')
