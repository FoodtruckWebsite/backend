// passport is authentication middleware
const passport = require('passport')

// LocalStrategy is how we are going to be authenticating 
const LocalStrategy = require('passport-local').Strategy

const JwtStrategy = require('passport-jwt').Strategy
const User = require('../models/User')

const cookieExtractor = (req, res) => {
    let token = null
    if (req && req.cookies) {
        token = req.cookies['access_token']
    }
    return token
}

// authorization
passport.use(new JwtStrategy({
    // extracts the token from the request
    // requires cookie-parser to work properly
    jwtFromRequest: cookieExtractor,
    // secretOrKey verifies the token is legitimate
    secretOrKey: 'NomOnWheels'
}, (payload, done) => {
    User.findById({_id: payload.userID}, (err,user) => {
        // checks if there's an error
        if (err) {
            return done(err, false)
        }
        // checks if the user exist
        if (user) {
            return done(null, user)
        }
        // there was no error and user doesn't exist
        else {
            return done(null, false)
        }
    })
}))

// authenticated local strategy using username and password
passport.use(new LocalStrategy((username, password, done) => {
    User.findOne({username}, (err, user) => {
        // something went wrong with database
        if (err) {
            return done(err)
        }
        // user doesn't exist
        if (!user) {
            return done(null, false)
        }
        // checks if password is correct
        user.comparePassword(password, done)
    })
}))
