<template>
  <div class="what-is-mzr-reading">
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
  name: 'WhatIsFinancialProcessAutomation',
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
                  image: 'man-with-iphone.png',
                  alt: 'Man',
                  pictureType: 'rounded'
                }
              }
            ],
            [
              {
                type: 'header',
                value: {
                  text: this.$t('finance.fpa_in_one_click.title'),
                  indentation: 'medium',
                  alignment: 'left'
                }
              },
              {
                type: 'paragraph',
                value: this.$t('finance.fpa_in_one_click.paragraph_1')
              },
              {
                type: 'list',
                value: {
                  header: this.$t('finance.fpa_in_one_click.list.title'),
                  listItems: [
                    {
                      title: this.$t('finance.fpa_in_one_click.list.item_1')
                    },
                    {
                      title: this.$t('finance.fpa_in_one_click.list.item_2')
                    },
                    {
                      title: this.$t('finance.fpa_in_one_click.list.item_3')
                    }
                  ]
                }
              },
              {
                type: 'paragraph',
                value: this.$t('finance.fpa_in_one_click.paragraph_2')
              }
            ]
          ]
        },
        {
          columnsLayout: 'right-shifted',
          content: [
            [
              {
                type: 'header',
                value: {
                  text: this.$t('finance.what_is_fpa.title'),
                  indentation: 'medium',
                  alignment: 'left'
                }
              },
              {
                type: 'paragraph',
                value: this.$t('finance.what_is_fpa.paragraph_1')
              },
              {
                type: 'list',
                value: {
                  header: this.$t('finance.what_is_fpa.list.title'),
                  listItems: [
                    {
                      title: this.$t('finance.what_is_fpa.list.item_1')
                    },
                    {
                      title: this.$t('finance.what_is_fpa.list.item_2')
                    },
                    {
                      title: this.$t('finance.what_is_fpa.list.item_3')
                    }
                  ]
                }
              },
              {
                type: 'paragraph',
                value: this.$t('finance.what_is_fpa.paragraph_2')
              }
            ],
            [
              {
                type: 'picture',
                value: {
                  image: 'laptop.jpg',
                  alt: 'Laptop',
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
</style>