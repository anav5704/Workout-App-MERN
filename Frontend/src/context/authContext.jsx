import { createContext, useReducer } from "react";
import { useEffect } from "react";
import { json } from "react-router-dom";
export const authContext = createContext()

export const authReducer = (state, action) => {
    switch(action.type){
        case "LOGIN":
            return { user: action.payload }
        case "LOGOUT":
            return { user: null }
        default :
            return state
    }
}

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer , {
        user: null
    })

    useEffect(() => {
            const user = JSON.parse(localStorage.getItem("user"))

            if (user){
                dispatch({type: "LOGIN", payload: user})
            }
    }, [])

    console.log("Auth Context State: ", state)

    return(
        <authContext.Provider value={{...state, dispatch}}>
            {children}
        </authContext.Provider>
    )
}