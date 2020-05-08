<template>
  <nav :class="[layout, 'nav']">
    <ul :class="`${layout}__list`">
      <li
        v-for="link in navLinks"
        :key="link.to"
        :class="`${layout}__item`"
      >
        <BaseLink
          :class="`${layout}__link`"
          @click.native="$emit('toggle-side-bar')"
          :to="link.to"
        >
          {{ $t(`homepage.header.nav.${link.text}`) }}
        </BaseLink>
        <slot />
      </li>
    </ul>
  </nav>
</template>

<script>
import BaseLink from '~/components/ui/BaseLink'

export default {
  name: 'NavList',
  components: {
    BaseLink
  },
  props: {
    layout: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      navLinks: [
        { text: 'use_cases', to: '/#use-cases' },
        { text: 'apps', to: '/#apps' },
        { text: 'solutions', to: '/#solutions' },
        { text: 'reviews', to: '/#reviews' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.nav {
  margin-right: auto;
}
.main-header-nav {
  &__list {
    display: flex;
  }

  &__item {
    text-transform: capitalize;
  }

  &__item:not(:last-child) {
    margin-right: 4.8rem;
    &:lang(es), &:lang(de), &:lang(ru) {
      @include l {
        margin-right: 2.8rem;
      }
    }
    @include l {
      margin-right: 4.8rem;
    }
  }
}
.side-bar-nav {
  width: 100%;

  &__list {
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    font-weight: 600;
  }

  &__item {
    text-transform: capitalize;
    padding: 1.6rem 0 1.6rem 2.4rem;
    width: 100%;
    height: 5rem;
    position: relative;
  }

  &__item:not(:last-child) {
    margin-right: 4.8rem;
  }
}
</style>