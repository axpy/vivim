<template>
  <div class="columns-double">
    <ul :class="contentClass">
      <li
        v-for="(component, index) in dataContent" 
        :key="index"
        :class="component.class"
      >
        <component
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

import BasePicture from '~/components/ui/BasePicture'
import BaseVideoModalInvoker from '~/components/ui/BaseVideoModalInvoker'
import BlogHeader from '~/components/BlogHeader'
import BlogParagraph from '~/components/ui/BlogParagraph'
import BlogNote from '~/components/ui/BlogNote'
import BlogList from '~/components/ui/BlogList'
import BlogColumnsDouble from '~/components/BlogColumnsDouble'
import BlogTitleText from '~/components/ui/BlogTitleText'
import BlogCodeFragment from '~/components/ui/BlogCodeFragment'
import BlogSectionTitle from '~/components/ui/BlogSectionTitle'
import BlogPageStartHeader from '~/components/BlogPageStartHeader'
import BlogQuote from '~/components/ui/BlogQuote'
import {contentFromConfig} from '~/helpers/contentFromConfig'

export default {
  name: 'BaseBlogSection',
  components: {
    BasePicture,
    BaseVideoModalInvoker,
    BlogHeader,
    BlogParagraph,
    BlogNote,
    BlogColumnsDouble,
    BlogList,
    BlogTitleText,
    BlogCodeFragment,
    BlogSectionTitle,
    BlogPageStartHeader,
    BlogQuote
  },
  props: {
    config: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      contentLayout: 'default',
      ...this.config
    }
  },
  computed: {
    dataContent() {
      return contentFromConfig(this.content, 'blog-section', 'blog').map(item => {
        return {
          ...item,
          class: [
            'content__column',
            {'content__column--image': item.name === 'BasePicture'},
            {'content__column--video-image': item.name === 'BaseVideoModalInvoker'}
          ]
        }
      })
    },
    contentClass() {
      return ['columns-double__content', 'content', `columns-double__content--${this.contentLayout}` ]
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

  &__content {
    display: flex;
    justify-content: center;
    flex-direction: column;
    list-style-type: none;
    align-items: center;
  
    @include s {
      flex-direction: column;
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
    align-items: center;
    justify-content: center;

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

    &--image {
      margin-bottom: 3rem;

      @include s {
        padding: 0 5rem;
        margin-bottom: 1rem;
      }

      @include xs {
        padding: 2rem 1rem;
        margin-bottom: 0;
      }
    }

    &--video-image {
      padding: 6rem 17.5rem;
      position: relative;

      @include l {
        padding: 2rem 5rem;
      }
    
      @include xs {
        padding: 2rem 1rem;
      }
    }
  }
}
</style>