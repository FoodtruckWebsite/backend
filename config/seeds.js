require('dotenv').config()
require('./connections')
const User = require('../models/User')
const Truck = require('../models/Truck')
const Owner = require('../models/Owner')



const user = [
    {
    avatar: '',
    username: 'Mango',
    email: 'mango@gmail.com',
    password: '123',
    owner: true
},
    {
    avatar: '',
    username: 'Tangerian',
    email: 'tangerian@gmail.com',
    password: '124',
    owner: false
},
]

const truck = [
    {
        name: 'Taco 2 Go',
        catagory: 'Mexican',
        tags: ['authentic', 'si', 'mucho gusto'],
        rating: 4.2,
        menu: [],
        priceRange: '$$',
        location: 'California',
        logo: ''
    }
]

const owner = [
    {
    avatar: '',
    username: 'pablo',
    email: 'pablo@gmail.com',
    password: '124',
    trucks: []
}
]
const userPromise = User.deleteMany({})
.then(() => {
    console.log('inserted User')
    return User.insertMany(user)
})
.catch(err => console.error(err))


const ownerPromise = Owner.deleteMany({})
.then(() => {
    console.log('inserted Owner')
    return Owner.insertMany(owner)
})
.catch(err => console.error(err))


const truckPromise = Truck.deleteMany({})
.then(() => {
    console.log('inserted Truck')
    return Truck.insertMany(truck)
}).catch(err => console.error(err))

Promise.all([userPromise,ownerPromise, truckPromise])
.finally(() => {
    console.log('Exiting')
    process.exit()
})
