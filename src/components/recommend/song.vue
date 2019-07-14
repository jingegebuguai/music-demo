<template lang="pug">
  .everyday-song
    .top
      svg.icon(aria-hidden="true" @click="goback")
        use(xlink:href="#icon-fanhui")
      span.title 每日推荐
      span.choice-song 点歌
      svg.icon(aria-hidden="true")
        use(xlink:href="#icon-youyinpin")
    .middle
      .date
        span.day {{day}}
        span.month /{{month}}
      .intro
        span {{intro}}
    .song-list
      .song-nav
        .song-left-nav
          svg.icon(aria-hidden="true")
            use(xlink:href="#icon-bofang")
          span 播放全部
        .song-right-nav
          svg.icon(aria-hidden="true")
            use(xlink:href="#icon-fenlei")
          span 多选
      .song-nav(:class="{'song-nav-fixed': isFixed}" v-show="songNavFixed")
        .song-left-nav
          svg.icon(aria-hidden="true")
            use(xlink:href="#icon-bofang")
          span 播放全部
        .song-right-nav
          svg.icon(aria-hidden="true")
            use(xlink:href="#icon-fenlei")
          span 多选
      ul
        li(v-for="item, index in songs" :key='index')
          .info
            img.pic(:src="item.album.picUrl + '?param=120y120&type=webp'")
            .song-info
              span.song-name {{item.name}}
                em.song-alias(v-if="item.alias.length !== 0") ({{item.alias[0]}})
              .artists-name
                span.sq(v-if="item.privilege.maxbr === 999000") SQ
                span {{item.artists[0].name}}-{{item.album.name}}
          .right-icon
            svg.icon(aria-hidden="true" v-if="item.mvid !== 0")
              use(xlink:href="#icon-shipin")
            svg.icon(aria-hidden="true")
              use(xlink:href="#icon-gengduo-shuxiang")
</template>

<script>
import MNav from 'cpnts/m-nav/m-nav'
import { httpGet } from 'api/axios.js'
export default {
  data () {
    return {
      intro: '根据你的音乐口味，为你推荐好音乐，好朋友',
      songs: [],
      isFixed: false,
      songNavFixed: false
    }
  },
  mounted () {
    httpGet({url: '/recommend/songs'}).then(res => {
      this.songs = res.recommend
    })
    this.activeIcon()
    window.addEventListener('scroll', this.handleScroll)
  },
  computed: {
    day: function () {
      let day = new Date().getDate()
      return day.toString().length === 1 ? '0' + day : day
    },
    month: function () {
      let month = new Date().getMonth() + 1
      return month.toString().length === 1 ? '0' + month : month
    }
  },
  methods: {
    goback () {
      this.$router.go(-1)
    },
    activeIcon () {
      this.$nextTick(() => {
        let path = this.$route.path
        if (path.indexOf('song') !== -1) {
          let rt = document.getElementsByClassName('rt index')[0]
          rt.classList.add('active')
        }
      })
    },
    handleScroll () {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      let songNav = document.getElementsByClassName('song-list')[0]
      let offsetTop = songNav.offsetTop
      let title = document.getElementsByClassName('title')[0]
      title.style.opacity = scrollTop / (offsetTop - 145)
      if (scrollTop > offsetTop - 145) {
        this.isFixed = true
        this.songNavFixed = true
      } else {
        this.isFixed = false
        this.songNavFixed = false
      }
    }
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  },
  watch: {
    '$route' (to, from) {
      let rt = document.getElementsByClassName('rt index')[0]
      if (to.path === '/song') {
        rt.classList.remove('active')
      }
      if (from.path === '/song') {
        rt.classList.remove('active')
      }
    }
  },
  components: {
    MNav
  }
}
</script>

<style lang="scss" scoped>
@import "~common/scss/mixin.scss";
@import "~common/scss/variable.scss";
@import "~common/scss/iconfont.scss";
.everyday-song {
  width: 100%;
  background: rgb(248, 88, 88);
  @include flex-column;
  justify-content: space-between;
  position: relative;
  .top {
    @include flex-row;
    position: fixed;
    justify-content: space-between;
    font-size: 32px;
    color: white;
    height: 100px;
    width: 100%;
    z-index: 999;
    background: rgb(248, 88, 88);
    svg {
      margin: 0 2.5% 0 2.5%;
      fill: white;
      font-size: 0.6em;
    }
    .title {
     opacity: 0;
    }
    .choice-song {
      position: absolute;
      right: 5%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
  }
  .middle {
    position: relative;
    z-index: 10;
    margin-top: 180px;
    width: 95%;
    color: white;
    .date {
      font-size: 32px;
      .month {
        font-size: 1em;
      }
      .day {
        font-size: 2.5em;
      }
    }
    .intro {
      margin-top: 16px;
    }
  }
  .song-list {
    margin-top: 5%;
    width: 100%;
    background: white;
    border-radius: 30px 30px 0 0;
    z-index: 10;
    .song-nav {
      @include flex-row;
      // position: relative;
      justify-content: space-between;
      margin: 0 4.5% 0 2.5%;
      height: 100px;
      width: 100%;

      .song-left-nav {
        position: relative;
        width: 50%;
        svg {
          font-size: 28px;
        }
        span {
          position: absolute;
          left: 33%;
          top: 50%;
          transform: translate(-50%, -50%);
          font-size: 28px;
          font-weight: bold;
        }
      }
      .song-right-nav {
        width: 50%;
        position: relative;
        font-size: 16px;
        svg {
          top: 50%;
          right: 25%;
          transform: translate(-50%, -50%);
          position: absolute;
        }
        span {
          margin-left: 75%;
          font-size: 25px;
        }
      }
    }
    .song-nav-fixed {
      background: white;
      position: fixed;
      top: 100px;
      z-index: 999;
    }
    ul {
      width: 100%;
      li {
        margin: 3% 2% 0 4%;
        @include flex-row;
        justify-content: space-between;
        .info {
          @include flex-row;
          justify-content: flex-start;
          width: 75%;
          img {
            border-radius: 8px;
          }
          .song-info {
            margin-left: 4%;
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            height: 65px;
            text-align: left;
            span {
              font-size: 30px;
              overflow: hidden;
              display: -webkit-box;
              -webkit-line-clamp: 1;
              -webkit-box-orient: vertical;
            }
            .song-alias {
              color: rgb(167, 167, 167);
              font-style: normal;
              margin-left: 2%;
            }
            .artists-name {
              font-size: 24px;
              @include flex-row;
              justify-content: flex-start;
              width: 100%;
              span {
                display: inline-block;
                font-size: 1em;
                color: rgb(167, 167, 167);
                overflow: hidden;
                display: -webkit-box;
                -webkit-line-clamp: 1;
                -webkit-box-orient: vertical;
              }
              .dujia, .sq {
                color: red;
                font-size: 0.6em;
                border: 1px solid red;
                padding: 1px 3px;
                border-radius: 3px;
                margin-right: 1.5%;
              }
            }
          }
        }
        .right-icon {
          @include flex-row;
          justify-content: flex-end;
          svg {
            font-size: 24px;
            fill: rgb(173, 173, 173);
          }
        }
      }
    }
  }
}
</style>
