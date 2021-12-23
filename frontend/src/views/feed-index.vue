<template>
  <section class="feed-index">
    <user-feed />
  </section>
</template>

<script>
import UserFeed from '@/components/user-feed.vue'

export default {
  name: 'FeedIndex',
  components: {
    UserFeed
  }
}
</script>
