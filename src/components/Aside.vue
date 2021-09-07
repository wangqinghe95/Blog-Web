<!--  -->
<template>
  <div class=''>
    <el-menu
        style="width:200px; min-height:calc(100vh - 50px)"
        default-active="2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose">
    <el-submenu index="1-4">
      <template slot="title">选项1</template>
      <el-menu-item index="1-4-1">选项1-1</el-menu-item>
    </el-submenu>
    <el-menu-item index="2">
      <i class="el-icon-menu"></i>
      <span slot="title">导航二</span>
    </el-menu-item>
    <el-menu-item index="4">
      <i class="el-icon-setting"></i>
      <span slot="title">导航四</span>
    </el-menu-item>
    </el-menu>
  </div>
</template>

<script>

export default {
  components: {},
  data () {
    return {

    }
  },
  computed: {},
  watch: {},
  methods: {
    handleOpen () {

    },
    handleClose () {

    }
  },
  created () {

  },
  mounted () {

  },
  beforeCreate () {},
  beforeMount () {},
  beforeUpdate () {},
  updated () {},
  beforeDestroy () {},
  destroyed () {},
  activated () {}
}
</script>
<style lang='less' scoped>

</style>
