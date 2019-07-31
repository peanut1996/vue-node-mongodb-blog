<template>
  <div class="index">
    <vue-particles
      color="#fff"
      :particleOpacity="0.7"
      :particlesNumber="80"
      shapeType="circle"
      :particleSize="3"
      linesColor="#fff"
      :linesWidth="1"
      :lineLinked="true"
      :lineOpacity="0.4"
      :linesDistance="150"
      :moveSpeed="2"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="false"
      clickMode="push"
      class="lizi"
    ></vue-particles>

    <!-- 头像 -->
    <div class="head">
      <img src="../../assets/head.jpg" />
      <p>peanut</p>
    </div>

    <!-- 搜索 -->
    <div class="nav">
      <Icon class="icon" type="ios-menu-outline" size="35" color="#fff" @click="show=!show" />
      <transition name="slide-fade">
        <ul v-if="show">
          <router-link to="index" class="nav-style">首页</router-link>
          <router-link to="time-line" class="nav-style">更新</router-link>
          <router-link to="leave-word" class="nav-style">留言</router-link>
        </ul>
      </transition>
    </div>
    <!-- 自我介绍 -->
    <div class="introduce">
      <p>人还不错,除了长得帅一点之外,没别的优点了</p>
      <p>喜欢电影,唱歌,还有就是敲代码了</p>
      <p>前端开发小弟,请多指教~</p>
      <Button type="default" ghost class="btn" @click="enterBlog">进入博客</Button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      show: false
    }
  },
  methods: {
    navClick () {
      this.isShow = !this.isShow
    },
    enterBlog () {
      this.$router.push({ name: 'blog' })
    }
  }
}
</script>

<style lang='scss' scoped>
.index {
  width: 100%;
  height: 100%;
  background-image: url(../../assets/bg.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
  position: relative;
  .head {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 150px;
    width: 100px;
    height: 100px;
    background-color: #fff;
    img {
      width: 100px;
      height: 100px;
      border-radius: 50%;
    }
    p {
      margin-top: 10px;
      font-size: 20px;
      color: #fff;
      text-align: center;
    }
  }
  .nav {
    position: absolute;
    right: 80px;
    top: 40px;
    ul {
      margin-right: 40px;
      padding-top: 4px;
      box-sizing: border-box;
    }
  }
  .icon {
    position: absolute;
    right: 0;
    top: 0;
  }
  .introduce {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 400px;
    p {
      font-size: 16px;
      color: #fff;
      text-align: center;
    }
    .btn {
      margin-top: 30px;
      margin-left: 110px;
    }
  }
  .nav-style {
    color: #fff;
    font-size: 16px;
    margin-right: 30px;
    font-weight: 700;
  }
  .slide-fade-enter-active {
    transition: all 0.4s ease;
  }
  .slide-fade-leave-active {
    transition: all 0.6s cubic-bezier(1, 0.5, 0.8, 1);
  }
  .slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
    transform: translateX(10px);
    opacity: 0;
  }
}
</style>
