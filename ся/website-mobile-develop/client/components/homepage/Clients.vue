<template>
  <div class="clients">
    <div class="clients__container">
      <h2 class="clients__title">
        {{$t('homepage.clients.title')}}
      </h2>
      <ClientsSlider 
        v-if="!isDesktopSize"
        :currentDisplay="currentDisplay"
        :icons="clientsIcons"
      />
      <ClientsIcons 
        v-else
        class="clients__icons"
        :icons="clientsIcons"  
      />
      <ContactsFormModalInvoker
        class="clients__button"
        :buttonText="$t('homepage.clients.join_industry')"
      />
    </div>
  </div>
</template>

<script>
import ClientsSlider from '~/components/clients/ClientsSlider'
import ClientsIcons from '~/components/clients/ClientsIcons'
import ContactsFormModalInvoker from '~/components/ui/ContactsFormModalInvoker'

export default {
  name: 'Clients',
  components: {
    ClientsSlider,
    ClientsIcons,
    ContactsFormModalInvoker
  },
  data() {
    return {
    }
  },
  computed: {
    currentDisplay() {
      return this.$store.state.ui.currentDisplay
    },
    isDesktopSize() {
      return this.$store.getters['ui/isDesktopSize']
    },
    clientsIcons() {
      return [
        {
          name: "IATA",
          path: '/images/IATA.png'
        },
        {
          name: "YVR",
          path: '/images/YVR.png'
        },
        {
          name: "Aeroflot",
          path: '/images/Aeroflot.png'
        },
        {
          name: "DFW",
          path: '/images/DFW.png'
        },
        {
          name: "Airlines",
          path: '/images/Airlines.png'
        },
        {
          name: "Alfa_Bank",
          path: '/images/Alfa_Bank.png'
        },
        {
          name: "Standard_Chartered",
          path: '/images/Standard_Chartered.png'
        },
        {
          name: "Bank_Hapoalim",
          path: '/images/Bank_Hapoalim.png'
        },
        {
          name: "Emirates_NBD",
          path: '/images/Emirates_NBD.png'
        },
        {
          name: "Global_TAX_Free",
          path: '/images/Global_TAX_Free.png'
        },
        {
          name: "IDEMIA",
          path: '/images/IDEMIA.png'
        },
        {
          name: "Gemalto",
          path: '/images/Gemalto.png'
        },
        {
          name: "Daon",
          path: '/images/Daon.png'
        },
        {
          name: "NEC",
          path: '/images/NEC.png'
        },
        {
          name: "HID",
          path: '/images/HID.png'
        },
        {
          name: "U_S_Customs",
          path: '/images/U_S_Customs.png'
        },
        {
          name: "Home_Office",
          path: '/images/Home_Office.png'
        },
        {
          name: "JRC",
          path: '/images/JRC.png'
        },
        {
          name: "Australian_Goverment",
          path: '/images/Australian_Goverment.png'
        },
        {
          name: "Guardia_Civil",
          path: '/images/Guardia_Civil.png'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.clients {
  width: 100%;
  font-size: 1.7rem;
  
  &__container {
    max-width: 146rem;
    padding: 15rem 3rem;
    margin: 0 auto;
    @include l {
      padding: 15rem 8rem;
    }
    @include s {
      padding: 4.8rem 1rem;
    }
  }

  &__icons {
    margin: 9.6rem 0 6.2rem;
  }

  &__title {
    width: inherit;
    text-align: center;

    @include xs {
      line-height: 3.2rem;
    }
  }

  &__button {
    margin: 0 auto;
    @include xs {
      font-weight: 700;
    }
  }
}
</style>