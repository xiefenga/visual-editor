
interface BaseWidgetConfig {
    default: {
        width: number
        height: number
    }
}

let a = 1 + 1;

const CHARTS_CONFIG = [
    {
        type: 'line',
        example: {
            xAxis: {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    data: [150, 230, 224, 218, 135, 147, 260],
                    type: 'line'
                }
            ]
        },
        show: 'https://fastly.jsdelivr.net/gh/apache/echarts-website@asf-site/examples/data/thumb/line-simple.webp?_v_=1652838344997',
        default: {
            width: 300,
            height: 200
        }
    },
    {
        type: 'bar',
        example: {
            xAxis: {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    data: [120, 200, 150, 80, 70, 110, 130],
                    type: 'bar',
                    showBackground: true,
                    backgroundStyle: {
                        color: 'rgba(180, 180, 180, 0.2)'
                    }
                }
            ]
        },
        show: 'https://fastly.jsdelivr.net/gh/apache/echarts-website@asf-site/examples/data/thumb/bar-background.webp?_v_=1652838344997',
        default: {
            width: 300,
            height: 200
        }
    },
    // { type: 'pie' },
    // { type: 'scatter' },
    // { type: 'map' },
    // { type: 'candlestick' },
    // { type: 'radar' },
    // { type: 'boxplot' },
    // { type: 'heatmap' },
    // { type: 'graph' },
    // { type: 'lines' },
    // { type: 'tree' },
    // { type: 'treemap' },
    // { type: 'sunburst' },
    // { type: 'parallel' },
    // { type: 'sankey' },
    // { type: 'funnel' },
    // { type: 'gauge' },
    // { type: 'pictorialBar' },
    // { type: 'themeRiver' },
]

export const WIDGET_LIST = [
    ...CHARTS_CONFIG,
]