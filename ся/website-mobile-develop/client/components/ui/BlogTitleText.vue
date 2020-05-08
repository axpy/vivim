<template>
  <div class="blog-title-text">
    <div class="blog-title-text__item">
      <p :class="titleClass"> {{ title }} </p>
      <BlogParagraph
        v-for="(config, index) in descriptionConfig"
        :key="index"
        :config="config"
      />
    </div>
  </div>
</template>

<script>
/*
  Config props:

  title - REQUIRED
  icon - IconSolutionsType [IconNumber]
  description - OPTIONAL

*/
import BlogParagraph from '~/components/ui/BlogParagraph'

export default {
  name: 'BlogTitleText',
  components: {
    BlogParagraph
  },
  props: {
    config: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      titleSize: 'medium',
      ...this.config
    }
  },
  computed: {
    titleClass() {
      return ['blog-title-text__title', `blog-title-text__title--${this.titleSize}`]
    },
    descriptionConfig() {
      return Array.isArray(this.description) ? this.description : [this.description]
    }
  }
}
</script>

<style lang="scss" scoped>
.blog-title-text {
  margin: 3rem 17.5rem;

  @include l {
    margin: 2rem 5rem;
  }

  @include xs {
    margin: 2rem 1rem;
  }

  &__title {
    margin-bottom: 2.4rem;
    font-weight: 700;
    color: $color-dark-6;

    @include xs {
      margin-bottom: 1.6rem;
    }

    &--medium {
      font-size: 4rem;
      line-height: 5.6rem;

      @include l {
        font-size: 3rem;
        line-height: 3.8rem;
      }

      @include s {
        font-size: 2.6rem;
        line-height: 3.2rem;
      }
  
      @include xs {
        font-size: 2.4rem;
        line-height: 2.9rem;
      }

      @include xxs {
        font-size: 2rem;
        line-height: 2.2rem;
      }
    }

    &--small {
      font-size: 2.4rem;
      line-height: 3.2rem;

      @include s {
        font-size: 2.2rem;
        line-height: 2.4rem;
      }

      @include xs {
        font-size: 2rem;
        line-height: 2.2rem;
      }

      @include xxs {
        font-size: 1.8rem;
        line-height: 2rem;
      }
    }
  }

  &__item {
    max-width: 85rem;
  }
}
</style>