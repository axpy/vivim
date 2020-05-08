<template>
  <div class="base-table">
    <BaseRow
      v-for="(row, index) in rowConfig"
      :key="index"
      :config="row"
    />
  </div>
</template>

<script>
import BaseRow from '~/components/ui/BaseRow'
/*
  Config props:

  config - REQUIRED
*/

export default {
  name: 'BaseTable',
  components: {
    BaseRow
  },
  props: {
    config: {
      type: Array,
      required: true
    }
  },
  computed: {
    rowConfig() {
      return this.config.map(item => {
        return {
          row: item,
          header: this.config[0]
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.base-table {
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow-x: auto;
  max-width: 153rem;
}
</style>