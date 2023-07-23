import {createContext, ReactNode, useContext, useReducer} from "react";
import {initialState} from "./reducer";

export const StateContext = createContext('initial value');

type StateProviderPropType = {
    children: ReactNode
    initialState: typeof initialState
    reducer: (state: any, action: any) => any
}

export const StateProvider = ({children, initialState, reducer}: StateProviderPropType) => {
    // @ts-ignore
    return <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
}

export const useStateProvider = () => useContext(StateContext);
