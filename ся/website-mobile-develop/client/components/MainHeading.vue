<template>
  <h1 class="main-heading">
    <span>{{ config.text_1 }}</span>
    <span class="main-heading__word--em">{{ config.text_2 }}</span><span>{{ config.text_3 }}</span>
  </h1>
</template>

<script>
export default {
  name: 'MainHeading',
  props: {
    config: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.main-heading {
  font-size: 5.6rem;
  line-height: 6.8rem;
  &:lang(en) {
    width: 60rem;
    @include xl {
      width: 58rem;
    }
    @include l {
      width: 55rem;
    }
    @include s {
      width: 100%;
    }
    @include xs {
      width: 28rem;
    }
  }
  @include l {
    font-size: 4.8rem;
    line-height: 4.8rem;
  }
  @include xs {
    font-size: 2.4rem;
    line-height: 3.2rem;
  }
  
  &__word--em {
    color: $color-primary;
  }
}
</style>
