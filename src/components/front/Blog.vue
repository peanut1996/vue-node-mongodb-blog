<template>
  <div class="blog">
    <vue-particles
      color="#fff"
      :particleOpacity="0.7"
      :particlesNumber="100"
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
    <div class="main">
      <div class="wrapper" ref="wrapper">
        <ul class="content">
          <li>
            <router-link to="1" class="Astyle">vue注意点</router-link>
            <div class="release-time">
              <Icon type="md-alarm" />发表时间:
              <span>2019-8-10</span>
            </div>
            <div class="category">
              <Divider type="vertical" />
              <Icon type="ios-paper" />分类:
              <span>Node</span>
            </div>
            <div class="like">
              <Divider type="vertical" />
              <Icon type="md-thumbs-up" />点赞:(20)
            </div>
            <div class="content">
              吸顶元素就是当页面向下滑动，到达该元素位置时，该元素固定在顶部显示的效果。
              吸顶元素在很多地方都有应用，本文阐述该效果的实现方法。
            </div>
            <div class="read">
              <Button type="info" size="large" to="article">阅读本文</Button>
            </div>
          </li>
          <li>
            <router-link to="1" class="Astyle">vue注意点</router-link>
            <div class="release-time">
              <Icon type="md-alarm" />发表时间:
              <span>2019-8-10</span>
            </div>
            <div class="category">
              <Divider type="vertical" />
              <Icon type="ios-paper" />分类:
              <span>Node</span>
            </div>
            <div class="like">
              <Divider type="vertical" />
              <Icon type="md-thumbs-up" />点赞:(20)
            </div>
            <div class="content">
              吸顶元素就是当页面向下滑动，到达该元素位置时，该元素固定在顶部显示的效果。
              吸顶元素在很多地方都有应用，本文阐述该效果的实现方法。
            </div>
            <div class="read">
              <Button type="info" size="large">阅读本文</Button>
            </div>
          </li>
          <li>
            <router-link to="1" class="Astyle">vue注意点</router-link>
            <div class="release-time">
              <Icon type="md-alarm" />发表时间:
              <span>2019-8-10</span>
            </div>
            <div class="category">
              <Divider type="vertical" />
              <Icon type="ios-paper" />分类:
              <span>Node</span>
            </div>
            <div class="like">
              <Divider type="vertical" />
              <Icon type="md-thumbs-up" />点赞:(20)
            </div>
            <div class="content">
              吸顶元素就是当页面向下滑动，到达该元素位置时，该元素固定在顶部显示的效果。
              吸顶元素在很多地方都有应用，本文阐述该效果的实现方法。
            </div>
            <div class="read">
              <Button type="info" size="large">阅读本文</Button>
            </div>
          </li>
          <li>
            <router-link to="1" class="Astyle">vue注意点</router-link>
            <div class="release-time">
              <Icon type="md-alarm" />发表时间:
              <span>2019-8-10</span>
            </div>
            <div class="category">
              <Divider type="vertical" />
              <Icon type="ios-paper" />分类:
              <span>Node</span>
            </div>
            <div class="like">
              <Divider type="vertical" />
              <Icon type="md-thumbs-up" />点赞:(20)
            </div>
            <div class="content">
              吸顶元素就是当页面向下滑动，到达该元素位置时，该元素固定在顶部显示的效果。
              吸顶元素在很多地方都有应用，本文阐述该效果的实现方法。
            </div>
            <div class="read">
              <Button type="info" size="large">阅读本文</Button>
            </div>
          </li>
          <li>
            <router-link to="1" class="Astyle">vue注意点</router-link>
            <div class="release-time">
              <Icon type="md-alarm" />发表时间:
              <span>2019-8-10</span>
            </div>
            <div class="category">
              <Divider type="vertical" />
              <Icon type="ios-paper" />分类:
              <span>Node</span>
            </div>
            <div class="like">
              <Divider type="vertical" />
              <Icon type="md-thumbs-up" />点赞:(20)
            </div>
            <div class="content">
              吸顶元素就是当页面向下滑动，到达该元素位置时，该元素固定在顶部显示的效果。
              吸顶元素在很多地方都有应用，本文阐述该效果的实现方法。
            </div>
            <div class="read">
              <Button type="info" size="large">阅读本文</Button>
            </div>
          </li>
          <li>
            <router-link to="1" class="Astyle">vue注意点</router-link>
            <div class="release-time">
              <Icon type="md-alarm" />发表时间:
              <span>2019-8-10</span>
            </div>
            <div class="category">
              <Divider type="vertical" />
              <Icon type="ios-paper" />分类:
              <span>Node</span>
            </div>
            <div class="like">
              <Divider type="vertical" />
              <Icon type="md-thumbs-up" />点赞:(20)
            </div>
            <div class="content">
              吸顶元素就是当页面向下滑动，到达该元素位置时，该元素固定在顶部显示的效果。
              吸顶元素在很多地方都有应用，本文阐述该效果的实现方法。
            </div>
            <div class="read">
              <Button type="info" size="large">阅读本文</Button>
            </div>
          </li>
          <li>
            <router-link to="1" class="Astyle">vue注意点</router-link>
            <div class="release-time">
              <Icon type="md-alarm" />发表时间:
              <span>2019-8-10</span>
            </div>
            <div class="category">
              <Divider type="vertical" />
              <Icon type="ios-paper" />分类:
              <span>Node</span>
            </div>
            <div class="like">
              <Divider type="vertical" />
              <Icon type="md-thumbs-up" />点赞:(20)
            </div>
            <div class="content">
              吸顶元素就是当页面向下滑动，到达该元素位置时，该元素固定在顶部显示的效果。
              吸顶元素在很多地方都有应用，本文阐述该效果的实现方法。
            </div>
            <div class="read">
              <Button type="info" size="large">阅读本文</Button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
  data () {
    return {
      show: false
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.scroll = new Bscroll(this.$refs.wrapper, {
        mouseWheel: true
      })
    })
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
.blog {
  width: 100%;
  height: 100%;
  background-image: url(../../assets/blog-bg.png);
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
  position: relative;
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
  // 主体部分
  .wrapper {
    overflow: hidden;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 150px;
    left: 50%;
    transform: translateX(-50%);
    ul {
      width: 60%;
      margin: 0 auto;
      background-color: rgba(255, 255, 255, 0.7);
      li {
        padding: 40px 0 0;
        height: 400px;
        width: 500px;
        margin: 0 auto;
        text-align: center;
        box-sizing: border-box;
        border-bottom: 2px solid rgb(189, 189, 189);
        .Astyle {
          font-size: 20px;
          display: block;
          margin-bottom: 10px;
        }
        .release-time {
          color: rgb(0, 158, 250);
          display: inline-block;
        }
        .category {
          display: inline-block;
        }
        .like {
          color: rgb(255, 89, 98);
          display: inline-block;
        }
        .content {
          margin-top: 60px;
          font-size: 16px;
        }
        .read {
          margin-top: 60px;
        }
      }
    }
  }
}
</style>
