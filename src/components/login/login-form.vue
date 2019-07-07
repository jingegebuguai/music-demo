<template lang="pug">
  .login-form
    .nav
      svg.icon(aria-hidden="true" @click="goback")
        use(xlink:href="#icon-fanhui")
      span 手机号登陆
    .form
      .phone-form
        input(type="text" id="phone" v-model="phone" placeholder="手机号")
        svg.icon(aria-hidden="true" v-if="cancel_phone === true" @click="del_phone")
          use(xlink:href="#icon-quxiao")
      .pass-form
        input(type="password" v-model="password" placeholder="密码" @click="del_password")
        svg.icon(aria-hidden="true" v-if="cancel_pass === true")
          use(xlink:href="#icon-quxiao")
      button(@click="submit") 登陆
      span 重设密码 >
</template>

<script>
export default {
  data () {
    return {
      phone: '',
      password: '',
      cancel_phone: false,
      cancel_pass: false
    }
  },
  methods: {
    submit () {
      pass
    },
    goback () {
      this.$router.go(-1)
    },
    del_phone () {
      this.phone = ''
    },
    del_password () {
      this.password = ''
    }
  },
  watch: {
    phone (val) {
      this.cancel_phone = val !== ''
    },
    password (val) {
      this.cancel_pass = val !== ''
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~common/scss/variable.scss";
@import "~common/scss/mixin.scss";
@import "~common/scss/iconfont.scss";
.login-form {
  @include flex-column;
  justify-content: start;
  height: 100vh;
  width: 100%;
  font-size: 32px;
  // position: relative;
  .nav {
    position: relative;
    height: 100px;
    background: white;
    @include flex-row;
    svg {
      position: absolute;
      left: 3%;
      top: 50%;
      transform: translate(-50%, -50%);
      font-size: 0.55em;
    }
  }
  .form {
    font-size: 28px;
    width: 90%;
    margin-top: 5%;
    @include flex-column;
    input::-webkit-input-placeholder {
      color: rgb(233, 230, 230);
    }
    .phone-form, .pass-form {
      width: 100%;
      position: relative;
      input {
        margin-top: 5%;
        width: 100%;
        border-bottom: 1px solid #bebcbc;
        border-top:0px;
        border-left:0px;
        border-right:0px;
        outline-style: none;
        padding: 12px 0;
      }
      svg {
        position: absolute;
        right: 0;
        bottom: 10%;
        font-size: 0.55em;
        fill: rgb(180, 179, 179);
      }
    }
    button {
      margin-top: 8%;
      font-size: 1em;
      width: 100%;
      padding: 12px 12px;
      border-radius: 52px;
      background: rgb(253, 197, 197);
      color: white;
      outline: none;
      text-align: center;
      text-decoration: none;
      display: inline-block;
      border: none;
      cursor: pointer;
    }
    span {
      margin-top: 5%;
      font-size: 0.8em;
      color: gray;
    }
    // input:focus{
    //   border-color: #66afe9;
    //   outline: 0;
    //   -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6);
    //   box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6)
    // }

  }
}
</style>
