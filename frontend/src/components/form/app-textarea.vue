<template>
  <div class="app-textarea">
    <textarea
          class="app-textarea-inner"
          @blur="onBlur"
          @input="$emit('input', input)"
          v-model="input"
          :class="{'textarea-has-error': hasError, 'textarea-disabled': disabled, 'textarea-dirty': dirty}" 
          :disabled="disabled" 
          :placeholder="placeholder" />
    <p class="txt-error" v-if="hasError">{{errorMessage}}</p>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: ""
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
    hasError() {
      return this.errorMessage || (this.required && this.dirty && !this.input.trim())
    }
  },
  methods: {
    onBlur() {
      this.dirty = true
    }
  }
}
</script>