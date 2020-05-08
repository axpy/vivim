<template>
  <div class="industries-card">
    <div class="industries-card__i-wrapper">
      <components
        :is="card.icon"
        class="industries-card__i-item"
      />
    </div>
    <BaseLink
      v-if="card.isLink"
      class="industries-card__header industries-card__header--link"
      to="finance"
    >
      {{ card.header }}
    </BaseLink>
    <div
    v-else
      class="industries-card__header"
    >
      {{ card.header }}
    </div>
    <BaseParagraph
      class="industries-card__text"
      :config="card.text"
      target="_self"
    />
  </div>
</template>

<script>
import IconTelcos from '~/components/icons/IconTelcos'
import IconTravel from '~/components/icons/IconTravel'
import IconInsurance from '~/components/icons/IconInsurance'
import IconHealthCare from '~/components/icons/IconHealthCare'
import IconGovermentSecurity from '~/components/icons/IconGovermentSecurity'
import IconFintechBanking from '~/components/icons/IconFintechBanking'
import IconEntertainment from '~/components/icons/IconEntertainment'
import IconEducation from '~/components/icons/IconEducation'
import IconAviation from '~/components/icons/IconAviation'
import BaseParagraph from '~/components/ui/BaseParagraph'
import BaseLink from '~/components/ui/BaseLink'

export default {
  name: 'IndustriesCard',
  props: {
    card: {
      type: Object,
      required: false,
    }
  },
  components: {
    IconTelcos,
    IconTravel,
    IconInsurance,
    IconHealthCare,
    IconGovermentSecurity,
    IconFintechBanking,
    IconEntertainment,
    IconEducation,
    IconAviation,
    BaseParagraph,
    BaseLink
  }
}
</script>

<style lang="scss" scoped>
.industries-card {
  & {
    width: 42rem;
    height: 37rem;
    margin: 1rem 0;
    padding: 4.8rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    text-align: left;
    background-color: $color-white;
    position: relative;
    color: black;
    box-sizing: border-box;
    box-shadow:0 7px 18px -18px rgba(0,0,0,1);
    &:lang(ru), &:lang(de) {
      height: 42rem;
    }
    &:lang(es) {
      height: 49rem;
    }
    @include xs {
      width: 24rem;
      min-width: 24rem;
      padding: 2.4rem;
    }
  }

  &__header {
    font-size: 2.4rem;
    line-height: 3rem;
    margin: 2.4rem 0 .8rem;
    font-weight: 600;
    white-space: normal;

    @include l {
      font-size: 2.2rem;
    }

    @include xs {
      font-size: 1.6rem;
      line-height: 2rem;
    }

    &--link {
      color: $color-primary;
    }
  }

  &__text {
    overflow-wrap: break-word;
    height: auto;
    font-size: 1.8rem;
    line-height: 2.6rem;
    white-space: normal;
    word-break: break-word;

    @include l {
      font-size: 1.6rem;
      line-height: 2.4rem;
    }

    @include xs {
      font-size: 1.4rem;
      line-height: 2.2rem;
    }
  }
  
  &__i-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 5.6rem;
    height: 5.6rem;
    padding: 1.6rem;
    background-color: $color-light-2;
    cursor: pointer;
  }
  &__i-item {
    pointer-events: none;
  }
}
</style>
