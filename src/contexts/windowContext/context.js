import { createContext, useReducer } from "react";
import { windows } from "./data";
import { reducer } from "./reducers";

export const WindowsContext = createContext()

export const WindowContext = ({children}) => {
    const [stateWindow,dispatchWindow] = useReducer(reducer,windows)
    return <WindowsContext.Provider value={{stateWindow,dispatchWindow}}>
        {children}
    </WindowsContext.Provider>
}