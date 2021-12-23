<template>
  <nav class="app-footer">
    <div class="app-footer-content">
      <i class="fas fa-home"></i>
      <i class="fas fa-search"></i>
      <i class="far fa-user-circle"></i>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'AppFooter',
  props: {
  }
}
</script>

<style lang="scss" scoped>
.app-footer {
  position: fixed;
  bottom: 0;
  z-index: 3;
  height: $footer-nav-height;
  width: 100%;
  border-top: 1px solid $clr-grey-1;
  background-color: $clr-white;

  .app-footer-content {
    width: 100%;
    height: 100%;
    padding: 0 2rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    i {
      margin: 0 1rem;
      font-size: 2rem;
      cursor: pointer;
    }
  }

  // .app-header-actions {
  //   display: flex;
  //   align-items: center;
  // }
}
</style>
