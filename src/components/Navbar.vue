<template>
  <div class="navbar">
    <h1>My vueX app</h1>
    <ul>
      <li>Home</li>
      <li>About</li>
      <li v-if="isAuthenticated">
        Total todo :{{ todos.length }}
        <button @click="TOGGLE_AUTH">Logout</button>
      </li>
      <li v-else>
        <button @click="TOGGLE_AUTH">Login</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "NavbarView",
  computed: { ...mapGetters(["isAuthenticated", "todos"]) },
  methods: mapMutations(["TOGGLE_AUTH"]),
};
</script>

<style>
.navbar {
  padding: 5px;
  text-align: center;
  background: rgb(182, 158, 158);
  color: black;
}

.navbar ul {
  display: flex;
  justify-content: space-around;
  align-items: center;
  list-style: none;
  padding: 0;
}
</style>