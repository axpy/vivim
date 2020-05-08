<script>
/*
  Config props:

  text - REQUIRED
*/
import BaseLink from '~/components/ui/BaseLink'

export default {
  name: 'BaseFootnote',
  components: {
    BaseLink
  },
  props: {
    config: {
      type: [Array, String],
      required: true
    }
  },
  render: function (h) {
    let footnoteText = []
    if (Array.isArray(this.config)) {
      this.config.forEach(item => {
        if (item.type === 'text') {
          footnoteText.push( item.text )
        } else {
          footnoteText.push(
            h(
              BaseLink,
              {
                props: {
                  to: item.to
                },
                attrs: { class: 'base-footnote base-footnote--link'}
              },
              item.text
            )
          )
        }
      })
    } else {
      footnoteText.push( this.config )
    }
    return h(
      'p',
      {
        attrs: { class: 'base-footnote'}
      },
      footnoteText
    )
  }
}
</script>

<style lang="scss" scoped>
.base-footnote {
  text-align: left;
  width: 100%;
  color: $color-dark-2;
  margin-top: 1.6rem;
  font-size: 1.4rem;
  line-height: 1.9rem;

  @include l {
    line-height: 2.4rem;
  }

  @include xs {
    margin-top: .8rem;
    font-size: 1.2rem;
    line-height: 2rem;
  }

  &--link {
    color: $color-primary;
    cursor: pointer;
  }
}
</style>