<template>
  <div class="footer-menu-item">
    <div class="footer-menu-item__content">
      <h6 class="footer-menu-item__header">{{ item.title }}</h6>
      <div
        class="footer-menu-item__icon-list"
        v-if="item.isIcons">
        <div
          v-for="(icon, i) in item.iconList"
          :key="i"
          class="footer-menu-item__i-wrapper"
        >
          <a
            class="footer-menu-item__link footer-menu-item__link--centered"
            :href="icon.to"
            target="_blank"
          >
            <component :is="icon.name"></component>
          </a>
        </div>
      </div>
      <ul
        class="footer-menu-item__list"
        v-else
      >
        <li
          v-for="(link, index) in item.linkList"
          :key="index"
          class="footer-menu-item__item"
        >
          <a class="footer-menu-item__link"> {{ link }} </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import IconLinkedin from '~/components/icons/IconLinkedin'
import IconTwitter from '~/components/icons/IconTwitter'
import IconYoutube from '~/components/icons/IconYoutube'
import IconFacebook from '~/components/icons/IconFacebook'

export default {
  name: 'FooterMenuItem',
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  components: {
    IconLinkedin,
    IconTwitter,
    IconYoutube,
    IconFacebook
  }
}
</script>

<style lang="scss" scoped>
.footer-menu-item {
  & {
    display: flex;
    align-items: center;
    width: auto;
    color: $color-white;
    @include xs {
      width: 100%;
    }
  }

  &__content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    @include xs {
      width: 100%;
      align-items: center;
    }
  }

  &__header {
    line-height: 2.6rem;
    font-weight: 400;
    margin-bottom: 1.6rem;

    @include s {
      font-size: 1.4rem;
      line-height: 2.2rem;
    }

    @include xs {
      text-align: center;
      width: 100%;
      line-height: 2rem;
    }
  }

  &__icon-list {
    display: flex;
    justify-content: space-between;
    width: 12rem;
    flex-wrap: wrap;
    @include xs {
      width: 24rem;
    }
  }

  &__link {
    color: inherit;
    width: 100%;
    height: 100%;
    cursor: pointer;

    &:hover {
      color: $color-primary;
    }

    &--centered {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  &__item {
    font-size: 1.8rem;
    line-height: 3.2rem;

    @include s {
      font-size: 1.4rem;
    }
  }

  &__i-wrapper {
    width: 4.8rem;
    height: 4.8rem;
    border-radius: 50%;
    background-color: $color-secondary-light-1;
    margin-bottom: 2.4rem;

    &:hover {
      background-color: $color-secondary-light-2;
    }
  }
}
</style>