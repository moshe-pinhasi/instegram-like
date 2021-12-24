<template>
  <header class="user-info-header">
    <div class="user-profile-pic">
      <i class="far fa-user-circle"></i>
    </div>
    <section class="user-info-details">
      <div>
        <h3 class="user-info-name">{{user.name}}</h3>
        <button class="btn btn-outline btn-sm">Follow</button>
      </div>
      <ul class="user-statistics">
        <li><span>{{user.totalPosts}}</span> posts</li>
        <li><span>{{user.followers}}</span> followers</li>
        <li><span>{{user.following}}</span> following</li>
      </ul>
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