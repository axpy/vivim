<template>
  <div :class="['solutions-info', {'solutions-info--reverse': type === 'authentication'}]">
    <div class="solutions-info__image-wrapper">
      <BasePicture :config="solutionObject.imageConfig"/>
    </div>
    <div class="solutions-info__content">
      <h4 class="solutions-info__title">
        {{$t(`homepage.solutions.${type}`)}}
      </h4>
      <div class="solutions-info__items">
        <div
          v-for="solution in solutionObject.solutions"
          :key="solution"
          :class="['solutions-info-item', {'solutions-info-item--lightening' : solutionsKeys[solution].inactive}]"
        >
          <div class="solutions-info-item__icon">
            <component :is="solutionsKeys[solution].icon" />
          </div>
          <div class="solutions-info-item__content">
            <div class="solutions-info-item__title">
              <BaseLink
                v-if="solution==='mrz_reading'"
                class="solutions-info-item__title--link"
                to="mrz-reader"
              >
                {{$t(`homepage.solutions.${solution}.title`)}}
              </BaseLink>
              <span
                v-else
                class="solutions-info-item-title-wrapper"
              >
                {{$t(`homepage.solutions.${solution}.title`)}}
                <span
                  v-if="solutionsKeys[solution].inactive"
                  class="solutions-info-item-additional-title"
                >
                  {{$t('homepage.solutions.coming_soon')}}
                </span>
              </span>
              <IconTriangle
                v-if="!solutionsKeys[solution].inactive"
                class="solutions-info-item-icon"
              />
            </div>
            <div class="solutions-info-item__description">
              {{$t(`homepage.solutions.${solution}.description`)}}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {solutionsKeys} from '~/static/solutionsHelpers'
import IconMRZReading from '~/components/icons/IconMRZReading'
import IconBarcodeReading from '~/components/icons/IconBarcodeReading'
import IconDocumentTypeIdentification from '~/components/icons/IconDocumentTypeIdentification'
import IconOCR from '~/components/icons/IconOCR'
import IconDataVerification from '~/components/icons/IconDataVerification'
import IconCreaditCardsReading from '~/components/icons/IconCreaditCardsReading'
import IconIdentityDocumentAuthentication from '~/components/icons/IconIdentityDocumentAuthentication'
import IconFaceMatching from '~/components/icons/IconFaceMatching'
import IconElectronicDocumentAuthentication from '~/components/icons/IconElectronicDocumentAuthentication'
import IconFaceRecognition from '~/components/icons/IconFaceRecognition'
import IconHardwareAssistedAuthentication from '~/components/icons/IconHardwareAssistedAuthentication'
import IconLivenessDetection from '~/components/icons/IconLivenessDetection'
import IconTriangle from '~/components/icons/IconTriangle'
import BasePicture from '~/components/ui/BasePicture'
import BaseLink from '~/components/ui/BaseLink'

export default {
  name: 'SolutionsInfo',
  components: {
    IconMRZReading,
    IconBarcodeReading,
    IconDocumentTypeIdentification,
    IconOCR,
    IconDataVerification,
    IconCreaditCardsReading,
    IconIdentityDocumentAuthentication,
    IconFaceMatching,
    IconElectronicDocumentAuthentication,
    IconFaceRecognition,
    IconHardwareAssistedAuthentication,
    IconLivenessDetection,
    IconTriangle,
    BasePicture,
    BaseLink
  },
  props: {
    solutionObject: Object,
    type: String
  },
  data() {
    return {
      solutionsKeys: solutionsKeys
    }
  }
}
</script>

<style lang="scss" scoped>
.solutions-info {
  display: flex;
  &:not(:last-child) {
    margin-bottom: 12.1rem;
    @include xxl {
      margin-bottom: 0;
    }
  }
  margin-top: 9.6rem;
  @include xxl {
    margin-top: 5rem;
  }
  @include s {
    flex-direction: column-reverse;
    margin-top: 3.2rem;
    &:not(:last-child) {
      margin-bottom: 4rem;
    }
  }
  &__image-wrapper {
    margin-right: 10.2rem;
    flex: 1 50%;
    display: flex;
    justify-content: right;
    @include xxl {
      margin-right: 4.5rem;
      flex: 1 35%;
    }
    @include s {
      flex: 1 40%;
    }
    @include s {
      margin: 0 auto;
    }

    @include xxs {
      margin: 0;
      height: 27rem;
    }
  }
  &__content {
    flex: 2 48%;
    @include s {
      flex: 1 55%;
    }
    @include s {
      padding: 0 1rem 3rem 1rem;
    }
    
    .solutions-info-item {
      display: flex;
      margin-right: 11rem;
      @include l {
        margin-right: 7.3rem;
      }
      @include s {
        margin-right: 1rem;
      }
      & > *:first-child {
        margin-right: 2.4rem;
      }
      &__icon {
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: .4rem;
        background-color: $color-light-4;
        width: 4rem;
        height: 4rem;
        min-width: 4rem;
      }
      &__content {
        flex: 1 calc(100% - 4rem);
        font-size: 1.8rem;
        line-height: 2.6rem;
        @include l {
          font-size: 1.6rem;
          line-height: 2.4rem;
        }
        @include xs {
          font-size: 1.4rem;
          line-height: 2.2rem;
        }
      }
      &__title {
        font-weight: 600;
        font-size: inherit;
        display: flex;
        align-items: center;
        cursor: pointer;

        &:hover {
          color: $color-primary;
        }
        
        .solutions-info-item-icon {
          transform: rotate(270deg);
          min-width: .8rem;
          margin-left: .65rem;
        }
        .solutions-info-item-additional-title {
          color: $color-orange;
          font-size: 1.4rem;
          line-height: 1.8rem;
        }
      }
      &__description {
        margin-top: .8rem;
        font-size: inherit;
        @include l {
          font-size: 1.6rem;
          line-height: 2.4rem;
        }

        @include l {
          font-size: 1.4rem;
          line-height: 2.2rem;
        }
      }
      &--lightening {
        opacity: 0.6;
      }
    }
  }
  &__title {
    margin-bottom: 4rem;
    @include s {
      text-align: center;
    }
    @include l {
      font-size: 2.4rem;
    }
    @include xs {
      font-size: 1.6rem;
      line-height: 2.9rem;
    }
  }
  &__items {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 4rem;
  }
  &--reverse {
    flex-direction: row-reverse;
    @include s {
      flex-direction: column-reverse;
    }
    .solutions-info {
      &__content {
        flex: 1 calc(100% / 3 * 2);
      }
      &__image-wrapper {
        margin-right: 0;
        align-self: flex-end;
        height: 60rem;
        flex: 1 calc(100% / 3);

        @include s {
          margin: 0;
          align-self: normal;
          max-height: 72rem;
        }
        @include xs {
          max-height: 50rem;
        }
        @include xxs {
          height: 42rem;
        }
      }
      &__items {
        grid-template-columns: 1fr 1fr;
        padding-bottom: 4rem;
        @include s {
          padding-bottom: 1.5rem;
          grid-template-columns: 1fr;
        }
      }
    }
    .solutions-info-item {
      @include xxl {
        margin-right: 4.5rem;
      }
      @include s {
        margin-right: 1rem;
      }
      &__icon {
        background-color: $color-orange-light;
      }
    }
  }
}
</style>