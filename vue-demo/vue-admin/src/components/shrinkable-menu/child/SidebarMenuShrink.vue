<template>
  <div>
    <template v-for="(item, index) in menuList">
      <div :key="index">
        <Dropdown v-if="item.children.length !== 1" placement="right-start" :key="index" @on-click="changeMenu">
          <Button type="text" style="width: 70px; margin-left: -5px; padding: 10px 0;">
            <Icon :type="item.icon" :size="20" :color="iconColor"></Icon>
          </Button>
          <DropdownMenu slot="list" style="width: 200px;">
            <template v-for="(child, idx) in item.children">
              <DropdownItem :name="child.name" :key="idx">
                <Icon :type="child.icon"></Icon>
                <span style="margin-left: 10px;">{{ menuTitle(child) }}</span>
              </DropdownItem>
            </template>
          </DropdownMenu>
        </Dropdown>

        <Dropdown transfer v-else placement="right-start" :key="index" @on-click="changeMenu">
          <Button type="text" @click="changeMenu(item.children[0].name)" style="width: 70px; margin-left: -5px; padding: 10px 0;">
            <Icon :type="item.icon" :size="20" :color="iconColor"></Icon>
          </Button>
          <DropdownMenu slot="list" style="width: 200px;">
            <DropdownItem :name="item.children[0].name" :key="'i' + index">
              <Icon :type="item.icon"></Icon>
              <span style="margin-left: 10px;">{{ menuTitle(item.children[0]) }}</span>
            </DropdownItem>
          </DropdownMenu>
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
      iconColor: {
        type: String,
        default: 'white'
      },
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
        if (typeof item.title === 'object') {
//          console.log('item.title = ', item.title)
          return this.$t(item.title.i18n)
        } else {
          return item.title
        }
      }
    }
  }
</script>
