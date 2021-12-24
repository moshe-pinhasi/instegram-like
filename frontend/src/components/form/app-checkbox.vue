<template>
  <label :for="checkboxId" 
         class="app-checkbox" 
         :class="{'is-checked': isChecked, 'is-disabled': disabled}">
    <span class="app-checkbox-input" 
          :class="{'is-checked': isChecked, 'is-disabled': disabled}">
      <span class="app-checkbox-inner"></span>
      <input type="checkbox" 
             aria-hidden="false" 
             @click="clicked"
             :id="checkboxId"
             :disabled="disabled"
             class="app-checkbox-original" :value="label">
    </span>
    <span class="app-checkbox-label"><slot /></span>
  </label>
</template>

<script>
export default {
  name: "AppCheckbox",
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
    isChecked() {
      return this.value.includes(this.label)
    },
    checkboxId() {
      return `checkbox-${this._uid}`
    }
  },
  methods: {
    clicked() {
      console.log(this.value)

      let res;
      if (this.value.includes(this.label)) {
        res = this.value.filter(i => i !== this.label)
      } else {
        res = [...this.value, this.label]
      }
      this.$emit('input', res)
      
    }
  }
}
</script>