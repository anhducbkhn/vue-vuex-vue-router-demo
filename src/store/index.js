/* eslint-disable */
import Vue from 'vue';
import Vuex from 'vuex';
import * as actions from './actions';
import * as getters from './getters';

Vue.use(Vuex);

const state = {
  count: 0,
  listServiceHomePage: [],
};

export default new Vuex.Store({
  actions,
  state,
  getters,
  mutations: {
    GET_LIST_SERVICE_HOMEPAGE (state, listServiceHomePage) {
    	state.listServiceHomePage = listServiceHomePage;
    }
  },
});
