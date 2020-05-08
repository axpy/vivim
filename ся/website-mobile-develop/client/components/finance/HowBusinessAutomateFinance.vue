<template>
  <div class="how-business-automate-finance">
    <ArticleSection :config="config"/>
  </div>
</template>

<script>
import ArticleSection from '~/components/ArticleSection'

export default {
  name: 'HowBusinessAutomateFinance',
  components: {
    ArticleSection
  },
  data() {
    return {
      config: {
        headerConfig: {
          text: this.$t('finance.financial_processes_automation.header'),
          subHeaderText: this.$t('finance.financial_processes_automation.sub_header'),
          indentation: 'large',
        },
        content: [
          [
            {
              type: 'titleIcon',
              value: {
                iconSize: 'big',
                iconBGColor: 'light',
                titleSize: 'large',
                title: this.$t('finance.financial_processes_automation.speed_onboarding.title'),
                icon: 'IconSpeedUp'
              }
            },
            {
              type: 'paragraph',
              value: [
                {
                  type: 'text',
                  text: this.$t('finance.financial_processes_automation.speed_onboarding.paragraph_1.part_1')
                },
                {
                  type: 'link',
                  text: this.$t('finance.financial_processes_automation.speed_onboarding.paragraph_1.link'),
                  to: 'https://www2.deloitte.com/content/dam/Deloitte/lu/Documents/technology/lu-digital-onboarding-financial-services-digital-natives-112017.pdf'
                },
                {
                  type: 'text',
                  text: this.$t('finance.financial_processes_automation.speed_onboarding.paragraph_1.part_2')
                },
              ]
            },
            {
              type: 'paragraph',
              value: this.$t('finance.financial_processes_automation.speed_onboarding.paragraph_2')
            },
            {
              type: 'paragraph',
              value: this.$t('finance.financial_processes_automation.speed_onboarding.paragraph_3')
            },
            {
              type: 'paragraph',
              value: this.$t('finance.financial_processes_automation.speed_onboarding.paragraph_4')
            },
          ],
          [
            {
              type: 'titleIcon',
              value: {
                iconSize: 'big',
                iconBGColor: 'light',
                titleSize: 'large',
                title: this.$t('finance.financial_processes_automation.optimise_processes.title'),
                icon: 'IconOptimiseProcess'
              }
            },
            {
              type: 'paragraph',
              value: this.$t('finance.financial_processes_automation.optimise_processes.paragraph_1')
            },
            {
              type: 'paragraph',
              value: this.$t('finance.financial_processes_automation.optimise_processes.paragraph_2')
            },
            {
              type: 'paragraph',
              value: this.$t('finance.financial_processes_automation.optimise_processes.paragraph_3')
            },
            {
              type: 'paragraph',
              value: this.$t('finance.financial_processes_automation.optimise_processes.paragraph_4')
            },
          ],
          [
            {
              type: 'titleIcon',
              value: {
                iconSize: 'big',
                iconBGColor: 'light',
                titleSize: 'large',
                title: this.$t('finance.financial_processes_automation.treat_right.title'),
                icon: 'IconTreatCustomers'
              }
            },
            {
              type: 'paragraph',
              value: [
                {
                  type: 'text',
                  text: this.$t('finance.financial_processes_automation.treat_right.paragraph_1.part_1')
                },
                {
                  type: 'BaseLink',
                  text: this.$t('finance.financial_processes_automation.treat_right.paragraph_1.link'),
                  to: '/#reviews'
                },
                {
                  type: 'text',
                  text: this.$t('finance.financial_processes_automation.treat_right.paragraph_1.part_2')
                },
              ]
            },
            {
              type: 'paragraph',
              value: this.$t('finance.financial_processes_automation.treat_right.paragraph_2')
            },
            {
              type: 'paragraph',
              value: this.$t('finance.financial_processes_automation.treat_right.paragraph_3')
            },
            {
              type: 'paragraph',
              value: [
                {
                  type: 'text',
                  text: this.$t('finance.financial_processes_automation.treat_right.paragraph_4.text')
                },
                {
                  type: 'link',
                  text: this.$t('finance.financial_processes_automation.treat_right.paragraph_4.link'),
                  to: 'https://hbswk.hbs.edu/archive/the-economics-of-e-loyalty'
                },
              ]
            },
          ],
        ]
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>