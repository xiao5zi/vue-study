<template>
    <div class="article-list">
      <Card :bordered="false" dis-hover>
        <p slot="title">文章查询</p>
        <Row>
          <Col span="4"><Input placeholder="请输入关键字" /></Col>
          <Col span="4" offset="1">
            <Select placeholder="请选择发布人">
              <Option value="1">张三三</Option>
              <Option value="2">令狐冲</Option>
            </Select>
          </Col>
          <Col span="4" offset="1"><Input placeholder="请输入关键字" /></Col>
          <Col span="3" offset="1"><Button type="primary" style="margin-right: 30px">查询</Button></Col>
        </Row>
      </Card>
      <Card :bordered="false" dis-hover>
        <p slot="title">文章列表</p>
        <Table :columns="columnTitle" :data="articleList" border stripe></Table>
        <Page :total="100" show-total style="padding: 10px 0; text-align: right;"></Page>
      </Card>
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
            width: 180,
            render: (h, params) => {
              return h('div', [
                h('Button', {
                  props: { size: 'small' },
                  style: { marginRight: '5px' },
                  on: {
                    click: () => {
                      this.show(params.index)
                    }
                  }
                }, '查看'),
                h('Button', {
                  props: { size: 'small', type: 'primary' },
                  style: { marginRight: '5px' },
                  on: {
                    click: () => {
                    }
                  }
                }, '编辑'),
                h('Button', {
                  props: { size: 'small', type: 'error' },
                  on: {
                    click: () => {
                      this.remove(params.index)
                    }
                  }
                }, '删除')
              ])
            }
          }
        ],
        articleList: [
          {
            title: '这是一篇文章标题',
            source: '新华网',
            publisher: '张三三',
            publishTime: '2017-12-27 09:33:34'
          },
          {
            title: '这是一篇文章标题',
            source: '新华网',
            publisher: '张三三',
            publishTime: '2017-12-27 09:33:34'
          },
          {
            title: '这是一篇文章标题',
            source: '新华网',
            publisher: '张三三',
            publishTime: '2017-12-27 09:33:34'
          },
          {
            title: '这是一篇文章标题',
            source: '新华网',
            publisher: '张三三',
            publishTime: '2017-12-27 09:33:34'
          },
//          {
//            title: '这是一篇文章标题',
//            source: '新华网',
//            publisher: '张三三',
//            publishTime: '2017-12-27 09:33:34'
//          },
//          {
//            title: '这是一篇文章标题',
//            source: '新华网',
//            publisher: '张三三',
//            publishTime: '2017-12-27 09:33:34'
//          },
//          {
//            title: '这是一篇文章标题',
//            source: '新华网',
//            publisher: '张三三',
//            publishTime: '2017-12-27 09:33:34'
//          },
//          {
//            title: '这是一篇文章标题',
//            source: '新华网',
//            publisher: '张三三',
//            publishTime: '2017-12-27 09:33:34'
//          },
          {
            title: '这是一篇文章标题',
            source: '新华网',
            publisher: '张三三',
            publishTime: '2017-12-27 09:33:34'
          },
          {
            title: '这是一篇文章标题',
            source: '新华网',
            publisher: '张三三',
            publishTime: '2017-12-27 09:33:34'
          }
        ]
      }
    },
    created () {
    },
    methods: {
      show (index) {
        this.$Modal.info({
          title: '文章信息',
          content: `标题：${this.articleList[index].title}<br>来源：${this.articleList[index].source}<br>发布人：${this.articleList[index].publisher}<br>发布时间：${this.articleList[index].publishTime}<br>`
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
      }
    }
  }
</script>

<style lang="less">
  .article-list {
    .ivu-card-head {
      /*background: #F0F0F0;*/
    }
  }
</style>
