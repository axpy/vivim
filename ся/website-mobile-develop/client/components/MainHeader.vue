<template>
  <header
    id="header"
    :class="mainHeaderClass"
  >
    <BaseLink
      class="header__logo"
      @click.native="scrollToTop"
      to="/"
    >
      <img
        class="header__logo-img"
        src="/images/logo.png"
        alt="logo"
      />
    </BaseLink>
    <div class="header__content header__content--desktop">
      <NavList layout="main-header-nav" />
      <div class="header__controls controls">
        <!--<div class="controls__i-search">
          <IconSearch />
        </div>-->
        <LanguagePicker class="controls__language-picker"/>
        <ContactsFormModalInvoker
          class="controls__cta"
          :buttonText="$t('homepage.header.controls.cta')"
        />
      </div>
    </div>
    <div class="header__content header__content--mobile">
      <div class="header__controls controls">
        <!--<div class="controls__i-search">
          <IconSearch />
        </div>-->
        <div
          @click="toggleSideBar"
          class="controls__i-menu"
        >
          <IconMenu />
        </div>
      </div>
    </div>
    <div class="header__separator" />
  </header>
</template>

<script>
import BaseLink from '~/components/ui/BaseLink'
import ContactsFormModalInvoker from '~/components/ui/ContactsFormModalInvoker'
import NavList from '~/components/ui/NavList'
// import IconSearch from '~/components/icons/IconSearch'
import IconMenu from '~/components/icons/IconMenu'
import LanguagePicker from '~/components/LanguagePicker'

export default {
  name: 'MainHeader',
  components: {
    BaseLink,
    ContactsFormModalInvoker,
    // IconSearch,
    LanguagePicker,
    IconMenu,
    NavList
  },
  props: {
    showBoxShadow: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    mainHeaderClass() {
      return [
        'header',
        this.showBoxShadow && 'header--box-shadow'
      ]
    },
  },
  methods: {
    toggleSideBar() {
      this.$emit('toggle-side-bar');
    },
    scrollToTop() {
      window.scrollTo(0,0)
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  & {
    position: sticky;
    top: 0;
    left: 0;
    width: 100%;
    padding: .7rem 6.5rem;
    display: flex;
    align-items: center;
    background-color: $color-light-2;
    z-index: $z-normal-above;
    box-shadow: none;
    transition: box-shadow $transition-time-medium ease-out;

    @include l {
      justify-content: space-between;
    }

    @include s {
      padding: 0 1rem;
      height: 7.3rem;
    }
  }
  &__content {
    &--mobile {
      display: none;
      @include s {
        display: flex
      }
    }
    &--desktop {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      @include s {
        display: none
      }
    }
  }

  &__content {
    &--mobile {
      display: none;
      @include s {
        display: flex
      }
    }

    &--desktop {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      @include s {
        display: none
      }
    }
  }

  &__logo {
    margin-right: 6.4rem;
    display: flex;
    align-items: center;
    @media (max-width: 1100px) {
        &:lang(ru), &:lang(es), &:lang(de) {
          @include l {
            margin-right: 1.8rem;
        }
      }
    }
    @include l {
      margin-right: 4.8rem;
    }
  }

  &__logo-img {
    width: 12.1rem;
    height: 6.4rem;
    max-width: none;
    @include l {
      height: 5rem;
      width: 9.5rem;
    }
    @include xs {
      height: 4rem;
      width: 7.7rem;
    }
  }

  &__separator {
    height: .2rem;
    width: 100%;
    background-color: $color-light-3;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    margin: 0;
    z-index: -1;

    @include xs {
      width: 100%;
    }
  }

  &__controls {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &--box-shadow {
    box-shadow: $box-shadow-tertiary;
  }
}

.controls {
  display: flex;
  align-items: center;

  & > *:not(:last-child) {
    margin-right: 2rem;
    @include l {
      margin-right: 0;
    }
    @include xs {
      margin-right: 2.4rem;
    }
  }

  &__i-search {
    display: flex;
    align-items: center;
    width: 1.6rem;
    height: 1.6rem;
  }

  &__i-menu {
    width: 2.4rem;
    height: 1.6rem;
  }

  &__language-picker {
    padding: 1.5rem 2rem;
    margin: 0 !important;
  }

  &__cta {
    @include l {
      font-size: 1.4rem;
      height: 4.5rem;
    }
  }
}
</style>
