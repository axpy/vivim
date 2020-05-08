<template>
  <div :class="itemClass">
    <div :class="iconClass">
      <component
        :is="icon"
        :config="iconConfig"
      />
    </div>
    <div :class="contentClass">
      <span :class="titleBlockClass">
        <span :class="titleClass">
          {{ title }}
        </span>
        <BaseParagraph
          v-if="description && isItemHeaderUnitedWithDescription"
          :config="description"
          :tag="'span'"
          class="base-list-item__description"
        />
      </span>
        <BaseParagraph
          v-if="description && !isItemHeaderUnitedWithDescription"
          :config="description"
          class="base-list-item__description"
        />
    </div>
  </div>
</template>

<script>
/*
  Config props:

  title - REQUIRED
  icon - IconSolutionsType [IconNumber]
  description - OPTIONAL

*/
import IconSolutionsType from '~/components/icons/IconSolutionsType'
import IconOptimiseProcess from '~/components/icons/IconOptimiseProcess'
import IconTreatCustomers from '~/components/icons/IconTreatCustomers'
import IconSpeedUp from '~/components/icons/IconSpeedUp'
import IconNumber from '~/components/icons/IconNumber'
import BaseParagraph from '~/components/ui/BaseParagraph'

export default {
  name: 'BaseItem',
  components: {
    IconSolutionsType,
    IconNumber,
    BaseParagraph,
    IconOptimiseProcess,
    IconTreatCustomers,
    IconSpeedUp
  },
  props: {
    config: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      icon: 'IconSolutionsType',
      description: '',
      ...this.config
    }
  },
  computed: {
    itemClass() {
      return ['base-list-item', `base-list-item--${this.itemLayout}`, `base-list-item--${this.itemIndentation}`]
    },
    iconClass() {
      return ['base-list-item__icon', `base-list-item__icon--${this.itemIconSize}`]
    },
    titleClass() {
      return ['base-list-item__title', `base-list-item__title--${this.itemTitleSize}`]
    },
    titleBlockClass() {
      return `base-list-item__title-block--${this.itemLayout}`
    },
    contentClass() {
      return ['base-list-item__content', `base-list-item__content--${this.itemLayout}`]
    }
  }
}
</script>

<style lang="scss" scoped>
.base-list-item {
  display: flex;
  justify-content: flex-start;

  &--default {
    align-items: flex-start;
    max-width: 67rem;
  }

  &--vertical {
    flex-direction: column;
    text-align: center;
    align-items: center;
  }

  &--small {

    &:not(:last-child) {
      margin-bottom: 2.4rem;
    }
  }

  &--medium {

    &:not(:last-child) {
      margin-bottom: 4rem;
      
      @include l {
        margin-bottom: 3.2rem;
      }
      
      @include xs {
        margin-bottom: 2.4rem;
      }
    }
  }

  &--big {

    &:not(:last-child) {
      margin-bottom: 6.4rem;
      
      @include xs {
        margin-bottom: 3.2rem;
      }
    }
  }

  &--large {

    &:not(:last-child) {
      margin-bottom: 11.4rem;

      @include l {
        margin-bottom: 9.7rem;
      }
      
      @include s {
        margin-bottom: 3.2rem;
      }
    }
  }

  &__icon {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: .4rem;
    background-color: transparent;
    color: $color-primary;

    &--small {
      margin: .8rem 1.6rem .8rem 0;

      & img {
        width: .8rem;
        height: .8rem;
        min-width: .8rem;
      }
    }

    &--medium {
      width: 4rem;
      height: 4rem;
      margin-right: 2.4rem;

      @include l {
        width: 3.2rem;
        height: 3.2rem;
         margin-right: 1.6rem;
      }

      @include xs {
        width: 2.4rem;
        height: 2.4rem;
      }

      & img {
        width: 4rem;
        height: 4rem;
      }
    }
  }

  &__content {
    display: flex;
    flex-direction: column;

    &:not(:last-child) {
      margin-bottom: 2.4rem;
    }

    &--default {
      text-align: left;
    }

    &--vertical {
      text-align: center;
      align-items: center;
    }
  }

  &__title {
    font-weight: bold;

    &--default {
      font-size: 1.8rem;
      line-height: 2.6rem;

      @include l {
        font-size: 1.6rem;
        line-height: 2.4rem;
      }
  
      @include xs {
        font-size: 1.4rem;
        line-height: 2rem;
      }
    }

    &--large {
      font-family: 'Montserrat';
      font-size: 2.4rem;
      line-height: 2.9rem;

      @include l {
        font-size: 1.8rem;
        line-height: 2.2rem;
      }
  
      @include xs {
        font-size: 1.6rem;
        line-height: 1.9rem;
      }
    }
  }

  &__title-block {
    &--vertical {
      display: flex;
      align-items: center;
    }
  }

  &__description {
    margin-top: .8rem;
    font-size: 1.8rem;
    line-height: 2.6rem;
  
    @include l {
      font-size: 1.6rem;
      line-height: 2.4rem;
    }
  
    @include xs {
      font-size: 1.4rem;
      line-height: 2rem;
    }

    & > p:last-child,
    & > span:last-child {
      margin-top: 0;
    }
  }
}
</style>