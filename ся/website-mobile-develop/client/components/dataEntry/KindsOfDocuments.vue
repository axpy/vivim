<template>
  <div class="kinds-of-documents">
    <ArticleSection
      v-for="(sectionConfig, index) in config"
      :key="index"
      :config="sectionConfig"
    />
  </div>
</template>

<script>
import ArticleSection from '~/components/ArticleSection'

export default {
  name: 'KindsOfDocuments',
  components: {
    ArticleSection
  },
  data() {
    return {
      config: [
        {
          columnsIndentation: 'small',
          sectionLayout: 'left',
          columnsLayout: 'wide',
          headerConfig: {
            text: this.$t('data_entry_automation.documents_kinds.header'),
            indentation: 'x-medium',
            alignment: 'left'
          },
          content: [
            [
              {
                type: 'note',
                value: {
                  text: this.$t('data_entry_automation.documents_kinds.sub_header')
                }
              }
            ],
            [
              {
                type: 'titleIcon',
                value: {
                  layout: 'left',
                  isDescriptionColored: true,
                  titleSize: 'big',
                  iconSize: 'extra-big',
                  title: this.$t('data_entry_automation.documents_kinds.insurance_documents.title'),
                  icon: 'IconInsuranceDocuments',
                  description: this.$t('data_entry_automation.documents_kinds.insurance_documents.description')
                }
              }
            ],
            [
              {
                type: 'titleIcon',
                value: {
                  layout: 'left',
                  isDescriptionColored: true,
                  titleSize: 'big',
                  iconSize: 'extra-big',
                  title: this.$t('data_entry_automation.documents_kinds.bank_applications.title'),
                  icon: 'IconBank',
                  description: this.$t('data_entry_automation.documents_kinds.bank_applications.description')
                }
              }
            ]
          ]
        },
        {
          columnsIndentation: 'small',
          columnsLayout: 'wide',
          content: [
            [
              {
                type: 'titleIcon',
                value: {
                  layout: 'left',
                  isDescriptionColored: true,
                  titleSize: 'big',
                  iconSize: 'extra-big',
                  title: this.$t('data_entry_automation.documents_kinds.identity_documents.title'),
                  icon: 'IconIdentity',
                  description: this.$t('data_entry_automation.documents_kinds.identity_documents.description')
                }
              }
            ],
            [
              {
                type: 'titleIcon',
                value: {
                  layout: 'left',
                  isDescriptionColored: true,
                  titleSize: 'big',
                  iconSize: 'extra-big',
                  title: this.$t('data_entry_automation.documents_kinds.barcodes.title'),
                  icon: 'IconBarcode',
                  description: this.$t('data_entry_automation.documents_kinds.barcodes.description')
                }
              }
            ],
            [
              {
                type: 'titleIcon',
                value: {
                  layout: 'left',
                  isDescriptionColored: true,
                  titleSize: 'big',
                  iconSize: 'extra-big',
                  title: this.$t('data_entry_automation.documents_kinds.hotel_and_travel.title'),
                  icon: 'IconHotel',
                  description: this.$t('data_entry_automation.documents_kinds.hotel_and_travel.description')
                }
              }
            ]
          ]
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
</style>