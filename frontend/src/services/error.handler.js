import Vue from 'vue';

window.onerror = function (error) {
  console.log('************ WINDOW ERROR HANDLER **************')
  console.error(error)
  console.log('************************************************')

  try {
    logError(error)
  } catch(err) {
    console.error(err) // we can save in localstorage and send it later again
  }
}

// err: error trace
// vm: component in which error occured
// info: Vue specific error information such as lifecycle hooks, events etc.
Vue.config.errorHandler = (err, vm, info) => {  
  console.log('************ VUE ERROR HANDLER **************')
  console.error(err)
  console.error(vm.$vnode.tag)
  console.error(info)
  console.log('*********************************************')

  try {
    logError({err: err.message, stack: JSON.stringify(err.stack), tag: vm.$vnode.tag, info})
  } catch(err) {
    console.error(err) // we can save in localstorage and send it later again
  }
};