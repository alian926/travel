// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
//路由就是根据网址的不同，返回不同的内容给用户
import router from './router'

//解决部分浏览器点击延迟300ms
import fastClick from 'fastclick'
//样式重置
import './assets/styles/reset.css'
//解决手机端1px像素问题
import './assets/styles/border.css'
import './assets/styles/iconfont.css'
//引入Vuex
import store from './store/'
//导入swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
// require styles
import 'swiper/dist/css/swiper.css'

Vue.use(VueAwesomeSwiper, /* { default global options } */)
Vue.config.productionTip = false
fastClick.attach(document.body)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  //局部组件APP，子组件都挂载在App上面
  components: { App },
  //会将局部组件直接渲染到页面挂载中
  template: '<App/>'
})


//启动 npm run dev