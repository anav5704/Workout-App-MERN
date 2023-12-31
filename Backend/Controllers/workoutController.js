const Workout = require("../Models/workoutModel")
const mongoose = require("mongoose")

// all workouts
async function getAll(request, response){
    try {
        const user_id = request.user._id
        const workouts = await Workout.find({ user_id }).sort({createdAt: -1})
        response.status(200).json(workouts)
    }
    catch(err){
        response.status(400).json({error: err.message})
    }
}

// single workout
async function getOne(request, response){
    try {
        const {id} = await request.params

        if(mongoose.Types.ObjectId.isValid({_id : id})) {
            return response.status(404).json({Error: "Document Does not exits"})
        }

        const workout = await Workout.findById(id)

        if (!workout){
            return response.status(400).json({Error: "No Such Document"})
        }
        response.status(200).json(workout)
    }
    catch(err){
        response.status(400).json({error: err.message})
    }
}

// create new workout
async function create(request, response){
    const {title, reps, load}  = request.body;
    let emptyFields = []

    if (!title){
        emptyFields.push("title")
    }
    if (!reps){
        emptyFields.push("reps")
    }
    if (!load){
        emptyFields.push("load")
    }
    if(emptyFields.length > 0){
        return response.status(400).json({error: "Please fill in all the fields", emptyFields})
    }

    try {
        const user_id = request.user._id
        const workout = await Workout.create({title, reps, load, user_id})
        response.status(200).json(workout)
    }
    catch(err){
        response.status(400).json({error: err.message})
    }
}

// delete workout
async function deleteOne(request, response){
    try {
        const {id} = await request.params

        if(!mongoose.Types.ObjectId.isValid(id)) {
            return response.status(404).json({Error: "Document Does not exits"})
        }

        const workout = await Workout.findByIdAndDelete({_id: id})
        if (!workout){
            return response.status(400).json({Error: "No Such Document"})
        }

        response.status(200).json(workout)
    }
    catch(err){
        response.status(400).json({error: err.message})
    }
}

// update workout 
async function update(request, response){
    try{
        const {id} = await request.params

        if(!mongoose.Types.ObjectId.isValid(id)) {
            return response.status(404).json({Error: "Document Does not exits"})
        }

        const workout = await Workout.findByIdAndUpdate({_id: id},{...request.body})

        if (!workout){
            return response.status(400).json({Error: "No Such Document"})
        }
        response.status(200).json(workout)
    }
    catch(err){
        response.status(400).json({error: err.message})
    }
}

module.exports = { create, getOne, getAll, deleteOne, update }