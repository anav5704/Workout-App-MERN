import { WorkoutContext } from "../../context/context";
import { useContext } from "react";

export const useWorkoutsContext = () => {
    const context = useContext(WorkoutContext)
    if (!context) {
    throw Error("Context Broken") 
    }   
    return context
}