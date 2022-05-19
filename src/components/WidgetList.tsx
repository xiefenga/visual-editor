import { FC, useContext } from 'react'
import styled from 'styled-components'
import AppContext from '../store'

const WidgetBox = styled.div`
    width: 20%;
    height: 100%;
`

const WidgetItem = styled.li`
    width: 100px;
    height: 100px;
    padding: 10px;
    cursor: pointer;
    list-style: none;
    border: 1px solid #aaa;
    box-sizing: border-box;
`

type Widget = {
    id: string
    name: string
}

interface WidgetListProps {
    list: Widget[],
}

const WidgetList: FC<WidgetListProps> = (props) => {
    const { list } = props
    const { setWidget } = useContext(AppContext)

    return (<WidgetBox>
        {list.map((widget) => (
            <WidgetItem
                draggable
                key={widget.id}
                onDragStart={(e) => {
                    const { offsetX, offsetY } = e.nativeEvent
                    setWidget({
                        ...widget,
                        id: `${widget.id}_${Date.now()}`,
                        offset: {
                            x: offsetX,
                            y: offsetY
                        }
                    })
                }}
                onDragEnd={() => setWidget(null)}
            >
                {widget.name}
            </WidgetItem>
        ))}
    </WidgetBox >)
}

export default WidgetList