<template>
  <div class="review-card">
    <div class="review-card__content">
      <div class="review-card__i-wrapper">
        <IconQuotes />
      </div>
      <div class="review-card__text">
        <span :class="textClass">
          <span v-if="card.link">
            <a
              class="review-card__text--link"
              target="_blank"
              :href="card.link.to"
            >
              {{ card.link.text }}
            </a>
          </span>
          {{ card.text }}
        </span>
        <span
          class="review-card__text-item--em"
          @click="toggleCardText"
        >
          {{ isVisible ? $t('homepage.reviews.view_less') : $t('homepage.reviews.view_more') }}
        </span>
      </div>
      <h5 class="review-card__footer">{{ card.footer }}</h5>
    </div>
    <div :class="imgWrapperClass">
      <img
        loading="lazy"
        :src="card.icon"
        class="review-card__img"
        :alt="card.icon_alt"
      />
    </div>
  </div>
</template>

<script>
import IconQuotes from '~/components/icons/IconQuotes'
import IconTriangle from '~/components/icons/IconTriangle'

export default {
  name: 'ReviewCard',
  props: {
    card: {
      type: Object,
      required: true,
    },
    isRoot: {
      type: Boolean,
      default: false
    }
  },
  components: {
    IconQuotes,
    IconTriangle
  },
  data() {
    return {
      isVisible: false,
    }
  },
  computed: {
    textClass() {
      return [
        'review-card__text-item',
        !this.isVisible && 'review-card__text-item--cut'
      ]
    },
    imgWrapperClass() {
      return ['review-card__img-wrapper', `review-card__img-wrapper--${this.card.icon_class || 'default'}`]
    }
  },
  methods: {
    toggleCardText() {
      this.isVisible = !this.isVisible
    }
  }
}
</script>

<style lang="scss" scoped>
.review-card {
  & {
    width: 100%;
    height: max-content;
    padding: 4.8rem;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    text-align: left;
    background-color: $color-white;
    position: relative;
    color: black;
    box-sizing: border-box;
    box-shadow: $box-shadow-tertiary;

    @include l {
      padding: 2.4rem;
    }

    @include xs {
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      width: 100%;
      padding: 2.4rem 1.4rem;
    }
  }

  &__content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;

    @include xs {
      padding: 0;
      align-items: center;
      order: 2;
    }
  }
  
  &__footer {
    display: flex;
    align-items: flex-end;
    &:hover {
      svg {
        fill: $color-primary-accent;
      }
      
      h6 {
        color: $color-primary-accent;
        border-color: $color-primary-accent;
      }
    }

    @include l {
      font-size: 2rem;
    }

    @include xs {
      font-size: 1.6rem;
      line-height: 2.6rem;
    }

    &--em {
      color: $color-primary;
      margin-right: .65rem;
      line-height: 2.6rem;
      border-bottom: .1rem solid transparent;
    }
  }

  &__triangle {
    transform: rotate(270deg);
    margin-bottom: .85rem;
  }

  &__text {
    height: auto;
    margin: 2.4rem 0;
    font-size: 1.8rem;
    line-height: 2.6rem;

    @include l {
      font-size: 1.6rem;
      line-height: 2.4rem;
    }

    @include xs {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      font-size: 1.4rem;
      line-height: 2.2rem;
      margin: 1.2rem 0;
    }

    &--link {
      color: $color-primary;
      cursor: pointer
    }

    &-item {
      white-space: normal;
      &--em {
        color: $color-primary;
        cursor: pointer;
        font-weight: bold;

        &:hover {
          color: $color-primary-accent;
        }
      }
      &--cut {
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
        display: -webkit-box;
      }
    }
  }
  
  &__img-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 13.6rem;
    height: 13.6rem;
    margin-left: 3rem;
    min-height: 13.6rem;
    min-width: 13.6rem;
    border-radius: 50%;
    background-color: $color-light-2;

    &--default {
      padding: 0;
    }

    &--wide {
      padding: .5rem;
    }

    &--narrow {
      padding: 1rem;
    }

    @include l {
      width: 9rem;
      height: 9rem;
      margin-left: 2rem;
      min-height: 9rem;
      min-width: 9rem;
    }

    @include xs {
      order: 1;
      margin: 0;
      width: 11.6rem;
      height: 11.6rem;
      margin-left: 0;
      min-height: 11.6rem;
      min-width: 11.6rem;
    }
  }

  &__img {
    width: 100%;
    height: auto;
    pointer-events: none;
  }

    &__i-wrapper {

    @include l {
      width: 3.5rem;
      height: 2.5rem;
    }

    @include xs {
      display: none;
    }
  }
}
</style>