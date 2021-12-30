<template>
  <div class="app-input" :class="{'has-prefix': hasPrefixSlot, 'has-suffix': hasSuffixSlot}">
    <label>
      <div class="app-input-inner" :class="{'small-placeholder': focused || !!input}">
        <span class="app-input-placeholder">{{placeholder}}</span>
        <div class="prefix">
          <slot name="prefix-icon"/>
        </div>
        <input :type="type"
              class="input"
              :name="placeholder"
              @blur="onBlur"
              @focus="focused = true"
              @input="$emit('input', input)"
              v-model="input"
              :class="{'input-has-error': hasError, 'input-disabled': disabled, 'input-dirty': dirty}" 
              :disabled="disabled"/>
        <div class="suffix">
          <slot name="suffix-icon"/>
        </div>
      </div>
    </label>
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
      return this.errorMessage || (this.required && this.dirty && !this.input.trim())
    }
  },
  methods: {
    onBlur() {
      this.dirty = true
      this.focused = false
    }
  }
}
</script>

<style lang="scss" scoped>

</style>