<template>
  <div id="dBranchLoanDetails" style="width: 100%; height: 360px;"></div>
</template>
<script>
  import echarts from 'echarts'
  export default {
    data () {
      return {}
    },
    mounted () {
      this.$nextTick(() => {
        let dBranchLoanDetails = echarts.init(document.getElementById('dBranchLoanDetails'))
        let option = {
          title: {
            text: '7月各分公司放款详情',
            textStyle: {
              fontSize: 16,
              fontWeight: 'normal'
            }
          },
          color: ['#B6DFF3', '#F2F2F2', '#88A4A7'],
          tooltip: {},
          grid: {
            left: '2%',
            right: '0',
            bottom: '8%'
          },
          xAxis: {
            axisTick: {
              show: false
            },
            data: ['深圳总部', '深圳龙岗', '厦门', '上海', '成都', '北京海淀', '杭州', '郑州', '惠州', '广州', '重庆', '北京', '东莞', '天津', '武汉', '汉口', '哈尔滨']
          },
          yAxis: {
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            }
          },
          series: [
            {
              name: '放款金额',
              type: 'bar',
              barWidth: '15%',
              itemStyle: {
                emphasis: {
                  color: '#64CAF0'
                }
              },
              data: [28, 34, 32, 32, 37, 28, 32, 37, 35, 44, 38, 41, 43, 24, 53, 48, 35]
            }
          ]
        }
        dBranchLoanDetails.setOption(option)
      })
    }
  }
</script>
