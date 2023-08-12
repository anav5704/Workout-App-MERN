const User = require("../Models/userModel")

// login user
const loginUser = async(req, res) => {
    res.json({message: "login user"})
}

// sign in user
const signupUser = async(req, res) => {
    res.json({message: "signup user"})
}

module.exports = { loginUser, signupUser }