<template>
    <div id="dataChart01" style="width: 100%; height: 450px;"></div>
</template>
<script>
  import echarts from 'echarts'
  export default {
    data () {
      return {}
    },
    mounted () {
      this.$nextTick(() => {
        let dataChart01 = echarts.init(document.getElementById('dataChart01'))
        let option = {
          title: {
            text: '当前剩余总额度',
            subtext: '￥900 000 000.00',
            textStyle: {
              fontSize: 14,
              fontWeight: 'normal'
            }
          },
          color: ['#B6DFF3', '#F2F2F2', '#88A4A7'],
          grid: {
            left: '4%',
            right: '4%',
            bottom: '8%'
          },
          legend: {
            top: '0',
            right: '3%',
            data: [
              { name: '使用额度', icon: 'circle' },
              { name: '剩余额度', icon: 'circle' },
              { name: '放款比例' }
            ]
          },
          xAxis: {
            axisTick: { show: false },
            data: ['2017-1', '2017-2', '2017-3', '2017-4', '2017-5', '2017-6', '2017-7']
          },
          yAxis: {
            axisLine: { show: false },
            axisTick: { show: false }
          },
          series: [
            {
              name: '使用额度',
              stack: 'money',
              type: 'bar',
              barWidth: '15%',
              itemStyle: {
                emphasis: {
                  color: '#64CAF0'
                }
              },
              data: ['16', '30', '18', '25', '30', '40', '25']
            },
            {
              name: '剩余额度',
              stack: 'money',
              type: 'bar',
              barWidth: '15%',
              itemStyle: {
                emphasis: {
                  color: '#E2E2E2'
                }
              },
              data: ['12', '3', '13', '6', '6', '12', '15']
            },
            {
              name: '放款比例',
              type: 'line',
              smooth: true,
              data: ['23', '33', '25', '32', '41', '54', '44']
            }
          ]
        }
        dataChart01.setOption(option)
      })
    }
  }
</script>
<style lang="less">
</style>
