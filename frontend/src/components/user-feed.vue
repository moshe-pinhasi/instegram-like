<template>
  <ul class="user-feed">
    <li v-for="post in posts" :key="post._id">
      <post-card :post="post" @add-comment="addComment" @liked="addLike" @friendship-status="followUser" />
    </li>
  </ul>
</template>

<script>
import PostCard from '@/components/post-card.vue'

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
    addComment({post, comment}) {
      this.$store.dispatch({type: 'feedStore/addPostComment', data: {post, comment}})
    },
    addLike(post) {
      this.$store.dispatch({type: 'feedStore/postLike', post})
    },
    followUser({status, post}) {
      if (status === 'follow') {
        this.$store.dispatch({type: 'userStore/followUser', followId: post.creator._id})
      } else {
        this.$store.dispatch({type: 'userStore/unfollowUser', followId: post.creator._id})
      }
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
