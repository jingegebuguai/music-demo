<template lang="pug">
  .m-header
    svg.icon(aria-hidden="true")
      use(xlink:href="#icon-huatong" v-if="flag==='index'")
      use(xlink:href="#icon-saoma" v-if="flag==='account'")
    router-link.search(to="search" tag="div" v-if="flag==='index'")
      input.box(type="text" name="search" :placeholder="placeholder")
    img.musicState(src="~/common/image/music_state.png")
</template>

<script>
export default {
  data () {
    return {
      placeholder: '\ue613 云村'
    }
  },
  props: {
    flag: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~common/scss/variable.scss";
@import "~common/scss/iconfont.scss";
.m-header {
  position: fixed;
  height: 100px;
  width: 100%;
  text-align: center;
  background: white;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  svg, img {
    margin: 10px 20px 10px 20px;
  }
  img {
    width: 2em;
    height: 2em;
  }
  .search {
    width: 100%;
  }
  .search-icon {
    position: absolute;
    top: 20%;
    left: 110px;
    width: 40px;
    height: 40px;
  }
  input {
    font-family:"iconfont" !important;
    text-align: center;
    background: $color-search-input;
    font-size: 30px;
    font-weight: 200;
    border-radius: 40px;
    width: 100%;
    height: 70px;
    line-height: 40px;
    color: $color-text-ll;
    outline-style: none;
  }
}

</style>
