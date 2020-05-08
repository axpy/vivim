<template>
    <div>
      <div class="tabs-content__info">
        <h2 class="tabs-content__title">
          {{$t(`homepage.use_cases.${chosenTab}.title`)}}
        </h2>
        <template v-if="chosenTab==='data_entry_automation'">
          <BaseParagraph
            class="tabs-content__description"
            :config="config"
            target="_self"
          />
          <BaseLink
            to="data-entry-automation"
            class="tabs-content__logo"
          >
            <component :is="chosenTabInfo.icon" />
          </BaseLink>
        </template>
        <template v-else>
          <span class="tabs-content__description">
            {{$t(`homepage.use_cases.${chosenTab}.description`)}}
          </span>
          <div class="tabs-content__logo">
            <component :is="chosenTabInfo.icon" />
          </div>
        </template>
      </div>
      <SolutionBlockWrapper
        class="tabs-content__solution-block"
        :chosenTabInfo="chosenTabInfo"
        :isDesktopSize="isDesktopSize"
      />
    </div>
</template>

<script>
import SolutionBlockWrapper from '~/components/usecases/SolutionBlockWrapper'
import IconDataEntryAutomation from '~/components/icons/IconDataEntryAutomation'
import IconCustomerOnboarding from '~/components/icons/IconCustomerOnboarding'
import IconFraudPrevention from '~/components/icons/IconFraudPrevention'
import IconKYCAutomation from '~/components/icons/IconKYCAutomation'
import IconAutomatedCheckIn from '~/components/icons/IconAutomatedCheckIn'
import BaseParagraph from '~/components/ui/BaseParagraph'
import BaseLink from '~/components/ui/BaseLink'

export default {
  name: 'UseCasesTabContent',
  components: {
    SolutionBlockWrapper,
    IconDataEntryAutomation,
    IconCustomerOnboarding,
    IconKYCAutomation,
    IconFraudPrevention,
    IconAutomatedCheckIn,
    BaseParagraph,
    BaseLink
  },
  props: {
    chosenTab: String,
    chosenTabInfo: Object,
    isDesktopSize: Boolean
  },
  computed: {
    config() {
      return [
        {
          type: 'text',
          text: this.$t(`homepage.use_cases.${this.chosenTab}.description.text_1`)
        },
        {
          type: 'BaseLink',
          text: this.$t(`homepage.use_cases.${this.chosenTab}.description.link`),
          to: 'data-entry-automation'
        },
        {
          type: 'text',
          text: this.$t(`homepage.use_cases.${this.chosenTab}.description.text_2`)
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.tabs-content {
  &__info {
    width: 100%;
    margin-right: 5rem;
    flex: 1 calc(40% - 5rem);
    @include l {
      margin-right: 2.5rem;
      flex: 1 calc(40% - 2.5rem);
    }
    @include s {
      background-color: $color-white;
      box-shadow: $box-shadow-primary;
      padding: 2.1rem;
      flex: initial;
      margin-right: 0;
      text-align: left;
    }
  }
  &__solution-block {
    flex: 1 calc(60%);
  }
  &__title {
    font-size: 6.4rem;
    margin-bottom: 2.4rem;
    &:lang(ru), &:lang(de), &:lang(es) {
      font-size: 4rem;
      line-height: 4.9rem;
      @include l {
        font-size: 2.6rem;
        line-height: 3.2rem;
      }
    }
    @include l {
      font-size: 4.2rem;
      line-height: 4.2rem;
    }
    @include s {
      display: none;
    }
  }
  &__description {
    font-size: inherit;
    text-align: left;
    color: $color-grey-1;
    font-size: 1.8rem;
    line-height: 2.6rem;

    @include l {
      font-size: 1.6rem;
      line-height: 2.4rem;
    }
    @include s {
      font-weight: normal;
      color: $color-dark-1;
    }

    @include xs {
      font-size: 1.4rem;
      line-height: 2.2rem;
    }
  }
  &__logo {
    display: flex;
    margin-top: 4rem;
    width: fit-content;
    width: -moz-fit-content;
    height: auto;
    @include s {
      display: none;
    }
  }
}
</style>