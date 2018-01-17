<template>
  <page-layout class="funnel-rate-details">
    <!-- header title -->
    <div slot="headTitle" class="header-title">
      <p>全程漏斗率详情</p>
      <p class="header-title-en">The whole funnel rate details</p>
    </div>

    <!-- header right area-->
    <div slot="headRight" class="header-right">
      <Button type="primary">End to End</Button>
      <Button type="default">非End to End</Button>
    </div>

    <!-- main content -->
    <div slot="mainContent" class="main-content">
      <Card></Card>
    </div>
  </page-layout>
</template>
<script>
  import PageLayout from '../../components/PageLayout.vue'
  export default {
    components: {
      PageLayout
    },
    data () {
      return {}
    },
    created () {
    },
    methods: {}
  }
</script>
<style lang="less">
  .funnel-rate-details {
    .header-right {
      .ivu-btn {
        width: 110px;
      }
    }
  }
</style>
