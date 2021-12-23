<template>
  <article class="post-card">
    <div class="post-header">
      <i class="far fa-user-circle"></i> 
      <router-link :to="`${post.creator.nickname}`">{{post.creator.name}}</router-link>
    </div>
    <div class="post-media">
      <img :src="post.media.src" />
    </div>
    <section class="post-details">
      <div class="post-text">{{post.text}}</div>
      <div class="post-actions">
        <i class="far fa-heart"></i>
        <i class="far fa-comment"></i>
        <i class="far fa-paper-plane"></i>
      </div>
      <div class="post-likes">Likes: {{post.likes}}</div>
      <div class="post-comments" v-if="post.comments">
        <div v-if="post.comments > 1">
          View all {{post.comments}} comments
        </div>
        <div v-else-if="post.comments === 1">View {{post.comments}} comment</div>
        <div class="post-comment" v-if="post.commentedBy.length > 0">
          <span class="post-comment-creator">{{post.commentedBy[0].creator.name}}</span>
          {{post.commentedBy[0].comment}}
        </div>
      </div>
      <div class="post-created">{{post.createdAt | timeSince}}</div>
    </section>
    <div class="post-add-comment">
      add comment
    </div>
  </article>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.post-card {
  font-size: 1.4rem;
  width: 100%;
  border-radius: 3px;
  border: 1px solid $clr-grey-1;

  $padding: 1.4rem;

  .post-header {
    padding: $padding;
    border-bottom: 1px solid $clr-grey-2;
    display: flex;
    align-items: center;

    i {
      font-size: 3.2rem;
      margin: 0 1rem 0 0;
    }
  }

  .post-media {
    height: 300px;
    position: relative;

    img {
      height: 100%;
      left: 0;
      position: absolute;
      top: 0;
      user-select: none;
      width: 100%;
      object-fit: cover;
    }
  }

  .post-actions {
    padding: 0 0 1.4rem 0;
    display: flex;
    align-items: center;
    i {
      font-size: 2.2rem;
      margin: 0 1.5rem 0 0;
      cursor: pointer;
      opacity: 1;

      &:hover {
        opacity: 0.3;
      }
    }
  }

  .post-details {
    padding: $padding;
  }

  .post-likes {
    padding: 0 0 1rem 0;
  }

  .post-comments {
    color: $clr-grey-3;
    padding: 0 0 1rem 0;
  }

  .post-comment-creator {
    color: initial;
    // font-weight: bold;
  }

  .post-created {
    text-transform: uppercase;
    font-size: 1rem;
    color: $clr-grey-3;
  }

  .post-add-comment {
    padding: $padding;
  }

  .post-add-comment {
    border-top: 1px solid $clr-grey-2
  }
}
</style>