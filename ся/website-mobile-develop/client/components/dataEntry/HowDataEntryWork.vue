<template>
  <ArticleSection :config="config"/>
</template>

<script>
import ArticleSection from '~/components/ArticleSection'

export default {
  name: 'HowDataEntryWork',
  components: {
    ArticleSection
  },
  data() {
    return {
      config: {
        columnsLayout: 'small',
        headerConfig: {
          text: this.$t('data_entry_automation.how_dea_works.header'),
          subHeaderText: this.$t('data_entry_automation.how_dea_works.sub_header'),
          subHeaderStyle: 'lighten',
          indentation: 'large',
        },
        content: [
          [
            {
              type: 'titleIcon',
              value: {
                iconBGColor: 'dark',
                iconSize: 'large',
                icon: 'IconNumber',
                description: this.$t('data_entry_automation.how_dea_works.item_1')
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
                icon: 'IconNumber',
                description: this.$t('data_entry_automation.how_dea_works.item_2')
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
                icon: 'IconNumber',
                description: this.$t('data_entry_automation.how_dea_works.item_3')
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