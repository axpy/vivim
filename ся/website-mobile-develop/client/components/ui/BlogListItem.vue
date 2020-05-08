<template>
  <div class="blog-list-item">
    <span v-if="index">{{ index }}</span>
    <div
      v-else
      class="blog-list-item__bullet"
    ></div>
    <div class="blog-list-item__content">
      <span
        v-if="title"
        class="blog-list-item__title"
      >
        {{ title }}
      </span>
      <div class="blog-list-item__description">
        <BlogParagraph
          v-for="(config, index) in descriptionConfig"
          :key="index"
          :config="config"
        />
      </div>
    </div>
  </div>
</template>

<script>
/*
  Config props:

  title - REQUIRED
  description - OPTIONAL

*/
import BlogParagraph from '~/components/ui/BlogParagraph'

export default {
  name: 'BlogListItem',
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
      index: '',
      title: '',
      description: '',
      ...this.config
    }
  },
  computed: {
    descriptionConfig() {
      return !this.description ? null : Array.isArray(this.description) ? this.description : [this.description]
    }
  }
}
</script>

<style lang="scss" scoped>
.blog-list-item {
  display: flex;
  justify-content: flex-start;
  max-width: 85rem;

  &:not(:last-child) {
    margin-bottom: 2.4rem;
    
    @include xs {
      margin-bottom: 1.6rem;
    }
  }

  &__bullet {
    width: .6rem;
    min-width: .6rem;
    height: .6rem;
    min-height: .6rem;
    border-radius: 50%;
    background-color: $color-dark-4;
    margin-top: 1rem;
  }

    &__title {
    font-weight: bold;
    font-size: 1.8rem;
    line-height: 2.6rem;

    @include l {
      font-size: 1.6rem;
      line-height: 2.4rem;
    }

    @include xs {
      font-size: 1.4rem;
      line-height: 2rem;
    }
  }

  &__content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    margin-left: .8rem;
  }

  &__description {
    margin-top: .8rem;
    color: $color-dark-3;

    &:first-child {
      margin-top: 0;
    }
  }
}
</style>