<template>
  <div class="text-form-section">
    <BasePicture
      v-for="(config, index) in imageConfig"
      :key="index"
      :class="config.class"
      :config="config.config"
    />
    <ImageTextSection :config="config"/>
  </div>
</template>

<script>
/*
  Config props:

  columnsLayout - OPTIONAL
  content - REQUIRED
  headerConfig - OPTIONAL

*/

import ImageTextSection from '~/components/ImageTextSection'
import BasePicture from '~/components/ui/BasePicture'

export default {
  name: 'TextFormSection',
  components: {
    ImageTextSection,
    BasePicture
  },
  props: {
    config: {
      type: Object,
      required: true
    }
  },
  computed: {
    imageConfig() {
      return ['left', 'right'].map(side => {
        return {
          config: {
            image: 'wave-new.png',
            alt: 'Wave',
            pictureType: `${side}-shifted`
          },
          class: `text-form-section__i text-form-section__i--${side}`
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.text-form-section {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background-color: $color-light-2;

  &__i {
    position: absolute;
    width: 20%;
    bottom: 25%;

    @include s {
      display: none;
    }

    &--right {
      right: 0;
    }

    &--left {
      left: 0;
    }
  }
}
</style>