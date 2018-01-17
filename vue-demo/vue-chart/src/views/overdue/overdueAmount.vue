<template>
  <page-layout class="overdue-amount">
    <!-- header title -->
    <div slot="headTitle" class="header-title">
      <p>逾期金额详情</p>
      <p class="header-title-en">Details on overdue amount</p>
    </div>

    <!-- header right area-->
    <div slot="headRight" class="header-right">
      <Button type="primary">自营</Button>
      <Button type="default">代理</Button>
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
</style>
