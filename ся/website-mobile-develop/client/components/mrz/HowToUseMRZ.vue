<template>
  <ArticleSection :config="config"/>
</template>

<script>
import ArticleSection from '~/components/ArticleSection'

export default {
  name: 'HowToUseMRZ',
  components: {
    ArticleSection
  },
  data() {
    return {
      config: {
        columnsLayout: 'small',
        headerConfig: {
          text: this.$t('mrz_reader.how_use_mrz.header'),
          subHeaderText: this.$t('mrz_reader.how_use_mrz.sub_header'),
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
                title: this.$t('mrz_reader.how_use_mrz.download_the_app.title'),
                icon: 'IconNumber',
                description: this.$t('mrz_reader.how_use_mrz.download_the_app.description')
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
                title: this.$t('mrz_reader.how_use_mrz.take_a_photo.title'),
                icon: 'IconNumber',
                description: this.$t('mrz_reader.how_use_mrz.take_a_photo.description')
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
                title: this.$t('mrz_reader.how_use_mrz.mrz_information.title'),
                icon: 'IconNumber',
                description: this.$t('mrz_reader.how_use_mrz.mrz_information.description')
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