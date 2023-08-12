const express = require("express")
const router = express.Router()
const { loginUser, signupUser } = require0("../Controllers/userContoller.js")

// login route
router.post("/login", () => { })

// sign up route
router.post("/signup", () => { })

module.exports = router