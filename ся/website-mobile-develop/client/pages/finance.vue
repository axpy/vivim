<template>
  <div class="finance">
    <PageStart :metaInfo="metaInfo"/>
    <WhatIsFinancialProcessAutomation />
    <SolutionsCards />
    <HowFinanceWork />
    <HowBusinessAutomateFinance />
    <FinanceUseCases />
    <FinanceInAction />
    <FinanceWithSDK />
    <RegulaTip />
    <FinalForm />
  </div>
</template>

<script>
import WhatIsFinancialProcessAutomation from '~/components/finance/WhatIsFinancialProcessAutomation'
import SolutionsCards from '~/components/finance/SolutionsCards'
import FinanceUseCases from '~/components/finance/FinanceUseCases'
import HowFinanceWork from '~/components/finance/HowFinanceWork'
import HowBusinessAutomateFinance from '~/components/finance/HowBusinessAutomateFinance'
import FinanceWithSDK from '~/components/finance/FinanceWithSDK'
import RegulaTip from '~/components/RegulaTip'
import FinanceInAction from '~/components/finance/FinanceInAction'
import FinalForm from '~/components/finance/FinalForm'
import PageStart from '~/components/PageStart'

export default {
  head() {
    return {
      title: this.$t('finance.meta.meta_title_1'),
      meta: [
        { hid: 'description', name: 'description', content: this.$t('finance.meta.meta_description_1') },
        { property: 'og:description', content: this.$t('finance.meta.meta_description_1') },
        { property: 'og:title', content: this.$t('finance.meta.meta_title_1') }
      ]
    }
  },
  components: {
    WhatIsFinancialProcessAutomation,
    SolutionsCards,
    FinanceUseCases,
    HowFinanceWork,
    HowBusinessAutomateFinance,
    FinanceWithSDK,
    RegulaTip,
    FinanceInAction,
    FinalForm,
    PageStart
  },
  computed: {
    metaInfo() {
      return {
        headerText: this.$t('finance.page_start.header'),
        breadcrumbs: {
          section: 'industries',
          sub_section: 'Finance'
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>