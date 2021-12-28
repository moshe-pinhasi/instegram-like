import {storageService} from './storage.service'

import {
  getDateISO, 
  makeId, 
} from './util.service'

export const postService  = {
  get,
  like
}

function get(filterBy = {}) {
  const posts = storageService.get('post')
  const userPosts = posts.filter(post => post.userId === filterBy.userId)

  return Promise.resolve(userPosts)
}

// POST /post/:postId/like
function like(postId) {
  const {user} = storageService.get('session')

  let postLike = storageService.get('postLike')
  let posts = storageService.get('post')
  const liked = postLike.find(pl => pl.userId === user._id && postId === pl.postId)
  if (liked) {
    postLike = postLike.filter(pl => pl.userId !== user._id || postId !== pl.postId)
    storageService.save('postLike', postLike)
    posts = posts.map(p => {
      (p._id === postId) && (p.likes = p.likes - 1)
      return p
    })
    storageService.save('post', posts)
    return Promise.resolve({status: 'unlike'})
  }

  postLike.push(_createPostLike(user._id, postId))
  posts = posts.map(p => {
    (p._id === postId) && (p.likes = p.likes + 1)
    return p
  })
  storageService.save('post', posts)
  storageService.save('postLike', postLike)
  return Promise.resolve({status: 'like'})
}


function _createPostLike(userId, postId) {
  

  const postLike = {
    _id: makeId(10),
    postId,
    userId,
    createdAt: getDateISO(),
    updatedAt: getDateISO(),
  }

  return postLike
}