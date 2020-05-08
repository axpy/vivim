<template>
  <div class="base-tabs">
    <BaseTab
      v-for="tab in tabs"
      :key="tab.tab"
      :config="tab"
      :chosenTab="chosenTab"
      @choseTab="choseTab"
    />
  </div>
</template>

<script>
/*
  props:

  chosenTab - REQUIRED
  tabs - REQUIRED

*/
import BaseTab from '~/components/ui/BaseTab'

export default {
  name: 'BaseTabs',
  components: {
    BaseTab
  },
  props: {
    chosenTab: {
      type: String,
      required: true
    },
    tabs: {
      type: Array,
      required: true
    }
  },
  methods: {
    choseTab(tab) {
      this.$emit('choseTab', tab)
    }
  }
}
</script>

<style lang="scss" scoped>
.base-tabs {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  box-shadow: $box-shadow-primary;
  margin-bottom: 7.8rem;
  max-width: 138.5rem;
  width: 100%;

  @include l {
    margin-bottom: 7.3rem;
  }

  @include s {
    box-shadow: none;
    flex-direction: column;
    margin: 0;
    padding: 0 1rem;
  }
}
</style>