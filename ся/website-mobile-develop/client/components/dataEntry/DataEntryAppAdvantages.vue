<template>
  <ArticleSection :config="config"/>
</template>

<script>
import ArticleSection from '~/components/ArticleSection'

export default {
  name: 'DataEntryAppAdvantages',
  components: {
    ArticleSection
  },
  data() {
    return {
      config: {
        headerConfig: {
          text: this.$t('data_entry_automation.apps_advantages.header'),
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
                title: this.$t('data_entry_automation.apps_advantages.productivity.title'),
                icon: 'IconProductivity'
              }
            },
            {            
              type: 'paragraph',
              value: this.$t('data_entry_automation.apps_advantages.productivity.paragraph_1')
            },
            {            
              type: 'paragraph',
              value:[
                {            
                  type: 'text',
                  text: this.$t('data_entry_automation.apps_advantages.productivity.paragraph_2.text_1')
                },
                {            
                  type: 'boldText',
                  text: this.$t('data_entry_automation.apps_advantages.productivity.paragraph_2.bold_text')
                },
                {            
                  type: 'text',
                  text: this.$t('data_entry_automation.apps_advantages.productivity.paragraph_2.text_2')
                }
              ]
            },
          ],
          [
            {
              type: 'titleIcon',
              value: {
                iconSize: 'big',
                iconBGColor: 'light',
                titleSize: 'large',
                title: this.$t('data_entry_automation.apps_advantages.security.title'),
                icon: 'IconSecurity'
              }
            },
            {            
              type: 'paragraph',
              value: [
                {            
                  type: 'text',
                  text: this.$t('data_entry_automation.apps_advantages.security.paragraph_1.text_1')
                },
                {            
                  type: 'boldText',
                  text: this.$t('data_entry_automation.apps_advantages.security.paragraph_1.bold_text')
                },
                {            
                  type: 'text',
                  text: this.$t('data_entry_automation.apps_advantages.security.paragraph_1.text_2')
                },
                {            
                  type: 'boldText',
                  text: this.$t('data_entry_automation.apps_advantages.security.paragraph_1.bold_text_2')
                }
              ]
            },
            {            
              type: 'paragraph',
              value: this.$t('data_entry_automation.apps_advantages.security.paragraph_2')
            }
          ],
          [
            {
              type: 'titleIcon',
              value: {
                iconSize: 'big',
                iconBGColor: 'light',
                titleSize: 'large',
                title: this.$t('data_entry_automation.apps_advantages.automation.title'),
                icon: 'IconAutomation'
              }
            },
            {            
              type: 'paragraph',
              value: this.$t('data_entry_automation.apps_advantages.automation.paragraph_1')
            },
            {            
              type: 'paragraph',
              value: this.$t('data_entry_automation.apps_advantages.automation.paragraph_2')
            },
          ]
        ]
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>