import {storageService} from './storage.service'

import {
  getDateISO, 
  makeId, 
  copy
} from './util.service'

export const authService  = {
  signup,
  login,
  logout,
  status
}

function status() {
    const session = storageService.get('session') || {}
    return Promise.resolve({authenticated: !!session.user})
}

function signup(userCred) {
  const user = _createUser(userCred)
  storageService.save('session', {user})

  return Promise.resolve({user})
}

function login(userCred) {
  const users = storageService.get('user')
  const user = users.filter(u => u.usernam === userCred.username).pop()
  if (!user) {
    return Promise.reject({
      code: 401, 
      errors: {message: 'Sorry, your email or password were incorrect'},
      name: "Unauthorized"
    })
  }
  
  storageService.save('session', {user})
  return Promise.resolve({user: copy(user)})
}

function logout(user) {
  storageService.remove('session')
  return Promise.resolve()
}

function _createUser(userCred) {
  const user = {
    _id: makeId(10),
    fullname: userCred.fullname,
    username: userCred.username.toLowerCase(),
    profileImg: userCred.profileImg,
    email: userCred.email,
    createdAt: getDateISO(),
    updatedAt: getDateISO(),
  }

  // save the user in the user collection
  const users = storageService.get('user')
  users.push(user)
  storageService.save('user', users)

  return user
}

