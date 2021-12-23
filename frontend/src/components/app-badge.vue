<template>
  <span class="app-badge">
    <!-- <slot /> -->
    text
    <div class="badge-val rounded-full">4</div>
  </span>
</template>

<script>
export default {
  props: {
    // value: {
    //   type: Number,
    //   required: true
    // }
  }
}
</script>

<style lang="scss" scoped>
.app-badge {
  position: relative;

  .badge-val {
    position: absolute;
    top: -1rem;
    right: -1.5rem;
    height: 2rem;
    min-width: 2rem;
    font-size: 1.2rem;
    background-color: red;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .rounded-full {
    border-radius: 50%;
  }
}
</style>