<style lang="less">
  @import './shrinkable-menu.less';
</style>

<template>
  <div class="shrinkable-menu" :style="{ background: bgColor }">
    <slot name="top"></slot>
    <sidebar-menu
      v-show="!shrink"
      :menu-theme="theme"
      :menu-list="menuList"
      :open-names="openNames"
      @on-change="menuSwitch"
    ></sidebar-menu>
    <sidebar-menu-shrink
      v-show="shrink"
      :menu-theme="theme"
      :menu-list="menuList"
      @on-change="menuSwitch"
    ></sidebar-menu-shrink>
  </div>
</template>
<script>
  import SidebarMenu from './child/SidebarMenu.vue'
  import SidebarMenuShrink from './child/SidebarMenuShrink.vue'
  export default {
    components: {
      SidebarMenu,
      SidebarMenuShrink
    },
    props: {
      shrink: {
        type: Boolean,
        default: false
      },
      menuList: {
        type: Array,
        required: true
      },
      theme: {
        type: String,
        default: 'dark'
      },
      beforePush: {
        type: Function
      },
      openNames: {
        type: Array
      }
    },
    computed: {
      bgColor () {
        return this.theme === 'dark' ? '#495060' : '#FFF'
      }
    },
    methods: {
      menuSwitch () {
      }
    }
  }
</script>
