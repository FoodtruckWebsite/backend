const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
    avatar: String,
    username:  {type: String, required: true},
    email:  {type: String, required: true},
    password:  {type: String, required: true},
    owner: {type: Boolean, default: false, required: true}
})

UserSchema.pre('save', function(next) {
    const user = this
    if(!user.isModified('password'))
        return next()
    bcrypt.hash(user.password, 10, (err, passwordHash) => {
        if (err) {
            return next(err)
        }
        user.password = passwordHash
        next()
    })
})

UserSchema.methods.comparePassword = function(password, cb) {
    const user = this
    bcrypt.compare(password, user.password, (err, isMatch) => {
        if (err) {
            return cb(err)
        }
        else {
            if(!isMatch) {
                return cb(null, isMatch)
        }
        return cb(null, user)
    }})
}

const User = mongoose.model('User', UserSchema)

module.exports = User