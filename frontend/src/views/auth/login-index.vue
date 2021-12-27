<template>
  <section class="login-index">

    <div class="auth-box">
      <section class="title"><h1>Instagem</h1></section>
      <section class="form-box">
        <form class="login-box" @submit.prevent="submit">
          <div class="row">
            <app-input placeholder="Username" :error-message="errors.username" v-model="user.username" />
          </div>

          <div class="row">
            <app-input type="password" placeholder="Password" :error-message="errors.password" v-model="user.password" />
          </div>

          <div class="row">
            <button class="btn btn-primary full-width">Log in</button>
          </div>
        </form>
      </section>
    </div>
  </section>
</template>

<script>
import AppInput from '@/components/form/app-input.vue'

export default {
  name: "LoginIndex",
  components: {
    AppInput,
  },
  data() {
    return {
      user: {
        username: '',
        password: ''
      },
      errors: {}
    }
  },
  methods: {
    isValidate(user) {
      const errors = {}
      if (!user.username) {
        errors.username = "This field is required."
      }

      if (!user.password) {
        errors.password = "This field is required."
      } else if (user.password.length < 3) {
        errors.password = "Password must be at least 3 characters."
      }

      return Object.keys(errors).length > 0 ? errors : null
    },
    submit() {
      console.log('submit!');
      
      const errors = this.isValidate(this.user)

      if (errors) {
        this.errors = errors
        return
      }

      this.errors = {}
      console.log('do login!');
    }
  }
}
</script>

<style lang="scss" scoped>
.login-index {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;

  .auth-box {
    width: 100%;
    max-width: 35rem;
    // max-width: 35rem;
    background-color: $white;
    border: 1px solid $border-base;
    border-radius: 1px;
    padding: 2rem 5rem 3rem 5rem;
    // 20px 70px 30px 70px

    .title {
      font-family: $logo-font-family;
      text-align: center;
      margin-bottom: 2rem;
    }

    .form-box {

    }
  }
}
</style>