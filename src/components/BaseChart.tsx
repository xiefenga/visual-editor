import * as echarts from 'echarts'
import { useEffect, useRef, FC } from 'react'

interface ChartProps {
    option: echarts.EChartsOption
}

const BaseChart: FC<ChartProps> = (props) => {
    const chartRef = useRef<echarts.ECharts | null>(null)
    const containerRef = useRef<HTMLDivElement>(null)

    const { option } = props

    useEffect(() => {
        chartRef.current = echarts.init(containerRef.current!)
        chartRef.current.resize()
    }, [])

    useEffect(() => {
        chartRef.current?.setOption(option)
    }, [option])

    return (
        <div style={{ height: '100%' }} ref={containerRef} />
    )
}

export default BaseChart