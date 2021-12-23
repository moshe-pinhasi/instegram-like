<template>
  <section class="about">
    <h1 v-if="loading">loading user details...</h1>
    <h1 v-if="!loading && !user">Opsss got some error...</h1>
    <div v-if="user" class="">
      <!-- <user-details-header :user="user" /> -->
      <user-posts :user="user" />
    </div>
  </section>
</template>

<script>
import {userService} from '@/services/user.service'
import {postService} from '@/services/post.service'

export default {
  name: 'UserDetails',
  components: {
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
