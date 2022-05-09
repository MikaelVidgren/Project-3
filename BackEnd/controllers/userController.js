const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")
const asyncHandler = require("express-async-handler")
const User = require("../models/userModel")


/* Register new user with POST /api/users */
const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body
    //check empty fields
     if (!name || !email || !password) {
        res.status(400)
        throw new Error("add all fields")
    } 
    //check if user exists
    const userExists = await User.findOne({email})

    if(userExists) {
        res.status(400)
        throw new Error("already exists")
    }

    //HASH encrytp password with bcryptjs
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    //create user
    const user = await User.create ({
        name,
        email,
        password: hashedPassword
    })

    if(user) {
        res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id)
        })
    } else {
        res.status(400)
        throw new Error("Invalid data!")
    } 

    
})

/* AUTH user with POST /api/login */
const loginUser = asyncHandler(async (req, res) => {
    const {email, password} = req.body

    const user = await User.findOne({email})
    //to check the hashed password when logging in
    if (user && (await bcrypt.compare(password, user.password))) {
        res.json ({
            _id: user.id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id)
        })
    } else  {
        res.status(400)
        throw new Error("Invalid credidentials")
    }

})

/* user data with GET /api/users/me */
const getMe = asyncHandler(async (req, res) => {
    const {_id, name, email} = await User.findById(req.user.id)

    res.status(200).json({
        id:_id,
        name,
        email,
        
    })
})

//Generate JW Token
const generateToken = (id) => {
    //sign new token with id and secret and it will expire in 30 days!
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: "30d",
    })
}

module.exports = {
    registerUser,
    loginUser,
    getMe,
}