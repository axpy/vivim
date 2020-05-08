<template>
  <div :class="iconClass">
    <span :class="numberClass">{{ number }}</span>
  </div>
</template>

<script>
/*
  Config props:

  title - REQUIRED
  iconSize - small [big]
  isIconBGColored - OPTIONAL

*/

export default {
  name: 'IconNumber',
  props: {
    config: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      isIconBGColored: false,
      ...this.config
    }
  },
  computed: {
    iconClass() {
      return ['icon', `icon--${this.iconSize}`, this.isIconBGColored ? 'icon--colored' : 'icon--default']
    },
    numberClass() {
      return ['icon__number', `icon__number--${this.iconSize}`]
    },
  }
}
</script>

<style lang="scss" scoped>
.icon {
  display: flex;
  align-items: center;
  justify-content: center;
  border: .2rem solid $color-primary;
  position: relative;
  background-color: transparent;
  border-radius: .4rem;

  @include xs {
    border: .1rem solid $color-primary;
  }

  &--medium {
    width: 4rem;
    height: 4rem;
    @include l {
      width: 3.2rem;
      height: 3.2rem;
    }
    @include xs {
      width: 2.4rem;
      height: 2.4rem;
    }
  }

  &--large {
    width: 5.6rem;
    height: 5.6rem;
    
    &::after,
    &::before {
      content: '';
      position: absolute;
      top: 1rem;
      height: 4rem;
      width: 3rem;
      background-color: $color-white;

      @include s {
        display: none;
      }
    }

    &::after {
      left: -3.2rem;
    }

    &::before {
      right: -3.2rem;
    }

    @include l {
      width: 4.8rem;
      height: 4.8rem;
    }

    @include xs {
      width: 4rem;
      height: 4rem;
    }
  }

  &__number {

    &--medium {
      font-size: 1.8rem;
      line-height: 2.4rem;

      @include l {
        font-size: 1.6rem;
        line-height: 2rem;
      }
  
      @include xs {
        font-size: 1.4rem;
        line-height: 1.8rem;
      }
    }

    &--large {
      font-weight: bold;
      font-size: 2.4rem;
      line-height: 3rem;
  
      @include xs {
        font-size: 1.8rem;
        line-height: 2.3rem;
      }
    }
  }
}
</style>