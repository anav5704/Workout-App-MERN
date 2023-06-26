const express = require("express")
const router = express.Router()

// get all workouts 
router.get("/", (request, response) => {
    response.json({Msg: "Get all workouts"})
})

// get single workout
router.get("/:id", (request, response) => {
    response.json({Msg: "Get a workout"})
})

// post single workout
router.post("/", (request, response) => {
    response.json({Msg: "Post a new workout"})
})

// delete single workout
router.delete("/:id", (request, response) => {
    response.json({Msg: "Delete a workout"})
})

// update single workout
router.patch("/:id", (request, response) => {
    response.json({Msg: "Update a workout"})
})

module.exports = router