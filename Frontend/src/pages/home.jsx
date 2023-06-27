import { useEffect, useState } from "react"
import Workout from "../components/workout"
import Form from "../components/form"

function Home() {
    const [workouts, setWorkouts] = useState([])
    useEffect(() => {
        async function fetchWorkouts() {
            const response = await fetch("/api/workouts")
            const data = await response.json()
            response.ok ? setWorkouts(data) : console.log("Fetch Error")
            console.log(data)
        }
        fetchWorkouts() 
    }, [])

    return(
        <div className="home p-10 grid grid-cols-2 md:grid-cols-4 gap-5">
            <div className="grid col-span-1 gap-5">
                {workouts.map((workout) => (<Workout key={workout._id} workout={workout} />))}
            </div>
            <Form />
        </div>
    )
}

export default Home