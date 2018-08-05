<template>
  <div id="app">
    <Navbar />
    <router-view/>
    <footer>Copyright © yemeksepeti.com 2018</footer>
  </div>
</template>

<script>

import Navbar from './components/Navbar.vue';

export default {
  name: 'app',
  components: {
    Navbar,
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
  margin: 10px;
}

#app a {
	text-decoration: none;
}

a  a:active  a:visited {
  color: #2c3e50;
}

@media (max-width: 480px) {
	ul.grid-nav li {
		display: block;
		margin: 0 0 5px;
	}
	ul.grid-nav li a {
		display: block;
	}
	ul.recipe {
		margin-left: 0;
	}
	ul.recipe li {
		width: 100% !important;
		margin: 0 0 20px;
	}
}
</style>
