const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    avatar: String,
    username:  {type: String, required: true},
    email:  {type: String, required: true},
    password:  {type: String, required: true},
    owner: {type: Boolean, default: false, required: true}
})

const User = mongoose.model('User', UserSchema)

module.exports = User