<template>
  <section
    class="use-cases"
    id="use-cases"
  >
    <div class="use-cases__container">
      <h2 class="use-cases__title" >
        {{$t('homepage.use_cases.title')}}
      </h2>
      <UseCasesTabs
        class="use-cases__tabs"
        :tabs="tabs"
        :chosenTab="chosenTab"
        :chosenTabInfo="chosenTabInfo"
        :isDesktopSize="isDesktopSize"
        @choseTab="choseTab"
      />
      <UseCasesTabContent
        v-if="chosenTab"
        :chosenTab="chosenTab"
        :chosenTabInfo="chosenTabInfo"
        :isDesktopSize="isDesktopSize"
        class="use-cases__content"
      />
    </div>
  </section>
</template>

<script>
import {useCasesObject} from '~/static/useCasesHelpers'
import UseCasesTabContent from '~/components/usecases/UseCasesTabContent'
import UseCasesTabs from '~/components/usecases/UseCasesTabs'

export default {
  name: 'UseCases',
  components: {
    UseCasesTabContent,
    UseCasesTabs,
  },
  data() {
    return {
      caseObject: useCasesObject,
      chosenTab: '',
      chosenTabIndex: 0,
      chosenTabInfo: {}
    }
  },
  computed: {
    tabs() {
      return Object.keys(this.caseObject)
    },
    isDesktopSize() {
      return this.$store.getters['ui/isDesktopSize']
    }
  },
  methods: {
    choseTab(tab, index) {
      if (this.chosenTab !== tab) {
        this.chosenTab = tab
        this.chosenTabIndex = index
        this.chosenTabInfo = this.caseObject[tab]
      } else if (!this.isDesktopSize) {
        this.chosenTab = ''
        this.chosenTabIndex = 0
        this.chosenTabInfo = {}
      }
    }
  },
  watch: {
    isDesktopSize: {
      handler(val) {
        if (this.isDesktopSize && this.chosenTab === '') {
          this.choseTab('data_entry_automation', 0)
        }
      },
      immediate: true
    }
  }
}
</script>

<style lang="scss" scoped>
.use-cases {
  width: 100%;
  background-color: $color-light-1;
  padding: 16rem 8rem 16.4rem;
  font-size: 1.7rem;
  @include l {
    padding: 10rem 4rem 8rem;
    font-size: 1.5rem;
  }
  @include s {
    padding: 4.8rem 1rem;
  }
  &__container {
    max-width: 140rem;
    margin: 0 auto;
  }
  &__title {
    width: inherit;
    text-align: center;

    @include xs {
      font-family: "NotoSans",sans-serif;
      font-weight: 600;
    }
  }
  &__content {
    display: flex;
    justify-content: space-between;
    @include s {
      display: none;
    }
  }
  &__case-title {
    font-size: 6.4rem;
    line-height: 7.8rem;
    margin-bottom: 2.4rem;
    @include l {
      font-size: 4.8rem;
      line-height: 6rem;
    }
  }
  &__case-description {
    font-size: inherit;
    text-align: left;
    color: $color-grey-1;
  }
  &__solutions {
    display: flex;
    flex-direction: column;
  }
  &__case-icon {
    margin-top: 4rem;
    width: fit-content;
    width: -moz-fit-content;
  }
}

</style>
