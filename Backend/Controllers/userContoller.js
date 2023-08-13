const User = require("../Models/userModel")
const jwt = require("jsonwebtoken")

// json web token creator
const createToken = (_id) => {
    return jwt.sign({_id}, process.env.SECRET, {expiresIn: '3d'})
}

// login user
const loginUser = async(req, res) => {
    const { email, password } = req.body
    try {
        const user = await User.login(email, password)
        // create jwt token
        const token = createToken(user._id)
        res.status(200).json({email, token})
    }
    catch(err){
        res.status(400).json({Error: err.message})
    }
}

// sign up user
const signupUser = async(req, res) => {
    const { email, password } = req.body
    try {
        const user = await User.signup(email, password)
        // create jwt token
        const token = createToken(user._id)
        res.status(200).json({email, token})
    }
    catch(err){
        res.status(400).json({Error: err.message})
    }
}

module.exports = { loginUser, signupUser }