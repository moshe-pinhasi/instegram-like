const cache = {}

export const cacheService = {
  add,
  get
}

function add(key, value, minutesToLive = 10) {
  const millisecondsToLive = minutesToLive * 60 * 1000
  cache[key] = {
    data: {
      expireAt: new Date(Date.now() + millisecondsToLive),
      value
    }
  }
}


function get(key) {
  const data = cache[key]
  if (!data) return null

  if (data.expireAt < Date.now()) {
    delete cache[key]
    return null
  }

  return data.value
}