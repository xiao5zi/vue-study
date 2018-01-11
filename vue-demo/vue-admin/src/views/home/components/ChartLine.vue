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
            text: '网站周访问量',
            subtext: '数据纯属虚构'
          },
          tooltip: {},
          xAxis: {
            interval: 6,
            data: ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日']
          },
          yAxis: {
            scale: true
          },
          series: [{
            name: '网站访问量',
            type: 'line',
            data: [205387, 193889, 412368, 300408, 243923, 169283, 283782]
          }]
        })
      })
    },
    methods: {}
  }
</script>
