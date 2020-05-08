<template>
  <div :class="titleIconClass">
    <div :class="iconClass">
      <component
        :is="icon"
        :config="iconConfig"
      />
    </div>
    <div class="title-icon__content">
      <span
        v-if="title"
        :class="titleClass"
      >{{ title }}</span>
      <BaseParagraph
        v-if="description"
        :config="description"
        :class="descriptionClass"
      />
    </div>
  </div>
</template>

<script>
/*
  Config props:

  title - OPTIONAL
  icon - IconNumber [other]
  description - OPTIONAL
  titleSize - OPTIONAL
  iconSize - medium [big]
  iconBGColor - default [dark, light]
  layout - default [left]

*/
import IconOptimiseProcess from '~/components/icons/IconOptimiseProcess'
import IconTreatCustomers from '~/components/icons/IconTreatCustomers'
import IconSpeedUp from '~/components/icons/IconSpeedUp'
import IconAutomation from '~/components/icons/IconAutomation'
import IconSecurity from '~/components/icons/IconSecurity'
import IconProductivity from '~/components/icons/IconProductivity'
import IconNumber from '~/components/icons/IconNumber'
import IconBarcode from '~/components/icons/IconBarcode'
import IconBank from '~/components/icons/IconBank'
import IconInsuranceDocuments from '~/components/icons/IconInsuranceDocuments'
import IconHotel from '~/components/icons/IconHotel'
import IconIdentity from '~/components/icons/IconIdentity'
import BaseParagraph from '~/components/ui/BaseParagraph'

export default {
  name: 'BaseTitleIcon',
  components: {
    IconNumber,
    BaseParagraph,
    IconOptimiseProcess,
    IconTreatCustomers,
    IconSpeedUp,
    IconProductivity,
    IconAutomation,
    IconSecurity,
    IconBarcode,
    IconInsuranceDocuments,
    IconBank,
    IconHotel,
    IconIdentity
  },
  props: {
    config: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      number: 1,
      titleSize: 'default',
      iconSize: 'medium',
      iconBGColor: 'default',
      icon: 'IconNumber',
      description: '',
      title: '',
      layout: 'default',
      isDescriptionColored: false,
      ...this.config
    }
  },
  computed: {
    iconClass() {
      return [
        'title-icon__icon',
        `title-icon__icon--${this.iconSize}`,
        `title-icon__icon--${this.iconBGColor}`
      ]
    },
    titleClass() {
      return ['title-icon__title', `title-icon__title--${this.titleSize}`]
    },
    titleIconClass() {
      return ['title-icon', `title-icon--${this.layout}`]
    },
    descriptionClass() {
      return ['title-icon__description', {'title-icon__description--colored': this.isDescriptionColored}]
    },
    iconConfig() {
      return {
        iconSize: this.iconSize,
        number: this.number,
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.title-icon {
  display: flex;
  justify-content: flex-start;
  flex-direction: column;

  &--default {
    text-align: center;
    align-items: center;
  }

  &--left {
    text-align: left;
    align-items: flex-start;
  }

  &__icon {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: .4rem;

    &--light {
      background-color: $color-light-4;
    }

    &--dark {
      background-color: $color-primary;
      color: $color-white;
    }

    &--default {
      background-color: transparent;
      color: $color-primary;
    }

    &--large {
      width: 5.6rem;
      height: 5.6rem;
      margin-bottom: 2.4rem;

      @include l {
        width: 4.8rem;
        height: 4.8rem;
      }

      @include xs {
        width: 4rem;
        height: 4rem;
        margin-bottom: 1.6rem;
      }

      & img {
        width: 5.6rem;
        height: 5.6rem;
      }
    }

    &--big {
      width: 8.8rem;
      height: 8.8rem;
      margin-bottom: 2.4rem;

      @include l {
        width: 7.2rem;
        height: 7.2rem;
      }

      @include xs {
        margin-bottom: 1.6rem;
      }

      & img {
        max-width: 8.8rem;
        max-height: 8.8rem;

        @include l {
          max-width: 7.2rem;
          max-height: 7.2rem;
        }
      }
    }

    &--extra-big {
      width: 8.8rem;
      height: 8.8rem;
      margin-bottom: 2.4rem;

      & img {
        max-width: 8.8rem;
        max-height: 8.8rem;
      }
    }
  }

  &__content {
    display: flex;
    flex-direction: column;

    &:not(:last-child) {
      margin-bottom: 2.4rem;
    }
  }

  &__title {
    font-weight: bold;

    &--default {
      margin-bottom: 1.6rem;
      font-size: 1.8rem;
      line-height: 2.6rem;

      @include l {
        font-size: 1.6rem;
        line-height: 2.4rem;
      }
  
      @include xs {
        margin-bottom: .8rem;
        font-size: 1.4rem;
        line-height: 2rem;
      }
    }

    &--big {
      font-family: 'Montserrat';
      margin-bottom: 1.6rem;
      font-size: 2.4rem;
      line-height: 3.2rem;

      @include l {
        font-size: 2.2rem;
        line-height: 2.2rem;
      }

      @include s {
        font-size: 2rem;
      }
  
      @include xs {
        font-size: 1.6rem;
        line-height: 2rem;
      }
    }

    &--large {
      font-family: 'Montserrat';
      margin: 0 5rem 2.4rem;
      font-size: 2.4rem;
      line-height: 2.9rem;

      @include l {
        margin: 0 6rem 2.4rem;
        font-size: 1.8rem;
        line-height: 2.2rem;
      }

      @include m {
        margin: 0 4rem 2.4rem;
      }
  
      @include xs {
        margin: 0 1rem 1.6rem;
        font-size: 1.6rem;
        line-height: 1.9rem;
      }
    }
  }

  &__description {
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

    &--colored {
      color: $color-dark-3;
    }
  }
}
</style>