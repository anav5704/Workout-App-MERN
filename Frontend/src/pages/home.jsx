import { useEffect, useState } from "react"
import Workout from "../components/workout"
import { useWorkoutsContext } from "../hooks/useWorkoutsContext"
import { useAuthContext } from "../hooks/useAuthContext"
import { Link } from "react-router-dom"

function Home() {
    const {workouts, dispatch} = useWorkoutsContext()
    const {user} = useAuthContext()

    useEffect(() => {
        async function fetchWorkouts() {
            const response = await fetch("/api/workouts", {
                headers: {
                    'Authorization' : `Bearer: ${user.token}`
                }
            })
            const data = await response.json()
            response.ok ? dispatch({type: "SET_WORKOUTS", payload: data}) : console.log("Fetch Error")
            console.log(workouts)
        }
        
        if(user){
            fetchWorkouts()
        }

    }, [dispatch, user])

    return(
        <div className="home p-10 grid grid-cols-2 md:grid-cols-4 gap-5">
            <div className="grid grid-cols-4 col-span-4 gap-5">
           <Link to="/create"  className="cursor-pointer relative grid place-content-center border border-dashed border-slate-600 rounded col-span-1">
           <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mx-auto">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
            </div>
           </Link>
                {workouts?.map((workout) => (<Workout key={workout._id} workout={workout} />))}
            </div>
        </div>
    )
}

export default Home