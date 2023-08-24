import { useState, useEffect } from "react"
import { useWorkoutsContext } from "../hooks/useWorkoutsContext"
import { useAuthContext } from "../hooks/useAuthContext"
import { useParams, useNavigate, Navigate } from "react-router-dom"

function Update() {
    const {dispatch} =  useWorkoutsContext()
    const [title, setTitle] = useState("")
    const [reps, setReps] = useState("")
    const [load, setLoad] = useState("")
    const [error, setError] = useState(false)
    const [empty, setEmpty] = useState([])
    const {user} = useAuthContext()
    const {id} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        async function fetchWorkout() {
            const response = await fetch("/api/workouts/" + id, {
                headers: {
                    'Authorization' : `Bearer: ${user.token}`
                }
            })
            const data = await response.json()
            setTitle(data.title)
            setReps(data.reps)
            setLoad(data.load)
        }
        
        if(user){
            fetchWorkout()
        }

    }, [dispatch, user])


    async function Update (e) {
        e.preventDefault()

        if(!user){
            setError("You are not logged in")
            return
        }

        const workout = {title,reps,load}
        const response = await fetch("/api/workouts/" + id, {
            method: "PATCH",
            body: JSON.stringify(workout) ,
            headers: {
                "Content-Type": "application/json",
                'Authorization' : `Bearer: ${user.token}`
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
            dispatch({type: "UPDATE_WORKOUT", payload: data})
        }
    
        if(response.ok){
             clear()
             navigate("/")
         }
         else {
            console.log(data.error)
         }
    }


    return (
        <form onSubmit={Update}  className="flex flex-col w-96 mx-auto mt-28">
            <h1  className="font-bold text-lg text-teal-500" >Update Workout</h1>
            <input className={`${empty.includes("title") ? "red" : null }`} placeholder="Workout Name" onChange={(e) => setTitle(e.target.value)} value={title} type="text" name="" id="" />
            <input className={`${empty.includes("reps") ? "red" : null }`} placeholder="Repetitions" onChange={(e) => setReps(e.target.value)} value={reps} type="text" name="" id="" />
            <input className={`${empty.includes("load") ? "red" : null }`} placeholder="Load (kg)" onChange={(e) => setLoad(e.target.value)} value={load} type="text" name="" id="" />
            <button type="submit" className="p-2 bg-teal-500 mt-2 rounded text-slate-900">Update</button>
            {error ? <div className="warn">{ error }</div> : null }
        </form>
  
    )
}

export default Update