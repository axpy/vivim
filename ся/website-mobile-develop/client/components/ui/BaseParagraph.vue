<script>
/*
  Config props:

  text - REQUIRED
  tag - OPTIONAL
*/
import BaseLink from '~/components/ui/BaseLink'

export default {
  name: 'BaseParagraph',
  components: {
    BaseLink
  },
  props: {
    config: {
      type: [Array, String],
      required: true
    },
    tag: {
      type: String,
      default: 'p'
    },
    target: {
      type: String,
      default: '_blank'
    }
  },
  render: function (h) {
    let paragraphText = []
    if (Array.isArray(this.config)) {
      this.config.forEach(item => {
        if (item.type === 'text') {
          paragraphText.push( item.text )
        } else if (item.type === 'boldText') {
          paragraphText.push(
            h(
              'span',
              {
                attrs: {class: 'base-text--bold'}
              },
              item.text
            )
          )
        } else if (item.type === 'smallText') {
          paragraphText.push(
            h(
              'span',
              {
                attrs: {class: 'base-text--small'}
              },
              item.text
            )
          )
        } else if (item.type === 'BaseLink') {
          paragraphText.push(
            h(
              BaseLink,
              {
                props: {
                  to: item.to
                },
                attrs: {
                  class: 'base-text__link'
                }
              },
              item.text
            )
          )
        } else {
          paragraphText.push(
            h(
              'a',
              {
                attrs: {
                  class: 'base-text__link',
                  href: item.to,
                  target: this.target
                }
              },
              item.text
            )
          )
        }
      })
    } else {
      paragraphText.push( this.config )
    }
    return h(
      this.tag,
      {
        attrs: { class: 'base-text base-text--default'}
      },
      paragraphText
    )
  }
}
</script>

<style lang="scss" scoped>
.base-text {
  text-align: left;
  width: 100%;

  &--default {
    font-size: 1.8rem;
    line-height: 2.6rem;
  
    @include l {
      font-size: 1.6rem;
      line-height: 2.4rem;
    }
  
    @include xs {
      font-size: 1.4rem;
      line-height: 2rem;
    }
  }

  &--bold {
    font-weight: 600;
  }

  &--small {
    @include xs {
      font-size: 1.2rem;
      line-height: 1.8rem;
    }
  }

  &:not(:last-child) {
    margin-bottom: 4rem;

    @include xs {
      margin-bottom: 3.2rem;
    }
  }

  &__link {
    color: $color-primary;
    cursor: pointer;
  }
}
</style>