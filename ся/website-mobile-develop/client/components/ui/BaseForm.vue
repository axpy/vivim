<template>
  <div :class="`base-form base-form--${type}`">
    <slot />
    <div v-if="!isFormSubmitted">
      <h4 
        v-if="type === 'column'" 
        class="base-form__alt-title"
      >
        {{title}}
      </h4>
      <h2 
        v-else
        :class="titleClass"
      >
        {{title}}
      </h2>
      <form
        @submit.prevent
        class="base-form__form"
      >
        <FormField
          v-for="(field, index) in fieldList"
          :key="index"
          :field="field"
          ref="fieldList"
          @fieldChange="fieldChange"
        />
        <BaseButton
          class="base-form__button"
          :method="send"
          :type="'submit'"
          :disabled="isLoading"
        >
          {{ buttonName }}
        </BaseButton>
      </form>
    </div>
    <ResponseModal
      class="base-form__response"
      v-else
      :isSuccess="isRequestSuccessfull"
      :isQuestionView="type==='rounded'"
      @return="hideResponseModal"
    />
  </div>
</template>

<script>
import BaseButton from '~/components/ui/BaseButton'
import FormField from '~/components/ui/FormField'
import sendUserInfo from '~/helpers/UserService';
import ResponseModal from '~/components/ui/ResponseModal'

export default {
  name: 'BaseForm',
  components: {
    BaseButton,
    FormField,
    ResponseModal
  },
  props: {
    config: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      name: '',
      email: '',
      message: '',
      isTitleSmall: true,
      isRequestSuccessfull: false,
      errorData: {
        isNotServerError: false
      },
      isFormSubmitted: false,
      isLoading: false,
      type: 'rounded',
      ...this.config
    }
  },
  computed: {
    fieldList() {
      return [
        {
          class: 'base-form__field',
          type: 'text',
          title: this.$t('form_labels.name'),
          id: `name-${this.type}`,
          name: 'name',
          value: this.name,
          fieldName: 'input'
        },
        {
          class: 'base-form__field',
          type: 'email',
          title: this.$t('form_labels.email'),
          id: `email-${this.type}`,
          name: 'email',
          value: this.email,
          fieldName: 'input'
        },
        {
          class: 'base-form__field base-form__field--long',
          type: 'text',
          title: this.$t('form_labels.message'),
          id: `message-${this.type}`,
          name: 'message',
          value: this.message,
          fieldName: 'textarea'
        },
      ]
    },
    titleClass() {
      return ['base-form__title', {'base-form__title--small': this.isTitleSmall}]
    }
  },
  methods: {
    async send() {
      let isValidFields = !this.$refs.fieldList.some(ref => ref.errorType || (!ref.errorType && !this[ref.field.name]))
      if (isValidFields) {
        const userInfo = {
          name: this.name,
          email: this.email,
          message: this.message
        }
        try {
          this.isLoading = true
          await sendUserInfo(userInfo)
          this.onSuccessRequest()
          this.isLoading = false
        } catch(error) {
          this.isLoading = false
          this.onFailedRequest(error)
        }
      } else {
         this.$refs.fieldList.forEach(ref => {
          if (!ref.errorType && !this[ref.field.name]) {
            ref.errorType = 'required'
          }
        })
      }
    },
    fieldChange(valueName, value) {
      this[valueName] = value
    },
    onSuccessRequest() {
      this.isFormSubmitted = true
      this.isRequestSuccessfull = true
    },
    onFailedRequest() {
      this.isFormSubmitted = true
    },
    hideResponseModal() {
      this.isFormSubmitted = false
    }
  }
}
</script>

<style lang="scss" scoped>
.base-form {
  padding: 6.4rem 4.8rem;
  background-color: $color-white;
  position: relative;
  z-index: $z-low-below;
  &__background {
    top: auto;
    bottom: 0;
    z-index: $z-default-below;
  }
  @include xs {
    padding: 4.8rem 1rem;
  }
  &__title, &__alt-title {
    margin: 0;
    z-index: $z-default-above;
    text-align: center;
    position: relative;
  }
  &__title {
      @include s {
        line-height: 3.2rem;
      }
    
    &--small {
      font-size: 2.4rem;
      line-height: 3.4rem;
      @include l {
        font-size: 1.8rem;
        line-height: 2.2rem;
      }
      @include xs {
        font-size: 1.6rem;
        line-height: 1.9rem;
      }
    }
  }
  &__alt-title {
    font-size: 2.4rem;
    line-height: 3rem;
    @include l {
      font-size: 2.2rem;
    }
    @include xs {
      font-size: 1.6rem;
    }
  }
  &__form {
    display: flex;
    flex-direction: column;
    z-index: $z-default-above;
  }
  &__field {
    width: 100%;
    padding-top: 5rem;
    flex: 1 100%;
  }
  &__button {
    margin: 4rem auto 0;
    z-index: $z-default-above;
    align-self: center;
    width: 20.8rem;
  }
  &--rounded {
    padding: 5.6rem 8.2rem;
    border-radius: 0 0 0 5.6rem;
    @include l {
      padding: 5.6rem 6.8rem;
    }

    @include s {
      padding: 5.6rem 5rem;
    }

    @include xs {
      padding: 4.8rem 1.6rem;
    }
  }
  &--column {
    background-color: $color-light-2;
    .base-form {
      &__title {
        font-size: 3.4rem;
      }
      &__form {
        flex-direction: row;
        flex-wrap: wrap;
      }
      &__field {
        flex: 1 45%;
        &:first-child {
          margin-right: 1.6rem;
        }

        &--long {
          flex: 1 100%;
        }
      }
    }
  }
  &--row {
    .base-form {
      &__title {
        @include m {
          font-size: 2.4rem;
        }
      }
    }
  }
}
</style>