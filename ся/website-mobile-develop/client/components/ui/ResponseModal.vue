<template>
  <div :class="['response-modal', {'response-modal--question-view': isQuestionView}]">
    <div class="response-modal__icon-block">
      <div class="response-modal__icon-wrapper">
        <IconSmile
          v-if="isSuccess"
          class="gtm-trigger_form-tnx"
          />
        <IconSad v-else />
      </div>
    </div>
    <div class="response-modal__text">
      <h3 class="response-modal__text-header">{{ isSuccess ? $t('homepage.success_label.thanks') : $t('homepage.error_label.error') }}</h3>
      <h6 class="response-modal__text-main">
        {{
          isSuccess ?
          $t('homepage.success_label.contact_form_success_label') :
          $t('homepage.error_label.contact_form_error_label')
        }}
      </h6>
    </div>
    <div
      v-if="!isQuestionView"
      class="response-modal__btn-block"
    >
      <BaseButton
        :method="closeModal"
        class="response-modal__btn"
      >
        {{ $t('homepage.buttons.back_to_main_page') }}
      </BaseButton>
      <BaseButton
        v-if="!isSuccess"
        :method="backToForm"
        class="response-modal__btn"
      >
        {{ $t('homepage.buttons.back_to_form') }}
      </BaseButton>
    </div>
  </div>
</template>

<script>
import BaseButton from '~/components/ui/BaseButton'
import IconSmile from '~/components/icons/IconSmile'
import IconSad from '~/components/icons/IconSad'

export default {
  name: 'ResponseModal',
  components: {
    BaseButton,
    IconSmile,
    IconSad
  },
  props: {
    isSuccess: {
      type: Boolean,
      required: true
    },
    isQuestionView: {
      type: Boolean,
      default: false
    },
  },
  methods: {
    closeModal() {
      this.$store.dispatch('modal/closeModal')
    },
    backToForm() {
      this.$emit('return')
    }
  }
}
</script>

<style lang="scss" scoped>
.response-modal {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;

  &--question-view {
    padding: 14rem 0;

    @include l {
      padding: 12rem 0;
    }
            
    @include m {
      padding: 10rem 0;
    }
        
    @include s {
      padding: 5rem 0;
    }
    
    @include xs {
      padding: 0;
    }
  }

  &__icon-block {
    height: 45%;
    display: flex;
    align-items: flex-end;
  }

  &__icon-wrapper {
    width: 12rem;
    height: 12rem;
    margin-bottom: 4rem;

    @include xs {
      width: 10rem;
      height: 10rem;
      margin-bottom: 3rem;
    }

    @include xxs {
      width: 8rem;
      height: 8rem;
      margin-bottom: 2rem;
    }
  }

  &__text {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    margin: 0 7.2rem 3.2rem;

    @include m {
      margin: 0 0 3.2rem;
    }

    @include xxs {
      margin: 0 0 1.6rem;
    }

    &-header {
      font-family: 'Montserrat';
      line-height: 7.2rem;
      font-weight: bold;
      margin-bottom: 1.6rem;

      @include l {
        font-size: 4.8rem;
      }

      @include xs {
        font-size: 2.4rem;
        line-height: 2.9rem;
      }
    }

    &-main {
      text-align: center;
      line-height: 2.6rem;

      @include m {
        max-width: 40rem;;
      }
      
      @include xs {
        font-size: 1.4rem;
        line-height: 1.8rem;
      }
    }
  }

  &__btn-block {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  &__btn {
    margin: 0 2rem;

    @include xs {
      font-size: 1.4rem;
      line-height: 1.8rem;
    }

    @include xxs {
      font-size: 1.4rem;
      line-height: 1.4rem;
    }
  }
}
</style>
