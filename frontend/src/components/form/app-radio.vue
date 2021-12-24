<template>
  <label 
    :for="radioId"
    role="radio" 
    tabindex="0" 
    class="app-radio" 
    :class="{'is-checked': label === value, 'is-disabled': disabled}" 
    aria-checked="true">
    <span class="app-radio-input" 
      :class="{'is-checked': label === value, 'is-disabled': disabled}">
      <span class="app-radio-inner"></span>
      <input  type="radio" 
              :id="radioId" 
              @click="$emit('input', label)"
              :disabled="disabled" 
              aria-hidden="true" 
              tabindex="-1" 
              autocomplete="off" 
              class="app-radio-original" 
              value="1">
    </span>
    <span class="app-radio-label">
      <slot />
    </span>
  </label>
</template>

<script>
export default {
  name: "AppRadio",
  props: {
    label: {
      type: Number | String,
      required: true
    },
    value: {
      type: Number | String,
      required: true
    },
    disabled: {
      type: Boolean,
      required: false
    }
  },
  computed: {
    radioId() {
      return `radio-${this._uid}`
    }
  }
}
</script>