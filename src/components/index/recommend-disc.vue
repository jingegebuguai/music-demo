<template lang="pug">
  .index-list
    .index-list-nav(v-if="tag==='recommend'")
      .left-nav.entity 推荐歌单
      .right-nav 歌单广场
    .index-list-nav(v-if="tag==='disc'")
      .choice
        .left-nav(:class="{'entity': d_entity}" @click="discOrSong") 新碟
        .line
        .m-nav(:class="{'entity': s_entity}" @click="discOrSong") 新歌
      .right-nav {{text}}
    .index-list-detail
      .list-detail(v-for="item, index in lists" :key="index")
        .paly-num(v-if="tag==='recommend'")
          svg.icon(aria-hidden="true")
            use(xlink:href="#icon-bofang1")
          span {{item.playCount}}
        img(v-lazy="item.picUrl")
        .list-intro
          p {{item.name}}
</template>

<script>
import {httpGet} from 'api/axios.js'
export default {
  data () {
    return {
      lists: [],
      discs: [],
      songs: [],
      text: '更多新碟',
      d_entity: true,
      s_entity: false
    }
  },
  props: {
    tag: {
      type: String,
      required: true
    }
  },
  created () {
    if (this.tag === 'recommend') {
      httpGet({url: '/personalized'}).then((res) => {
        this.lists = res.result.slice(0, 6)
        this.lists.map((ele) => {
          ele.playCount = Math.floor(ele.playCount / 10000) + '万'
        })
      })
    }
    if (this.tag === 'disc') {
      httpGet({url: '/top/album?offset=0&limit=3'}).then((res) => {
        this.lists = res.albums
        this.discs = res.albums
      })
      httpGet({url: '/personalized/newsong?limit=3'}).then((res) => {
        this.songs = res.result.slice(0, 3)
        this.songs.map(ele => {
          ele.picUrl = ele.song.album.picUrl
          ele.singer = ele.song.artists.name
        })
      })
    }
  },
  methods: {
    discOrSong (event) {
      event = event || window.event
      let text = (event.srcElement ? event.srcElement : event.target).innerText
      if (text === '新碟') {
        this.d_entity = true
        this.s_entity = false
        this.text = '更多新碟'
        this.lists = this.discs
      } else {
        this.d_entity = false
        this.s_entity = true
        this.text = '推荐新歌'
        this.lists = this.songs
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~common/scss/variable.scss";
@import "~common/scss/iconfont.scss";
.index-list {
  font-size: 12px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .index-list-nav, .index-list-detail{
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .index-list-nav {
    margin-bottom: 16px;
    .entity {
      font-size: 16px;
      font-weight: bold;
    }
    .choice {
      width: 22%;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      .line {
        width: 1px;
        height: 16px;
        transform: scaleX(0.5);
        background: $color-line;
        transform-origin: 50% 100%;
      }
    }
    .right-nav {
      padding: 2.5px 8px;
      border: 1px solid rgb(182, 180, 180);
      border-radius: 9.5px;
    }
  }
  .index-list-detail {
    .list-detail {
      position: relative;
      width: 31%;
      display: flex;
      flex-direction: column;
      overflow: hidden;
      margin: 0 0.5% 16px 0.5%;
      font-weight: 100;
      .paly-num {
        position: absolute;
        top: 3px;
        right: 5px;
        z-index: 9;
        .icon {
          width: 1em;
          height: 1em;
          margin-right: 3px;
          fill: white;
        }
        span {
          color: white;
        }
      }
      img {
        width: 100%;
      }
      img:after {
        content: '';
        display: block;
        padding-top: 100%;
      }
      .list-intro {
        margin-top: 8px;
        height: 2.4em;
        text-align: left;
        p {
          // 实现多行省略号
          line-height: 1.2em;
          overflow:hidden;
          display: -webkit-box;
          overflow: hidden;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }
      }
    }
  }
}
</style>
