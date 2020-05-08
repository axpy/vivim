<template>
  <div :class="mobileLinksClass">
    <div
      class="mobile-links-wrapper"
      v-for="link in linksConfig"
      :key="link.href"
    >
      <h6
        class="mobile-links__title"
        v-if="entitled"
      >
        {{ link.title }}
      </h6>
      <a
        :href="link.href"
        target="_blank"
        rel="noopener noreferrer"
        class="mobile-links__link"
        :class="link.linkClass"
      >
        <img
          :class="link.imgClass"
          :alt="link.alt"
          :src="link.src"
        >
        <span
          class="mobile-links__label"
          v-if="link.label"
        >
          {{ link.label }}
        </span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MobileLinks',
  props: {
    type: {
      type: String,
      default: 'default'
    },
    entitled: {
      type: Boolean,
      default: false
    },
  },
  computed: {
    mobileLinksClass() {
      return [
        'mobile-links',
        `mobile-links--${this.type}`,
        this.entitled ? 'mobile-links--entitled' : ''
      ]
    },
    currentLocale() {
      return this.$i18n.locale
    },
    linksConfig() {
      return [
        {
          title: 'Android',
          href: 'https://play.google.com/store/apps/details?id=com.regula.documentreader',
          alt: 'Google play',
          src: `/icons/google_play-${this.currentLocale}.png`,
          imgClass: 'mobile-links__google-play',
          linkClass: 'gtm-trigger_android',
        },
        {
          title: 'IOS',
          href: 'https://apps.apple.com/lv/app/regula-document-reader/id1001303920',
          alt: 'App store',
          src: `/icons/app_store-${this.currentLocale}.svg`,
          imgClass: 'mobile-links__app-store',
          linkClass: 'gtm-trigger_ios',
        },
        {
          title: 'Web',
          href: 'https://api.regulaforensics.com/',
          alt: 'Site logo',
          src: '/icons/regula_symbol.png',
          linkClass: 'mobile-links__link--web gtm-trigger_web-api',
          imgClass: 'mobile-links__regula-symbol',
          label: this.$t(`homepage.try_it.web_api`)
        },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.mobile-links {
  & {
    user-select: none;
    display: flex;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    z-index: $z-default;
    margin: 0 -1.6rem;
    width: 100%;
    @include xs {
      margin: 0;
    }

    @include xxs {
      width: 100%;
    }
  }

  &__link {
    display: flex;
    align-items: center;
    cursor: pointer;
    margin: 4.8rem 1.6rem 0;
  
    @include l {
      margin-top: 3rem;
    }

    @include xxs {
      margin: 1.6rem .3rem 0;
    }
    
    &--web {
      display: flex;
      align-items: center;
      width: 18.9rem;
      height: 5.6rem;
      background-color: rgba(0,0,0,1);
      color: $color-white;
      cursor: pointer;
      border: $border-grey-2;
      border-radius: .8rem;

      @include xs {
        width: 14.9rem;
        height: 4.4rem;
      }
    }
  }

  &__regula-symbol {
    width: 2.8rem;
    height: 2.8rem;
    margin-right: .6rem;
    margin-left: 1.2rem;

      @include xs {
        width: 2.2rem;
        height: 2.2rem;
        margin-right: .5rem;
        margin-left: .95rem;
      }
  }

  &__label {
    font-size: 1.8rem;
    line-height: 2.6rem;
    font-weight: 600; 

    @include xs {
      padding: 0;
      font-size: 1.4rem;
      line-height: 2rem;
    }
  }

  &__google-play {
    height: 5.6rem;

    @include xs {
      width: 14.9rem;
      height: 4.4rem;
    }
  }

  &__app-store {
    width: 18.9rem;
    height: 5.6rem;
    @include xs {
      width: 13.2rem;
      height: 4.4rem;
    }
  }

  &__title {
    text-align: center;
    z-index: $z-default;
    margin: 0;
    font-weight: 700;
    @include s {
      font-size: 2.4rem;
    }

    @include l {
      font-size: 1.6rem;
      line-height: 2.4rem;
    }

    @include xs {
      font-size: 1.4rem;
      line-height: 1.8rem;
    }
  }
  
  &--entitled {
    width: 100%;
    margin-top: 3.2rem;
    .mobile-links {
      &__link {
        margin: 1.6rem 0 2.4rem;
        @include xs {
          margin: 1.6rem 1rem 2.4rem;
        }
        @include xxs {
          margin: 1.6rem .1rem 2.4rem;
        }
      }
    }
  }

  &--angled {
    justify-content: left;
    width: 100%;
    @include s {
      justify-content: center;
    }
    @include xs {
      flex-direction: column;
    }

    @include xxs {
      flex-direction: row;
      justify-content: space-evenly;
    }
    .mobile-links {
      &__link {
        margin: 0;
      }
    }
    .mobile-links-wrapper {
      margin: 2.4rem 0 0;
      &:not(:last-child) {
        margin-right: 3.2rem;
      }
      @include xs {
        margin: 2.4rem 0 0 0 !important;
      }
    }
  }

  &--wide {
    justify-content: left;
    width: 100%;
    @include s {
      justify-content: center;
    }

    @include xs {
      justify-content: space-evenly;
    }
    .mobile-links {
      &__link {
        margin: 2.4rem 2rem 0 0;

        @include xxs {
          margin: 1.6rem 0 0;
        }
      }
    }
  }
}
</style>