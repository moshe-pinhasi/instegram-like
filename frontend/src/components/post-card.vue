<template>
  <article class="post-card">
    <div class="post-card-header">
      <router-link class="post-card-user-details" :to="{name: 'user-details', params: {id: post.creator.username}}">
        <i class="post-card-user-avatar far fa-user-circle"></i> 
        {{post.creator.fullname}}
      </router-link>
      <div class="post-card-user-actions">
         <app-menu open-at="right">
          <template #toggler>
            <i class="fas fa-ellipsis-h"></i>
          </template>
          <app-menu-item item="follow">Follow</app-menu-item>
        </app-menu>
      </div>
    </div>
    <div class="post-card-media">
      <media-image :media="post.media" />
    </div>
    <section class="post-card-details">
      <div class="post-card-text">{{post.text}}</div>
      <div class="post-card-actions">
        <i class="far fa-heart" :class="{'fas liked': post.likedByUser}" @click="$emit('liked', post)"></i>
        <i class="far fa-comment"></i>
        <i class="far fa-paper-plane"></i>
      </div>
      <div class="post-card-likes">Likes: {{post.likes}}</div>
      <div class="post-card-comments" v-if="post.comments">
        <div v-if="post.comments > 1">
          View all {{post.comments}} comments
        </div>
        <div class="post-card-comment" v-if="post.commentedBy.length > 0">
          <div class="post-card-comment-row" v-for="(comment, idx) in post.commentedBy" :key="idx">
            <span class="post-card-comment-creator">{{comment.creator.fullname}}</span>
            {{comment.comment}}
          </div>
        </div>
      </div>
      <div class="post-card-created">{{post.createdAt | timeSince}}</div>
    </section>
    <div class="post-card-add-comment">
      <post-comment-form @submit="addComment"/>
    </div>
  </article>
</template>

<script>
import MediaImage from "@/components/media-image.vue"
import PostCommentForm from "@/components/post-comment-form.vue"
import AppMenu from '@/components/common/app-menu/app-menu.vue'
import AppMenuItem from "@/components/common/app-menu/app-menu-item.vue";

export default {
  components: {
    MediaImage,
    PostCommentForm,
    AppMenu,
    AppMenuItem
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

  .post-card-header {
    padding: $padding;
    border-bottom: 1px solid $gray-300;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .post-card-user-details {
      display: flex;
      align-items: center;

      .post-card-user-avatar {
        font-size: 3.2rem;
        margin: 0 1rem 0 0;
      }
    }

    .post-card-user-actions {
      cursor: pointer
    }
  }

  .post-card-media {
    height: 300px;
  }

  .post-card-actions {
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

      &.liked {
        color: $red-primary;
      }
    }
  }

  .post-card-details {
    padding: $padding;
  }

  .post-card-likes {
    padding: 0 0 1rem 0;
  }

  .post-card-comments {
    color: $gray-600;
    padding: 0 0 1rem 0;
  }

  .post-card-comment {
    color: initial;
    > div {
      margin: 0 0 .3rem 0;
    }
  }

  .post-card-comment-creator {
    font-weight: bold;
  }

  .post-card-created {
    text-transform: uppercase;
    font-size: 1rem;
    color: $gray-600;
  }

  .post-card-add-comment {
    padding: $padding;
  }

  .post-card-add-comment {
    border-top: 1px solid $gray-300;
  }
}
</style>