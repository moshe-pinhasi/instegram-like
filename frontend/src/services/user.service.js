import {storageService} from './storage.service'

export const userService  = {
  get,
  getCurrent
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

