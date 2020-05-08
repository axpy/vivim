<template>
  <div class="base-links-block">
    <h5 class="base-links-block__title">{{ title }}</h5>
    <MobileLinks
      :entitled="mobileLinksEntitled"
      :title="title"
      :type="mobileLinksType"
    />
    <SDK :type="SDKType" />
  </div>
</template>

<script>
import MobileLinks from '~/components/tryit/MobileLinks'
import SDK from '~/components/tryit/SDK'

export default {
  name: 'BaseLinksBlock',
  components: {
    MobileLinks,
    SDK,
  },
  props: {
    config: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      SDKType: 'default',
      mobileLinksType: 'default',
      mobileLinksEntitled: false,
      ...this.config
    }
  }
}
</script>

<style lang="scss" scoped>
.base-links-block {
  display: flex;
  z-index: $z-default-above;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 2.4rem;
  position: relative;
  height: 100%;
  width: 100%;

  @include l {
    margin-top: .8rem;
  }

  @include xs {
    align-items: center;
    margin-top: 0;
  }

  &__title {
    width: 100%;
    text-align: left;
    z-index: $z-default;
    font-weight: bold;
    margin: 0;
    line-height: 3.4rem;
    @include l {
      font-size: 1.8rem;
      line-height: 3.4rem;
    }

    @include s {
      text-align: center;
    }

    @include xs {
      font-size: 1.6rem;
      line-height: 2rem;
      align-items: center;
    }
  }
}
</style>