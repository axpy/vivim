<template>
  <div class="slider">
    <div
      :class="controlsSliderClass('rotated')"
      @click="slidePre"
    >
      <IconTriangle
        :width="'24px'"
        :height="'16px'"
        class="slider__icon-item"
      />
    </div>
    <div class="slider__wrapper">
      <client-only>
        <Slider
          v-if="iconGroups && iconGroups.length && itemWidth"
          class="slider__content"
          ref="slider"
          :options="defaultOptions"
        >
          <SliderItem
            v-for="(iconGroup, index) in iconGroups"
            :key="index"
            :style="`width:${itemWidth}%; margin-right: .5rem;`"
          >
            <div class="slider__item">
              <img
                class="slider__img"
                loading="lazy"
                v-for="icon in iconGroup"
                :key="icon.name"
                :src="icon.path"
                alt=""
              >
            </div>
          </SliderItem>
        </Slider>
      </client-only>
    </div>
    <div
      class="slider__icon"
      :class="controlsSliderClass('default')"
      @click="slideNext"
    >
      <IconTriangle
        :width="'24px'"
        :height="'16px'"
        class="slider__icon-item"
      />
    </div>
  </div>
</template>

<script>
import IconTriangle from '~/components/icons/IconTriangle'
export default {
  name: "ClientsSlider",
  components: {
    IconTriangle
  },
  props: {
    currentDisplay: String,
    icons: {
      default: () => [],
      type: Array
    }
  },
  data() {
    return {
      currentPage: 0,
      defaultOptions: {
        currentPage: 0,
        loop: false,
        loopedSlides: 1,
        slidesToScroll: 5,
        timingFunction: "ease",
        speed: 300,
        pagination: false
      }
    }
  },
  computed: {
    controlsSliderClass() {
      return type => {
        let classes = ['slider__icon']
        if (
          !this.hasLoop && 
          ((type === 'rotated' && this.startOfSlider) || (type === 'default' && this.endOfSlider))
        ) {
          classes.push('slider__icon--disabled')
        }
        if (type === 'rotated') {
          classes.push('slider__icon--rotated')
        }
        return classes
      }
    },
    endOfSlider() {
      return ((this.currentPage + 1) * this.defaultOptions.slidesToScroll) >= this.iconGroups.length
    },
    startOfSlider() {
      return this.currentPage === 0
    },
    itemWidth() {
      return 100 / this.defaultOptions.slidesToScroll
    },
    items() {
      return 4
    },
    groups() {
      return this.icons.length / this.items
    },
    iconGroups() {
      let arr = []
      for (let index = 0; index < this.groups; index++) {
        arr.push(this.icons.slice(index * this.items, index * this.items + this.items))
      }
      return arr
    }
  },
  methods: {
    slideNext () {
      if (!this.endOfSlider) {
        this.$refs.slider.$emit('slideNext')
        this.currentPage++
      }
    },
    slidePre () {
      if (!this.startOfSlider) {
        this.$refs.slider.$emit('slidePre')
        this.currentPage--
      }
    },
    calculateIconsGroup() {
      if (this.$refs.slider) {
        this.currentPage = 0
        this.$refs.slider.$emit('slideTo', 0)
      }
      this.defaultOptions.slidesToScroll = 1
    }
  },
  watch: {
    currentDisplay(val) {
      this.calculateIconsGroup()
    }
  },
  created() {
    this.calculateIconsGroup()
  }
};
</script>

<style lang="scss" scoped>
.slider {
  width:100%;
  margin:20px auto;
  height:400px;
  display: flex;
  align-items: center;
  & > :not(:last-child) {
    margin-right: 5rem;
    @include xs {
      margin-right: 1rem;
    }
  }
  &__icon {
    cursor: pointer;
    transform: rotate(270deg);
    flex: 1 2.4rem;
    &::before {
      content: '';
      position: absolute;
      height: 200%;
      width: 200%;
      right: -50%;
      bottom: -25%;

      @include xxs {
        height: 150%;
      }
    }
    &--rotated {
      transform: rotate(90deg);
    }
    &--disabled {
      opacity: 0.6;
      cursor: auto;
    }
  }
  &__wrapper {
    width: 100%;
    height: 100%;
  }
  &__item {
    cursor: grab;
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
    grid-column-gap: 3rem;
    align-items: center;
    @include s {
      max-width: 55rem;
    }
  }
}
</style>