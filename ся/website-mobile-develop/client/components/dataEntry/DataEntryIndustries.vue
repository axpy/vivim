<template>
  <CardList :config="config" />
</template>

<script>
import CardList from '~/components/CardList'

export default {
  name: 'DataEntryIndustries',
  components: {
    CardList
  },
  data() {
    return {
      config: {
        cardListBgColor: 'default',
        cardListlayout: 'double-row',
        cardSize: 'small',
        isIconBGColored: false,
        headerConfig: {
          text: this.$t('data_entry_automation.dea_industries.header'),
          indentation: 'large',
        },
        cardList: [
          {
            icon: 'IconFintechBanking',
            title: this.$t('homepage.industries.fintech_and_banking.title')
          },
          {
            icon: 'IconInsurance',
            title: this.$t('homepage.industries.insurance.title')
          },
          {
            icon: 'IconTravel',
            title: this.$t('homepage.industries.travel_and_hospitality.title')
          },
          {
            icon: 'IconEducation',
            title: this.$t('homepage.industries.education.title')
          },
          {
            icon: 'IconTelcos',
            title: this.$t('homepage.industries.telcos.title')
          },
          {
            icon: 'IconHealthCare',
            title: this.$t('homepage.industries.healthcare.title')
          },
          {
            icon: 'IconEntertainment',
            title: this.$t('homepage.industries.entertainment.title')
          }
        ]
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>