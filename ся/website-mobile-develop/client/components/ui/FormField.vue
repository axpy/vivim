<template>
  <div 
    :class="['field', field.class]"
  >
    <input
      v-if="field.fieldName === 'input'"
      class="field__item  field__item--default"
      :id="field.id"
      :name="field.name"
      :type="field.type"
      :value="field.value"
      @input="handleField"
      @focus="handleFocus"
      @blur="handleBlur"
    />
    <textarea
      v-if="field.fieldName === 'textarea'"
      class="field__item field__item--tall"
      :id="field.id"
      :name="field.name"
      :type="field.type"
      :value="field.value"
      @input="handleField"
      @focus="handleFocus"
      @blur="handleBlur"
    />
    <p
      v-if="errorType"
      class="field__error-description"
    >
      {{$t('validation_errors.' + errorType)}}
    </p>
    <label
      :for="field.id"
      :class="['field__label', {'field__label--focused': focusStatus}]"
    >
      {{field.title}}
    </label>
  </div>
</template>

<script>
import {validateField} from '~/helpers/validation'

export default {
  name: 'FormField',
  props: {
    field: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      focusStatus: false,
      errorType: ""
    }
  },
  methods: {
    handleField(e) {
      this.$emit('fieldChange', this.field.name, e.target.value)
      if (e.target.value) {
        this.checkValidation(e.target.value)
      }
    },
    handleFocus(e) {
      this.focusStatus = true
    },
    handleBlur(e) {
      if (!e.target.value) {
        this.focusStatus = false
      }
      this.checkValidation(this.field.value)
    },
    checkValidation(value) {
      if (!value) {
        this.errorType = 'required'
      } else if (!validateField(this.field.name, value)) {
        this.errorType = this.field.name
      } else {
        this.errorType = ''
      }
    }
  }
}
</script>


<style lang="scss" scoped>
.field {
  position: relative;
  &__item {
    width: 100%;
    outline: none;
    box-shadow: none;
    border: $border-grey;
    font-size: 1.8rem;
    line-height: 2.6rem;

    @include xs {
      height: 4.5rem;
    }

    &--default {
      height: 5.7rem;
      padding: 0 1.65rem;

      @include xs {
        height: 4.5rem;
      }
    }

    &--tall {
      height: 12rem;
      resize: none;
      padding-top: 1.6rem;
      font-family: NotoSans, sans-serif;

      @include xs {
        height: 10rem;
      }
    }
  }
  &__label {
    position: absolute;
    color: $color-grey-6;
    top: 7.8rem;
    left: 1.65rem;
    transform: translateY(-50%);
    transition: transform $transition-time-short;

    @include l {
      font-size: 1.6rem;
      line-height: 2.4rem;
    }

    @include xs {
      top: 7.3rem;
      font-size: 1.4rem;
      line-height: 2rem;
    }

    &--focused {
      transform: translate3d(-1.65rem, -5.5rem, 0);

      @include xs {
        transform: translate3d(-1.65rem, -5.2rem, 0);
      }
    }
  }
  &__error-description {
    padding-top: 0.5rem;
    font-size: 1.3rem;
    color: $color-error;
    position: absolute;
  }
}

</style>