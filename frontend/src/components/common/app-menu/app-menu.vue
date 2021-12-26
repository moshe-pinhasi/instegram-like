<template>
  <div @click="toggle" class="app-menu" v-clickoutside="closeMenu">
    <div class="app-menu-btn">
      <slot name="toggler">
        <button class="btn btn-txt">
          Toggle
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" :class="{'rotate-180': active}">
            <path d="M15.3 9.3a1 1 0 0 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.4l3.3 3.29 3.3-3.3z"></path>
          </svg>
        </button>
      </slot>
    </div>
    <transition name="app-menu-content">
      <ul v-if="active" class="app-menu-content-box" 
        :class="{'hide-shadow': hideShadow}" :style="contentStyles">
        <slot />
      </ul>
    </transition>
  </div>
</template>

<script>
export default {
  name: "AppMenu",
  props: {
    openAt: {
      type: String,
      default: "left",
      validator: (prop) => prop === 'right' || prop === 'left'
    },
    hideShadow: {
      type: Boolean,
      default: false
    },
    closeOnClickouside: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      active: false
    };
  },
  computed: {
    contentStyles() {
      return this.openAt === 'right' ? 'right: 0' : 'left: 0';
    }
  },
  methods: {
    toggle() {
      this.active = !this.active;
    },
    handleClick(item) {
      this.$emit('select', item)
    },
    closeMenu() {
      this.closeOnClickouside && (this.active = false)
    }
  }
};
</script>
