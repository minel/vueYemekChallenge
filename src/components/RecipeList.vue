<template>
  <div class="hello">
    <h1>RecipeList</h1>
  </div>
</template>

<script>

import { mapActions } from 'vuex';

export default {
  name: 'RecipeList',
  methods: {
    ...mapActions([
      'fetchRecipes',
    ]),
  },
  mounted() {
    this.fetchRecipes(1);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
