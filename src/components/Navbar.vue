<template>
  <div class="navbar">
    <div class="title animated fadeInDown" id="title">
      <router-link to="/" class="button">Yemek'e Dair</router-link>
    </div>
    <nav>
      <div id="navigation">
        <a href="#">Hakkımızda</a>
        <a href="#">Tarifler</a>
        <a href="#">İletişim</a>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
}
</script>

<style scoped lang="scss">
.title {
	font-size: 55px;
	font-style: bold;
	text-align: center;
  background-color: white;
}

nav {
	text-align: center;
	word-spacing: 30px;
}

#title a {
  color: #2c3e50;
  background-color: white;
}

#navigation a {
  color: #c01f54;
}
</style>
