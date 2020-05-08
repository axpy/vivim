<template>
  <BaseButton :method="openModal">
    {{ buttonText }}
  </BaseButton>
</template>

<script>
import BaseButton from '~/components/ui/BaseButton'

export default {
  name: 'ContactsFormModalInvoker',
  components: {
    BaseButton
  },
  props: {
    buttonText: {
      type: String,
      required: true
    },
    isColumn: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    openModal() {
      this.$store.dispatch('modal/openModal', !this.isColumn ? 'Contacts' : {
        modalComponent: 'Contacts',
        modalComponentType: 'column'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
</style>