const state = {
  user: null,
};

const mutations = {
  setPosts(state, user) {
    state.user = user
  }  
};

const actions = {
  async loadPosts({commit}) {
    const posts = await feedService.get()
    commit('setPosts', posts)
  }
};

const getters = {
  user: (state) => state.user
};

export const userStore = {
  namespaced: true,
  state,
  actions,
  mutations,
  getters,
};