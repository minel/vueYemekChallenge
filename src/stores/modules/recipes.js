import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  recipes: [],
};

const getters = {
  recipes(state) {
    return state.recipes;
  },
};

const mutations = {
  updateRecipes(state, recipes) {
    state.recipes = state.recipes.concat(recipes);
    /*
    if we want to 10 data per page, write this code in above:
    state.recipes = recipes;
    */
  },
};

const actions = {
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
};

const recipes = {
  getters,
  state,
  mutations,
  actions,
};

export default recipes;
