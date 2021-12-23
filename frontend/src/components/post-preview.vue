<template>
  <div class="post-preview">
    <!-- {{post.media.src}} -->
    <div class="post-media">
      <img :src="post.media.src" />
    </div>
  </div>
</template>

<script>

export default {
  name: 'PostPreview',
  props: {
    post: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.post-preview {
  height: inherit;
  .post-media {
    height: inherit;
    width: 100%;
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
}
</style>
