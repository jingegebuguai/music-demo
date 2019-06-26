<template lang="pug">
  .m-header
    img.microphone(src="~/common/image/microphone.png")
    router-link.search(to="search" tag="div")
      input.box(type="text" name="search" :placeholder="placeholder")
    img.musicState(src="~/common/image/music_state.png")
</template>

<script>
export default {
  data () {
    return {
      placeholder: '\ue613 云村'
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~common/scss/variable.scss";
.m-header {
  position: fixed;
  height: 50px;
  width: 100%;
  text-align: center;
  background: $color-theme;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  img {
    width: 35px;
    height: 35px;
    margin: 5px 10px 5px 10px;
  }
  .search {
    width: 100%;
  }
  .search-icon {
    position: absolute;
    top: 20%;
    left: 55px;
    width: 20px;
    height: 20px;
  }
  input {
    // font-family: 'iconfont';
    font-family:"iconfont" !important;
    text-align: center;
    background: $color-search-input;
    font-size: 15px;
    font-weight: 200;
    border-radius: 20px;
    width: 100%;
    height: 35px;
    line-height: 20px;
    // background: $color-search-input;
    color: $color-text-ll;
    outline-style: none;
  }
}
</style>
