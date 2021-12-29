<template>
  <nav class="app-header">
    <div class="app-header-content">
      <div class="app-logo">
          <router-link :to="{name: 'feed-index'}"><h1>Instagem</h1></router-link>
      </div>
      <div class="app-header-actions">
        <router-link tag="li" :to="{name: 'feed-index'}">
          <i class="fas fa-home hide-for-phone"></i>
        </router-link>
        <i class="far fa-plus-square" v-if="loggedinUser"></i>
        <i class="far fa-heart" v-if="loggedinUser"></i>
        <i class="far fa-comment-dots" v-if="loggedinUser"></i>
        <app-menu open-at="right">
          <template #toggler>
            <i class="far fa-user-circle hide-for-phone"></i>
          </template>
          <router-link v-if="!loggedinUser" tag="li" class="app-menu-item" :to="{name: 'login-index'}">Login</router-link>
          <template v-else>
            <router-link tag="li" 
                         :to="{name: 'user-details', params: {id: loggedinUser.username}}"
                         class="app-menu-item">Profile</router-link>
            <router-link tag="li" 
                         :to="{name: 'user-details', params: {id: loggedinUser.username}}"
                         class="app-menu-item">Settings</router-link>
            <router-link tag="li" 
                         :to="{name: 'logout-index'}"
                         class="app-menu-item logout">Logout</router-link>
          </template>
        </app-menu>
      </div>
    </div>  
  </nav>
</template>

<script>
import AppMenu from '@/components/common/app-menu/app-menu.vue'
import AppMenuItem from "@/components/common/app-menu/app-menu-item.vue";
export default {
  name: 'AppHeader',
  components: {
    AppMenu,
    AppMenuItem,
  },
  computed: {
    loggedinUser() {
      return this.$store.getters['userStore/loggedinUser']
    },
    userMenu() {
      return this.loggedinUser ? ['Profile', 'Logout'] : ['Login']
    }
  }
}
</script>

<style lang="scss" scoped>
.app-header {
  position: fixed;
  top: 0;
  z-index: 3;
  height: $desktop-nav-height;
  width: 100%;
  border-bottom: 1px solid $gray-400;
  background-color: $white;

  .app-header-content {
    width: 100%;
    height: 100%;
    padding: 0 2rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    .app-logo {
      font-family: $logo-font-family;
      letter-spacing: 4px;
    }
  }

  .app-header-actions {
    display: flex;
    align-items: center;
    i {
      margin: 0 1rem;
      font-size: 2rem;
      cursor: pointer;
    }

    .app-menu-item.logout {
      border-top: 1px solid $gray-400;
    }
  }
}
</style>
