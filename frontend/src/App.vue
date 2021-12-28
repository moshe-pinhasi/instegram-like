<template>
  <div class="app-main" :class="{'has-header': loggedinUser}">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <app-header v-if="loggedinUser" />
    <main class="app-main-content">
      <router-view />
    </main>
    <app-footer class="show-in-phone" v-if="loggedinUser" />
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
  },
  computed: {
    loggedinUser() {
      return false
    }
  }
}
</script>
<style lang="scss" scoped>
.app-main {
  padding: 0;
  flex: 1;
  // min-height: 100%;
  // height: 100%;

  &.has-header {
    padding-top: $desktop-nav-height;
  
    @include respond(phone) {
      padding-bottom: $footer-nav-height;
    }
  }

  .app-main-content {
    max-width: $max-content-width;
    min-width: $max-content-width;
    margin: 0 auto;
    // min-height: 100%;
    display: flex;
    height: 100%;

    > section {
      // min-height: 100vh;
      // background: red;
      flex: 1;
      // height: 100%;
    }

    @include respond(phone) {
      min-width: 100%;
    }
  }
}
</style>

