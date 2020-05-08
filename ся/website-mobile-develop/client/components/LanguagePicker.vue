<template>
  <div
    class="language-picker"
    @click.stop="toggleLanguageOptionsVisible"
  >
    <span class="language-picker__selector">
      <span class="language-picker__current">{{ currentLocale }}</span>
      <IconArrowSmall :class="['language-picker__i-arrow', {'language-picker__i-arrow--rotated': languageOptionsVisible}]" />
    </span>
    <ul 
      v-show="languageOptionsVisible"
      class="language-picker__options"
    >
      <li
        v-for="language in filteredLanguageOptions"
        :key="language"
        class="language-picker__option"
      >
        <nuxt-link
          class="language-picker__link"
          :to="switchLocalePath(language)"
          @click.native.stop="toggleLanguageOptionsVisible"
        >
          {{ language }}
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
import IconArrowSmall from '~/components/icons/IconArrowSmall'

export default {
  name: 'LanguagePicker',
  head() {
    return {
      meta: [{
        hid: 'og:locale', property: 'og:locale', content: this.currentLocaleDecoding
      }],
      htmlAttrs: {
        lang: this.currentLocale ? this.currentLocale : 'en'
      }
    }
  },
  components: {
    IconArrowSmall
  },
  data() {
    return {
      languageOptionsVisible: false
    }
  },
  computed: {
    filteredLanguageOptions() {
      return this.$i18n.locales.reduce((accumulator, locale) => {
        return locale.code !== this.currentLocale ? [...accumulator, locale.code] : accumulator
      }, [])
    },
    currentLocale() {
      return this.$i18n.locale
    },
    currentLocaleDecoding() {
      let index = this.$i18n.locales.findIndex(locale => locale.code === this.currentLocale)
      if (index !== -1) {
        return this.$i18n.locales[index].file.split('.')[0]
      } else {
        return 'en_US'
      }
    }
  },
  methods: {
    toggleLanguageOptionsVisible() {
      if (!this.languageOptionsVisible) {
        document.body.addEventListener('click', this.onClickOutside);
      } else {
        document.body.removeEventListener('click', this.onClickOutside);
        this.$emit('toggle-side-bar')
      }
      this.languageOptionsVisible = !this.languageOptionsVisible;
    },
    onClickOutside() {
      document.body.removeEventListener('click', this.onClickOutside);
      this.languageOptionsVisible = !this.languageOptionsVisible;
    }
  }
}
</script>

<style lang="scss" scoped>
.language-picker {
  & {
    position: relative;
    cursor: pointer;
  }

  &__current {
    text-transform: uppercase;
    margin-right: .8rem;
    font-weight: 600;
  }

  &__selector {
    display: flex;
    font-size: 18px;
    line-height: 26px;
    @include l {
      font-size: 1.6rem;
      line-height: 2.4rem;
    }
    @include xs {
      font-size: 1.4rem;
      line-height: 2.2rem;
    }
  }

  &__option {
    position: relative;
    text-transform: uppercase;
    width: 5.7rem;
    height: 3.9rem;
    display: flex;
    align-items: center;
  }

  &__options {
    position: absolute;
    top: calc(100% - 1rem);
    left: 44%;
    transform: translateX(-50%);
    background-color: $color-white;
    box-shadow: 0 0 .5rem .5rem rgba(0, 0, 0, .1);
    z-index: $z-normal;
    @include s() {
      left: 25%;
    }
  }

  &__link {
    padding-left: 1.5rem;
    position: relative;
    width: 100%;
    font-weight: 600;

    &:hover {
      color: $color-primary;
    }
  }

  &__i-arrow {
    &--rotated {
      transform: rotate(180deg);
    }
  }
}
</style>