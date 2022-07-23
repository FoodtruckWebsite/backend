const User = require('../models/User')

const index = (req, res) => {
    
}
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
    index,
    createUser,
    deleteUser
}