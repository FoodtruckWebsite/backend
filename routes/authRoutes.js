const router = require('express').Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');

const secretOrKey = 'NomOnWheels'

const signToken = (userID) => {
    return jwt.sign({
        userID
    }, secretOrKey, {expiresIn: '24h'})
}

router.post('/login', passport.authenticate('local', {session: false}), (req,res) => {
    if (req.isAuthenticated()) {
        const id = req.user._id
        const token = signToken(id)
        // httpOnly prevents touching cookies with javascript
        // sameSite prevents cross site request forgery attacks
        res.cookie("access_token", token, {httpOnly: true, sameSite: true})
        res.status(200).json({isAuthenticated: true, user:{username: req.user.username, email: req.user.email, role: req.user.role}})
    }
})

router.get('/logout', passport.authenticate('jwt', {session: false}), (req,res) => {
    res.clearCookie("access_token")
    res.json({user:{username: "", role:''}, success: true})
})

router.get('/authenticated', passport.authenticate('jwt', {session: false}), (req,res) => {
    res.status(200).json({isAuthenticated: true, user: {username: req.user.username, role: req.user.role}})
})

module.exports = router