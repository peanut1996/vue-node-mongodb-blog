import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 粒子背景特效
import VueParticles from 'vue-particles'
// ui
import iView from 'iview'
import 'iview/dist/styles/iview.css'
// 进度条
import NProgress from 'nprogress' // 进度条
import 'nprogress/nprogress.css' // 这个样式必须引入

Vue.config.productionTip = false
Vue.use(VueParticles)
Vue.use(iView)
// 进度条设置

NProgress.inc(0.2)
NProgress.configure({ easing: 'ease', speed: 500, showSpinner: false })
// 全局守卫
router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
})

router.afterEach(() => {
  NProgress.done()
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
