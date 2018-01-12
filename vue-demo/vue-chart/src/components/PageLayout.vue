<template>
    <div class="page-layout">
      <div class="page-layout-top">
        <Row class="content" type="flex" align="middle">
          <Col span="12"><slot name="topTitle"></slot></Col>
          <Col span="12" class="text-align"><slot name="topRight"></slot></Col>
        </Row>
      </div>

      <div class="page-layout-main">
        <slot name="mainArea"></slot>
      </div>
    </div>
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
    &-top {
      width: 100%;
      height: 148px;
      background: #FFF;
      .content {
        padding: 30px;
        height: 100%;
      }
      .text-align {
        text-align: right;
      }
    }
    &-main {
      padding: 30px;
    }
  }
</style>
