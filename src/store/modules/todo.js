import axios from "axios";

const state = {
  todos: [],
};

const getters = {
  todos(state) {
    return state.todos;
  },
  doneTodos: (state) => state.todos.filter((todo) => todo.completed),
  progress: (state, getters) => {
    const doneTodos = getters.doneTodos;
    return Math.round((doneTodos.length / state.todos.length) * 100);
  },
};

const actions = {
  async deleteTodo({ commit }, todoId) {
    try {
      await axios.delete(
        `https://jsonplaceholder.typicode.com/todos/${todoId}`
      );
    } catch (error) {
      console.log(error);
    }
    commit("DELETE_TODO", todoId);
  },
  addTodo: async ({ commit }, newTodo) => {
    try {
      axios.post("https://jsonplaceholder.typicode.com/todos", newTodo);
    } catch (error) {
      console.log(error);
    }
    commit("ADD_TODO", newTodo);
  },
  getTodos: async ({ commit }) => {
    try {
      const res = await axios.get(
        "https://jsonplaceholder.typicode.com/todos?_limit=6"
      );
      commit("SET_TODOS", res.data);
    } catch (error) {
      console.log(error);
    }
  },
};

const mutations = {
  TOGGLE_AUTH(state) {
    state.auth.isAuthenticated = !state.auth.isAuthenticated;
  },
  MARK_COMPLETED(state, todoId) {
    state.todos.map((todo) => {
      if (todo.id === todoId) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
  },
  DELETE_TODO(state, todoId) {
    state.todos = state.todos.filter((todo) => todo.id !== todoId);
  },
  ADD_TODO(state, newTodo) {
    state.todos.unshift(newTodo);
  },
  SET_TODOS(state, todos) {
    state.todos = todos;
  },
};

export default { state, getters, actions, mutations };
