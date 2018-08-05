<template>
  <div id="app">
    <div class="title animated fadeInDown" id="title">Yemek'e Dair</div>
    <nav>
      <div id="navigation">
        <a href="#">About</a>
        <a href="#">Images</a>
        <a href="#">Contact</a>
      </div>
    </nav>
    <RecipeList/>
    <footer>Copyright © yemeksepeti.com 2018</footer>
  </div>
</template>

<script>
import RecipeList from './components/RecipeList.vue';

export default {
  name: 'app',
  components: {
    RecipeList,
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
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

.title {
	font-size: 55px;
	font-style: bold;
	text-align: center;
}

nav{
	text-align: center;
	word-spacing: 30px;
}

nav a{
	text-decoration: none;
	color: #c01f54;
}

@media (max-width: 480px) {
	ul.grid-nav li {
		display: block;
		margin: 0 0 5px;
	}
	ul.grid-nav li a {
		display: block;
	}
	ul.blog-post {
		margin-left: 0;
	}
	ul.blog-post li {
		width: 100% !important;
		margin: 0 0 20px;
	}
}

</style>
