<template>
    <Layout class="page-layout">
      <Header class="page-layout-header">
        <Row class="header-row" type="flex" align="middle">
          <Col span="12"><slot name="headTitle"></slot></Col>
          <Col span="12" class="col-right"><slot name="headRight"></slot></Col>
        </Row>
      </Header>

      <Content class="page-layout-content">
        <slot name="mainContent"></slot>
      </Content>
    </Layout>
</template>
<script>
  export default {
    components: {},
    data () {
      return {}
    },
    methods: {}
  }
</script>
<style lang="less">
  .page-layout {
    &-header {
      height: 148px;
      padding: 0;
      line-height: 1.5;
      background: #FFF;
      box-shadow: 0 1px 6px rgba(0,0,0,.2);
      .header-row {
        padding: 30px;
        height: 100%;
        .col-right {
          text-align: right;
        }
      }
      .header-title {
        font-size: 26px;
        &-en {
          font-size: 12px;
        }
      }
      .header-right {
        .ivu-btn {
          width: 80px;
          margin-left: 10px;
        }
      }
    }
    &-content {
      padding: 30px;
      .main-content {
        >.ivu-row {
          margin-bottom: 30px;
        }
      }
    }
  }
</style>
