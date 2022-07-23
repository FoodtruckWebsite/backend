const mongoose = require('mongoose');


const OwnerSchema = new mongoose.Schema({
    avatar: String,
    username: { type: String, required: true},
    email: { type: String, required: true},
    password: { type: String, required: true},
    trucks: [{type: mongoose.Schema.Types.ObjectId, ref: 'truck'}],


})

const Owner = mongoose.model('Owner', OwnerSchema)

module.exports = Owner