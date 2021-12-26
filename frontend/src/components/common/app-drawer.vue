<template>
  <div class="app-drawer" :class="[value && 'app-drawer-open']">
    <div class="backdrop" @click="$emit('input', !value)"></div>
    <div class="app-drawer-content" :class="[`app-drawer-open-from-${position}`]">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppDrawer',
  props: {
    value: {
      type: Boolean,
      require: true
    },
    position: {
      type: String,
      default: 'left',
      validator: prop => ['left', 'right', 'top', 'bottom'].includes(prop) 
    }
  },
  watch: {
    value(value) {
      if (value) {
        document.body.classList.add('app-drawer-prevent-scroll')
      } else {
        document.body.classList.remove('app-drawer-prevent-scroll')
      }
    }
  }
}
</script>