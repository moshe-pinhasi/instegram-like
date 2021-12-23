import {storageService} from './storage.service'

export const postService  = {
  get
}

function get(filterBy = {}) {
  const posts = storageService.get('post')
  const userPosts = posts.filter(post => post.userId === filterBy.userId)

  return Promise.resolve(userPosts)
}