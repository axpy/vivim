<template>
  <div class="blog-page-start-header">
    {{ text }}
  </div>
</template>

<script>
/*
  Config props:

  text - REQUIRED
  indentation - none [large, big, medium, small]
  alignment - center [left, right]
  subHeaderText - OPTIONAL
  subHeaderStyle - OPTIONAL

*/
export default {
  name: 'BlogPageStartHeader',
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
  },
}
</script>

<style lang="scss" scoped>
.blog-page-start-header {
  font-weight: 700;
  z-index: $z-low-below;
  margin: 1rem 0 7rem;
  max-width: 85rem;
  text-align: left;
  font-size: 6.4rem;
  line-height: 7.8rem;

  @include l {
    font-size: 5.8rem;
    line-height: 6.8rem;
    margin: 1rem 0 3rem;
  }

  @include s {
    margin: 1rem 5rem 3rem;
    width: auto;
  }

  @include xs {
    margin: 1rem 1rem 3rem;
    text-align: center;
    font-size: 3.5rem;
    line-height: 3.5rem;
  }

  @include xxs {
    font-size: 2.6rem;
    line-height: 2.9rem;
  }
}
</style> 