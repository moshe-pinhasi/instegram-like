<template>
  <nav class="app-header">
    <div class="app-header-content">
      <div class="logo"></div>
      <div class="app-header-actions">
        <i class="fas fa-home hide-for-phone"></i>
        <i class="far fa-plus-square"></i>
        <i class="far fa-heart"></i>
        <i class="far fa-comment-dots"></i>
        <i class="far fa-user-circle hide-for-phone"></i>
      </div>
    </div>  
  </nav>
</template>

<script>
export default {
  name: 'AppHeader',
  props: {
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
  background-color: $clr-white;

  .app-header-content {
    width: 100%;
    height: 100%;
    padding: 0 2rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .app-header-actions {
    display: flex;
    align-items: center;
    i {
      margin: 0 1rem;
      font-size: 2rem;
      cursor: pointer;
    }
  }
}
</style>
