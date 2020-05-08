<template>
  <div :class="cardBlockClass">
    <component
      v-for="icon in iconBgList"
      :key="icon"
      :is="icon | capitalize"
      :class="`card-list__i card-list__i--bg-${icon}`"
    />
    <BasePicture
      v-if="cardListBgPicture==='wave'"
      :config="imageConfig"
    />
    <BaseHeader
      :config="headerConfig"
      class="card-list__header"
    />
    <div :class="cardListClass">
      <BaseCard
        v-for="(config, index) in cardsConfig"
        :key="index"
        :config="config"
      />
    </div>
  </div>
</template>

<script>
/*

Config props 

headerConfig - REQUIRED
cardList - REQUIRED
cardListBgColor - default(transparent) [light-colored, blue-colored]
cardListlayout - OPTIONAL
cardListBgPicture - none [oval, wave]L
cardSize - medium [small, large] (icon size depends on this param)
isIconBGColored - OPTIONAL

*/
import BaseHeader from '~/components/BaseHeader'
import BaseCard from '~/components/ui/BaseCard'
import IconCardsBGRight from '~/components/icons/IconCardsBGRight'
import IconCardsBGLeft from '~/components/icons/IconCardsBGLeft'
import IconCardsBGAltRight from '~/components/icons/IconCardsBGAltRight'
import IconCardsBGAltLeft from '~/components/icons/IconCardsBGAltLeft'
import IconCardsBGPartWave from '~/components/icons/IconCardsBGPartWave'
import BasePicture from '~/components/ui/BasePicture'

export default {
  name: 'CardList',
  components: {
    BaseHeader,
    IconCardsBGRight,
    IconCardsBGLeft,
    IconCardsBGAltRight,
    IconCardsBGAltLeft,
    IconCardsBGPartWave,
    BasePicture,
    BaseCard
  },
  props: {
    config: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      imageConfig: {
        image: 'wave-new.png',
        alt: 'Wave',
        pictureType: 'wave--cutted'
      },
      cardListBgColor: 'light',
      cardListlayout: 'default',
      cardListBgPicture: '',
      isIconBGColored: true,
      cardSize: 'medium',
      ...this.config
    }
  },
  computed: {
    cardBlockClass() {
      return ['card-list', `card-list--${this.cardListBgColor}`]
    },
    cardListClass() {
      return ['card-list__content', `card-list__content--${this.cardListlayout}`]
    },
    cardsConfig() {
      return this.config.cardList.map((item, index) => {
        return {...item, ...{cardSize: this.cardSize}, ...{isIconBGColored: this.isIconBGColored}}
      })
    },
    iconBgList() {
      if (this.cardListBgPicture) {
        return this.cardListBgPicture === 'oval' ? ['right', 'left', 'alt-right', 'alt-left'] : ['part-wave']
      }
    }
  },
  filters: {
    capitalize: function (value) {
      if (!value) return ''
      return `IconCardsBG${value.split('-').map(item => `${item.charAt(0).toUpperCase()}${item.slice(1)}`).join('')}`
    }
  }
}
</script>

<style lang="scss" scoped>
.card-list {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;

  &--light {
    background-color: $color-light-1;
    padding: 16rem 0;
  
    @include l {
      padding: 12rem 0;
    }
  
    @include xs {
      padding: 4.8rem 0;
    }
  }

  &--blue {
    background-color: $color-light-2;
    padding: 16rem 0;
  
    @include l {
      padding: 12rem 0;
    }
  
    @include xs {
      padding: 4.8rem 0;
    }
  }

  &--default {
    background-color: transparent;
    margin: 16rem 0;
  
    @include l {
      margin: 12rem 0;
    }
  
    @include xs {
      margin: 4.8rem 0;
    }
  }

  &__header {
    @include xs {
      padding: 0 1rem;
    }
  }

  &__content {
    z-index: $z-low-below;
  
    &--default {
      display: grid;
      grid-template-columns: repeat(5, min-content);
      grid-template-rows: max-content;
      column-gap: 2.6rem;

      @include m {
        column-gap: 2rem;
      }

      @include s {
        grid-template-columns: repeat(2, min-content);
        grid-template-rows: max-content;
        grid-auto-flow: row;
        grid-auto-rows: min-content;
        row-gap: 2rem;
      }
    }
  
    &--double-row {
      display: grid;
      grid-template-columns: repeat(3, 20rem);
      grid-template-rows: repeat(2,  min-content);
      grid-auto-flow: column;
      grid-auto-columns: 20rem;
      gap: 5rem 10rem;
    
      @include l {
        gap: 5rem 7rem;
      }
    
      @include s {
        grid-template-columns: repeat(2, 20rem);
        grid-template-rows: repeat(3, min-content);
      }
  
      @include xs {
        grid-template-columns: repeat(2, 14rem);
        grid-auto-flow: row;
        grid-auto-rows: min-content;
      }
  
      @include xxs {
        gap: 3.2rem 2rem;
      }
    }
  }

  &__i {
    position: absolute;
    width: 100%;
    height: 100%;
    
    &--bg-left {
      top: 0;
      left: -30%;

      @include xs {
        display: none;
      }
    }

    &--bg-right {
      height: 30rem;
      bottom: 0%;
      right: 10%;

      @include xs {
        display: none;
      }
    }

    &--bg-alt-left {
      display: none;
      height: 70%;
      bottom: 0;
      left: -20%;

      @include xs {
        display: block;
      }
    }

    &--bg-alt-right {
      display: none;
      height: 50%;
      bottom: 0%;
      right: 0%;

      @include xs {
        display: block;
      }

      @include xxs {
        height: 20%;
        width: 70%;
      }
    }

    &--bg-part-wave {
      display: none;
      bottom: 0;
      left: 0%;

      @include xs {
        width: 50%;
        display: block;
      }
    }
  }
}
</style>