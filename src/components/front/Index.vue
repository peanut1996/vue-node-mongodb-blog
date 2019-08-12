<template>
  <div class="index">
    <Particles></Particles>
    <!-- 头像 -->
    <div class="head">
      <img src="../../assets/head.jpg" />
      <p>peanut</p>
    </div>

    <!-- 搜索 -->
    <Nav></Nav>
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
import Nav from '../common/Nav'
import Particles from '../../util/Particles'
export default {
  data () {
    return {}
  },
  components: {
    Nav,
    Particles
  },
  methods: {
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
}
</style>
