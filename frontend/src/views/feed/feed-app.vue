<template>
  <section class="feed-app">
    <app-header />
    <main class="feed-app-main-content">
      <router-view />
    </main>
    <app-footer class="show-in-phone" />
  </section>
</template>

<script>
import AppHeader from '@/components/app-header.vue'
import AppFooter from '@/components/app-footer.vue'
import {authService} from '@/services/auth.service'

export default {
  name: 'FeedApp',
  components: {
    AppHeader,
    AppFooter,
  },
  async created() {
    const {authenticated} = await authService.status()
    if (this.loggedinUser || !authenticated) return
    this.$store.dispatch({type: 'userStore/loadLoggedinUser'})
  },
  computed: {
    loggedinUser() {
      return this.$store.getters['userStore/loggedinUser']
    }
  }
}
</script>
<style lang="scss" scoped>
.feed-app {
  padding-top: $desktop-nav-height;

  .feed-app-main-content {
    max-width: $max-content-width;
    min-width: $max-content-width;
    margin: 0 auto;

    @include respond(phone) {
      min-width: 100%;
    }
  }

  @include respond(phone) {
    padding-bottom: $footer-nav-height;
  }
}
  
</style>

