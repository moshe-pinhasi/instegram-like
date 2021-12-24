<template>
  <div class="app-alert" :class="[`alert-${type}`, isLight ? 'is-light' : 'is-dark']">
    <slot />
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
    }
  }
}
</script>

<style lang="scss" scoped>
</style>