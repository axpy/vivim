<template>
  <div :class="columnsClass">
    <BaseHeader
      v-if="headerConfig"
      :config="headerConfig"
      class="columns-triple__header"
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

  imageConfig - REQUIRED
  columnsLayout - OPTIONAL
  content - REQUIRED

*/

import BaseHeader from '~/components/BaseHeader'
import BasePicture from '~/components/ui/BasePicture'
import BaseParagraph from '~/components/ui/BaseParagraph'
import BaseList from '~/components/ui/BaseList'
import BaseItem from '~/components/ui/BaseItem'
import BaseTitleIcon from '~/components/ui/BaseTitleIcon'
import BaseNote from '~/components/ui/BaseNote'
import {contentFromConfig} from '~/helpers/contentFromConfig'

export default {
  name: 'ArticleSection',
  components: {
    BaseHeader,
    BasePicture,
    BaseParagraph,
    BaseTitleIcon,
    BaseList,
    BaseItem,
    BaseNote
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
      sectionLayout: 'center',
      columnsIndentation: 'default',
      ...this.config
    }
  },
  computed: {
    dataContent() {
      return this.content.map((componentsList, index) => {
        return {
          class: [
            'content__column',
            `content__column--${this.columnsLayout}`,
            {'content__column--styled': this.columnsLayout === 'small'}
          ],
          content: contentFromConfig(componentsList, index)
        }
      })
    },
    contentClass() {
      return ['columns-triple__content', 'content', {'content__line': this.columnsLayout === 'small'}]
    },
    columnsClass() {
      return ['columns-triple', `columns-triple--${this.columnsIndentation}`, `columns-triple--${this.sectionLayout}`]
    }
  }
}
</script>

<style lang="scss" scoped>
.columns-triple {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  &--left {
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: repeat(2, auto);
    justify-content: center;
    align-content: center;
  }

  &--center {
    align-items: center;
  }

  &--default {
    margin: 16rem 7.3rem;
  
    @include l {
      margin: 12rem 5rem;
    }
  
    @include xs {
      margin: 4.8rem 0;
    }
  }

  &--small {
    &:first-child {
      margin: 16rem 7.3rem 6rem;
    
      @include l {
        margin: 12rem 7.3rem 6rem;
      }

      @include s {
        margin: 12rem 7.3rem 3.2rem;
      }
    
      @include xs {
        margin: 4.8rem 0 3.2rem;
      }
    }

    &:last-child {
      margin: 6rem 7.3rem 16rem;
    
      @include l {
        margin: 6rem 7.3rem 12rem;
      }

      @include s {
        margin: 3.2rem 7.3rem 12rem;
      }
    
      @include xs {
        margin: 3.2rem 0 0;
      }
    }
  }

  &__header {
    @include s {
      padding: 0 1rem;
    }
  }
}
.content {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  position: relative;
  width: 100%;

  @include s {
    align-items: center;
    flex-direction: column;
  }

  &__line {
    &::before {
      content: '';
      height: .2rem;
      width: 100%;
      background-color: $color-light-3;
      position: absolute;
      top: 2.7rem;
      left: 0;

      @include l {
        left: -5rem;
        width: calc(100% + 10rem);
        height: 0.1rem;
      }

      @include s {
        display: none;
      }
    }
  }

  &__column {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: $z-low-below;
    position: relative;

    @include s {
      padding: 0 1rem;
    }

    &--default {
      max-width: 42rem;

      @include l {
        max-width: 38rem;
      }
      
      @include s {
        max-width: 100%;
      }

      &:not(:last-child) {
        margin-right: 6.5rem;
  
        @include l {
          margin-right: 4rem;
        }
  
        @include s {
          margin: 0 0 3.2rem;
        }
      }
    }

    &--wide {
      max-width: 41rem;
      min-height: 23.8rem;

      @include l {
        max-width: 38rem;
      }
      
      @include s {
        max-width: 100%;
        min-height: 10rem;
      }

      &:not(:last-child) {
        margin-right: 7.8rem;
  
        @include l {
          margin-right: 4.5rem;
        }
  
        @include s {
          margin: 0 0 3.2rem;
        }
      }
    }
  
    &--small {
      max-width: 39.5rem;

      @include l {
        max-width: 36.5rem;
      }

      @include s {
        max-width: 100%;
      }

      &:not(:last-child) {
        margin-right: 10rem;
  
        @include l {
          margin-right: 6.5rem;
        }
  
        @include s {
          margin: 0 0 4.8rem;
        }
      }
    }

    &--styled {
      &:not(:last-child) {
        &::after {
          display: none;
          content: '';
          height: 2.5rem;
          width: 0.2rem;
          background-color: $color-light-3;
          position: absolute;
          bottom: -3.5rem;
          left: 50%;
  
          @include s {
            display: block;
          }
        }
      }
    }
  }
}
</style>