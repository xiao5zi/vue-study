<template>
  <Menu ref="sideMenu" :active-name="$route.name" :open-names="openNames" :theme="menuTheme" width="auto" @on-select="changeMenu">
    <template v-for="item in menuList">
      <MenuItem v-if="item.children.length <= 1" :name="item.children[0].name" :key="item.path">
        <Icon :type="item.icon" :size="iconSize" :key="item.path"></Icon>
        <span class="layout-text" :key="item.path">{{ menuTitle(item) }}</span>
      </MenuItem>

      <Submenu v-if="item.children.length > 1" :name="item.name" :key="item.path">
        <template slot="title">
          <Icon :type="item.icon" :size="iconSize">{{ item.name }}</Icon>
          <span class="layout-text">{{ menuTitle(item) }}</span>
        </template>
        <template v-for="(child, index) in item.children">
          <MenuItem :name="child.name" :key="child.name">
            <Icon :type="child.icon" :size="iconSize">{{ child.title }}</Icon>
            <span class="layout-text">{{ menuTitle(item) }}</span>
          </MenuItem>
        </template>
      </Submenu>
    </template>
  </Menu>
</template>
<script>
  export default {
    props: {
      menuList: Array,
      iconSize: Number,
      menuTheme: {
        type: String,
        default: 'dark'
      },
      openNames: {
        type: Array
      }
    },
    methods: {
      changeMenu (active) {
        this.$emit('on-change', active)
      },
      menuTitle (item) {
        console.log('menuTitle: ', typeof item.title === 'object', item.title)
        if (typeof item.title === 'object') {
          console.log('item.title = ', item.title)
          return this.$t(item.title.i18n)
        } else {
          return item.title
        }
      }
    }
  }
</script>
