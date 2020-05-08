<template>
  <div class="card-with-list">
    <p class="card-with-list__title">{{ title }}</p>
    <p class="card-with-list__text">{{ text_1 }}</p>
    <p class="card-with-list__text">{{ text_2 }}</p>
    <div :class="listClass">
      <ListItem
        v-for="(item, index) in cardConfig"
        :key="index"
        :config="item"
      />
    </div>
  </div>
</template>

<script>
/*
  Config props:

  text - REQUIRED
  icon - IconSolutionsType [IconIndustriesType]
  list - REQUIRED

*/
import ListItem from '~/components/ui/ListItem'

export default {
  name: 'CardWithList',
  components: {
    ListItem
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
  },
  computed: {
    cardConfig() {
      return this.list.map((item, index) => {
        return {
          text: item,
          icon: this.icon
        }
      })
    },
    listClass() {
      return [
        'card-with-list__list',
        this.list.length <= 4 ? 'card-with-list__list--1' : this.list.length > 4 && this.list.length <= 8 ? 'card-with-list__list--2' : 'card-with-list__list--3'
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.card-with-list {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 82rem;
  padding: 3.2rem 3.2rem 2rem;
  margin: 0 4rem;
  height: 39rem;
  background-color: $color-white;
  box-shadow: $box-shadow-secondary;
  flex: 1 50%;

  @include xl {
    height: 42rem;
  }

  @include l {
    max-width: 59rem;
    margin: 0 2.5rem;
    height: 38rem;
    padding: 2rem 3.2rem 2rem;
  }

  @include s {
    max-width: 100%;
    width: 100%;
    margin: 0;
    height: auto;
    &:first-child {
      margin-bottom: 3.2rem;
    }
  }

  @include xxs {
    padding: 2rem 1rem 2rem;
  }

  &__text {
    font-size: 1.8rem;
    line-height: 2.6rem;

    @include xl {
      font-size: 1.6rem;
      line-height: 2.2rem;
    }

    @include xs {
      font-size: 1.4rem;
      line-height: 2rem;
    }

    &:last-of-type {
      margin-bottom: 2.4rem;

      @include l {
        margin-bottom: 1.5rem;
      }
    }
  }

  &__title {
    font-weight: bold;
    font-size: 2.4rem;
    line-height: 2.9rem;
    margin-bottom: 2.4rem;

    @include xl {
      font-size: 2rem;
      line-height: 2.6rem;
      margin-bottom: 1.5rem;
    }
    @include xs {
      margin-bottom: 1.6rem;
      font-size: 1.6rem;
      line-height: 1.9rem;
    }
  }

  &__list {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    flex-wrap: wrap;
    width: 100%;
    height: 60%;

    @include xl {
      height: 65%;
    }

    @include l {
      height: 60%;
    }

    &--1 > * {
      width: 100%;
    }
    &--2 {

      @include xl {
        height: 65%;
      }

      @include l {
        height: 50%;
      }

      & > * {
        width: 50%;
  
        @include s {
          width: 100%;
        }
      }
    }
    &--3 > * {
      width: 33%;

      @include xl {
        width: 50%;
      }

      @include s {
        width: 100%;
      }
    }
  }
}
</style>