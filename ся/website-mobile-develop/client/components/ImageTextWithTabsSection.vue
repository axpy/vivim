<template>
  <div class="image-text-with-tabs-section">
    <BaseHeader
      :config="headerConfig"
      class="image-text-with-tabs-section__header"
    />
    <div
      v-if="!isDesktop"
      class="image-text-with-tabs-section__collapsible-content"
    >
      <BaseCollapsible
        v-for="(config, index) in mobileContent"
        :key="index"
        :config="config"
        :chosenTab="chosenTab"
        @choseTab="choseTab"
      />
    </div>
    <template v-else>
      <BaseTabs
        :tabs="tabs"
        :chosenTab="chosenTab ? chosenTab : tabs[0].tab"
        @choseTab="choseTab"
      />
      <ul class="image-text-with-tabs-section__content">
        <li
          v-for="(content, index) in desktopContent[chosenTab ? chosenTab : tabs[0].tab]"
          :key="index"
          :class="content.class"
        >
          <component
            v-for="component in content.content" 
            :key="component.index"
            :is="component.name"
            :config="component.config"
          />
        </li>
      </ul>
    </template>
  </div>
</template>

<script>
/*
  Config props:

  headerConfig - REQUIRED
  columnsLayout - OPTIONAL
  tabsContent - REQUIRED
*/
import BaseHeader from '~/components/BaseHeader'
import BaseCollapsible from '~/components/ui/BaseCollapsible'
import BasePicture from '~/components/ui/BasePicture'
import BaseParagraph from '~/components/ui/BaseParagraph'
import BaseFootnote from '~/components/ui/BaseFootnote'
import BaseList from '~/components/ui/BaseList'
import BaseItem from '~/components/ui/BaseItem'
import BaseTitleIcon from '~/components/ui/BaseTitleIcon'
import BaseTabs from '~/components/BaseTabs'
import {contentFromConfig} from '~/helpers/contentFromConfig'

export default {
  name: 'ImageTextWithTabsSection',
  components: {
    BaseCollapsible,
    BaseHeader,
    BaseTabs,
    BasePicture,
    BaseParagraph,
    BaseTitleIcon,
    BaseList,
    BaseItem,
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
      columnsLayout: 'default',
      chosenTab: Object.keys(this.config.tabsContent)[0],
      ...this.config
    }
  },
  computed: {
    desktopContent() {
      return Object.keys(this.tabsContent).reduce((totalObj, tab) => {
        return {
          ...totalObj,
          [tab]: this.tabsContent[tab].content.map((componenstList, index) => {
            return {
              content: contentFromConfig(componenstList, tab),
              class: [
                'content__column',
                componenstList.length === 1 && componenstList[0].type === 'picture' ? 'content__column--image' : 'content__column--text',
                `content__column--${this.columnsLayout}`,
                `content__column--${index + 1}`
              ],
            }
          }) 
        }
      }, {})
    },
    mobileContent() {
      return this.tabs.map(tabInfo => {
        return {
          ...tabInfo,
          content: contentFromConfig(this.tabsContent[tabInfo.tab].content[0].filter(item => item.type !== 'header'))
        }
      })
    },
    tabs() {
      return Object.keys(this.tabsContent).map(item => {
        return {tab: item, tabTitleText: this.tabsContent[item].tabTitleText}
      })
    },
    isDesktop() {
      return this.$store.getters['ui/isDesktopSize']
    }
  },
  methods: {
    choseTab(tab) {
      if (this.chosenTab !== tab) {
        this.chosenTab = tab
      } else if (!this.isDesktop) {
        this.chosenTab = ''
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.image-text-with-tabs-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 16rem 7.3rem;
  background-color: $color-light-1;

  @include l {
    padding: 12rem 7.3rem;
  }

  @include xs {
    padding: 4.8rem 0;
  }

  &__header {
    @include xs {
      padding: 0 1rem;
    }
  }

  &__collapsible-content {
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    
    @include s {
      padding: 0 1rem;
    }
  }
  
  &__content {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    list-style-type: none;
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

    @include l {
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