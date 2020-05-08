<template>
  <div class="play-oval gtm-trigger_video">
    <IconPlay class="play-oval__triangle" />
    <div class="play-oval__img">
      <img
        class="play-oval__img"
        src="/images/play.png"
      />
    </div>
  </div>
</template>

<script>
import IconPlay from '~/components/icons/IconPlay'

export default {
  name: 'PlayOval',
  components: {
    IconPlay
  }
}
</script>

<style lang="scss" scoped>
.play-oval {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: $color-white;
  border-radius: 50%;
  opacity: .75;
  backdrop-filter: blur(1.5rem);
  -webkit-backdrop-filter: blur(1.5rem);
  transition: all $transition-time-short;
  position: relative;
  
  &:hover {
    opacity: .55;
  }

  &__triangle {
    max-width: 3.3rem;
    max-height: 3.3rem;
    margin-left: 4%;

    @include xxl {
      width: 1.5vw;
      height: 1.5vw;
    }
    
    @include xs {
      width: 3vw;
      height: 3vw;
    }
  }

  &__img {
    z-index: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    opacity: 0;
  }
}
</style>