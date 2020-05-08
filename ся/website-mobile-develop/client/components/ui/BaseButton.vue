<template>
  <button
    :class="['base-button', `base-button--${btnClass}`]"
    :type="type"
    :disabled="disabled"
    @click.stop="buttonClick"
  >
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    method: Function,
    methodArguments: {
      type: Array,
      default:() => []
    },
    btnClass: {
      type: String,
      default: 'filled'
    },
    type: {
      type: String,
      default: 'button'
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    buttonClick() {
      if (!!this.method) {
        this.method(...this.methodArguments)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.base-button {
  padding: 0 2.8rem;
  height: 5.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  text-transform: capitalize;
  transition: background-color $transition-time-short;
  cursor: pointer;

  @include l {
    font-size: 1.6rem;
    line-height: 2rem;
  }
  @include xs {
    font-size: 1.4rem;
    line-height: 1.8rem;
  }

  &:disabled {
    opacity: .5;
    cursor: auto;
  }

  &--filled {
    background-color: $color-primary;
    color: $color-light-1;

    &:hover {
      background-color: $color-primary-accent;
    }
  }

  &--empty {
    background-color: transparent;
    border: .2rem solid $color-primary;
    color: $color-primary;

    @include xs {
      font-weight: 700;
    }

    &:hover {
      background-color: $color-primary;
      border-color: $color-primary;
      color: $color-light-1;
    }
  }
}
</style>
