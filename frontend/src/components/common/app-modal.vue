<template>
  <div class="app-modal" :class="[value && 'app-modal-open']">
    <div class="backdrop" @click="closeOnClick && $emit('input', !value)"></div>
    <div class="app-modal-content" :class="[`app-modal-open-from-${position}`]">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppModal',
  props: {
    value: {
      type: Boolean,
      require: true
    },
    position: {
      type: String,
      default: 'bottom',
      validator: prop => ['top', 'bottom'].includes(prop) 
    },
    closeOnClick: {
      type: Boolean,
      default: true
    }
  },
  watch: {
    value(value) {
      if (value) {
        document.body.classList.add('app-modal-prevent-scroll')
      } else {
        document.body.classList.remove('app-modal-prevent-scroll')
      }
    }
  }
}
</script>