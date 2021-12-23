export default {
  getRandomInt,
  makeId,
  getDateISO,
  toBase64,
  shuffle,
  copy,
  arrayToMap,
  timeSince
}

export function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

export function makeId(length = 5) {
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var txt = '';
  for (let i = 0; i < length; i++) {
      txt += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return txt;
}

export function getDateISO() {
  const date = new Date()
  return date.toISOString()
}

export function toBase64(file, cb) {
  const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      cb(reader.result);
  }
}

export function shuffle(array) {
  for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
  }

  return array
}

export function copy(value) {
  return JSON.parse(JSON.stringify(value))
}

export function arrayToMap(arr = [], byProp = '_id') {
  return arr.reduce( (acc, item) => {
    acc[item[byProp]] = item;
    return acc
  }, {})
}

export function timeSince(date) {

  var seconds = Math.floor((new Date() - date) / 1000);

  var interval = seconds / 31536000;

  if (interval >= 1) {
    return Math.floor(interval) + ` year${interval > 1 && 's'} ago`
  }
  interval = seconds / 2592000;
  if (interval >= 1) {
    return Math.floor(interval) + ` month${interval > 1 && 's'} ago`
  }
  interval = seconds / 86400;
  if (interval >= 1) {
    return Math.floor(interval) + ` day${interval > 1 && 's'} ago`
  }
  interval = seconds / 3600;
  if (interval >= 1) {
    return Math.floor(interval) + ` hour${interval > 1 && 's'} ago`;
  }
  interval = seconds / 60;
  if (interval >= 1) {
    return Math.floor(interval) + ` minute${interval > 1 && 's'} ago`;
  }
  return Math.floor(seconds) + " seconds ago";
}

