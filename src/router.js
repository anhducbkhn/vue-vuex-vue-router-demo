import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './components/Home';
import About from './components/About';
import ServiceDetail from './components/ServiceDetail';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/about',
      component: About,
    },
    {
      path: '/booking/:id',
      component: ServiceDetail,
    },
  ],
});
