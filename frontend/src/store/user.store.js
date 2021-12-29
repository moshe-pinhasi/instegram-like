import { userService } from "@/services/user.service";
import {arrayToMap} from '@/services/util.service'

const state = {
  loggedinUser: null,
  showLoggedinAlert: false
};

const mutations = {
  setLoggedinUser(state, loggedinUser) {
    state.loggedinUser = loggedinUser
  },
  showLoggedinAlert(state, show) {
    state.showLoggedinAlert = show
  },
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
  },
  async updateFriendshipStatus({commit, dispatch}, {followId, following}) {
    try {
      if (following) {
        await userService.follow(followId)
      } else {
        await userService.unfollow(followId)  
      }
  
      dispatch({type: 'feedStore/followStatus', friendshipStatus: {userId: followId, following}}, {root: true})
    } catch(err) {
      if (err.code === 401) {
        commit('showLoggedinAlert', true)
        setTimeout(() => {
          commit('showLoggedinAlert', false)
        }, 3000);
      } else {
        throw err
      }
    }
  }
};

const getters = {
  loggedinUser: (state) => state.loggedinUser,
  showLoggedinAlert: (state) => state.showLoggedinAlert,
};

export const userStore = {
  namespaced: true,
  state,
  actions,
  mutations,
  getters,
};