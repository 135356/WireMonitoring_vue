import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import bb from '@/libs/js_vue/src'
Vue.use(bb);

Vue.config.productionTip = false
import Api from "./axios/Api";
Vue.prototype.$bb_api=new Api();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
