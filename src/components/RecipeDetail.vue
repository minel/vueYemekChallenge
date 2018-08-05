<template>
  <div class="container">
    <ul class="recipe detail">
      <li v-if="recipe.Data">
        <img v-bind:src="recipe.Data.ImageUrl" />
        <h3>{{recipe.Data.Title}}</h3>
        <span v-html="recipe.Data.Content"></span>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'RecipeDetail',
  computed: {
    ...mapGetters([
      'recipe',
    ]),
  },
  methods: {
    ...mapActions([
      'fetchRecipe',
    ]),
  },
  created() {
    this.fetchRecipe(this.$route.params.id);
  }
}
</script>

<style>

</style>
