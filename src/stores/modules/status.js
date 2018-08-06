import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  status: {
    waiting: false,
    success: false,
    error: false,
  },
};

const getters = {
  fetchStatus(state) {
    return state.status;
  },
};

const mutations = {
  fetchWaiting(state) {
    state.status = {
      waiting: true,
      success: false,
      error: false,
    };
  },
  fetchSuccess(state) {
    state.status = {
      waiting: false,
      success: true,
      error: false,
    };
  },
  fetchError(state) {
    state.status = {
      waiting: false,
      success: false,
      error: true,
    };
  },
};

const actions = {};

const status = {
  getters,
  state,
  mutations,
  actions,
};

export default status;
