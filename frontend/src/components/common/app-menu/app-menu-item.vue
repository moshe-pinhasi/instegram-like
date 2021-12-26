<template>
  <li class="app-menu-item" @click="handleClick">
    <slot/>
  </li>
</template>

<script>
export default {
  name: "AppMenuItem",
  props: {
    item: {
      type: Object | String | Number,
      required: true
    }
  },
  methods: {
    handleClick() {
      this.$parent.handleClick(this.item)
    }
  }
};
</script>
