<style lang="less">
  @import './main.less';
</style>

<template>
  <div class="main" :class="{'main-hide-text': shrink}">
    <!-- left sidebar menu -->
    <div class="sidebar-menu-wrap" :style="{ width: shrink ? '60px' : '200px'}">
      <shrinkable-menu :shrink="shrink" :menu-list="menuList">
        <div slot="top" class="logo-wrap">
          <span v-show="!shrink">Admin System</span>
          <span v-show="shrink">AS</span>
        </div>
      </shrinkable-menu>
    </div>

    <!-- main header -->
    <div class="main-header-wrap" :style="{ paddingLeft: shrink ? '60px' : '200px' }">
      <div class="main-header">
        <div class="header-menu-icon">
          <Button type="text" @click="toggleMenu" :style="{ transform: 'rotateZ(' + (this.shrink ? '-90' : '0') + 'deg)' }"><Icon type="navicon" size="32"></Icon></Button>
        </div>
        <div class="header-path-wrap">
          <BreadcrumbNav :currentPath="currPath"></BreadcrumbNav>
        </div>
        <div class="header-avatar-wrap">
          <Row class="user-drop-down" type="flex" justify="end" align="middle">
            <Dropdown trigger="click">
              <a href="javascript: void(0)">
                <span style="font-size: 14px">{{ 'admin' }}</span>
                <Icon type="arrow-down-b"></Icon>
              </a>
              <DropdownMenu slot="list">
                <DropdownItem>个人中心</DropdownItem>
                <DropdownItem divided>退出登录</DropdownItem>
              </DropdownMenu>
            </Dropdown>
            <Avatar icon="person" style="margin-left: 10px"></Avatar>
          </Row>
        </div>
      </div>
    </div>

    <!-- main area -->
    <div class="main-page-wrap" :style="{ left: shrink ? '60px' : '200px' }">
      <div class="main-page">
        <router-view></router-view>
      </div>
    </div>

    <!-- main footer -->
    <footer class="main-footer" :style="{ paddingLeft: shrink ? '60px' : '200px' }">
      <p>&copy; {{ (new Date()).getFullYear() }} by Sean. All Rights Reserved.</p>
    </footer>
  </div>
</template>
<script>
  import ShrinkableMenu from '../components/shrinkable-menu/shrinkable-menu.vue'
  import BreadcrumbNav from '../components/breadcrumb-nav.vue'
  export default {
    components: {
      ShrinkableMenu,
      BreadcrumbNav
    },
    data () {
      return {
        shrink: false
      }
    },
    created () {
      this.init()
    },
    computed: {
      menuList () {
        return this.$store.state.app.menuList
      },
      currPath () {
        return this.$store.state.app.currentPath
      }
    },
    methods: {
      init () {

      },
      toggleMenu () {
        this.shrink = !this.shrink
      }
    }
  }
</script>
