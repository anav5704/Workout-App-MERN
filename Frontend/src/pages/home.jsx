import { useEffect, useState } from "react"

function Home() {
    const [workouts, setWorkouts] = useState(null)
    useEffect(() => {
        async function fetchWorkouts() {
            const response = await fetch("/api/workouts")
            const data = await response.json()
            // response.ok ? console.log(data) : console.log("Fetch Error")
            console.log(data)
        }
        fetchWorkouts() 
    }, [])

    return(
        <div className="home">
            <div>
                {/* {workouts.map((workout) => (<p key={workout._id}>{workout.title}</p>))} */}
            </div>
        </div>
    )
}

export default Home