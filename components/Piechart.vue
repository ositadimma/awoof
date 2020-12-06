<template>
  <div class="pie-chart-body">
    <canvas id="myChart1" />
    <div id="chart-legends" />
  </div>
</template>

<script>
import Chart from 'chart.js'
import ChartDataLabels from 'chartjs-plugin-datalabels'
export default {
  mounted () {
    // pie chart data
    const labels = ['Female', 'Male']
    const pieData = {
      labels,
      datasets: [{
        data: [64, 36],
        backgroundColor: [
          '#054EA4',
          '#69A3E8'
        ]
      }]
    }
    const pieOptions = {
      responsive: true,
      legend: {
        display: false
      },
      legendCallback: (chart) => {
        console.log(chart.data)
        const text = []
        text.push('<ul class="pie-chart-legend">')
        for (let i = 0; i < chart.data.datasets[0].data.length; i += 1) {
          text.push('<li><span>')
          console.log(i)
          if (chart.data.labels[i]) {
            text.push(chart.data.labels[i])
          }
          text.push('</span></li>')
        }
        text.push('</ul>')
        return text.join('')
      },
      segmentShowStroke: false,
      animateScale: true,
      tooltips: {
        enabled: false
      },
      plugins: {
        datalabels: {
          display: true,
          formatter: (value, ctx) => {
            return Math.round(value) + '%'
          },
          color: '#fff'
        }
      }
    }
    // get pie chart canvas
    const ctx1 = document.getElementById('myChart1').getContext('2d')
    // draw pie chart
    /* eslint-disable no-new */
    const pie = new Chart(ctx1, {
      type: 'pie',
      data: pieData,
      options: pieOptions,
      plugins: [ChartDataLabels]
    })
    document.getElementById('chart-legends').innerHTML = pie.generateLegend()
  }
}
</script>

<style scoped>
.pie-chart-body {
  position: relative;
  z-index: 0;
}
#chart-legends {
  position: absolute;
  bottom: 0;
  right: 6%;
  z-index: 0;
}
@media (max-width: 1500px) {
  #chart-legends {
    right: 2%;
  }
}
@media (max-width: 1300px) {
  #chart-legends {
    right: 1%;
  }
}
@media (max-width: 767px) {
  #chart-legends {
    right: 3%;
  }
}
@media (max-width: 500px) {
  #chart-legends {
    right: 2%;
  }
}
</style>
