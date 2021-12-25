<template>
  <article class="post-card">
    <div class="post-header">
      <i class="far fa-user-circle"></i> 
      <router-link :to="`${post.creator.nickname}`">{{post.creator.name}}</router-link>
    </div>
    <div class="post-media">
      <media-image :media="post.media" />
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
        <div class="post-comment" v-if="post.commentedBy.length > 0">
          <span class="post-comment-creator">{{post.commentedBy[0].creator.name}}</span>
          {{post.commentedBy[0].comment}}
        </div>
      </div>
      <div class="post-created">{{post.createdAt | timeSince}}</div>
    </section>
    <div class="post-add-comment">
      <post-comment-form @submit="addComment"/>
    </div>
  </article>
</template>

<script>
import MediaImage from "@/components/media-image.vue"
import PostCommentForm from "@/components/post-comment-form.vue"

export default {
  components: {
    MediaImage,
    PostCommentForm
  },
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  methods: {
    addComment(comment) {
      this.$emit('add-comment', {post: this.post, comment})
    }
  }
}
</script>

<style lang="scss" scoped>
.post-card {
  font-size: 1.4rem;
  width: 100%;
  border-radius: 3px;
  border: 1px solid $gray-400;

  $padding: 1.4rem;

  .post-header {
    padding: $padding;
    border-bottom: 1px solid $gray-300;
    display: flex;
    align-items: center;

    i {
      font-size: 3.2rem;
      margin: 0 1rem 0 0;
    }
  }

  .post-media {
    height: 300px;
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
    color: $gray-600;
    padding: 0 0 1rem 0;
  }

  .post-comment {
    color: initial;
  }
  .post-comment-creator {
    font-weight: bold;
  }

  .post-created {
    text-transform: uppercase;
    font-size: 1rem;
    color: $gray-600;
  }

  .post-add-comment {
    padding: $padding;
  }

  .post-add-comment {
    border-top: 1px solid $gray-300;
  }
}
</style>