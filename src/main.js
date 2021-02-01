import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';

var VueScrollTo = require('vue-scrollto');
Vue.use(VueScrollTo)

Vue.config.productionTip = false

import { gsap } from "gsap";
import { PixiPlugin } from "gsap/PixiPlugin.js";
import { MotionPathPlugin } from "gsap/MotionPathPlugin.js";
gsap.registerPlugin(PixiPlugin, MotionPathPlugin);

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
