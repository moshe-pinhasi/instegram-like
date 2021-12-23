import {storageService} from './storage.service'
import {arrayToMap} from './util.service'

export const feedService  = {
  get
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
          userId: undefined,
          creator: usersMap[post.userId],
          likedBy,
          commentedBy
        }
      })
  
  // console.log('posts', posts);
  return Promise.resolve(posts)
}

// GET /feed/:id/media
// response :
// {
//  has_next: boolean
// }
function timeline(filterBy = {}) {
  const posts = storageService.get('post')
  const userPosts = posts.filter(post => post.userId === filterBy.userId)

  return Promise.resolve(userPosts)
}