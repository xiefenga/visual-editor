import { Rnd } from 'react-rnd'
import styled from 'styled-components'
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

const preventDefault = (e: DragEvent<HTMLDivElement>) => e.preventDefault()

const WidgetEditor: FC = () => {

    const [widgetList, setWidgetList] = useState<any[]>([])

    const { getWidget } = useContext(AppContext)

    const editorRef = useRef<HTMLDivElement>(null)

    const onDrop = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        const { left, top } = editorRef.current!.getBoundingClientRect()
        const { offsetX, offsetY, clientX, clientY } = e.nativeEvent
        // console.log(left, top)
        // console.log(offsetX, offsetY)
        // console.log(clientX - left, clientY - top)

        // 处理 drop 到 widget 导致 offset 不正确
        setWidgetList(() => [...widgetList.concat({ ...getWidget(), position: { x: clientX - left, y: clientY - top } } ?? [])])
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
                    width: 100,
                    height: 100,
                    x: widget.position.x - widget.offset.x,
                    y: widget.position.y - widget.offset.y
                }}
            >
                {widget.name}
            </Rnd>
        ))}
    </EditorContainer>)
}

export default WidgetEditor