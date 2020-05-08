<template>
  <TableSection :config="config" />
</template>

<script>
import TableSection from '~/components/TableSection'

export default {
  name: 'ComparisonTable',
  components: {
    TableSection
  },
  data() {
    return {
      config: {
        headerConfig: {
          text: this.$t('mrz_reader.standalone_device_vs_mrz_sdk.header'),
          subHeaderText: this.$t('mrz_reader.standalone_device_vs_mrz_sdk.sub_header'),
          indentation: 'large',
          alignment: 'reverse-left'
        },
        tableData: [
          [
            '',
            this.$t('mrz_reader.standalone_device_vs_mrz_sdk.standalone_device.title'),
            this.$t('mrz_reader.standalone_device_vs_mrz_sdk.mrz_sdk.title')
          ],
          [
            this.$t('mrz_reader.standalone_device_vs_mrz_sdk.standalone_device.price.title'),
            {
              sideIcon: 'IconTwoDollars',
              text: this.$t('mrz_reader.standalone_device_vs_mrz_sdk.standalone_device.price.desription')
            },
            {
              sideIcon: 'IconOneDollar',
              text: this.$t('mrz_reader.standalone_device_vs_mrz_sdk.mrz_sdk.price.desription')
            }
          ],
          [
            this.$t('mrz_reader.standalone_device_vs_mrz_sdk.standalone_device.availability.title'),
            {
              sideIcon: 'IconSquareInSquare',
              text: this.$t('mrz_reader.standalone_device_vs_mrz_sdk.standalone_device.availability.desription'),
              bottomIcon: 'IconDevices'
            },
            {
              sideIcon: 'IconExpand',
              text: this.$t('mrz_reader.standalone_device_vs_mrz_sdk.mrz_sdk.availability.desription'),
              bottomIcon: 'IconDevices'
            }
          ],
          [
            this.$t('mrz_reader.standalone_device_vs_mrz_sdk.standalone_device.integration.title'),
            {
              sideIcon: 'IconSplittedMosaic',
              text: this.$t('mrz_reader.standalone_device_vs_mrz_sdk.standalone_device.integration.desription')
            },
            {
              sideIcon: 'IconConnectedMosaic',
              text: this.$t('mrz_reader.standalone_device_vs_mrz_sdk.mrz_sdk.integration.desription')
            }
          ],
          [
            this.$t('mrz_reader.standalone_device_vs_mrz_sdk.standalone_device.internet_connection.title'),
            {
              sideIcon: 'IconNoInternet',
              text: this.$t('mrz_reader.standalone_device_vs_mrz_sdk.standalone_device.internet_connection.desription')
            },
            {
              sideIcon: 'IconNoInternet',
              text: this.$t('mrz_reader.standalone_device_vs_mrz_sdk.mrz_sdk.internet_connection.desription')
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