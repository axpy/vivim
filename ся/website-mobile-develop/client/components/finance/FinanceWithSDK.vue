<template>
  <div class="finance-with-SDK">
    <ArticleSection :config="config"/>
  </div>
</template>

<script>
import ArticleSection from '~/components/ArticleSection'

export default {
  name: 'FinanceWithSDK',
  components: {
    ArticleSection
  },
  data() {
    return {
      config: {
        columnsLayout: 'small',
        headerConfig: {
          text: this.$t('finance.fpa_with_sdk.header'),
          subHeaderText: this.$t('finance.fpa_with_sdk.sub_header'),
          indentation: 'large',
        },
        content: [
          [
            {
              type: 'titleIcon',
              value: {
                iconBGColor: 'dark',
                iconSize: 'large',
                title: this.$t('finance.fpa_with_sdk.get_sdk.title'),
                icon: 'IconNumber',
                description: this.$t('finance.fpa_with_sdk.get_sdk.text')
              }
            }
          ],
          [
            {
              type: 'titleIcon',
              value: {
                number: 2,
                iconBGColor: 'dark',
                iconSize: 'large',
                title: this.$t('finance.fpa_with_sdk.use_your_solution.title'),
                icon: 'IconNumber',
                description: this.$t('finance.fpa_with_sdk.use_your_solution.text')
              }
            }
          ],
          [
            {
              type: 'titleIcon',
              value: {
                number: 3,
                iconBGColor: 'dark',
                iconSize: 'large',
                title: this.$t('finance.fpa_with_sdk.store_and_use_data.title'),
                icon: 'IconNumber',
                description: this.$t('finance.fpa_with_sdk.store_and_use_data.text')
              }
            }
          ]
        ]
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>