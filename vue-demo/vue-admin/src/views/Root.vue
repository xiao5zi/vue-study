<!--
* Created by Sean on 2017/11/28.
* Root
-->
<template>
  <div class="root-layout" :class="{'layout-hide-text': spanLeft < 4}">
    <Row type="flex">
      <Col :span="spanLeft" class="layout-menu-left">
        <Menu active-name="1-2" theme="dark" width="auto" :open-names="['1']">
          <div class="layout-logo-left">Admin System</div>
          <Submenu name="1">
            <template slot="title">
              <Icon type="ios-navigate" :size="iconSize"></Icon>
              <span class="layout-text">订单管理</span>
            </template>
            <MenuItem name="1-1" @click.native="toPage">订单信息</MenuItem>
            <MenuItem name="1-2">合同管理</MenuItem>
            <MenuItem name="1-3">账单管理</MenuItem>
          </Submenu>
          <Submenu name="2">
            <template slot="title">
              <Icon type="ios-keypad" :size="iconSize"></Icon>
              <span class="layout-text">会员管理</span>
            </template>
            <MenuItem name="2-1">会员信息</MenuItem>
            <MenuItem name="2-2">会员短信</MenuItem>
          </Submenu>
          <Submenu name="3">
            <template slot="title">
              <Icon type="ios-analytics" :size="iconSize"></Icon>
              <span class="layout-text">权限管理</span>
            </template>
            <MenuItem name="3-1">用户管理</MenuItem>
            <MenuItem name="3-2">角色管理</MenuItem>
          </Submenu>
        </Menu>
      </Col>
      <Col :span="spanRight" class="layout-main-right">
        <div class="layout-header">
          <Button type="text" @click="toggleClick">
            <Icon type="navicon" size="32"></Icon>
          </Button>
        </div>
        <div class="layout-breadcrumb">
          <Breadcrumb separator=">">
            <BreadcrumbItem to="/">订单管理</BreadcrumbItem>
            <BreadcrumbItem>订单信息</BreadcrumbItem>
          </Breadcrumb>
        </div>
        <div class="layout-content">
          <router-view></router-view>
        </div>
        <div class="layout-copy">2011-2018 &copy; Company</div>
      </Col>
    </Row>
  </div>
</template>
<script>
  export default {
    components: {},
    data () {
      return {
        spanLeft: 4,
        spanRight: 20
      }
    },
    created () {
    },
    computed: {
      iconSize () {
        return this.spanLeft === 4 ? 16 : 28
      }
    },
    methods: {
      toggleClick () {
        if (this.spanLeft === 4) {
          this.spanLeft = 2
          this.spanRight = 22
        } else {
          this.spanLeft = 4
          this.spanRight = 20
        }
      },
      toPage () {
        console.log(111)
        this.$router.push('/order')
      }
    }
  }
</script>
<style lang="less">
  .root-layout,
  .ivu-row-flex {
    height: 100vh;
  }
  .root-layout {
    background: #f5f7f9;
    position: relative;
    overflow: hidden;
    .ivu-col {
      transition: width .2s ease-in-out;
    }
    .layout-menu-left {
      background: #464c5b;
    }
    .layout-main-right {
      display: flex;
      flex-direction: column;
      &>div {
        flex: 0 1 auto;
      }
      .layout-header {
        height: 56px;
        background: #fff;
        box-shadow: 0 1px 1px rgba(0,0,0,.1);
      }
      .layout-breadcrumb {
        padding: 10px 15px 0;
      }
      .layout-content {
        flex-grow: 1;
        min-height: 200px;
        margin: 15px;
        overflow: hidden;
        background: #fff;
        border-radius: 4px;
        .layout-content-main {
          padding: 10px;
        }
      }
      .layout-copy {
        text-align: center;
        padding: 0 0 10px;
        color: #9ea7b4;
      }
    }
    .layout-logo-left {
      width: 90%;
      height: 30px;
      margin: 15px auto;
      font-size: 15px;
      line-height: 2;
      color: #fff;
      text-align: center;
      background: #5b6270;
      border-radius: 3px;
    }
    /*.layout-ceiling-main a {*/
      /*color: #9ba7b5;*/
    /*}*/
  }
  .layout-hide-text {
    .layout-text {
      display: none;
    }
  }
</style>
