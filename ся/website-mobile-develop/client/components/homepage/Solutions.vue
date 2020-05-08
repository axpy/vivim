<template>
  <section
    class="solutions"
    id="solutions"
  >
    <h2 class="solutions__title">
      {{$t('homepage.solutions.title')}}
    </h2>
    <div class="solutions__container">
      <SolutionsInfo 
        :solutionObject="solutionsObject['reading_and_verification']"
        :type="'reading_and_verification'"
      />
      <SolutionsInfo 
        :solutionObject="solutionsObject['authentication']"
        :type="'authentication'"
      />
    </div>
  </section>
</template>

<script>
import SolutionsInfo from '~/components/solutions/SolutionsInfo'
import {solutionsObject} from '~/static/solutionsHelpers'

export default {
  name: "Solitions",
  components: {
    SolutionsInfo
  },
  data() {
    return {
      solutionsObject: solutionsObject
    }
  }
}
</script>

<style lang="scss" scoped>
.solutions {
  width: 100%;
  font-size: 1.7rem;
  &__container {
    padding-left: 11rem;
    @include l {
      padding-left: 4.8rem;
    }
    @include s {
      padding-left: 0rem;
    }
  }
  &__title {
    width: inherit;
    text-align: center;
    padding-top: 16rem;

    @include s {
      padding-top: 4.8rem;
    }
  }
}
</style>