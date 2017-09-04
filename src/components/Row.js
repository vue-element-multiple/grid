/**
 * Created by lf on 2017/9/4.
 */
export default {
  name: 'VmRow',
  component: 'VmRow',
  props: {
    tag: {  // 元素标签
      type: String,
      default: 'div'
    },
    gutter: Number, // 栅格间隔
    type: String, // 布局模式-flex
    direction: {  // flex布局排列方向：flex-direction：row | row-reverse | column | column-reverse
      type: String,
      default: 'row'
    },
    wrap: { // flex容器单行、多行、反转：flex-wrap：nowrap | wrap | wrap-reverse
      type: String,
      default: 'wrap'
    },
    justify: {  // flex 布局下的水平排列方式
      type: String,
      default: 'start'
    },
    align: {  // flex 布局下的垂直排列方式
      type: String,
      default: 'top'
    },
    content: {
      type: String,
      default: 'Start'
    },
    className: String
  },
  computed: {
    style () {
      var ret = {};
      if (this.gutter) {
        ret.marginLeft = `-$(this.gutter / 2)px`
        ret.marginRight = ret.marginLeft
      }
      return ret
    }
  },
  render (h) {
    return h(this.tag, {
      class: [
        'vm-row',
        {'vm-row-flex': this.type === 'flex'},
        this.direction !== 'row' ? `is-direction-${this.direction}` : '',
        this.wrap !== 'wrap' ? `is-wrap-${this.wrap}` : '',
        this.justify !== 'start' ? `is-justify-${this.justify}` : '',
        this.align !== 'top' ? `is-align-${this.align}` : '',
        `is-content-${this.content}`,
        this.className
      ],
      style: this.style
    }, this.$slots.default)
  }
}