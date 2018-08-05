import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  pagination: {
    pageNumber: 0,
    pageLimit: 3,
  },
};

const getters = {
  pagination(state) {
    return state.pagination;
  },
  activePage(state) {
    return state.pagination.pageNumber;
  },
};

const mutations = {
  setPage(state, pageNumber) {
    state.pagination.pageNumber = pageNumber;
  },
};

const actions = {};

const pagination = {
  getters,
  state,
  mutations,
  actions,
};

export default pagination;
