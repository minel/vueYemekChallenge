import Vue from 'vue';
import Router from 'vue-router';
import RecipeList from './components/RecipeList.vue';
import RecipeDetail from './components/RecipeDetail.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: RecipeList,
      name: RecipeList,
    },
    {
      path: '/icerik/:id',
      component: RecipeDetail,
      name: RecipeDetail,
    },
  ],
});
