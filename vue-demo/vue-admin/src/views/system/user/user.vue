<style lang="less">
</style>

<template>
    <div class="user">
      <!-- query -->
      <Card :bordered="false" dis-hover>
        <p slot="title">用户查询</p>
        <Row :gutter="10" type="flex" align="middle">
          <Col span="2" style="text-align: right">名字：</Col>
          <Col span="4"><Input placeholder="请输入关键字" /></Col>
          </Col>
          <Col span="2" style="text-align: right">时间：</Col>
          <Col span="4"><DatePicker type="datetime" format="yyyy-MM-dd HH:mm" placeholder="请选择日期"></DatePicker></Col>
          <Col span="4"><DatePicker type="datetime" format="yyyy-MM-dd HH:mm" placeholder="请选择日期"></DatePicker></Col>
          <Col span="2" style="text-align: right"><Button type="primary" style="margin-right: 30px">查询</Button></Col>
        </Row>
      </Card>

      <!-- list -->
      <Card :bordered="false" dis-hover>
        <p slot="title">用户列表</p>
        <Table
          border
          stripe
          ref="userList"
          :data="userList"
          :columns="columnTitle"
          @on-selection-change="onSelectChange"
        ></Table>
        <Row class="table-footer">
          <Col span="8"><Button type="error" @click="remove">删除</Button><Button type="primary" @click="editItem">新增</Button></Col>
          <Col span="16"><Page :total="100" show-total></Page></Col>
        </Row>
      </Card>
    </div>
</template>
<script>
  export default {
    data () {
      return {
        columnTitle: [
          {
            type: 'selection',
            align: 'center',
            width: 55
          },
          {
            title: '序号',
            type: 'index',
            align: 'center',
            width: 65
          },
          {
            title: '名称',
            key: 'username',
            align: 'center'
          },
          {
            title: '性别',
            key: 'sex',
            align: 'center'
          },
          {
            title: '生日',
            key: 'birth',
            align: 'center'
          }
        ],
        userList: [
          {}
        ]
      }
    },
    created () {
    },
    methods: {
      remove (index) {
        this.$Modal.confirm({
          title: '提示框',
          content: '确认删除该条数据？',
          onOk: () => {
            this.articleList.splice(index, 1)
          }
        })
      },
      editItem (item) {
        this.editable = true
        console.log('item: ', item)
        if (item) {
          this.editTitle = '编辑文章'
        } else {
          this.editTitle = '新增文章'
        }
      },
      onSelectChange () {

      }
    }
  }
</script>

<style lang="less">
  .user {
    .table-footer {
      margin-top: 16px;
      .ivu-btn {
        margin-right: 10px;
      }
      .ivu-page {
        text-align: right;
      }
    }
  }
</style>
