<template>
  <picture :class="`img--${pictureType}`">
    <source
      v-for="(source, index) in sourceList"
      :key="index"
      :srcset="source.srcset"
      :media="source.media"
      :type="source.type"
    />
    <img
      loading="lazy"
      :src="config.defaultSrc ? config.defaultSrc : `images/${config.image}`"
      :alt="config.alt"
      :class="`img--${pictureType}`"
    />
  </picture>
</template>

<script>
export default {
  name: 'BasePicture',
  props: {
    config: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      imageWitdthScreenResolutionMap: [
        [1400, 1367],
        [1200, 1200],
        [1000, 1024],
        [600, 600],
        [600, 500],
        [400, 400],
        [400, 300],
        [0, 1368]
      ],
      pictureType: 'default',
      ...this.config
    }
  },
  computed: {
    sourceList() {
      const [imageName, extension] = this.config.image.split('.')
      return this.imageWitdthScreenResolutionMap.map(([imageWidth, screenWidth]) => {
        return {
          srcset: `images-optimized/${imageName}/${imageName}-${imageWidth ? imageWidth : 'default'}.${extension}`,
          type: extension === 'png' ? 'image/png' : 'image/jpeg',
          media: `(${imageWidth ? 'min' : 'max'}-width: ${screenWidth}px)`
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.img {
  &--default {
    display: flex;
    align-items: flex-end;
    justify-content: center;
    height: auto;
  }

  &--two-corner-rounded {
    width: 100%;
    border-radius: 6rem 0;
    max-width: 89rem;
  }

  &--one-corner-rounded {
    border-radius: 6rem 0 0;
    width: 100%;
    @include s {
      border-radius: 9rem 0 0;
    }
    @include xs {
      border-radius: 7rem 0 0;
    }
    @include xxs {
      border-radius: 6rem 0 0;
    }
  }

  &--rounded {
    border-radius: 6rem 0;
  }

  &--blog-rounded {
    border-radius: 6rem 0;
    max-height: 40rem;
    width: 100%;
  }

  &--reverse-rounded {
    border-radius: 0 7rem;
  }

  &--small-blog {
    border-radius: 1rem;
    object-fit: cover;
    height: 40rem;
    width: 85rem;

    @include s {
      width: 100%;
    }
  }

  &--medium-blog {
    border-radius: 1rem;
    object-fit: cover;
    height: 48rem;
    width: 85rem;
    @include s {
      width: 100%;
    }
  }

  &--wave {
    &--default {
      position: absolute;
      height: 100%;
      width: 100%;
      bottom: 0;
      left: 0;

      @include xs {
        top: 0;
      }
    }

    &--cutted {
      position: absolute;
      height: 90%;
      width: 70%;
      bottom: 5%;
      left: -5%;

      @include l {
        width: 80%;
        left: -15%;
      }

      @include xs {
        display: none;
      }
    }
  }

  &--auto {
    height: inherit;
    width: auto;
    
    @include xs {
      height: auto;
      width: 24rem;
    }
  }

  &--half-cutted {
    object-fit: cover;
    object-position: center top;
    width: 30rem;
    height: 27rem;

    @include s {
      width: 25rem;
      height: 22rem;
    }

    @include xs {
      width: 20rem;
      height: 18rem;
    }
  }

  &--left-shifted {
    object-fit: cover;
    object-position: center right;
    height: 55rem;
  }

  &--right-shifted {
    object-fit: cover;
    object-position: center left;
    height: 55rem;
  }
}
</style>
