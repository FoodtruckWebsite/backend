const router = require('express').Router();
const User = require('../models/User')
const passport = require('passport');
const passportConfig = require('../config/passport')
const JWT = require('jsonwebtoken');

const secretOrKey = 'NomOnWheels'

function signToken(userID) {
    return JWT.sign({
    // never put any sensitive information in payload
        // who issued the jwt token
        iss: 'admin',
        // who is the jwt token for
        user: userID
    }, secretOrKey, { expiresIn: '24h'})
}

router.post('/login', passport.authenticate('local', {session: false}), (req,res) => {
    if (req.isAuthenticated()) {
        const token = signToken(req.user._id)
        // httpOnly prevents touching cookies with javascript
        // sameSite prevents cross site request forgery attacks
        res.cookie("access_token", token, {httpOnly: true, sameSite: true})
        res.status(200).json({isAuthenticated: true, user: req.user})
    }
})

router.get('/logout', passport.authenticate('jwt', {session: false}), (req,res) => {
    console.log('logged out')
    res.clearCookie("access_token")
    res.json({user:{username: "", owner:""}, success: true})
})

module.exports = router