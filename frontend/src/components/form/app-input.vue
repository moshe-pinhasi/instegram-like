<template>
  <div class="app-input" :class="{'has-prefix': hasPrefixSlot, 'has-suffix': hasSuffixSlot}">
    <div class="input-row">
      <div class="prefix">
        <slot name="prefix-icon"/>
      </div>
      <input :type="type"
            class="input"
            @blur="onBlur"
            @input="$emit('input', input)"
            v-model="input"
            :class="{'input-has-error': hasError, 'input-disabled': disabled, 'input-dirty': dirty}" 
            :disabled="disabled" 
            :placeholder="placeholder" />
      <div class="suffix">
        <slot name="suffix-icon"/>
      </div>
    </div>
    <p class="txt-error">{{errorMessage}}</p>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: "text"
    },
    placeholder: {
      type: String,
      default: ""
    },
    required: {
      type: Boolean,
      default: false
    },
    errorMessage: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      dirty: false,
      focused: false,
      input: ""
    }
  },
  created() {
    this.input = this.value
  },
  computed: {
    hasPrefixSlot() {
      return !!this.$slots['prefix-icon']
    },
    hasSuffixSlot() {
      return !!this.$slots['suffix-icon']
    },
    hasError() {
      return this.errorMessage || (this.required && this.dirty && !this.val)
    }
  },
  methods: {
    onBlur() {
      this.dirty = true
    }
  }
}
</script>

<style lang="scss" scoped>

</style>