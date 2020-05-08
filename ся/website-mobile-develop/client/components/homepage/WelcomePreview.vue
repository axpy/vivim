<template>
  <div class="welcome-preview">
    <img
      loading="lazy"
      class="welcome-preview__oval"
      alt="oval"
      src="/images/Oval.svg"
    >
    <BasePicture
      class="welcome-preview__phone-id"
      :config="imageConfig"
    />
    <BaseVideoModalInvoker class="welcome-preview__photo-play">
      <PlayOval />
    </BaseVideoModalInvoker>
  </div>
</template>

<script>
import BasePicture from '~/components/ui/BasePicture'
import BaseVideoModalInvoker from '~/components/ui/BaseVideoModalInvoker'
import PlayOval from '~/components/ui/PlayOval'

export default {
  name: 'WelcomePreview',
  components: {
    BasePicture,
    BaseVideoModalInvoker,
    PlayOval
  },
  data() {
    return {
      imageConfig: {
        image: 'phone_id.png',
        alt: 'Phone'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.welcome-preview {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  &__oval {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: inherit;
    height: inherit;

    @include xxl {
      width: 39vw;
    }

    @include xs {
      width: 75vw;
      height: inherit;
    }
  }
  
  &__phone-id {
    display: block;
    height: 66rem;
    width: 59rem;
    z-index: $z-low-below;

    @include xxl {
      width: 34vw;
      height: 38vw;
    }

    @include xs {
      width: 55vw;
      height: 64vw;
    }
  }

  &__photo-play {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 16rem;
    height: 16rem;
    z-index: $z-low;

    @include xxl {
      top: 48%;
      width: 8.2vw;
      height: 8.2vw;
    }
    
    @include xs {
      width: 15vw;
      height: 15vw;
    }
  }
}
</style>
