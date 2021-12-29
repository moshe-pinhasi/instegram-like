import {storageService} from './storage.service'
import {makeId, getDateISO} from './util.service'

export const userService  = {
  get,
  getCurrent,
  follow,
  unfollow,
}

function get(filterBy = {}) {
  const users = storageService.get('user')
  const user = users.filter(user => user.username === filterBy.username).pop()

  if (!user) return Promise.reject('User not found!')

  return Promise.resolve(user)
}

function getCurrent() {
  const session = storageService.get('session') || {}
  if (!session.user) {
    return Promise.reject({
      code: 401, 
      errors: {message: 'Unauthorized'},
      name: "Unauthorized"
    })
  }

  return Promise.resolve({user: session.user})
}

function follow(followId) {
  const {user} = storageService.get('session') || {}
  if (!user) return Promise.reject('user must be loggedin!')

  let userFollow = storageService.get('userFollow')
  const newUserFollow = _createUserFollowers(user._id, followId)
  userFollow.push(newUserFollow)
  storageService.save('userFollow', userFollow)

  return Promise.resolve({userFollow: newUserFollow})
}

function unfollow(followId) {
  const {user} = storageService.get('session') || {}
  if (!user) return Promise.reject('user must be loggedin!')
  
  let userFollow = storageService.get('userFollow')
  userFollow = userFollow.filter(uf => uf.userId !== user._id || followId !== uf.followId)  
  storageService.save('userFollow', userFollow)

  return Promise.resolve({status: 'ok'})
}

function _createUserFollowers(userId, followId) {
  const userFollow = {
    _id: makeId(10),
    userId,
    followId,
    createdAt: getDateISO(),
    updatedAt: getDateISO(),
  }

  return userFollow
}

