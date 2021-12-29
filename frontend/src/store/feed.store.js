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
        p.likes++
        p.likedByUser = true
      }
      return p
    })

  },
  setPostUnlike(state, post) {
    state.posts = state.posts.map(p => {
      if (p._id === post._id) {
        p.likes--
        p.likedByUser = false
      }
      return p
    })
  },
  setPostComment(state, {post, commentedBy}) {
    state.posts = state.posts.map(p => {
      if (p._id === post._id) {
        p.comments++
        p.commentedBy.push(commentedBy)
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
    if (status === 'like') {
      commit('setPostLike', post)
    } else {
      commit('setPostUnlike', post)
    }
  },
  async addPostComment({commit, rootState}, {data}) {
    const {post, comment} = data
    await postService.comment(post._id, comment)
    const {_id, fullname, profileImg, username} = rootState.userStore.loggedinUser
    const commentedBy = {
      comment,
      creator: {_id, fullname, profileImg, username}
    }
    
    commit('setPostComment', {post, commentedBy})
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