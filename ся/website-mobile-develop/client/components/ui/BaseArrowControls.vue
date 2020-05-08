<template>
  <div  class="arrow-controls">
    <div
      :class="controlsWrapperClass('rotated')"
      @click="handlerSwipeBack"
    >
      <IconSliderArrow class="arrow-controls__item"/>
    </div>
    <div
      :class="controlsWrapperClass('default')"
      @click="handlerSwipeAhead"
    >
      <IconSliderArrow class="arrow-controls__item"/>
    </div>
  </div>
</template>

<script>
import IconSliderArrow from '~/components/icons/IconSliderArrow'

export default {
  name: "BaseArrowControls",
  components: {
    IconSliderArrow
  },
  props: {
    hasLoop: {
      type: Boolean,
      default: false,
      required: false
    },
    currentPage: {
      type: Number,
      required: true
    },
    totalPages: {
      type: Number,
      required: true
    },
    handlerSwipeAhead: {
      type: Function,
      required: true
    },
    handlerSwipeBack: {
      type: Function,
      required: true
    },
    type: {
      type: String,
      default: ''
    }
  },
  computed: {
    controlsWrapperClass() {
      return type => {
        let classes = ['arrow-controls__wrapper']
        if (
          !this.hasLoop && 
          ((type === 'rotated' && this.currentPage === 1) || (type !== 'rotated' && this.currentPage === this.totalPages))
        ) {
          classes.push('arrow-controls__wrapper--disabled')
        }
        if (type === 'rotated') {
          classes.push('arrow-controls__wrapper--rotated')
        }
        if (this.type && type === 'default') {
          classes.push('arrow-controls__wrapper--wide')
        }
        return classes
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.arrow-controls {
  display: inline-flex;
  &__wrapper {
    cursor: pointer;
    display: flex;
    align-items: center;
    position: relative;
    content: '';

    &:first-child {
      margin-right: 4.8rem;
    }
    
    &::before {
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      height: 500%;
    }
    &--rotated {
      transform: rotate(180deg);
    }

    &--disabled {
      cursor: default;
      opacity: .5;
    }
    &--wide {
      &:first-child {
        margin-right: 6.8rem;
      }
    }
  }

  &__border {
    width: .1rem;
    height: 2.5rem;
    transform: skew(-15deg);
    background-color: $color-primary;
  }
}
</style>
