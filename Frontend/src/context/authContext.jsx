import { createContext, useReducer } from "react";

export const authContext = createContext()
export const authReducer = (state, action) => {
    switch(action){
        case "LOGIN":
            return { user: action.payload }
        case "LOGOUT":
            return { user: null }
        default :
            return state
    }
}

export const authContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer , {
        user: null
    })
    console.log("Auth Context State: ", state)

    return(
        <authContext.Provider value={{...state, dispatch}}>
            {children}
        </authContext.Provider>
    )
}