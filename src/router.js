import Vue from 'vue'
import VueRouter from 'vue-router'
// 引入组件
import Index from './components/front/Index.vue'
import Blog from './components/front/Blog.vue'
import Articles from './components/front/Articles.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/', redirect: '/index' },
    { path: '/index', component: Index, name: 'index' },
    { path: '/blog', component: Blog, name: 'blog' },
    { path: '/articles', component: Articles, name: 'articles' }
  ]
})

export default router
