<template>
  <div :class="cardClass">
    <div :class="iconClass">
      <component
        fill="#a46fe2"
        :is="icon"
      />
    </div>
    <div class="base-card__title">
      {{ title }}
    </div>
  </div>
</template>

<script>
/*

Config props 

icon - REQUIRED
title - REQUIRED
cardSize - OPTIONAL
isIconBGColored - OPTIONAL

*/
import IconDataEntryAutomation from '~/components/icons/IconDataEntryAutomation'
import IconCustomerOnboarding from '~/components/icons/IconCustomerOnboarding'
import IconFraudPrevention from '~/components/icons/IconFraudPrevention'
import IconKYCAutomation from '~/components/icons/IconKYCAutomation'
import IconAutomatedCheckIn from '~/components/icons/IconAutomatedCheckIn'

import IconTelcos from '~/components/icons/IconTelcos'
import IconTravel from '~/components/icons/IconTravel'
import IconInsurance from '~/components/icons/IconInsurance'
import IconHealthCare from '~/components/icons/IconHealthCare'
import IconFintechBanking from '~/components/icons/IconFintechBanking'
import IconEntertainment from '~/components/icons/IconEntertainment'
import IconEducation from '~/components/icons/IconEducation'

import IconMRZReading from '~/components/icons/IconMRZReading'
import IconBarcodeReading from '~/components/icons/IconBarcodeReading'
import IconCreaditCardsReading from '~/components/icons/IconCreaditCardsReading'
import IconElectronicDocumentAuthentication from '~/components/icons/IconElectronicDocumentAuthentication'
import IconOCR from '~/components/icons/IconOCR'

export default {
  name: 'BaseCard',
  components: {
    IconDataEntryAutomation,
    IconCustomerOnboarding,
    IconFraudPrevention,
    IconKYCAutomation,
    IconAutomatedCheckIn,
    IconTelcos,
    IconTravel,
    IconInsurance,
    IconHealthCare,
    IconFintechBanking,
    IconEntertainment,
    IconEducation,
    IconMRZReading,
    IconBarcodeReading,
    IconCreaditCardsReading,
    IconElectronicDocumentAuthentication,
    IconOCR
  },
  props: {
    config: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      ...this.config
    }
  },
  computed: {
    cardClass() {
      return ['base-card', 'base-card--breakable', `base-card--${this.cardSize}`]
    },
    iconClass() {
      return [
        'base-card__icon',
        `base-card__icon--${this.cardSize}`,
        this.isIconBGColored ? 'base-card__icon--colored' : 'base-card__icon--default'
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.base-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  &--breakable {
    overflow-wrap: break-word;
    word-wrap: break-word;
    -ms-word-break: break-all;
    word-break: break-all;
    word-break: break-word;
    -ms-hyphens: auto;
    -moz-hyphens: auto;
    -webkit-hyphens: auto;
    hyphens: auto;
  }

  &--large {
    background-color: $color-white;
    box-shadow: $box-shadow-secondary;
    width: 24.5rem;
    min-height: 20rem;
    padding: 3.2rem 2rem;
  
    @include l {
      width: 21rem;
      min-height: 19rem;
    }

    @include m {
      padding: 1.6rem 1rem;
      width: 18rem;
      min-height: 18rem;
    }
  
    @include xs {
      width: 14rem;
      min-height: 14rem;
    }
  }

  &--medium {
    background-color: $color-white;
    box-shadow: $box-shadow-secondary;
    width: 22rem;
    min-height: 17rem;
    padding: 3.2rem 2rem;
  
    @include l {
      padding: 4.2rem 2rem 3.2rem;
      width: 21rem;
      min-height: 17rem;
    }

    @include m {
      padding: 1.6rem 1rem;
      width: 18rem;
    }

    @include xs {
      width: 14rem;
      min-height: 14rem;
    }
  }

  &--small {
    background-color: transparent;
    min-height: 8.2rem;
  
    @include l {
      min-height: 8rem;
    }
  
    @include xs {
      min-height: 7.6rem;
    }
  }

  &__icon {
    display: flex;
    align-items: center;
    justify-content: center;
    
    &--small {
      width: 4rem;
      height: 4rem;
      margin-bottom: 1.3rem;
      @include l {
        margin-bottom: 1.6rem;
      }

      & img {
        max-width: 4rem;
        height: 4rem; 
      }
    }

    &--medium {
      width: 4rem;
      height: 4rem;
      margin-bottom: 1.6rem;

      & img {
        max-width: 4rem;
        max-height: 4rem;
      }
    }

    &--large {
      margin-bottom: 2.4rem;
      @include l {
        margin-bottom: 3.4rem;
      }
      @include xs {
        margin-bottom: 1.6rem;
      }

      & img {
        max-height: 8rem;

        @include l {
          max-height: 6rem;
        }
      }
    }

    &--colored {
      background-color: $color-light-4;
    }

    &--default {
      background-color: transparent;
    }
  }

  &__title {
    font-size: 1.8rem;
    line-height: 2.6rem;
    text-align: center;

    @include l {
      font-size: 1.6rem;
      line-height: 2.4rem;
    }

    @include xs {
      font-size: 1.4rem;
      line-height: 2rem;
    }
  }
}
</style>