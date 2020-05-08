<template>
  <CardList :config="config" />
</template>

<script>
import CardList from '~/components/CardList'

export default {
  name: 'FinanceUseCases',
  components: {
    CardList
  },
  data() {
    return {
      config: {
        cardListBgColor: 'blue',
        cardListBgPicture: 'wave',
        headerConfig: {
          text: this.$t('finance.finance_use_cases.header'),
          indentation: 'large',
        },
        cardSize: 'large',
        isIconBGColored: false,
        cardList: [
          {
            icon: 'IconDataEntryAutomation',
            title: this.$t('homepage.use_cases.data_entry_automation.title')
          },
          {
            icon: 'IconCustomerOnboarding',
            title: this.$t('homepage.use_cases.customer_onboarding.title')
          },
          {
            icon: 'IconKYCAutomation',
            title: this.$t('homepage.use_cases.kyc_automation.title')
          },
          {
            icon: 'IconFraudPrevention',
            title: this.$t('homepage.use_cases.fraud_prevention.title')
          },
          {
            icon: 'IconAutomatedCheckIn',
            title: this.$t('homepage.use_cases.automated_check-in.title')
          },
        ]
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>