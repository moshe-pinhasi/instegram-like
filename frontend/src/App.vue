<template>
  <div class="app-main">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <app-header />
    <main class="app-main-content">
      <router-view />
    </main>
    <app-footer class="show-in-phone" />
  </div>
</template>
<script>
import AppHeader from '@/components/app-header.vue'
import AppFooter from '@/components/app-footer.vue'

export default {
  components: {
    AppHeader,
    AppFooter,
  },
  created() {
  }
}
</script>
<style lang="scss" scoped>
.app-main {
  padding-top: $desktop-nav-height;

  @include respond(phone) {
    padding-bottom: $footer-nav-height;
  }

  .app-main-content {
    max-width: $max-content-width;
    min-width: $max-content-width;
    margin: 0 auto;

    @include respond(phone) {
      min-width: 100%;
    }
  }
}
</style>
