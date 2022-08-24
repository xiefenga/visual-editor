import { Rnd } from 'react-rnd'
import styled from 'styled-components'
import ECharts from 'echarts-for-react'
import { useState, useContext, useRef, FC, DragEvent } from 'react'
import AppContext from '../store'


const EditorContainer = styled.div`
    width: 80%;
    height: 100%;
    box-sizing: border-box;
    border: 1px solid #ccc;
    position: relative;
`

type WidgetProps = {
    position: {
        x: number,
        y: number,
    },
    offset: {
        x: number,
        y: number
    }
}

const WidgetItem = styled.div<WidgetProps>`
    width: 100px;
    height: 100px;
    padding: 10px;
    cursor: pointer;
    border: 1px solid #aaa;
    box-sizing: border-box;
    position: absolute;
    left: ${props => props.position.x}px;
    top: ${props => props.position.y}px;
    transform: translate(${props => -props.offset.x}px, ${props => -props.offset.y}px);
`

const option = {
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
}

const preventDefault = (e: DragEvent<HTMLDivElement>) => e.preventDefault()

const WidgetEditor: FC = () => {

    console.log('WidgetEditor')

    const [widgetList, setWidgetList] = useState<any[]>([])

    const { getWidget } = useContext(AppContext)

    const editorRef = useRef<HTMLDivElement>(null)

    const onDrop = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        const { left, top } = editorRef.current!.getBoundingClientRect()
        const { clientX, clientY } = e.nativeEvent

        // 处理 drop 到 widget 上导致 offset 不正确
        const position = { x: clientX - left, y: clientY - top }
        setWidgetList(() => [...widgetList.concat({ ...getWidget(), position } ?? [])])
    }

    return (<EditorContainer
        ref={editorRef}
        onDrop={onDrop}
        onDragEnter={preventDefault}
        onDragOver={preventDefault}
    >
        {widgetList.map(widget => (
            <Rnd
                key={widget.id}
                bounds="parent"
                style={{ border: '1px solid #ccc' }}
                default={{
                    ...widget.default,
                    x: widget.position.x - widget.offset.x,
                    y: widget.position.y - widget.offset.y
                }}
            >
                <ECharts style={{ height: '100%' }} option={widget.example ?? option} notMerge />
            </Rnd>
        ))}
    </EditorContainer>)
}

export default WidgetEditor