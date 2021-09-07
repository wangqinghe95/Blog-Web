<template>
  <div id="app">
    <!-- 头部 -->
    <Headers></Headers>
    <!-- 主体 -->
    <div style="display:flex">
      <!-- 侧边栏 -->
      <Aside></Aside>
      <!-- 内容区域 -->
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Headers from './components/Header.vue'
import Aside from './components/Aside.vue'
export default {
  name: 'App',
  components: {
    Headers,
    Aside
  },
  data () {
    return {

    }
  }
}
</script>

<style>
#app {
  margin: 0px;
}
</style>
