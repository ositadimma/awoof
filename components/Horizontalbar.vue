<template>
  <div class="bar-chart-body">
    <canvas id="myChart2" />
  </div>
</template>

<script>
import Chart from 'chart.js'
import ChartDataLabels from 'chartjs-plugin-datalabels'
export default {
  mounted () {
    // pie chart data
    const labels = ['Lagos', 'Abuja', 'Uyo', 'Ibadan']
    const barData = {
      labels,
      datasets: [{
        data: [60, 30, 5, 5],
        backgroundColor: [
          '#054EA4',
          '#69A3E8',
          '#69A3E8',
          '#69A3E8'
        ],
        barPercentage: 0.6
      }]
    }
    const barOptions = {
      responsive: true,
      layout: {
        padding: {
          left: 39
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
            return Math.round(value) + '%'
          },
          color: 'rgba(145,145,178,0.8)'
        }
      },
      scales: {
        xAxes: [{
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
        }],
        yAxes: [{
          ticks: {
            fontColor: 'rgba(145,145,178,0.8)',
            mirror: true,
            padding: 49
          },
          gridLines: {
            display: false,
            drawBorder: false
          }
        }]
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

<style scoped>
</style>
