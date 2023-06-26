// init .env 
require("dotenv").config()
const express = require("express")

// create express app
const app = express()

// middleware
app.use((request, response, next) => {
    console.log(request.path, request.method)
    next()
})

// routes
app.get('/', (request, response) => {
    response.json({Message: "Hello World: Express JS"})
})

// listen for requests
app.listen(process.env.PORT, () => {
    console.log("listening to port 4000")
})

// get data from .env
process.env