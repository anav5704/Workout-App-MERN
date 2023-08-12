// init .env 
require("dotenv").config()

const express = require("express")
const mongoose = require("mongoose")
const workoutRoutes = require("./Routes/workout")
const userRoutes = require("./Routes/user")

// create express app
const app = express()

// middleware
app.use(express.json())
app.use((request, response, next) => {
    console.log(request.path, request.method)
    next()
})

// routes
app.use( "/api/workouts" ,workoutRoutes)
app.use( "/api/user/" ,userRoutes)

// connect to MongoDB

async function MongoExpressInit() {
    try {
        await mongoose.connect(process.env.MONGO)
        // listen for requests
        app.listen(process.env.PORT, () => {
            console.log("Connected to MongoDB && listening to port 4000")
        })
    }
    catch(err) {
        console.log(err)
    }
    
}
MongoExpressInit()

// get data from .env
process.env