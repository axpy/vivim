<template>
  <div class="slider">
    <Slider ref="slider" :options="defaultOptions">
      <SliderItem
        v-for="(item, index) in items"
        :key="index"
        style="width: 35%; margin-right: 2rem;"
      >
        <span class="text">
          {{ item }}
        </span>
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
    }
  },
  data() {
    return {
      defaultOptions: {
        currentPage: 0,
        loop: true,
        loopedSlides: 1,
        slidesToScroll: 1,
        timingFunction: "ease",
        speed: 300,
        pagination: false,
        ...this.$props.options
      },
      items: [
        "Fintech & Banking",
        "Travel & hospitality",
        "Telcos",
        "Insurance",
        "Education",
        "Fintech & Banking1",
        "Travel & hospitality2",
        "Telcos3",
        "Insurance3",
        "Education3"
      ]
    };
  }
};
</script>

<style lang="scss">
.slider {
  width:100%;
  margin:20px auto;
  height:400px
}
.item {
  height: 5rem;
}
.text {
  color: #222;
  background-color: $color-light-3;
  height: 5rem;
  display: block;
}
</style>
