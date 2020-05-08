<template>
  <div class="regula-tip">
    <div class="regula-tip__image">
      <BasePicture :config="imageConfig"/>
    </div>
    <h6 class="regula-tip__text">
      {{ $t('finance.regula_tip.text') }}
    </h6>
  </div>
</template>

<script>
import BasePicture from '~/components/ui/BasePicture'

export default {
  name: 'RegulaTip',
  components: {
    BasePicture
  },
  data() {
    return {
      imageConfig: {
        image: 'mobile.png',
        alt: 'Mobile app',
        pictureType: 'half-cutted'
      },
    }
  }
}
</script>

<style lang="scss" scoped>
.regula-tip {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 16rem 4rem 0;

  @include l {
    margin: 12rem 2rem 0;
  }

  @include s {
    flex-direction: column-reverse;
    margin: 4.8rem 2rem 0;
  }

  &__text {
    font-family: 'Montserrat';
    max-width: 63rem;
    text-align: left;
    font-size: 2.4rem;
    line-height: 3rem;
    padding-left: 2.4rem;
    margin-left: 6.4rem;
    border-left: .4rem solid $color-primary;
  
    @include l {
      font-size: 1.8rem;
      line-height: 2.2rem;
    }

    @include s {
      margin: 0 0 3.2rem;
    }
  
    @include xs {
      font-size: 1.6rem;
      line-height: 1.9rem;
    }
  }

  &__image {
    width: 30rem;
    height: 27rem;

    @include s {
      width: 25rem;
      height: 22rem;
    }

    @include xs {
      width: 20rem;
      height: 18rem;
    }
  }
}
</style>