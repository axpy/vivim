<template>
  <div class="mrz-reader">
    <PageStart :metaInfo="metaInfo"/>
    <WhatIsMRZReader />
    <DocumentsMRZCanRead />
    <WhyBusinessNeedMRZ />
    <ComparisonTable />
    <HowMRZUsed />
    <WhyChooseMRZ />
    <HowToUseMRZ />
    <IndustriesWhereMRZApplicable />
    <MRZinIndustry />
    <FinalForm />
  </div>
</template>

<script>
import WhatIsMRZReader from '~/components/mrz/WhatIsMRZReader'
import WhyBusinessNeedMRZ from '~/components/mrz/WhyBusinessNeedMRZ'
import HowMRZUsed from '~/components/mrz/HowMRZUsed'
import WhyChooseMRZ from '~/components/mrz/WhyChooseMRZ'
import HowToUseMRZ from '~/components/mrz/HowToUseMRZ'
import IndustriesWhereMRZApplicable from '~/components/mrz/IndustriesWhereMRZApplicable'
import ComparisonTable from '~/components/mrz/ComparisonTable'
import DocumentsMRZCanRead from '~/components/mrz/DocumentsMRZCanRead'
import MRZinIndustry from '~/components/mrz/MRZinIndustry'
import FinalForm from '~/components/mrz/FinalForm'
import PageStart from '~/components/PageStart'

export default {
  head() {
    return {
      title: this.$t('mrz_reader.meta.meta_title_1'),
      meta: [
        { hid: 'description', name: 'description', content: this.$t('mrz_reader.meta.meta_description_1') },
        { property: 'og:description', content: this.$t('mrz_reader.meta.meta_description_1') },
        { property: 'og:title', content: this.$t('mrz_reader.meta.meta_title_1') }
      ]
    }
  },
  components: {
    WhatIsMRZReader,
    WhyBusinessNeedMRZ,
    HowMRZUsed,
    WhyChooseMRZ,
    HowToUseMRZ,
    IndustriesWhereMRZApplicable,
    ComparisonTable,
    DocumentsMRZCanRead,
    MRZinIndustry,
    FinalForm,
    PageStart
  },
  computed: {
    metaInfo() {
      return {
        headerText: this.$t('mrz_reader.page_start.header'),
        breadcrumbs: {
          section: 'solutions',
          sub_section: 'MRZ reader'
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>