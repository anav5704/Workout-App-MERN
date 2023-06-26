// init .env 
require("dotenv").config()

const express = require("express")
const routes = require("./Routes/workout")

// create express app
const app = express()

// middleware
app.use(express.json())
app.use((request, response, next) => {
    console.log(request.path, request.method)
    next()
})

// routes
app.use( "/api/workouts" ,routes)

// listen for requests
app.listen(process.env.PORT, () => {
    console.log("listening to port 4000")
})

// get data from .env
process.env