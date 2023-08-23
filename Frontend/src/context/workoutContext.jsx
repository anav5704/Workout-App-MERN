import { createContext, useReducer } from "react";

export const WorkoutContext = createContext()
export const workoutsReducer = (state, action) => {
    switch(action.type){
        case "SET_WORKOUTS": 
            return {
                workouts: action.payload
            }
        case "CREATE_WORKOUT":
            return {
                workouts: [action.payload, ...state.workouts]
            }
        case "DELETE_WORKOUT": 
            return {
                workouts: state.workouts.filter((w) => w._id !== action.payload._id)
            }
        case "UPDATE_WORKOUT":
            const updatedWorkouts = state.workouts.map((w) => {
                if (w._id === action.payload._id) {
                    return action.payload;
                }
                return w;
            });
            return {
                workouts: updatedWorkouts
            };
        default:
            return state
    }
}
export const  WorkoutContextProvider = ({ children }) => {
    const[state, dispatch] = useReducer(workoutsReducer, {workouts: []})
    return (
       < WorkoutContext.Provider value={{...state, dispatch}}>
       { children }
       </WorkoutContext.Provider>
    )
}