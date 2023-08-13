const express = require("express")
const router = express.Router()
const { loginUser, signupUser } = require("../Controllers/userContoller.js")

// login route
router.post("/login", loginUser)

// sign up route
router.post("/signup", signupUser)

module.exports = router