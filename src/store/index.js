// store/index.js
import Vue from "vue"; // This module's Vue is not the same instance as that referenced in main.js
import Vuex from "vuex";
import menuService from "@/services/menuService.js";

// Required before creating new store instance
Vue.use(Vuex);
export const store = new Vuex.Store();
export const state = () => ({
  menuList: {}
});
export const mutations = {
  init(state, list) {
    state.menuList = list;
  }
}
export const actions = {
  async nuxtServerInit({ commit }) {
    var result = await menuService.loadMenu('tr');
    var result1 = await menuService.loadMenu('en');

    commit('init', { tr: result, en: result1 });
  }
};
