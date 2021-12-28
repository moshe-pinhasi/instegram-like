<template>
  <section class="signup-index">
    <app-card class="auth-box">
      <section class="logo-section"><h1>Instagem</h1></section>
      <section class="description-section">
        Sign up to share photos with your friends.
      </section>
      <form class="signup-form" @submit.prevent="submit">
        <div class="row">
          <app-input placeholder="Email" :error-message="errors.email" v-model="user.email" />
        </div>
        <div class="row">
          <app-input placeholder="Full Name" :error-message="errors.fullname" v-model="user.fullname" />
        </div>
        <div class="row">
          <app-input placeholder="Username" :error-message="errors.username" v-model="user.username" />
        </div>

        <div class="row">
          <app-input type="password" placeholder="Password" :error-message="errors.password" v-model="user.password" />
        </div>

        <div class="row">
          <button class="btn btn-primary full-width">
            <app-spinner v-if="loading" class="spinner" />
            Sign up
          </button>
        </div>
      </form>
    </app-card>

    <app-card class="auth-box switch-page-box">
      Have an account? <router-link :to="{name: 'login-index'}" class="btn btn-txt">Log in</router-link>
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
.signup-index {
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

    .description-section {
      color: $gray-700;
      text-align: center;
      margin: 1rem 0 0 0;
    }

    &.switch-page-box {
      font-size: 1.3rem;
      color: $gray-700;
      text-align: center;
    }

    .logo-section {
      font-family: $logo-font-family;
      letter-spacing: 4px;
    }

    .signup-form {
      margin: 2rem 0 0 0;
    }
  }


  .spinner {
    position: absolute;
    left: 30%;
  }
}
</style>