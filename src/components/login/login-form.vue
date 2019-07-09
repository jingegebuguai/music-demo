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
    .err-msg(v-if="msg.length != 0")
      span {{msg}}
</template>

<script>
import { httpGet } from 'api/axios.js'
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      phone: '',
      password: '',
      cancel_phone: false,
      cancel_pass: false,
      msg: ''
    }
  },
  methods: {
    submit () {
      let pattern = /(13\d|14[579]|15[^4\D]|17[^49\D]|18\d)\d{8}/g
      if (!pattern.test(this.phone)) {
        this.msg = '手机号应是11位数字'
      } else {
        httpGet({url: '/login/cellphone?phone=' + this.phone + '&password=' + this.password}).then(res => {
          this.$store.dispatch('loginStatus', true)
          localStorage.setItem('status', 'login')
          this.$router.push('/index')
        }).catch(err => {
          if (err) {
            this.msg = '账号或密码错误'
          }
        })
      }
      let _this = this
      setTimeout(function () {
        _this.msg = ''
      }, 2000)
    },
    goback () {
      this.$router.go(-1)
    },
    del_phone () {
      this.phone = ''
    },
    del_password () {
      this.password = ''
    },
    ...mapActions(['loginStatus'])
  },
  computed: {
    login_info () {
      const { phone, password } = this
      return {
        phone,
        password
      }
    }
  },
  watch: {
    phone (val) {
      this.cancel_phone = val !== ''
    },
    password (val) {
      this.cancel_pass = val !== ''
    },
    login_info: {
      handler: function (newval, oldval) {
        let buttonStyle = document.getElementsByTagName('button')[0].style
        if (newval.phone !== '' && newval.password !== '') {
          buttonStyle.background = 'rgb(248, 88, 88)'
        } else {
          buttonStyle.background = 'rgb(253, 197, 197)'
        }
      }
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
  }
  .err-msg {
    position: absolute;
    top: 35%;
    left: 50%;
    transform: translate(-45%, -50%);
    span {
      padding: 36px;
      background: rgb(44, 44, 44);
      color: white;
      border-radius: 8px;
    }
  }
}
</style>
