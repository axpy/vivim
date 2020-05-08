<template>
  <div :class="headerClass">
    <h3 class="base-header__title">{{ text }}</h3>
    <div
      v-if="subHeaderText"
      :class="subHeaderClass"
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
  name: 'BaseHeader',
  props: {
    config: {
      type: Object,
      required: true
    }
  },  
  data() {
    return {
      indentation: '',
      alignment: 'center',
      subHeaderStyle: 'default',
      subHeaderText: '',
      width: 'wide',
      ...this.config
    }
  },
  computed: {
    headerClass() {
      return [
        'base-header',
        `base-header--${this.indentation}`,
        `base-header--${this.width}`,
        `base-header--${this.alignment}`
      ]
    },
    subHeaderClass() {
      return ['base-header__sub-title', `base-header__sub-title--${this.subHeaderStyle}`]
    }
  }
}
</script>

<style lang="scss" scoped>
.base-header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: $z-low-below;

  &--wide {
    max-width: 125.6rem;
  }

  &--narrow {
    max-width: 70rem;
  }

  &--large {
    margin-bottom: 9.6rem;

    @include l {
      margin-bottom: 5.6rem;
    }
    @include xs {
      margin-bottom: 3.2rem;
    }
  }

  &--big {
    margin-bottom: 7.2rem;

    @include l {
      margin-bottom: 5.6rem;
    }
    @include xs {
      margin-bottom: 3.2rem;
    }
  }

  &--l-medium {
    margin-bottom: 6.4rem;

    @include l {
      margin-bottom: 4.8rem;
    }
    @include xs {
      margin-bottom: 3.2rem;
    } 
  }

  &--x-medium {
    margin-bottom: 6rem;

    @include l {
      margin-bottom: 4.5rem;
    }
    @include xs {
      margin-bottom: 3.2rem;
    } 
  }

  &--medium {
    margin-bottom: 5.6rem;

    @include l {
      margin-bottom: 4rem;
    }
    @include xs {
      margin-bottom: 3.2rem;
    }
  }
  &--small {
    margin-bottom: 2.4rem;

    @include xs {
      margin-bottom: 1.6rem;
    }
  }
  &--default {
    margin-bottom: 0;
  }

  &--center {
    text-align: center;
    align-items: center;
  }

  &--left {
    text-align: left;
    align-items: flex-start;

    @include s {
      align-items: center;
      text-align: center;
    }
  }

  &--reverse-left {
    align-items: center;
    text-align: center;

    @include xs {
      text-align: left;
      align-items: flex-start;
    }
  }

  &__title {
    font-family: 'Montserrat';

    @include l {
      font-size: 4.8rem;
      line-height: 5.8rem;
    }

    @include xs {
      font-size: 2.4rem;
      line-height: 2.9rem;
    }
  }

  &__sub-title {
    margin-top: 2.4rem;
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

    &--default {
      color: $color-dark-1;
    }

    &--lighten {
      color: $color-dark-2;
    }

    @include xs {
      margin-top: 1.6rem;
    }
  }
}
</style> 