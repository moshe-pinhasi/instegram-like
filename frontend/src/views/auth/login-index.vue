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
    submit() {
      console.log('submit!');
      
      const errors = this.isValidate(this.user)

      if (errors) {
        this.errors = errors
        return
      }

      this.loading = true
      this.errors = {}
      setTimeout(() => {
        console.log('login in process!');
        this.loading = false
      }, 3000);
    }
  }
}
</script>

<style lang="scss" scoped>
.login-index {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;

  .auth-box {
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
      margin: 2rem 0;
      letter-spacing: 4px;
    }
  }

  .spinner {
    position: absolute;
    left: 30%;
  }
}
</style>