<template>
  <section class="welcome">
    <div class="welcome__wrapper">
      <section class="welcome__info">
        <MainHeading
          :config="headingConfig"
          class="welcome__header"
        />
        <p class="welcome__sub-header">
          {{$t('homepage.welcome_screen.sub_header')}}
        </p>
        <ContactsFormModalInvoker
          :buttonText="$t('homepage.welcome_screen.try_for_free')"
          :isColumn="true"
        />
      </section>
      <WelcomePreview class="welcome__preview"/>
    </div>
  </section>
</template>

<script>
import ContactsFormModalInvoker from '~/components/ui/ContactsFormModalInvoker'
import WelcomePreview from '~/components/homepage/WelcomePreview'
import IconDownArrow from '~/components/icons/IconDownArrow'
import MainHeading from '~/components/MainHeading'

export default {
  name: 'RegulaWelcome',
  components: {
    WelcomePreview,
    IconDownArrow,
    MainHeading,
    ContactsFormModalInvoker
  },
  computed: {
    headingConfig() {
      return {
        text_1: this.$t('homepage.welcome_screen.header_part_1'),
        text_2: this.$t('homepage.welcome_screen.header_part_2'),
        text_3: this.$t('homepage.welcome_screen.header_part_3')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.welcome {
  background-color: $color-light-2;
  &__wrapper {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    height: calc(100vh - 7.8rem );
    display: flex;
    width: 100%;

    @include l {
      height: calc(100vh - 7rem );
    }

    @include m {
      height: calc(100vh - 6.4rem );
    }

    @include xs {
      height: auto;
      padding: 0 2rem;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
    }
  }

  &__info {
    width: 45%;
    margin-left: auto;

    @include xl {
      width: 50%;
      margin-right: auto;
    }

    @include xs {
      width: 100%;
      margin: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }

  &__header {
    padding-top: 13.7rem;
    @include xl {
      padding-top: 8.2rem;
    }
    @include xs {
      padding-top: 3rem;
      text-align: center;
    }
  }

  &__sub-header {
    &:lang(en) {
      width: 49rem;
    }
    &:lang(de) {
      width: 49rem;
    }
    width: auto;
    margin: 3.2rem 0;

    @include xl {
      &:lang(en) {
        width: 40rem;
      }
      &:lang(de) {
        width: 44rem;
      }
      font-size: 1.6rem;
      line-height: 2.4rem;
    }

    @include l {
      &:lang(en) {
        width: 40rem;
      }
    }

    @include xs {
      &:lang(en) {
        width: auto;
      }
      &:lang(de) {
        width: auto;
      }
      font-size: 1.4rem;
      line-height: 2.2rem;
      margin: 1.6rem 0;
      text-align: center;
    }
  }

  &__preview {
    margin-right: auto;
    width: 72rem;
    height: 68.7rem;
    margin-top: 8.8rem;

    @include xxl {
      width: 41vw;
      height: auto;
    }

    @include xs {
      margin: 4rem 3rem;
      width: 69vw;
      height: 65vw;
      flex: none;
    }
  }

  &__arrow {
    position: absolute;
    bottom: 1rem;
    left: 10rem;
    cursor: pointer;

    @include xs {
      display: none;
    }
  }

  &__i-arrow {
    width: .9rem;
    height: 3.2rem;
  }

  &__label {
    position: absolute;
    bottom: 3.5rem;
    left: -.1rem;
    font-size: 1rem;
    line-height: 1rem;
    transform-origin: 0 0;
    transform: rotate(-90deg);
  }
}
</style>
