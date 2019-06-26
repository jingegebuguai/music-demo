<template lang="pug">
  #app
    //- m-header
    //- tab
    //- keep-alive
    //-   router-view(v-if="$route.meta.keepAlive")
    //- player
    router-view
    m-nav.nav
</template>

<script>
import MHeader from 'cpnts/m-header/m-header'
import MNav from 'cpnts/m-nav/m-nav'
import Tab from 'cpnts/tab/tab'
import Player from 'cpnts/player/player'

export default {
  data () {
    return {
      stop: false
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
  position: relative;
  top: 0;
  height: 100%;
  width: 100%;
  overflow: hidden;
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
