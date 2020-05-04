import Vue from 'vue'
import App from './App.vue'
import router from './router'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import vueScrollto from 'vue-scrollto'


Vue.config.productionTip = false

Vue.use(vueScrollto)
// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

new Vue({
  created(){
    AOS.init({disable: 'phone'});
  },
  router,
  render: h => h(App)
}).$mount('#app')
