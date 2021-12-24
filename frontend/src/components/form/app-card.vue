<template>
  <div class="app-card" :class="{'has-shadow': hasShadow}">
    <div class="app-card-header">
      <slot name="header" />
    </div>
    <div class="app-card-body"><slot /></div>
  </div>
</template>

<script>
export default {
  props: {
    hasShadow: {
      type: Boolean,
      default: false
    }
  }
}
</script>