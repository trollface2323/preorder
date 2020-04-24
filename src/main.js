import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import router from './router'


Vue.config.productionTip = false

import 'normalize.css/normalize.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.min.js";


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

