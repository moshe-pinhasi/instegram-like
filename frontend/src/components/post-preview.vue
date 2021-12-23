<template>
  <div class="post-preview">
    <media-image :media="post.media" />
  </div>
</template>

<script>
import MediaImage from "@/components/media-image.vue"

export default {
  name: 'PostPreview',
  components: {
    MediaImage
  },
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
}
</style>
