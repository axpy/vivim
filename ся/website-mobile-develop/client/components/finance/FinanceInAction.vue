<template>
  <div class="finance-in-action">
    <ImageTextWithTabsSection :config="config"/>
  </div>
</template>

<script>
import ImageTextWithTabsSection from '~/components/ImageTextWithTabsSection'

export default {
  name: 'FinanceInAction',
  components: {
    ImageTextWithTabsSection
  },
  data() {
    return {
      config: {
        headerConfig: {
          text: this.$t('finance.fpa_in_action.header'),
          subHeaderText: this.$t('finance.fpa_in_action.sub_header'),
          subHeaderStyle: 'lighten',
          indentation: 'big',
        },
        tabsContent: {
          banking: {
            tabTitleText: this.$t(`finance.fpa_in_action.banking.title`),
            content: [
              [
                {
                  type: 'header',
                  value: {
                    text: this.$t('finance.fpa_in_action.banking.title'),
                    indentation: 'small',
                    alignment: 'left'
                  }
                },
                {
                  type: 'paragraph',
                  value: [
                    {
                      type: 'text',
                      text: this.$t('finance.fpa_in_action.banking.paragraph_1.part_1')
                    },
                    {
                      type: 'link',
                      text: this.$t('finance.fpa_in_action.banking.paragraph_1.link'),
                      to: 'https://thefinancialbrand.com/66228/bank-credit-union-branch-traffic/'
                    },
                    {
                      type: 'text',
                      text: this.$t('finance.fpa_in_action.banking.paragraph_1.part_2')
                    },
                  ]
                },
                {
                  type: 'paragraph',
                  value: this.$t('finance.fpa_in_action.banking.paragraph_2')
                },
                {
                  type: 'paragraph',
                  value: this.$t('finance.fpa_in_action.banking.paragraph_3')
                },
                {
                  type: 'paragraph',
                  value: this.$t('finance.fpa_in_action.banking.paragraph_4')
                }
              ],
              [
                {
                  type: 'picture',
                  value: {
                    image: 'banking.jpg',
                    alt: 'Banking',
                    pictureType: 'rounded'
                  }
                }
              ]
            ]
          },
          fintech: {
            tabTitleText: this.$t(`finance.fpa_in_action.fintech.title`),
            content: [
              [
                {
                  type: 'header',
                  value: {
                    text: this.$t('finance.fpa_in_action.fintech.title'),
                    indentation: 'small',
                    alignment: 'left'
                  }
                },
                {
                  type: 'paragraph',
                  value: this.$t('finance.fpa_in_action.fintech.paragraph_1')
                },
                {
                  type: 'paragraph',
                  value: this.$t('finance.fpa_in_action.fintech.paragraph_2')
                },
                {
                  type: 'paragraph',
                  value: this.$t('finance.fpa_in_action.fintech.paragraph_3')
                },
                {
                  type: 'paragraph',
                  value: this.$t('finance.fpa_in_action.fintech.paragraph_4')
                },
              ],
              [
                {
                  type: 'picture',
                  value: {
                    image: 'banking.jpg',
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