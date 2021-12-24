<template>
  <section class="user-details">
    <h1 v-if="loading">loading user details...</h1>
    <h1 v-if="!loading && !user">Opsss got some error...</h1>
    <div v-if="user" class="user-details-content">
      <user-info-header :user="user" />
      <user-posts :posts="posts" />
    </div>
  </section>
</template>

<script>
import {userService} from '@/services/user.service'
import {feedService} from '@/services/feed.service'

import UserPosts from '@/components/user-posts'
import UserInfoHeader from '@/components/user-info-header'

export default {
  name: 'UserDetails',
  components: {
    UserPosts,
    UserInfoHeader,
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
      const user = await userService.get({nickname})
      this.user = await feedService.getUserInfo(user._id)
      this.posts = await feedService.getUserMedia(this.user._id)
    } catch (e) {
      logError('Could not load user. Please try again later', e);
    } finally {
      this.loading = false
    }
  }
}
</script>
<style lang="scss" scoped>
.user-details {
  margin: 20px 0;

  .user-details-content {
    > :first-child {
      margin: 0 0 4rem 0;
    }
  }
}
</style>