/* eslint-disable global-require */
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import i18n from './i18n';
import './vee-validate-config';
import './vue-fontawesome-config';
// import 'bootstrap';
import './scss/custom.scss';

if (process.env.NODE_ENV === 'development') {
  const VueAxe = require('vue-axe').default;
  Vue.use(VueAxe, {
    clearConsoleOnUpdate: false,
  });
}

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount('#widget-historial-fx');
