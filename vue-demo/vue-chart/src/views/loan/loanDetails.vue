<template>
  <page-layout class="loan-detail">
    <div slot="topTitle">放贷详情</div>
    <div slot="topRight">
      <Button type="primary">月</Button>
      <Button type="primary">周</Button>
    </div>
    <div slot="mainArea">
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
  .loan-detail {
    .top-panel {
    }
  }
</style>
