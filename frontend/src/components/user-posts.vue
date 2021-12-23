<template>
  <ul class="user-posts">
    <li v-for="post in posts" :key="post._id">
      <post-preview :post="post" />
    </li>
  </ul>
</template>

<script>
import PostPreview from '@/components/post-preview.vue'

export default {
  name: 'UserPosts',
  components: {
    PostPreview
  },
  props: {
    posts: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.user-posts {
  $box-size: 19rem;
  display: inline-flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: calc((#{$max-content-width} - (#{$box-size} * 3)) / 2);

  li {
    height: $box-size;
    width: $box-size;
  }
}
</style>
