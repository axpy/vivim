<template>
  <div class="base-list">
    <div
      v-if="header"
      :class="headerClass"
    >
      {{ header }}
    </div>
    <BaseItem
      v-for="(config, index) in itemsConfig"
      :key="index"
      :config="config"
    />
  </div>
</template>

<script>
/*
  Config props:

  header - OPTIONAL
  listHeaderSize - OPTIONAL
  listItems - REQUIRED
  iconConfig - OPTIONAL (only for IconNumber)
  startNumber - 1 [what ever you want, only for IconNumber]
  itemIndentation - small [medium, big, large]
  itemTitleSize - defailt [large]
  isItemHeaderUnitedWithDescription - OPTIONAL
  itemLayout - default [vertical]
  itemIconSize - small [medium, large, big]

*/
import BaseItem from '~/components/ui/BaseItem'

export default {
  name: 'BaseList',
  components: {
    BaseItem
  },
  props: {
    config: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      header: '',
      listHeaderSize: 'default',
      iconConfig: {},
      startNumber: 1,
      itemIndentation: 'small',
      itemTitleSize: 'default',
      isItemHeaderUnitedWithDescription: false,
      itemLayout: 'default',
      itemIconSize: 'small',
      ...this.config
    }
  },
  computed: {
    itemsConfig() {
      let number = this.startNumber
      return this.config.listItems.map((item, index) => {
        item = {
          ...item,
          ...{iconConfig: {number: number, iconSize: this.itemIconSize, ...this.iconConfig, }},
          ...{itemIndentation: this.itemIndentation},
          ...{itemTitleSize: this.itemTitleSize},
          ...{isItemHeaderUnitedWithDescription: this.isItemHeaderUnitedWithDescription},
          ...{itemLayout: this.itemLayout},
          ...{itemIconSize: this.itemIconSize}
        }
        number += 1
        return item
      })
    },
    headerClass() {
      return ['base-list__title', `base-list__title--${this.listHeaderSize}`]
    }
  }
}
</script>

<style lang="scss" scoped>
.base-list{
  height: 100%;
  &:not(:last-child) {
    margin-bottom: 2.4rem;

    @include xs {
      margin-bottom: 1.6rem;
    }
  }
  &__title {
    margin-bottom: 2.4rem;
    max-width: 66rem;

    &--default {
      font-family: 'Montserrat';
      font-weight: bold;
      font-size: 2.4rem;
      line-height: 3rem;
  
      @include l {
        font-size: 1.8rem;
        line-height: 2.6rem;
      }
      @include s {
        font-size: 1.6rem;
        line-height: 1.9rem;
      }
    }

    &--small {
      text-align: left;
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

  }
}
</style>