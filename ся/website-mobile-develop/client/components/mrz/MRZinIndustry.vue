<template>
  <div class="mrz-in-industry">
    <ImageTextWithTabsSection :config="config"/>
  </div>
</template>

<script>
import ImageTextWithTabsSection from '~/components/ImageTextWithTabsSection'

export default {
  name: 'MRZinIndustry',
  components: {
    ImageTextWithTabsSection
  },
  data() {
    return {
      config: {
        headerConfig: {
          text: this.$t('mrz_reader.mrz_for_industry.header'),
          indentation: 'big',
        },
        tabsContent: {
          airport_security: {
            tabTitleText: this.$t(`mrz_reader.mrz_for_industry.airport_security.title`),
            content: [
              [
                {
                  type: 'header',
                  value: {
                    text: this.$t('mrz_reader.mrz_for_industry.airport_security.title'),
                    indentation: 'small',
                    alignment: 'left'
                  }
                },
                {
                  type: 'list',
                  value: {
                    header: this.$t('mrz_reader.mrz_for_industry.airport_security.list_title'),
                    listHeaderSize: 'small',
                    isItemHeaderUnitedWithDescription: true,
                    listItems: [
                      {
                        title: this.$t('mrz_reader.mrz_for_industry.airport_security.cut_queues.title'),
                        description: this.$t('mrz_reader.mrz_for_industry.airport_security.cut_queues.description')
                      },
                      {
                        title: this.$t('mrz_reader.mrz_for_industry.airport_security.increasing_passenge_flow.title'),
                        description: this.$t('mrz_reader.mrz_for_industry.airport_security.increasing_passenge_flow.description')
                      },
                      {
                        title: this.$t('mrz_reader.mrz_for_industry.airport_security.minimize_human_error.title'),
                        description: this.$t('mrz_reader.mrz_for_industry.airport_security.minimize_human_error.description')
                      },
                      {
                        title: this.$t('mrz_reader.mrz_for_industry.airport_security.encourage_passenger_autonomy.title'),
                        description: this.$t('mrz_reader.mrz_for_industry.airport_security.encourage_passenger_autonomy.description')
                      }
                    ]
                  }
                },
                {
                  type: 'footnote',
                  value: [
                    {
                      type: 'text',
                      text: this.$t('mrz_reader.mrz_for_industry.footnote.text')
                    },
                    {
                      type: 'BaseLink',
                      text: this.$t('mrz_reader.mrz_for_industry.footnote.link'),
                      to: '/#solutions'
                    }
                  ]
                }
              ],
              [
                {
                  type: 'picture',
                  value: {
                    image: 'airport.jpg',
                    alt: 'Airport',
                    pictureType: 'rounded'
                  }
                }
              ]
            ]
          },
          banking_sector: {
            tabTitleText: this.$t(`mrz_reader.mrz_for_industry.banking_sector.title`),
            content: [
              [
                {
                  type: 'header',
                  value: {
                    text: this.$t('mrz_reader.mrz_for_industry.banking_sector.title'),
                    indentation: 'small',
                    alignment: 'left'
                  }
                },
                {
                  type: 'list',
                  value: {
                    header: this.$t('mrz_reader.mrz_for_industry.banking_sector.list_title'),
                    listHeaderSize: 'small',
                    isItemHeaderUnitedWithDescription: true,
                    listItems: [
                      {
                        title: this.$t('mrz_reader.mrz_for_industry.banking_sector.accelerate_validation_process.title'),
                        description: this.$t('mrz_reader.mrz_for_industry.banking_sector.accelerate_validation_process.description')
                      },
                      {
                        title: this.$t('mrz_reader.mrz_for_industry.banking_sector.prevent_data_leaking.title'),
                        description: this.$t('mrz_reader.mrz_for_industry.banking_sector.prevent_data_leaking.description')
                      }
                    ]
                  }
                },
                {
                  type: 'footnote',
                  value: [
                    {
                      type: 'text',
                      text: this.$t('mrz_reader.mrz_for_industry.footnote.text')
                    },
                    {
                      type: 'BaseLink',
                      text: this.$t('mrz_reader.mrz_for_industry.footnote.link'),
                      to: '/#solutions'
                    }
                  ]
                }
              ],
              [
                {
                  type: 'picture',
                  value: {
                    image: 'table.jpg',
                    alt: 'Banking',
                    pictureType: 'rounded'
                  }
                }
              ]
            ]
          }
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>