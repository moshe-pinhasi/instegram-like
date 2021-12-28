import {storageService} from './storage.service'
import {arrayToMap} from './util.service'

export const feedService  = {
  get,
  getUserInfo,
  getUserMedia
}


// GET /feed
/**
 * @param {Object} filterBy 
 * @returns {Promise<Post[]>}
 */
function get(filterBy = {}) {
  const feed = storageService.get('feed')
  const postsMap = arrayToMap(storageService.get('post'))
  
  const users = storageService.get('user')
  const usersMap = arrayToMap(users)

  const postLike = storageService.get('postLike')
  const postComment = storageService.get('postComment')

  const {user} = storageService.get('session') || {}
  let postLikedByCurrentUser = {}
  if (user) {
    postLikedByCurrentUser = 
      postLike
        .filter(pl => pl.userId === user._id)
        .reduce((acc, pl) => {
          acc[pl.postId] = true
          return acc
        }, {})

    console.log('postLikedByCurrentUser', postLikedByCurrentUser);
  }

  const posts = feed.map(post => postsMap[post.postId])
      .map(post => {
        const likedBy = postLike.filter(pl => pl.postId === post._id).slice(0, 3).map(pl => usersMap[pl.userId])
        const commentedBy = 
          postComment
            .filter(pc => pc.postId === post._id)
            .slice(0, 2)
            .map(pc => {
              return {
                creator: usersMap[pc.userId],
                comment: pc.comment
              }
            })
        return {
          ...post,
          creator: usersMap[post.userId],
          likedByUser: !!postLikedByCurrentUser[post._id],
          likedBy,
          commentedBy
        }
      })
  
  console.log('posts', posts);
  return Promise.resolve(posts)
}

// GET /feed/user/:id/info
function getUserInfo(userId) {
  const users = storageService.get('user')
  const user = users.filter(user => user._id === userId).pop()

  if (!user) return Promise.reject('User not found!')

  const posts = storageService.get('post')
  const userFollow = storageService.get('userFollow')

  const res = {
    ...user,
    following: userFollow.filter(uf => uf.userId === userId).length, // number of the users the userId follow
    followers: userFollow.filter(uf => uf.followId === userId).length, // number of the users whose follow userId
    totalPosts: posts.filter(p => p.userId === userId).length
  }
  return Promise.resolve(res)
}

// GET /feed/:id/media?page=1
// response :
// {
//  posts: []
//  has_next: boolean
// }
function getUserMedia(userId, page) {
  const posts = storageService.get('post')
  const userPosts = posts.filter(post => post.userId === userId)

  return Promise.resolve(userPosts)
}