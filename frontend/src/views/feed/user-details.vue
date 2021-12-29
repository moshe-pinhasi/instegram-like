<template>
  <section class="user-details">
    <h1 v-if="loading">loading user details...</h1>
    <h1 v-if="!loading && !user">Opsss got some error...</h1>
    <div v-if="user" class="user-details-content">
      <user-info-header @friendship-status="followUser" :user="user" />
      <hr />
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
  created() {
    this.loadUser()
  },
  methods: {
    async followUser({following}) {
      await this.$store.dispatch({type: 'userStore/updateFriendshipStatus', followId: this.user._id, following})
      this.user.friendshipStatus = {following}
    },
    async loadUser() {
      try {
        this.loading = true
        const username = this.$route.params.id
        const user = await userService.get({username})
        this.user = await feedService.getUserInfo(user._id)
        this.posts = await feedService.getUserMedia(this.user._id)
      } catch (e) {
        logError('Could not load user. Please try again later', e);
      } finally {
        this.loading = false
      }
    },
  },
  watch: {
    '$route.params.id'() {
      this.loadUser()
    }
  }
}
</script>
<style lang="scss" scoped>
.user-details {
  margin: 20px 0;

  .user-details-content {
    hr {
      margin: 4rem 0;
    }
  }
}
</style>