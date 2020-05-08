<template>
  <TwoCardSection :config="config" />
</template>

<script>
import TwoCardSection from '~/components/TwoCardSection'

export default {
  name: 'DocumentsMRZCanRead',
  components: {
    TwoCardSection
  },
  data() {
    return {
      config: {
        headerConfig: {
          text: this.$t('mrz_reader.documents_kinds.header'),
          indentation: 'large',
        },
        cardList: [
          {
            title: this.$t('mrz_reader.documents_kinds.documents_types.title'),
            text_1: this.$t('mrz_reader.documents_kinds.documents_types.text_1'),
            text_2: this.$t('mrz_reader.documents_kinds.documents_types.text_2'),
            list: [
              this.$t('mrz_reader.documents_kinds.documents_types.passports.text'),
              this.$t('mrz_reader.documents_kinds.documents_types.visas.text'),
              this.$t('mrz_reader.documents_kinds.documents_types.identity_documents.text')
            ]
          },
          {
            title: this.$t('mrz_reader.documents_kinds.data_types.title'),
            icon: 'IconIndustriesType',
            text_1: this.$t('mrz_reader.documents_kinds.data_types.text_1'),
            text_2: this.$t('mrz_reader.documents_kinds.data_types.text_2'),
            list: [
              this.$t('mrz_reader.documents_kinds.data_types.surname.text'),
              this.$t('mrz_reader.documents_kinds.data_types.name.text'),
              this.$t('mrz_reader.documents_kinds.data_types.birth_date.text'),
              this.$t('mrz_reader.documents_kinds.data_types.citizenship.text'),
              this.$t('mrz_reader.documents_kinds.data_types.sex.text'),
              this.$t('mrz_reader.documents_kinds.data_types.passport_number.text'),
              this.$t('mrz_reader.documents_kinds.data_types.by_whom_issued.text'),
              this.$t('mrz_reader.documents_kinds.data_types.country.text'),
              this.$t('mrz_reader.documents_kinds.data_types.document_type.text'),
              this.$t('mrz_reader.documents_kinds.data_types.other_data.text')
            ]
          }
        ]
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>