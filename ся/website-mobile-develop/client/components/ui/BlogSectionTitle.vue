<template>
  <div :class="sectionTitleClass">
    <h3 class="blog-section-title__title">{{ text }}</h3>
    <div
      v-if="subHeaderText"
      class="blog-section-title__sub-title"
    >
      {{ subHeaderText }}
    </div>
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
  name: 'BlogSectionTitle',
  props: {
    config: {
      type: Object,
      required: true
    }
  },  
  data() {
    return {
      subHeaderText: '',
      alignment: 'default',
      ...this.config
    }
  },
  computed: {
    sectionTitleClass() {
      return ['blog-section-title', `blog-section-title--${this.alignment}`]
    }
  }
}
</script>

<style lang="scss" scoped>
.blog-section-title {
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: $z-low-below;

  &--default {
    text-align: center;
    align-items: center;
    padding: 6rem 40rem;
    
    @include l {
      padding: 4rem 10rem;
    }
  
    @include s {
      padding: 2rem 5rem;
    }
  
    @include xs {
      padding: 3rem 2rem;
    } 
  }

  &--left {
    text-align: left;
    align-items: flex-start;

    @include xs {
      text-align: center;
      align-items: center;
    }
  }

  &__title {
    font-size: 4rem;
    line-height: 5.6rem;
    max-width: 40rem;
    color: $color-dark-6;

    @include l {
      font-size: 4.8rem;
      line-height: 5.8rem;
    }
    
    @include s {
      font-size: 3.5rem;
      line-height: 3.5rem;
    }

    @include xs {
      font-size: 3rem;
      line-height: 3.2rem;
    }

    @include xxs {
      font-size: 2.4rem;
      line-height: 2.5rem;
    }
  }

  &__sub-title {
    margin-top: 2.4rem;
    font-size: 1.8rem;
    line-height: 2.6rem;
    color: $color-dark-1;
    max-width: 40rem;
    color: $color-dark-3;

    @include l {
      font-size: 1.6rem;
      line-height: 2.4rem;
    }

    @include xs {
      font-size: 1.4rem;
      line-height: 2rem;
      margin-top: 1.6rem;
    }
  }
}
</style> 