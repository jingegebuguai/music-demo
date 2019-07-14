<template lang="pug">
  div(ref="nav")
    router-link.rt(v-for="item, index in navs" :key="index" :class="item.class" :to="item.to" :tag="item.tag" active-class="active")
      svg.icon(aria-hidden="true"  @click.capture="icon_fill" :data-index="index")
        use(:xlink:href="item.icon")
      span {{item.title}}
</template>

<script>
export default {
  data () {
    return {
      pre_ele: ''
    }
  },
  props: {
    navs: {
      type: Array,
      required: true
    },
    position: {
      type: String,
      required: true
    }
  },
  methods: {
    // 点击到字体会出bug，需要解决
    icon_fill (event) {
      let _this = this
      if (this.position === 'bottom') {
        new Promise(resolve => {
          event = event || window.event
          let obj = (event.srcElement ? event.srcElement : event.target)
          if (!obj.hasAttribute('aria-hidden')) {
            obj = obj.parentNode
          }
          if (_this.pre_ele !== obj) {
            obj.style.width = 1.5 + 'em'
            obj.style.height = 1.5 + 'em'
            obj.style.padding = 0.25 + 'em'
            obj.style.fill = 'white'
            _this.pre_ele.style.fill = 'gray'
            _this.pre_ele.style.padding = 0
            _this.pre_ele.style.width = 2 + 'em'
            _this.pre_ele.style.height = 2 + 'em'
          }
          resolve(obj)
        }).then((obj) => {
          _this.pre_ele = obj
        })
      }
    }
  },
  mounted () {
    if (this.position === 'bottom') {
      this.$nextTick(() => {
        let init = this.$refs.nav.getElementsByClassName('icon')[0]
        init.style.width = 1.5 + 'em'
        init.style.height = 1.5 + 'em'
        init.style.padding = 0.25 + 'em'
        init.style.fill = 'white'
        this.pre_ele = init
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~common/scss/variable.scss";
@import "~common/scss/iconfont.scss";
.bottom, .middle {
  z-index: 999;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 24px;
  .rt {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-weight: 200;
  }
}
.bottom {
  position: fixed;
  svg {
    margin: 4px 40px 10px;
  }
  span {
      transform: scale(.8)
  }
  .active {
    svg {
      background-color: $color-nav-icon;
      border-radius: 30px;
    }
    color: $color-nav-icon;
  }
}
.middle {
  svg {
    margin: 4px 20px 16px 20px;
  }
  .icon {
    border-radius: 3.7em;
    background: $color-nav-icon;
    padding: 0.85em;
    width: 2em;
    height: 2em;
    vertical-align: -0.15em;
    fill:white;
  }
}

</style>
