<template>
  <div
    class="base-video-modal-invoker gtm-trigger_video"
    @click.stop="openModal"
  >
    <BasePicture
      v-if="config"
      :config="config"
    />
    <div
      v-if="isPlay"
      class="base-video-modal-invoker__play"
    >
      <PlayOval class="base-video-modal-invoker__play-img" />
    </div>
    <slot />
  </div>
</template>

<script>
import BasePicture from '~/components/ui/BasePicture'
import PlayOval from '~/components/ui/PlayOval'

export default {
  name: 'BaseVideoModalInvoker',
  components: {
    BasePicture,
    PlayOval
  },
  props: {
    config: {
      type: Object,
      required: false
    }
  },
  data() {
    return {
      isPlay: false,
      ...this.config
    }
  },
  methods: {
    openModal() {
      this.$store.dispatch('modal/openModal', 'VideoWrapper')
    }
  }
}
</script>

<style lang="scss" scoped>
.base-video-modal-invoker {
  cursor: pointer;

  &__play {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 16rem;
    height: 16rem;

    &-img {
      opacity: 1;
  
      &:hover {
        opacity: 1;
      }

      &::v-deep .play-oval__triangle {
        width: 4rem;
        height: 3.3rem;
  
        @include l {
          width: 2rem;
          height: 2rem;
        }
  
        @include xs {
          width: 1.5rem;
          height: 1.5rem;
        }
      }
    }

    @include l {
      width: 12rem;
      height: 12rem;
    }
    
    @include xs {
      width: 10rem;
      height: 10rem;
    }
  }
}
</style>