<template>
  <span class="app-badge">
    <slot />
    <sup class="app-badge-value" :class="{'is-dot': dot}">{{value}}</sup>
  </span>
</template>

<script>
export default {
  props: {
    value: {
      type: Number | String,
      required: false
    },
    dot: {
      type: Boolean,
      required: false
    }
  }
}
</script>

<style lang="scss" scoped>

</style>