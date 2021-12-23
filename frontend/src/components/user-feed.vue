<template>
  <ul class="user-feed">
    <li v-for="post in posts" :key="post._id"><post-card :post="post" /></li>
  </ul>
</template>

<script>
import PostCard from '@/components/post-card.vue'

export default {
  name: 'UserFeed',
  components: {
    PostCard
  },
  computed: {
    posts() {
      return this.$store.getters['feedStore/posts']
    }
  }
}
</script>

<style lang="scss" scoped>
.user-feed {
  li {
    margin: 10px 0;
  }
}
</style>
