function Workout({workout}){
    return(
        <div className="border border-slate-600 p-2 rounded col-span-1">
            <h3 className="font-bold text-lg text-teal-500">{workout.title}</h3>
            <p>Reps: {workout.reps}</p>
            <p>Load: {workout.load} kg</p>
            <p>{workout.createdAt}</p>
        </div>
    )
}

export default  Workout