<style lang="less">
  @import './main.less';
</style>

<template>
  <div class="main" :class="{'main-hide-text': shrink}">
    <!-- left sidebar menu -->
    <div class="sidebar-menu-wrap" :style="{ width: shrink ? '60px' : '200px', overflow: shrink ? 'visible' : 'auto' }">
      <shrinkable-menu :shrink="shrink" :menu-list="menuList">
        <div slot="top" class="logo-wrap">Admin System</div>
      </shrinkable-menu>
    </div>
    <!-- main header -->
    <div class="main-header-wrap">
      <div class="main-header">
        <div class="nav-icon">
          <Button type="text"><Icon type="navicon" size="32"></Icon></Button>
        </div>
        <div class="header-dropdown-menu">
        </div>
      </div>
    </div>
    <!-- main area -->
    <div class="single-page-wrap">
      <div class="single-page">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script>
  import ShrinkableMenu from '../components/shrinkable-menu/shrinkable-menu.vue'
  export default {
    components: {
      ShrinkableMenu
    },
    data () {
      return {
        shrink: false
      }
    },
    computed: {
      menuList () {
        console.log('menuList: ', this.$store.state.app.menuList)
        return this.$store.state.app.menuList
      }
    },
    methods: {
    }
  }
</script>
