<template lang="pug">
  .index
    m-header.header-container(flag="index")
    swiper.swiper-container
    m-nav.nav-container(:navs="nav_list" :class="choiceClass" position="middle")
    .line
    keep-alive
      router-view.recommends-container.disc-container(v-if="$route.meta.keepAlive")
    //- index-list.recommends-container(tag="recommend")
    //- index-list.disc-container(tag="disc")
</template>

<script>
import MHeader from 'cpnts/m-header/m-header'
import Swiper from 'cpnts/util/swiper'
import MNav from 'cpnts/m-nav/m-nav'
// import IndexList from 'cpnts/index/index-lists'
export default {
  data () {
    return {
      nav_list: [
        {'to': '', 'tag': 'div', 'icon': '#icon-rili', 'title': '每日推荐'},
        {'to': '', 'tag': 'div', 'icon': '#icon-icon--', 'title': '歌单'},
        {'to': '', 'tag': 'div', 'icon': '#icon-paixingbang', 'title': '排行榜'},
        {'to': '', 'tag': 'div', 'icon': '#icon-yinlemusic170', 'title': '电台'},
        {'to': '', 'tag': 'div', 'icon': '#icon-zhibohuifang', 'title': '直播'}
      ]
    }
  },
  computed: {
    choiceClass () {
      return {middle: true, bottom: false}
    }
  },
  components: {
    MHeader,
    Swiper,
    MNav,
    //IndexLists
  }
}
</script>

<style lang="scss" scoped>
@import "~common/scss/variable.scss";
.index {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  .header-container {
    z-index: 999;
  }
  .swiper-container {
    width: 95%;
    height: 135px;
    margin-top: 60px;
    border-radius: 8px;
  }
  .nav-container {
    width: 100%;
    height: 100px;
  }
  .line {
    width: 100%;
    height: 1px;
    transform: scaleY(0.5);
    background: $color-line;
    transform-origin: 50% 100%;
    // background: linear-gradient(0deg, #fff, #000);
    // box-shadow: 0 0.5px 0 #000;
  }
  .recommends-container, .disc-container {
    position: relative;
    z-index: 1;
    width: 95%;
    margin: 16px 2.5% 0 2.5%;
  }
}
</style>
