<template>
  <div class="mrz-final-form">
    <TextFormSection :config="config"/>
  </div>
</template>

<script>
import TextFormSection from '~/components/TextFormSection'

export default {
  name: 'FinalForm',
  components: {
    TextFormSection
  },
  data() {
    return {
      config: {
        headerConfig: {
          text: this.$t('mrz_reader.final_form.header'),
          indentation: 'large',
        },
        columnsLayout: 'left-shifted',
        content: [
          [
            {
              type: 'paragraph',
              value: this.$t('mrz_reader.final_form.paragraph_1')
            },
            {
              type: 'paragraph',
              value: this.$t('mrz_reader.final_form.paragraph_2')
            },
            {
              type: 'linksBlock',
              value: {
                mobileLinksType: 'wide',
                SDKType: 'wide',
                title: this.$t('homepage.try_it.mobile_app')
              }
            }
          ],
          [
            {
              type: 'form',
              value: {
                title: this.$t('homepage.questions.title'),
                buttonName: this.$t('homepage.buttons.submit')
              }
            }
          ],
        ]
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>