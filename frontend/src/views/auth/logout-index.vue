<template>
  <section class="logout-index">
    <app-loader>Login out...</app-loader>
  </section>
</template>

<script>
import AppLoader from '@/components/common/app-loader.vue'
import { authService } from "@/services/auth.service";

export default {
  name: "LogoutIndex",
  components: {
    AppLoader,
  },
  async created() {
    await authService.logout()
    setTimeout(() => {
      window.location.replace('/')
    }, 3000);
  }
}
</script>

<style lang="scss" scoped>
.logout-index {
  height: 100%;
  position: relative;
}
</style>