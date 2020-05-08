<template>
  <CardList :config="config" />
</template>

<script>
import CardList from '~/components/CardList'

export default {
  name: 'DataEntrySolutions',
  components: {
    CardList
  },
  data() {
    return {
      config: {
        cardListBgPicture: 'oval',
        headerConfig: {
          text: this.$t('data_entry_automation.dea_solutions.header'),
          indentation: 'large',
        },
        cardList: [
          {
            icon: 'IconMRZReading',
            title: this.$t('homepage.solutions.mrz_reading.title')
          },
          {
            icon: 'IconBarcodeReading',
            title: this.$t('homepage.solutions.barcode_reading.title')
          },
          {
            icon: 'IconCreaditCardsReading',
            title: this.$t('homepage.solutions.credit_cards_reading.title_2')
          },
          {
            icon: 'IconElectronicDocumentAuthentication',
            title: this.$t('homepage.solutions.electronic_document_authentication.title_2')
          },
          {
            icon: 'IconOCR',
            title: this.$t('homepage.solutions.ocr.title_2')
          },
        ]
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>