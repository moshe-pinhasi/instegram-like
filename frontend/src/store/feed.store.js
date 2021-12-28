import {feedService} from '@/services/feed.service'
import {postService} from '@/services/post.service'

const state = {
  posts: [],
};

const mutations = {
  setPosts(state, posts) {
    state.posts = posts
  },
  setPostLike(state, post) {
    state.posts = state.posts.map(p => {
      if (p._id === post._id) {
        post.likes++
        post.likedByUser = true
      }
      return p
    })

  },
  setPostUnlike(state, post) {
    state.posts = state.posts.map(p => {
      if (p._id === post._id) {
        post.likes--
        post.likedByUser = false
      }
      return p
    })
  }
};

const actions = {
  async loadPosts({commit}) {
    const posts = await feedService.get()
    commit('setPosts', posts)
  },
  async postLike({commit}, {post}) {
    const {status} = await postService.like(post._id)
    console.log('status', status);
    if (status === 'like') {
      commit('setPostLike', post)
    } else {
      commit('setPostUnlike', post)
    }
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