<template>
  <section
    class="questions"
    id="for-developers"
  >
    <!-- <div class="questions__background" /> -->
    <WaveBackground class="questions__background" />
    <BaseForm
      class="questions__form"
      :config="formConfig"
    />
    <LinksBlock
      class="questions__links-block"
      type="with-padding"
      :mobileLinksEntitled="false"
      :isQuestionView="true"
      mobileLinksType="angled"
      SDKType="default"
      :title="$t('homepage.try_it.mobile_app')"
    />
  </section>
</template>

<script>
import BaseForm from '~/components/ui/BaseForm'
import LinksBlock from '~/components/tryit/LinksBlock'
import WaveBackground from '~/components/ui/WaveBackground'

export default {
  name: "Questions",
  components: {
    BaseForm,
    LinksBlock,
    WaveBackground
  },
  computed: {
    formConfig() {
      return {
        title: this.$t('homepage.questions.title'),
        buttonName: this.$t('homepage.buttons.submit'),
        isTitleSmall: false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.questions {
  padding-top: 9rem;
  display: flex;
  width: 100%;
  justify-content: center;
  background-color: $color-secondary;
  position: relative;
  z-index: $z-default-below;
  &__background {
    min-height: 64.4rem;
    background-color: $color-light-2;
    border-radius: 0 0 30rem 0;
    overflow: hidden;
    @include xxl {
      height: 100%;
      border-radius: 0 0 20rem 0;
    }
    @include s {
      height: 100%;
      border-radius: 0 0 10rem 0;
    }
  }
  @include s {
    flex-direction: column;
    padding: 5rem 6rem 0;
  }
  @include xs {
    flex-direction: column;
    padding: 5rem 1rem 0;
  }
  &__form {
    margin-left: 5rem;
    width: 66rem;
    
    @include s {
      margin: 0 auto;
    }
    @media (max-width: 940px) {
      width: 100%;
    }
  }
  &__links-block {
    margin-right: 5rem;
    @include s {
      margin-right: 0;
      margin-top: 4rem;
    }
  }
}
</style>