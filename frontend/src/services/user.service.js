import {storageService} from './storage.service'

export const userService  = {
  get
}

function get(filterBy = {}) {
  const users = storageService.get('user')
  const user = users.filter(user => user.nickname === filterBy.nickname).pop()

  if (!user) return Promise.reject('User not found!')

  return Promise.resolve(user)
}