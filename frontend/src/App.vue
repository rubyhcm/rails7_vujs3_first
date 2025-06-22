<template>
  <div id="app">
    <div class="container">
      <h1>Todo List Manager</h1>
      <h6>Powered by: Vue 3 | Vuex 4 | Axios | Ruby on Rails | Sqlite 3</h6>
      <AddTodo />
      <FilterTodo />
      <TodosComponent />
    </div>
  </div>
</template>

<script>
import TodosComponent from "@/components/TodosComponent.vue";
import AddTodo from "@/components/AddTodo.vue";
import FilterTodo from "@/components/FilterTodo.vue";
export default {
  name: "App",
  components: {
    TodosComponent,
    AddTodo,
    FilterTodo,
  },
};
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */

body {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  background-color: #e8f7f0;
  line-height: 1.6;
}

.container {
  margin: auto;
  overflow: auto;
  padding: 0 2rem;
  max-width: 1100px;
}
</style>
