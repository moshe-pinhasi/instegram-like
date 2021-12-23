<template>
  <section class="user-details">
    <h1 v-if="loading">loading user details...</h1>
    <h1 v-if="!loading && !user">Opsss got some error...</h1>
    <div v-if="user" class="">
      <!-- <user-details-header :user="user" /> -->
      <user-posts :posts="posts" />
    </div>
  </section>
</template>

<script>
import {userService} from '@/services/user.service'
import {postService} from '@/services/post.service'

import UserPosts from '@/components/user-posts'

export default {
  name: 'UserDetails',
  components: {
    UserPosts
  },
  data() {
    return {
      loading: false,
      user: null,
      posts: []
    }
  },
  async created() {
    try {
      this.loading = true
      const nickname = this.$route.params.id
      console.log('nickname', nickname);
      this.user = await userService.get({nickname})
      this.posts = await postService.get({userId: this.user._id})
    } catch (e) {
      console.error(e);
    } finally {
      this.loading = false
    }
  }
}
</script>
<style lang="scss" scoped>
.user-details {
  margin: 20px 0;
}
</style>