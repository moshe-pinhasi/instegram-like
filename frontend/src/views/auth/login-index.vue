<template>
  <section class="login-index">
    <app-card class="auth-box">
      <section class="logo-section"><h1>Instagem</h1></section>
      <form class="login-form" @submit.prevent="submit">
        <div class="row">
          <app-input placeholder="Username" :error-message="errors.username" v-model="user.username" />
        </div>

        <div class="row">
          <app-input type="password" placeholder="Password" :error-message="errors.password" v-model="user.password" />
        </div>

        <div class="row">
          <button class="btn btn-primary full-width">
            <app-spinner v-if="loading" class="spinner" />
            Log in
          </button>
        </div>
        <div class="row">
          <p class="txt-error">{{errors.message}}</p>
        </div>
      </form>
    </app-card>

    <app-card class="auth-box switch-page-box">
      Don't have an account? <router-link :to="{name: 'signup-index'}" class="btn btn-txt"> Sign up</router-link>
    </app-card>
  </section>
</template>

<script>
import AppInput from '@/components/form/app-input.vue'
import AppSpinner from '@/components/common/app-spinner.vue'
import AppCard  from '@/components/common/app-card.vue'

import {authService} from '@/services/auth.service'

export default {
  name: "LoginIndex",
  components: {
    AppInput,
    AppSpinner,
    AppCard,
  },
  data() {
    return {
      user: {
        username: '',
        password: ''
      },
      errors: {},
      loading: false
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
    async submit() {
      console.log('login-submit');
      const errors = this.isValidate(this.user)
      if (errors) {
        this.errors = errors
        return
      }

      try {
        this.loading = true
        this.errors = {}
        console.log('login in process...');
        await authService.login(this.user)        
        await this.$store.dispatch({type: 'userStore/loadLoggedinUser'})
        
        setTimeout(() => {
          this.loading = false
          this.$router.push('/')
        }, 3000);
      } catch(e) {
        setTimeout(() => {
          this.errors = e.errors
          this.loading = false
        }, 3000);
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.login-index {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .auth-box {
    width: 100%;
    max-width: 35rem;

    &:not(:last-child) {
      margin: 0 0 1rem 0;
    }

    &.switch-page-box {
      font-size: 1.3rem;
      text-align: center;
      color: $gray-700;
    }

    .logo-section {
      font-family: $logo-font-family;
      text-align: center;
      letter-spacing: 4px;
    }

    .login-form {
      margin: 2rem 0 0 0;
    }
  }

  .spinner {
    position: absolute;
    left: 30%;
  }
}
</style>