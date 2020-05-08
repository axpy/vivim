<template>
  <div :class="`links-block links-block--${type}`">
    <div class="links-block__main">
      <BasePicture
        v-if="waveBackground"
        :config="imageConfig"
      />
      <div class="links-block__content">
        <h5
          v-if="SDKType !== 'column'" 
          :class="titleClass"
        >
          {{ title }}
        </h5>
        <h2
          v-else 
          :class="titleClass"
        >
          {{ title }}
        </h2>
        <MobileLinks
          :entitled="mobileLinksEntitled"
          :title="title"
          :type="mobileLinksType"
        />
        <SDK :type="SDKType" />
      </div>
    </div>
  </div>
</template>

<script>
import MobileLinks from '~/components/tryit/MobileLinks'
import SDK from '~/components/tryit/SDK'
import BasePicture from '~/components/ui/BasePicture'

export default {
  name: 'LinksBlock',
  components: {
    MobileLinks,
    SDK,
    BasePicture
  },
  props: {
    mobileLinksEntitled: {
      type: Boolean,
      default: false
    },
    mobileLinksType: {
      type: String,
      default: 'default'
    },
    SDKType: {
      type: String,
      default: 'default'
    },
    isQuestionView: {
      type: Boolean,
      default: false
    },
    waveBackground: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      required: true
    },
    type: {
      type: String,
      default: 'default'
    }
  },
  data() {
    return {
      imageConfig: {
        image: 'wave-new.png',
        alt: 'Wave',
        pictureType: 'wave--default'
      }
    }
  },
  computed: {
    titleClass() {
      return [
        this.isQuestionView ? 'links-block__title links-block__title--medium': 'links-block__title links-block__title--default',
        this.SDKType === 'column' && 'links-block__title--biggest'
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.links-block {
  display: flex;
  z-index: $z-default-above;
  &__main {
    padding: 8.7rem 3.7rem;
    position: relative;
    height: 100%;
    width: 100%;
    @include s {
      margin-right: 0;
      padding: 4.8rem 1rem;
    }
    @include xs {
      margin-right: 0;
    }
  }

  &__content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @include xs {
      align-items: center;
    }
  }

  &__title {
    width: 100%;
    text-align: center;
    z-index: $z-default;
    font-weight: 600;
    margin: 0;
    line-height: 3.4rem;

    @include l {
      font-size: 1.8rem;
      line-height: 3rem;
    }
    &--default {
      @include l {
        font-size: 2.2rem;
      }
      @include xs {
        font-size: 1.6rem;
        align-items: center;
      }
    }
    &--medium {
      @include xs {
        font-size: 1.8rem;
        align-items: center;
      }
    }
    &--biggest {
      font-size: 5.6rem;
      line-height: 6.8rem;
      font-family: Montserrat,sans-serif;
      @include l {
        font-size: 4.8rem;
        line-height: 4.8rem;
      }
      @include xs {
        font-size: 2.4rem;
        line-height: 3.2rem;
      }
    }
  }

  &--with-padding {

    .links-block {
      &__main {
        padding: 11.2rem 0 0 11.2rem;
        @include m {
          padding: 6rem 0 0 6rem;
        }
        @include s {
          padding: 0
        }
      }
      &__content {
        justify-content: left;
        @include s {
          justify-content: center;
        }
      }

      &__title {
        text-align: left;
        margin-bottom: 0;
        @include s {
          text-align: center;
        }
      }
    }
  }
  &--try-it {
    .links-block {
      &__title {
        font-family: 'Montserrat';
        font-size: 5.6rem;
        text-align: center;
        @include l {
          font-size: 4.8rem;
        }
        @include s {
          font-size: 2.4rem;
          line-height: 2.9rem;
        }
      }
    }
  }
}
</style>