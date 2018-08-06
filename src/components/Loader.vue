<template>
  <ul class="loader">
    <li>
      <img src=""/>
      <h3>Loading</h3>
      <a href="#" class="loaderButton">Tarife Git...</a>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'Loader',
}
</script>

<style scoped>
ul.loader {
	list-style: none;
	font-size: 0px;
}

ul.loader li {
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

ul.loader li img {
  background: #dad9d4;
	min-width: 350px;
	min-height: 250px;
	margin: 0 0 10px;
}

ul.loader li h3 {
  background: #dad9d4;
	margin: 0.6em 0 0.6em;
  text-align: left!important;
  font-family: Source Sans Pro, sans-serif;
  color: white;
  font-size: 1.1em;
  padding: 1px;
}

ul.loader li p {
  height: 390px;
  margin: 0.6em 0 1.3em;
	font-size: .9em;
	line-height: 1.5em;
	color: #8c8c8c;
  text-align: left!important;
  font-family: Open Sans, sans-serif;
  font-weight: 300;
}

ul.loader li a {
  display: block;
}

.loaderButton {
  text-align: center;
  width: 20%;
  border: none;
  background: #dad9d4;
  font-family: Open Sans, sans-serif;
  font-weight: 300;
  font-size: 0.7em;
  color: white;
  border-radius: 5px;
  padding: 8px 15px 8px 15px;
}
</style>
