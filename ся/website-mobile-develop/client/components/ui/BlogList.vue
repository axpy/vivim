<template>
  <div class="blog-list">
    <div class="blog-list__title">{{ header }}</div>
    <BlogListItem
      v-for="(config, index) in itemsConfig"
      :key="index"
      :config="config"
    />
  </div>
</template>

<script>
/*
  Config props:

  header - REQUIRED
  listItems - REQUIRED

*/
import BlogListItem from '~/components/ui/BlogListItem'

export default {
  name: 'blogList',
  components: {
    BlogListItem
  },
  props: {
    config: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      isOrdered: false,
      ...this.config
    }
  },
  computed: {
    itemsConfig() {
      return this.isOrdered ?
        this.listItems.map((item, index) => {
          return {
            ...item,
            index: `${index + 1}.`
          }
        }) :
        this.listItems
    }
  }
}
</script>

<style lang="scss" scoped>
.blog-list {
  padding: 3rem 17.5rem;
  height: 100%;

  @include l {
    padding: 2rem 5rem;
  }

  @include xs {
    padding: 2rem 1rem;
  }

  &:not(:last-child) {
    margin-bottom: 2.4rem;

    @include xs {
      margin-bottom: 1.6rem;
    }
  }

  &__title {
    margin-bottom: 2.4rem;
    max-width: 85rem;
    font-family: 'Montserrat';
    font-weight: bold;
    font-size: 2.4rem;
    line-height: 3rem;
    color: $color-dark-6;

    @include s {
      font-size: 2.2rem;
      line-height: 2.4rem;
    }

    @include xs {
      font-size: 2rem;
      line-height: 2.2rem;
      margin-bottom: 1.6rem;
    }
  }
}
</style>