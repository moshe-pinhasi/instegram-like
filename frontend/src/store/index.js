import Vue from 'vue'
import Vuex from 'vuex'
import { userStore } from "@/store/user.store";
import { feedStore } from "@/store/feed.store";

Vue.use(Vuex)

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== "production", // strict only in dev since its resourcefully expensive-ish
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    userStore,
    feedStore,
  },
})
