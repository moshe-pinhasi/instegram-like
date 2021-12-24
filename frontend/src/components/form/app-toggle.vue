<template>
  <div role="switch" aria-checked="true" class="app-toggle" :class="{'is-checked': input}">
    <input type="checkbox" name="" true-value="true" class="app-toggle-input">
    <span class="app-toggle-core" @click="onClick" :class="{'is-disabled': disabled}"></span>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Boolean,
      default: true
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      input: ""
    }
  },
  created() {
    this.input = this.value
  },
  computed: {

  },
  methods: {
    onClick() {
      if (this.disabled) return

      this.input = !this.input 
      this.$emit('input', this.input)
    }
  }
}
</script>

<style lang="scss" scoped>
// .app-toggle {
  
// }
</style>