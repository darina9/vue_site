import Vue from 'vue'
import App from './App.vue'
import store from './store/index.js';
import Vuex from "vuex";
import router from './router'
Vue.use(Vuex);
Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
