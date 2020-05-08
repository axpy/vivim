<template>
  <BlogParagraph
    :config="config"
    class="blog-note"
  />
</template>

<script>
/*
  Config props:

  config - REQUIRED

*/
import BlogParagraph from '~/components/ui/BlogParagraph'

export default {
  name: 'BlogNote',
  components: {
    BlogParagraph
  },
  props: {
    config: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.blog-note {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: inherit;
  padding: 3rem;
  background-color: $color-light-2;
  font-size: 2.4rem;
  line-height: 3.2rem;
  color: $color-dark-3;
  width: 85rem;
  border-radius: 1rem;
  margin: 3rem 17.5rem;

  @include l {
    margin: 2rem 5rem;
    font-size: 2rem;
    line-height: 2.4rem;
  }

  @include s {
    padding: 2rem;
    width: 65rem;
  }

  @include xs {
    width: auto;
    margin: 2rem 1rem;
    font-size: 1.6rem;
    line-height: 2rem;
  }
}
</style>