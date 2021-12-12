import Vue from 'vue'
import App from './App.vue'
import router from './components/controller/router.js';
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';

Vue.config.productionTip = false;
Vue.config.devtools = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
