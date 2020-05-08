<template>
  <div class="about">
    <h2 class="about__alt-header"> {{ $t('homepage.about.header') }} </h2>
    <IconAboutAirplane class="about__bg-img about__bg-img--airplane" />
    <IconAboutFile class="about__bg-img about__bg-img--file" />
    <IconAboutLicense class="about__bg-img about__bg-img--license" />
    <IconAboutPassport class="about__bg-img about__bg-img--passport" />
    <IconAboutIdCard1 class="about__bg-img about__bg-img--card1" />
    <IconAboutIdCard2 class="about__bg-img about__bg-img--card2" />
    <IconAboutIdCard3 class="about__bg-img about__bg-img--card3" />
    <IconAboutIdCard4 class="about__bg-img about__bg-img--card4" />
    <IconAboutOval class="about__bg-img about__bg-img--oval" />
    <div class="about__img-wrapper">
      <BasePicture :config="imageConfig"/>
    </div>
    <div class="about__content">
      <h2 class="about__header"> {{ $t('homepage.about.header') }} </h2>
      <p class="about__text about__text--fixed"> {{ $t('homepage.about.text_part_1') }} </p>
      <p class="about__text about__text--fixed"> {{ $t('homepage.about.text_part_2') }} </p>
      <a
        href="https://regulaforensics.com/ru/"
        target="_blank"
      >
        <BaseButton
          class="about__btn"
          btnClass="empty"
        >
          {{ $t('homepage.buttons.find_out_more') }}
        </BaseButton>
      </a>
    </div>
  </div>
</template>

<script>
import BaseButton from '~/components/ui/BaseButton'
import BasePicture from '~/components/ui/BasePicture'
import IconAboutAirplane from '~/components/icons/IconAboutAirplane'
import IconAboutFile from '~/components/icons/IconAboutFile'
import IconAboutLicense from '~/components/icons/IconAboutLicense'
import IconAboutPassport from '~/components/icons/IconAboutPassport'
import IconAboutIdCard1 from '~/components/icons/IconAboutIdCard1'
import IconAboutIdCard2 from '~/components/icons/IconAboutIdCard2'
import IconAboutIdCard3 from '~/components/icons/IconAboutIdCard3'
import IconAboutIdCard4 from '~/components/icons/IconAboutIdCard4'
import IconAboutOval from '~/components/icons/IconAboutOval'

export default {
  name: 'About',
  components: {
    BaseButton,
    BasePicture,
    IconAboutAirplane,
    IconAboutFile,
    IconAboutLicense,
    IconAboutPassport,
    IconAboutIdCard1,
    IconAboutIdCard2,
    IconAboutIdCard3,
    IconAboutIdCard4,
    IconAboutOval
  },
  data() {
    return {
      imageConfig: {
        image: 'map.jpg',
        alt: "World map"
      }
    }
  },
  computed: {
    currentDisplay() {
      return this.$store.state.ui.currentDisplay
    }
  }
}
</script>

<style lang="scss" scoped>
.about {
  & {
    width: 100%;
    padding: 16rem 10rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: $color-white;
    position: relative;
    color: black;
    box-sizing: border-box;

    @include xxl {
      padding: 12rem 7rem;
    }

    @include xs {
      padding: 4.8rem 1rem;
      flex-direction: column;
    }
  }

  &__content {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    max-width: 66rem;
    z-index: $z-default;

    @include xxl {
      max-width: 58rem;
    }

    @include xs {
      align-items: center;
    }
  }

  &__alt-header {
    display: none;

    @include xs {
      z-index: $z-low;
      display: block;
    }
  }

  &__header {
    margin-top: 6.3rem;
    @include xl {
      margin-top: 0;
    }
    @include xs {
      display: none;
    }
  }

  &__header,
  &__alt-header {
    margin-bottom: 5.6rem;

    @include xxl {
      margin-bottom: 4rem;
    }

    @include xs {
      line-height: 3.2rem;
    }
  }

  &__text {
    margin-bottom: 2.4rem;
    font-size: 1.8rem;
    line-height: 2.6rem;

    @include l {
      font-size: 1.6rem;
      line-height: 2.4rem;
    }

    @include xs {
      font-size: 1.4rem;
      line-height: 2.2rem;
      max-width: 55rem;
      margin-bottom: 2rem;
    }
  }

  &__btn {
    margin-top: 2rem;

    @include xs {
      font-size: 1.4rem;
      line-height: 1.8rem;
      margin-top: 1rem;
      align-self: center;
    }
  }
  
  &__img-wrapper {
    width: 100%;
    margin-right: 6rem;

    @include xxl {
      margin-right: 4.5rem;
    }

    @include xs {
      margin-right: 0;
      margin-bottom: 2rem;
    }
  }

  &__img {
    width: 100%;
    height: auto;
  }

  &__bg-img {
    position: absolute;

    &--airplane {
      width: 9.9rem;
      height: 11.2rem;
      top: 8.6rem;
      right: 43.6rem;

      @include xxl {
        top: 6.7rem;
        right: 11.8rem;
      }

      @include xs {
        width: 4.7rem;
        height: auto;
        top: 3.6rem;
        right: 2.9rem;
      }
    }
    
    &--file {
      width: 6.5rem;
      height: 8.3rem;
      right: 44rem;
      bottom: 9.6rem;

      @include xxl {
        display: none;
      }
    }

    &--license {
      width: 10.5rem;
      height: 6.9rem;
      left: 56.3rem;
      bottom: 11rem;

      @include xxl {
        left: 40rem;
        bottom: 5.4rem;
      }

      @include xs {
        width: 4.7rem;
        height: auto;
        left: .8rem;
        bottom: 8.2rem;
      }
    }

    &--passport {
      width: 8.7rem;
      height: 10.5rem;
      left: 99rem;
      bottom: 4.8rem;

      @include xxl {
        right: 7rem;
        left: initial;
        bottom: 7.1rem;
      }

      @include xs {
        width: 4.7rem;
        height: auto;
        right: 13px;
        bottom: 31px;
      }
    }
    
    &--card1 {
      width: 9.1rem;
      height: 7rem;
      top: 4.5rem;
      left: 69.2rem;

      @include xxl {
        top: 2.2rem;
        left: 44.1rem;
      }

      @include xs {
        width: 4.7rem;
        height: auto;
        top: 1.8rem;
        left: 3.1rem;
      }
    }
    
    &--card2 {
      width: 8.9rem;
      height: 10.2rem;
      top: 7.2rem;
      left: 12.4rem;

      @include xxl {
        top: 4.2rem;
        left: 6.6rem;
      }

      @include xs {
        display: none;
      }
    }

    &--card3 {
      width: 7.2rem;
      height: 9.7rem;
      left: 3.9rem;
      top: 38.3rem;

      @include xxl {
        display: none;
      }
    }

    &--card4 {
      width: 8.8rem;
      height: 7.5rem;
      left: 11.4rem;
      bottom: 12.2rem;

      @include xxl {
        left: 6.3rem;
        bottom: 13.6rem;
      }

      @include xs {
        display: none;
      }
    }

    &--oval {
      width: 30rem;
      height: 50rem;
      right: 0;
      bottom: 0;

      @include xxl {
        display: none;
      }
    }
  }
}
</style>