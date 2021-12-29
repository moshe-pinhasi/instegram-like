import { userService } from "@/services/user.service";
import {arrayToMap} from '@/services/util.service'

const state = {
  loggedinUser: null,
};

const mutations = {
  setLoggedinUser(state, loggedinUser) {
    state.loggedinUser = loggedinUser
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
  async updateFriendshipStatus({dispatch}, {followId, following}) {
    if (following) {
      await userService.follow(followId)
    } else {
      await userService.unfollow(followId)  
    }

    dispatch({type: 'feedStore/followStatus', friendshipStatus: {userId: followId, following}}, {root: true})
  }
};

const getters = {
  loggedinUser: (state) => state.loggedinUser,
  userFollowing: (state) => state.following ? arrayToMap(state.following, 'followId') : {},
};

export const userStore = {
  namespaced: true,
  state,
  actions,
  mutations,
  getters,
};