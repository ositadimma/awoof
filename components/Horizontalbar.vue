<template>
  <div class="bar-chart-body">
    <canvas id="myChart2" />
  </div>
</template>

<script>
import Chart from 'chart.js'
import ChartDataLabels from 'chartjs-plugin-datalabels'
export default {
  name: 'HorizontalBarChart',
  props: {
    giveawayParticipants: {
      type: Array,
      default () {
        return []
      }
    }
  },
  mounted () {
    // pie chart data
    const Duplicatedlabels = this.giveawayParticipants.map(
      participant => participant.user.location
    )
    const reducerArrayOfLabels = Duplicatedlabels.reduce((arr, val) => {
      if (val in arr) {
        arr[val] += 1
      } else {
        arr[val] = 1
      }
      return arr
    }, {})
    const labels = Object.keys(reducerArrayOfLabels)
    const data = Object.values(reducerArrayOfLabels)
    var sumOfData = data.reduce((arr, val) => arr + val, 0)

    const barData = {
      labels,
      datasets: [
        {
          data,
          backgroundColor: '#054EA4',
          barPercentage: 0.6
        }
      ]
    }
    const barOptions = {
      responsive: true,
      layout: {
        padding: {
          left: -3
        }
      },
      legend: {
        display: false
      },
      tooltips: {
        enabled: false
      },
      plugins: {
        datalabels: {
          display: true,
          anchor: 'end',
          align: 'end',
          offset: 2,
          formatter: (value, ctx) => {
            const percentage = (value / sumOfData) * 100
            return Math.round(percentage) + '%'
          },
          color: 'rgba(145,145,178,0.8)'
        }
      },
      scales: {
        xAxes: [
          {
            ticks: {
              display: false
            },
            gridLines: {
              display: false,
              drawBorder: false
            },
            afterFit: (axis) => {
              axis.paddingRight = 40
              axis.paddingLeft = 0
            }
          }
        ],
        yAxes: [
          {
            ticks: {
              fontColor: 'rgba(145,145,178,0.8)'
            },
            gridLines: {
              display: false,
              drawBorder: false
            }
          }
        ]
      }
    }
    // get pie chart canvas
    const ctx2 = document.getElementById('myChart2').getContext('2d')
    // draw pie chart
    /* eslint-disable no-new */
    new Chart(ctx2, {
      type: 'horizontalBar',
      data: barData,
      options: barOptions,
      plugins: [ChartDataLabels]
    })
  }
}
</script>

<style scoped></style>
