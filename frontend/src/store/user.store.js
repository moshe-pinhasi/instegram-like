import { userService } from "@/services/user.service";

const state = {
  loggedinUser: null,
};

const mutations = {
  setLoggedinUser(state, loggedinUser) {
    state.loggedinUser = loggedinUser
  }  
};

const actions = {
  async loadLoggedinUser({commit}) {
    try {
      const {user} = await userService.getCurrent()
      commit('setLoggedinUser', user)
    } catch(e) {
      commit('setLoggedinUser', null)
      console.error(e)
    }
  }
};

const getters = {
  loggedinUser: (state) => state.loggedinUser
};

export const userStore = {
  namespaced: true,
  state,
  actions,
  mutations,
  getters,
};