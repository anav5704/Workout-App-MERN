import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useSignup = () => {
    const [error, setError] = useState(false)
    const [loading, setLoading]= useState()
    const { dispatch } = useAuthContext()
    
    const signup = async(email, password) => {
        setError(false)
        setLoading(true)

        const response = await fetch("/api/user/signup", {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ email, password })
        })

        const json = await response.json()

        if(!response.ok){
            setLoading(false)
            setError(json.error)
        }
        if(response.ok){
            setLoading(false)
            // save user to local storage
            localStorage.setItem("user", JSON.stringify(json))
            // update auth context
            dispatch({type: "LOGIN", payload: json})  
        }
    }
    return { signup, error, loading }
}