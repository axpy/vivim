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
  name: 'WhatIsMRZReader',
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
                type: 'videoModalInvoker',
                value: {
                  image: 'mrz-phone.jpg',
                  alt: 'MRZ',
                  pictureType: 'rounded'
                }
              }
            ],
            [
              {
                type: 'header',
                value: {
                  text: this.$t('mrz_reader.what_is_mrz.title'),
                  indentation: 'medium',
                  alignment: 'left'
                }
              },
              {
                type: 'paragraph',
                value: this.$t('mrz_reader.what_is_mrz.paragraph_1')
              },
              {
                type: 'paragraph',
                value: [
                  {
                    type: 'text',
                    text: this.$t('mrz_reader.what_is_mrz.paragraph_2.part_1')
                  },
                  {
                    type: 'link',
                    text: this.$t('mrz_reader.what_is_mrz.paragraph_2.link'),
                    to: 'https://www.icao.int/publications/pages/publication.aspx?docnum=9303'
                  },
                  {
                    type: 'text',
                    text: this.$t('mrz_reader.what_is_mrz.paragraph_2.part_2')
                  },
                ]
              },
              {
                type: 'paragraph',
                value: this.$t('mrz_reader.what_is_mrz.paragraph_3')
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
                  text: this.$t('mrz_reader.mrz_number.title'),
                  indentation: 'medium',
                  alignment: 'left'
                }
              },
              {
                type: 'paragraph',
                value: this.$t('mrz_reader.mrz_number.paragraph_1')
              },
              {
                type: 'paragraph',
                value: this.$t('mrz_reader.mrz_number.paragraph_2')
              },
              {
                type: 'paragraph',
                value: this.$t('mrz_reader.mrz_number.paragraph_3')
              },
              {
                type: 'paragraph',
                value: [
                  {
                    type: 'smallText',
                    text: this.$t('mrz_reader.mrz_number.paragraph_4')
                  }
                ]
              }
            ],
            [
              {
                type: 'picture',
                value: {
                  image: 'scan.jpg',
                  alt: 'Scan',
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