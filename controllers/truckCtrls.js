const Truck = require('../models/Truck')

const showAllTrucks = (req, res) => {
    Truck.find({}, (err, trucks) => {
        if (err) {
            res.status(400).json(err)
            return
        }
        console.log('Truck= ' + typeof(trucks))
        res.json(trucks)
    })
}
const truckDetails = (req, res) => {
    Truck.findById(req.params.truckId, (err, truck) => {
        if (err) {
            res.status(400).json(err)
            return
        }
        res.json(truck)
    })
}
const createTruck = (req, res) => {
    Truck.create(req.body, (err, createdTruck) => {
        if (err) {
            res.status(400).json(err)
            return
        }
        res.json(createdTruck)
    })
}
const updateTruck = (req, res) => {
    Truck.findByIdAndUpdate(req.params.truckId, req.body, (err, truck) => {
        if (err) {
            res.status(400).json(err)
            return
        }
        Truck.find({}, (error, updatedTruck) => {
            res.json(updatedTruck)
        })
    })
}
const deleteTruck = (req, res) => {
    Truck.findByIdAndDelete(req.params.truckId, (err, deletedTruck) => {
        if (err) {
            res.status(400).json(err)
            return
        }
        res.json(deletedTruck)
    })
}


module.exports = {
    showAllTrucks,
    truckDetails,
    createTruck,
    updateTruck,
    deleteTruck
}