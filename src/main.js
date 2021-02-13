import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';

var VueScrollTo = require('vue-scrollto');
Vue.use(VueScrollTo)

Vue.config.productionTip = false

// import { gsap } from "gsap";
// import { ScrollTrigger } from 'gsap/ScrollTrigger'

// if (process.client) {
//   gsap.registerPlugin(ScrollTrigger)
// }

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
