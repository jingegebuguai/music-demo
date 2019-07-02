<template lang="pug">
  #app
    //- m-header
    //- tab
    keep-alive
      router-view
    //- player
    //- router-view
    m-nav.nav(:navs="nav_list" :class="choiceClass" position="bottom")
</template>

<script>
import MHeader from 'cpnts/m-header/m-header'
import MNav from 'cpnts/m-nav/m-nav'
import Tab from 'cpnts/tab/tab'
import Player from 'cpnts/player/player'

export default {
  data () {
    return {
      stop: false,
      nav_list: [
        {'to': 'index', 'tag': 'div', 'icon': '#icon-shouye', 'title': '发现'},
        {'to': 'vedio', 'tag': 'div', 'icon': '#icon-shipin', 'title': '视频'},
        {'to': 'music', 'tag': 'div', 'icon': '#icon-yinle', 'title': '音乐'},
        {'to': 'friend', 'tag': 'div', 'icon': '#icon-pengyou', 'title': '朋友'},
        {'to': 'account', 'tag': 'div', 'icon': '#icon-zhanghao', 'title': '账号'}
      ]
    }
  },
  mounted () {
    let m = document.querySelector('#app')
    m.addEventListener('touchend', this.firstPlay)
  },
  methods: {
    firstPlay () {
      let music = document.querySelector('#music-audio')
      music.play()
      if (music.src !== '') {
        this.stop = true
      }
    }
  },
  watch: {
    stop () {
      let m = document.querySelector('#app')
      m.removeEventListener('touchend', this.firstPlay)
    }
  },
  computed: {
    choiceClass () {
      return {middle: false, bottom: true}
    }
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
  margin-bottom: 60px;
}
.nav {
    // position: fixed;
    // z-index: 999;
    bottom: 0;
    width: 100%;
    height: 60px;
    background: $color-theme;
  }
</style>
