<script>
/*
  Config props:

  text - REQUIRED
  tag - OPTIONAL
*/
import BaseLink from '~/components/ui/BaseLink'

export default {
  name: 'BlogParagraph',
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
                attrs: {class: 'blog-text--bold'}
              },
              item.text
            )
          )
        } else if (item.type === 'primary-highlight') {
          paragraphText.push(
            h(
              'span',
              {
                attrs: {class: 'blog-text--primary-highlight'}
              },
              item.text
            )
          )
        } else if (item.type === 'grey-highlight') {
          paragraphText.push(
            h(
              'span',
              {
                attrs: {class: 'blog-text--grey-highlight'}
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
                  class: 'blog-text__link'
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
                  class: 'blog-text__link',
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
        attrs: { class: 'blog-text'}
      },
      paragraphText
    )
  }
}
</script>

<style lang="scss" scoped>
.blog-text {
  text-align: left;
  font-size: 1.8rem;
  line-height: 2.6rem;
  color: $color-dark-3;

  @include l {
    font-size: 1.6rem;
    line-height: 2.4rem;
  }

  @include xs {
    font-size: 1.4rem;
    line-height: 2rem;
  }

  &--bold {
    font-weight: 600;
  }

  &--primary-highlight {
    background-color: $color-light-3;
  }

  &--grey-highlight {
    background-color: $color-dark-7;
  }

  &:not(:last-child) {
    margin-bottom: 2.4rem;

    @include xs {
      margin-bottom: 1.6rem;
    }
  }

  &__link {
    color: $color-primary;
    cursor: pointer;
  }
}
</style>