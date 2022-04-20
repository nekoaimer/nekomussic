import Vue from 'vue'
import App from './App.vue'
import store from './vuex'
import router from './router'
import 'normalize.css'

Vue.config.productionTip = false


new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
