<template>
  <div class="blog-header">
    <h3 class="blog-header__title">{{ config }}</h3>
  </div>
</template>

<script>
/*
  Config props:

  text - REQUIRED

*/
export default {
  name: 'BlogHeader',
  props: {
    config: {
      type: String,
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
.blog-header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: $z-low-below;
  max-width: 85rem;
  margin-bottom: 2.4rem;
  text-align: left;
  align-items: flex-start;
  
  @include s {
    align-items: center;
    text-align: center;
  }

  @include xs {
    margin-bottom: 1.6rem;
  }

  &__title {
    font-family: 'Montserrat';
    font-size: 2.4rem;
    line-height: 3.2rem;
    color: $color-dark-6;

    @include s {
      font-size: 2.2rem;
      line-height: 2.4rem;
    }

    @include xxs {
      font-size: 2rem;
      line-height: 2.2rem;
    }
  }
}
</style> 