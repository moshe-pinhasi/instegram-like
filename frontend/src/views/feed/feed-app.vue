<template>
  <section class="feed-app">
    <app-header />
    <router-view />
    <app-footer class="show-in-phone" />
  </section>
</template>

<script>
import AppHeader from '@/components/app-header.vue'
import AppFooter from '@/components/app-footer.vue'

export default {
  name: 'FeedApp',
  components: {
    AppHeader,
    AppFooter,
  },
  created() {
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

  @include respond(phone) {
    padding-bottom: $footer-nav-height;
  }
}
  
</style>

