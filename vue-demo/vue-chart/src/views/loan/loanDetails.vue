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
    <div slot="mainContent" class="main-content">
      <!-- annual loan detail -->
      <Row>
        <Card>
          <div class="btn-wrap">
            <Button type="primary">当年</Button>
            <Button type="default">近 6 月</Button>
            <Button type="default">近 12 月</Button>
            <DatePicker type="daterange" format="yyyy/MM/dd" placement="bottom-end" placeholder="请选择日期范围" style="margin-left: 30px"></DatePicker>
          </div>
          <data-loan-details></data-loan-details>
        </Card>
      </Row>

      <Row :gutter="30">
        <Col span="7">
          <Card class="mid-card">
            <p class="card-title">7 月放款详情</p>
            <Row class="mid-row" type="flex" align="middle" justify="center">
              <i-circle
                :size="212"
                :trail-width="1"
                :percent="0">
                <div class="circle-text">
                  <h1>￥468,464.00</h1>
                  <p>累计放款量</p>
                </div>
              </i-circle>
            </Row>
          </Card>
        </Col>
        <Col span="17">
          <Card class="mid-card">
            <p class="card-title">7 月全程漏斗率</p>
            <Row class="mid-row" type="flex" align="middle" justify="center">
              <Col span="8">
                <i-circle
                  :size="212"
                  :trail-width="1"
                  :percent="0">
                  <div class="circle-text">
                    <h1>134,500</h1>
                    <p>累计进件量</p>
                  </div>
                </i-circle>
              </Col>
              <Col span="16" style="padding: 0 30px;">
                <div class="progress-wrap">
                  <p>初审通过率</p>
                  <Progress :percent="86"></Progress>
                </div>
                <div class="progress-wrap">
                  <p>面签通过率</p>
                  <Progress :percent="67"></Progress>
                </div>
                <div class="progress-wrap">
                  <p>调查征信通过率</p>
                  <Progress :percent="42"></Progress>
                </div>
                <div class="progress-wrap">
                  <p>审批通过及放款率</p>
                  <Progress :percent="25"></Progress>
                </div>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>

      <Row>
        <Card><data-branch-loan-details></data-branch-loan-details></Card>
      </Row>
    </div>
  </page-layout>
</template>
<script>
  import PageLayout from '../../components/PageLayout.vue'
  import DataLoanDetails from './components/DataLoanDetails.vue'
  import DataBranchLoanDetails from './components/DataBranchLoanDetails.vue'
  export default {
    components: {
      PageLayout,
      DataLoanDetails,
      DataBranchLoanDetails
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
    .ivu-card-body {
      padding: 20px 30px;
    }
    .mid-card {
      height: 375px;
      .card-title {
        font-size: 16px;
      }
      .mid-row {
        height: 310px;
        .circle-text {
          h1 {
            font-size: 30px;
            font-weight: normal;
          }
          p {
            margin-top: 15px;
            font-size: 14px;
            color: #B4B4B4;
          }
        }
      }
      .ivu-col {
        text-align: center;
        .progress-wrap {
          margin-bottom: 20px;
          p {
            font-size: 14px;
            /*padding-left: 10px;*/
            text-align: left;
          }
          .ivu-progress-outer {
            padding-right: 0;
            margin-right: 0;
            .ivu-progress-bg {
              background-color: #ECA27F;
            }
          }
          .ivu-progress-text {
            position: absolute;
            top: -22px;
            right: 0;
            font-size: 14px;
          }
        }
      }
    }
  }
</style>
