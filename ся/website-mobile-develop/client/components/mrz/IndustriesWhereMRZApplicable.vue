<template>
  <CardList :config="config" />
</template>

<script>
import CardList from '~/components/CardList'

export default {
  name: 'IndustriesWhereMRZApplicable',
  components: {
    CardList
  },
  data() {
    return {
      config: {
        cardListBgColor: 'default',
        headerConfig: {
          text: this.$t('mrz_reader.mrz_industries.header'),
          indentation: 'large',
        },
        cardSize: 'small',
        cardListlayout: 'double-row',
        isIconBGColored: false,
        cardList: [
          {
            icon: 'IconFintechBanking',
            title: this.$t('homepage.industries.fintech_and_banking.title')
          },
          {
            icon: 'IconEntertainment',
            title: this.$t('homepage.industries.entertainment.title')
          },
          {
            icon: 'IconTravel',
            title: this.$t('homepage.industries.travel_and_hospitality.title')
          },
          {
            icon: 'IconInsurance',
            title: this.$t('homepage.industries.insurance.title')
          },
          {
            icon: 'IconTelcos',
            title: this.$t('homepage.industries.telcos.title')
          },
          {
            icon: 'IconEducation',
            title: this.$t('homepage.industries.education.title')
          }
        ]
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>