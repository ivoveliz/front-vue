import { $themeColors } from '@themeConfig'

// heat chart data generator
function generateDataHeatMap(count, yrange) {
  let i = 0
  const series = []
  while (i < count) {
    const x = `w${(i + 1).toString()}`
    const y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min

    series.push({
      x,
      y,
    })
    // eslint-disable-next-line no-plusplus
    i++
  }
  return series
}

// colors
const chartColors = {
  column: {
    series1: '#826af9',
    series2: '#d2b0ff',
    bg: '#f8d3ff',
  },
  success: {
    shade_100: '#7eefc7',
    shade_200: '#06774f',
  },
  donut: {
    series1: '#ffe700',
    series2: '#00d4bd',
    series3: '#826bf8',
    series4: '#2b9bf4',
    series5: '#FFA1A1',
  },
  area: {
    series3: '#a4f8cd',
    series2: '#60f2ca',
    series1: '#2bdac7',
  },
}

export default {
  lineChartSimple: {
    series: [
      {
        data: [280, 200, 220, 180, 270, 250, 70, 90, 200, 150, 160, 100, 150, 100, 50],
      },
    ],
    chartOptions: {
      chart: {
        zoom: {
          enabled: false,
        },
        toolbar: {
          show: false,
        },
      },
      markers: {
        strokeWidth: 7,
        strokeOpacity: 1,
        strokeColors: [$themeColors.light],
        colors: [$themeColors.warning],
      },
      colors: [$themeColors.warning],
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'straight',
      },
      grid: {
        xaxis: {
          lines: {
            show: true,
          },
        },
      },
      tooltip: {
        custom(data) {
          return `${'<div class="px-1 py-50"><span>'}${
            data.series[data.seriesIndex][data.dataPointIndex]
          }%</span></div>`
        },
      },
      xaxis: {
        categories: [
          '7/12',
          '8/12',
          '9/12',
          '10/12',
          '11/12',
          '12/12',
          '13/12',
          '14/12',
          '15/12',
          '16/12',
          '17/12',
          '18/12',
          '19/12',
          '20/12',
          '21/12',
        ],
      },
      yaxis: {
        // opposite: isRtl,
      },
    },
  },

  lineAreaChartSpline: {
    series: [
    { 
      name: 'Value m3/h :',
      data: [
      [1327359600000,30.95],
      [1327446000000,31.34],
      [1327532400000,31.18],
      [1327618800000,31.05],
      [1327878000000,31.00],
      [1327964400000,30.95],
      [1328050800000,31.24],
      [1328137200000,31.29],
      [1328223600000,31.85],
      [1328482800000,31.86],
      [1328569200000,32.28],
      [1328655600000,32.10],
      [1328742000000,32.65],
      [1328828400000,32.21],
      [1329087600000,32.35],
      [1329174000000,32.44],
      [1329260400000,32.46],
      [1329346800000,32.86],
      [1329433200000,32.75],
      [1329778800000,32.54],
      [1329865200000,32.33],
      [1329951600000,32.97],
      [1330038000000,33.41],
      [1330297200000,33.27],
      [1330383600000,33.27],
      [1330470000000,32.89],
      [1330556400000,33.10],
      [1330642800000,33.73],
      [1330902000000,33.22],
      [1330988400000,31.99],
      [1331074800000,32.41],
      [1331161200000,33.05],
      [1331247600000,33.64],
      [1331506800000,33.56],
      [1331593200000,34.22],
      [1331679600000,33.77],
      [1331766000000,34.17],
      [1331852400000,33.82],
      [1332111600000,34.51],
      [1332198000000,33.16],
      [1332284400000,33.56],
      [1332370800000,33.71],
      [1332457200000,33.81],
      [1332712800000,34.40],
      [1332799200000,34.63],
      [1332885600000,34.46],
      [1332972000000,34.48],
      [1333058400000,34.31],
      [1333317600000,34.70],
      [1333404000000,34.31],
      [1333490400000,33.46],
      [1333576800000,33.59],
      [1333922400000,33.22],
      [1334008800000,32.61],
      [1334095200000,33.01],
      [1334181600000,33.55],
      [1334268000000,33.18],
      [1334527200000,32.84],
      [1334613600000,33.84],
      [1334700000000,33.39],
      [1334786400000,32.91],
      [1334872800000,33.06],
      [1335132000000,32.62],
      [1335218400000,32.40],
      [1335304800000,33.13],
      [1335391200000,33.26],
      [1335477600000,33.58],
      [1335736800000,33.55],
      [1335823200000,33.77],
      [1335909600000,33.76],
      [1335996000000,33.32],
      [1336082400000,32.61],
      [1336341600000,32.52],
      [1336428000000,32.67],
      [1336514400000,32.52],
      [1336600800000,31.92],
      [1336687200000,32.20],
      [1336946400000,32.23],
      [1337032800000,32.33],
      [1337119200000,32.36],
      [1337205600000,32.01],
      [1337292000000,31.31],
      [1337551200000,32.01],
      [1337637600000,32.01],
      [1337724000000,32.18],
      [1337810400000,31.54],
      [1337896800000,31.60],
      [1338242400000,32.05],
      [1338328800000,31.29],
      [1338415200000,31.05],
      [1338501600000,29.82],
      [1338760800000,30.31],
      [1338847200000,30.70],
      [1338933600000,31.69],
      [1339020000000,31.32],
      [1339106400000,31.65],
      [1339365600000,31.13],
      [1339452000000,31.77],
      [1339538400000,31.79],
      [1339624800000,31.67],
      [1339711200000,32.39],
      [1339970400000,32.63],
      [1340056800000,32.89],
      [1340143200000,31.99],
      [1340229600000,31.23],
      [1340316000000,31.57],
      [1340575200000,30.84],
      [1340661600000,31.07],
      [1340748000000,31.41],
      [1340834400000,31.17],
      [1340920800000,32.37],
      [1341180000000,32.19],
      [1341266400000,32.51],
      [1341439200000,32.53],
      [1341525600000,31.37],
      [1341784800000,30.43],
      [1341871200000,30.44],
      [1341957600000,30.20],
      [1342044000000,30.14],
      [1342130400000,30.65],
      [1342389600000,30.40],
      [1342476000000,30.65],
      [1342562400000,31.43],
      [1342648800000,31.89],
      [1342735200000,31.38],
      [1342994400000,30.64],
      [1343080800000,30.02],
      [1343167200000,30.33],
      [1343253600000,30.95],
      [1343340000000,31.89],
      [1343599200000,31.01],
      [1343685600000,30.88],
      [1343772000000,30.69],
      [1343858400000,30.58],
      [1343944800000,32.02],
      [1344204000000,32.14],
      [1344290400000,32.37],
      [1344376800000,32.51],
      [1344463200000,32.65],
      [1344549600000,32.64],
      [1344808800000,32.27],
      [1344895200000,32.10],
      [1344981600000,32.91],
      [1345068000000,33.65],
      [1345154400000,33.80],
      [1345413600000,33.92],
      [1345500000000,33.75],
      [1345586400000,33.84],
      [1345672800000,33.50],
      [1345759200000,32.26],
      [1346018400000,32.32],
      [1346104800000,32.06],
      [1346191200000,31.96],
      [1346277600000,31.46],
      [1346364000000,31.27],
      [1346709600000,31.43],
      [1346796000000,32.26],
      [1346882400000,32.79],
      [1346968800000,32.46],
      [1347228000000,32.13],
      [1347314400000,32.43],
      [1347400800000,32.42],
      [1347487200000,32.81],
      [1347573600000,33.34],
      [1347832800000,33.41],
      [1347919200000,32.57],
      [1348005600000,33.12],
      [1348092000000,34.53],
      [1348178400000,33.83],
      [1348437600000,33.41],
      [1348524000000,32.90],
      [1348610400000,32.53],
      [1348696800000,32.80],
      [1348783200000,32.44],
      [1349042400000,32.62],
      [1349128800000,32.57],
      [1349215200000,32.60],
      [1349301600000,32.68],
      [1349388000000,32.47],
      [1349647200000,32.23],
      [1349733600000,31.68],
      [1349820000000,31.51],
      [1349906400000,31.78],
      [1349992800000,31.94],
      [1350252000000,32.33],
      [1350338400000,33.24],
      [1350424800000,33.44],
      [1350511200000,33.48],
      [1350597600000,33.24],
      [1350856800000,33.49],
      [1350943200000,33.31],
      [1351029600000,33.36],
      [1351116000000,33.40],
      [1351202400000,34.01],
      [1351638000000,34.02],
      [1351724400000,34.36],
      [1351810800000,34.39],
      [1352070000000,34.24],
      [1352156400000,34.39],
      [1352242800000,33.47],
      [1352329200000,32.98],
      [1352415600000,32.90],
      [1352674800000,32.70],
      [1352761200000,32.54],
      [1352847600000,32.23],
      [1352934000000,32.64],
      [1353020400000,32.65],
      [1353279600000,32.92],
      [1353366000000,32.64],
      [1353452400000,32.84],
      [1353625200000,33.40],
      [1353884400000,33.30],
      [1353970800000,33.18],
      [1354057200000,33.88],
      [1354143600000,34.09],
      [1354230000000,34.61],
      [1354489200000,34.70],
      [1354575600000,35.30],
      [1354662000000,35.40],
      [1354748400000,35.14],
      [1354834800000,35.48],
      [1355094000000,35.75],
      [1355180400000,35.54],
      [1355266800000,35.96],
      [1355353200000,35.53],
      [1355439600000,37.56],
      [1355698800000,37.42],
      [1355785200000,37.49],
      [1355871600000,38.09],
      [1355958000000,37.87],
      [1356044400000,37.71],
      [1356303600000,37.53],
      [1356476400000,37.55],
      [1356562800000,37.30],
      [1356649200000,36.90],
      [1356908400000,37.68],
      [1357081200000,38.34],
      [1357167600000,37.75],
      [1357254000000,38.13],
      [1357513200000,37.94],
      [1357599600000,38.14],
      [1357686000000,38.66],
      [1357772400000,38.62],
      [1357858800000,38.09],
      [1358118000000,38.16],
      [1358204400000,38.15],
      [1358290800000,37.88],
      [1358377200000,37.73],
      [1358463600000,37.98],
      [1358809200000,37.95],
      [1358895600000,38.25],
      [1358982000000,38.10],
      [1359068400000,38.32],
      [1359327600000,38.24],
      [1359414000000,38.52],
      [1359500400000,37.94],
      [1359586800000,37.83],
      [1359673200000,38.34],
      [1359932400000,38.10],
      [1360018800000,38.51],
      [1360105200000,38.40],
      [1360191600000,38.07],
      [1360278000000,39.12],
      [1360537200000,38.64],
      [1360623600000,38.89],
      [1360710000000,38.81],
      [1360796400000,38.61],
      [1360882800000,38.63],
      [1361228400000,38.99],
      [1361314800000,38.77],
      [1361401200000,38.34],
      [1361487600000,38.55],
      [1361746800000,38.11],
      [1361833200000,38.59],
      [1361919600000,39.60],
    ]}
    ],
    chartOptions: {
      chart: {
        toolbar: {
          show: true,
          offsetX: 0,
          offsetY: 0,
          tools: {
            download: true,
            selection: true,
            zoom: true,
            zoomin: false,
            zoomout: false,
            pan: false,
            reset: true | '<img src="/static/icons/reset.png" width="20">',
            customIcons: []
          },
          export: {
            csv: {
              filename: undefined,
              columnDelimiter: ',',
              headerCategory: 'category',
              headerValue: 'value',
              dateFormatter(timestamp) {
                return new Date(timestamp).toDateString()
              }
            },
            svg: {
              filename: undefined,
            },
            png: {
              filename: undefined,
            }
          },
          autoSelected: 'zoom' 
        },
        zoom: {
          autoScaleYaxis: true
        }
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: false,
        curve: 'straight',
      },
      legend: {
        show: true,
        showForSingleSeries: false,
        position: 'top',
        horizontalAlign: 'left',
        fontSize: '14px',
        fontFamily: 'Montserrat',
      },
      grid: {
        xaxis: {
         
          lines: {
            show: true,
          },
        },
      },
      xaxis: {
        type: 'datetime',
        //min: new Date('01 Mar 2012').getTime(),
        tickAmount: 1,
        tooltip: {
          enabled: false,
         },
        labels: {
          format: 'mm:HH:dd/MM yyyy',
        }
        
      },
      yaxis: {
        // opposite: isRtl
        
      },
      fill: {
        opacity: 1,
        type: 'solid',
      },
      tooltip: {
        //shared: false,
        enabled: true,
       // format: 'dd MMM yyyy',
        x: {
          show: true,
          format: 'mm:HH:dd/MM yyyy',
          formatter: undefined,
      },
      y: {
        formatter: undefined,
        title: {
            formatter: (seriesName) => seriesName,
        },
      }
      },
      colors: [chartColors.area.series3, chartColors.area.series2, chartColors.area.series1],
    },
  },

  columnChart: {
    series: [
      {
        name: 'Apple',
        data: [90, 120, 55, 100, 80, 125, 175, 70, 88, 180],
      },
      {
        name: 'Samsung',
        data: [85, 100, 30, 40, 95, 90, 30, 110, 62, 20],
      },
    ],
    chartOptions: {
      chart: {
        stacked: true,
        toolbar: {
          show: false,
        },
      },
      colors: [chartColors.column.series1, chartColors.column.series2],
      plotOptions: {
        bar: {
          columnWidth: '15%',
          colors: {
            backgroundBarColors: [
              chartColors.column.bg,
              chartColors.column.bg,
              chartColors.column.bg,
              chartColors.column.bg,
              chartColors.column.bg,
            ],
            backgroundBarRadius: 10,
          },
        },
      },
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: true,
        position: 'top',
        fontSize: '14px',
        fontFamily: 'Montserrat',
        horizontalAlign: 'left',
      },
      stroke: {
        show: true,
        colors: ['transparent'],
      },
      grid: {
        xaxis: {
          lines: {
            show: true,
          },
        },
      },
      xaxis: {
        categories: ['7/12', '8/12', '9/12', '10/12', '11/12', '12/12', '13/12', '14/12', '15/12', '16/12'],
      },
      yaxis: {
        // opposite: isRtl,
      },
      fill: {
        opacity: 1,
      },
    },
  },

  barChart: {
    series: [
      {
        data: [700, 350, 480, 600, 210, 550, 150],
      },
    ],
    chartOptions: {
      chart: {
        toolbar: {
          show: false,
        },
      },
      colors: $themeColors.info,
      plotOptions: {
        bar: {
          horizontal: true,
          barHeight: '30%',
          endingShape: 'rounded',
        },
      },
      grid: {
        xaxis: {
          lines: {
            show: false,
          },
        },
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        categories: ['MON, 11', 'THU, 14', 'FRI, 15', 'MON, 18', 'WED, 20', 'FRI, 21', 'MON, 23'],
      },
      yaxis: {
        // opposite: isRtl,
      },
    },
  },

  candlestickChart: {
    series: [
      {
        data: [
          {
            x: new Date(1538778600000),
            y: [150, 170, 50, 100],
          },
          {
            x: new Date(1538780400000),
            y: [200, 400, 170, 330],
          },
          {
            x: new Date(1538782200000),
            y: [330, 340, 250, 280],
          },
          {
            x: new Date(1538784000000),
            y: [300, 330, 200, 320],
          },
          {
            x: new Date(1538785800000),
            y: [320, 450, 280, 350],
          },
          {
            x: new Date(1538787600000),
            y: [300, 350, 80, 250],
          },
          {
            x: new Date(1538789400000),
            y: [200, 330, 170, 300],
          },
          {
            x: new Date(1538791200000),
            y: [200, 220, 70, 130],
          },
          {
            x: new Date(1538793000000),
            y: [220, 270, 180, 250],
          },
          {
            x: new Date(1538794800000),
            y: [200, 250, 80, 100],
          },
          {
            x: new Date(1538796600000),
            y: [150, 170, 50, 120],
          },
          {
            x: new Date(1538798400000),
            y: [110, 450, 10, 420],
          },
          {
            x: new Date(1538800200000),
            y: [400, 480, 300, 320],
          },
          {
            x: new Date(1538802000000),
            y: [380, 480, 350, 450],
          },
        ],
      },
    ],
    chartOptions: {
      chart: {
        toolbar: {
          show: false,
        },
      },
      xaxis: {
        type: 'datetime',
      },
      yaxis: {
        tooltip: {
          enabled: true,
        },
        // opposite: isRtl,
      },
      grid: {
        xaxis: {
          lines: {
            show: true,
          },
        },
      },
      legend: {
        show: false,
      },
      plotOptions: {
        candlestick: {
          colors: {
            upward: $themeColors.success,
            downward: $themeColors.danger,
          },
        },
        bar: {
          columnWidth: '40%',
        },
      },
    },
  },

  scatterChart: {
    series: [
      {
        name: 'Angular',
        data: [
          [5.4, 170],
          [5.4, 100],
          [6.3, 170],
          [5.7, 140],
          [5.9, 130],
          [7.0, 150],
          [8.0, 120],
          [9.0, 170],
          [10.0, 190],
          [11.0, 220],
          [12.0, 170],
          [13.0, 230],
        ],
      },
      {
        name: 'Vue',
        data: [
          [14.0, 220],
          [15.0, 280],
          [16.0, 230],
          [18.0, 320],
          [17.5, 280],
          [19.0, 250],
          [20.0, 350],
          [20.5, 320],
          [20.0, 320],
          [19.0, 280],
          [17.0, 280],
          [22.0, 300],
          [18.0, 120],
        ],
      },
      {
        name: 'React',
        data: [
          [14.0, 290],
          [13.0, 190],
          [20.0, 220],
          [21.0, 350],
          [21.5, 290],
          [22.0, 220],
          [23.0, 140],
          [19.0, 400],
          [20.0, 200],
          [22.0, 90],
          [20.0, 120],
        ],
      },
    ],
    chartOptions: {
      chart: {
        zoom: {
          enabled: true,
          type: 'xy',
        },
        toolbar: {
          show: false,
        },
      },
      grid: {
        xaxis: {
          lines: {
            show: true,
          },
        },
      },
      colors: [$themeColors.warning, $themeColors.primary, $themeColors.success],
      legend: {
        show: true,
        position: 'top',
        horizontalAlign: 'left',
      },
      xaxis: {
        tickAmount: 10,
        labels: {
          formatter(val) {
            return parseFloat(val).toFixed(1)
          },
        },
      },
      yaxis: {
        // opposite: isRtl,
      },
    },
  },

  heatMapChart: {
    series: [
      {
        name: 'SUN',
        data: generateDataHeatMap(24, {
          min: 0,
          max: 60,
        }),
      },
      {
        name: 'MON',
        data: generateDataHeatMap(24, {
          min: 0,
          max: 60,
        }),
      },
      {
        name: 'TUE',
        data: generateDataHeatMap(24, {
          min: 0,
          max: 60,
        }),
      },
      {
        name: 'WED',
        data: generateDataHeatMap(24, {
          min: 0,
          max: 60,
        }),
      },
      {
        name: 'THU',
        data: generateDataHeatMap(24, {
          min: 0,
          max: 60,
        }),
      },
      {
        name: 'FRI',
        data: generateDataHeatMap(24, {
          min: 0,
          max: 60,
        }),
      },
      {
        name: 'SAT',
        data: generateDataHeatMap(24, {
          min: 0,
          max: 60,
        }),
      },
    ],
    chartOptions: {
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: true,
        position: 'bottom',
      },
      colors: ['#7367F0'],
      plotOptions: {
        heatmap: {
          enableShades: false,

          colorScale: {
            ranges: [
              {
                from: 0,
                to: 10,
                name: '0-10',
                color: '#b9b3f8',
              },
              {
                from: 11,
                to: 20,
                name: '10-20',
                color: '#aba4f6',
              },
              {
                from: 21,
                to: 30,
                name: '20-30',
                color: '#9d95f5',
              },
              {
                from: 31,
                to: 40,
                name: '30-40',
                color: '#8f85f3',
              },
              {
                from: 41,
                to: 50,
                name: '40-50',
                color: '#8176f2',
              },
              {
                from: 51,
                to: 60,
                name: '50-60',
                color: '#7367f0',
              },
            ],
          },
        },
      },
      xaxis: {
        labels: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },
      chart: {
        height: 350,
        type: 'heatmap',
        toolbar: {
          show: false,
        },
      },
    },
  },

  donutChart: {
    series: [85, 16, 50, 50],
    chartOptions: {
      legend: {
        show: true,
        position: 'bottom',
        fontSize: '14px',
        fontFamily: 'Montserrat',
      },
      colors: [
        chartColors.donut.series1,
        chartColors.donut.series5,
        chartColors.donut.series3,
        chartColors.donut.series2,
      ],
      dataLabels: {
        enabled: true,
        formatter(val) {
          // eslint-disable-next-line radix
          return `${parseInt(val)}%`
        },
      },
      plotOptions: {
        pie: {
          donut: {
            labels: {
              show: true,
              name: {
                fontSize: '2rem',
                fontFamily: 'Montserrat',
              },
              value: {
                fontSize: '1rem',
                fontFamily: 'Montserrat',
                formatter(val) {
                  // eslint-disable-next-line radix
                  return `${parseInt(val)}%`
                },
              },
              total: {
                show: true,
                fontSize: '1.5rem',
                label: 'Operational',
                formatter() {
                  return '31%'
                },
              },
            },
          },
        },
      },
      labels: ['Operational', 'Networking', 'Hiring', 'R&D'],
      responsive: [
        {
          breakpoint: 992,
          options: {
            chart: {
              height: 380,
            },
            legend: {
              position: 'bottom',
            },
          },
        },
        {
          breakpoint: 576,
          options: {
            chart: {
              height: 320,
            },
            plotOptions: {
              pie: {
                donut: {
                  labels: {
                    show: true,
                    name: {
                      fontSize: '1.5rem',
                    },
                    value: {
                      fontSize: '1rem',
                    },
                    total: {
                      fontSize: '1.5rem',
                    },
                  },
                },
              },
            },
            legend: {
              show: true,
            },
          },
        },
      ],
    },
  },

  radialBarChart: {
    series: [80, 50, 35],
    chartOptions: {
      colors: [chartColors.donut.series1, chartColors.donut.series2, chartColors.donut.series4],
      plotOptions: {
        radialBar: {
          size: 185,
          hollow: {
            size: '25%',
          },
          track: {
            margin: 15,
          },
          dataLabels: {
            name: {
              fontSize: '2rem',
              fontFamily: 'Montserrat',
            },
            value: {
              fontSize: '1rem',
              fontFamily: 'Montserrat',
            },
            total: {
              show: true,
              fontSize: '1rem',
              label: 'Comments',
              formatter() {
                return '80%'
              },
            },
          },
        },
      },
      legend: {
        show: true,
        position: 'bottom',
        horizontalAlign: 'center',
      },
      stroke: {
        lineCap: 'round',
      },
      labels: ['Comments', 'Replies', 'Shares'],
    },
  },

  radarChart: {
    series: [
      {
        name: 'iPhone 11',
        data: [41, 64, 81, 60, 42, 42, 33, 23],
      },
      {
        name: 'Samsung s20',
        data: [65, 46, 42, 25, 58, 63, 76, 43],
      },
    ],
    chartOptions: {
      chart: {
        toolbar: {
          show: false,
        },
        dropShadow: {
          enabled: false,
          blur: 8,
          left: 1,
          top: 1,
          opacity: 0.2,
        },
      },
      legend: {
        show: true,
        fontSize: '14px',
        fontFamily: 'Montserrat',
      },
      yaxis: {
        show: false,
      },
      colors: [chartColors.donut.series1, chartColors.donut.series3],
      xaxis: {
        categories: ['Battery', 'Brand', 'Camera', 'Memory', 'Storage', 'Display', 'OS', 'Price'],
      },
      fill: {
        opacity: [1, 0.8],
      },
      stroke: {
        show: false,
        width: 0,
      },
      markers: {
        size: 0,
      },
      grid: {
        show: false,
      },
    },
  },
}
