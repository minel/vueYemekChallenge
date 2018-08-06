<template>
    <div class="pagination">
      <a v-bind:class="[activePage === 1 ? 'hidden' : '']" @click="gotoPage(activePage - 1)" href="#">&laquo;</a>
      <template v-for="page in pagination.pageLimit">
        <a :key="page" @click="gotoPage(page)" :class="[page === activePage ? 'active' : '']" href="#">{{page}}</a>
      </template>
      <a v-bind:class="[activePage == 3 ? 'hidden' : '']" @click="gotoPage(activePage + 1)" href="#">&raquo;</a>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Paginator',
  components: {
  },
  computed: {
    ...mapGetters([
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
  },
}
</script>

<style>
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
  pointer-events: none;
  cursor: default;
}

.pagination a:hover:not(.active) {
	background-color: #ddd;
	border-radius: 5px;
}

.hidden {
  visibility: hidden;
}
</style>
