<template lang="pug">
  #app
    //- m-header
    //- tab
    transition(:name="transitionName")
      keep-alive
        router-view
    //- player
    //- router-view
    m-nav.nav(v-if="isNav === true" :navs="nav_list" :class="choiceClass" position="bottom")
</template>

<script>
import MHeader from 'cpnts/m-header/m-header'
import MNav from 'cpnts/m-nav/m-nav'
import Tab from 'cpnts/tab/tab'
import Player from 'cpnts/player/player'

import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      stop: false,
      transitionName: '',
      nav_list: [
        {'to': 'index', 'tag': 'div', 'icon': '#icon-shouye', 'title': '发现', 'class': 'index'},
        {'to': 'vedio', 'tag': 'div', 'icon': '#icon-shipin', 'title': '视频', 'class': 'vedio'},
        {'to': 'music', 'tag': 'div', 'icon': '#icon-yinle', 'title': '音乐', 'class': 'music'},
        {'to': 'friend', 'tag': 'div', 'icon': '#icon-pengyou', 'title': '朋友', 'class': 'friend'},
        {'to': 'account', 'tag': 'div', 'icon': '#icon-zhanghao', 'title': '账号', 'class': 'account'}
      ]
    }
  },
  mounted () {
    // let m = document.querySelector('#app')
    // m.addEventListener('touchend', this.firstPlay)
  },
  methods: {
    // firstPlay () {
    //   let music = document.querySelector('#music-audio')
    //   music.play()
    //   if (music.src !== '') {
    //     this.stop = true
    //   }
    // }
  },
  watch: {
    $route (to, from) {
      this.transitionName = to.meta.index > from.meta.index ? 'slide-left' : 'slide-right'
    }
    // stop () {
    //   let m = document.querySelector('#app')
    //   m.removeEventListener('touchend', this.firstPlay)
    // }
  },
  computed: {
    choiceClass () {
      return {middle: false, bottom: true}
    },
    ...mapGetters([
      'isNav'
    ])
  },
  components: {
    MHeader,
    MNav,
    Tab,
    Player
  }
}
</script>

<style lang="scss">
@import 'common/scss/index.scss';
#app {
  background: white;
  position: relative;
  top: 0;
  height: 100%;
  width: 100%;
  overflow: hidden;
  margin-bottom: 100px;
}
.nav {
    // position: fixed;
    // z-index: 999;
    bottom: 0;
    width: 100%;
    height: 100px;
    background: $color-theme;
  }
.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
  will-change: transform;
  transition: all 500ms;
  position: absolute;
}
.slide-right-enter {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
.slide-right-leave-active {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.slide-left-enter {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.slide-left-leave-active {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
</style>
