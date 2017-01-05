/* eslint-disable */
import Vue from 'vue';
import Vuex from 'vuex';
import VueResource from 'vue-resource';
import * as actions from './actions';
//import * as getters from './getters';

Vue.use(Vuex);
Vue.use(VueResource);

const state = {
  count: 0,
};

const getters = {
  getListServiceHomePage: function () {
    Vue.http.get('https://demo6600464.mockable.io/services.json')
    .then((value) => {
      console.warn('loaded data');
      console.warn(value.body);
      return value.body;
    });
  },
};

export default new Vuex.Store({
  actions,
  state,
  getters,
  mutations: {

  },
});
