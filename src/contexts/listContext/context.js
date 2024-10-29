import { createContext, useReducer } from "react";
import { fav_cart } from "./data";
import { reducer } from "./reducers";

export const GlobalContext = createContext()

export const Context = ({children}) => {
    const [state,dispatch] = useReducer(reducer,fav_cart)
    return <GlobalContext.Provider value={{state,dispatch}}>
        {children}
    </GlobalContext.Provider>
}