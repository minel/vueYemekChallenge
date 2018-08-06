import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  recipe: [],
};

const getters = {
  recipe(state) {
    return state.recipe;
  },
};

const mutations = {
  updateRecipe(state, recipe) {
    state.recipe = recipe;
  },
};

const actions = {
  requestData({ commit }, url) {
    return new Promise((resolve, reject) => {
      commit('fetchWaiting');
      fetch(url)
        .then(res => res.json())
        .then((res) => {
          commit('fetchSuccess');
          resolve(res.Data);
          console.log('Data fetched successfully from url: ', url);
        })
        .catch((err) => {
          commit('fetchError');
          reject(err);
          console.log('An error occurred when trying to fetch: ', err);
        });
    });
  },
  fetchRecipe({ commit, dispatch }, id) {
    const url = 'https://assignment.yemek.com/detail.json';
    console.log(`Fetching a recipe with id:${id}`);
    dispatch('requestData', url)
      .then((data) => {
        commit('updateRecipe', data);
      })
      .catch((err) => {
        console.log('Fetch a recipe error', err);
      });
  },
};

const recipe = {
  getters,
  state,
  mutations,
  actions,
};

export default recipe;
