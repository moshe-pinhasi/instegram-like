
function _getKey(key) {
  return `insta-like-${key}`
}

function get(key) {
  return JSON.parse(localStorage.getItem(_getKey(key)));
}

function save(key, gameState) {
    localStorage.setItem(_getKey(key), JSON.stringify(gameState));
}

function isExist(key) {
  return !!localStorage.getItem(_getKey(key))
}

function remove(key) {
  return localStorage.removeItem(_getKey(key));
}

export const storageService = {
  save,
  get,
  isExist,
  remove
}