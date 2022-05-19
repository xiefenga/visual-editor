import { createContext } from 'react'

interface Store {
    getWidget: () => any
    setWidget: (widget: any) => void
}

const ctx = createContext<Store>({} as any);

export default ctx
