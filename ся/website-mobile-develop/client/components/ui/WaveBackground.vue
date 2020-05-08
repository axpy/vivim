<template>
  <div class="wave-background">
    <img 
      loading="lazy" 
      src="/images-optimized/wave-right/wave-right-default.png" 
      class="wave-background--wave wave-background--right-wave"
    />
    <img 
      loading="lazy" 
      src="/images-optimized/wave-left/wave-left-default.png" 
      class="wave-background--wave wave-background--left-wave"
    />
  </div>
</template>

<script>

export default {
  name: "WaveBackground"
}
</script>

<style lang="scss" scoped>
.wave-background {
  position: absolute;
  z-index: $z-default;
  left: 0;
  top: 0;
  width: 100%;
  &--wave {
    position: absolute;
    bottom: 0;
  }
  &--right-wave {
    left: 0;
  }
  &--left-wave {
    right: 0;
  }
}
</style>
