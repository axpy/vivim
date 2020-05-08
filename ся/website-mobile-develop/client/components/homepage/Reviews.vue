<template>
  <div
    class="reviews"
    id="reviews"
  >
    <IconReviewBGLeft class="reviews__i reviews__i--bg-left" />
    <IconReviewBGRight class="reviews__i reviews__i--bg-right" />
    <IconReviewBGSemiOval class="reviews__i reviews__i--bg-semi-oval" />
    <IconReviewBGSemiOval class="reviews__i reviews__i--bg-semi-oval-rotated" />
    <div
      v-if="isMobileView"
      class="reviews__slider"
    >
      <div class="reviews__header">
        <h2 class="reviews__title"> {{ $t('homepage.reviews.main_card.header') }} </h2>
        <p class="reviews__text">{{ $t('homepage.reviews.main_card.text') }}</p>
      </div>
      <client-only>
        <BaseSlider
          :items="cardItems"
          :itemsQuantity="getCurrentSliderItems"
          :options="sliderOptions"
        >
          <template v-slot:card="{card}">
            <ReviewCard :card="card" />
          </template>
        </BaseSlider>
      </client-only>
    </div>
    <div 
      v-else 
      class="reviews__content"
    >
      <div class="reviews__item">
        <div class="reviews__header">
          <h2 class="reviews__title"> {{ $t('homepage.reviews.main_card.header') }} </h2>
          <p class="reviews__text">{{ $t('homepage.reviews.main_card.text') }}</p>
        </div>
        <BaseArrowControls
          class="reviews__controls"
          :currentPage="currentPage"
          :totalPages="totalPages"
          :handlerSwipeAhead="handlerSwipeAhead"
          :handlerSwipeBack="handlerSwipeBack"
        />
      </div>
      <ReviewCard
        class="reviews__item"
        v-for="(card, index) in pagedCardItems"
        :key="index"
        :card="card"
      >
      </ReviewCard>
    </div>
  </div>
</template>

<script>
import ReviewCard from '~/components/reviews/ReviewCard'
import BaseSlider from '~/components/ui/BaseSlider'
import BaseArrowControls from '~/components/ui/BaseArrowControls'
import IconReviewBGRight from '~/components/icons/IconReviewBGRight'
import IconReviewBGLeft from '~/components/icons/IconReviewBGLeft'
import IconReviewBGSemiOval from '~/components/icons/IconReviewBGSemiOval'
import IconTriangle from '~/components/icons/IconTriangle'

export default {
  name: 'Reviews',
  components: {
    ReviewCard,
    BaseSlider,
    BaseArrowControls,
    IconReviewBGRight,
    IconReviewBGLeft,
    IconReviewBGSemiOval,
    IconTriangle
  },
  data() {
    return {
      currentPage: 1,
      sliderOptions: {
        loop: true,
        loopedSlides: 2
      }
    }
  },
  computed: {
    cardItems() {
      return [
        {
          icon: '/images/Covida_logo.png',
          icon_alt: 'Covida',
          icon_class: 'wide',
          footer: this.$t('homepage.reviews.covida.footer'),
          text: this.$t('homepage.reviews.covida.text'),
          link: {
            to: 'https://www.linkedin.com/posts/eduardofierro_i-would-like-to-thanks-regula-for-supporting-activity-6646823732688097281-Fgc_/',
            text: this.$t('homepage.reviews.covida.link')
          }
        },
        {
          icon: '/images/Friendi_logo.png',
          icon_alt: 'Friendi',
          icon_class: 'narrow',
          footer: this.$t('homepage.reviews.friendi.footer'),
          text: this.$t('homepage.reviews.friendi.text')
        },
        {
          icon: '/images/IATA.png',
          icon_alt: 'IATA',
          footer: this.$t('homepage.reviews.iata.footer'),
          text: this.$t('homepage.reviews.iata.text')
        },
        {
          icon: '/images/Air_Asia.png',
          icon_alt: 'AirAsia',
          footer: this.$t('homepage.reviews.air_asia.footer'),
          text: this.$t('homepage.reviews.air_asia.text')
        },
        {
          icon: '/images/TUI.png',
          icon_alt: 'TUI',
          icon_class: 'wide',
          footer: this.$t('homepage.reviews.tui.footer'),
          text: this.$t('homepage.reviews.tui.text')
        },
        {
          icon: '/images/Pegasus_Airlines.png',
          icon_alt: 'Pegasus Airlines',
          footer: this.$t('homepage.reviews.pegasus_airlines.footer'),
          text: this.$t('homepage.reviews.pegasus_airlines.text')
        },
        {
          icon: '/images/Freedom_Finance_Insurance.png',
          icon_alt: 'Freedom Finance Insurance',
          footer: this.$t('homepage.reviews.freedom_finance_insurance.footer'),
          text: this.$t('homepage.reviews.freedom_finance_insurance.text')
        },
        {
          icon: '/images/Lycamobile.png',
          icon_alt: 'Lycamobile',
          footer: this.$t('homepage.reviews.lycamobile.footer'),
          text: this.$t('homepage.reviews.lycamobile.text')
        }
      ]
    },
    isMobileView() {
      return this.currentDisplay === 'tablet' || this.currentDisplay === 'big-mobile' || this.currentDisplay === 'mobile'
    },
    getCurrentSliderItems() {
      return {
        ...(this.currentDisplay === 'mobile' && {isCentered: true}),
        slidesToScroll: this.slidesToScroll,
        totalPages: this.totalPages
      }
    },
    slidesToScroll() {
      if (this.isMobileView) {
        return 1
      } else {
        return 3
      }
    },
    totalPages() {
      return Math.round(this.cardItems.length / this.slidesToScroll)
    },
    currentDisplay() {
      return this.$store.state.ui.currentDisplay
    },
    pagedCardItems() {
      let start = (this.currentPage - 1) * this.slidesToScroll
      let end = start + this.slidesToScroll
      return this.cardItems.slice(start, end)
    }
  },
  methods: {
    handlerSwipeAhead() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++
      }
    },
    handlerSwipeBack() {
      if (this.currentPage !== 1) {
        this.currentPage--
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.reviews {
  & {
    width: 100%;
    height: auto;
    padding: 12rem 6.7rem;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: center;
    background-color: $color-light-1;
    position: relative;
    border-radius: 20rem 0 0 0;
    overflow: hidden;

    @include l {
      padding: 8rem 3rem;
    }

    @include s {
      padding: 8rem 2rem 4rem;
      align-items: center;
      flex-direction: column;
      flex-wrap: initial;
    }
  }
  &__slider {
    z-index: $z-low;
  }

  /deep/.slider-item {
    
    @include xs {
      width: 50vw;
      padding: 0;
      margin-right: 0;
    }

    @include xxs {
      justify-content: center;
      width: calc(100vw - 8rem);
      padding: 0 1rem;
    }
  }
  .review-card {

    @include xs {
      margin: 0 1rem 3rem 1rem;
    }

    @include xxs {
      margin: 0 0 3rem;
    }
  }
  &__content {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 3rem 6rem;
    max-width: 145rem;
    margin: 0 auto;
    @include s {
      grid-gap: 3rem;
    }
  }

  &__item {
    position: relative;
  }
  &__header {
    text-align: left;
    @include s {
      text-align: center;
    }
    @include xs {
      margin-bottom: 3.2rem;
    }
  }

  &__title {
    @include xs {
      line-height: 3.2rem;
    }
  }

  &__text {
    justify-self: left;
    margin: 1.6rem 0;
    color: $color-dark-2;
    font-size:  1.6rem;

    @include xs {
      line-height: 2.2rem;
    }
  }

  &__controls {
    position: absolute;
    bottom: 3rem;
    right: 0;
  }

  &__i {
    position: absolute;
    width: 100%;
    height: 100%;
    
    &--bg-left {
      top: 0;
      left: -25%;

      @include s {
        display: none;
      }
    }

    &--bg-right {
      height: 80%;
      width: 51%;
      bottom: 0%;
      right: 15%;

      @include s {
        display: none;
      }
    }

    &--bg-semi-oval {
      display: none;

      @include s {
        display: block;
        top: 20%;
        left: 0;
        height: 50%;
        width: 18%;
      }

      @include xs {
        top: 20%;
        left: 0;
        height: 50%;
        width: 30%;
      }

      @include xxs {
        top: 15%;
        left: 0;
        height: 50%;
        width: 40%;
      }
    }

    &--bg-semi-oval-rotated {
      display: none;

      @include s {
        display: block;
        transform: rotate(180deg);
        bottom: 10%;
        right: 0;
        height: 50%;
        width: 18%;
      }

      @include xs {
        bottom: 10%;
        right: 0;
        height: 50%;
        width: 30%;
      }

      @include xxs {
        bottom: 10%;
        right: 0;
        height: 40%;
        width: 40%;
      }
    }

    &--bg-full {
      right: 0;
    }
  }
}
</style>