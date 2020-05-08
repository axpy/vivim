<template>
  <div class="table-section">
    <BaseHeader
      :config="headerConfig"
      class="table-section__header"
    />
    <BaseTable :config="tableData" />
  </div>
</template>

<script>
/*
  Config props:

  headerConfig - REQUIRED
  tableData - REQUIRED

*/

import BaseHeader from '~/components/BaseHeader'
import BaseTable from '~/components/ui/BaseTable'

export default {
  name: 'TableSection',
  components: {
    BaseHeader,
    BaseTable
  },
  props: {
    config: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      ...this.config
    }
  }
}
</script>

<style lang="scss" scoped>
.table-section {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 16rem 7.3rem;

  @include l {
    margin: 12rem 5rem;
  }

  @include xs {
    margin: 4.8rem 0;
    padding: 0 1rem;
  }

  &__header {
    max-width: 93rem;
  }
}
</style>