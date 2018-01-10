<style lang="less">
  @import 'home.less';
</style>

<template>
  <div class="home">
    <Row :gutter="10">
      <Col span="8">
        <Card dis-hover>
          <p slot="title">折线图</p>
          <div class="chart-wrap"><chart-line></chart-line></div>
        </Card>
      </Col>
      <Col span="8">
        <Card dis-hover>
          <p slot="title">柱状图</p>
          <div class="chart-wrap"><chart-bar></chart-bar></div>
        </Card>
      </Col>
      <Col span="8">
        <Card dis-hover>
          <p slot="title">饼图</p>
          <div class="chart-wrap"><chart-pie></chart-pie></div>
        </Card>
      </Col>
    </Row>
  </div>
</template>
<script>
  import ChartLine from './components/ChartLine.vue'
  import ChartBar from './components/ChartBar.vue'
  import ChartPie from './components/ChartPie.vue'
  export default {
    components: {
      ChartLine,
      ChartBar,
      ChartPie
    },
    data () {
      return {}
    },
    created () {
    },
    methods: {}
  }
</script>
