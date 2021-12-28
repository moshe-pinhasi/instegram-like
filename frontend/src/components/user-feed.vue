<template>
  <ul class="user-feed">
    <li v-for="post in posts" :key="post._id">
      <post-card :post="post" @add-comment="addComment" @liked="addLike" />
    </li>
  </ul>
</template>

<script>
import PostCard from '@/components/post-card.vue'
import {postService} from '@/services/post.service'

export default {
  name: 'UserFeed',
  components: {
    PostCard
  },
  created() {
    this.$store.dispatch({type: 'feedStore/loadPosts'})
  },
  computed: {
    posts() {
      return this.$store.getters['feedStore/posts']
    }
  },
  methods: {
    async addComment({post, comment}) {
      console.log(`adding comment ${comment} to post id `, post._id);
      // const savedComment = await postService.addComment(post._id, comment)
      // Update the post in the feedStore
    },
    async addLike(post) {
      this.$store.dispatch({type: 'feedStore/postLike', post})
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
