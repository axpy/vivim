<template>
  <transition name="base-modal-transition">
    <div
      v-if="isOpen"
      class="base-modal"
      id="base-modal"
      @click="closeModal"
    >
      <div class="base-modal__background"></div>
      <div
        class="base-modal__content"
        id="base-modal__content"
        @click.stop
      >
        <IconClose
          v-if="showIconClose"
          class="base-modal__icon"
          @click.native="closeModal"
        />
        <slot />
      </div>
    </div>
  </transition>
</template>

<script>
import IconClose from '~/components/icons/IconClose'

export default {
  name: 'BaseModal',
  components: {
    IconClose,
  },
  props: {
    showIconClose: {
      type: Boolean,
      default: true
    },
    isOpen: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    closeModal() {
      this.$store.dispatch('modal/closeModal')
    }
  },
  watch: {
    isOpen(val) {
      if (val) {
        document.body.style.overflow = 'hidden'
      } else {
        document.body.style.overflow = 'auto'
      }
    }
  }
}
</script>
<style lang="scss" scoped>

.base-modal, .base-modal__background{
  position: fixed;
  left:0;
  top:0;
  width: 100vw;
  height: 300vh;
  z-index: $z-wrapper-above;
}
.base-modal {
  display:flex;
  width:100%;
  align-items: center;
  justify-content: center;
  z-index: $z-modal-above;
  height: 100%;
  transition: opacity $transition-time-short ease-out, transform $transition-time-short ease-out;
  &__background {
    background: rgba(10,10,10,0.6);
    z-index: $z-modal-below;
  }
  &__content {  
    background-color: #fff;
    z-index: $z-modal-above;
    position: relative;
    overflow-y: auto;
    max-height: calc(100% - 10rem);
  }
  &__icon {
    z-index: $z-modal-above;
    position: absolute;
    top: 2.4rem;
    right: 2.4rem;

    &--outside {
      top: -2.4rem;
      right: -2.4rem;
      color: $color-white;
    }
  }
}

.base-modal-transition-enter-active{
  opacity: 1;
}
.base-modal-transition-enter{
  opacity: 0;
}
.base-modal-transition-leave-active{
  opacity: 0;
}
.base-modal-transition-leave{
  opacity: 1;
}

</style>