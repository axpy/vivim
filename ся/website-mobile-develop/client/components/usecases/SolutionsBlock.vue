<template>
  <div class="solutions-block">
    <div class="solutions-block__container">
      <h5 class="solutions-block__title">{{$t(`homepage.${type}.title`)}}:</h5>
      <div class="solutions-block__content">
        <div
          v-for="item in tabInfo"
          :key="item"
          class="solutions-block__item"
        >
          <component
            :is="icon"
            class="solutions-block__item-icon"
          />
          <BaseLink
            v-if="item==='mrz_reading' || item==='fintech_and_banking'"
            class="solutions-block__item-text solutions-block__item-text--link"
            :to="paths[item]"
          >
            {{$t(`homepage.${type}.${item}.title`)}}
          </BaseLink>
          <span
            v-else
            class="solutions-block__item-text"
          >
            {{$t(`homepage.${type}.${item}.title`)}}
          </span>
        </div>
      </div>
    </div>
    <div
      v-if="!isDesktopSize && chosenTabInfo[type].length >= 6 && !isFullInfo"
      class="solutions-block__view-block"
      @click="viewAll"
    >
      {{$t('homepage.buttons.view_all')}}
    </div>
  </div>
</template>

<script>
import IconIndustriesType from '~/components/icons/IconIndustriesType'
import IconSolutionsType from '~/components/icons/IconSolutionsType'
import BaseLink from '~/components/ui/BaseLink'

const icons = {
  "solutions": "IconSolutionsType",
  "industries": "IconIndustriesType"
}
export default {
  name: 'SolutionsBlock',
  components: {
    IconIndustriesType,
    IconSolutionsType,
    BaseLink
  },
  props: {
    type: String,
    chosenTabInfo: Object,
    isDesktopSize: Boolean
  },
  data() {
    return {
      isFullInfo: false,
      paths: {
        'mrz_reading': 'mrz-reader',
        'fintech_and_banking': 'finance'
      }
    }
  },
  computed: {
    icon() {
      return icons[this.type]
    },
    tabInfo() {
      if(this.isDesktopSize || this.isFullInfo) {
        return this.chosenTabInfo[this.type]
      } else {
        return this.chosenTabInfo[this.type].filter((item, index) => index < 5)
      }
    }
  },
  methods: {
    viewAll() {
      this.isFullInfo = true
    }
  }
}
</script>

<style lang="scss" scoped>
.solutions-block {
  box-shadow: $box-shadow-tertiary;
  background-color: $color-white;
  font-size: 1.8rem;
  line-height: 2.6rem;
  
  @include l {
    font-size: 1.6rem;
    line-height: 2.4rem;
  }

  @include s {
    text-align: left;
  }

  @include xs {
    font-size: 1.4rem;
    line-height: 2.2rem;
  }
  &__title {
    width: 100%;
    font-size: 1.8rem;
    line-height: 2.6rem;
    padding-bottom: 3.2rem;
    @include s {
      padding-bottom: 2.1rem;
    }

    @include xs {
      font-weight: bold;
      font-size: 1.4rem;
      line-height: 2.2rem;
    }
  }
  &__container {
    padding: 3.2rem;
    @include m {
      padding: 1.5rem;
    }
    @include s {
      padding: 2.1rem;
    }
  }
  &__content {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-wrap: wrap;

  }
  &__item {
    display: flex;
    align-items: flex-start;
    font-weight: normal;
    font-size: inherit;
    width: calc(100% / 3 - 2rem);
    margin: 0 1rem 1rem 0;
    @include l {
      width: calc(100% / 2 - 1rem);
    }
    @include s {
      width: calc(100% / 3 - 1rem);
    }
    @include xs {
      width: calc(100% / 2 - 1rem);
    }
    @include xxs {
      width: 100%;
    }
    &-icon {
      min-width: .8rem;
      margin-top: .9rem;
      @include l {
        margin-top: .8rem;
      }
      @include s {
        margin-top: .6rem;
      }
    }
    &-text {
      margin: 0 0 2.4rem .8rem;
      @include s {
        margin: 0 0 1.6rem .8rem;
      }
      &--link {
        color: $color-primary;
      }
    }
  }
  &__view-block {
    font-size: 1.4rem;
    color: $color-primary;
    height: 5.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-top: $border-primary;

    @include xs {
      font-weight: 700;
      line-height: 1.8rem;
    }
  }
}

</style>
