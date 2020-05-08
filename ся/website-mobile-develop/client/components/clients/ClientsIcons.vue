<template>
  <div
    class="clients-icons"
  >
    <img
      class="clients-icons__img"
      loading="lazy"
      v-for="icon in icons"
      :key="icon.name"
      :src="icon.path"
    />
  </div>
</template>

<script>
export default {
  name: "ClientsIcons",
  props: {
    icons: {
      default: () => [],
      type: Array
    }
  }
}
</script>

<style lang="scss" scoped>
.clients-icons {
  display: grid;
  justify-items: center;
  align-items: center;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 9rem;
  @include xxl() {
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 6rem;
  }
  @include l() {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>