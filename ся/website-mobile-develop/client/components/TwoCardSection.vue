<template>
  <div class="two-card-section">
    <component
      v-for="icon in iconBgList"
      :key="icon"
      :is="icon | capitalize"
      :class="`two-card-section__i two-card-section__i--bg-${icon}`"
    />
    <BaseHeader :config="headerConfig"/>
    <div class="two-card-section__content">
      <CardWithList
        v-for="(config, index) in cardList"
        :key="index"
        :config="config"
      />
    </div>
  </div>
</template>

<script>
/*

Config props 

headerConfig - REQUIRED
cardList - REQUIRED

*/
import BaseHeader from '~/components/BaseHeader'
import CardWithList from '~/components/ui/CardWithList'
import IconCardsBGRight from '~/components/icons/IconCardsBGRight'
import IconCardsBGLeft from '~/components/icons/IconCardsBGLeft'
import IconCardsBGAltRight from '~/components/icons/IconCardsBGAltRight'
import IconCardsBGAltLeft from '~/components/icons/IconCardsBGAltLeft'

export default {
  name: 'TwoCardSection',
  components: {
    BaseHeader,
    IconCardsBGRight,
    IconCardsBGLeft,
    IconCardsBGAltRight,
    IconCardsBGAltLeft,
    CardWithList
  },
  props: {
    config: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      iconBgList: ['right', 'left', 'alt-right', 'alt-left'],
      ...this.config
    }
  },
  filters: {
    capitalize: function (value) {
      if (!value) return ''
      return `IconCardsBG${value.split('-').map(item => `${item.charAt(0).toUpperCase()}${item.slice(1)}`).join('')}`
    }
  }
}
</script>

<style lang="scss" scoped>
.two-card-section {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 16rem 0;
  position: relative;
  background-color: $color-light-1;

  @include l {
    padding: 12rem 0;
  }

  @include s {
    padding: 4.8rem 1rem;
  }

  &__content {
    z-index: $z-low-below;
    display: flex;
    align-items: flex-start;
    justify-content: center;

    @include s {
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
    }
  }

  &__i {
    position: absolute;
    width: 100%;
    height: 100%;
    
    &--bg-left {
      top: 0;
      left: -30%;

      @include xs {
        display: none;
      }
    }

    &--bg-right {
      height: 30rem;
      bottom: 0%;
      right: 10%;

      @include xs {
        display: none;
      }
    }

    &--bg-alt-left {
      display: none;
      height: 70%;
      bottom: 0;
      left: -20%;

      @include xs {
        display: block;
        bottom: 20%;
      }
    }

    &--bg-alt-right {
      display: none;
      height: 50%;
      bottom: 0%;
      right: 0%;

      @include xs {
        display: block;
        height: 20%;
        width: 70%;
        bottom: 35%;
      }
    }
  }
}
</style>