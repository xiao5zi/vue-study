<template>
  <page-layout class="lines-used">
    <!-- header title -->
    <div slot="headTitle" class="header-title">
      <p>额度使用详情</p>
      <p class="header-title-en">Lines used for details</p>
    </div>

    <!-- main content -->
    <div slot="mainContent" class="main-content">
      <Row :gutter="30">
        <Col span="16">
          <Card>
            <p class="card-title">总额度及其使用情况</p>
            <data-chart01></data-chart01>
          </Card>
        </Col>
        <Col span="8">
          <Card>
            <p class="card-title">机构放款时效</p>
          </Card>
        </Col>
      </Row>

      <Row>
        <Card></Card>
      </Row>
    </div>
  </page-layout>
</template>
<script>
  import PageLayout from '../../components/PageLayout.vue'
  import DataChart01 from './components/DataChart01.vue'
  export default {
    components: {
      PageLayout,
      DataChart01
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
