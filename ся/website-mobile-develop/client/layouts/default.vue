<template>
  <div>
    <div :class="['main', {'main--side-bar-opened': isSideBarOpen}]">
      <MainHeader
        @toggle-side-bar="toggleSideBar"
        :showBoxShadow="hasShowHederBoxShadow"
      />
      <nuxt
        ref="content"
        :class="['page-content', {'page-content--side-bar-opened': isSideBarOpen}]"
      />
      <MainFooter />
      <!-- StickyBlock need to be the last one -->
      <transition name="sticky-block">
        <StickyBlock
          class="sticky-block"
          v-if="hasShowStickyButton && isMobileView"
        />
      </transition>
    </div>
    <transition name="side-bar">
      <div
        class="wrapper"
        v-if="isSideBarOpen"
      ></div>
    </transition>
    <BaseModal
      :isOpen="!!modalState.modalComponent"
      :showIconClose="showIconClose"
    >
      <component
        :is="modalState.modalComponent"
        :type="modalState.modalComponentType"
      />
    </BaseModal>
    <SideBar
      :isSideBarOpen="isSideBarOpen"
      @toggle-side-bar="toggleSideBar"
    />
  </div>
</template>

<script>
import MainHeader from '~/components/MainHeader'
import MainFooter from '~/components/homepage/MainFooter'
import SideBar from '~/components/SideBar'
import BaseModal from '~/components/ui/BaseModal'
import Contacts from '~/components/contacts/Contacts'
import VideoWrapper from '~/components/ui/VideoWrapper'
import StickyBlock from '~/components/StickyBlock'

export default {
  components: {
    MainHeader,
    MainFooter,
    SideBar,
    BaseModal,
    Contacts,
    VideoWrapper,
    StickyBlock
  },
  data() {
    return {
      isSideBarOpen: false,
      hasShowStickyButton: false,
      hasShowHederBoxShadow: false
    }
  },
  computed: {
    showIconClose() {
      return this.modalState.modalComponent !== 'VideoWrapper'
    },
    currentDisplay() {
      return this.$store.state.ui.currentDisplay
    },
    isMobileView() {
      return this.currentDisplay === 'mobile' || this.currentDisplay === 'big-mobile'
    },
    isDesktopSize() {
      return this.$store.getters['ui/isDesktopSize']
    },
    modalState() {
      return this.$store.getters['modal/modalState']
    }
  },
  methods: {
    toggleSideBar() {
      this.isSideBarOpen = !this.isSideBarOpen
    },
    handleResize() {
      this.$store.dispatch('ui/setCurrentDisplay', window.innerWidth)
      this.showHederBoxShadow()
    },
    scrollActions() {
      this.showStickyButton()
      this.showHederBoxShadow()
    },
    showStickyButton() {
      if (!window.scrollY && this.hasShowStickyButton) {
        this.hasShowStickyButton = false
      } else {
        this.hasShowStickyButton = true
      }
    },
    showHederBoxShadow() {
      if (!window.scrollY || !this.isDesktopSize) {
        this.hasShowHederBoxShadow = false
      } else {
        this.hasShowHederBoxShadow = true
      }
    }
  },
  mounted() {
    this.handleResize();
    window.addEventListener('resize', this.handleResize)
    window.addEventListener('scroll', this.scrollActions)
  },
  destroyed() {
    window.removeEventListener('resize', this.handleResize)
    window.removeEventListener('scroll', this.scrollActions)
  },
}
</script>

<style lang="scss">

.side-bar-enter-active, .side-bar-leave  {
  opacity: 1;
  transition: opacity $transition-time-medium ease-out;
}
.side-bar-enter, .side-bar-leave-active {
  opacity: 0;
  transition: opacity $transition-time-medium ease-out;
}
.sticky-block-enter-active, .sticky-block-leave {
  transform: translateY(0);
}
.sticky-block-enter, .sticky-block-leave-active {
  transform: translateY(30rem);
}
.main {
  z-index: $z-normal;
  transition: transform $transition-time-medium ease-out;
  &--side-bar-opened {
    transform: translateX(-100vw) translateX($big-indent);

    @include xs {
      transform: translateX(-100vw) translateX($default-indent);
    }
  }
}

.wrapper {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, .5);
  z-index: $z-wrapper-above;
}

.sticky-block {
  transition: transform $transition-time-short;
}

// CSS Reset
html, body, body div, span, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, abbr, address, cite, code, del, dfn, em, img, ins, kbd, q, samp, small, strong, sub, sup, var, b, i, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, figure, footer, header, menu, nav, section, time, mark, audio, video, details, summary {
	margin: 0;
	padding: 0;
	border: 0;
	vertical-align: baseline;
  background: transparent;
  scroll-behavior: smooth;
}

article, aside, figure, footer, header, nav, section, details, summary {display: block;}

html {
	box-sizing: border-box;
	height: 100%;
}

*,
*:before,
*:after {
	box-sizing: inherit;
}

img,
object,
embed {max-width: 100%;}

ul {list-style: none;}

button {border: none;}

a, button {
  outline: none;
}

// Typography
@font-face {
  font-family: 'Montserrat';
  src: url('~assets/fonts/Montserrat/Montserrat-Regular.ttf');
  src: url('~assets/fonts/Montserrat/Montserrat-Regular.ttf'), url('~assets/fonts/Montserrat/Montserrat-Regular.ttf')  format('truetype');
  font-weight: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Montserrat';
  font-weight: bold;
  src: url('~assets/fonts/Montserrat/Montserrat-Bold.ttf');
  src: url('~assets/fonts/Montserrat/Montserrat-Bold.ttf'), url('~assets/fonts/Montserrat/Montserrat-Bold.ttf')  format('truetype');
  font-display: swap;
}

@font-face {
  font-family: 'NotoSans';
  font-weight: normal;
  src: url('~assets/fonts/NotoSans/NotoSans-Regular.ttf');
  src: url('~assets/fonts/NotoSans/NotoSans-Regular.ttf'), url('~assets/fonts/NotoSans/NotoSans-Regular.ttf')  format('truetype');
  font-display: swap;
}

@font-face {
  font-family: 'NotoSans';
  font-weight: 600;
  src: url('~assets/fonts/NotoSans/NotoSans-SemiBold.ttf');
  src: url('~assets/fonts/NotoSans/NotoSans-SemiBold.ttf'), url('~assets/fonts/NotoSans/NotoSans-SemiBold.ttf')  format('truetype');
  font-display: swap;
}

@font-face {
  font-family: 'NotoSans';
  font-weight: bold;
  src: url('~assets/fonts/NotoSans/NotoSans-Bold.ttf');
  src: url('~assets/fonts/NotoSans/NotoSans-Bold.ttf'), url('~assets/fonts/NotoSans/NotoSans-Bold.ttf')  format('truetype');
  font-display: swap;
}

html {
  font-size: 62.5% !important;
}

body {
  font-family: NotoSans, sans-serif;
  font-size: 1.8rem;
  color: $color-dark-1;

  @include l {
    font-size: 1.6rem;
  }
}

p, span, button {
  font-family: inherit;
  font-size: inherit;
  color: inherit;
}

h1, h2, h3, h4 {
  font-family: Montserrat, sans-serif;
  font-weight: bold;
}

h5, h6 {
  font-family: NotoSans, sans-serif;
  font-weight: 600;
}
h1 {
  font-size: 5.6rem;
  line-height: 6.8rem;
  @include l {
    font-size: 4.8rem;
    line-height: 4.8rem;
  }
  @include xs {
    font-size: 2.4rem;
    line-height: 3.2rem;
  }
}
h2 {
  font-size: 5.6rem;
  line-height: 6.8rem;
  @include l {
    font-size: 4.8rem;
    line-height: 4.8rem;
  }
  @include s {
    font-size: 2.4rem;
    line-height: 2.9rem;
  }
}

h3 {
  font-size: 5.6rem;
}

h4 {
  font-size: 3.2rem;
}

h5 {
  font-size: 2.4rem;
}

h6 {
  font-size: 1.8rem;
}

a {
  color: $color-dark-1;
  text-decoration: none;
}

a, button, form, input, textarea {
  font-size: inherit;
}

.icon {
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon > svg {
  max-width: 100%;
}
</style>