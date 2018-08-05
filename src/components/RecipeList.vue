<template>
  <div class="container">
    <ul class="blog-post columns-2" :key="recipe.Id" v-for="recipe in recipes.Data">
      <li>
        <img v-bind:src="recipe.ImageUrl" />
        <h3>{{recipe.Title}}</h3>
        <div class="button">Tarife Git...</div>
      </li>
    </ul>
  </div>
</template>

<script>

import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'RecipeList',
  computed: {
    ...mapGetters([
      'recipes',
      'pagination',
      'page',
    ]),
  },
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
.container {
  margin: 2em 0;
  text-align: center;
}

ul.blog-post {
	list-style: none;
	font-size: 0px;
	margin-left: -2.5%;
}

ul.blog-post li {
	display: inline-block;
  border-radius: 3px;
	padding: 1.5em;
  width: 400px;
	margin: 0 0 2.5% 2.5%;
	background: #fff;
	border: 1px solid #eee;
	font-size: 16px;
	font-size: 1rem;
	vertical-align: top;
	box-shadow: 0 0 6px #eee;
	box-sizing: border-box;
	-moz-box-sizing: border-box;
	-webkit-box-sizing: border-box;
}

ul.blog-post li img {
	max-width: 100%;
	height: auto;
	margin: 0 0 10px;
}

ul.blog-post li h3 {
	margin: 0.6em 0 0.6em;
  text-align: left!important;
  font-family: Source Sans Pro, sans-serif;
  color: #333;
  font-size: 1.1em;
}

ul.blog-post li p {
  margin: 0.6em 0 1.3em;
	font-size: .9em;
	line-height: 1.5em;
	color: #8c8c8c;
  text-align: left!important;
  font-family: Open Sans, sans-serif;
  font-weight: 300;
}

.button {
  text-align: center;
  width: 20%;
  border: none;
  background: #c01f54;
  font-family: Open Sans, sans-serif;
  font-weight: 300;
  font-size: 0.7em;
  color: white;
  border-radius: 5px;
  padding: 8px 15px 8px 15px;
}

.button:hover {
  opacity: 0.9;
  cursor: pointer;
}

</style>
