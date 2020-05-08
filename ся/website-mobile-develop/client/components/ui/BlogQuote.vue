<template>
  <div class="blog-quote">
    <div class="blog-quote__icon">
      <IconQuotes />
    </div>
    <div class="blog-quote__content">
      <span class="blog-quote__title">{{ title }}</span>
      <BlogParagraph
        :config="description"
        class="blog-quote__description"
      />
    </div>
  </div>
</template>

<script>
/*
  Config props:

  title - OPTIONAL
  icon - IconNumber [other]
  description - OPTIONAL
  titleSize - OPTIONAL
  iconSize - medium [big]
  iconBGColor - default [dark, light]
  layout - default [left]

*/
import IconQuotes from '~/components/icons/IconQuotes'
import BlogParagraph from '~/components/ui/BlogParagraph'

export default {
  name: 'BlogQuote',
  components: {
    IconQuotes,
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
.blog-quote {
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  text-align: center;
  align-items: center;
  padding: 6rem;
  background: $color-white;
  box-shadow: $box-shadow-blog;
  border-radius: 10px;
  margin-bottom: 3rem;

  @include l {
    padding: 4rem;
  }

  @include s {
    padding: 2rem;
    margin: 0 5rem 3rem;
  }

  @include xs {
    margin: 0 1rem 2rem;
    padding: 2rem 1rem;
  }

  &__icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 4rem;
    margin-bottom: 2rem;

    @include xs {
      margin-bottom: 1.6rem;
    }

    & img {
      width: 4rem;
    }
  }

  &__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 85rem;
  }

  &__title {
    font-weight: bold;
    font-family: 'Montserrat';
    margin-bottom: 2.4rem;
    font-size: 2.4rem;
    line-height: 3.2rem;
    color: $color-dark-6;

    @include s {
      font-size: 2.2rem;
      line-height: 2.2rem;
    }

    @include xs {
      font-size: 2rem;
      line-height: 2rem;
    }
  }

  &__description {
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
  }
}
</style>