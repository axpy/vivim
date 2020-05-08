<template>
  <div class="base-row">
    <div
      v-for="(item, index) in config.row"
      :key="index"
      class="base-row__cell"
    >
      <span
        v-if="index !== 0"
        class="base-row__title"
      >
        {{ config.header[index] }}
      </span>
      <div class="base-row__content">
        <component
          :is="item.sideIcon"
          class="base-row__icon--aside"
        />
        <span class="base-row__text">
          {{ item.sideIcon ? item.text : item }}
          <component
            :is="item.bottomIcon"
            class="base-row__icon--bottom"
          />
        </span>
      </div>
    </div>
  </div>
</template>

<script>
/*
  Config props:

  config - REQUIRED
*/
import IconOneDollar from '~/components/icons/IconOneDollar'
import IconConnectedMosaic from '~/components/icons/IconConnectedMosaic'
import IconSquareInSquare from '~/components/icons/IconSquareInSquare'
import IconNoInternet from '~/components/icons/IconNoInternet'
import IconExpand from '~/components/icons/IconExpand'
import IconTwoDollars from '~/components/icons/IconTwoDollars'
import IconDevices from '~/components/icons/IconDevices'
import IconSplittedMosaic from '~/components/icons/IconSplittedMosaic'

export default {
  name: 'BaseRow',
  components: {
    IconOneDollar,
    IconConnectedMosaic,
    IconSquareInSquare,
    IconNoInternet,
    IconExpand,
    IconTwoDollars,
    IconDevices,
    IconSplittedMosaic
  },
  props: {
    config: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.base-row {
    display: grid;
    grid-template-columns: 33.6rem 1fr 1fr;
    grid-template-rows: minmax(5rem, max-content);
    justify-content: center;
    align-content: center;
    font-size: 1.8rem;
    line-height: 2.6rem;
    border: .1rem solid $color-grey-3;
    border-bottom: none;

    &:not(:last-child) {
      @include xs {
        margin-bottom: 1rem;
      }
    }

    &:last-child {
      border-bottom: .1rem solid $color-grey-3;
    }

    &:first-child {
      font-weight: bold;
      @include xs {
        display: none;
      }
      .base-row {
        &__text {
          margin-left: 5.5rem;
        }
      }
    }
  
    @include l {
      grid-template-columns: 25rem 1fr 1fr;
      font-size: 1.6rem;
      line-height: 2.2rem;
    }

    @include s {
      grid-template-columns: .8fr 1fr 1fr;
    }

    @include xs {
      width: 100%;
      grid-template-columns: 1fr;
      grid-template-rows: minmax(5rem, max-content);
      border-bottom: .1rem solid $color-grey-3;
      font-size: 1.4rem;
      line-height: 2rem;
    }

    &__title {
      font-weight: bold;
      display: none;
      margin-bottom: 1.2rem;
      @include xs {
        display: block;
      }
    }

    &__content {
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
    }

    &__cell {
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      flex-direction: column;
      box-sizing: border-box;
      padding: 2.4rem 4rem;
      width: 100%;
      flex-grow: 1;

      &:not(:last-child) {
        border-right: .1rem solid $color-grey-3;

        @include xs {
          border-bottom: .1rem solid $color-grey-3;
          border-right: none;
        }
      }

      &:first-child {
        padding: 2.4rem 2rem;
        align-items: flex-end;
        font-weight: bold;

        @include xs {
          padding: 2rem 2rem;
          font-size: 1.8rem;
          align-items: flex-start;
        }
      }

      &:last-child {
        background-color: $color-light-7;
      }

      @include l {
        padding: 2.4rem 3rem;
      }

      @include xs {
        padding: 2rem 2rem;
      }
    }

    &__text {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
    }

    &__icon {
      &--bottom {
        margin-top: 2.4rem;

        @include xs {
          margin-top: 1.5rem;
        }
      }
      &--aside {
        margin-right: 3rem;
        min-width: 2.5rem;

        @include xs {
          margin-right: 2.5rem;
        }
      }
    }
}
</style>