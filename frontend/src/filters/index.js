import Vue from 'vue'

import {timeSince} from '../services/util.service'

Vue.filter('timeSince', (value) => {
  if (!value) return ''

  if (typeof value === 'string') {
    return timeSince(new Date(value))
  }
  return timeSince(value)
})
