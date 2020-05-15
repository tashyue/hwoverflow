const jwt = require('jsonwebtoken');
const expressJwt = require('express-jwt');
require('dotenv').config()
const User = require("../models/user")


exports.signup = async (req, res) => {
    const userExists = await User.findOne({email: req.body.email})
    if(userExists) return res.status(403).json({
        error: "Email is in use"
    })
    const user = await new User(req.body)
    await user.save()
    res.status(200).json({message: "Signup success! Please sign in."})
};

exports.signin = (req, res) => {
    //find user based on email

    const {_id, email, password} = req.body
    User.findOne({email}, (err, user) => {
        //if error or no user
        if(err || !user ) {
            return res.status(401).json({
                error: "User with that email does not exists. Please signin."
            })
        }
        //if user found check email and pass match
        if(!user.authenticate(password)) {
            return res.status(401).json({
                error: "Email and/or password do not match"
            })
        }

        // generate token with user id and secret 

        const token = jwt.sign({_id: user._id}, process.env.JWT_SECRET)

        //persist token as 't' in cookie with expiry date 
        res.cookie("t", token, {expire: new Date() + 9999})
        //return response with user and token to frontend client

        const {_id, name, email} = user

        return res.json({token, user: {_id, email, name} })
    })
}

exports.signout = (req, res) => {
    res.clearCookie("t")
    return res.json({message: "Signout success"});
}

exports.requireSignin = expressJwt({
    //if token valid, express jwt appends user id in auth key to request obj
    secret: process.env.JWT_SECRET,
    userProperty: "auth"
})