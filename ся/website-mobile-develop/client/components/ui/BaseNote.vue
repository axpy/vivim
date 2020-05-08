<template>
  <div :class="baseNoteClass">
    {{ text }}
  </div>
</template>

<script>
/*
  Config props:

  text - REQUIRED
  textColor - OPTIONAL

*/
export default {
  name: 'BaseNote',
  props: {
    config: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      isTextColored: false,
      ...this.config
    }
  },
  computed: {
    baseNoteClass() {
      return ['base-note', {'base-note--colored': this.isTextColored}]
    }
  }
}
</script>

<style lang="scss" scoped>
.base-note {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem 2rem;
    width: 100%;
    background-color: $color-light-8;
    font-size: 1.8rem;
    line-height: 2.6rem;
    min-height: inherit;
  
    @include l {
      font-size: 1.6rem;
      line-height: 2.4rem;
    }
  
    @include xs {
      padding: 2rem 1.5rem;
      font-size: 1.4rem;
      line-height: 2rem;
    }

    &--colored {
      color: $color-dark-3;
    }
}
</style>