<template>
  <div class="blog">
    <Particles></Particles>
    <Nav></Nav>
    <div class="main">
      <div class="wrapper" ref="wrapper">
        <ul class="content">
          <li v-for="(item,i) in articles" :key="i">
            <router-link
              :to="{name:'articles', params: { id: item.postId }}"
              class="Astyle"
            >{{item.title}}</router-link>
            <div class="release-time">
              <Icon type="md-alarm" />发表时间:
              <span>{{time(item.date)}}</span>
            </div>
            <div class="category">
              <Divider type="vertical" />
              <Icon type="ios-paper" />分类:
              <span>{{item.tags.indexOf(',') ? item.tags.replace(',', ' ') : item.tags}}</span>
            </div>
            <div class="content" v-html="item.desc"></div>
            <div class="read">
              <button :to="{ name: 'articles', params: { id: item.postId }}">阅读本文</button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
import Nav from '../common/Nav'
import Particles from '../../util/Particles'
import { getArticleAll } from '../../../api'
import { formatTime } from '../../util/time'
export default {
  data () {
    return {
      articles: []
    }
  },
  components: {
    Nav,
    Particles
  },
  mounted () {
    this.$nextTick(() => {
      this.scroll = new Bscroll(this.$refs.wrapper, {
        mouseWheel: true
      })
    })
    this.getArticles()
  },
  methods: {
    getArticles () {
      getArticleAll().then(res => {
        console.log(res)
        this.articles = res.data.datalist[0].list
      })
    },
    time (date) {
      return formatTime(date, 'yyyy-mm-dd')
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
  // 主体部分
  .wrapper {
    overflow: hidden;
    position: absolute;
    width: 100%;
    height: 80%;
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
          button {
            position: relative;
            z-index: 1;
            border: none;
            outline: none;
            padding: 0.8em 1.4em;
            color: white;
            background-color: #000;
            &:hover {
              cursor: pointer;
            }
            &::before {
              content: '';
              position: absolute;
              z-index: -1;
              top: 0;
              left: 0;
              bottom: 0;
              right: 0;
              border: 5px solid #000;
              transform: scale(1);
              transform-origin: center;
            }
            &:hover::before {
              transition: all 0.75s ease-out;
              border: 1px solid#e6f7ff;
              transform: scale(1.25);
              opacity: 0;
            }
          }
        }
      }
    }
  }
}
</style>
