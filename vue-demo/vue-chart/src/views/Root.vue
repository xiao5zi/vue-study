<template>
  <div class="root">
    <Layout class="root-layout">
      <Sider class="menu-wrap" width="100px" collapsible hide-trigger>
        <!--<div class="logo" slot="title" >-->
          <!--<Icon type="arrow-graph-up-right" :size="48"></Icon>-->
          <!--<p>大数据</p>-->
        <!--</div>-->
        <Menu mode="vertical" theme="dark" width="auto" @on-select="handleSelect">
          <MenuItem v-for="(item, index) in menuList" :name="item.name" :key="index">
            <Icon :type="item.icon" :size="24" style="margin-right: 0;"></Icon><p class="menu-text">{{ item.title }}</p>
          </MenuItem>
        </Menu>
      </Sider>

      <router-view></router-view>
      <!--<Layout>-->
        <!--<Content></Content>-->
      <!--</Layout>-->
    </Layout>
  </div>
</template>
<script>
  export default {
    components: {},
    data () {
      return {
        menuList: [
          {
            name: 'home_index',
            icon: 'home',
            title: '首页'
          },
          {
            name: 'loan_detail',
            icon: 'cash',
            title: '放贷详情'
          },
          {
            name: '2',
            icon: 'speedometer',
            title: '额度使用'
          },
          {
            name: '3',
            icon: 'funnel',
            title: '全程漏斗串'
          },
          {
            name: '4',
            icon: 'ios-timer',
            title: '逾期金额'
          }
        ]
      }
    },
    created () {
    },
    methods: {
      handleSelect (name) {
        console.log('name = ', name)
        this.$router.push({ name })
      }
    }
  }
</script>
<style lang="less">
  .root {
    position: relative;
    height: 100%;
    &-layout {
      height: 100%;
      /*background: #F0F4F5;*/
    }
    .menu-wrap {
      text-align: center;
      .logo {
        padding: 15px 12px;
        color: rgba(255, 255, 255, .7);
      }
      .menu-text {
        font-size: 12px;
      }
      .ivu-menu-item {
        padding: 15px;
      }
    }
  }
</style>
