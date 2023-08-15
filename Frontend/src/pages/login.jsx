import { useState } from "react"
import { useLogin } from "../hooks/useLoginjsx"

function Login(){
    const [email, setEmail] = useState("")  
    const [password, setPassword] = useState("")
    const { login, error , loading } = useLogin()

    const hanndleSubmit = async(e) => {
        e.preventDefault()
        await login(email, password)
    }

    return (
        <form action="" onSubmit={hanndleSubmit} className="flex flex-col w-72 mx-auto mt-36">
            <h1 className="text-center text-2xl">Log In</h1>
            <input placeholder="Email"  onChange={(e) => setEmail(e.target.value)} value={email} type="text" name="" id="" />
            <input placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password} type="text" name="" id="" />
            <button disabled={loading} className="p-2 bg-teal-500 mt-2 rounded text-slate-900"  value={password} type="submit">Log In</button>
            { error ? <div className="warn red">{ error }</div> : null }
        </form>
    )
}

export default Login