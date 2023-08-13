import { useEffect, useState } from "react"
import Workout from "../components/workout"
import Form from "../components/form"
import { useWorkoutsContext } from "../hooks/useWorkoutsContext"

function Home() {
    const {workouts, dispatch} = useWorkoutsContext()
    useEffect(() => {
        async function fetchWorkouts() {
            const response = await fetch("/api/workouts")
            const data = await response.json()
            response.ok ? dispatch({type: "SET_WORKOUTS", payload: data}) : console.log("Fetch Error")
            console.log(workouts)
        }
        fetchWorkouts() 
    }, [dispatch])

    return(
        <div className="home p-10 grid grid-cols-2 md:grid-cols-4 gap-5">
            <div className="grid grid-cols-3 col-span-3 gap-5">
                {workouts.map((workout) => (<Workout key={workout._id} workout={workout} />))}
            </div>
            <Form />
        </div>
    )
}

export default Home