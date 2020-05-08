<template>
  <div class="video-wrapper">
    <div class="video-wrapper__content">
      <iframe
        :src="currentUrl + '?rel=0&showinfo=0&autoplay=1&output=embed&enablejsapi=1&version=3&playerapiid=ytplayer'"
        frameborder="0"
        allow="autoplay; encrypted-media"
        allowfullscreen
        class="video-wrapper__frame">
      </iframe>
    </div>
  </div>
</template>

<script>


export default {
  name: 'VideoWrapper',
  data() {
    return {
      url: 'https://www.youtube.com/watch?v=tFy2KNzUKOU'
    }
  },
  computed: {
    currentUrl() {
      if (this.url.indexOf('&') !== -1) {
        return this.url.replace('watch?v=', 'embed/').split('&')[0]
      } else {
        return this.url.replace('watch?v=', 'embed/')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.video-wrapper {
  width: 80vmax;
  @include s {
    width: calc(100vw - 5rem);
  }
  @include xs {
    width: calc(100vw - 2rem);
  }
  &__content {
    position: relative;
    padding-bottom: 56.25%;
    width: 100%;
    height: 0;
    background-color: #ebebeb;
  }
  &__frame {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}
</style>
