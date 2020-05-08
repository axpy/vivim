<template>
  <div class="slider">
    <slot
      name="controls" 
      :currentPage="currentPage"
      :totalPages="totalPages"
      :handlerSwipeAhead="handlerSwipeAhead"
      :handlerSwipeBack="handlerSwipeBack"
    />
    <Slider
      ref="slider"
      :options="defaultOptions"
      @slide="setCurrentPage"
    >
      <SliderItem
        v-for="(card, index) in items"
        :key="index"
      >
        <slot 
          name="card" 
          :card="card" 
        />
      </SliderItem>
    </Slider>
  </div>
</template>

<script>
export default {
  name: "BaseSlider",
  props: {
    options: {
      type: Object,
      required: false
    },
    items: {
      type: Array,
      required: false
    },
    itemsQuantity: {
      type: Object,
      required: false
    }
  },
  data() {
    return {
      defaultOptions: {
        currentPage: 0,
        centeredSlides: this.$props.itemsQuantity.isCentered,
        loop: false,
        loopedSlides: 1,
        slidesToScroll: this.$props.itemsQuantity.slidesToScroll,
        timingFunction: "ease",
        speed: 300,
        pagination: false,
        ...this.$props.options
      },
      currentPage: 1
    };
  },
  computed: {
    totalPages() {
      return this.$props.itemsQuantity.totalPages
    }
  },
  methods: {
    setCurrentPage(data) {
      if (data.currentPage) {
        this.currentPage = data.currentPage / this.$props.itemsQuantity.slidesToScroll + 1
      } else {
        this.currentPage = 1
      }
    },
    handlerSwipeAhead() {
      this.$refs.slider.$emit('slideNext')
    },
    handlerSwipeBack() {
      this.$refs.slider.$emit('slidePre')
    }
  },
  watch: {
    itemsQuantity: function(itemsQuantity) {
      this.$refs.slider.$emit('slideTo', 0)
      this.defaultOptions.currentPage = 0
      this.defaultOptions.slidesToScroll = itemsQuantity.slidesToScroll
      this.defaultOptions.centeredSlides = itemsQuantity.isCentered
      this.currentPage = 1
    }
  }
};
</script>

<style lang="scss" scoped>

.slider {
  width: 100%;
  @include xs() {
    width: 100vw;
  }
}

/deep/ .swiper-container-horizontal > * > .slider-wrapper, .swiper-container-vertical > * > .slider-wrapper {
  align-items: start;
}
</style>
