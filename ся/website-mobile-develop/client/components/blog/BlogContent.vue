<template>
  <BaseBlogSection :config="config" />
</template>

<script>
import BaseBlogSection from '~/components/BaseBlogSection'

export default {
  name: 'BlogContent',
  components: {
    BaseBlogSection
  },
  data() {
    return {
      config: {
        content: [
          {
            type: 'pageStartHeader',
            value: {
              text: 'Regula has introduced integration with Oracle® Opera 5.5 for hospitality industry'
            }
          },
          {
            type: 'titleText',
            value: {
              title: 'Simple text',
              description: [
                'The main objective of the application is to protect elderly people by arranging the system of support provided by volunteers so that the elderly could handle the situation while staying at home. There registered volunteers contact the elderly via phone to deliver medicine, food or Tother necessary products.',
                'Getting the power of two environments. Migrating to a hybrid deployment, companies get a unique chance to leverage both on-premises and cloud capabilities simultaneously. '
              ]
            }
          },
          {
            type: 'note',
            value: 'One more way to highlight some important text.'
          },
          {
            type: 'columnsDouble',
            value: {
              content: [
                [
                  {
                    type: 'header',
                    value: 'Text and image'
                  },
                  {
                    type: 'paragraph',
                    value: 'The main objective of the application is to protect elderly people by arranging the system of support provided by volunteers so that the elderly could handle the situation while staying at home. There registered volunteers contact the elderly via phone to deliver medicine, food or Tother necessary products.'
                  },
                  {
                    type: 'paragraph',
                    value: 'Getting the power of two environments. Migrating to a hybrid deployment, companies get a unique chance to leverage both on-premises and cloud capabilities simultaneously. '
                  }
                ],
                [
                  {
                    type: 'picture',
                    value: {
                      path: '/images/dataEntry/airport',
                      extension: 'jpg',
                      resolutionList: [[0, 1500], [1000, 1367], [900, 1200], [800, 1024]],
                      defaultSrc: '/images/dataEntry/airport.jpg',
                      defaultAlt: 'Airport',
                      pictureType: 'blog-rounded'
                    }
                  }
                ]
              ]
            }
          },
          {
            type: 'titleText',
            value: {
              title: 'Simple text',
              titleSize: 'small',
              description: [
                [
                  {
                    type: 'text',
                    text: 'The main objective of the application is to protect elderly people by arranging the system of support provided by volunteers so that the elderly could handle the situation while staying at home. '
                  },
                  {
                    type: 'primary-highlight',
                    text: 'There registered volunteers contact the elderly via phone to deliver medicine, food or Tother necessary products.'
                  }
                ],
                'Getting the power of two environments. Migrating to a hybrid deployment, companies get a unique chance to leverage both on-premises and cloud capabilities simultaneously. '
              ]
            }
          },
          {
            type: 'quote',
            value: {
              title: 'David O.Braian',
              description: 'The main objective of the application is to protect elderly people by arranging the system of support provided by volunteers so that the elderly could handle the situation while staying at home. There registered volunteers contact the elderly via phone to deliver medicine, food or Tother necessary products.'
            }
          },
          {
            type: 'list',
            value: {
              header: 'ordered',
              isOrdered: true,
              listItems: [
                {
                  description: 'Getting the power of two environments. Migrating to a hybrid deployment, companies get a unique chance to leverage both on-premises and cloud capabilities simultaneously. For example, they can continue using SharePoint On-Premises to host bulky content and custom solutions while providing employees with the latest collaboration features available in SharePoint Online.'
                },
                {
                  description: 'For example, they can continue using SharePoint.'
                },
                {
                  description: 'Migrating to a hybrid deployment, companies get a unique chance to leverage both on-premises and cloud capabilities simultaneously. '
                }
              ]
            }
          },
          {
            type: 'sectionTitle',
            value: {
              text: 'Section title',
              indentation: 'x-medium',
              headerSize: 'medium',
              subHeaderText: 'The place for a short overview text about the section content. The place for a short overview text about the section content.'
            }
          },
          {
            type: 'picture',
            value: {
              path: '/images/dataEntry/airport',
              extension: 'jpg',
              resolutionList: [[0, 1500], [1000, 1367], [900, 1200], [800, 1024]],
              defaultSrc: '/images/dataEntry/airport.jpg',
              defaultAlt: 'Airport',
              pictureType: 'small-blog'
            }
          },
          {
            type: 'columnsDouble',
            value: {
              content: [
                [
                  {
                    type: 'header',
                    value: 'Column 1'
                  },
                  {
                    type: 'paragraph',
                    value: 'The main objective of the application is to protect elderly people by arranging the system of support provided by volunteers so that the elderly could handle the situation while staying at home. There registered volunteers contact the elderly via phone to deliver medicine, food or Tother necessary products.'
                  },
                  {
                    type: 'paragraph',
                    value: 'Getting the power of two environments. Migrating to a hybrid deployment, companies get a unique chance to leverage both on-premises and cloud capabilities simultaneously. '
                  }
                ],
                [
                  {
                    type: 'header',
                    value: 'Column 2'
                  },
                  {
                    type: 'paragraph',
                    value: 'Getting the power of two environments. Migrating to a hybrid deployment, companies get a unique chance to leverage both on-premises and cloud capabilities simultaneously. '
                  },
                  {
                    type: 'paragraph',
                    value: 'The main objective of the application is to protect elderly people by arranging the system of support provided by volunteers so that the elderly could handle the situation while staying at home. There registered volunteers contact the elderly via phone to deliver medicine, food or Tother necessary products.'
                  }
                ]
              ]
            }
          },
          {
            type: 'videoModalInvoker',
            value: {
              isPlay: true,
              path: '/images/dataEntry/airport',
              extension: 'jpg',
              resolutionList: [[0, 1500], [1000, 1367], [900, 1200], [800, 1024]],
              defaultSrc: '/images/dataEntry/airport.jpg',
              defaultAlt: 'Airport',
              pictureType: 'medium-blog'
            }
          },
          {
            type: 'list',
            value: {
              header: 'Unordered',
              listItems: [
                {
                  description: 'Getting the power of two environments. Migrating to a hybrid deployment, companies get a unique chance to leverage both on-premises and cloud capabilities simultaneously. For example, they can continue using SharePoint On-Premises to host bulky content and custom solutions while providing employees with the latest collaboration features available in SharePoint Online.'
                },
                {
                  description: 'Migrating to a hybrid deployment, companies get a unique chance to leverage both on-premises and cloud capabilities simultaneously.'
                },
                {
                  description: 'Migrating to a hybrid deployment, companies get a unique chance to leverage both on-premises and cloud capabilities simultaneously. '
                }
              ]
            }
          },
          {
            type: 'columnsDouble',
            value: {
              columnsLayout: 'card',
              contentLayout: 'center',
              content: [
                [
                  {
                    type: 'sectionTitle',
                    value: {
                      text: 'Section title',
                      alignment: 'left',
                      subHeaderText: 'Getting the power of two environments. Migrating to a hybrid deployment, companies get a unique chance to leverage both on-premises and cloud capabilities simultaneously.'
                    }
                  }
                ],
                [
                  {
                    type: 'picture',
                    value: {
                      path: '/images/dataEntry/airport',
                      extension: 'jpg',
                      resolutionList: [[0, 1500], [1000, 1367], [900, 1200], [800, 1024]],
                      defaultSrc: '/images/dataEntry/airport.jpg',
                      defaultAlt: 'Airport',
                      pictureType: 'blog-rounded'
                    }
                  }
                ]
              ]
            }
          },
          {
            type: 'titleText',
            value: {
              title: 'Inline Code',
              description: [
                  [
                    {
                    type: 'text',
                    text:  'How do you reverse a string in place (or in-place) in JavaScript when it is passed to a function with a return statement, without using built-in functions ('
                  },
                  {
                    type: 'grey-highlight',
                    text: '.reverse()'
                  },
                  {
                    type: 'text',
                    text: ', '
                  },
                  {
                    type: 'grey-highlight',
                    text: '.charAt()'
                  },
                  {
                    type: 'text',
                    text: ' etc.)?'
                  }
                ]
              ]
            }
          },
          {
            type: 'codeFragment',
            value: {
              title: 'Libraries:',
              icon: 'IconBlogCode_1'
            }
          },
          {
            type: 'codeFragment',
            value: {
              title: 'Function:',
              icon: 'IconBlogCode_2'
            }
          },
        ]
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>