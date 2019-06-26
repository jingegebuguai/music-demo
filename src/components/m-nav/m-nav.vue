<template lang="pug">
  .nav
    router-link.rt(to="search" tag="div")
      img(src="~/common/image/find.png")
      span 发现
    router-link.rt(to="vedio" tag="div")  
      img.vedio(src="~/common/image/vedio.png")
      span 视频
    router-link.rt(to="self" tag="div")
      img(src="~/common/image/music.png")
      span 我的
    router-link.rt(to="friend" tag="div")
      img.friend(src="~/common/image/friend.png")
      span 朋友
    router-link.rt(to="account" tag="div")
      img(src="~/common/image/acount.png")
      span 账号
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~common/scss/variable.scss";
.nav {
  position: fixed;
  z-index: 999;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  .rt {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    font-weight: 200;
    img {
      width: 28px;
      height: 28px;
      padding: 2px;
      margin: 2px 10px;
    }
  }
  .router-link-active {
      img {
        background-color: $color-nav-icon;
        border-radius: 15px;
      }
      color: $color-nav-icon; 
  }  
}
</style>