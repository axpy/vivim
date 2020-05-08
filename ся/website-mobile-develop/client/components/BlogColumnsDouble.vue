<template>
  <div :class="columnsClass">
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

import BlogHeader from '~/components/BlogHeader'
import BasePicture from '~/components/ui/BasePicture'
import BaseVideoModalInvoker from '~/components/ui/BaseVideoModalInvoker'
import BlogParagraph from '~/components/ui/BlogParagraph'
import BlogTitleText from '~/components/ui/BlogTitleText'
import BlogSectionTitle from '~/components/ui/BlogSectionTitle'
import {contentFromConfig} from '~/helpers/contentFromConfig'

export default {
  name: 'BlogColumnsDouble',
  components: {
    BlogHeader,
    BasePicture,
    BlogParagraph,
    BaseVideoModalInvoker,
    BlogTitleText,
    BlogSectionTitle
  },
  props: {
    config: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      columnsLayout: 'default',
      contentLayout: 'default',
      ...this.config
    }
  },
  computed: {
    dataContent() {
      return this.content.map((componentsList, index) => {
        return {
          class: [
            'content__column',
            componentsList.length === 1 && componentsList[0].type === 'picture' ? 'content__column--image' : 'content__column--text',
            `content__column--${index + 1}`
          ],
          content: contentFromConfig(componentsList, index, 'blog')
        }
      })
    },
    contentClass() {
      return ['columns-double__content', `columns-double__content--${this.contentLayout}` ]
    },
    columnsClass() {
      return ['columns-double', `columns-double--${this.columnsLayout}`]
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
    padding: 3rem 17.5rem;

    @include l {
      padding: 2rem 5rem;
    }
  
    @include xs {
      padding: 2rem 1rem;
    }
  }

  &--card {
    padding: 6rem;
    background: $color-white;
    box-shadow: $box-shadow-blog;
    border-radius: 10px;
    margin-bottom: 3rem;

    @include l {
      padding: 4rem;
    }
  
    @include s {
      padding: 2rem;
      margin: 2rem 5rem;
    }
  
    @include xs {
      margin-bottom: 2rem;
      padding: 1rem;
      margin: 2rem 1rem;
    }
  }

  &__content {
    display: flex;
    justify-content: center;
    list-style-type: none;
  
    @include xs {
      flex-direction: column;
    }

    &--default {
      align-items: flex-start;

      @include xs {
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
}

.content {
  &__column {
    display: flex;
    flex-direction: column;
    max-width: 39.5rem;
    justify-content: center;

    &:first-of-type {
      margin-right: 6rem;
  
      @include xs {
        margin: 0 0 2rem;
      }
    }

    &--text {
      @include s {
        order: 1;
      }

      &:first-of-type {
        @include xs {
          margin: 0 0 2rem;
        }
      }
    }

    &--image {
      @include s {
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