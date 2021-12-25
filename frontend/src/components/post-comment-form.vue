<template>
  <section class="post-comment-form"> 
    <form @submit.prevent="submit">
      <textarea aria-label="Add a comment…" 
                data-testid="post-comment-text-area" 
                placeholder="Add a comment…" 
                autocomplete="off" 
                v-model="comment"
                autocorrect="off">
      </textarea>
      <button class="btn btn-txt btn-primary" 
              :class="{'btn-disabled': !comment}"
              data-testid="post-comment-input-button"
              :disabled="!comment" 
              type="submit">
              Post
      </button>
    </form>
  </section>
</template>
<script>
export default {
  data() {
    return {
      comment: ""
    }
  },
  methods: {
    submit() {
      this.$emit('submit', this.comment)
      this.comment = ""
    }
  }
}
</script>

<style lang="scss" scoped>
.post-comment-form {
  form {
    display: flex;

    .btn {
      padding: 0;

      &:not(.btn-disabled) {
        font-weight: bold;
      }
    }

    textarea {
      flex: 1;
      margin-right: 1rem;
      background: 0 0;
      border: 0;
      resize: none;
      height: 18px;
      line-height: 18px;
      max-height: 80px;
      outline: 0;
      padding: 0;
      width: 0;
      // font-family: $main-font-family;
    }
  }
}
</style>