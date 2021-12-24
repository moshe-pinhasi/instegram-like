<template>
  <div class="inputs">
    
    <h3>Inputs</h3>

    <button type="button" @click="toggleError">toggleError</button>

    <div class="row">
      <h4>input default</h4>
      <AppInput placeholder="Name" v-model="myModel" />  
    </div>

    <div class="row">
      <h4>input required</h4>
      <AppInput :required="true" />  
    </div>

    <div class="row">
      <h4>input has error</h4>
      <AppInput :error-message="showError" />  
      <AppInput  />  
    </div>

    <div class="row">
      <h4>input disabled</h4>
      <AppInput :disabled="true" placeholder="Email" />  
    </div>

    <div class="row">
      <h4>input prefix icon</h4>
      <AppInput>
        <template #prefix-icon>
          <i class="far fa-heart"></i>
        </template>
      </AppInput>  
    </div>

    <div class="row">
      <h4>input suffix icon</h4>
      <AppInput>
        <template #suffix-icon>
          <i class="far fa-heart"></i>
        </template>
      </AppInput>
    </div>

    <div class="row">
      <h4>input password</h4>
      <AppInput type="password" />
    </div>

    <div class="row">
      <h4>input number</h4>
      <AppInput type="number" />
    </div>
  </div> 
</template>
<script>
import AppInput from '@/components/form/app-input.vue'
export default {
  components: {
    AppInput
  },
  data() {
    return {
      showError: "",
      myModel: ""
    }
  },
  methods: {
    toggleError() {
      this.showError = this.showError ? "" : "some error in this"
    },
  },
  watch: {
    myModel() {
      console.log('model changed', this.myModel);
    }
  }
}
</script>
<style lang="scss" scoped>
.inputs {
  .row {
    margin: 20px;
  }
}
</style>