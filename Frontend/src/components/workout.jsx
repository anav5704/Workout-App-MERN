import { useWorkoutsContext } from "../hooks/useWorkoutsContext"
import { useAuthContext } from "../hooks/useAuthContext"
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

function Workout({workout}){

    const {dispatch} = useWorkoutsContext()
    const {user} = useAuthContext()

    const handleDelete = async() => {

        if(!user){
            return
        }
        
        const respose = await fetch("/api/workouts/" + workout._id ,{
            method: 'DELETE',
            headers: {
                'Authorization' : `Bearer: ${user.token}`
            }
        })
        const json = await respose.json()
        if (respose.ok){
            dispatch({ type: 'DELETE_WORKOUT', payload: json})
        }
    }

    return(
        <div className="relative border border-slate-600 p-2 rounded col-span-1 h-fit">
            <h3 className="font-bold text-lg text-teal-500">{workout.title}</h3>
            <p>Reps: {workout.reps}</p>
            <p>Load: {workout.load} kg</p>
            <p className="text-slate-400">{formatDistanceToNow(new Date(workout.createdAt), {addSuffix : true})}</p>
            <div onClick={handleDelete} className="absolute top-0 right-0 m-2 p-2 text-slate-400 hover:text-slate-900 hover:bg-teal-500 rounded-md cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.25} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                </svg>
            </div>
        </div>
    )
}

export default  Workout