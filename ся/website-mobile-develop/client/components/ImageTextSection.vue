<template>
  <div :class="columnsClass">
    <BaseHeader
      v-if="headerConfig"
      :config="headerConfig"
      class="columns-double__header"
    />
    <ul :class="contentClass">
      <li
        v-for="(content, index) in dataContent" 
        :key="index"
        :class="content.class"
      >
        <component
          v-for="(component, index) in content.content" 
          :key="index"
          :is="component.name"
          :config="component.config"
        />
      </li>
    </ul>
  </div>
</template>

<script>
/*
  Config props:

  columnsLayout - OPTIONAL
  content - REQUIRED
  headerConfig -OPTIONAL
*/

import BaseHeader from '~/components/BaseHeader'
import BasePicture from '~/components/ui/BasePicture'
import BaseVideoModalInvoker from '~/components/ui/BaseVideoModalInvoker'
import BaseParagraph from '~/components/ui/BaseParagraph'
import BaseFootnote from '~/components/ui/BaseFootnote'
import BaseList from '~/components/ui/BaseList'
import BaseItem from '~/components/ui/BaseItem'
import BaseTitleIcon from '~/components/ui/BaseTitleIcon'
import BaseForm from '~/components/ui/BaseForm'
import BaseLinksBlock from '~/components/ui/BaseLinksBlock'
import {contentFromConfig} from '~/helpers/contentFromConfig'

export default {
  name: 'ImageTextSection',
  components: {
    BaseHeader,
    BasePicture,
    BaseParagraph,
    BaseTitleIcon,
    BaseList,
    BaseItem,
    BaseForm,
    BaseLinksBlock,
    BaseVideoModalInvoker,
    BaseFootnote
  },
  props: {
    config: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      headerConfig: '',
      columnsLayout: 'default',
      columnsIndentation: 'default',
      contentLayout: 'default',
      ...this.config
    }
  },
  computed: {
    dataContent() {
      let isInseparableText = this.content.map(componentsList => {
        return componentsList[componentsList.length - 1].type === 'list'
      }).every(item => !!item) // there is columns where first column ends with list and second starts with list.Indent btw columns smaller then usual.
      return this.content.map((componentsList, index) => {
        return {
          class: [
            'content__column',
            componentsList.length === 1 && componentsList[0].type === 'picture' ? 'content__column--image' : `content__column--${isInseparableText ? 'inseparable-text' : 'text'}`,
            `content__column--${this.columnsLayout}`,
            `content__column--${index + 1}`
          ],
          content: contentFromConfig(componentsList, index)
        }
      })
    },
    contentClass() {
      return ['columns-double__content', 'content', `columns-double__content--${this.contentLayout}` ]
    },
    columnsClass() {
      return ['columns-double', `columns-double--${this.columnsIndentation}`]
    }
  }
}
</script>

<style lang="scss" scoped>
.columns-double {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: $z-low-below;

  &--default {
    margin: 16rem 7.3rem;
  
    @include l {
      margin: 12rem 7.3rem;
    }
  
    @include xs {
      margin: 4.8rem 0 0;
    }
  }

  &--small {
    &:first-child {
      margin: 16rem 7.3rem 4rem;
    
      @include l {
        margin: 12rem 7.3rem 4rem;
      }
    
      @include xs {
        margin: 4.8rem 0 4rem;
      }
    }

    &:last-child {
      margin: 4rem 7.3rem 16rem;
    
      @include l {
        margin: 4rem 7.3rem 12rem;
      }
    
      @include xs {
        margin: 4rem 0 0;
      }
    }
  }

  &__content {
    display: flex;
    justify-content: center;
    list-style-type: none;
  
    @include s {
      flex-direction: column;
    }

    &--default {
      align-items: flex-start;

      @include s {
        align-items: center;
      }
    }

    &--center {
      align-items: center;
    }
    
    &--end {
      align-items: flex-end;
    }
  }

  &__header {
    padding: 0 1rem;
  }
}

.content {
  &__column {
    display: flex;
    flex-direction: column;
    max-width: 66rem;
    justify-content: center;

    @include l {
      max-width: 59rem;
    }

    @include s {
      max-width: 66rem;
    }

    &--default {
      &:first-of-type {
        margin-right: 6.5rem;
  
        @include l {
          margin-right: 4.5rem;
        }
    
        @include s {
          margin: 0;
        }
      }
    }

    &--right-shifted {
      &:first-of-type {
        margin-right: 10rem;
        max-width: 73rem;
  
        @include l {
          margin-right: 7rem;
        }
    
        @include s {
          margin: 0 0 4rem;
          max-width: 66rem;
        }
      }

      &:last-of-type {
        max-width: 56rem;
  
        @include s {
          max-width: 66rem;
        }
      }
    }

    &--left-shifted {
      &:first-of-type {
        margin-right: 10rem;
        max-width: 50rem;
  
        @include l {
          margin-right: 7rem;
          max-width: 43rem;
        }

        @include m {
          margin-right: 4rem;
        }

        @include s {
          margin: 0 0 4rem;
          max-width: 66rem;
        }
      }

      &:last-of-type {
        width: 66rem;

        @include l {
          width: 63rem;
        }

        @include m {
          width: 45rem;
        }
  
        @include s {
          width: 100%;
          max-width: 66rem;
        }
      }
    }

    &--text {
      @include s {
        padding: 0 1rem;
        margin: 0 0 4rem;
        order: 1;
      }

      &:first-of-type {
        @include s {
          margin: 0 0 4rem;
        }
      }
    }

    &--inseparable-text {
      @include s {
        padding: 0 1rem;
        margin: 0 0 4.8rem;
        order: 1;
      }

      &:first-of-type {
        @include s {
          margin: 0 0 3.2rem;
        }
      }
    }

    &--image {
      @include s {
        padding: 0 -1rem;
        order: 2;
      }

      &:first-of-type {
        @include s {
          margin: 0;
        }
      }
    }
  }
}
</style>