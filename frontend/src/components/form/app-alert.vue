<template>
  <div class="app-alert" :class="[`alert-${type}`, isLight ? 'is-light' : 'is-dark']">
    <div class="alert-content">
      <slot />
    </div>
    <button v-if="showClose" 
            class="has-close-btn"
            @click="$emit('close')">
      x
    </button>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'info'
    },
    isLight: {
      type: Boolean,
      default: false
    },
    showClose: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style lang="scss" scoped>
</style>