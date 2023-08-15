const express = require("express")
const { create, getOne, getAll, deleteOne, update } = require("../Controllers/workoutController")
const { requireAuth } = require("../Middleware/requireAuth")

const router = express.Router()

router.use(requireAuth)

// get all workouts 
router.get("/", getAll)

// get single workout`
router.get("/:id", getOne)

// post single workout
router.post("/", create)

// delete single workout
router.delete("/:id", deleteOne)

// update single workout
router.patch("/:id", update)

module.exports = router

