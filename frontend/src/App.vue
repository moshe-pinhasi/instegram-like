<template>
  <section class="app-main">
    <app-alert class="loggedin-alert" :class="{'show': showLoggedinAlert}" type="danger">You must be loggedin you follow people</app-alert>
    <main class="app-main-content">
      <router-view />
    </main>
  </section>
</template>
<script>
import {authService} from '@/services/auth.service'
import AppAlert from '@/components/common/app-alert.vue'

export default {
  name: 'App',
  components: {
    AppAlert
  },
  created() {
    const {authenticated} = authService.status()
    if (!authenticated) return

    this.$store.dispatch({type: 'userStore/loadLoggedinUser'})
  },
  computed: {
    showLoggedinAlert() {
      return this.$store.getters['userStore/showLoggedinAlert']
    }
  }
}
</script>
<style lang="scss" scoped>
.app-main {
  padding: 0;
  flex: 1;
  display: flex;

  .app-main-content {
    display: flex;
    flex-direction: column;
    flex: 1;
  }

  .loggedin-alert {
    max-width: 40rem;
    position: absolute;
    left: 50%;
    opacity: 0;
    transform: translate(-50%, -200%);
    transition: all .3s;

    &.show {
      opacity: 1;
      transform: translate(-50%, 0);
    }
  }
}
</style>

