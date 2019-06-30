<template lang="pug">
  .swiper
    swiper(:options="swiperOption")
      swiper-slide(v-for="item, index in banners" :key="index" :style="`background-image: url(${item.imageUrl})`")
      .swiper-pagination(slot="pagination")
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import {httpGet} from 'api/axios.js'

export default {
  data () {
    return {
      banners: [],
      swiperOption: {
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        autoplay: {
          delay: 3500
        },
        speed: 1000
      }
    }
  },
  created () {
    httpGet({url: '/banner'}).then((res) => {
      this.banners = res.banners
    })
  },
  components: {
    swiper,
    swiperSlide
  }

}
</script>

<style lang="scss" scoped>
.swiper {
  width: 100%;
  height: 150%;
  .swiper-container {
    height: 100%;
  }
  .swiper-slide {
    background-position: center;
    background-size: cover;
    height: 100%;
  }
}
</style>
