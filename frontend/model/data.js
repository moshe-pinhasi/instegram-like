import {
  getDateISO, 
  makeId, 
  getRandomInt,
  shuffle,
  copy
} from '../src/services/util.service'
import {storageService} from '../src/services/storage.service'

let users, posts, feed, userFollow, postComment, postLike

const numberOfUsers = 10
const numberOfPost = numberOfUsers + 20


// model creators
/**
 * @typedef  {Object} User
 * @property {String} _id
 * @property {String} fullname
 * @property {String} username
 * @property {String} email
 * @property {String} profileImg
 * @property {String} createdAt
 * @property {String} updatedAt
 */
function createUser() {
  const {firstName, lastName} = getRndName()
  return {
    _id: makeId(10),
    fullname: `${firstName} ${lastName}`,
    username: `${firstName.toLowerCase()}_${lastName.toLowerCase()}`,
    profileImg: ``,
    email: `${firstName.toLowerCase()}-${lastName.toLowerCase()}@gmail.com`,
    createdAt: getDateISO(),
    updatedAt: getDateISO(),
  }
}

/**
 * @typedef  {Object} Media
 * @property {String} type - image/ video
 * @property {String} src
 */

/**
 * @typedef  {Object} Post
 * @property {String} _id
 * @property {String} userId
 * @property {Media} madia
 * @property {String} text
 * @property {String} likes - sum of the likes
 * @property {String} comments - sum of the comments
 * @property {String} createdAt
 * @property {String} updatedAt
 */
function createPost(userId) {
  const post = {
    _id: makeId(10),
    userId,
    media: {
      type: 'image',
      src: `/img/posts/${getRandomInt(1, 11)}.jpg`,
    },
    text: '',
    likes: getRandomInt(0, 8),
    comments: getRandomInt(0, 5),
    createdAt: getDateISO(),
    updatedAt: getDateISO(),
  }

  return post
}

/**
 * @typedef  {Object} UserFeed
 * @property {String} _id
 * @property {String} userId
 * @property {String} postId
 * @property {String} createdAt
 * @property {String} updatedAt
 */
function createUserFeed(userId, postId) {
  const userFeed = {
    _id: makeId(10),
    userId,
    postId,
    createdAt: getDateISO(),
    updatedAt: getDateISO(),
  }

return userFeed
}

/**
 * @typedef  {Object} UserFollow
 * @property {String} _id
 * @property {String} userId
 * @property {String} followId
 * @property {String} createdAt
 * @property {String} updatedAt
 */
function createUserFollowers(userId, followId) {
  const userFollow = {
    _id: makeId(10),
    userId,
    followId,
    createdAt: getDateISO(),
    updatedAt: getDateISO(),
  }

  return userFollow
}

/**
 * @typedef  {Object} PostComment
 * @property {String} _id
 * @property {String} postId
 * @property {String} userId
 * @property {String} comment
 * @property {String} createdAt
 * @property {String} updatedAt
 */
function createPostComment(userId, postId) {
  const postComment = {
    _id: makeId(10),
    postId,
    userId,
    comment: getRndComment(),
    createdAt: getDateISO(),
    updatedAt: getDateISO(),
  }

  return postComment
}

/**
 * @typedef  {Object} PostLike
 * @property {String} _id
 * @property {String} postId
 * @property {String} userId
 * @property {String} createdAt
 * @property {String} updatedAt
 */
function createPostLike(userId, postId) {
  const postLike = {
    _id: makeId(10),
    postId,
    userId,
    createdAt: getDateISO(),
    updatedAt: getDateISO(),
  }

  return postLike
}

// data creatores
function createUsers() {
  users = getArray(numberOfUsers).map(i => createUser())
  // users.forEach(user => console.log('user', user))

  storageService.save('user', users)
}

function createPosts() {
  posts = Array(numberOfPost).fill(0).map(i => {
    const user = users[getRandomInt(0, users.length)]
    return createPost(user._id)
  })
  // posts.forEach(post => console.log('post', post))
  storageService.save('post', posts)
}

function createFeed(post) {
  feed = posts.map(post => createUserFeed(post.userId, post._id))
  // feed.forEach(feed => console.log('feed', feed))

  storageService.save('feed', feed)
}

function createFollowers() {
  userFollow = users.flatMap(user => {
    const canFollows = shuffle(copy(users.filter(u => u._id !== user._id)))
    const numberOfFollowers = getRandomInt(0, canFollows.length)
    const followers = Array(numberOfFollowers).fill(0).map((item, idx) => createUserFollowers(user._id, canFollows[idx]._id))
    return followers
  })

  // userFollow.forEach(f => console.log('follow', f))

  storageService.save('userFollow', userFollow)
}

function createPostsComments() {
  postComment = 
    posts
      .filter( post => post.comments > 0)
      .flatMap(post => {
        const potentialUsers = shuffle(copy(users.filter(user => post.userId !== user._id)))
        const numberOfComments = post.comments
        return Array(numberOfComments).fill(0).map((item, idx) => createPostComment(potentialUsers[idx]._id, post._id))
      })

  // userPost.forEach(u => console.log('userPost', u))

  storageService.save('postComment', postComment)
}

function createPostsLikes() {
  postLike = 
    posts
      .filter( post => post.likes > 0)
      .flatMap(post => {
        const potentialUsers = shuffle(copy(users.filter(user => post.userId !== user._id)))
        const numberOfLikes = post.likes
        return Array(numberOfLikes).fill(0).map((item, idx) => createPostLike(potentialUsers[idx]._id, post._id))
      })

  // postLike.forEach(u => console.log('postLike', u))
  storageService.save('postLike', postLike)
}

// helpers
function getRndName() {
  const words = getWords()
  
  let firstName = words[getRandomInt(0, words.length)]
  firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1)

  let lastName = words[getRandomInt(0, words.length)]
  lastName = lastName.charAt(0).toUpperCase() + lastName.slice(1)

  return {firstName, lastName}
}

function getRndComment() {
  const wordsCount = getRandomInt(1, 10)
  const words = shuffle(copy(getWords()))
  let description = ''
  for (let j = 0; j < wordsCount; j++) {
      description += " " + words[j]
  }

  return description
}

function getWords() {
  return ["The", "sky", "above", "port", "was", "color", "television", "tuned", "to", "dead", "channel", "All", "this", "happened", "more", "less", "I", "had", "story", "bit", "various", "people", "and", "generally", "happens", "cases", "each", "time", "it", "was", "different", "It", "was", "a pleasure", "to", "burn"];
}

function getArray(length) {
  return (new Array(length)).fill()
}

export function createData() {
  localStorage.clear()
  createUsers()
  createPosts()
  createFeed()
  createFollowers()
  createPostsComments()
  createPostsLikes()
}


// const userFeed = {
//   id,
//   userId,
//   postId,
//   createdAt,
//   updatedAt
// }

// const userFollow = {
//   id,
//   userId,
//   followId,
//   createdAt,
//   updatedAt
// }

// const post = {
//   id,
//   userId,
//   media: {
//      type: 'image',
//      src,
//   },
//   text,
//   likes,
//   comments,
//   createdAt,
//   updatedAt
// }

// const postComment = {
//   id,
//   postId,
//   userId,
//   comment,
//   createdAt,
//   updatedAt
// }

// const postLike = {
//   id,
//   postId,
//   userId,
//   createdAt,
//   updatedAt
// }