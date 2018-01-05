<template>
  <div>
    <template v-for="(item, index) in menuList">
      <div style="text-align: center" :key="index">
        <Dropdown v-if="item.children.length !== 1" placement="right-start" :key="index" @on-click="changeMenu">
          <Button type="text">
            <Icon :type="item.icon" :size="20"></Icon>
          </Button>
          <DropdownMenu slot="list">
            <template v-for="(child, idx) in item.children">
              <DropdownItem :name="child.name" :key="idx">
                <Icon :type="child.icon"></Icon>
                <span>{{ itemTitle(child) }}</span>
              </DropdownItem>
            </template>
          </DropdownMenu>
        </Dropdown>

        <Dropdown transfer v-else placement="right-start" :name="item.name" :key="item.name">
          <template slot="title">
            <Icon :type="item.icon" :size="iconSize"></Icon>
          </template>
          <template v-for="(child, index) in item.children">
            <MenuItem :name="child.name" :key="child.name">
              <Icon :type="child.icon" :size="iconSize"></Icon>
            </MenuItem>
          </template>
        </Dropdown>
      </div>
    </template>
  </div>
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
      }
    }
  }
</script>
