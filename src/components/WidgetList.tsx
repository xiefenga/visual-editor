import { FC, useContext } from 'react'
import styled from 'styled-components'
import ECharts from 'echarts-for-react'
import AppContext from '../store'

const WidgetBox = styled.div`
    width: 20%;
    width: 250px;
    height: 120%;
    overflow: auto;
    box-sizing: border-box;
    background-color: lightblue;
`

const WidgetItem = styled.li`
    width: 200px;
    height: 150px;
    cursor: pointer;
    list-style: none;
    border: 1px solid #aaa;
    box-sizing: border-box;
    margin: 0 auto;
`

type Widget = {
    type: string,
    example: object
    show: string
}

interface WidgetListProps {
    list: Widget[],
}

const WidgetList: FC<WidgetListProps> = (props) => {
    const { list } = props
    const { setWidget } = useContext(AppContext)

    console.log('WidgetList')

    return (<WidgetBox>
        {list.map((widget) => (
            <WidgetItem
                draggable
                key={widget.type}
                onDragStart={(e) => {
                    const { offsetX, offsetY } = e.nativeEvent
                    setWidget({
                        ...widget,
                        id: `${widget.type}_${Date.now()}`,
                        offset: {
                            x: offsetX,
                            y: offsetY
                        }
                    })
                }}
                onDragEnd={() => setWidget(null)}
            >
                <p style={{ margin: '0', height: '20px' }}>{widget.type}</p>
                {/* <div style={{ height: 'calc(100% - 20px)', overflow: 'hidden' }}> */}
                {/* <img style={{ width: '100%', objectFit: 'cover' }} src={widget.show} /> */}
                {/* <ECharts style={{ height: '100%' }} option={widget.example} /> */}
                {/* </div> */}
            </WidgetItem>
        ))}
    </WidgetBox >)
}

export default WidgetList