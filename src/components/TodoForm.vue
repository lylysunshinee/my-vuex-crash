<template>
  <form @submit="onSubmit">
    <input type="text" v-model="title" />
    <input type="submit" value="Add" />
  </form>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "TodoFormView",

  data() {
    return {
      title: "",
    };
  },

  methods: {
    ...mapActions(["addTodo"]),
    onSubmit(e) {
      e.preventDefault();
      this.addTodo({
        id: Date.now(),
        title: this.title,
        completed: false,
      });
      this.title = "";
    },
  },
};
</script>

<style>
form {
  padding: 10px;
}

input[type="text"] {
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
  margin: 6px 0;
  border: 0;
}

input[type="submit"] {
  margin: 10px auto;
  padding: 10px;
  border: 0;
  display: block;
}
</style>