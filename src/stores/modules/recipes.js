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
    state.recipes = recipes;
  },
};

const actions = {
  fetchRecipes({ commit, dispatch }, pageNumber) {
    let url;
    let index = 0;
    let recipes = [];
    for (index; index < pageNumber; index += 1) {
      url = `https://assignment.yemek.com/list-page-${index + 1}.json`;
      dispatch('requestData', url)
        .then((data) => {
          recipes = recipes.concat(data);
          commit('updateRecipes', recipes);
        })
        .catch((err) => {
          console.log('Fetching recipes error', err);
        });
      commit('setPage', pageNumber);
    }
  },
};

const recipes = {
  getters,
  state,
  mutations,
  actions,
};

export default recipes;
