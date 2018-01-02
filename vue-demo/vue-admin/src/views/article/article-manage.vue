<template>
    <div class="article-manage">
      <!-- query -->
      <Card :bordered="false" dis-hover>
        <p slot="title">文章查询</p>
        <Row :gutter="10" type="flex" align="middle">
          <Col span="2" style="text-align: right">文章标题：</Col>
          <Col span="4"><Input placeholder="请输入关键字" /></Col>
          <Col span="2" style="text-align: right">发布人：</Col>
          <Col span="4">
            <Select placeholder="请选择发布人">
              <Option value="1">张三三</Option>
              <Option value="2">令狐冲</Option>
            </Select>
          </Col>
          <Col span="2" style="text-align: right">发布时间：</Col>
          <Col span="4"><DatePicker type="datetime" format="yyyy-MM-dd HH:mm" placeholder="请选择日期"></DatePicker></Col>
          <Col span="4"><DatePicker type="datetime" format="yyyy-MM-dd HH:mm" placeholder="请选择日期"></DatePicker></Col>
          <Col span="2" style="text-align: right"><Button type="primary" style="margin-right: 30px">查询</Button></Col>
        </Row>
      </Card>

      <!-- list -->
      <Card :bordered="false" dis-hover>
        <p slot="title">文章列表</p>
        <Table
          border
          stripe
          ref="articleList"
          :data="articleList"
          :columns="columnTitle"
          @on-selection-change="onSelectChange"
        ></Table>
        <Row class="table-footer">
          <Col span="8"><Button type="error" @click="remove">删除</Button><Button type="primary" @click="editItem">新增</Button></Col>
          <Col span="16"><Page :total="100" show-total></Page></Col>
        </Row>
      </Card>

      <!-- edit -->
      <Modal :title="editTitle" v-model="editable" :mask-closable="false" :closable="false" :width="800">
        <Form :model="articleForm" :label-width="80">
          <Row><FormItem label="文章标题："><Input placeholder="请输入文章标题"/></FormItem></Row>
          <Row><FormItem label="来源："><Input placeholder="请输入来源"/></FormItem></Row>
          <Row><FormItem label="发布人："><Input placeholder="请输入发布人"/></FormItem></Row>
          <Row><FormItem label="文章内容："><Input type="textarea" :rows="5" placeholder="请输入文章内容"/></FormItem></Row>
        </Form>
      </Modal>
    </div>
</template>

<script>
  export default {
    components: {},
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
            title: '文章标题',
            key: 'title',
            align: 'center'
          },
          {
            title: '文章内容',
            key: 'content',
            align: 'center',
            ellipsis: true
          },
          {
            title: '来源',
            key: 'source',
            align: 'center'
          },
          {
            title: '发布人',
            key: 'publisher',
            align: 'center'
          },
          {
            title: '发布时间',
            key: 'publishTime',
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
//                h('Button', {
//                  props: { size: 'small', type: 'error' },
//                  on: {
//                    click: () => {
//                      this.remove(params.index)
//                    }
//                  }
//                }, '删除')
              ])
            }
          }
        ],
        articleList: [
          {
            title: '这是文章标题1',
            source: '新华网',
            publisher: '张三三',
            publishTime: '2017-12-27 09:33:34',
            content: '这是什么鬼，如果文章内容超出了怎么办？这是什么鬼，如果文章内容超出了怎么办？'
          },
          {
            title: '这是文章标题2',
            source: '新华网',
            publisher: '张三三',
            publishTime: '2017-12-27 09:33:34'
          },
          {
            title: '这是文章标题3',
            source: '新华网',
            publisher: '张三三',
            publishTime: '2017-12-27 09:33:34'
          },
          {
            title: '这是文章标题4',
            source: '新华网',
            publisher: '张三三',
            publishTime: '2017-12-27 09:33:34'
          },
//          {
//            title: '这是文章标题5',
//            source: '新华网',
//            publisher: '张三三',
//            publishTime: '2017-12-27 09:33:34'
//          },
//          {
//            title: '这是文章标题6',
//            source: '新华网',
//            publisher: '张三三',
//            publishTime: '2017-12-27 09:33:34'
//          },
//          {
//            title: '这是文章标题7',
//            source: '新华网',
//            publisher: '张三三',
//            publishTime: '2017-12-27 09:33:34'
//          },
//          {
//            title: '这是文章标题8',
//            source: '新华网',
//            publisher: '张三三',
//            publishTime: '2017-12-27 09:33:34'
//          },
          {
            title: '这是文章标题9',
            source: '新华网',
            publisher: '张三三',
            publishTime: '2017-12-27 09:33:34'
          },
          {
            title: '这是文章标题10',
            source: '新华网',
            publisher: '张三三',
            publishTime: '2017-12-27 09:33:34'
          }
        ],
        editable: false,
        editTitle: '',
        articleForm: {}
      }
    },
    methods: {
      show (index) {
        this.$Modal.info({
          title: '文章信息',
          content: `标题：${this.articleList[index].title}<br>来源：${this.articleList[index].source}<br>发布人：${this.articleList[index].publisher}<br>发布时间：${this.articleList[index].publishTime}<br>文章内容：${this.articleList[index].content || ''}`
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
      onSelectChange (items) {
        console.log('onSelectChange: ', items)
      }
    }
  }
</script>

<style lang="less">
  .article-manage {
    .ivu-card-head {
      /*background: #F0F0F0;*/
    }
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
