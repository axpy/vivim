<template>
  <div class="blog-code-fragment">
    <div class="blog-code-fragment__item">
      <BlogParagraph
        :config="title"
        class="blog-code-fragment__title"
      />
      <component
        class="blog-code-fragment__icon"
        :is="icon"
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
import IconBlogCode_1 from '~/components/icons/IconBlogCode_1'
import IconBlogCode_2 from '~/components/icons/IconBlogCode_2'
import BlogParagraph from '~/components/ui/BlogParagraph'

export default {
  name: 'BlogCodeFragment',
  components: {
    IconBlogCode_1,
    IconBlogCode_2,
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
      ...this.config
    }
  }
}
</script>

<style lang="scss" scoped>
.blog-code-fragment {
  padding: 3rem 17.5rem;

  @include l {
    padding: 2rem 5rem;
  }

  @include xs {
    padding: 2rem 1rem;
  }

  &__title {
    margin-bottom: 2.4rem;
    font-size: 1.8rem;
    line-height: 2.6rem;
    color: $color-dark-3;
  
    @include l {
      font-size: 1.6rem;
      line-height: 2.4rem;
    }
  
    @include xs {
      font-size: 1.4rem;
      line-height: 2rem;
    }

    @include xs {
      margin-bottom: 1.6rem;
    }
  }

  &__icon {
    border-radius: 1rem;
  }

  &__item {
    max-width: 85rem;
  }
}
</style>