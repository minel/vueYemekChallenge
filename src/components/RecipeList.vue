<template>
  <div class="container">
    <div class="pagination">
      <a v-bind:class="[activePage == 1 ? 'hidden' : '']" @click="gotoPage(activePage - 1)" href="#">&laquo;</a>
      <template v-for="page in pagination.pageLimit">
        <a :key="page" @click="gotoPage(page)" :class="{active: page === activePage}" href="#">{{page}}</a>
      </template>
      <a v-bind:class="[activePage == 3 ? 'hidden' : '']" @click="gotoPage(activePage + 1)" href="#">&raquo;</a>
    </div>
    <ul class="recipe">
      <li :key="recipe.Id" v-for="recipe in recipes">
        <img v-bind:src="recipe.ImageUrl" />
        <h3>{{recipe.Title}}</h3>
        <router-link v-bind:to="recipe.Permalink" class="button">Tarife Git...</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'RecipeList',
  components: {
  },
  computed: {
    ...mapGetters([
      'recipes',
      'pagination',
      'activePage',
    ]),
  },
  methods: {
    ...mapActions([
      'fetchRecipes',
    ]),
    gotoPage(page) {
      this.fetchRecipes(page);
    },
  },
  created() {
    this.fetchRecipes(1);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.container {
  margin: 2em 0;
  text-align: center;
}

ul.recipe {
	list-style: none;
	font-size: 0px;
}

ul.recipe li {
	display: inline-block;
  border-radius: 3px;
	padding: 1.5em;
  width: 400px;
	background: #fff;
	border: 1px solid #eee;
	font-size: 1rem;
	vertical-align: top;
	box-shadow: 0 0 6px #eee;
	box-sizing: border-box;
	-moz-box-sizing: border-box;
	-webkit-box-sizing: border-box;
}

ul.recipe li img {
	max-width: 100%;
	height: auto;
	margin: 0 0 10px;
}

ul.recipe li h3 {
	margin: 0.6em 0 0.6em;
  text-align: left!important;
  font-family: Source Sans Pro, sans-serif;
  color: #333;
  font-size: 1.1em;
}

ul.recipe li p {
  margin: 0.6em 0 1.3em;
	font-size: .9em;
	line-height: 1.5em;
	color: #8c8c8c;
  text-align: left!important;
  font-family: Open Sans, sans-serif;
  font-weight: 300;
}

ul.recipe li a {
  display: block;
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

.pagination {
	display: inline-block;
}

.pagination a {
	color: black;
	float: left;
	padding: 8px 16px;
	text-decoration: none;
}

.pagination a.active {
	background-color: #4CAF50;
	color: white;
	border-radius: 5px;
}

.pagination a:hover:not(.active) {
	background-color: #ddd;
	border-radius: 5px;
}

.hidden {
  visibility: hidden;
}

</style>
