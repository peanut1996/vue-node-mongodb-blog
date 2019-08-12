<template>
  <div class="articles">
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
    <nav></nav>
    <main>
      <div class="main-inner">
        <div class="content">
          <div class="post-expand">
            <div class="comment-body markdown-body" v-html="detail.detail"></div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
// import { getDetail, readCountIncrease } from '../../../api'

export default {
  data () {
    return {
      detail: {}
    }
  },
  mounted () {
    // readCountIncrease(this.$route.params.id)
    // getDetail(this.$route.params.id).then(res => {
    //   console.log(res)
    //   this.detail = res.data
    //   document.title = `${res.data.title}`
    // })
  },
  methods: {}
}
</script>

<style lang='scss' scoped>
.articles {
  width: 100%;
  height: 100%;
  background-image: url(../../assets/blog-bg.png);
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
  position: relative;
  .main {
    .main-inner {
      width: 700px;
      height: auto;
      margin: 0 auto;
      min-width: 350px;
    }
    .post-body {
      font-family: 'Roboto Slab', 'Roboto Slab', 'PingFang SC',
        'Microsoft YaHei', sans-serif;
      color: #555;
    }
    @media screen and(max-width:768px) {
      .main-inner {
        width: 94%;
      }
    }
    code {
      padding: 0.2em 0.4em;
      margin: 0;
      font-size: 85%;
      background-color: rgba(27, 31, 35, 0.05);
      border-radius: 3px;
    }
  }
  .comment-body {
    width: 100%;
    padding: 15px;
    overflow: visible;
    font-size: 14px;
    color: #24292e;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial,
      sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
  }
  .markdown-body blockquote {
    margin-left: 0;
  }
  a {
    color: #0366d6;
    text-decoration: none;
  }
}
</style>
