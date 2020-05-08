<template>
  <div class="data-entry-in-industry">
    <ImageTextWithTabsSection :config="config"/>
  </div>
</template>

<script>
import ImageTextWithTabsSection from '~/components/ImageTextWithTabsSection'

export default {
  name: 'DataEntryInIndustry',
  components: {
    ImageTextWithTabsSection
  },
  data() {
    return {
      config: {
        headerConfig: {
          text: this.$t('data_entry_automation.data_entry_in_industry.header'),
          subHeaderText: this.$t('data_entry_automation.data_entry_in_industry.sub_header'),
          subHeaderStyle: 'lighten',
          indentation: 'big',
        },
        tabsContent: {
          airlines: {
            tabTitleText: this.$t(`data_entry_automation.data_entry_in_industry.airports.title`),
            content: [
              [
                {
                  type: 'header',
                  value: {
                    text: this.$t('data_entry_automation.data_entry_in_industry.airports.title'),
                    indentation: 'small',
                    alignment: 'left'
                  }
                },
                {
                  type: 'paragraph',
                  value: this.$t('data_entry_automation.data_entry_in_industry.airports.paragraph_1')
                },
                {
                  type: 'paragraph',
                  value: this.$t('data_entry_automation.data_entry_in_industry.airports.paragraph_2')
                },
                {
                  type: 'paragraph',
                  value: this.$t('data_entry_automation.data_entry_in_industry.airports.paragraph_3')
                },
                {
                  type: 'paragraph',
                  value: this.$t('data_entry_automation.data_entry_in_industry.airports.paragraph_4')
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
          banking: {
            tabTitleText: this.$t(`data_entry_automation.data_entry_in_industry.banking.title`),
            content: [
              [
                {
                  type: 'header',
                  value: {
                    text: this.$t('data_entry_automation.data_entry_in_industry.banking.title'),
                    indentation: 'small',
                    alignment: 'left'
                  }
                },
                {
                  type: 'paragraph',
                  value: this.$t('data_entry_automation.data_entry_in_industry.banking.paragraph_1')
                },
                {
                  type: 'paragraph',
                  value: this.$t('data_entry_automation.data_entry_in_industry.banking.paragraph_2')
                },
                {
                  type: 'paragraph',
                  value: this.$t('data_entry_automation.data_entry_in_industry.banking.paragraph_3')
                },
                {
                  type: 'paragraph',
                  value: [
                    {
                      type: 'text',
                      text: this.$t('data_entry_automation.data_entry_in_industry.banking.paragraph_4.text_1')
                    },
                    {
                      type: 'link',
                      text: this.$t('data_entry_automation.data_entry_in_industry.banking.paragraph_4.link'),
                      to: 'https://thefinancialbrand.com/66228/bank-credit-union-branch-traffic/'
                    },
                    {
                      type: 'text',
                      text: this.$t('data_entry_automation.data_entry_in_industry.banking.paragraph_4.text_2')
                    }
                  ]
                },
                {
                  type: 'paragraph',
                  value: this.$t('data_entry_automation.data_entry_in_industry.banking.paragraph_5')
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
          },
          telecom: {
            tabTitleText: this.$t(`data_entry_automation.data_entry_in_industry.telecom.title`),
            content: [
              [
                {
                  type: 'header',
                  value: {
                    text: this.$t('data_entry_automation.data_entry_in_industry.telecom.title'),
                    indentation: 'small',
                    alignment: 'left'
                  }
                },
                {
                  type: 'paragraph',
                  value: this.$t('data_entry_automation.data_entry_in_industry.telecom.paragraph_1')
                },
                {
                  type: 'paragraph',
                  value: this.$t('data_entry_automation.data_entry_in_industry.telecom.paragraph_2')
                },
                {
                  type: 'paragraph',
                  value:[
                    {
                      type: 'text',
                      text: this.$t('data_entry_automation.data_entry_in_industry.telecom.paragraph_3.text_1')
                    },
                    {
                      type: 'link',
                      text: this.$t('data_entry_automation.data_entry_in_industry.telecom.paragraph_3.link'),
                      to: 'https://www2.deloitte.com/content/dam/Deloitte/lu/Documents/technology/lu-digital-onboarding-financial-services-digital-natives-112017.pdf'
                    },
                    {
                      type: 'text',
                      text: this.$t('data_entry_automation.data_entry_in_industry.telecom.paragraph_3.text_2')
                    }
                  ]
                },
                {
                  type: 'paragraph',
                  value: this.$t('data_entry_automation.data_entry_in_industry.telecom.paragraph_4')
                }
              ],
              [
                {
                  type: 'picture',
                  value: {
                    image: 'man-in-white.jpg',
                    aAlt: 'Telecom',
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