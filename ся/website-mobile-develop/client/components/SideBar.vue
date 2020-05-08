<template>
  <div :class="['side-bar', {'side-bar--opened': isSideBarOpen}]">
    <div class="side-bar__header">
      <LanguagePicker 
        class="side-bar__language-picker"
        @toggle-side-bar="$emit('toggle-side-bar')"
      />
      <div
        class="side-bar__i-close"
        @click="$emit('toggle-side-bar')"
      >
        <IconClose />
      </div>
      <div class="side-bar__separator" />
    </div>
    <NavList
      layout="side-bar-nav"
      @toggle-side-bar="$emit('toggle-side-bar')"
    >
      <div class="side-bar__separator" />
    </NavList>
    <ContactsFormModalInvoker
      @click.native="$emit('toggle-side-bar')"
      class="side-bar__cta"
      :buttonText="$t('homepage.header.controls.cta')"
    />
  </div>
</template>

<script>
import ContactsFormModalInvoker from '~/components/ui/ContactsFormModalInvoker'
import NavList from '~/components/ui/NavList'
import IconClose from '~/components/icons/IconClose'
import LanguagePicker from '~/components/LanguagePicker'

export default {
  name: 'SideBar',
  props: {
    isSideBarOpen: {
      type: Boolean,
      default: false
    }
  },
  components: {
    ContactsFormModalInvoker,
    IconClose,
    LanguagePicker,
    NavList
  }
}
</script>

<style lang="scss" scoped>
.side-bar {
  & {
    position: fixed;
    top: 0;
    right: calc((#{$big-indent} - 100vw));
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    height: 100vh;
    visibility: hidden;
    width: calc(100vw - #{$big-indent});
    background-color: $color-light-2;
    font-size: 1.4rem;
    line-height: 1.8rem;
    z-index: $z-modal;
    transition: right $transition-time-medium ease-out, visibility $transition-time-medium ease-out;

    @include xs {
      width: calc(100vw - #{$default-indent});
      right: calc((#{$default-indent} - 100vw));
    }

    &--opened {
      right: 0;
      visibility: visible;
    }
  }

  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 6.2rem;
    padding-top: 1rem;
    position: relative;
  }

  &__separator {
    height: .1rem;
    width: 100%;
    background-color: $color-light-3;
    position: absolute;
    bottom: 0;
    left: 0;
    margin: 0;
  }

  &__language-picker {
    margin-left: 2.4rem;
    padding: 2rem 2rem 2rem 0;
    font-size: 1.5rem;
    line-height: 1.8rem;
  }

  &__i-close {
    width: 1.6rem;
    height: 1.6rem;
    margin-right: 2.4rem;
  }

  &__cta {
    display: flex;
    align-self: center;
    min-width: 16rem;
    height: 4.4rem;
    margin-top: 4rem;
  }
}
</style>
