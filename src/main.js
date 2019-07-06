import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import fastclick from 'fastclick'
import VueLazyload from 'vue-lazyload'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'lib-flexible/flexible.js'
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false
Vue.config.devtools = true
// Vue.config.devtools = process.env.NODE_ENV === 'development'
// Vue.config.performance = process.env.NODE_ENV === 'development'

const errorHandler = (err, vm, info) => {
  console.log('全局异常')
  console.log('#', err)
  console.log('##', vm)
  console.log('###', info)
}

Vue.config.errorHandler = errorHandler
Vue.prototype.$throw = (error) => errorHandler(error, this)

Vue.use(VueLazyload, {
  preLoad: 1.0,
  error: require('common/image/default.png'), // 加载失败图片源
  loading: require('common/image/default.png'),
  attempt: 3
})

Vue.use(VueAwesomeSwiper)

fastclick.attach(document.body)

router.beforeEach((to, from, next) => {
  let getStatus = localStorage.getItem('status')
  if (getStatus === 'login') {
    store.state.isLogin = true
    next()
  } else if (to.path === '/index' && store.state.isLogin === false) {
    next({
      path: '/login'
    })
  } else {
    next()
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
