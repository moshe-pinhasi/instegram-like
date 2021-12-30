<template>
  <header class="user-info-header">
    <div class="user-profile-pic">
      <i class="far fa-user-circle" data-testid="user-details-profile-picture"></i>
    </div>
    <section class="user-info-details">
      <div>
        <h3 data-testid="user-details-username" class="user-info-username">{{user.username}}</h3>
        <button data-testid="user-details-follow-btn" v-if="loggedinUser && (user.username !== loggedinUser.username)" class="btn btn-outline btn-sm" @click.prevent="updateFriendshipStatus">
          {{followBtn}}
        </button>

        <button data-testid="user-details-edit-btn" v-if="loggedinUser && (user.username === loggedinUser.username)" class="btn btn-outline btn-sm">
          Edit Profile
        </button>
      </div>
      <ul class="user-statistics">
        <li data-testid="user-details-posts"><span>{{user.totalPosts}}</span> posts</li>
        <li data-testid="user-details-followers"><span>{{user.followers}}</span> followers</li>
        <li data-testid="user-details-following"><span>{{user.following}}</span> following</li>
      </ul>
      <h3 data-testid="user-details-fullname" class="user-info-name">{{user.fullname}}</h3>
    </section>
  </header>
</template>

<script>
export default {
  name: 'UserInfoHeader',
  props: {
    user: {
      type: Object,
      required: true,
    }
  },
  computed: {
    followBtn() {
      return this.user.friendshipStatus.following ? 'Unfollow' : 'Follow'
    },
    loggedinUser() {
      return this.$store.getters['userStore/loggedinUser']
    },
  },
  methods: {
    updateFriendshipStatus() {
      this.$emit('friendship-status', {following: this.followBtn === 'Follow'})
    }
  }
}
</script>

<style lang="scss" scoped>
.user-info-header {
  display: flex;

  .user-info-details {
    display: flex;
    flex: 1;
    padding: 10px 0;
    flex-direction: column;

    > div {
      display: flex;
      justify-content: space-between;
    }

    ul {
      display: flex;
    }

    li {
      margin: 0 2rem 0 0;
      font-size: 1.6rem;

      span {
        font-weight: bold;
      }
    }
  }

  .user-profile-pic {
    margin: 0 4rem 0 0;

    i {
      font-size: 8.4rem;
    }
  }
}
</style>