import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    recipes: [],
    recipe: [],
    status: {
      waiting: false,
      success: false,
      error: false,
    },
    pagination: {
      pageNumber: 0,
      pageLimit: 3,
    },
  },
  getters: {
    recipes(state) {
      return state.recipes;
    },
    recipe(state) {
      return state.recipe;
    },
    pagination(state) {
      return state.pagination;
    },
    activePage(state) {
      return state.pagination.pageNumber;
    },
  },
  mutations: {
    updateRecipes(state, recipes) {
      state.recipes = recipes;
    },
    setPage(state, pageNumber) {
      state.pagination.pageNumber = pageNumber;
    },
    updateRecipe(state, recipe) {
      state.recipe = recipe;
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
    requestData({ commit }, url) {
      return new Promise((resolve, reject) => {
        commit('fetchWaiting');
        fetch(url)
          .then(res => res.json())
          .then((res) => {
            commit('fetchSuccess');
            resolve(res);
            console.log('Data fetched successfully from url: ', url);
          })
          .catch((err) => {
            commit('fetchError');
            reject();
            console.log('An error occurred when trying to fetch: ', err);
          });
      });
    },
    fetchRecipes({ commit, dispatch }, pageNumber) {
      const url = `https://assignment.yemek.com/list-page-${pageNumber}.json`;
      dispatch('requestData', url)
        .then((data) => {
          commit('setPage', pageNumber);
          commit('updateRecipes', data);
        })
        .catch(() => {
          // catch fetchRecipes error
        });
    },
    fetchRecipe({ commit, dispatch }, id) {
      const url = 'https://assignment.yemek.com/detail.json';
      console.log(`Fetching a recipe with id:${id}`);
      dispatch('requestData', url)
        .then((data) => {
          commit('updateRecipe', data);
        })
        .catch(() => {
          // catch fetchRecipe error
        });
    },
  },
});
