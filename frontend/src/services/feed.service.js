import {storageService} from './storage.service'
import {arrayToMap} from '@/services/util.service'

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

  const {user} = storageService.get('session') || {}
  const postLikedByCurrentUser = 
    user ? arrayToMap(_getPostsLikedByCurrentUser(), 'postId') : {}

  const following = _getFollowing()
  let followingMap = {}
  if (following) {
    followingMap = arrayToMap(following, 'followId')
  }

  const posts = 
      feed
        .map(post => postsMap[post.postId]) // gettings the posts
        .map(post => { // converting it to match the cards
          return {
            ...post,
            creator: _getCreatorObject(usersMap[post.userId]),
            likedByUser: !!postLikedByCurrentUser[post._id],
            likedBy: _getLikedByUsers(post._id),
            commentedBy: _getCommentedByUsers(post._id),
            friendshipStatus: {
              following: followingMap[post.userId]
            }
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

function _getCreatorObject(user) {
  const {_id, fullname, profileImg, username} = user
  return {_id, fullname, profileImg, username}
}

function _getPostsLikedByCurrentUser() {
  const {user} = storageService.get('session') || {}
  if (!user) return null

  const postLike = storageService.get('postLike')
  return postLike.filter(pl => pl.userId === user._id)
}

function _getLikedByUsers(postId, max = 3) {
  const postLike = storageService.get('postLike')
  const users = storageService.get('user')
  const usersMap = arrayToMap(users)
  return postLike.filter(pl => pl.postId === postId).slice(0, max).map(pl => usersMap[pl.userId])
}

function _getCommentedByUsers(postId, max = 2) {
  const postComment = storageService.get('postComment')
  const users = storageService.get('user')
  const usersMap = arrayToMap(users)

  const {user} = storageService.get('session') || {}
  const commentedByCurrentUser = 
    postComment
      .filter(pc => pc.postId === postId && pc.userId === user._id)
      .map(pc => {
        return {
          creator: _getCreatorObject(user),
          comment: pc.comment
        }
      })

  if (commentedByCurrentUser.length > 0) return commentedByCurrentUser

  return postComment
            .filter(pc => pc.postId === postId)
            .slice(0, max)
            .map(pc => {
              return {
                creator: _getCreatorObject(usersMap[pc.userId]),
                comment: pc.comment
              }
            })

}

function _getFollowing() {
  const {user} = storageService.get('session') || {}
  if (!user) return null
  const userFollow = storageService.get('userFollow')
  const following = userFollow.filter(uf => uf.userId === user._id)  

  return following
}