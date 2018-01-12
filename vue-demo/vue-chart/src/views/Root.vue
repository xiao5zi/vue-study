<template>
  <div class="root">
    <div class="menu-wrap">
      <div class="logo" slot="title">
        <Icon type="arrow-graph-up-right" :size="48"></Icon>
        <!--<p>大数据</p>-->
      </div>
      <Menu mode="vertical" theme="dark" width="auto" @on-select="handleSelect">
        <MenuItem v-for="(item, index) in menuList" :name="item.name" :key="index">
          <Icon :type="item.icon" :size="24" style="margin-right: 0;"></Icon><p class="menu-text">{{ item.title }}</p>
        </MenuItem>
      </Menu>
    </div>

    <div class="main-wrap">
      <router-view></router-view>
    </div>
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
  html, body {
    width: 100vw;
    height: 100vh;
  }
  .root {
    position: relative;
    min-height: 100vh;
    background: #F0F4F5;
    .menu-wrap {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      z-index: 1;
      width: 100px;
      text-align: center;
      background: #495060;
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
    .main-wrap {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 0;
      padding-left: 100px;
      .top-panel {

      }
      .main-panel {
        padding: 30px;
      }
    }
  }
</style>
