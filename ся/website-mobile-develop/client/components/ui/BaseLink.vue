<template>
  <nuxt-link :to="localePath(to)" class="static-link">
    <slot />
  </nuxt-link>
</template>

<script>
export default {
  name: 'BaseLink',
  props: {
    to: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.static-link {
  & {
    color: $color-dark-1;
    transition: color $transition-time-short;
  }

  &:hover {
    color: $color-primary;
  }
}
</style>
