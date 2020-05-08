<template>
  <div class="index">
    <RegulaWelcome />
    <UseCases />
    <TryIt />
    <Solutions />
    <Industries />
    <Clients />
    <Reviews />
    <About />
    <Questions />
  </div>
</template>

<script>
import RegulaWelcome from '~/components/homepage/RegulaWelcome'
import UseCases from '~/components/homepage/UseCases'
import Clients from '~/components/homepage/Clients'
import Solutions from '~/components/homepage/Solutions'
import Questions from '~/components/homepage/Questions'
import Reviews from '~/components/homepage/Reviews'
import Industries from '~/components/homepage/Industries'
import TryIt from '~/components/homepage/TryIt'
import About from '~/components/homepage/About'

export default {
  head() {
    return {
      title: this.$t('homepage.head.title'),
      meta: [
        { hid: 'description', name: 'description', content: this.$t('homepage.head.description') },
        { hid: 'og:description', name: 'og:description', content: this.$t('homepage.head.description') },
        { property: 'og:title', content: this.$t('homepage.head.title') }
      ]
    }
  },
  components: {
    RegulaWelcome,
    UseCases,
    Clients,
    Solutions,
    Reviews,
    Questions,
    About,
    Industries,
    TryIt
  }
}
</script>

<style lang="scss" scoped>
.index {
  width: 100%;
}
</style>
