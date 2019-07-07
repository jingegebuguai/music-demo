<template lang="pug">
  div.login
    .login-icon
      .sixth-circle
        .fifth-circle
          .forth-circle
            .three-circle
              .tow-circle
                svg(aria-hidden="true")
                    use(xlink:href="#icon-yinle1")
    .circle1
    .circle2
    .circle3
    .circle4
    .clrcle5
    .login-form
      button.phone-login(@click="jump") 手机号登陆
      button.register() 注册
      span 游客试用>
    .bottom-icon
      router-link.rt(v-for="item, index in login_types" :key="index" :to="item.to" :tag="item.tag")
        svg.icon(aria-hidden="true"  @click.capture="icon_fill" :data-index="index")
          use(:xlink:href="item.icon")
        span {{item.title}}
</template>

<script>
export default {
  data () {
    return {
      login_types: [
        {'to': '', 'tag': 'div', 'icon': '#icon-weixin', 'title': '微信'},
        {'to': '', 'tag': 'div', 'icon': '#icon-qq', 'title': 'QQ'},
        {'to': '', 'tag': 'div', 'icon': '#icon-weibo', 'title': '微博'},
        {'to': 'youxiang', 'tag': 'div', 'icon': '#icon-youxiang', 'title': '网易邮箱'}
      ]
    }
  },
  methods: {
    jump () {
      this.$router.push({path: '/login-form'})
    }
  },
  mounted () {
    // console.log(document.getElementsByTagName('body'))
    // document.on('touchmove', (e) => {
    //   e.preventDefault()
    // })
  }
}
</script>

<style lang="scss" scoped>
@import "~common/scss/variable.scss";
@import "~common/scss/mixin.scss";
@import "~common/scss/iconfont.scss";
.login {
  position: relative;
  @include flex-column;
  // box-sizing: border-box;
  width: 100%;
  height: 100vh;
  .login-icon {
    position: relative;
    height: 55%;
    .sixth-circle {
      padding: 80px;
      background: white;
      border-radius: 100%;
      border: 1px solid rgb(248, 230, 230);
      .fifth-circle, .forth-circle, .three-circle, .tow-circle {
        padding: 70px;
        border: 1px solid rgb(243, 225, 225);
        border-radius: 50%;
        .forth {
          padding: 60px;
          border: 1px solid rgb(247, 208, 208);
          .three-circle {
            padding: 50px;
            border: 1px solid rgb(248, 176, 176);
            .tow-circle {
              padding: 45px;
              border: 1px solid rgb(240, 136, 136);
            }
          }
        }
      }
      svg {
        height: 120px;
        width: 120px;
        fill: white;
        background: $color-nav-icon;
        padding: 30px;
        border-radius: 50%;
      }
    }
  }
  .circle1, .circle2, .circle3, .circle4, .circle5 {
    position: absolute;
    padding: 24px;
    background: rgb(252, 231, 231);
    border-radius: 50%;
    opacity: 0.5;
    top: 10%;
    left: 20%;
  }
  .circle2 {
    padding: 36px;
    background: rgb(240, 221, 221);
    top: 40%;
    left: 80%;
  }
  .circle3 {
    padding: 18px;
    background: rgb(236, 223, 223);
    top: 35%;
    left: 25%;
  }
  .circle4 {
    padding: 12px;
    background: rgb(250, 241, 241);
    top: 25%;
    left:70%;
  }
  .circle5 {
    padding:24px;
    background: rgb(231, 215, 215);
    top: 36%;
    left: 20%;
  }
  .login-form {
    width: 100%;
    height: 20%;
    @include flex-column;
    button {
      box-sizing: border-box;
      color: white;
      text-align: center;
      text-decoration: none;
      display: inline-block;
      font-size: 30px;
      line-height: 30px;
      width: 75%;
      padding: 18px 36px;
      margin-top: 36px;
      border-radius: 100px;
      border: 2px solid $color-nav-icon;
      cursor: pointer;
    }
    .phone-login {
      background: $color-nav-icon;
    }
    .register {
      color: $color-nav-icon;
      background: white;
    }
    span {
      margin-top: 36px;
      color: gray;
    }
  }
  .bottom-icon {
    width: 80%;
    margin-top: 108px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    font-size: 24px;
    .rt {
      @include flex-column;
      font-weight: 200;
      // margin: 0 60px;
      svg {
        font-size: 24px;
        padding: 12px;
        border: 2px solid rgb(194, 193, 193);
        border-radius: 100px;
        margin-bottom: 24px;
      }
      span {
        color: gray;
      }
    }
  }
}
</style>
