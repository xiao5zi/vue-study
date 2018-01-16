<template>
    <div id="dcLoanDetail" style="width: 100%; height: 450px;"></div>
</template>
<script>
  import echarts from 'echarts'
  export default {
    data () {
      return {}
    },
    mounted () {
      this.$nextTick(() => {
        let dcLoanDetail = echarts.init(document.getElementById('dcLoanDetail'))
        let option = {
          title: {
            text: '年度放款详情',
            subtext: '总放款量：￥856 103 031 900.00'
          },
          color: ['#B6DFF3', '#F2F2F2', '#88A4A7'],
          tooltip: {},
          grid: {
            left: '4%',
            right: '2%'
          },
          xAxis: {
            axisTick: {
              show: false
            },
            data: ['2017-1', '2017-2', '2017-3', '2017-4', '2017-5', '2017-6', '2017-7']
          },
          yAxis: {
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            }
          },
          legend: {
            top: '2%',
            right: '2%',
            data: [
              { name: '放款金额', icon: 'circle' },
              { name: '月均应放款金额', icon: 'circle' },
              { name: '放款笔数' }
            ]
//            data: ['放款金额', '月均应放款金额', '放款笔数']
          },
          series: [
            {
              name: '放款金额',
              stack: 'money',
              type: 'bar',
              barWidth: '15%',
              itemStyle: {
                emphasis: {
                  color: '#64CAF0'
                }
              },
              data: [17, 33, 18, 26, 30, 40, 25]
            },
            {
              name: '月均应放款金额',
              stack: 'money',
              type: 'bar',
              barWidth: '15%',
              itemStyle: {
                emphasis: {
                  color: '#E2E2E2'
                }
              },
              data: [11, 16, 13, 5, 7, 13, 16]
            },
            {
              name: '放款笔数',
              type: 'line',
              yAxisIndex: 0,
              data: [25, 38, 28, 37, 48, 62, 50]
            }
          ]
        }
        dcLoanDetail.setOption(option)
      })
    }
  }
</script>
<style lang="less">
</style>
