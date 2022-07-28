const User = require('../models/User')
const passport = require('passport');
const passportConfig = require('../config/passport')
const JWT = require('jsonwebtoken');

const createUser = (req, res) => {
    User.findOne({username: req.body.username}, (err, user) => {
        if (err) {
            res.status(500).json({message: 'error has occured'})
            return
        }
        if (user) {
            res.status(400).json({message: 'User already exists'})
            return
        }
        else {
            User.create(req.body, (err, createdUser) => {
                if (err) {
                    res.status(400).json({message: 'error creating user'})
                }
                else {
                    res.status(200).json({message: 'account created'})
                }
            })
        }
    })
}
const deleteUser = (req, res) => {
    User.findByIdAndDelete(req.params.userId, (err, deletedUser) => {
        if (err) {
            res.status(400).json(err)
            return
        }
        res.json(deletedUser)
    })
}

module.exports = {
    createUser,
    deleteUser
}