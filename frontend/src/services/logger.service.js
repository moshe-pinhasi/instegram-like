import {getDateISO} from './util.service'

function doLog(level, ...args) {
  let time = getDateISO()
  time = time.substring(0, time.lastIndexOf(":")).replace("T", " ")

  const colors = {
    'DEBUG': 'yellow',
    'INFO': '#00c732',
    'WARN': 'orange',
    'ERROR': 'red'
  }
  console[level.toLowerCase()](`%c [${time}] %c [${level}]`, 'color:white;', `color:${colors[level]};`, ...args);
}


export function logDebug(...args) {
  doLog('DEBUG', ...args)
}

export function logInfo(...args) {
  doLog('INFO', ...args)
}

export function logWarn(...args) {
  doLog('WARN', ...args);
}

export function logError(...args) {
  doLog('ERROR', ...args)
}

window.logDebug = logDebug
window.logInfo = logInfo
window.logWarn = logWarn
window.logError = logError