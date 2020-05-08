<template>
  <div class="main-footer">
    <div class="main-footer__logo">
      <img
        loading="lazy"
        class="main-footer__img"
        alt="Footer logo"
        src="/images/footer-logo.png">
    </div>
    <div class="main-footer__menu">
      <FooterMenuItem
        v-for="(item, i) in menuItems"
        :key="i"
        :item="item"
      />
    </div>
    <div class="main-footer__footer">
      <h6 class="main-footer__footer-copyright">{{ $t(`homepage.main_footer.footer`) }}</h6>
    </div>
  </div>
</template>

<script>
import FooterMenuItem from '~/components/footer/FooterMenuItem'

export default {
  name: 'MainFooter',
  components: {
    FooterMenuItem
  },
  computed: {
    menuItems() {
      return [
        // {
        //   title: this.$t(`homepage.main_footer.products.title`),
        //   linkList: [
        //     this.$t(`homepage.main_footer.products.authentication`),
        //     this.$t(`homepage.main_footer.products.biometric_analysis`),
        //     this.$t(`homepage.main_footer.products.verification`),
        //     this.$t(`homepage.main_footer.products.data_ocr`),
        //   ]
        // },
        // {
        //   title: this.$t(`homepage.main_footer.knowledge_base.title`),
        //   linkList: [
        //     this.$t(`homepage.main_footer.knowledge_base.blog`),
        //     this.$t(`homepage.main_footer.knowledge_base.glossary_of_terms`),
        //     this.$t(`homepage.main_footer.knowledge_base.use_cases_by_industry`),
        //     this.$t(`homepage.main_footer.knowledge_base.case_studies`),
        //   ]
        // },
        // {
        //   title: this.$t(`homepage.main_footer.company.title`),
        //   linkList: [
        //     this.$t(`homepage.main_footer.company.about_us`),
        //     this.$t(`homepage.main_footer.company.partners`),
        //     this.$t(`homepage.main_footer.company.careers`),
        //     this.$t(`homepage.main_footer.company.contacts`),
        //   ]
        // },
        {
          title: this.$t(`homepage.main_footer.follow_us.title`),
          iconList: [
            {
              to: 'https://web.facebook.com/regulaforensics?_rdc=1&_rdr',
              name: 'IconFacebook'
            },
            {
              to: 'https://www.youtube.com/user/regulaforensics',
              name: 'IconYoutube'
            },
            {
              to: 'https://twitter.com/regulaforensics',
              name: 'IconTwitter'
            },
            {
              to: 'https://www.linkedin.com/company/regulaforensics/',
              name: 'IconLinkedin'
            },
          ],
          isIcons: true
        },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.footer-menu-item {
  &:not(:last-of-type) {
    margin-right: 14.3rem;

    @include l {
      margin-right: 7rem;
    }

    @include s {
      margin-right: 5rem;
    }

    @include xs {
      margin-right: 0;
    }
  }
}

.main-footer {
  & {
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: repeat(2, auto);
    width: 100%;
    padding: 8.8rem 6.5rem 5.6rem;
    background-color: $color-secondary;

    @include l {
      padding: 8.8rem 6.5rem 5.6rem;
    }

    @include xs {
      padding: 8.8rem 1rem 3.2rem;
      justify-content: space-between;
    }
  }

  &__menu {
    display: flex;
    align-items: flex-start;
    justify-content: flex-end;
    margin-bottom: 8rem;
    grid-column: 2 / 3;
    grid-row: 1 / 2;

    @include xs {
      justify-content: center;
      margin-bottom: 5.6rem;
      grid-column: 1 /  3;
    }
  }

  &__footer {
    align-self: center;
    justify-self: center;
    grid-column: 1 / 3;
    grid-row: 2 / 3;

    @include xs {
      grid-column: 2 / 3;
    }

    &-copyright {
      font-weight: 400;
      line-height: 2.3rem;
      color: $color-grey-5;
      
      @include xs {
        font-size: 1.4rem;
        line-height: 2rem;
      }
    }
  }

  &__logo {
    width: 12rem;
    height: 6.4rem;
    min-width: 12rem;
    min-height: 6.4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 14.3rem;
    grid-column: 1 / 2;
    grid-row: 1 / 2;

    @include l {
      margin-right: 7rem;
    }

    @include s {
      width: 10rem;
      height: 5.5rem;
      min-width: 10rem;
      min-height: 5.5rem;
      margin-right: 2rem;
    }

    @include xs {
      width: 7.7rem;
      height: 4rem;
      min-width: 7.7rem;
      min-height: 4rem;
      grid-row: 2 / 3;
    }
  }
}
</style>