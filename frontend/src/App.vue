<template>
  <section class="app-main">
    <main class="app-main-content">
      <router-view />
    </main>
  </section>
</template>
<script>
import {authService} from '@/services/auth.service'

export default {
  name: 'App',
  created() {
    const {authenticated} = authService.status()
    if (!authenticated) return

    this.$store.dispatch({type: 'userStore/loadLoggedinUser'})
  },
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
}
</style>

