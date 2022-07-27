const User = require('../models/User')
const passport = require('passport');
const passportConfig = require('../config/passport')
const JWT = require('jsonwebtoken');

const createUser = (req, res) => {
    User.create(req.body, (err, createdUser) => {
        if (err) {
            res.status(400).json(err)
            return
        }
        res.json(createdUser)
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