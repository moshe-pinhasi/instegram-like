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
.app-input {
  height: calc(#{$input-height} + 1.5rem);

  .input-row {
    position: relative;
    display: flex;
  }

  .prefix,
  .suffix {
    position: absolute;
    top: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.8rem;
  }

  .prefix {
    left: 1.5rem;
  }

  .suffix {
    right: 1.5rem;
  }

  &.has-prefix .input {
    padding-left: 4rem;
  }

  &.has-suffix .input {
    padding-right: 4rem;
  }
}
</style>