import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    recipes: [],
    status: {
      waiting: false,
      success: false,
      error: false,
    },
    pagination: {
      pageNumber: 1,
      limit: 10,
    },
  },
  getters: {
    recipes(state) {
      return state.recipes;
    },
    pagination(state) {
      return state.pagination;
    },
    page(state) {
      return state.pagination.pageNumber;
    },
  },
  mutations: {
    updateRecipes(state, recipes) {
      state.recipes = recipes;
    },
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
  },
  actions: {
    fetchRecipes({ commit }, pageNumber) {
      const Console = window.console;
      commit('fetchWaiting');
      fetch(`https://assignment.yemek.com/list-page-${pageNumber}.json`)
        .then(res => res.json())
        .then((res) => {
          commit('updateRecipes', res);
          commit('fetchSuccess');
          Console.log('Data fetched successfully from page: ', pageNumber);
        })
        .catch((err) => {
          commit('fetchError');
          Console.log('An error occurred when trying to fetching recipes: ', err);
        });
    },
  },
});
