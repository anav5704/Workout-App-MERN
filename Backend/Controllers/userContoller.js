const User = require("../Models/userModel")

// login user
const loginUser = async(req, res) => {
    res.json({message: "login user"})
}

// sign in user
const signupUser = async(req, res) => {
    const { email, password } = req.body
    try {
        const user = await User.signup(email, password)
        res.status(200).json({email, user})
    }
    catch(err){
        res.status(400).json({Error: err.message})
    }
}

module.exports = { loginUser, signupUser }