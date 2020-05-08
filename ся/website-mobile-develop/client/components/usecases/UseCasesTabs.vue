<template>
  <div class="tabs">
    <div
      v-for="(tab, tabIndex) in tabs"
      :key="tab"
      :class="['tabs__tab', chosenTab === tab ? 'tabs__tab--active' : 'tabs__tab--default']"
    >
      <div 
        class="tabs__tab-header"
        @click="choseTab(tab, tabIndex)"
      >
        {{$t(`homepage.use_cases.${tab}.title`)}}
        <IconTriangle :class="['tabs__tab-icon', {'tabs__tab-icon--reversed' : chosenTab === tab}]"/>
      </div>
      <UseCasesTabContent
        v-if="chosenTab === tab"
        :chosenTab="chosenTab"
        :chosenTabInfo="chosenTabInfo"
        :isDesktopSize="isDesktopSize"
        class="tabs__tab-content"
      />
    </div>
  </div>
</template>

<script>
import IconTriangle from '~/components/icons/IconTriangle'
import UseCasesTabContent from '~/components/usecases/UseCasesTabContent'

export default {
  name: 'UseCasesTabs',
  components: {
    IconTriangle,
    UseCasesTabContent
  },
  props: {
    chosenTab: String,
    tabs: Array,
    chosenTabInfo: Object,
    isDesktopSize: Boolean
  },
  methods: {
    choseTab(tab, tabIndex) {
      this.$emit('choseTab', tab, tabIndex)
    }
  }
}
</script>

<style lang="scss" scoped>
.tabs {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  box-shadow: $box-shadow-tertiary;
  margin: 6.8rem 0 7.8rem;
  font-size: 1.8rem;

  @include l {
    font-size: 1.6rem;
    line-height: 2rem;
  }

  @include s {
    box-shadow: none;
    flex-direction: column;
    margin: 2.6rem 0 0;
    padding: 0;
  }
  @include xs {
    font-size: 1.4rem;
    line-height: 1.8rem;
  }
  &__tab {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    border: 1px solid #f6efff;
    transition: background-color $transition-time-short;
    cursor: pointer;
    &-header {
      position: relative;
      padding: 0 2.1rem;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      user-select: none;
      @include s {
        height: 5rem;
        text-align: left;
        justify-content: left;
      }
      @include xxs {
        font-size: 1.4rem;
        line-height: 2.2rem;
      }
    }
    &-icon {
      position: absolute;
      right: 2.1rem;
      top: calc(50% - .3rem);
      @include xxs {
        right: 1.2rem;
      }
    }
    &-content {
      display: none;
      @include s {
        display: block;
        width: 100%;
      }
    }
    &--default {
      width: 100%;
      height: 6.4rem;
      background-color: $color-white;
      &:not(:last-child) {
        border-right: $border-thin;
      }
      @include s {
        height: 5rem;
        display: block;
        box-shadow: $box-shadow-primary;
        &:not(:last-child) {
          border-right: none;
          border-left: none;
          margin-bottom: 1.6rem;
        }
      }
    }
    &--active {
      width: 100%;
      font-weight: 600;
      @include l {
        font-weight: 400;
      }
      @include s {
        height: auto;
        box-shadow: none;
        border-right: none;
        border-left: none;
      }
      .tabs__tab {
        &-header {
          background-color: $color-primary;
          color: $color-white;
        }
        &-icon {
          transform: rotate(180deg);
        }
      }
    }
    &-icon {
      display: none;
      fill: $color-dark-1;
      &--reversed {
        fill: $color-white;
        transform: rotate(180deg);
      }
      @include s {
        display: flex;
        align-items: center;
      }
    }
  }
}
</style>