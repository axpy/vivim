<template>
  <div class="data-entry-automation">
    <PageStart :metaInfo="metaInfo"/>
    <WhatIsDataEntry />
    <DataEntrySolutions />
    <HowDataEntryWork />
    <KindsOfDocuments />
    <DataEntryIndustries />
    <DataEntryInIndustry />
    <DataEntryAppAdvantages />
    <FinalForm />
  </div>
</template>

<script>
import WhatIsDataEntry from '~/components/dataEntry/WhatIsDataEntry'
import DataEntrySolutions from '~/components/dataEntry/DataEntrySolutions'
import HowDataEntryWork from '~/components/dataEntry/HowDataEntryWork'
import KindsOfDocuments from '~/components/dataEntry/KindsOfDocuments'
import DataEntryIndustries from '~/components/dataEntry/DataEntryIndustries'
import DataEntryAppAdvantages from '~/components/dataEntry/DataEntryAppAdvantages'
import DataEntryInIndustry from '~/components/dataEntry/DataEntryInIndustry'
import FinalForm from '~/components/dataEntry/FinalForm'
import PageStart from '~/components/PageStart'

export default {
  head() {
    return {
      title: this.$t('data_entry_automation.meta.meta_title_1'),
      meta: [
        { hid: 'description', name: 'description', content: this.$t('data_entry_automation.meta.meta_description_1') },
        { name: 'keywords', content: this.$t('data_entry_automation.meta.keywords') },
        { property: 'og:keywords', content: this.$t('data_entry_automation.meta.keywords') },
        { property: 'og:description', content: this.$t('data_entry_automation.meta.meta_description_1') },
        { property: 'og:title', content: this.$t('data_entry_automation.meta.meta_title_1') }
      ]
    }
  },
  components: {
    WhatIsDataEntry,
    DataEntrySolutions,
    HowDataEntryWork,
    KindsOfDocuments,
    DataEntryIndustries,
    DataEntryAppAdvantages,
    DataEntryInIndustry,
    FinalForm,
    PageStart
  },
  computed: {
    metaInfo() {
      return {
        headerText: this.$t('data_entry_automation.page_start.header'),
        breadcrumbs: {
          section: 'use-cases',
          sub_section: 'Data Entry Automation'
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>