<template>
  <div
    :class="['base-tab', chosenTab === tab ? 'base-tab--active' : 'base-tab--default']"
    @click="choseTab"
  >
    {{ tabTitleText }}
  </div>
</template>

<script>
/*
  Config props:

  tab - REQUIRED
  tabTitleText - REQUIRED

*/
export default {
  name: 'BaseTab',
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
.base-tab {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 1.6rem;
    width: 100%;
    height: 6.4rem;
    user-select: none;
    background-color: $color-white;
    transition: background-color $transition-time-short;
    cursor: pointer;

    &--default {
      &:not(:last-child) {
        border-right: $border-thin;
      }
    }
    &--active {
      background-color: $color-primary;
      color: $color-white;
      font-weight: bold;
    }
}
</style>