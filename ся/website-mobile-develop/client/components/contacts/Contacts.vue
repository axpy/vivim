<template>
  <div :class="contactsClass">
    <BaseForm
      class="contacts__form"
      :config="formConfig"
    >
      <div class="contacts__circle">{{$t('homepage.contacts.or')}}</div>
    </BaseForm>
    <LinksBlock
      class="contacts__links-block"
      :mobileLinksEntitled="true"
      :waveBackground="waveBackground"
      :mobileLinksType="type"
      :title="title"
      :SDKType="type"
    />
  </div>
</template>

<script>
import BaseForm from '~/components/ui/BaseForm'
import LinksBlock from '~/components/tryit/LinksBlock'

export default {
  name: 'Contacts',
  components: {
    BaseForm,
    LinksBlock
  },
  props: {
    type: {
      type: String,
      default: 'row'
    }
  },
  computed: {
    title() {
      return this.type === 'row' ? this.$t(`homepage.try_it.get_app`) : this.$t(`homepage.try_it.try_now`)
    },
    waveBackground() {
      return this.type === 'row'
    },
    contactsClass() {
      return ['contacts', 'contacts--' + this.type]
    },
    formConfig() {
      return {
        type: this.type,
        title: this.$t('homepage.contacts.title'),
        buttonName: this.$t('homepage.buttons.send')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.contacts {
  display: flex;
  max-width: 96vw;
  @include m {
    flex-direction: column;
  }
  @include s {
    min-width: 25rem;
    flex-wrap: wrap;
  }
  &__form {
    width: 60rem;
    @include m {
      width: 100%;
    }
  }
  &__links-block {
    width: 46rem;
    background-color: $color-light-2;
    @include m {
      width: 100%;
    }
  }
  &__circle {
    position: absolute;
    width: 5rem;
    height: 5rem;
    right: -2.5rem;
    top: calc(50% - 2rem);
    box-shadow: $box-shadow-primary;
    border-radius: 50%;
    z-index: $z-low;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: $color-white;
    @include m {
      right: calc(50% - 2rem);
      bottom: -2rem;
      top: auto;
    }
  }
  &--column {
    max-width: 78.3rem;
    flex-direction: column-reverse;
    @include xs {
      max-width: none;
    }
    .contacts {
      &__circle {
        right: calc(50% - 2rem);
        top: -2rem;
      }
      &__form {
        width: 100%;
      }
      &__links-block {
        background-color: $color-white;
        width: 100%;
      }
    }
  }
}
</style>