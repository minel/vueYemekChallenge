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
    const urls = [];
    let index = 1;
    let recipes = [];
    for (index; index <= pageNumber; index += 1) {
      urls.push(`https://assignment.yemek.com/list-page-${index}.json`);
    }
    index = 0;
    for (index; index < urls.length; index += 1) {
      dispatch('requestData', urls[index])
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
