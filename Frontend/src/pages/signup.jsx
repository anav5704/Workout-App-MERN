import { useState } from "react"
import { useSignup } from "../hooks/useSignup"

function Signup(){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const {signup, error, loading} = useSignup()
    
    const hanndleSubmit = async(e) => {
        e.preventDefault()
        await signup(email, password)
    }

    return (
        <form action="" onSubmit={hanndleSubmit} className="flex flex-col w-72 mx-auto mt-36">
            <h1 className="text-center text-2xl">Sign Up</h1>
            <input placeholder="Email"  type="text" name="" id="" />
            <input placeholder="Password" onChange={(e) => setEmail(e.target.value)} value={email} type="text" name="" id="" />
            <button disabled={loading} className="p-2 bg-teal-500 mt-2 rounded text-slate-900" onChange={(e) => setPassword(e.target.value)} value={password} type="submit">Create Account</button>
            { error ? <div className="warn">{ error }</div> : null }
        </form>
    )
}

export default Signup