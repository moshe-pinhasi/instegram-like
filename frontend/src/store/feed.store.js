import {feedService} from '@/services/feed.service'

const state = {
  posts: [],
};

const mutations = {
  setPosts(state, posts) {
    state.posts = posts
  }  
};

const actions = {
  async loadPosts({commit}) {
    const posts = await feedService.get()
    commit('setPosts', posts)
  }
};

const getters = {
  posts: (state) => state.posts
};

export const feedStore = {
  namespaced: true,
  state,
  actions,
  mutations,
  getters,
};