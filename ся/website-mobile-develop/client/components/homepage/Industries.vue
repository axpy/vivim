<template>
  <div
    class="industries"
    id="industries"
  >
    <IconBG class="industries__i industries__i--bg" />
    <h2 class="industries__alt-header">{{ $t(`homepage.industries.title`) }}</h2>
    <div class="industries__info">
      <h2 class="industries__header">{{ $t(`homepage.industries.title`) }}</h2>
      <div class="industries__sub-header">
        <span>{{ $t(`homepage.industries.sub_header_part_1`) }}</span>
        <span class="industries__sub-header--em">{{ $t(`homepage.industries.sub_header_part_2`) }}</span>
      </div>
      <ContactsFormModalInvoker :buttonText="$t('homepage.buttons.contact_us')" />
    </div>
    <div class="industries__slider-wrapper">
      <client-only>
        <BaseSlider
          class="industries__slider"
          :items="cardItems"
          :itemsQuantity="getCurrentSliderItems"
        >
          <template v-slot:controls="{currentPage, totalPages, handlerSwipeAhead, handlerSwipeBack}">
            <BaseArrowControls
              class="industries__slider-controls"
              :currentPage="currentPage"
              :totalPages="totalPages"
              :handlerSwipeAhead="handlerSwipeAhead"
              :handlerSwipeBack="handlerSwipeBack"
              :type="'wider'"
            />
          </template>
          <template v-slot:card="{card}">
            <IndustriesCard :card="card" />
          </template>
        </BaseSlider>
      </client-only>
    </div>
  </div>
</template>

<script>
import IndustriesCard from '~/components/industries/IndustriesCard'
import IconBG from '~/components/icons/IconBG'
import BaseSlider from '~/components/ui/BaseSlider'
import BaseArrowControls from '~/components/ui/BaseArrowControls'
import ContactsFormModalInvoker from '~/components/ui/ContactsFormModalInvoker'

export default {
  name: 'Industries',
  components: {
    BaseArrowControls,
    IndustriesCard,
    ContactsFormModalInvoker,
    BaseSlider,
    IconBG
  },
  computed: {
    getCurrentSliderItems() {
      return {
        slidesToScroll: this.slidesToScroll,
        totalPages: this.totalPages,
      }
    },
    slidesToScroll() {
      return 1
    },
    totalPages() {
      return this.cardItems.length / this.slidesToScroll
    },
    currentDisplay() {
      return this.$store.state.ui.currentDisplay
    },
    cardItems() {
      return [
        {
          icon: 'IconFintechBanking',
          header: this.$t('homepage.industries.fintech_and_banking.title'),
          text: this.$t('homepage.industries.fintech_and_banking.description'),
          isLink: true
        },
        {
          icon: 'IconTravel',
          header: this.$t('homepage.industries.travel_and_hospitality.title'),
          text: [
            {
              type: 'text',
              text: this.$t('homepage.industries.travel_and_hospitality.description.text')
            },
            {
              type: 'BaseLink',
              text: this.$t('homepage.industries.travel_and_hospitality.description.link'),
              to: 'data-entry-automation'
            },
            {
              type: 'text',
              text: this.$t('homepage.industries.travel_and_hospitality.description.text_2')
            }
          ]
        },
        {
          icon: 'IconTelcos',
          header: this.$t('homepage.industries.telcos.title'),
          text: this.$t('homepage.industries.telcos.description')
        },
        {
          icon: 'IconInsurance',
          header: this.$t('homepage.industries.insurance.title'),
          text: this.$t('homepage.industries.insurance.description')
        },
        {
          icon: 'IconEducation',
          header: this.$t('homepage.industries.education.title'),
          text: this.$t('homepage.industries.education.description')
        },
        {
          icon: 'IconEntertainment',
          header: this.$t('homepage.industries.entertainment.title'),
          text: this.$t('homepage.industries.entertainment.description'),
        },
        {
          icon: 'IconHealthCare',
          header: this.$t('homepage.industries.healthcare.title'),
          text: this.$t('homepage.industries.healthcare.description'),
        },
        {
          icon: 'IconAviation',
          header: this.$t('homepage.industries.aviation.title'),
          text: this.$t('homepage.industries.aviation.description'),
        },
        {
          icon: 'IconGovermentSecurity',
          header: this.$t('homepage.industries.government_and_security.title'),
          text: this.$t('homepage.industries.government_and_security.description'),
        },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.industries {
  & {
    width: 100%;
    display: flex;
    justify-content: center;
    background-color: $color-light-1;
    position: relative;
    align-items: center;

    @include s {
      padding: 0;
      overflow: hidden;
      flex-direction: column;
      height: auto;
    }
  }

  &__info,
  &__sub-header {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  &__info {
    height: 100%;
    z-index: $z-default;
    margin: 0 15rem;
    @include l {
      margin: 0 10rem;
    }

    @include s {
      margin: 0 5rem;
    }

    @include s {
      order: 2;
      margin: 0 0 4.8rem;
    }
  }

  &__sub-header {
    text-align: center;
    font-size: 1.8rem;
    line-height: 3.2rem;
    margin-bottom: 2.4rem;

    @include l {
      font-size: 1.6rem;
      line-height: 3rem;
    }

    @include s {
      margin-bottom: 1.6rem;
    }

    @include xs {
      font-size: 1.4rem;
      line-height: 2.2rem;
    }

    &--em {
      font-size: 2.4rem;
      font-weight: 600;

      @include l {
        font-size: 2.2rem;
      }

      @include xs {
        font-size: 1.6rem;
        line-height: 2.4rem;
      }
    }
  }

  &__header {
    margin: 2rem 0 8rem;
    text-align: center;
    word-break: keep-all;

    @include s {
      display: none;
    }
  }

  &__alt-header {
    display: none;
    margin: 4.8rem 0 4.5rem;

    @include s {
      margin: 4.8rem 0 1.2rem;
      display: inline-block;
      text-align: center;
    }
    @include xs {
      line-height: 3.2rem;
    }
  }

  &__slider-wrapper {
    overflow: hidden;
    padding: 18.5rem 0 5rem;
    &:lang(ru), &:lang(de) {
      padding: 14.5rem 0 5rem;
      @include xxl {
        padding: 3rem 0 5rem;
      }
    }
    &:lang(es) {
      padding: 7rem 0 5rem;
      @include xxl {
        padding: 3rem 0 5rem;
      }
    }
    @include xxl {
      padding: 11rem 0 5rem;
      order: 1;
    }
    @include s {
      padding: 0 !important;
      order: 1;
    }
  }

  &__slider {
    display: flex;
    flex-direction: column-reverse;
    @include s {
      width: 100vw !important;
    }
  }
  
  /deep/.slider-item {
    width: 42rem;
    margin-right: 4rem;

    @include l {
      justify-content: flex-start;
    }
    
    @include s {
      padding: 0 2rem;
      margin-right: 0;
    }

    @include xs {
      justify-content: center;
      width: 24rem;
      padding: 0 1rem;
    }
  }
  /deep/.slider-wrapper {
    @include s {
      margin: 0 0 4rem 4rem;
    }
    
  }

  &__slider-controls {
    margin: 5rem 11rem 0 0;
    justify-content: flex-end;

    @include s {
      display: none !important;
    }
  }

  &__i {
    position: absolute;
    width: 70rem;
    height: 100%;
    
    &--bg {
      left: 0;
      top: 0;

      @include s {
        display: none;
      }
    }
  }
}
</style>
