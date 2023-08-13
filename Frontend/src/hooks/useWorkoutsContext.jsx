import { WorkoutContext } from "../context/workoutContext";
import { useContext } from "react";

export const useWorkoutsContext = () => {
    const context = useContext(WorkoutContext)
    if (!context) {
    throw Error("Workouts Context Broken") 
    }   
    return context
}