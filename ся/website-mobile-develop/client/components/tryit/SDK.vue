<template>
  <div :class="`sdk sdk--${type}`">
    <h5 class="sdk__title">{{ $t(`homepage.try_it.SDK`) }}</h5>
    <div class="sdk__content">
      <a
        v-for="item in items"
        :key="item.hrem"
        class="sdk__link"
        :href="item.href"
        target="_blank"
        rel="noopener noreferrer"
      >
        <component :is="item.icon" />
      </a>
    </div>
  </div>
</template>

<script>

import IconReact from '~/components/icons/IconReact'
import IconApple from '~/components/icons/IconApple'
import IconAndroid from '~/components/icons/IconAndroid'
import IconXamarin from '~/components/icons/IconXamarin'
import IconCordova from '~/components/icons/IconCordova'
import IconPhoneGap from '~/components/icons/IconPhoneGap'
export default {
  name: 'SDK',
  components: {
    IconReact,
    IconApple,
    IconAndroid,
    IconXamarin,
    IconCordova,
    IconPhoneGap
  },
  props: {
    type: {
      type: String,
      default: 'default'
    }
  },
  data() {
    return {
      items: [
        {
          href: 'https://github.com/regulaforensics/DocumentReader-iOS',
          icon: 'IconApple'
        },
        {
          href: 'https://github.com/regulaforensics/DocumentReader-Android',
          icon: 'IconAndroid'
        },
        {
          href: 'https://github.com/regulaforensics/React-Native-DocumentReader',
          icon: 'IconReact'
        },
        {
          href: 'https://github.com/regulaforensics/Xamarin-DocumentReader',
          icon: 'IconXamarin'
        },
        {
          href: 'https://github.com/regulaforensics/DocumentReader-Cordova-Plugin',
          icon: 'IconCordova'
        },
        {
          href: 'https://github.com/regulaforensics/DocumentReader-PhoneGap-Plugin',
          icon: 'IconPhoneGap'
        },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.sdk {
  z-index: $z-default;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  &__title {
    text-align: center;
    width: 100%;
    margin-bottom: 2rem;
    line-height: 3.4rem;

    @include l {
      font-size: 1.8rem;
      line-height: 3rem;
    }
  }
  &__content {
    width: 24.4rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 4.6rem 3.2rem;
    @include m {
      width: 100%;
      display: flex;
      justify-content: center;
    }
    @include m {
      width: 24.4rem;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
  &--row {
    .sdk {
      &__title {
        font-weight: 700;
        font-size: 1.8rem;

        @include xs {
          font-size: 1.4rem;
          line-height: 2.2rem;
        }
      }
    }
  }
  &--default {
    margin-top: 4rem;
    align-items: start;
    @include s {
      align-items: center;
    }
    .sdk {
      &__title {
        text-align: left;
        @include s {
          text-align: center;
        }
      }
      &__content {
        width: 100%;
        display: flex;
        justify-content: left;
        grid-gap: 0;
        & > :not(:last-child) {
          margin-right: 3.2rem;
        }
        @include m {
          width: 24.4rem;
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          grid-gap: 4.6rem 3.2rem;
          & > *{
            margin-right: 0 !important;
          }
        }
        @include s {
          justify-content: center;
          padding-bottom: 2rem;
          grid-gap: 0;
          & > *{
            margin-bottom: 3.2rem;
          }
        }
      }
    }
  }

  &--wide {
    margin-top: 4rem;
    align-items: start;
    @include s {
      align-items: center;
    }
    .sdk {
      &__title {
        text-align: left;
        @include s {
          text-align: center;
        }
      }
      &__content {
        width: 100%;
        display: flex;
        justify-content: center;
        grid-gap: 0;
        & > :not(:last-child) {
          margin-right: 3.2rem;
        }
        @include xxs {
          width: 21rem;
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          grid-gap: 3.2rem 1.6rem;
          & > *{
            margin-right: 0 !important;
          }
        }
      }
    }
  }
  &--column {
    .sdk {
      &__content {
        width: auto;
        grid-template-columns: repeat(6, 1fr);
        @include s {
          width: 24.4rem;
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          grid-gap: 4.6rem 3.2rem;
          & > *{
            margin-right: 0 !important;
          }
        }
      }
    }
  }

  &__link {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>