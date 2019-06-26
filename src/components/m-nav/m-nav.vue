<template lang="pug">
  .nav
    img(src="~/common/image/find.png")
    img.vedio(src="~/common/image/vedio.png")
    img(src="~/common/image/music.png")
    img.friend(src="~/common/image/friend.png")
    img(src="~/common/image/acount.png")
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
.nav {
  position: fixed;
  z-index: 999;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
img {
    width: 35px;
    height: 35px;
    margin: 5px 10px 5px 10px;
}
.vedio {
  width: 25px;
  height: 25px;
}
.friend {
  width: 30px;
  height: 30px;
}
</style>