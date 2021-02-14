<template>
  <div id="line-chart-body" class="line-chart-body">
    <canvas id="myChart3" />
    <div id="line-chartjs-tooltip-ctn" />
  </div>
</template>

<script>
import Chart from 'chart.js'
import ChartDataLabels from 'chartjs-plugin-datalabels'
export default {
  name: 'LineChart',
  props: {
    dashboardChart: {
      type: Array,
      default () {
        return []
      }
    }
  },
  computed: {
    mode () {
      return this.$store.state.mode
    },
    chartData () {
      var labels = []
      var data = []
      if (this.mode === 'Monthly') {
        labels = [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec'
        ]
        const currentYear = new Date().getFullYear()
        const filterChartDataByYear = this.dashboardChart
          .filter(data => currentYear === data._id.year)
          .sort((a, b) => {
            const monthA = a._id.month
            const monthB = b._id.month
            return monthA - monthB
          })
        for (let i = 1; i <= 12; i += 1) {
          data[i - 1] =
            filterChartDataByYear[i - 1] !== undefined &&
            filterChartDataByYear[i - 1]._id.month === i
              ? filterChartDataByYear[0].total
              : 0
        }
      } else {
        const years = this.dashboardChart.map((element) => {
          return element._id.year
        })
        const sortedYears = [...new Set(years)].sort((a, b) => a - b)
        labels = sortedYears
        for (let i = 0; i < sortedYears.length; i += 1) {
          let sumOfTotal = 0
          for (let j = 0; j < this.dashboardChart.length; j += 1) {
            if (sortedYears[i] === this.dashboardChart[j]._id.year) {
              sumOfTotal += this.dashboardChart[j].total
            }
          }
          data.push(sumOfTotal)
        }
      }
      return {
        labels,
        data
      }
    }
  },
  watch: {
    mode () {
      // watch for changes in the coursetodeleteprop then reassign new value to data
      this.chart()
    }
  },
  mounted () {
    this.chart()
  },
  methods: {
    restoreChart () {
      const lineChartContainer = document.getElementById('line-chart-body')
      const canvas = document.createElement('canvas')
      const lineChartTooltipContainer = document.createElement('div')
      canvas.setAttribute('id', 'myChart3')
      lineChartTooltipContainer.setAttribute('id', 'line-chartjs-tooltip-ctn')
      lineChartContainer.appendChild(canvas)
      lineChartContainer.appendChild(lineChartTooltipContainer)
    },
    chart () {
      document.getElementById('myChart3').remove()
      document.getElementById('line-chartjs-tooltip-ctn').remove()
      this.restoreChart()
      // Overwriting base render method with data.
      Chart.plugins.unregister(ChartDataLabels) // unregister Chartdatalabels for this component
      const screenWidth = screen.width
      const customTooltips = function (tooltip) {
        // Tooltip Element
        const container = document.getElementById('line-chartjs-tooltip-ctn') // contains the tooltip
        let tooltipEl = document.getElementById('line-chartjs-tooltip') // tooltip
        if (!tooltipEl) {
          const arrowdown = document.createElement('div')
          tooltipEl = document.createElement('div')
          tooltipEl.id = 'line-chartjs-tooltip'
          tooltipEl.innerHTML = '<table></table>'
          arrowdown.id = 'line-chartjs-tooltip-arrow-down'
          container.appendChild(tooltipEl)
          container.appendChild(arrowdown)
          this._chart.canvas.parentNode.appendChild(container)
        }

        // Hide if no tooltip
        if (tooltip.opacity === 0) {
          container.style.opacity = 0
          tooltipEl.style.opacity = 0
          return
        }

        function getBody (bodyItem) {
          return bodyItem.lines
        }

        // Set Text
        if (tooltip.body) {
          const titleLines = tooltip.title || []
          const bodyLines = tooltip.body.map(getBody)

          let innerHtml = '<thead>'

          titleLines.forEach(function (title) {
            innerHtml += "<div class='tooltip-title'>" + title + '</div>'
          })
          innerHtml += '</thead><tbody>'

          bodyLines.forEach(function (body, i) {
            innerHtml +=
              "<tr><td class='tooltip-body'>" + body + '</td></tr>'
          })

          innerHtml += '</tbody>'

          const tableRoot = tooltipEl.querySelector('table')
          tableRoot.innerHTML = innerHtml
        }

        const positionY = this._chart.canvas.offsetTop
        const positionX = this._chart.canvas.offsetLeft

        // Display, position, and set styles for font
        container.style.opacity = 1
        tooltipEl.style.opacity = 1
        container.style.left = positionX + tooltip.caretX + 'px'
        container.style.top = positionY + tooltip.caretY - 90 + 'px'
        tooltipEl.style.fontFamily = 'Overpass'
        tooltipEl.style.fontSize = tooltip.bodyFontSize + 'px'
        tooltipEl.style.fontStyle = tooltip._bodyFontStyle
        tooltipEl.style.padding = '8px'
      }
      /* eslint-disable no-new */
      const draw = Chart.controllers.line.prototype.draw
      Chart.controllers.line = Chart.controllers.line.extend({
        draw () {
          draw.apply(this, arguments)
          const ctx = this.chart.chart.ctx
          const _stroke = ctx.stroke
          ctx.stroke = function () {
            ctx.save()
            ctx.shadowColor = 'rgba(1, 5, 138, 0.0624151)'
            ctx.shadowBlur = 0
            ctx.shadowOffsetX = 0
            ctx.shadowOffsetY = 22
            _stroke.apply(this, arguments)
            ctx.restore()
          }
        }
      })
      const ctx3 = document.getElementById('myChart3').getContext('2d')

      /* // Dashed line
    ctx3.beginPath()
    ctx3.setLineDash([1, 15])
    ctx3.stroke() */

      new Chart(ctx3, {
        type: 'line',
        responsive: true,
        data: {
          labels: this.chartData.labels,
          datasets: [
            {
              data: this.chartData.data,
              pointBorderWidth: 0,
              pointHoverRadius: 7,
              pointRadius: 3,
              pointHoverBorderWidth: 3.5,
              pointHoverBackgroundColor: '#FFFFFF',
              pointHoverBorderColor: '#01058A',
              backgroundColor: ['rgba(0, 196, 183, 0.06)'],
              borderColor: ['rgba(0,196,183,1)'],
              borderWidth: 3
            }
          ]
        },
        options: {
          maintainAspectRatio: false,
          legend: {
            display: false
          },
          tooltips: {
            enabled: false,
            intersect: false,
            displayColors: false,
            mode: 'index',
            position: 'nearest',
            custom: customTooltips,
            callbacks: {
              title (tooltipItem) {
                return `N${tooltipItem[0].yLabel.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`
              },
              label (tooltipItem, data) {
                return tooltipItem.xLabel
              }
            }
          },
          scales: {
            xAxes: [
              {
                offset: true,
                position: 'top',
                ticks: {
                  fontColor: '#000000',
                  fontSize: screenWidth < 768 ? 13 : 15,
                  padding: 21
                },
                gridLines: {
                  drawBorder: false,
                  display: true,
                  borderDash: [6, 6],
                  color: 'rgba(231, 232, 242, 1)',
                  lineWidth: 1
                }
              }
            ],
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                  fontSize: screenWidth < 768 ? 11 : 13,
                  callback (value, index, values) {
                    // to format final text at axis ticks (add currency symbol, units etc)
                    return (
                      'N' +
                      value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                    )
                  }
                },
                gridLines: {
                  display: false,
                  drawBorder: true
                }
              }
            ]
          }
        }
      })
    }
  }
}
</script>

<style scoped>
.line-chart-body {
  width: 100%;
  height: 86%;

  position: relative;
  z-index: 0;
}
canvas {
  width: 100%;
  height: 100% !important;
}
</style>
