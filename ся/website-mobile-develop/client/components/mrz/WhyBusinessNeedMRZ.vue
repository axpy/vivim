<template>
  <ArticleSection :config="config"/>
</template>

<script>
import ArticleSection from '~/components/ArticleSection'

export default {
  name: 'WhyBusinessNeedMRZ',
  components: {
    ArticleSection
  },
  data() {
    return {
      config: {
        sectionLayout: 'left',
        columnsLayout: 'wide',
        headerConfig: {
          text: this.$t('mrz_reader.business_need_mrz.header'),
          indentation: 'x-medium',
          alignment: 'left',
          width: 'narrow'
        },
        content: [
          [
            {
              type: 'note',
              value: {
                text: this.$t('mrz_reader.business_need_mrz.paragraph'),
                isTextColored: true
              }
            }
          ],
          [
            {
              type: 'titleIcon',
              value: {
                layout: 'left',
                iconBGColor: 'light',
                isDescriptionColored: true,
                titleSize: 'big',
                iconSize: 'extra-big',
                title: this.$t('mrz_reader.business_need_mrz.list.reduce_customer_wait-time.title'),
                icon: 'IconOptimiseProcess',
                description: this.$t('mrz_reader.business_need_mrz.list.reduce_customer_wait-time.description')
              }
            }
          ],
          [
            {
              type: 'titleIcon',
              value: {
                layout: 'left',
                iconBGColor: 'light',
                isDescriptionColored: true,
                titleSize: 'big',
                iconSize: 'extra-big',
                title: this.$t('mrz_reader.business_need_mrz.list.improve_data_accuracy.title'),
                icon: 'IconSpeedUp',
                description: this.$t('mrz_reader.business_need_mrz.list.improve_data_accuracy.description')
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