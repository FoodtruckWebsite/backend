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
            const newUser = new User (req.body)
            newUser.save(err => {
                if (err) {
                    res.status(500).json({message: 'error has occured'})
                }
                else {
                    res.status(201).json({message: 'User created'})
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