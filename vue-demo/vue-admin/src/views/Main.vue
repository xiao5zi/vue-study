<style>
  @import './main.less';
</style>

<template>
  <div class="main" :class="{'main-hide-text': shrink}">
    <!-- left sidebar menu -->
    <div class="sidebar-menu-wrap">
      <shrinkable-menu :shrink="shrink">
        <div slot="top" class="logo-wrap"></div>
      </shrinkable-menu>
    </div>
    <!-- main header -->
    <div class="main-header-wrap">
      <div class="main-header"></div>
    </div>
    <!-- main area -->
    <div class="single-page-con">
      <div class="single-page">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        shrink: false
      }
    },
    computed: {
    },
    methods: {
    }
  }
</script>
