<template>
  <div
    :class="['base-collapsible', chosenTab === tab ? 'base-collapsible--active' : 'base-collapsible--default']"
  >
    <div 
      class="base-collapsible__header"
      @click="choseTab"
    >
      {{ tabTitleText }}
      <IconTriangle :class="['base-collapsible__icon', {'base-collapsible__icon--reversed' : chosenTab === tab}]"/>
    </div>
    <div
      v-if="chosenTab === tab"
      class="base-collapsible__content"
    >
      <component
        v-for="(config, index) in content"
        :is="config.name"
        :key="index"
        :config="config.config"
      />
    </div>
  </div>
</template>

<script>
/*
  Config props:

  tab - REQUIRED
  tabTitleText - REQUIRED
  slotConfig - REQUIRED

  chosenTab - REQUIRED

*/
import IconTriangle from '~/components/icons/IconTriangle'
import BaseHeader from '~/components/BaseHeader'
import BasePicture from '~/components/ui/BasePicture'
import BaseParagraph from '~/components/ui/BaseParagraph'
import BaseFootnote from '~/components/ui/BaseFootnote'
import BaseList from '~/components/ui/BaseList'
import BaseItem from '~/components/ui/BaseItem'
import BaseTitleIcon from '~/components/ui/BaseTitleIcon'

export default {
  name: 'BaseCollapsible',
  components: {
    IconTriangle,
    BaseHeader,
    BasePicture,
    BaseParagraph,
    BaseTitleIcon,
    BaseList,
    BaseItem,
    BaseFootnote
  },
  props: {
    config: {
      type: Object,
      required: true
    },
    chosenTab: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      columnsLayout: 'default',
      ...this.config
    }
  },
  methods: {
    choseTab() {
      this.$emit('choseTab', this.tab)
    }
  }
}
</script>

<style lang="scss" scoped>
.base-collapsible {
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    background-color: $color-white;
    transition: background-color $transition-time-short;
    cursor: pointer;

    &:not(:first-child) {
      @include s {
        margin-top: 1.6rem;
      }
    }

    &--default {
      width: 100%;
      height: 6.4rem;
      font-size: inherit;
      &:not(:last-child) {
        border-right: $border-thin;
      }
      @include s {
        height: 5rem;
        display: block;
        box-shadow: $box-shadow-primary;
        &:not(:last-child) {
          border-right: none;
        }
      }
    }

    &--active {
      width: 100%;
      @include s {
        height: auto;
        box-shadow: none;
        border-right: none;
      }

      .base-collapsible {
        &__header {
          background-color: $color-primary;
          color: $color-white;
          font-weight: bold;
        }
        &__icon {
          transform: rotate(180deg);
        }
      }
    }

    &__header {
      padding: 0 1.6rem;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      user-select: none;

      @include s {
        height: 5rem;
        justify-content: space-between;
      }
    }

    &__content {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      @include s {
        padding: 1.6rem 1rem;
      }
    }

    &__icon {
      display: flex;
      align-items: center;
      fill: $color-dark-1;

      &--reversed {
        fill: $color-white;
        transform: rotate(180deg);
      }
    }
}
</style>