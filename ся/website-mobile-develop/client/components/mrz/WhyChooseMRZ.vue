<template>
  <div class="why-choose-mrz">
    <ImageTextSection
      v-for="(sectionConfig, index) in config"
      :key="index"
      :config="sectionConfig"
    />
  </div>
</template>

<script>
import ImageTextSection from '~/components/ImageTextSection'

export default {
  name: 'WhyChooseMRZ',
  components: {
    ImageTextSection
  },
  data() {
    return {
      config: [
        {
          headerConfig: {
            text: this.$t('mrz_reader.why_mrz.header'),
            subHeaderText: this.$t('mrz_reader.why_mrz.sub_header'),
            subHeaderStyle: 'lighten',
            indentation: 'large'
          },
          columnsIndentation: 'small',
          content: [
            [
              {
                type: 'picture',
                value: {
                  image: 'in-cafe.jpg',
                  alt: 'Cafe',
                  pictureType: 'reverse-rounded'
                }
              }
            ],
            [
              {
                type: 'list',
                value: {
                  itemIndentation: 'medium',
                  listItems: [
                    {
                      title: this.$t('mrz_reader.why_mrz.heightened_data_security.title'),
                      description: this.$t('mrz_reader.why_mrz.heightened_data_security.description')
                    },
                    {
                      title: this.$t('mrz_reader.why_mrz.improved_automation.title'),
                      description: this.$t('mrz_reader.why_mrz.improved_automation.description')
                    },
                    {
                      title: this.$t('mrz_reader.why_mrz.increased_accuracy.title'),
                      description: this.$t('mrz_reader.why_mrz.increased_accuracy.description')
                    },
                    {
                      title: this.$t('mrz_reader.why_mrz.get_data_verification.title'),
                      description: this.$t('mrz_reader.why_mrz.get_data_verification.description')
                    }
                  ]
                }
              }
            ]
          ]
        },
        {
          columnsIndentation: 'small',
          content: [
            [
              {
                type: 'list',
                value: {
                  itemIndentation: 'medium',
                  listItems: [
                    {
                      title: this.$t('mrz_reader.why_mrz.seamless_usability.title'),
                      description: this.$t('mrz_reader.why_mrz.seamless_usability.description')
                    },
                    {
                      title: this.$t('mrz_reader.why_mrz.simplicity_and_autonomy.title'),
                      description: this.$t('mrz_reader.why_mrz.simplicity_and_autonomy.description')
                    },
                    {
                      title: this.$t('mrz_reader.why_mrz.multi-platform_integration.title'),
                      description: this.$t('mrz_reader.why_mrz.multi-platform_integration.description')
                    }
                  ]
                }
              }
            ],
            [
              {
                type: 'picture',
                value: {
                  image: 'phone-screen.jpg',
                  alt: 'Phone',
                  pictureType: 'reverse-rounded'
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
.image-text-section {
  &:first-child {
    margin-bottom: 4rem;
  }
}
</style>