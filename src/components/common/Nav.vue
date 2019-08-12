<template>
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
    }
  }
}
</script>

<style lang='scss' scoped>
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
</style>
