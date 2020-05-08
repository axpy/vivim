<template>
  <div class="sticky-block">
    <ContactsFormModalInvoker
      class="sticky-block__button"
      :buttonText="$t('homepage.header.controls.cta')"
    />
  </div>
</template>

<script>
import ContactsFormModalInvoker from '~/components/ui/ContactsFormModalInvoker'

export default {
  name: 'StickyBlock',
  components: {
    ContactsFormModalInvoker
  }
}
</script>

<style lang="scss" scoped>
  .sticky-block {
    position: sticky;
    bottom: 0;
    z-index: $z-wrapper-above;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 0 1.6rem;
    background-color: $color-light-2;
    border-top: .2rem solid $color-light-3;
    &__button {
      margin: 2rem auto;
      width: 100%;
      max-width: 36rem;
      min-width: 20rem;
      @include l {
        font-size: 1.4rem;
        padding: 1rem 1.5rem;
        line-height: 1.8rem;
      }
    }
  }
</style>