import { useState } from "react"
import { useWorkoutsContext } from "../hooks/useWorkoutsContext"

function Form() {
    const {dispatch } =  useWorkoutsContext()
    const [title, setTitle] = useState("")
    const [reps, setReps] = useState("")
    const [load, setLoad] = useState("")
    const [error, setError] = useState(false)
    const [empty, setEmpty] = useState([])

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

        if (!response.ok){
            setError(data.error)
            setEmpty(data.emptyFields)
        }

        function clear(){
            setTitle("")
            setReps("")
            setLoad("")
            setEmpty([])
            setError(false)
            dispatch({type: "CREATE_WORKOUT", payload: data})
        }
    
        response.ok ? clear() : console.log(data.error)
    }

    return (
        <form onSubmit={createNew}  className="flex flex-col">
            <h1  className="font-bold text-lg text-teal-500" >New Workout</h1>
            <input className={`${empty.includes("title") ? "red" : null }`} placeholder="Workout Name" onChange={(e) => setTitle(e.target.value)} value={title} type="text" name="" id="" />
            <input className={`${empty.includes("reps") ? "red" : null }`} placeholder="Repetitions" onChange={(e) => setReps(e.target.value)} value={reps} type="text" name="" id="" />
            <input className={`${empty.includes("load") ? "red" : null }`} placeholder="Load (kg)" onChange={(e) => setLoad(e.target.value)} value={load} type="text" name="" id="" />
            <button type="submit" className="p-2 bg-teal-500 mt-2 rounded text-slate-900">Create</button>
            {error ? <div className="warn">{ error }</div> : null }
        </form>
  
    )
}

export default Form