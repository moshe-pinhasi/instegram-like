<template>
  <div class="media-image">
    <img :src="media.src" />
  </div>
</template>

<script>
export default {
  name: 'MediaImage',
  props: {
    media: {
      type: Object,
      required: true,
      validator: (prop) => prop.type === 'image' && prop.src
    }
  }
}
</script>

<style lang="scss" scoped>
.media-image {
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
</style>