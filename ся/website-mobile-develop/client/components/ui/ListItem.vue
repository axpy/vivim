<template>
  <div class="list-item">
    <component
      v-if="icon"
      :is="icon"
      class="list-item__icon"
    />
    <span class="list-item__text">
      <span
        class="list-item__text--customized"
      >
        {{ text | customize }}
      </span>
      {{ text | cut }}
    </span>
  </div>
</template>

<script>
/*
  Config props:

  title - REQUIRED
  icon - REQUIRED

*/
import IconSolutionsType from '~/components/icons/IconSolutionsType'
import IconIndustriesType from '~/components/icons/IconIndustriesType'

export default {
  name: 'ListItem',
  components: {
    IconSolutionsType,
    IconIndustriesType
  },
  props: {
    config: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      icon: 'IconIndustriesType',
      ...this.config
    }
  },
  filters: {
    customize: function (value) {
      if (!value || !value.includes('—')) {
        return ''
      } else {
        return value.split('—')[0]
      }
    },
    cut: function (value) {
      if (!value || !value.includes('—')) {
        return value
      } else {
        return `— ${value.split('—')[1]}`
      }
    },
  }
}
</script>

<style lang="scss" scoped>
.list-item {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;

  &:not(:last-child) {
    margin-bottom: 2.4rem;

    @include l {
      margin-bottom: 1.5rem;
    }

    @include m {
      margin-bottom: 1.4rem;
    }
  }

  &__icon {
    flex-shrink: 0;
    margin: 1.1rem 1.6rem 0 0;

    @include l {
      margin: 1.1rem 1.2rem 0 0;
    }

    @include xs {
      margin: .6rem 1.6rem 0 0;
    }
  }

  &__text {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    font-size: 1.8rem;
    line-height: 2.6rem;

    @include xl {
      font-size: 1.6rem;
      line-height: 2.2rem;
    }
  
    @include xs {
      font-size: 1.4rem;
      line-height: 2rem;
    }

    &--customized {
      font-weight: bold;
      color: $color-primary;
      font-size: 3.2rem;
      line-height: 3.2rem;
      margin-right: .5rem;

      @include l {
        font-size: 2.5rem;
        line-height: 2.4rem;
      }

      @include xs {
        font-size: 2.2rem;
      }

      @include xxs {
        font-size: 1.8rem;
        line-height: 2rem;
      }
    }
  }
}
</style>