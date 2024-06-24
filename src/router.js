import Vue from 'vue';
import Router from 'vue-router';
import LogeoView from './views/LogeoView.vue';
import AboutView from './views/AboutView.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    name: 'home',
    component: LogeoView,
  }, {
    path: '/about',
    name: 'about',
    component: AboutView,
  }],
});
