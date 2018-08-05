import Vue from 'vue';
import Vuex from 'vuex';

import pagination from './modules/pagination';
import recipe from './modules/recipe';
import recipes from './modules/recipes';
import status from './modules/status';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    pagination,
    recipe,
    recipes,
    status,
  },
});
