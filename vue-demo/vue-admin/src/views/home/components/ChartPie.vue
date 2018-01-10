<template>
    <div id="chartPie" style="width: 100%; height: 100%;"></div>
</template>
<script>
  import eCharts from 'echarts'
  export default {
    components: {},
    data () {
      return {}
    },
    mounted () {
      this.$nextTick(() => {
        let chartLine = eCharts.init(document.getElementById('chartPie'))
        chartLine.setOption({
          title: {
            text: '商品日销量'
          },
          tooltip: {},
//          legend: {
//            orient: 'horizontal',
//            bottom: 0,
//            data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
//          },
          series: [{
            name: '销量',
            type: 'pie',
            data: [
              { value: 5, name: '衬衫' },
              { value: 20, name: '羊毛衫' },
              { value: 36, name: '雪纺衫' },
              { value: 10, name: '裤子' },
              { value: 10, name: '高跟鞋' },
              { value: 20, name: '袜子' }
            ],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }]
        })
      })
    },
    methods: {}
  }
</script>
