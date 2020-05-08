<template>
  <div class="how-finance-work">
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
  name: 'HowFinanceWork',
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
                  image: 'in-airplane.jpg',
                  alt: 'In airplane',
                  pictureType: 'rounded'
                }
              }
            ],
            [
              {
                type: 'header',
                value: {
                  text: this.$t('finance.how_fpa_works.title'),
                  indentation: 'medium',
                  alignment: 'left'
                }
              },
              {
                type: 'paragraph',
                value: [
                  {
                    type: 'text',
                    text: this.$t('finance.how_fpa_works.paragraph.part_1')
                  },
                  {
                    type: 'BaseLink',
                    text: this.$t('finance.how_fpa_works.paragraph.link_1'),
                    to: '/#use-cases'
                  },
                  {
                    type: 'text',
                    text: this.$t('finance.how_fpa_works.paragraph.part_2')
                  },
                  {
                    type: 'BaseLink',
                    text: this.$t('finance.how_fpa_works.paragraph.link_2'),
                    to: '/#use-cases'
                  },
                  {
                    type: 'text',
                    text: this.$t('finance.how_fpa_works.paragraph.part_3')
                  },
                ]
              },
              {
                type: 'list',
                value: {
                  header: this.$t('finance.how_fpa_works.list.title'),
                  listItems: [
                    {
                      title: this.$t('finance.how_fpa_works.list.passports.title'),
                      description: this.$t('finance.how_fpa_works.list.passports.text')
                    },
                    {
                      title: this.$t('finance.how_fpa_works.list.ids.title'),
                      description: this.$t('finance.how_fpa_works.list.ids.text')
                    },
                    {
                      title: this.$t('finance.how_fpa_works.list.other_id_documents.title'),
                      description: this.$t('finance.how_fpa_works.list.other_id_documents.text')
                    }
                  ]
                }
              }
            ]
          ]
        },
        {
          content: [
            [
              {
                type: 'header',
                value: {
                  text: this.$t('finance.how_it_works.title'),
                  alignment: 'left'
                }
              }
            ],
            [
              {
                type: 'list',
                value: {
                  itemIndentation: 'big',
                  itemIconSize: 'medium',
                  listItems: [
                    {
                      title: this.$t('finance.how_it_works.list.item_1'),
                      icon: 'IconNumber'
                    },
                    {
                      title: this.$t('finance.how_it_works.list.item_2'),
                      icon: 'IconNumber'
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