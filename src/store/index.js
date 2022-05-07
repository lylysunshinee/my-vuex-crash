import Vue from "vue";
import Vuex from "vuex";
import auth from "./modules/auth";
import todo from "./modules/todo";
Vue.use(Vuex);

const storeData = {
  modules: {
    auth,
    todo,
  },
};
const store = new Vuex.Store(storeData);
export default store;
