import { useState } from "react"

function Form() {
    const [title, setTitle] = useState("")
    const [reps, setReps] = useState("")
    const [load, setLoad] = useState("")

    async function createNew (e) {
        e.preventDefault()
        const workout = {title,reps,load}
        const response = await fetch("/api/workouts", {
            method: "POST",
            body: JSON.stringify(workout) ,
            headers: {
                "Content-Type": "application/json"
            }
        }       
        )
        const data = await response.json()

        function clear(){
            setTitle("")
            setReps("")
            setLoad("")
        }
    
        response.ok ? clear() : console.log(data.error)
    }

    return (
        <form onSubmit={createNew}  className="flex flex-col">
            <h1  className="font-bold text-lg text-teal-500" >New Workout</h1>
            <input placeholder="Workout Name" onChange={(e) => setTitle(e.target.value)} value={title} type="text" name="" id="" />
            <input placeholder="Repetitions" onChange={(e) => setReps(e.target.value)} value={reps} type="text" name="" id="" />
            <input placeholder="Load (kg)" onChange={(e) => setLoad(e.target.value)} value={load} type="text" name="" id="" />
            <button type="submit" className="p-2 bg-teal-500 mt-2 rounded text-slate-900">Create</button>
        </form>
    )
}

export default Form