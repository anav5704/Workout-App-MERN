import { useState } from "react"
import { useSignup } from "../hooks/useSignup"

function Signup(){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const {signup, error, loading} = useSignup()
    
    const handleSubmit = async(e) => {
        e.preventDefault()
        try{
            console.log(email, password)
            await signup(email, password)
        }
        catch(err){
            console.log("Signup Error:", err)
        }
    }

    return (
        <form action="" onSubmit={handleSubmit} className="flex flex-col w-72 mx-auto mt-36">
            <h1 className="text-center text-2xl">Sign Up</h1>
            <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} value={email} type="text" name="" id="" />
            <input placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password} type="text" name="" id="" />
            <button disabled={loading} className="p-2 bg-teal-500 mt-2 rounded text-slate-900" type="submit">Create Account</button>
            { error ? <div className="warn red">{ error }</div> : null }
        </form>
    )
}

export default Signup