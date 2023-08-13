import { useState } from "react"

function Login(){
    const [email, setEmail] = useState("")  
    const [password, setPassword] = useState("")
    const hanndleSubmit = async(e) => {
        e.preventDefault()
        console.log(email, password)
    }

    return (
        <form action="" onSubmit={hanndleSubmit} className="flex flex-col w-72 mx-auto mt-36">
            <h1 className="text-center text-2xl">Log In</h1>
            <input placeholder="Email"  type="text" name="" id="" />
            <input placeholder="Password" onChange={(e) => setEmail(e.target.value)} value={email} type="text" name="" id="" />
            <button className="p-2 bg-teal-500 mt-2 rounded text-slate-900" onChange={(e) => setPassword(e.target.value)} value={password} type="submit">Log In</button>
        </form>
    )
}

export default Login