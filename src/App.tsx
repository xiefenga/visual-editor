import { useRef } from 'react'
import styled from 'styled-components'
import AppContext from './store'
import WidgetList from './components/WidgetList'
import WidgetEditor from './components/WidgetEditor'
import { WIDGET_LIST } from './config'

const AppContainer = styled.div`
width: 100vw;
height: 100vh;
display: flex;
`

const App = () => {

  const widgetRef = useRef<any>(null)

  const setWidget = (widget: any) => {
    widgetRef.current = widget
  }

  const getWidget = () => widgetRef.current

  const store = {
    getWidget,
    setWidget,
  }


  return (<AppContext.Provider value={store}>
    <AppContainer>
      <WidgetList list={WIDGET_LIST} />
      <WidgetEditor />
    </AppContainer>
  </AppContext.Provider >
  )
}

export default App
