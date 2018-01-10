<template>
    <div id="chartLine" style="width: 100%; height: 100%;"></div>
</template>
<script>
  import eCharts from 'echarts'
  export default {
    data () {
      return {}
    },
    mounted () {
      this.$nextTick(() => {
        let chartLine = eCharts.init(document.getElementById('chartLine'))
        chartLine.setOption({
          title: {
            text: '商品日销量'
          },
          tooltip: {},
          xAxis: {
            data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
          },
          yAxis: {},
          series: [{
            name: '销量',
            type: 'line',
            data: [5, 20, 36, 10, 10, 20]
          }]
        })
      })
    },
    methods: {}
  }
</script>
