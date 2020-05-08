<template>
  <div class="what-is-data-entry">
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
  name: 'WhatIsDataEntry',
  components: {
    ImageTextSection
  },
  data() {
    return {
      config: [
        {
          content: [
            [
              {
                type: 'picture',
                value: {
                  image: 'girl-with-phone.jpg',
                  alt: 'Girl with phone',
                  pictureType: 'rounded'
                }
              }
            ],
            [
              {
                type: 'header',
                value: {
                  text: this.$t('data_entry_automation.what_is_dea.title'),
                  indentation: 'medium',
                  alignment: 'left'
                }
              },
              {
                type: 'paragraph',
                value: this.$t('data_entry_automation.what_is_dea.paragraph_1')
              },
              {
                type: 'paragraph',
                value: this.$t('data_entry_automation.what_is_dea.paragraph_2')
              },
              {
                type: 'paragraph',
                value: this.$t('data_entry_automation.what_is_dea.paragraph_3')
              },
              {
                type: 'paragraph',
                value: this.$t('data_entry_automation.what_is_dea.paragraph_4')
              },
            ]
          ],
        },
        {
          contentLayout: 'end',
          content: [
            [
              {
                type: 'header',
                value: {
                  text: this.$t('data_entry_automation.why_you_need_software.title'),
                  subHeaderText: this.$t('data_entry_automation.why_you_need_software.sub_title'),
                  subHeaderStyle: 'lighten',
                  indentation: 'l-medium',
                  alignment: 'left'
                }
              },
              {
                type: 'list',
                value: {
                  itemIndentation: 'large',
                  itemTitleSize: 'large',
                  itemIconSize: 'medium',
                  listItems: [
                    {
                      title: this.$t('data_entry_automation.why_you_need_software.reduce_wait-time.title'),
                      icon: 'IconNumber',
                      description: this.$t('data_entry_automation.why_you_need_software.reduce_wait-time.description'),
                    }
                  ]
                }
              }
            ],
            [
              {
                type: 'list',
                value: {
                  itemIndentation: 'large',
                  itemIconSize: 'medium',
                  itemTitleSize: 'large',
                  startNumber: 2,
                  listItems: [
                    {
                      title: this.$t('data_entry_automation.why_you_need_software.create_processes.title'),
                      icon: 'IconNumber',
                      description: this.$t('data_entry_automation.why_you_need_software.create_processes.description')
                    },
                    {
                      title: this.$t('data_entry_automation.why_you_need_software.maintain_standards.title'),
                      icon: 'IconNumber',
                      description: this.$t('data_entry_automation.why_you_need_software.maintain_standards.description')
                    }
                  ]
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
</style>