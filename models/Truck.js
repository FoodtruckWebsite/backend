const mongoose = require('mongoose');

const MenuSchema = new mongoose.Schema({
    itemName: String,
    cost: Number,
    itemImage: String,
    description: String,
})

const TruckSchema = new mongoose.Schema({
    name: String,
    category: String,
    tags: [],
    menu: [MenuSchema],
    rating: Number,
    priceRange: String,
    location: String,
    logo: String
})

const Truck = mongoose.model('Truck', TruckSchema)

module.exports = Truck