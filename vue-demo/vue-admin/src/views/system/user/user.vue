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
            title: '用户名',
            key: 'username',
            align: 'center'
          },
          {
            title: '头像',
            key: 'avatar',
            align: 'center',
            render: (h, params) => {
              return h('img', {
                attrs: {
                  src: params.row.avatar
                },
                style: {
                  width: '50px'
                }
              }, [])
            }
          },
          {
            title: '昵称',
            key: 'nickname',
            align: 'center'
          },
          {
            title: '手机号',
            key: 'mobile',
            align: 'center'
          },
          {
            title: '性别',
            key: 'sex',
            align: 'center'
          },
          {
            title: '出生日期',
            key: 'birthdate',
            align: 'center'
          },
          {
            title: '登录时间',
            key: 'loginTime',
            align: 'center'
          },
          {
            title: '登录地址',
            key: 'loginLocation',
            align: 'center'
          },
          {
            title: '操作',
            key: 'action',
            align: 'center',
            width: 140,
            render: (h, params) => {
              return h('div', [
                h('Button', {
                  props: { size: 'small', type: 'primary' },
                  style: { marginRight: '5px' },
                  on: {
                    click: () => {
                      this.editItem(params)
                    }
                  }
                }, '编辑'),
                h('Button', {
                  props: { size: 'small' },
                  style: { marginRight: '5px' },
                  on: {
                    click: () => {
                      this.show(params.index)
                    }
                  }
                }, '查看')
              ])
            }
          }
        ],
        userList: [
          {
            username: 'LHC',
            avatar: require('../../../images/lhc.jpg'),
            nickname: '令狐冲',
            mobile: '19812345678',
            sex: '男',
            birthdate: '1042年1月24日',
            loginTime: '2018-1-4 10:46:54',
            loginLocation: '深圳南山区'
          }
        ]
      }
    },
    methods: {
      show (index) {
        this.$Modal.info({
          title: '用户信息',
          content: `用户名：${this.userList[index].username}<br>昵称：${this.userList[index].nickname}<br>性别：${this.userList[index].sex}<br>出生日期：${this.userList[index].birthdate}<br>手机号：${this.userList[index].mobile || ''}`
        })
      },
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
