<template>
  <div class="base-header">
    <IconPageStartOval class="base-header__icon base-header__icon-oval" />
    <IconPageStartQuarterOval class="base-header__icon base-header__icon-quarter-oval" />
    <div class="base-header__breadcrumbs">
      <BaseLink
        class="base-header__breadcrumbs--link"
        to="/"
      >
        Homepage
      </BaseLink> / 
      <BaseLink
        class="base-header__breadcrumbs--link"
        :to="`/#${metaInfo.breadcrumbs.section}`"
      >
        {{metaInfo.breadcrumbs.section}}
      </BaseLink> / 
      <span>{{metaInfo.breadcrumbs.sub_section}}</span>
    </div>
    <h1 class="base-header__header">
      {{ metaInfo.headerText }}
    </h1>
    <ContactsFormModalInvoker
      class="base-header__btn"
      :buttonText="$t('homepage.welcome_screen.try_for_free')"
    />
  </div>
</template>

<script>
import ContactsFormModalInvoker from '~/components/ui/ContactsFormModalInvoker'
import IconPageStartOval from '~/components/icons/IconPageStartOval'
import IconPageStartQuarterOval from '~/components/icons/IconPageStartQuarterOval'
import BaseLink from '~/components/ui/BaseLink'

export default {
  name: 'PageStart',
  props: {
    metaInfo: {
      type: Object,
      required: true
    }
  },
  components: {
    ContactsFormModalInvoker,
    IconPageStartOval,
    IconPageStartQuarterOval,
    BaseLink
  }
}
</script>

<style lang="scss" scoped>
.base-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: $color-light-2;
  position: relative;
  padding-top: 7.8rem;

  @include l {
    padding-top: 6.4rem;
  }

  @include xs {
    padding-top: 7.3rem;
  }
  
  &__breadcrumbs {
    font-size: 1.4rem;
    line-height: 1.9rem;
    color: $color-light-6;
    margin: 6.2rem 0;
    z-index: $z-default-above;
    & > * {
      color: $color-light-6;
    }

    &--link {
      cursor: pointer;
      text-transform: capitalize;
      &:hover {
        color: $color-primary;
      }
    }
    @include l {
      margin: 5.5rem 0 5.7rem;
    }
    @include xs {
      font-size: 1.2rem;
      line-height: 1.7rem;
      margin: 3.9rem 0 9.5rem;
    }
  }

  &__header {
    margin-bottom: 4rem;
    z-index: $z-default-above;
    max-width: 100rem;
    @include l {
      margin-bottom: 3.2rem;
    }

    @include xs {
      margin-bottom: 1.6rem;
    }
  }

  &__btn {
    margin-bottom: 14.4rem;
    z-index: $z-default-above;
    font-size: 1.8rem;
    line-height: 2.4rem;

    @include l {
      margin-bottom: 13.2rem;
      font-size: 1.6rem;
      line-height: 2.2rem;
    }

    @include xs {
      margin-bottom: 15.2rem;
      font-size: 1.4rem;
      line-height: 1.9rem;
      height: 4.4rem;
    }
  }

  &__icon {
    position: absolute;
    width: 25rem;

    @include l {
      width: 15rem;
    }

    @include xs {
      display: none;
    }

    &-oval {
      top: 10%;
      left: 5%;
    }

    &-quarter-oval {
      bottom: 0;
      right: 0;
    }
  }
}
</style>