<template>
  <div
    class="try-it"
    id="apps"
  >
    <div class="try-it__main">
      <BasePicture :config="waveImageConfig"/>
      <div class="try-it__content">
        <h2 class="try-it__header">{{ $t(`homepage.try_it.header`) }}</h2>
        <MobileLinks />
      </div>
    </div>
    <div class="try-it__mobile-app">
      <BasePicture :config="mobileImageConfig"/>
    </div>
  </div>
</template>

<script>
import MobileLinks from '~/components/tryit/MobileLinks'
import BasePicture from '~/components/ui/BasePicture'

export default {
  name: 'TryIt',
  components: {
    MobileLinks,
    BasePicture
  },
  data() {
    return {
      mobileImageConfig: {
        image: 'iphone_image.png',
        alt: 'Iphone Image',
        pictureType: 'auto'
      },
      waveImageConfig: {
        image: 'wave-new.png',
        alt: 'Wave',
        pictureType: 'wave--default'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.try-it {
  & {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    height: 60rem;
    width: 100%;
    background-color: $color-light-2;
    padding: 0px 2rem;

    @include l {
      height: 42rem;
      padding: 0px 1rem;
    }

    @include xs {
      flex-direction: column;
      height: auto;
    }
  }

  &__main {
    position: relative;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 1.6rem;
    @include xs {
      margin-right: 0;
    }

    @include xxs {
      width: 100%;
    }
  }

  &__content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    @include xs {
      align-items: center;
    }
  }

  &__header {
    text-align: center;
    font-family: 'Montserrat';
    font-weight: bold;
    z-index: $z-default;
    margin-bottom: 3rem;
    width: 100%;
    &:lang(ru), &:lang(de), &:lang(es) {
      @include m {
        margin-bottom: 0;
      }
    }

    @include xs {
      margin-bottom: 1rem;
      padding: 4.8rem 1rem .2rem;
      line-height: 3.2rem;
    }
  }

  &__mobile-app {
    height: 100%;
    padding: 6rem 0 5.1rem;
    flex-shrink: 0;
    @include xl {
      padding: 3.9rem 0 3.8rem;
    }
    @include xs {
      display: flex;
      align-items: center;
      justify-content: center;
      height: auto;
      width: 100%;
      padding: 2.4rem 5rem 4.8rem;
    }
  }
}
</style>