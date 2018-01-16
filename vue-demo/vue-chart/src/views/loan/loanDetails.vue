<template>
  <page-layout class="loan-detail">
    <!-- header title -->
    <div slot="headTitle" class="header-title">
      <p>放贷详情</p>
      <p class="header-title-en">Loan details</p>
    </div>

    <!-- header right area-->
    <div slot="headRight" class="header-right">
      <Button type="primary">月</Button>
      <Button type="default">周</Button>
      <Select placeholder="分公司筛选" style="width: 110px; margin-left: 30px; text-align: left">
        <Option value="0">南山分公司</Option>
      </Select>
    </div>

    <!-- main content -->
    <div slot="mainContent">
      <!-- annual loan detail -->
      <Row>
        <Card>
          <div class="btn-wrap">
            <Button type="primary">当年</Button>
            <Button type="default">近 6 月</Button>
            <Button type="default">近 12 月</Button>
            <DatePicker type="daterange" format="yyyy/MM/dd" placement="bottom-end" placeholder="请选择日期范围" style="margin-left: 30px"></DatePicker>
          </div>
          <data-chart-loan-detail></data-chart-loan-detail>
        </Card>
      </Row>

      <Row :gutter="30">
        <Col span="7">
          <Card class="mid-card">
            <p>7 月放款详情</p>
          </Card>
        </Col>
        <Col span="17">
          <Card class="mid-card">
            <p>7 月全程漏斗率</p>
            <Row>
              <Col span="8">
              <i-circle
                :size="250"
                :trail-width="5"
                :stroke-width="5"
                :percent="75">
                <div class="demo-Circle-custom">
                  <h1>42,001,776</h1>
                  <p>消费人群规模</p>
                  <span>总占人数<i>75%</i></span>
                </div>
              </i-circle>
              </Col>
              <Col span="16"></Col>
            </Row>
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
  import DataChartLoanDetail from './components/DataChartLoanDetail.vue'
  export default {
    components: {
      PageLayout,
      DataChartLoanDetail
    },
    data () {
      return {}
    },
    methods: {}
  }
</script>
<style lang="less">
  .loan-detail {
    .btn-wrap {
      text-align: right;
      .ivu-btn {
        width: 80px;
        margin-left: 10px;
      }
    }
    .mid-card {
      height: 375px;
    }
  }
</style>
