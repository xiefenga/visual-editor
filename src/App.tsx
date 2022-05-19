import { useRef } from 'react'
import styled from 'styled-components'
import AppContext from './store'
import WidgetList from './components/WidgetList'
import WidgetEditor from './components/WidgetEditor'

const AppContainer = styled.div`
width: 100vw;
height: 100vh;
display: flex;
`

const App = () => {

  const list = [{ id: "1", name: 'faadf' }, { id: "2", name: 'fafas' }]

  const widgetRef = useRef<any>(null)

  const setWidget = (widget: any) => { widgetRef.current = widget }

  const getWidget = () => widgetRef.current

  const store = {
    getWidget,
    setWidget,
  }

  return (<AppContext.Provider value={store}>
    <AppContainer>
      <WidgetList list={list} />
      <WidgetEditor />
    </AppContainer>
  </AppContext.Provider >
  )
}

export default App
