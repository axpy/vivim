<template>
  <div class="solution-block-wrapper">
    <SolutionsBlock
      v-for="(type, index) in typeList"
      :key="index"
      :type="type"
      :chosenTabInfo="chosenTabInfo"
      :isDesktopSize="isDesktopSize"
      class="solution-block-wrapper__block"
    />
  </div>
</template>

<script>
import SolutionsBlock from '~/components/usecases/SolutionsBlock'

export default {
  name: 'SolutionBlockWrapper',
  components: {
    SolutionsBlock
  },
  props: {
    chosenTabInfo: Object,
    isDesktopSize: Boolean
  },
  data() {
    return {
      typeList: ['solutions', 'industries']
    }
  }
}
</script>

<style lang="scss" scoped>
.solution-block-wrapper {
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  &__block {
    width: 100%;
    &:not(:last-child) {
      margin-bottom: 3rem;
      @include s {
        margin: 1rem 0;;
      }
    }
    &:last-child {
      @include s {
        margin-bottom: 1.5rem;
      }
    }
  }
}
</style>